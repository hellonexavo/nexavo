import { bookingDates, bookingTimeSlots, businessConfig } from "@/config/business";
import { BookingConflictError, bookingRepository } from "@/lib/bookings/repository";
import type { Booking, NotificationStatus } from "@/models/booking";

const EMAIL_API_URL = "https://api.resend.com/emails/batch";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_KEY_PATTERN = /^re_[A-Za-z0-9_-]+$/;
const FROM_EMAIL_PATTERN = /^[\x20-\x7E]+<[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+>$/;

type BookingRequest = { name?: unknown; email?: unknown; phone?: unknown; serviceId?: unknown; date?: unknown; time?: unknown; notes?: unknown; website?: unknown; startedAt?: unknown };
const submissionWindows = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = submissionWindows.get(key);
  if (!current || current.resetAt <= now) {
    submissionWindows.set(key, { count: 1, resetAt: now + 10 * 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 8;
}

function clean(value: unknown, maxLength: number) { return typeof value === "string" ? value.trim().slice(0, maxLength) : ""; }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character); }
function detailRow(label: string, value: string) { return `<tr><td style="padding:8px 16px 8px 0;color:#64748b;vertical-align:top">${label}</td><td style="padding:8px 0;color:#17201d;font-weight:600">${escapeHtml(value)}</td></tr>`; }
function emailShell(preheader: string, title: string, intro: string, rows: string) { return `<!doctype html><html><body style="margin:0;background:#f5f6f8;font-family:Arial,sans-serif;color:#17201d"><span style="display:none">${escapeHtml(preheader)}</span><div style="padding:32px 16px"><div style="max-width:600px;margin:auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden"><div style="padding:28px 32px;background:#174b3e;color:#fff"><div style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;opacity:.8">YY Booking by YY Builds</div><h1 style="margin:10px 0 0;font-size:26px">${escapeHtml(title)}</h1></div><div style="padding:28px 32px"><p style="margin:0 0 20px;line-height:1.6;color:#475569">${escapeHtml(intro)}</p><table style="width:100%;border-collapse:collapse;font-size:15px">${rows}</table></div></div></div></body></html>`; }

async function updateNotification(booking: Booking, status: NotificationStatus) {
  try { return await bookingRepository.updateNotificationStatus(booking.id, status) ?? booking; } catch { return booking; }
}

export async function POST(request: Request) {
  let body: BookingRequest;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid booking request." }, { status: 400 }); }

  const honeypot = clean(body.website, 200);
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (honeypot || !startedAt || Date.now() - startedAt < 750) return Response.json({ success: true }, { status: 201 });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const serviceId = clean(body.serviceId, 50);
  const dateValue = clean(body.date, 10);
  const time = clean(body.time, 20);
  const notes = clean(body.notes, 2000);
  const service = businessConfig.services.find((item) => item.id === serviceId && item.active);
  const day = bookingDates.find((item) => item.value === dateValue);
  const timeSlot = bookingTimeSlots.find((item) => item.time === time && item.available);
  if (!name || !EMAIL_PATTERN.test(email) || !phone || !service || !day || !timeSlot) return Response.json({ error: "Please check your booking details and try again." }, { status: 400 });
  if (isRateLimited(request)) return Response.json({ error: "Too many booking attempts. Please wait a few minutes and try again." }, { status: 429 });

  let booking: Booking;
  try {
    booking = await bookingRepository.create({ businessId: businessConfig.id, customer: { fullName: name, email, phone }, serviceId: service.id, serviceName: service.name, serviceDurationMinutes: service.durationMinutes, price: service.price, date: day.value, time, notes: notes || undefined });
  } catch (error) {
    if (error instanceof BookingConflictError) return Response.json({ error: "That time slot was just booked. Please choose another time." }, { status: 409 });
    return Response.json({ error: "We couldn't save your booking. Please try again shortly." }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL;
  const notificationEmail = process.env.BOOKING_NOTIFICATION_EMAIL ?? businessConfig.bookingEmail;
  if (!apiKey || !RESEND_API_KEY_PATTERN.test(apiKey) || !from || !FROM_EMAIL_PATTERN.test(from)) {
    const updatedBooking = await updateNotification(booking, "Failed");
    console.error(`Booking ${booking.reference} was saved, but booking email is not configured.`);
    return Response.json({ success: true, booking: updatedBooking, emailSent: false }, { status: 201 });
  }

  const commonRows = [detailRow("Service", service.name), detailRow("Date", day.label), detailRow("Time", time)].join("");
  const businessRows = [detailRow("Customer full name", name), detailRow("Email", email), detailRow("Phone", phone), commonRows, notes ? detailRow("Notes", notes) : ""].join("");
  const customerRows = `${commonRows}${notes ? detailRow("Notes", notes) : ""}`;

  try {
    const response = await fetch(EMAIL_API_URL, {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `booking-confirmation/${booking.id}` },
      body: JSON.stringify([
        { from, to: [notificationEmail], reply_to: email, subject: `New booking: ${service.name} — ${name}`, html: emailShell("A new appointment was booked.", "New booking confirmed", "A customer has confirmed an appointment.", businessRows) },
        { from, to: [email], reply_to: notificationEmail, subject: `Your ${businessConfig.name} booking is confirmed`, html: emailShell("Your appointment is confirmed.", "You're all set.", `Hi ${name}, your appointment at ${businessConfig.name} has been reserved.`, customerRows) },
      ]),
    });
    if (!response.ok) throw new Error(`Resend returned ${response.status}.`);
    const result = await response.json() as { data?: Array<{ id?: string }> };
    if (!Array.isArray(result.data) || result.data.length !== 2 || result.data.some((item) => !item.id)) throw new Error("Resend returned an unexpected response.");
    return Response.json({ success: true, booking: await updateNotification(booking, "Sent"), emailSent: true }, { status: 201 });
  } catch (emailError) {
    console.error(`Booking ${booking.reference} was saved, but Resend delivery failed.`, emailError instanceof Error ? emailError.message : "Unknown error");
    return Response.json({ success: true, booking: await updateNotification(booking, "Failed"), emailSent: false }, { status: 201 });
  }
}
