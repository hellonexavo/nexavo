import Link from "next/link";
import BuyButton from "./BuyButton";
export const metadata = { title: "Pricing | YY Builds", description: "Fixed-price digital kits and business automation services" };
const ready = process.env.YY_ENABLE_LIVE_CHECKOUT === "true";
export default function Pricing() {
  return <main className="min-h-screen bg-[#080d18] px-6 py-16 text-white"><div className="mx-auto max-w-4xl">
    <Link href="/" className="text-emerald-300">← YY Builds</Link><p className="mt-12 text-sm uppercase tracking-widest text-emerald-300">YY Builds Store</p>
    <h1 className="mt-3 text-5xl font-semibold">Clear prices. Useful tools.</h1>
    <p className="mt-4 max-w-2xl text-slate-300">Choose a self-service template pack or request a tailored setup. No exaggerated sales promises.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      <article className="rounded-2xl border border-white/15 bg-white/5 p-7"><h2 className="text-2xl font-bold">Lead Capture Starter Kit</h2><p className="mt-4 text-4xl font-bold">€49</p><p className="mt-4 text-slate-300">A DIY workflow blueprint, email templates, validation rules and launch checklist. No installation included.</p><div className="mt-6">{ready ? <BuyButton productId="lead-kit" label="Buy kit securely →"/> : <p className="text-amber-200">Card checkout is awaiting payment provider approval.</p>} <Link className="mt-4 inline-block text-emerald-300 underline" href="/pay">Request payment instructions →</Link></div></article>
      <article className="rounded-2xl border border-white/15 bg-white/5 p-7"><h2 className="text-2xl font-bold">Lead Intake Automation Setup</h2><p className="mt-4 text-4xl font-bold">€199</p><p className="mt-4 text-slate-300">A scoped implementation service. Confirm access, integrations, and delivery timeline before any charge.</p><div className="mt-6"><Link className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-slate-950" href="/checkout?product=custom-project">Request scope & quote →</Link></div></article>
    </div><p className="mt-8 text-sm text-slate-400">Digital delivery and refunds require a verified fulfillment process. Card payments are enabled only after merchant activation and end-to-end testing.</p>
  </div></main>;
}
