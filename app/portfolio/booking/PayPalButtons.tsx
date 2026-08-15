"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import type { BookingPaymentInput } from "@/app/lib/booking-payment";

export type PaymentResult = { orderID: string; captureID: string; status: string };

type Props = {
  clientId: string;
  booking: BookingPaymentInput;
  onSuccess: (result: PaymentResult) => void;
  beforeCreate?: () => boolean;
  incompleteMessage?: string;
  theme?: "light" | "dark";
};

type PayPalButton = {
  isEligible: () => boolean;
  render: (container: HTMLElement) => Promise<void>;
  close?: () => Promise<void>;
};

type PayPalNamespace = {
  FUNDING: { PAYPAL: string; CARD: string };
  Buttons: (options: {
    fundingSource: string;
    style: Record<string, string | number | boolean>;
    createOrder: () => Promise<string>;
    onApprove: (data: { orderID: string }, actions: { restart: () => Promise<void> }) => Promise<void>;
    onCancel: () => void;
    onError: (error: unknown) => void;
  }) => PayPalButton;
};

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

async function responseJson<T>(response: Response): Promise<T> {
  const data = await response.json() as T & { error?: string };
  if (!response.ok) throw new Error(data.error || "The sandbox payment could not be processed.");
  return data;
}

export default function PayPalButtons({
  clientId,
  booking,
  onSuccess,
  beforeCreate,
  incompleteMessage = "Complete the required details before starting payment.",
  theme = "light",
}: Props) {
  const paypalContainer = useRef<HTMLDivElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "creating" | "capturing" | "cancelled" | "error">("idle");
  const [message, setMessage] = useState("");
  const [cardEligible, setCardEligible] = useState(false);

  useEffect(() => {
    if (!sdkReady || !window.paypal || !paypalContainer.current || !cardContainer.current) return;

    const paypal = window.paypal;
    let active = true;
    const buttons: PayPalButton[] = [];

    const createOrder = async () => {
      if (beforeCreate && !beforeCreate()) {
        setStatus("error");
        setMessage(incompleteMessage);
        throw new Error(incompleteMessage);
      }

      setStatus("creating");
      setMessage("");
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ booking }),
      });
      const order = await responseJson<{ id: string }>(response);
      if (active) setStatus("idle");
      return order.id;
    };

    const onApprove = async (data: { orderID: string }, actions: { restart: () => Promise<void> }) => {
      try {
        setStatus("capturing");
        setMessage("");
        const response = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderID: data.orderID, booking }),
        });
        const result = await responseJson<PaymentResult>(response);
        if (active) onSuccess(result);
      } catch (error) {
        const issue = error instanceof Error ? error.message : "";
        if (issue.includes("INSTRUMENT_DECLINED")) {
          setStatus("idle");
          await actions.restart();
          return;
        }
        if (active) {
          setStatus("error");
          setMessage(issue || "The sandbox payment could not be captured. Please try again.");
        }
      }
    };

    const common = {
      createOrder,
      onApprove,
      onCancel: () => {
        if (!active) return;
        setStatus("cancelled");
        setMessage("Payment was cancelled. Nothing was charged.");
      },
      onError: (error: unknown) => {
        console.error("PayPal sandbox checkout error.", error);
        if (!active) return;
        setStatus("error");
        setMessage("The sandbox checkout could not be opened. Please try again.");
      },
    };

    paypalContainer.current.replaceChildren();
    cardContainer.current.replaceChildren();

    const paypalButton = paypal.Buttons({
      ...common,
      fundingSource: paypal.FUNDING.PAYPAL,
      style: { layout: "vertical", shape: "pill", height: 48, label: "paypal", tagline: false },
    });
    if (paypalButton.isEligible()) {
      buttons.push(paypalButton);
      void paypalButton.render(paypalContainer.current);
    }

    const cardButton = paypal.Buttons({
      ...common,
      fundingSource: paypal.FUNDING.CARD,
      style: { layout: "vertical", shape: "pill", height: 48, color: "black", label: "pay", tagline: false },
    });
    const eligible = cardButton.isEligible();
    setCardEligible(eligible);
    if (eligible) {
      buttons.push(cardButton);
      void cardButton.render(cardContainer.current);
    }

    return () => {
      active = false;
      for (const button of buttons) void button.close?.();
    };
  }, [beforeCreate, booking, incompleteMessage, onSuccess, renderKey, sdkReady]);

  const loading = status === "creating" || status === "capturing";
  const mutedText = theme === "dark" ? "text-white/45" : "text-slate-500";
  const loadingSurface = theme === "dark" ? "bg-[#101014]/85 text-white" : "bg-white/85 text-slate-700";
  const errorSurface = status === "error"
    ? theme === "dark" ? "border-rose-300/30 bg-rose-400/10 text-rose-200" : "border-rose-200 bg-rose-50 text-rose-800"
    : theme === "dark" ? "border-amber-300/30 bg-amber-300/10 text-amber-100" : "border-amber-200 bg-amber-50 text-amber-900";

  if (!clientId) {
    return <div className={`rounded-2xl border p-4 text-sm leading-6 ${theme === "dark" ? "border-amber-300/20 bg-amber-300/[0.07] text-amber-100" : "border-amber-200 bg-amber-50 text-amber-900"}`}>Sandbox checkout is awaiting its PayPal environment configuration.</div>;
  }

  return (
    <div>
      <Script
        id="paypal-js-sdk"
        src={`https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=EUR&intent=capture&components=buttons&enable-funding=card`}
        strategy="afterInteractive"
        onReady={() => setSdkReady(true)}
        onError={() => {
          setStatus("error");
          setMessage("The PayPal sandbox could not be loaded. Please try again.");
        }}
      />

      <div className="relative">
        <div className={loading ? "pointer-events-none opacity-40" : ""}>
          <p className={`mb-2 text-xs font-semibold ${mutedText}`}>PayPal</p>
          <div ref={paypalContainer} className="min-h-12" />
          {cardEligible && <p className={`mb-2 mt-4 text-xs font-semibold ${mutedText}`}>Debit / Credit Card</p>}
          <div ref={cardContainer} />
        </div>
        {loading && (
          <div className={`absolute inset-0 flex items-center justify-center rounded-2xl backdrop-blur-sm ${loadingSurface}`}>
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
              {status === "creating" ? "Creating secure order…" : "Confirming test payment…"}
            </div>
          </div>
        )}
      </div>

      {(status === "error" || status === "cancelled") && (
        <div role="alert" className={`mt-4 rounded-2xl border p-4 text-sm ${errorSurface}`}>
          <p className="font-semibold">{status === "error" ? "Payment could not be completed" : "Payment cancelled"}</p>
          <p className="mt-1 leading-6">{message}</p>
          <button type="button" onClick={() => { setStatus("idle"); setMessage(""); setRenderKey((key) => key + 1); }} className={`mt-3 rounded-full border px-4 py-2 text-xs font-bold ${theme === "dark" ? "border-white/15 bg-white/[0.06]" : "border-current/20 bg-white text-slate-800"}`}>Retry payment</button>
        </div>
      )}
    </div>
  );
}
