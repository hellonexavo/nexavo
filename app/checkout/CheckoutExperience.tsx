"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ProductId } from "@/app/lib/products";
import SocialLinks from "@/app/components/SocialLinks";

type CheckoutProduct = {
  id: ProductId;
  name: string;
  description: string;
  price: number;
  features: readonly string[];
};

type Props = {
  products: CheckoutProduct[];
  initialProductId?: ProductId;
};

// Flip this to true to restore public price and budget displays.
const showPublicPrices = false;

function priceLabel(price: number) {
  if (price <= 0) return "Custom quote";
  const formattedPrice = new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
  return `From ${formattedPrice}`;
}

export default function CheckoutExperience({ products, initialProductId }: Props) {
  const [productId, setProductId] = useState<ProductId | "">(initialProductId ?? "");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formStartedAt = useRef(0);
  const product = useMemo(() => products.find((item) => item.id === productId), [productId, products]);

  useEffect(() => { formStartedAt.current = Date.now(); }, []);

  function selectProduct(nextId: ProductId | "") {
    setProductId(nextId);
    setStatus("idle");
    setErrorMessage("");
    window.history.replaceState(null, "", nextId ? `/checkout?product=${nextId}` : "/checkout");
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const selectedPackage = product ? `${product.name}${showPublicPrices ? ` — ${priceLabel(product.price)}` : ""}` : "Not sure yet";

    try {
      setStatus("sending");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: selectedPackage,
          message: formData.get("project_description"),
          website: formData.get("website"),
          websiteConfirm: formData.get("websiteConfirm"),
          startedAt: formStartedAt.current,
        }),
      });
      const responseBody = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(responseBody.error || "Your request could not be sent. Please try again.");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Your request could not be sent. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <main className="checkout-page flex min-h-screen items-center px-5 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-3xl rounded-[34px] border border-emerald-300/20 bg-white/[0.045] p-7 text-center shadow-[0_35px_120px_rgba(0,0,0,.45)] sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-2xl text-emerald-300">✓</div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">YY Builds project request</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Request received</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/55">We&apos;ll review your request and reply with a recommended scope, timeline, and pricing.</p>
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-black/20 p-5 text-left"><p className="text-xs uppercase tracking-[0.16em] text-white/35">Selected service</p><p className="mt-2 text-lg font-semibold">{product?.name ?? "Not sure yet"}</p>{product && <p className="invisible mt-1 text-white/45" aria-hidden="true">{priceLabel(product.price)}</p>}</div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="button-primary">Back to YY Builds <span>→</span></Link><button type="button" onClick={() => { formStartedAt.current = Date.now(); setStatus("idle"); }} className="button-secondary">Send another request</button></div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page min-h-screen px-5 pb-20 pt-8 text-white sm:px-6 sm:pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="YY Builds home"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-sm font-semibold">YY</span><span><span className="block font-semibold">YY Builds</span><span className="text-[11px] text-white/40">Websites • AI • Automation</span></span></Link>
          <Link href="/" className="text-sm text-white/45 transition hover:text-white">← Back to site</Link>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <section>
            <p className="eyebrow">Choose your service</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Start your project with a clear next step.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/48">Select a YY Builds service, review what is included, and share your project details. Every project is reviewed personally before payment.</p>

            <label className="mt-10 block max-w-xl text-sm font-semibold text-white/65">Selected service<select value={productId} onChange={(event) => selectProduct(event.target.value as ProductId | "")} className="premium-select mt-3"><option value="">Not sure yet — help me choose</option>{products.map((item) => <option key={item.id} value={item.id}>{item.name}{showPublicPrices ? ` — ${priceLabel(item.price)}` : ""}</option>)}</select></label>

            {product ? <article className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[0.18em] text-white/35">Selected service</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h2></div><p className="invisible text-4xl font-semibold tracking-[-0.05em]" aria-hidden="true">{priceLabel(product.price)}</p></div>
              <p className="mt-6 max-w-2xl leading-7 text-white/48">{product.description}</p>
              <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">What is included</p><ul className="mt-5 grid gap-4 text-sm text-white/68 sm:grid-cols-2">{product.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300">✓</span><span>{feature}</span></li>)}</ul></div>
            </article> : <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-white/48 sm:p-8">Not sure which service fits? Tell us about your goals and we&apos;ll recommend the clearest starting point.</div>}

            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10 text-violet-200">↗</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Payment method</p><p className="mt-2 font-semibold">Bank transfer</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">After we confirm your project, we&apos;ll send the payment details and instructions to your email.</p><p className="mt-3 text-xs text-white/28">No bank account or card details are displayed or collected on this website.</p></div></div>
            </div>
          </section>

          <aside className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:p-8 lg:sticky lg:top-8">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Project details</p><h2 className="mt-2 text-2xl font-semibold">Request a project review</h2><p className="mt-3 text-sm leading-6 text-white/42">We&apos;ll reply with a recommended scope, timeline, and pricing before any work or payment.</p></div>
            <form onSubmit={submitRequest} aria-busy={status === "sending"} className="mt-7 space-y-4">
              <CheckoutField label="Full name" name="name" autoComplete="name" required />
              <CheckoutField label="Email" name="email" type="email" autoComplete="email" required />
              <CheckoutField label="Phone" name="phone" type="tel" autoComplete="tel" />
              <label className="block text-sm font-medium text-white/60">Website<span className="ml-1 text-white/25">(optional)</span><input name="website" type="url" autoComplete="url" placeholder="https://yourwebsite.com" className="premium-field mt-2" /></label>
              <label className="sr-only" aria-hidden="true">Website confirmation<input name="websiteConfirm" type="text" tabIndex={-1} autoComplete="off" /></label>
              <label className="block text-sm font-medium text-white/60">Project description<span className="ml-1 text-violet-300" aria-hidden="true">*</span><textarea required name="project_description" rows={5} placeholder="Tell us about your business, goals, and what you need." className="premium-field mt-2 resize-y" /></label>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm"><div className="flex justify-between gap-4"><span className="text-white/40">Service</span><span className="text-right font-semibold">{product?.name ?? "Not sure yet"}</span></div><div className="mt-3 flex justify-between gap-4 border-t border-white/10 pt-3"><span className={product ? "invisible text-white/55" : "text-white/55"}>{product ? "Starting price" : "Next step"}</span><span className={product ? "invisible text-lg font-semibold" : "text-lg font-semibold"}>{product ? priceLabel(product.price) : "Personal recommendation"}</span></div></div>
              {status === "error" && <div role="alert" className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.08] p-4 text-sm text-rose-100">{errorMessage || "The request could not be sent. Please try again in a moment."}</div>}
              <button type="submit" disabled={status === "sending"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-50">{status === "sending" ? "Sending request…" : "Send project request"} <span>→</span></button>
              <p className="text-center text-[11px] leading-5 text-white/28">Submitting this form does not charge you or create an automatic payment.</p>
            </form>
          </aside>
        </div>
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row"><p>YY Builds · Websites, AI &amp; Automation</p><SocialLinks /></footer>
      </div>
    </main>
  );
}

function CheckoutField({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete: string; required?: boolean }) {
  return <label className="block text-sm font-medium text-white/60">{label}{required ? <span className="ml-1 text-violet-300" aria-hidden="true">*</span> : <span className="ml-1 text-white/25">(optional)</span>}<input required={required} name={name} type={type} autoComplete={autoComplete} className="premium-field mt-2" /></label>;
}
