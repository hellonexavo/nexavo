"use client";

import { useEffect, useRef, useState } from "react";
import type { BusinessService } from "@/config/business";
import { BookingIcon } from "@/components/booking/icons";

type DateOption = { value: string; day: string; date: string; label: string };
type TimeSlot = { time: string; available: boolean };
type Details = { name: string; email: string; phone: string; notes: string };

const steps = ["Service", "Date", "Time", "Details", "Review"];
const emptyDetails: Details = { name: "", email: "", phone: "", notes: "" };

export function BookingFlow({ businessName, cancellationPolicy, services, dates, timeSlots }: {
  businessName: string;
  cancellationPolicy: string;
  services: BusinessService[];
  dates: readonly DateOption[];
  timeSlots: readonly TimeSlot[];
}) {
  const activeServices = services.filter((service) => service.active);
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState(activeServices[0]?.id ?? "");
  const [date, setDate] = useState(dates[2]?.value ?? dates[0]?.value ?? "");
  const [time, setTime] = useState(timeSlots.find((slot) => slot.available)?.time ?? "");
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [confirmedBookingId, setConfirmedBookingId] = useState("");
  const [confirmationEmailSent, setConfirmationEmailSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [website, setWebsite] = useState("");
  const formStartedAt = useRef(0);
  const selected = activeServices.find((service) => service.id === serviceId) ?? activeServices[0];
  const selectedDate = dates.find((item) => item.value === date);
  const canContinue = (() => {
    if (step === 0) return Boolean(selected);
    if (step === 1) return Boolean(selectedDate);
    if (step === 2) return Boolean(timeSlots.find((slot) => slot.time === time && slot.available));
    if (step === 3) return Boolean(details.name.trim() && /^\S+@\S+\.\S+$/.test(details.email) && details.phone.trim());
    return true;
  })();

  useEffect(() => { formStartedAt.current = Date.now(); }, []);

  function resetBooking() {
    setStep(0);
    setDetails(emptyDetails);
    setConfirmedBookingId("");
    setConfirmationEmailSent(false);
    setError("");
    setWebsite("");
    formStartedAt.current = Date.now();
  }

  async function confirmBooking() {
    if (!selected || !selectedDate || !canContinue) return;
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, serviceId, date, time, website, startedAt: formStartedAt.current }),
      });
      const result = await response.json() as { error?: string; booking?: { reference: string }; emailSent?: boolean };
      if (!response.ok || !result.booking) throw new Error(result.error || "We couldn't confirm your booking. Please try again.");
      setConfirmedBookingId(result.booking.reference);
      setConfirmationEmailSent(result.emailSent === true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We couldn't confirm your booking. Please try again.");
    } finally { setSubmitting(false); }
  }

  if (!selected) return <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">No services are currently available.</div>;

  if (confirmedBookingId) return <section className="booking-enter flex min-h-[620px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_16px_50px_rgba(31,42,38,.06)] sm:p-10">
    <div className="grid h-16 w-16 place-items-center rounded-full bg-[#e8f4ef] text-[#1f705a]"><BookingIcon name="check" className="h-8 w-8" /></div>
    <p className="mt-7 text-xs font-semibold uppercase tracking-[.18em] text-[#29705d]">Booking confirmed</p>
    <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-slate-950">You&apos;re all set.</h2>
    <p className="mt-3 max-w-md leading-7 text-slate-500">{confirmationEmailSent ? `Your appointment at ${businessName} is reserved, and the confirmation email was sent successfully.` : `Your appointment at ${businessName} is reserved. We couldn't send the confirmation email, but your booking is safely recorded for this demo session.`}</p>
    <div className="mt-8 w-full max-w-md rounded-xl border border-slate-200 bg-slate-50 p-5 text-left"><div className="flex items-start justify-between gap-4"><div><p className="font-semibold text-slate-900">{selected.name}</p><p className="mt-2 text-sm text-slate-500">{selectedDate?.label} · {time}</p><p className="mt-1 text-sm text-slate-500">{selected.durationMinutes} min · ${selected.price}</p></div><span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">{confirmedBookingId}</span></div></div>
    <p className="mt-5 max-w-sm text-xs leading-5 text-slate-400">{cancellationPolicy}</p>
    <button onClick={resetBooking} className="mt-7 text-sm font-semibold text-[#246553]">Book another appointment</button>
  </section>;

  return <section className="booking-enter overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(31,42,38,.06)]">
    <StepProgress current={step} />
    <div className="grid lg:grid-cols-[1fr_240px]">
      <form onSubmit={(event) => { event.preventDefault(); if (step === 4) void confirmBooking(); else if (canContinue) { setError(""); setStep((current) => Math.min(4, current + 1)); } }} className="min-w-0 p-5 sm:p-8">
        <label className="sr-only" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
        {step === 0 && <StepSection eyebrow="Step 1 of 5" title="Choose a service" description="Select the appointment that best fits your needs."><div className="space-y-3">{activeServices.map((service) => <button key={service.id} type="button" aria-pressed={serviceId === service.id} onClick={() => setServiceId(service.id)} className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${serviceId === service.id ? "border-[#347662] bg-[#f3f8f6] ring-1 ring-[#347662]" : "border-slate-200 hover:border-slate-300"}`}><span><span className="block font-semibold text-slate-900">{service.name}</span><span className="mt-1 block text-sm text-slate-500">{service.description} · {service.durationMinutes} min</span></span><span className="ml-4 font-semibold text-slate-800">${service.price}</span></button>)}</div></StepSection>}
        {step === 1 && <StepSection eyebrow="Step 2 of 5" title="Select a date" description="All times are shown in the business timezone."><div className="mb-4 flex items-center justify-between"><p className="font-semibold text-slate-800">August 2026</p><span className="text-xs text-slate-400">6 days available</span></div><div className="grid grid-cols-3 gap-2 sm:grid-cols-6">{dates.map((item) => <button key={item.value} type="button" aria-pressed={date === item.value} aria-label={item.label} onClick={() => setDate(item.value)} className={`rounded-xl border px-3 py-3 text-center ${date === item.value ? "border-[#174b3e] bg-[#174b3e] text-white" : "border-slate-200 text-slate-700 hover:border-slate-300"}`}><span className="block text-[11px] uppercase opacity-70">{item.day}</span><span className="mt-1 block text-lg font-semibold">{item.date}</span></button>)}</div></StepSection>}
        {step === 2 && <StepSection eyebrow="Step 3 of 5" title="Choose a time" description={`Available times for ${selectedDate?.label ?? "your selected date"}.`}><div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{timeSlots.map((slot) => <button key={slot.time} type="button" disabled={!slot.available} aria-pressed={time === slot.time} onClick={() => setTime(slot.time)} className={`rounded-lg border px-3 py-3 text-sm font-medium ${!slot.available ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300 line-through" : time === slot.time ? "border-[#347662] bg-[#e9f3ef] text-[#195c4b]" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>{slot.time}</button>)}</div><p className="mt-4 text-xs text-slate-400">Unavailable times are already reserved.</p></StepSection>}
        {step === 3 && <StepSection eyebrow="Step 4 of 5" title="Your details" description="We'll use these details for your appointment confirmation."><div className="grid gap-4 sm:grid-cols-2"><Field id="booking-name" label="Full name" value={details.name} autoComplete="name" required onChange={(value) => setDetails({ ...details, name: value })} /><Field id="booking-email" label="Email" type="email" value={details.email} autoComplete="email" required onChange={(value) => setDetails({ ...details, email: value })} /><Field id="booking-phone" label="Phone number" type="tel" value={details.phone} autoComplete="tel" required onChange={(value) => setDetails({ ...details, phone: value })} /><div className="sm:col-span-2"><Field id="booking-notes" label="Notes (optional)" value={details.notes} textarea onChange={(value) => setDetails({ ...details, notes: value })} /></div></div></StepSection>}
        {step === 4 && <StepSection eyebrow="Step 5 of 5" title="Review your booking" description="Make sure everything looks right before confirming."><div className="divide-y divide-slate-100 rounded-xl border border-slate-200"><ReviewRow label="Service" value={`${selected.name} · ${selected.durationMinutes} min`} edit={() => setStep(0)} /><ReviewRow label="Date & time" value={`${selectedDate?.label} at ${time}`} edit={() => setStep(1)} /><ReviewRow label="Customer" value={`${details.name} · ${details.email} · ${details.phone}`} edit={() => setStep(3)} />{details.notes && <ReviewRow label="Notes" value={details.notes} edit={() => setStep(3)} />}</div><p className="mt-5 text-xs leading-5 text-slate-400">By confirming, you agree to the cancellation policy: {cancellationPolicy}</p></StepSection>}
        {error && <p role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6"><button type="button" onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }} className={`text-sm font-semibold text-slate-500 ${step === 0 ? "invisible" : ""}`}>Back</button><button type="submit" disabled={!canContinue || submitting} className="flex min-w-36 items-center justify-center gap-2 rounded-xl bg-[#174b3e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103f34] disabled:cursor-not-allowed disabled:opacity-50">{submitting ? "Confirming…" : step === 4 ? "Confirm booking" : "Continue"}{!submitting && <BookingIcon name="arrow" className="h-4 w-4" />}</button></div>
      </form>
      <BookingSummary service={selected} date={selectedDate?.label} time={time} />
    </div>
  </section>;
}

function StepProgress({ current }: { current: number }) { return <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-8"><ol aria-label="Booking progress" className="flex items-center gap-2">{steps.map((label, index) => <li key={label} className="flex min-w-0 flex-1 items-center gap-2"><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold ${index <= current ? "bg-[#174b3e] text-white" : "bg-slate-200 text-slate-500"}`}>{index < current ? "✓" : index + 1}</span><span className={`hidden truncate text-xs font-medium sm:block ${index === current ? "text-slate-800" : "text-slate-400"}`}>{label}</span>{index < steps.length - 1 && <span className={`ml-auto h-px flex-1 ${index < current ? "bg-[#7aa496]" : "bg-slate-200"}`} />}</li>)}</ol></div>; }
function StepSection({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) { return <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#43806f]">{eyebrow}</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em] text-slate-950">{title}</h2><p className="mt-2 mb-7 text-sm text-slate-500">{description}</p>{children}</div>; }
function Field({ id, label, textarea, onChange, ...props }: { id: string; label: string; textarea?: boolean; value: string; type?: string; required?: boolean; autoComplete?: string; onChange: (value: string) => void }) { const style = "mt-2 w-full rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#347662] focus:ring-2 focus:ring-[#347662]/10 placeholder:text-slate-400"; return <label htmlFor={id} className="text-sm font-medium text-slate-700">{label}{textarea ? <textarea id={id} value={props.value} onChange={(event) => onChange(event.target.value)} rows={3} maxLength={2000} className={`${style} resize-none`} placeholder="Anything we should know?" /> : <input id={id} {...props} onChange={(event) => onChange(event.target.value)} className={style} placeholder={label} />}</label>; }
function ReviewRow({ label, value, edit }: { label: string; value: string; edit: () => void }) { return <div className="flex items-start justify-between gap-4 p-4"><div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p><p className="mt-1 text-sm font-medium leading-6 text-slate-700">{value}</p></div><button type="button" onClick={edit} className="text-xs font-semibold text-[#246553]">Edit</button></div>; }
function BookingSummary({ service, date, time }: { service: BusinessService; date?: string; time: string }) { return <aside className="border-t border-slate-100 bg-[#f8faf9] p-5 lg:border-t-0 lg:border-l lg:p-6"><p className="text-xs font-semibold uppercase tracking-[.14em] text-[#43806f]">Your booking</p><p className="mt-4 font-semibold text-slate-900">{service.name}</p><dl className="mt-4 space-y-3 text-sm"><div><dt className="text-xs text-slate-400">Date</dt><dd className="mt-1 text-slate-600">{date ?? "Select a date"}</dd></div><div><dt className="text-xs text-slate-400">Time</dt><dd className="mt-1 text-slate-600">{time || "Select a time"}</dd></div><div className="flex justify-between border-t border-slate-200 pt-4"><dt className="text-slate-500">Due at appointment</dt><dd className="font-semibold text-slate-900">${service.price}</dd></div></dl></aside>; }
