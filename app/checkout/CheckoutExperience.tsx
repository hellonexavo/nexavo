"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import type { ProductId } from "@/app/lib/products";

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

function priceLabel(price: number) {
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
  const product = useMemo(() => products.find((item) => item.id === productId), [productId, products]);

  function selectProduct(nextId: ProductId | "") {
    setProductId(nextId);
    setStatus("idle");
    window.history.replaceState(null, "", nextId ? `/checkout?product=${nextId}` : "/checkout");
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    const selectedPackage = product ? `${product.name} — ${priceLabel(product.price)}` : "Not sure yet";

    try {
      setStatus("sending");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          selectedPackage,
          budget: formData.get("budget"),
          preferredTimeline: formData.get("preferred_timeline"),
          message: formData.get("project_description"),
        }),
      });
      if (!response.ok) throw new Error("Project request failed");
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main className="checkout-page flex min-h-screen items-center px-5 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-3xl rounded-[34px] border border-emerald-300/20 bg-white/[0.045] p-7 text-center shadow-[0_35px_120px_rgba(0,0,0,.45)] sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-2xl text-emerald-300">✓</div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">YY Builds project request</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Request received</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/55">We&apos;ve received your project request. We&apos;ll review it and reply with clear next steps.</p>
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-black/20 p-5 text-left"><p className="text-xs uppercase tracking-[0.16em] text-white/35">Selected service</p><p className="mt-2 text-lg font-semibold">{product?.name ?? "Not sure yet"}</p>{product && <p className="mt-1 text-white/45">{priceLabel(product.price)}</p>}</div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="button-primary">Back to YY Builds <span>→</span></Link><button type="button" onClick={() => setStatus("idle")} className="button-secondary">Send another request</button></div>
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

            <label className="mt-10 block max-w-xl text-sm font-semibold text-white/65">Selected service<select value={productId} onChange={(event) => selectProduct(event.target.value as ProductId | "")} className="premium-select mt-3"><option value="">Not sure yet — help me choose</option>{products.map((item) => <option key={item.id} value={item.id}>{item.name} — {priceLabel(item.price)}</option>)}</select></label>

            {product ? <article className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[0.18em] text-white/35">Selected service</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h2></div><p className="text-4xl font-semibold tracking-[-0.05em]">{priceLabel(product.price)}</p></div>
              <p className="mt-6 max-w-2xl leading-7 text-white/48">{product.description}</p>
              <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">What is included</p><ul className="mt-5 grid gap-4 text-sm text-white/68 sm:grid-cols-2">{product.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300">✓</span><span>{feature}</span></li>)}</ul></div>
            </article> : <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-white/48 sm:p-8">Not sure which package fits? Tell us about your goals and we&apos;ll recommend the clearest starting point.</div>}

            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6">
              <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10 text-violet-200">↗</span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Payment method</p><p className="mt-2 font-semibold">Bank transfer</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">After we confirm your project, we&apos;ll send the payment details and instructions to your email.</p><p className="mt-3 text-xs text-white/28">No bank account or card details are displayed or collected on this website.</p></div></div>
            </div>
          </section>

          <aside className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:p-8 lg:sticky lg:top-8">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Project details</p><h2 className="mt-2 text-2xl font-semibold">Request a project review</h2><p className="mt-3 text-sm leading-6 text-white/42">We&apos;ll review your request before sending an invoice or payment instructions.</p></div>
            <form onSubmit={submitRequest} aria-busy={status === "sending"} className="mt-7 space-y-4">
              <CheckoutField label="Full name" name="name" autoComplete="name" required />
              <CheckoutField label="Email" name="email" type="email" autoComplete="email" required />
              <CheckoutField label="Company / business name" name="company" autoComplete="organization" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white/60">Budget<span className="ml-1 text-white/25">(optional)</span><select name="budget" defaultValue="" className="premium-select mt-2"><option value="">Select a budget</option><option value="Not sure yet">Not sure yet</option><option value="Under €300">Under €300</option><option value="€300–€500">€300–€500</option><option value="€500–€1,000">€500–€1,000</option><option value="€1,000–€2,500">€1,000–€2,500</option><option value="€2,500+">€2,500+</option></select></label>
                <label className="block text-sm font-medium text-white/60">Timeline<span className="ml-1 text-white/25">(optional)</span><select name="preferred_timeline" defaultValue="" className="premium-select mt-2"><option value="">Select a timeline</option><option value="As soon as possible">As soon as possible</option><option value="1–2 weeks">1–2 weeks</option><option value="2–4 weeks">2–4 weeks</option><option value="Flexible">Flexible</option></select></label>
              </div>
              <label className="block text-sm font-medium text-white/60">Project description<span className="ml-1 text-violet-300" aria-hidden="true">*</span><textarea required name="project_description" rows={5} placeholder="Tell us about your business, goals, and what you need." className="premium-field mt-2 resize-y" /></label>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm"><div className="flex justify-between gap-4"><span className="text-white/40">Service</span><span className="text-right font-semibold">{product?.name ?? "Not sure yet"}</span></div><div className="mt-3 flex justify-between gap-4 border-t border-white/10 pt-3"><span className="text-white/55">{product ? "Starting price" : "Next step"}</span><span className="text-lg font-semibold">{product ? priceLabel(product.price) : "Personal recommendation"}</span></div></div>
              {status === "error" && <div role="alert" className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.08] p-4 text-sm text-rose-100">The request could not be sent. Please check your connection and try again.</div>}
              <button type="submit" disabled={status === "sending"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-50">{status === "sending" ? "Sending request…" : "Send project request"} <span>→</span></button>
              <p className="text-center text-[11px] leading-5 text-white/28">Submitting this form does not charge you or create an automatic payment.</p>
            </form>
          </aside>
        </div>
      </div>
    </main>
  );
}

function CheckoutField({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete: string; required?: boolean }) {
  return <label className="block text-sm font-medium text-white/60">{label}{required ? <span className="ml-1 text-violet-300" aria-hidden="true">*</span> : <span className="ml-1 text-white/25">(optional)</span>}<input required={required} name={name} type={type} autoComplete={autoComplete} className="premium-field mt-2" /></label>;
}
