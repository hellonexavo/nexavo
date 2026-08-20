"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BookingFlow from "./BookingFlow";
import OwnerDashboard from "./OwnerDashboard";
import { sampleBookings, type BookingStatus, type DemoBooking } from "./config";

const storageKey = "yy-builds-booking-studio-demo-v2";
type View = "customer" | "dashboard";
type Filter = "All" | BookingStatus;

export default function BookingExperience({ currentYear }: { currentYear: number }) {
  const [view, setView] = useState<View>("customer");
  const [bookings, setBookings] = useState<DemoBooking[]>(sampleBookings);
  const [filter, setFilter] = useState<Filter>("All");
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { const saved = window.localStorage.getItem(storageKey); if (saved) setBookings(JSON.parse(saved) as DemoBooking[]); } catch { /* Sample data keeps the demo usable. */ }
      setStorageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => { if (!storageReady) return; try { window.localStorage.setItem(storageKey, JSON.stringify(bookings)); } catch { /* Persistence is optional. */ } }, [bookings, storageReady]);

  function showView(next: View) { setView(next); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function updateStatus(id: string, status: BookingStatus) { setBookings((current) => current.map((booking) => booking.id === id ? { ...booking, status } : booking)); }

  return <div className="studio-demo min-h-screen overflow-hidden bg-[#09090c] text-white selection:bg-violet-300 selection:text-[#09090c]">
    <a href="#main" className="studio-skip">Skip to main content</a>
    <div className="studio-demo-bar"><span>Interactive demo</span> Fictional studio, specialists, reviews, and availability · No real appointment or payment is created</div>
    <header className="studio-header"><div className="studio-shell studio-header-inner"><button type="button" onClick={() => showView("customer")} className="studio-brand" aria-label="YY Studio booking demo home"><span>YS</span><strong>YY Studio<small>Premium booking demo</small></strong></button><nav aria-label="Demo navigation"><button type="button" aria-pressed={view === "customer"} onClick={() => showView("customer")}>Customer experience</button><button type="button" aria-pressed={view === "dashboard"} onClick={() => showView("dashboard")}>Owner preview</button></nav><Link href="/" className="studio-home-link">YY Builds <span>↗</span></Link></div></header>
    <div id="main">{view === "customer" ? <><BookingFlow onConfirm={(booking) => setBookings((current) => [booking, ...current])} onDashboard={() => showView("dashboard")} /><StudioContent /></> : <OwnerDashboard bookings={bookings} filter={filter} onFilter={setFilter} onStatus={updateStatus} onReset={() => { setBookings(sampleBookings); setFilter("All"); }} />}</div>
    <footer className="studio-footer"><div className="studio-shell"><div><strong>YY Studio</strong><p>Fictional sample content for the YY Booking product showcase.</p></div><p>© {currentYear} YY Builds · No real bookings or payments are processed</p><Link href="/">Back to YY Builds <span>↗</span></Link></div></footer>
  </div>;
}

function StudioContent() {
  return <>
    <section className="studio-story studio-shell"><div><p className="studio-eyebrow">About the studio</p><h2>A quieter approach to personal care.</h2><p>YY Studio is a fictional sample business created to show how a premium service brand can combine storytelling, clear information, and booking in one polished experience.</p><a href="#booking" className="studio-text-button">Book a demo appointment <span>↗</span></a></div><div className="studio-business-info"><article><span>Opening hours</span><p>Mon–Fri · 09:00–19:00<br />Saturday · 09:00–17:00<br />Sunday · Closed</p></article><article><span>Location</span><p>24 Atelier Lane<br />Amsterdam, Netherlands<br /><em>Fictional demo address</em></p></article><article><span>Contact</span><p>hello@example.test<br />+31 20 000 0000<br /><em>Sample contact details</em></p></article></div></section>
    <section className="studio-reviews"><div className="studio-shell"><div className="studio-section-heading"><div><p className="studio-eyebrow">Sample experience</p><h2>Thoughtful at every step.</h2></div><p>These fictional testimonials demonstrate how customer reassurance could appear in a finished template.</p></div><div className="studio-review-grid">{[["The whole experience felt considered—from choosing my service to the final confirmation.", "Avery · fictional review"], ["Clear, calm, and genuinely easy to use on my phone.", "Morgan · fictional review"], ["I knew exactly what I was booking before I shared my details.", "Riley · fictional review"]].map(([quote, by]) => <blockquote key={by}><span>“</span><p>{quote}</p><cite>{by}</cite></blockquote>)}</div></div></section>
    <section className="studio-flexibility studio-shell"><div><p className="studio-eyebrow">One system, many businesses</p><h2>Designed to adapt.</h2><p>The same configuration-led booking experience can be tailored to different appointment-based businesses without duplicating the application.</p></div><div className="studio-business-types">{["Salon", "Clinic", "Consultant", "Repair service", "Wellness studio"].map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}</div></section>
    <section className="studio-sales"><div className="studio-shell"><div><p className="studio-eyebrow">Like this booking experience?</p><h2>YY Booking Template</h2><p>Own the full customizable source code for a one-time €39 purchase.</p></div><div className="studio-sales-price"><strong>€39</strong><span>one-time</span></div><div className="studio-actions"><a href="https://buildsy2.gumroad.com/l/yy-booking" target="_blank" rel="noopener noreferrer" className="studio-button studio-button-primary">Buy Template — €39 <span>↗</span></a><Link href="/" className="studio-button studio-button-secondary">Back to YY Builds <span>←</span></Link></div></div></section>
  </>;
}
