"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const services = [
  "Routine check-up",
  "Emergency appointment",
  "Dental implants",
  "Teeth whitening",
  "Clear aligners",
  "Children's dentistry",
];

export default function AppointmentForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [simulateError, setSimulateError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // DEMO ONLY: simulate a clinic response. No form data is transmitted or stored.
    timeoutRef.current = setTimeout(() => {
      setStatus(simulateError ? "error" : "success");
    }, 900);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="appointment-form-title"
      className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-8"
    >
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Secure appointment request
          </p>
          <h3 id="appointment-form-title" className="mt-2 text-2xl font-semibold">
            Tell us how we can help.
          </h3>
        </div>
        <p className="text-xs text-slate-500">Demo form · no data is sent</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            required
            autoComplete="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Phone or email
          <input
            required
            autoComplete="email"
            name="contact"
            type="text"
            placeholder="+1 555 000 0000 or you@example.com"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Service
          <select
            required
            defaultValue=""
            name="service"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Preferred date
          <input
            required
            name="preferredDate"
            type="date"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Share any symptoms, questions, or accessibility needs."
          className="mt-2 w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
        />
      </label>

      <details className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <summary className="cursor-pointer font-medium text-slate-700">
          Demo state controls
        </summary>
        <label className="mt-3 flex items-center gap-3">
          <input
            checked={simulateError}
            onChange={(event) => setSimulateError(event.target.checked)}
            type="checkbox"
            className="h-4 w-4 accent-cyan-700"
          />
          Simulate an unavailable booking service
        </label>
      </details>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-3">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
            Checking availability…
          </span>
        ) : (
          "Request appointment"
        )}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <div role="status" className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            <p className="font-semibold">Appointment request received.</p>
            <p>This is a demo confirmation. No personal data was sent or stored.</p>
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-rose-900">
            <p className="font-semibold">We could not check availability.</p>
            <p>Try again or use the demo clinic phone number below.</p>
          </div>
        )}
      </div>
    </form>
  );
}
