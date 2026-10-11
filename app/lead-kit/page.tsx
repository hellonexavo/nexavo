import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Capture Starter Kit | YY Builds",
  description: "A ready-to-adapt lead intake workflow blueprint, templates and setup checklist for small businesses.",
};
const cards = [
  { title: "Lead intake blueprint", detail: "A complete step-by-step flow from form submission to notification and follow-up." },
  { title: "Form and message templates", detail: "Reusable form fields, welcome email copy, and owner alert templates." },
  { title: "Implementation checklist", detail: "Validation, deduplication, security, error handling, and testing steps." },
];
export default function LeadKitPage() {
  return <main className="min-h-screen bg-[#080d18] text-white px-6 py-16">
    <div className="mx-auto max-w-4xl">
      <Link href="/" className="text-sm text-blue-300">← YY Builds</Link>
      <p className="mt-14 text-sm uppercase tracking-[0.2em] text-emerald-300">Digital product · Instant access after setup</p>
      <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">Lead Capture Starter Kit</h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-300">A practical blueprint for collecting website enquiries, routing them to your team and responding consistently. Built for small businesses, freelancers and automation builders.</p>
      <div className="mt-8 flex flex-wrap items-center gap-6"><p className="text-4xl font-bold">€49 <span className="text-sm font-normal text-slate-400">one time</span></p><a href="/checkout?product=custom-project" className="rounded-xl bg-emerald-400 px-6 py-4 font-semibold text-slate-950">Request purchase →</a></div>
      <p className="mt-3 text-sm text-amber-200">Payments are not yet enabled. This button requests a manual purchase; no charge is made online.</p>
      <section className="mt-16 grid gap-4 md:grid-cols-3">{cards.map(x=><article className="rounded-2xl border border-white/15 bg-white/5 p-6" key={x.title}><h2 className="text-xl font-semibold">{x.title}</h2><p className="mt-3 text-sm text-slate-300">{x.detail}</p></article>)}</section>
      <section className="mt-12 rounded-2xl border border-white/15 p-7"><h2 className="text-2xl font-semibold">What's included</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300"><li>Workflow architecture and field mapping</li><li>Customizable email and acknowledgement templates</li><li>Lead qualification and deduplication rules</li><li>Launch and QA checklist</li></ul><p className="mt-5 text-sm text-slate-400">This is a documentation and template kit, not an installed automation, managed service, or promise of additional sales. Payment instructions and digital delivery will be enabled once a payment provider is connected.</p></section>
    </div>
  </main>;
}
