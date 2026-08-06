"use client";

import { FormEvent, useState } from "react";

const services = [
  "Business website",
  "Landing page",
  "AI assistant",
  "Booking system",
  "WhatsApp automation",
  "Not sure yet",
];

export default function ProjectForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
  "https://formsubmit.co/ajax/hello.nexavo@gmail.com",
  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
  
  action="https://formsubmit.co/hello.nexavo@gmail.com"
  method="POST"
      className="rounded-[30px] border border-white/10 bg-black/25 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">Your name</span>
          <input
            required
            name="name"
            type="text"
            placeholder="John Smith"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Email or WhatsApp
          </span>
          <input
            required
            name="contact"
            type="text"
            placeholder="you@email.com"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-white/60">
          What do you need?
        </span>
        <select
          required
          name="service"
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-[#24134d] px-4 py-4 text-white outline-none transition focus:border-white/35"
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

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/60">
            Business type
          </span>
          <input
            required
            name="business"
            type="text"
            placeholder="Clinic, restaurant, workshop..."
            className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/60">Budget</span>
          <select
            required
            name="budget"
            defaultValue=""
            className="w-full rounded-2xl border border-white/10 bg-[#24134d] px-4 py-4 text-white outline-none transition focus:border-white/35"
          >
            <option value="" disabled>
              Select your budget
            </option>
            <option value="€99–€199">€99–€199</option>
            <option value="€200–€499">€200–€499</option>
            <option value="€500–€999">€500–€999</option>
            <option value="€1,000+">€1,000+</option>
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
          rows={5}
          placeholder="What would you like to create or improve?"
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send project request →"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-2xl bg-emerald-400/15 p-4 text-sm text-emerald-200">
          Thank you. Your request has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-red-400/15 p-4 text-sm text-red-200">
          The form is not connected yet. Please try again shortly.
        </p>
      )}

      <p className="mt-4 text-center text-xs text-white/35">
        We usually respond within one business day.
      </p>
    </form>
  );
}