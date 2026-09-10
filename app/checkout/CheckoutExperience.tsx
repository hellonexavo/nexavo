"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ProductId } from "@/app/lib/products";
import SocialLinks from "@/app/components/SocialLinks";

type CheckoutProduct = {
  id: ProductId;
  name: string;
  description: string;
  features: readonly string[];
};

type Props = {
  products: CheckoutProduct[];
  initialProductId?: ProductId;
};

const PROJECT_CONTEXT_KEY = "yy-ai-project-context";

export default function CheckoutExperience({ products, initialProductId }: Props) {
  const [productId, setProductId] = useState<ProductId | "">(initialProductId ?? "");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [hasAssistantContext, setHasAssistantContext] = useState(false);
  const formStartedAt = useRef(0);
  const product = useMemo(() => products.find((item) => item.id === productId), [productId, products]);

  useEffect(() => {
    formStartedAt.current = Date.now();
    const storedContext = sessionStorage.getItem(PROJECT_CONTEXT_KEY);
    if (storedContext) {
      setProjectDescription(storedContext);
      setHasAssistantContext(true);
    }
  }, []);

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
    const selectedPackage = product?.name ?? "Not sure yet";

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
          message: projectDescription,
          website: formData.get("website"),
          websiteConfirm: formData.get("websiteConfirm"),
          startedAt: formStartedAt.current,
        }),
      });

      const responseBody = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(responseBody.error || "Your request could not be sent. Please try again.");
      }

      sessionStorage.removeItem(PROJECT_CONTEXT_KEY);
      setStatus("success");
      window.scrollTo({ top: 0 });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Your request could not be sent. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <main className="checkout-page flex min-h-screen items-center px-5 py-12 text-white sm:px-6">
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.035] p-7 text-center sm:p-9">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-lg text-emerald-300">✓</div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">YY Builds</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Request received</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">We&apos;ll review your project and reply with the clearest next step.</p>
          <div className="mt-6 rounded-xl border border-white/10 bg-black/15 p-4 text-left">
            <p className="text-xs uppercase tracking-[0.14em] text-white/30">Selected service</p>
            <p className="mt-1 font-semibold">{product?.name ?? "Not sure yet"}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/" className="button-primary">Back to YY Builds</Link>
            <button
              type="button"
              onClick={() => {
                formStartedAt.current = Date.now();
                setProjectDescription("");
                setHasAssistantContext(false);
                setStatus("idle");
              }}
              className="button-secondary"
            >
              Send another request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page min-h-screen px-5 py-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="YY Builds home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-xs font-semibold">YY</span>
            <span>
              <span className="block text-sm font-semibold">YY Builds</span>
              <span className="text-[10px] text-white/35">Websites • AI • Automation</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-white/45 hover:text-white">← Back</Link>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Selected service</p>
            <label className="mt-4 block text-sm font-medium text-white/60">
              Service
              <select
                value={productId}
                onChange={(event) => selectProduct(event.target.value as ProductId | "")}
                className="premium-select mt-2"
              >
                <option value="">Not sure yet — help me choose</option>
                {products.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </label>

            {product ? (
              <div className="mt-5 border-t border-white/10 pt-5">
                <h1 className="text-2xl font-semibold tracking-[-0.035em]">{product.name}</h1>
                <p className="mt-2 text-sm leading-6 text-white/48">{product.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">Includes</p>
                <ul className="mt-3 space-y-2 text-sm text-white/62">
                  {product.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex gap-2"><span className="text-violet-300">✓</span><span>{feature}</span></li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/45">Tell us what you need and we&apos;ll recommend the right service.</p>
            )}

            <div className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/45">
              <p className="font-medium text-white/65">Payment after review</p>
              <p className="mt-1">No payment is taken on this page. We confirm the project first and send payment details afterward.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Project request</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">Tell us what you need</h2>
              <p className="mt-2 text-sm leading-6 text-white/45">Short details are enough. We&apos;ll reply with the next step.</p>
            </div>

            {hasAssistantContext && (
              <div className="mt-4 rounded-xl border border-violet-300/20 bg-violet-300/[0.05] p-3 text-sm text-white/55">
                <span className="font-semibold text-violet-200">YY AI context added.</span> You can edit it before sending.
              </div>
            )}

            <form onSubmit={submitRequest} aria-busy={status === "sending"} className="mt-5 space-y-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <CheckoutField label="Name" name="name" autoComplete="name" required />
                <CheckoutField label="Email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <CheckoutField label="Phone" name="phone" type="tel" autoComplete="tel" />
                <label className="block text-sm font-medium text-white/60">
                  Website <span className="text-white/25">(optional)</span>
                  <input name="website" type="url" autoComplete="url" placeholder="yourwebsite.com" className="premium-field mt-2" />
                </label>
              </div>
              <label className="sr-only" aria-hidden="true">Website confirmation<input name="websiteConfirm" type="text" tabIndex={-1} autoComplete="off" /></label>
              <label className="block text-sm font-medium text-white/60">
                What do you need? <span className="text-violet-300" aria-hidden="true">*</span>
                <textarea
                  required
                  name="project_description"
                  rows={5}
                  value={projectDescription}
                  onChange={(event) => setProjectDescription(event.target.value)}
                  placeholder="Example: I need a modern website for my clinic with services, contact form and booking."
                  className="premium-field mt-2 resize-y"
                />
              </label>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-sm">
                <span className="text-white/40">Service</span>
                <span className="text-right font-semibold">{product?.name ?? "Not sure yet"}</span>
              </div>

              {status === "error" && (
                <div role="alert" className="rounded-xl border border-rose-300/20 bg-rose-300/[0.07] p-3 text-sm text-rose-100">
                  {errorMessage || "The request could not be sent. Please try again in a moment."}
                </div>
              )}

              <button type="submit" disabled={status === "sending"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
                {status === "sending" ? "Sending…" : "Send project request"}
              </button>
              <p className="text-center text-[11px] leading-5 text-white/25">No payment is charged when you send this form.</p>
            </form>
          </section>
        </div>

        <footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>YY Builds · Websites, AI &amp; Automation</p>
          <SocialLinks />
        </footer>
      </div>
    </main>
  );
}

function CheckoutField({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-white/60">
      {label}{required ? <span className="ml-1 text-violet-300" aria-hidden="true">*</span> : <span className="ml-1 text-white/25">(optional)</span>}
      <input required={required} name={name} type={type} autoComplete={autoComplete} className="premium-field mt-2" />
    </label>
  );
}
