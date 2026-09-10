import Link from "next/link";
import { createPageMetadata } from "@/app/lib/seo";

const gumroadUrl = "https://buildsy2.gumroad.com/l/yy-booking";

export const metadata = createPageMetadata({
  title: "Booking Website Template for Service Businesses | YY Booking",
  description: "A clean booking website template for salons, coaches, clinics, mobile services and other appointment-based businesses. Launch faster with YY Booking.",
  path: "/booking-template",
});

const fits = [
  "Salons and beauty professionals",
  "Coaches and consultants",
  "Clinics and wellness services",
  "Mobile and local service businesses",
  "Tutors, trainers and appointment-based teams",
];

const included = [
  "Professional service-focused layout",
  "Clear booking call-to-action flow",
  "Mobile-friendly responsive design",
  "Service, trust and FAQ sections",
  "Easy contact and enquiry path",
  "Reusable structure for many local-service niches",
];

export default function BookingTemplatePage() {
  return (
    <main className="min-h-screen bg-[#fbfbfe] text-slate-950">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="YY Builds home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white">YY</span>
            <span><span className="block font-semibold">YY Builds</span><span className="block text-xs text-slate-500">Digital products for service businesses</span></span>
          </Link>
          <a href={gumroadUrl} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Buy YY Booking — €39</a>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">YY Booking</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">A booking website template built for businesses that sell time and services.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Use a clearer customer journey instead of sending every visitor into DMs. YY Booking gives service businesses a professional starting point for presenting services, answering common questions and moving customers toward a booking.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={gumroadUrl} className="inline-flex items-center justify-center rounded-full bg-violet-700 px-7 py-4 text-sm font-semibold text-white">Get YY Booking for €39 <span className="ml-2">↗</span></a>
              <Link href="/portfolio/booking" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800">View booking concept</Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Secure checkout is handled by Gumroad. VAT may be added depending on the buyer&apos;s location.</p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Best fit</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">For small service businesses that need a simpler path to booking.</h2>
            <ul className="mt-6 space-y-3">
              {fits.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="text-violet-700">✓</span><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">What you get</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">A practical starting point, not a blank page.</h2></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium leading-6 text-slate-700">✓ {item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-[30px] bg-slate-950 p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Launch faster</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Stop rebuilding the same booking website from zero.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">Start with a polished service-business structure, adapt the content to your niche and connect the booking tool that fits your workflow.</p>
          <a href={gumroadUrl} className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950">Buy YY Booking — €39 <span className="ml-2">→</span></a>
        </div>
      </section>
    </main>
  );
}
