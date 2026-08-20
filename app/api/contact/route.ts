import { NextResponse } from "next/server";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  selectedPackage?: unknown;
  message?: unknown;
  website?: unknown;
  websiteConfirm?: unknown;
  startedAt?: unknown;
};

const RESEND_BATCH_URL = "https://api.resend.com/emails/batch";
const RESEND_API_KEY_PATTERN = /^re_[A-Za-z0-9_-]+$/;
const FROM_EMAIL_PATTERN = /^[\x20-\x7E]+<[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+>$/;
const CONTACT_OWNER_EMAIL = "yybuilds.contact@gmail.com";
const submissionWindows = new Map<string, { count: number; resetAt: number }>();
const MINIMUM_SUBMISSION_TIME_MS = 750;

function isRateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const current = submissionWindows.get(key);
  if (!current || current.resetAt <= now) {
    submissionWindows.set(key, { count: 1, resetAt: now + 10 * 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20_000) {
      return NextResponse.json({ error: "This request is too large." }, { status: 413 });
    }

    let body: ContactRequest;
    try {
      body = (await request.json()) as ContactRequest;
    } catch {
      return NextResponse.json({ error: "Invalid project request." }, { status: 400 });
    }
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const phone = cleanText(body.phone, 40) || "Not provided";
    const message = cleanText(body.message, 5000);
    const selectedService = cleanText(body.service, 160) || cleanText(body.selectedPackage, 160) || "Not sure yet";
    const website = cleanText(body.website, 300);
    const honeypot = cleanText(body.websiteConfirm, 200);
    const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

    if (honeypot || !startedAt || Date.now() - startedAt < MINIMUM_SUBMISSION_TIME_MS) {
      return NextResponse.json({ error: "Please take a moment and try again." }, { status: 400 });
    }

    if (!name || !isValidEmail(email) || !message) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and project description." },
        { status: 400 }
      );
    }

    if (isRateLimited(request)) {
      return NextResponse.json({ error: "Too many requests. Please wait a few minutes and try again." }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !RESEND_API_KEY_PATTERN.test(apiKey) || !fromEmail || !FROM_EMAIL_PATTERN.test(fromEmail)) {
      console.error("Contact email delivery is not configured.");
      return NextResponse.json(
        { error: "Email delivery is temporarily unavailable." },
        { status: 503 }
      );
    }

    const submittedAt = new Date();
    const submittedAtLabel = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      timeZone: "Europe/Brussels",
    }).format(submittedAt);

    const ownerMessage = [
      "New YY Builds project request",
      "",
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      `Phone: ${phone}`,
      `Website: ${website || "Not provided"}`,
      `Selected service: ${selectedService}`,
      `Submitted: ${submittedAtLabel}`,
      `Submitted (ISO): ${submittedAt.toISOString()}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const customerMessage = [
      `Hi ${name},`,
      "",
      "Thanks for your project request. YY Builds has received it and will review the details before getting back to you.",
      "",
      `Selected service: ${selectedService}`,
      `Website: ${website || "Not provided"}`,
      "",
      "Your project details:",
      message,
      "",
      "YY Builds",
    ].join("\n");

    const emailResponse = await fetch(RESEND_BATCH_URL, {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${crypto.randomUUID()}`,
      },
      body: JSON.stringify([
        {
          from: fromEmail,
          to: [CONTACT_OWNER_EMAIL],
          reply_to: email,
          subject: `New project request — ${selectedService}`,
          text: ownerMessage,
        },
        {
          from: fromEmail,
          to: [email],
          reply_to: CONTACT_OWNER_EMAIL,
          subject: "We received your YY Builds project request",
          text: customerMessage,
        },
      ]),
    });

    if (!emailResponse.ok) {
      console.error("Resend contact delivery failed.", emailResponse.status);
      return NextResponse.json(
        { error: "Your request could not be delivered. Please try again." },
        { status: 502 }
      );
    }

    const result = (await emailResponse.json()) as { data?: Array<{ id?: string }> };
    if (!Array.isArray(result.data) || result.data.length !== 2 || result.data.some((item) => !item.id)) {
      console.error("Resend contact delivery returned an unexpected response.");
      return NextResponse.json(
        { error: "Your request could not be delivered. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been received.",
    });
  } catch (error) {
    console.error(
      "Contact request failed.",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
