import Link from "next/link";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { bookingDates, bookingTimeSlots, businessConfig, formatOpeningHours } from "@/config/business";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "YY Booking | Online Booking System by YY Builds",
  description: "A modern online booking experience for salons, clinics and service businesses.",
  path: "/booking",
});

export default function BookingDemoPage() {
  return <main className="booking-demo min-h-screen bg-[#f5f6f8] text-[#17201d]">
    <header className="border-b border-slate-200/80 bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"><Link href="/" className="inline-flex items-center gap-2.5" aria-label="Back to YY Builds"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#174b3e] text-[11px] font-bold text-white">YY</span><span><span className="block text-[15px] font-semibold tracking-[-.02em] text-slate-900">YY Booking</span><span className="block text-[10px] text-slate-400">A YY Builds product</span></span></Link><Link href="/" className="text-sm font-semibold text-slate-500 transition hover:text-slate-900">← YY Builds</Link></div></header>
    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[.78fr_1.5fr] lg:gap-14 lg:py-16">
      <aside className="lg:sticky lg:top-10 lg:self-start"><div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ecf4f1] text-2xl font-semibold text-[#195c4b]">{businessConfig.initials}</div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#29705d]">Book an appointment</p><h1 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">{businessConfig.name}</h1><p className="mt-4 max-w-md text-base leading-7 text-slate-600">{businessConfig.description}</p><div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600"><p>● &nbsp;{businessConfig.address}</p><p>● &nbsp;{formatOpeningHours(businessConfig.openingHours)}</p><p className="text-xs text-slate-400">{businessConfig.timezone.replaceAll("_", " ")}</p></div></aside>
      <BookingFlow businessName={businessConfig.name} cancellationPolicy={businessConfig.cancellationPolicy} services={businessConfig.services} dates={bookingDates} timeSlots={bookingTimeSlots} />
    </div>
    <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">Powered by <span className="font-semibold text-slate-600">YY Booking</span> · A <Link href="/" className="font-semibold text-[#246553]">YY Builds</Link> product</footer>
  </main>;
}
