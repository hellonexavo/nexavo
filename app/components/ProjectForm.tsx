"use client";

import { FormEvent, useState } from "react";

export default function ProjectForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", "New Nexavo project request");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      setStatus("sending");

      const response = await fetch(
        "https://formsubmit.co/e2995854a9314ab34741c66d5891ec21",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-white/10 bg-black/25 p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Your name
          </span>

          <input
            required
            name="name"
            type="text"
            placeholder="John Smith"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Email
          </span>

          <input
            required
            name="email"
            type="email"
            placeholder="john@company.com"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Company
          </span>

          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            What do you need?
          </span>

          <select
            required
            name="service"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-white/30"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Business website">
              Business website
            </option>
            <option value="AI assistant">
              AI assistant
            </option>
            <option value="Booking system">
              Booking system
            </option>
            <option value="AI automation">
              AI automation
            </option>
            <option value="Other">
              Other
            </option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Budget
          </span>

          <select
            name="budget"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-white/30"
          >
            <option value="" disabled>
              Select budget
            </option>
            <option value="€100–€300">€100–€300</option>
            <option value="€300–€700">€300–€700</option>
            <option value="€700–€1500">€700–€1500</option>
            <option value="€1500+">€1500+</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Timeline
          </span>

          <select
            name="timeline"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-white/30"
          >
            <option value="" disabled>
              When do you need it?
            </option>
            <option value="As soon as possible">
              As soon as possible
            </option>
            <option value="1–2 weeks">1–2 weeks</option>
            <option value="2–4 weeks">2–4 weeks</option>
            <option value="Flexible">Flexible</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-white/60">
          Tell us about your project
        </span>

        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us what you want to build, improve, or automate..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40">
          We usually reply within one business day.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending"
            ? "Sending..."
            : "Send project request →"}
        </button>
      </div>

      {status === "success" && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-white">
          Thank you. Your request has been sent successfully.
          We’ll contact you within one business day.
        </div>
      )}

      {status === "error" && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-white">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}