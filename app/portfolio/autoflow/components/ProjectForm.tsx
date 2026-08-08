"use client";

import { FormEvent, useState } from "react";

const bookingServices = [
  "Oil & Filter Service",
  "Scheduled Major Service",
  "Air-Conditioning Service",
  "Computer Diagnostics",
  "Full Vehicle Inspection",
  "Brake Safety Inspection",
  "Front Pads & Discs",
  "Tyre Fitting & Balance",
  "Four-Wheel Alignment",
  "Battery Health Check",
  "Electrical Fault Finding",
  "Timing Belt Replacement",
  "Cooling-System Diagnosis",
  "Clutch Assessment",
  "Other / not sure",
];

type FormStatus = "idle" | "sending" | "success" | "validation" | "error";

export default function ProjectForm({ selectedServices = [] }: { selectedServices?: string[] }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("validation");
      setErrorMessage("Please complete all required booking-enquiry fields.");
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      setStatus("sending");
      setErrorMessage("");

      const response = await fetch(
        "https://formsubmit.co/ajax/hello.nexavo@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            estimateServices: selectedServices.join(", ") || "None selected",
            _subject: "New Autoflow service booking enquiry",
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean | string; message?: string }
        | null;
      const confirmed = result?.success === true || result?.success === "true";

      if (!response.ok || !confirmed) {
        throw new Error(
          result?.message || "The enquiry service rejected this request.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => {
        if (status === "validation" || status === "error") {
          setStatus("idle");
          setErrorMessage("");
        }
      }}
      noValidate
      aria-busy={status === "sending"}
      className="rounded-[28px] border border-white/10 bg-[#0a0d10] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:p-8"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d8ff3e]">
            Existing enquiry delivery
          </p>
          <h3 className="mt-2 text-2xl font-black uppercase">
            Vehicle & appointment details
          </h3>
        </div>
        <span className="w-fit rounded-md bg-white/[0.06] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white/45">
          Enquiry · not confirmed
        </span>
      </div>

      {selectedServices.length > 0 && (
        <div className="mt-6 rounded-xl border border-[#d8ff3e]/20 bg-[#d8ff3e]/5 p-4 text-sm leading-6 text-white/55">
          <strong className="text-[#d8ff3e]">Estimate selection:</strong>{" "}
          {selectedServices.join(", ")}
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Customer name
          <input required autoComplete="name" name="name" type="text" placeholder="Alex Morgan" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal outline-none placeholder:text-white/20 focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
        <label className="text-sm font-bold">
          Email
          <input required autoComplete="email" name="email" type="email" placeholder="alex@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal outline-none placeholder:text-white/20 focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
        <label className="text-sm font-bold">
          Phone
          <input required autoComplete="tel" name="phone" type="tel" placeholder="+32 470 00 00 00" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal outline-none placeholder:text-white/20 focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
        <label className="text-sm font-bold">
          Vehicle registration
          <input required autoCapitalize="characters" name="registration" type="text" placeholder="1-ABC-234" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal uppercase outline-none placeholder:text-white/20 focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
        <label className="text-sm font-bold">
          Preferred date
          <input required name="preferredDate" type="date" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal outline-none focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
        <label className="text-sm font-bold">
          Preferred time
          <select required name="preferredTime" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1115] px-4 py-3.5 font-normal outline-none focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15">
            <option value="" disabled>Select a time</option>
            <option>Morning · 07:30–10:00</option>
            <option>Midday · 10:00–13:00</option>
            <option>Afternoon · 13:00–16:00</option>
            <option>Late afternoon · 16:00–18:00</option>
          </select>
        </label>
        <label className="text-sm font-bold sm:col-span-2">
          Primary service
          <select required name="service" defaultValue="" className="mt-2 w-full rounded-xl border border-white/10 bg-[#0d1115] px-4 py-3.5 font-normal outline-none focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15">
            <option value="" disabled>Select a service</option>
            {bookingServices.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold sm:col-span-2">
          Problem description
          <textarea required name="message" rows={5} placeholder="Describe the symptoms, warning lights, noises, or service required." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3.5 font-normal outline-none placeholder:text-white/20 focus:border-[#d8ff3e] focus:ring-2 focus:ring-[#d8ff3e]/15" />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="mt-6 flex w-full items-center justify-center rounded-lg bg-[#d8ff3e] px-6 py-4 font-bold text-black hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ff3e] disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending enquiry…" : "Send booking enquiry →"}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && <p role="status" className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-200">Your enquiry was sent successfully. This does not confirm an appointment; the workshop would contact you to confirm availability.</p>}
        {(status === "validation" || status === "error") && <p role="alert" className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-200">{errorMessage}</p>}
      </div>
    </form>
  );
}
