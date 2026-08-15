"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BookingFlow from "./BookingFlow";
import OwnerDashboard from "./OwnerDashboard";
import { copy, sampleBookings, type BookingStatus, type DemoBooking, type Language } from "./config";
import PurchaseButton from "@/app/components/PurchaseButton";

const storageKey = "nexavo-booking-demo-v1";
type View = "customer" | "dashboard";
type Filter = "All" | BookingStatus;

export default function BookingExperience({ currentYear, paypalClientId }: { currentYear: number; paypalClientId: string }) {
  const [language, setLanguage] = useState<Language>("en");
  const [view, setView] = useState<View>("customer");
  const [bookings, setBookings] = useState<DemoBooking[]>(sampleBookings);
  const [filter, setFilter] = useState<Filter>("All");
  const [storageReady, setStorageReady] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) setBookings(JSON.parse(saved) as DemoBooking[]);
      } catch { /* Keep sample data when browser storage is unavailable or invalid. */ }
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try { window.localStorage.setItem(storageKey, JSON.stringify(bookings)); } catch { /* The demo remains usable without persistence. */ }
  }, [bookings, storageReady]);

  function showView(next: View) { setView(next); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function addBooking(booking: DemoBooking) { setBookings((current) => [booking, ...current]); }
  function updateStatus(id: string, status: BookingStatus) { setBookings((current) => current.map((booking) => booking.id === id ? { ...booking, status } : booking)); }
  function resetDashboard() { setBookings(sampleBookings); setFilter("All"); }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f7f7] text-slate-950 selection:bg-cyan-200">
      <a href="#main" className="sr-only z-[100] rounded-full bg-slate-950 px-5 py-3 text-white focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">{t.skip}</a>
      <div className="bg-slate-950 px-4 py-2.5 text-center text-[11px] font-medium text-white/75 sm:text-xs"><span className="text-cyan-300">Demo:</span> {t.demo}</div>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f4f7f7]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 py-3 sm:px-7 lg:flex-nowrap lg:px-10"><button type="button" onClick={() => showView("customer")} className="flex min-w-0 items-center gap-3 rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-700 font-bold text-white">YB</span><span className="min-w-0"><span className="block truncate font-semibold tracking-tight">YY Booking</span><span className="hidden text-xs text-slate-500 lg:block">Booking &amp; payments demo</span></span></button>
          <div className="flex shrink-0 items-center gap-2"><Link href="/" className="hidden min-h-11 items-center rounded-full px-3 text-sm font-semibold text-slate-600 hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 lg:inline-flex"><span className="mr-2" aria-hidden="true">←</span>{t.back}</Link><div className="hidden rounded-full border border-slate-200 bg-white p-1 sm:flex" role="tablist" aria-label="Application view"><button type="button" role="tab" aria-selected={view === "customer"} onClick={() => showView("customer")} className={`rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-cyan-700 ${view === "customer" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950"}`}>{t.customer}</button><button type="button" role="tab" aria-selected={view === "dashboard"} onClick={() => showView("dashboard")} className={`rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-cyan-700 ${view === "dashboard" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950"}`}>{t.dashboard}</button></div><button type="button" onClick={() => setLanguage((current) => current === "en" ? "nl" : "en")} aria-label="Switch language" className="min-h-11 rounded-full border border-slate-300 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 hover:border-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"><span className={language === "en" ? "text-cyan-700" : "text-slate-400"}>EN</span> / <span className={language === "nl" ? "text-cyan-700" : "text-slate-400"}>NL</span></button></div><Link href="/" className="order-3 flex min-h-10 w-full items-center text-sm font-semibold text-slate-600 hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 lg:hidden"><span className="mr-2" aria-hidden="true">←</span>{t.back}</Link></div>
        <div className="flex border-t border-slate-200 bg-white p-2 sm:hidden" role="tablist" aria-label="Application view"><button type="button" role="tab" aria-selected={view === "customer"} onClick={() => showView("customer")} className={`min-h-11 min-w-0 flex-1 rounded-xl px-2 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-cyan-700 ${view === "customer" ? "bg-slate-950 text-white" : "text-slate-500"}`}>{t.customer}</button><button type="button" role="tab" aria-selected={view === "dashboard"} onClick={() => showView("dashboard")} className={`min-h-11 min-w-0 flex-1 rounded-xl px-2 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-cyan-700 ${view === "dashboard" ? "bg-slate-950 text-white" : "text-slate-500"}`}>{t.dashboard}</button></div>
      </header>
      <div id="main">{view === "customer" ? <BookingFlow language={language} paypalClientId={paypalClientId} onConfirm={addBooking} onDashboard={() => showView("dashboard")} /> : <OwnerDashboard language={language} bookings={bookings} filter={filter} onFilter={setFilter} onStatus={updateStatus} onReset={resetDashboard} />}</div>
      <section className="border-t border-slate-200 bg-[#edf4f4] px-5 py-12 sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[26px] bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Built by YY Builds</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">Want a site like this?</h2><p className="mt-2 text-sm text-white/45">Start a custom booking project for your own business.</p></div><PurchaseButton productId="custom-project" className="shrink-0">Start a similar project</PurchaseButton></div></section>
      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-end sm:justify-between"><div className="min-w-0"><p className="break-words font-semibold text-slate-800">{t.footerConcept}</p><p className="mt-1 break-words">© {currentYear} · {t.footerDisclaimer}</p></div><Link href="/" className="inline-flex min-h-11 items-center self-start font-semibold text-cyan-800 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 sm:self-auto"><span className="mr-2" aria-hidden="true">←</span>{t.back}</Link></div></footer>
    </div>
  );
}
