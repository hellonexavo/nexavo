"use client";

import { useState } from "react";

type Step = "welcome" | "business" | "goal" | "recommendation";

type Recommendation = {
  title: string;
  description: string;
  price: string;
};

const recommendations: Record<string, Recommendation> = {
  website: {
    title: "Business Website",
    description:
      "A modern responsive website with clear services, contact options, and a project request form.",
    price: "From €199",
  },
  booking: {
    title: "Website + Booking System",
    description:
      "A professional website where customers can choose a service and request or schedule an appointment.",
    price: "From €349",
  },
  assistant: {
    title: "Website + AI Assistant",
    description:
      "A website with a smart assistant that answers common questions and helps collect customer enquiries.",
    price: "From €499",
  },
  complete: {
    title: "Complete Business System",
    description:
      "Website, booking flow, AI customer assistant, forms, and business automation in one solution.",
    price: "From €699",
  },
};

export default function NexavoAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [business, setBusiness] = useState("");
  const [recommendation, setRecommendation] =
    useState<Recommendation | null>(null);

  function chooseBusiness(value: string) {
    setBusiness(value);
    setStep("goal");
  }

  function chooseGoal(value: keyof typeof recommendations) {
    setRecommendation(recommendations[value]);
    setStep("recommendation");
  }

  function resetAssistant() {
    setStep("welcome");
    setBusiness("");
    setRecommendation(null);
  }

  function openRequestForm() {
    setIsOpen(false);

    setTimeout(() => {
      document
        .getElementById("request")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-4 font-semibold text-black shadow-2xl transition hover:scale-105"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
          YY
        </span>
        Ask YY AI
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end bg-black/60 p-3 backdrop-blur-sm sm:p-6">
          <div className="flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-semibold text-black">
                  YY
                </span>

                <div>
                  <p className="font-semibold">YY AI Assistant</p>
                  <p className="flex items-center gap-2 text-xs text-white/40">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Online
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
                aria-label="Close assistant"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto p-5">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-white/75">
                Hi! I’m the YY Builds digital consultant. I can help you choose
                the right solution for your business.
              </div>

              {step === "welcome" && (
                <div className="mt-5">
                  <p className="mb-3 text-sm text-white/45">
                    Would you like a quick recommendation?
                  </p>

                  <button
                    type="button"
                    onClick={() => setStep("business")}
                    className="w-full rounded-2xl bg-white px-5 py-4 text-left font-semibold text-black transition hover:scale-[1.01]"
                  >
                    Yes, help me choose →
                  </button>
                </div>
              )}

              {step === "business" && (
                <div className="mt-5">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-sm">
                    Yes, help me choose.
                  </div>

                  <div className="mt-4 max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-white/75">
                    Great. What type of business do you have?
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      "Clinic",
                      "Restaurant",
                      "Automotive",
                      "Beauty",
                      "Local service",
                      "Other business",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => chooseBusiness(item)}
                        className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-sm transition hover:bg-white/10"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === "goal" && (
                <div className="mt-5">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-sm">
                    I have a {business.toLowerCase()} business.
                  </div>

                  <div className="mt-4 max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm leading-6 text-white/75">
                    What is your main goal?
                  </div>

                  <div className="mt-4 space-y-2">
                    <button
                      type="button"
                      onClick={() => chooseGoal("website")}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] p-4 text-left text-sm transition hover:bg-white/10"
                    >
                      Get a modern business website
                    </button>

                    <button
                      type="button"
                      onClick={() => chooseGoal("booking")}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] p-4 text-left text-sm transition hover:bg-white/10"
                    >
                      Accept bookings or appointments
                    </button>

                    <button
                      type="button"
                      onClick={() => chooseGoal("assistant")}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] p-4 text-left text-sm transition hover:bg-white/10"
                    >
                      Answer customer questions automatically
                    </button>

                    <button
                      type="button"
                      onClick={() => chooseGoal("complete")}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] p-4 text-left text-sm transition hover:bg-white/10"
                    >
                      Build a complete digital system
                    </button>
                  </div>
                </div>
              )}

              {step === "recommendation" && recommendation && (
                <div className="mt-5">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-sm">
                    Show me the best solution.
                  </div>

                  <div className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-400/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                      Recommended solution
                    </p>

                    <h3 className="mt-3 text-xl font-semibold">
                      {recommendation.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {recommendation.description}
                    </p>

                    <p className="mt-5 text-lg font-semibold">
                      {recommendation.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openRequestForm}
                    className="mt-4 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black transition hover:scale-[1.01]"
                  >
                    Start this project →
                  </button>

                  <button
                    type="button"
                    onClick={resetAssistant}
                    className="mt-2 w-full rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:bg-white/10"
                  >
                    Start again
                  </button>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 px-5 py-3 text-center text-[11px] text-white/30">
              YY Builds · Yurii Yanishevskyi
            </div>
          </div>
        </div>
      )}
    </>
  );
}
