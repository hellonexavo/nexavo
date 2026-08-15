"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PayPalButtons, { type PaymentResult } from "@/app/components/PayPalButtons";
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
  initialProductId: ProductId;
  paypalClientId: string;
  sandboxEnabled: boolean;
};

function euro(value: number) {
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CheckoutExperience({
  products,
  initialProductId,
  paypalClientId,
  sandboxEnabled,
}: Props) {
  const [productId, setProductId] = useState<ProductId>(initialProductId);
  const [payment, setPayment] = useState<PaymentResult | null>(null);
  const product = useMemo(() => products.find((item) => item.id === productId) ?? products[0], [productId, products]);

  function selectProduct(nextId: ProductId) {
    setProductId(nextId);
    setPayment(null);
    window.history.replaceState(null, "", `/checkout?product=${nextId}`);
  }

  if (payment) {
    return (
      <main className="checkout-page flex min-h-screen items-center px-5 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-3xl rounded-[34px] border border-emerald-300/20 bg-white/[0.045] p-7 text-center shadow-[0_35px_120px_rgba(0,0,0,.45)] sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-2xl text-emerald-300">✓</div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Sandbox capture complete</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Payment successful</h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">Your test payment for {product.name} was captured successfully. No real money was charged.</p>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-black/25 p-5 text-left">
            <dl className="space-y-4 text-sm">
              <div><dt className="text-white/35">PayPal order reference</dt><dd className="mt-1 break-all font-mono text-white/80">{payment.orderID}</dd></div>
              <div><dt className="text-white/35">Capture reference</dt><dd className="mt-1 break-all font-mono text-white/80">{payment.captureID}</dd></div>
            </dl>
          </div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/#request" className="button-primary">Continue with project details <span>→</span></Link>
            <button type="button" onClick={() => setPayment(null)} className="button-secondary">Run another test</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page min-h-screen px-5 pb-20 pt-8 text-white sm:px-6 sm:pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="YY Builds home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-sm font-semibold">YY</span>
            <span><span className="block font-semibold">YY Builds</span><span className="text-[11px] text-white/40">Websites • AI • Automation</span></span>
          </Link>
          <Link href="/" className="text-sm text-white/45 transition hover:text-white">← Back to site</Link>
        </header>

        <div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-3 text-center text-xs font-semibold text-amber-100">
          Sandbox test payment — no real money will be charged.
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <section>
            <p className="eyebrow">Secure test checkout</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-7xl">Start your next project with clarity.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/48">Choose a defined YY Builds service, review exactly what is included, then preview the PayPal sandbox checkout.</p>

            <label className="mt-10 block max-w-xl text-sm font-semibold text-white/65">
              Selected service
              <select value={productId} onChange={(event) => selectProduct(event.target.value as ProductId)} className="mt-3 w-full rounded-2xl border border-white/12 bg-[#0b0b0f] px-4 py-4 text-white outline-none focus:border-violet-300/50">
                {products.map((item) => <option key={item.id} value={item.id}>{item.name} — {euro(item.price)}</option>)}
              </select>
            </label>

            <article className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs uppercase tracking-[0.18em] text-white/35">Selected service</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h2></div>
                <p className="text-4xl font-semibold tracking-[-0.05em]">{euro(product.price)}</p>
              </div>
              <p className="mt-6 max-w-2xl leading-7 text-white/48">{product.description}</p>
              <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">What is included</p><ul className="mt-5 grid gap-4 text-sm text-white/68 sm:grid-cols-2">{product.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300">✓</span><span>{feature}</span></li>)}</ul></div>
            </article>
          </section>

          <aside className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:p-8 lg:sticky lg:top-8">
            <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Choose payment method</p><h2 className="mt-2 text-2xl font-semibold">Sandbox checkout</h2></div><span className="rounded-full bg-amber-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-200">Test mode</span></div>
            <dl className="my-7 space-y-3 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm"><div className="flex justify-between gap-4"><dt className="text-white/40">Service</dt><dd className="text-right font-semibold">{product.name}</dd></div><div className="flex justify-between gap-4 border-t border-white/10 pt-3"><dt className="font-semibold text-white/65">Total</dt><dd className="text-xl font-semibold">{euro(product.price)} EUR</dd></div></dl>
            {!sandboxEnabled ? <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.07] p-4 text-sm leading-6 text-rose-100">Checkout is disabled because PAYPAL_ENV is not set to sandbox.</div> : <PayPalButtons clientId={paypalClientId} selection={{ kind: "product", productId }} onSuccess={setPayment} theme="dark" />}
            <p className="mt-5 text-center text-[11px] leading-5 text-white/28">PayPal determines which eligible sandbox funding methods appear. Card availability can vary by account and region.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
