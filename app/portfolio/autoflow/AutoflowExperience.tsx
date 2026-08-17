"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectForm from "./components/ProjectForm";
import PurchaseButton from "@/app/components/PurchaseButton";

const categories = ["All", "Maintenance", "Diagnostics", "Brakes", "Tyres", "Engine", "Electrical"] as const;
type Category = (typeof categories)[number];
type ServiceCategory = Exclude<Category, "All">;

export type AutoService = {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  duration: string;
  price: number;
};

const services: AutoService[] = [
  { id: "oil", category: "Maintenance", name: "Oil & Filter Service", description: "Engine oil and filter replacement with a visual safety inspection.", duration: "60–75 min", price: 89 },
  { id: "major", category: "Maintenance", name: "Scheduled Major Service", description: "Manufacturer-aligned checks, fluids, filters, and service reset.", duration: "3–4 hours", price: 249 },
  { id: "ac", category: "Maintenance", name: "Air-Conditioning Service", description: "System performance check, refrigerant recharge, and leak screening.", duration: "60 min", price: 99 },
  { id: "scan", category: "Diagnostics", name: "Computer Diagnostics", description: "Fault-code scan with technician interpretation and written findings.", duration: "45–60 min", price: 69 },
  { id: "inspection", category: "Diagnostics", name: "Full Vehicle Inspection", description: "Comprehensive mechanical, electrical, tyre, and fluid assessment.", duration: "90 min", price: 119 },
  { id: "brake-check", category: "Brakes", name: "Brake Safety Inspection", description: "Pads, discs, lines, fluid, and braking performance assessment.", duration: "45 min", price: 49 },
  { id: "front-brakes", category: "Brakes", name: "Front Pads & Discs", description: "Front axle brake pads and discs supplied, fitted, and tested.", duration: "2–3 hours", price: 289 },
  { id: "tyre-fit", category: "Tyres", name: "Tyre Fitting & Balance", description: "Removal, fitting, balancing, valve, and pressure calibration per wheel.", duration: "30 min", price: 25 },
  { id: "alignment", category: "Tyres", name: "Four-Wheel Alignment", description: "Digital geometry measurement and adjustment with before-and-after report.", duration: "60–90 min", price: 89 },
  { id: "battery", category: "Electrical", name: "Battery Health Check", description: "Battery condition, charging output, and starting-system test.", duration: "30 min", price: 35 },
  { id: "electrical", category: "Electrical", name: "Electrical Fault Finding", description: "Structured diagnosis of lighting, charging, sensor, or wiring faults.", duration: "From 60 min", price: 85 },
  { id: "timing", category: "Engine", name: "Timing Belt Replacement", description: "Timing belt kit and water pump replacement where applicable.", duration: "4–6 hours", price: 499 },
  { id: "cooling", category: "Engine", name: "Cooling-System Diagnosis", description: "Pressure test, temperature checks, and leak investigation.", duration: "60–90 min", price: 79 },
  { id: "clutch", category: "Engine", name: "Clutch Assessment", description: "Road test and workshop inspection for slip, noise, or engagement issues.", duration: "60 min", price: 75 },
];

const makes: Record<string, string[]> = {
  Volkswagen: ["Golf", "Polo", "Tiguan", "Passat"],
  BMW: ["1 Series", "3 Series", "X1", "X3"],
  Toyota: ["Yaris", "Corolla", "C-HR", "RAV4"],
  Mercedes: ["A-Class", "C-Class", "GLA", "GLC"],
  Ford: ["Fiesta", "Focus", "Puma", "Kuga"],
};

const benefits = [
  ["Clear recommendations", "Inspection findings explained before additional work begins."],
  ["Qualified technicians", "Practical workshop experience across petrol, diesel, hybrid, and EV systems."],
  ["Digital updates", "Optional estimates, approvals, reminders, and service-status messages."],
  ["Work guaranteed", "Parts and labour warranty terms shown clearly with every completed job."],
];

const process = [
  ["01", "Tell us about the vehicle", "Share the vehicle details, service need, and any symptoms."],
  ["02", "Inspection & confirmation", "A technician confirms the work and final price after inspection."],
  ["03", "Service & updates", "Approved work is completed with optional progress notifications."],
  ["04", "Collect with confidence", "Receive a clear summary of completed work and future recommendations."],
];

const reviews = [
  ["The estimate was easy to understand and the workshop called before doing anything extra.", "Daniel K.", "Brake service"],
  ["Booking took two minutes, and the collection update arrived exactly when promised.", "Marta V.", "Scheduled maintenance"],
  ["They explained the warning light in plain language and showed what could wait.", "Jonas P.", "Engine diagnostics"],
];

const integrations = ["WhatsApp enquiries", "Online booking", "Service reminders", "Digital estimates", "Approval links", "Deposit payments"];

function euro(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export default function AutoflowExperience() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [make, setMake] = useState("Volkswagen");
  const [model, setModel] = useState("Golf");
  const [year, setYear] = useState("2021");
  const [fuel, setFuel] = useState("Petrol");
  const [mileage, setMileage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredServices = activeCategory === "All" ? services : services.filter((service) => service.category === activeCategory);
  const selected = useMemo(() => services.filter((service) => selectedServices.includes(service.id)), [selectedServices]);
  const total = selected.reduce((sum, service) => sum + service.price, 0);

  function toggleService(id: string) {
    setSelectedServices((current) => current.includes(id) ? current.filter((serviceId) => serviceId !== id) : [...current, id]);
  }

  function updateMake(value: string) {
    setMake(value);
    setModel(makes[value][0]);
  }

  const navItems = [["Services", "#services"], ["Estimate", "#estimate"], ["Booking", "#booking"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#0a0d10] text-[#f4f7f8] selection:bg-[#d8ff3e] selection:text-black">
      <div className="bg-[#d8ff3e] px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#101410]">Concept project · Estimates and bookings are demonstrations unless submitted through the enquiry form</div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d10]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Autoflow home"><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#d8ff3e] text-sm font-black italic text-black">AF</span><span><span className="block text-lg font-black uppercase tracking-[-0.03em]">Autoflow</span><span className="block text-[9px] uppercase tracking-[0.2em] text-white/40">Auto-service concept</span></span></a>
          <nav className="hidden items-center gap-7 text-sm text-white/55 lg:flex" aria-label="Workshop navigation">{navItems.map(([label, href]) => <a key={href} href={href} className="hover:text-[#d8ff3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8ff3e]">{label}</a>)}</nav>
          <div className="flex items-center gap-2"><a href="#booking" className="hidden rounded-lg bg-white px-5 py-3 text-sm font-bold text-black hover:bg-[#d8ff3e] sm:inline-flex">Book a service</a><button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="autoflow-mobile-nav" className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 lg:hidden"><span className="sr-only">Toggle navigation</span><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button></div>
        </div>
        {menuOpen && <nav id="autoflow-mobile-nav" className="border-t border-white/10 bg-[#0d1115] px-5 py-4 lg:hidden" aria-label="Mobile workshop navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-4 text-lg text-white/75 last:border-0">{label}</a>)}</nav>}
      </header>

      <section className="relative px-5 py-20 sm:px-7 sm:py-28 lg:px-10 lg:py-32">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Vehicle maintenance & repair</p><h1 className="mt-7 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">Trusted work. <span className="text-white/28">Clear decisions.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/50">Autoflow helps drivers understand service options, preview starting costs, and request a workshop appointment without the usual uncertainty.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#estimate" className="rounded-lg bg-[#d8ff3e] px-7 py-4 text-center text-sm font-bold text-black hover:-translate-y-0.5 motion-reduce:transform-none">Get an estimate</a><a href="#booking" className="rounded-lg border border-white/20 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold hover:border-white/40">Book a service</a></div><div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6"><div><p className="text-2xl font-black">6</p><p className="mt-1 text-xs text-white/35">Service categories</p></div><div><p className="text-2xl font-black">14</p><p className="mt-1 text-xs text-white/35">Estimate options</p></div><div><p className="text-2xl font-black">4-step</p><p className="mt-1 text-xs text-white/35">Workshop process</p></div></div></div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,#1a2025,#0c1013)] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.55)] sm:min-h-[580px] sm:p-9"><div className="absolute -right-20 top-16 h-80 w-80 rounded-full border-[46px] border-[#d8ff3e]/80 opacity-75" aria-hidden="true" /><div className="absolute bottom-0 left-[15%] h-[45%] w-[70%] skew-x-[-14deg] rounded-t-[100px] bg-[linear-gradient(155deg,#64717a,#151a1e_55%,#050607)] shadow-2xl" aria-hidden="true"><div className="absolute -bottom-10 left-8 h-28 w-28 rounded-full border-[18px] border-[#20272c] bg-[#080a0c]" /><div className="absolute -bottom-10 right-8 h-28 w-28 rounded-full border-[18px] border-[#20272c] bg-[#080a0c]" /><div className="absolute left-[20%] top-7 h-12 w-[42%] skew-x-[12deg] rounded-t-3xl bg-[#9fb4bf]/35" /></div><div className="relative flex h-full flex-col justify-between"><div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/45"><span>Workshop concept</span><span>Autoflow · 2026</span></div><div className="w-fit rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur"><p className="text-[10px] uppercase tracking-wider text-[#d8ff3e]">Next available</p><p className="mt-1 text-xl font-bold">Tomorrow · 08:30</p></div></div></div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-y border-white/10 bg-[#0d1115] px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-7 lg:grid-cols-[1fr_0.42fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Service catalogue</p><h2 className="mt-5 max-w-4xl text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">Start with what your vehicle needs.</h2></div><p className="leading-7 text-white/45">Filter the catalogue, compare starting prices, and add services to the demo estimate below.</p></div><div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter automotive services">{categories.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-lg px-4 py-3 text-sm font-bold ${activeCategory === category ? "bg-[#d8ff3e] text-black" : "border border-white/10 bg-white/[0.035] text-white/60 hover:border-white/25 hover:text-white"}`}>{category}</button>)}</div>
          <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredServices.map((service) => { const isSelected = selectedServices.includes(service.id); return <article key={service.id} className="flex min-h-[285px] flex-col rounded-2xl border border-white/10 bg-[#11161a] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:[transform:translateY(-4px)] hover:border-[#d8ff3e]/30 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)] focus-within:border-[#d8ff3e]/45 motion-reduce:hover:[transform:none] motion-reduce:transition-none"><div className="flex items-start justify-between gap-5"><span className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/45">{service.category}</span><p className="invisible shrink-0 font-black text-[#d8ff3e]" aria-hidden="true">From {euro(service.price)}</p></div><h3 className="mt-8 text-xl font-bold">{service.name}</h3><p className="mt-3 text-sm leading-6 text-white/45">{service.description}</p><div className="mt-auto flex items-end justify-between gap-4 pt-7"><p className="text-xs text-white/35">Estimated time<br /><strong className="mt-1 block text-white/65">{service.duration}</strong></p><button type="button" onClick={() => toggleService(service.id)} aria-pressed={isSelected} className={`rounded-lg px-4 py-3 text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d8ff3e] ${isSelected ? "bg-[#d8ff3e] text-black" : "border border-white/15 hover:border-[#d8ff3e]/50"}`}>{isSelected ? "Selected ✓" : "Add to estimate"}</button></div></article>; })}</div>
        </div></section>

      <section id="estimate" className="scroll-mt-24 px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[28px] border border-white/10 bg-[#11161a] p-6 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Vehicle selector</p><h2 className="mt-5 text-3xl font-black uppercase sm:text-5xl">Build a demo estimate.</h2><div className="mt-9 grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Make<select value={make} onChange={(event) => updateMake(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#090d10] px-4 py-4 font-normal outline-none focus:border-[#d8ff3e]">{Object.keys(makes).map((item) => <option key={item}>{item}</option>)}</select></label><label className="text-sm font-bold">Model<select value={model} onChange={(event) => setModel(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#090d10] px-4 py-4 font-normal outline-none focus:border-[#d8ff3e]">{makes[make].map((item) => <option key={item}>{item}</option>)}</select></label><label className="text-sm font-bold">Year<select value={year} onChange={(event) => setYear(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#090d10] px-4 py-4 font-normal outline-none focus:border-[#d8ff3e]">{Array.from({ length: 17 }, (_, index) => String(2026 - index)).map((item) => <option key={item}>{item}</option>)}</select></label><label className="text-sm font-bold">Fuel type<select value={fuel} onChange={(event) => setFuel(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#090d10] px-4 py-4 font-normal outline-none focus:border-[#d8ff3e]"><option>Petrol</option><option>Diesel</option><option>Hybrid</option><option>Electric</option></select></label><label className="text-sm font-bold sm:col-span-2">Current mileage<input value={mileage} onChange={(event) => setMileage(event.target.value)} inputMode="numeric" placeholder="e.g. 82,000 km" className="mt-2 w-full rounded-xl border border-white/10 bg-[#090d10] px-4 py-4 font-normal outline-none placeholder:text-white/20 focus:border-[#d8ff3e]" /></label></div><a href="#services" className="mt-7 inline-flex text-sm font-bold text-[#d8ff3e]">+ Add services from the catalogue</a></div>
          <aside className="rounded-[28px] bg-[#d8ff3e] p-6 text-[#111510] sm:p-9" aria-labelledby="estimate-summary-title"><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">Non-binding estimate</p><h3 id="estimate-summary-title" className="mt-4 text-3xl font-black uppercase">Estimate summary</h3><p className="mt-2 text-sm text-black/60">{year} {make} {model} · {fuel}{mileage ? ` · ${mileage}` : ""}</p>{selected.length ? <div className="mt-7 space-y-3">{selected.map((service) => <div key={service.id} className="flex justify-between gap-4 border-b border-black/15 pb-3 text-sm"><span className="font-semibold">{service.name}</span><span className="invisible shrink-0" aria-hidden="true">{euro(service.price)}</span></div>)}</div> : <p className="mt-7 rounded-xl border border-dashed border-black/25 p-5 text-sm leading-6 text-black/60">No services selected. Add one or more catalogue items to calculate a starting total.</p>}<div className="mt-7 flex items-end justify-between border-t border-black/20 pt-5"><span className="font-bold">Estimated from</span><span className="invisible text-4xl font-black" aria-hidden="true">{euro(total)}</span></div><p className="mt-5 text-xs leading-5 text-black/55">Demo estimate only. Final parts, labour, and repair costs depend on vehicle specification and workshop inspection. This is not a binding quotation.</p><a href="#booking" className="mt-7 flex w-full justify-center rounded-lg bg-black px-5 py-4 text-sm font-bold text-white">Request this service plan</a></aside>
        </div></section>

      <section id="about" className="scroll-mt-24 border-y border-white/10 bg-[#0d1115] px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Why Autoflow</p><h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">Workshop standards without the guesswork.</h2><p className="mt-6 max-w-xl leading-7 text-white/45">A service-centre concept focused on clear communication, documented inspections, and decisions made with the customer.</p></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(([title, description]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><span className="block h-2 w-2 rounded-full bg-[#d8ff3e]" /><h3 className="mt-8 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/40">{description}</p></article>)}</div></div><div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">{process.map(([number, title, description]) => <article key={number} className="min-h-[260px] bg-[#0a0d10] p-6"><span className="text-xs font-bold text-[#d8ff3e]">{number}</span><h3 className="mt-10 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/40">{description}</p></article>)}</div></div></section>

      <section className="px-5 py-24 sm:px-7 lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Driver feedback · Concept content</p><div className="mt-10 grid gap-4 lg:grid-cols-3">{reviews.map(([quote, name, service]) => <figure key={name} className="flex min-h-[280px] flex-col rounded-2xl border border-white/10 bg-[#11161a] p-7"><div className="text-[#d8ff3e]" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-7 text-lg leading-8 text-white/70">“{quote}”</blockquote><figcaption className="mt-auto pt-7 text-sm"><strong>{name}</strong><span className="ml-2 text-white/35">· {service}</span></figcaption></figure>)}</div></div></section>

      <section id="booking" className="scroll-mt-24 bg-[#151b20] px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Service booking enquiry</p><h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">Request a workshop appointment.</h2><p className="mt-6 leading-7 text-white/45">Send your preferred date, vehicle details, and service need through the existing Autoflow enquiry flow. The workshop must confirm availability and pricing.</p><div className="mt-9 rounded-2xl border border-[#d8ff3e]/20 bg-[#d8ff3e]/5 p-5 text-sm leading-6 text-white/55"><strong className="text-[#d8ff3e]">Not an instant booking.</strong><br />A successful form submission confirms receipt of an enquiry, not a workshop appointment.</div></div><ProjectForm selectedServices={selected.map((service) => service.name)} /></div></section>

      <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-7 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Contact & workshop</p><h2 className="mt-5 text-4xl font-black uppercase sm:text-5xl">Built for drivers. Ready for the next job.</h2><address className="mt-8 space-y-4 not-italic text-white/50"><p>42 Steelworks Avenue<br />1000 Brussels, Belgium</p><p><a href="tel:+3225550199" className="hover:text-[#d8ff3e]">+32 2 555 01 99</a><br /><a href="mailto:service@autoflow.example" className="hover:text-[#d8ff3e]">service@autoflow.example</a></p></address><div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/45"><p className="font-bold text-white">Opening hours</p><div className="mt-2 flex justify-between"><span>Monday–Friday</span><span>07:30–18:00</span></div><div className="flex justify-between"><span>Saturday</span><span>08:00–14:00</span></div><div className="flex justify-between"><span>Sunday</span><span>Closed</span></div></div><div className="mt-7 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-xs leading-5 text-white/45"><strong className="text-red-300">Roadside emergency?</strong> This concept workshop does not provide emergency recovery. Contact your insurer or local roadside assistance provider.</div><p className="mt-6 text-xs text-white/30">Concept contact details — Autoflow is not a real workshop.</p></div><div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#151b20]" role="img" aria-label="Map placeholder showing the Autoflow concept workshop"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(30deg,transparent_45%,#64717a_46%,#64717a_48%,transparent_49%),linear-gradient(110deg,transparent_45%,#64717a_46%,#64717a_48%,transparent_49%)] [background-size:120px_100px]" /><div className="absolute left-[54%] top-[46%] -translate-x-1/2 -translate-y-1/2 text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-[#d8ff3e] font-black italic text-black shadow-xl">AF</span><span className="mt-3 block rounded-lg bg-black/80 px-4 py-2 text-xs font-bold">Autoflow · Concept location</span></div></div></div></section>

      <section className="border-y border-white/10 bg-[#0d1115] px-5 py-20 sm:px-7 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Optional integrations</p><h2 className="mt-5 max-w-3xl text-3xl font-black uppercase sm:text-5xl">Connect the workshop journey.</h2></div><p className="max-w-md text-sm leading-6 text-white/40">Integration cards demonstrate possible connections. Payments and automated confirmations are not active.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{integrations.map((item) => <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-5"><span className="font-bold">{item}</span><span className="text-[#d8ff3e]">↗</span></div>)}</div></div></section>

      <section className="bg-[#0d1115] px-5 py-20 sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[24px] border border-white/10 bg-[#11161a] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8ff3e]">A YY Builds portfolio concept</p><h2 className="mt-3 text-2xl font-black uppercase sm:text-3xl">Want a site like this?</h2><p className="mt-2 text-sm text-white/45">Start a business website project for your own company.</p></div><PurchaseButton productId="business-website" className="shrink-0">Start a similar project</PurchaseButton></div></section>
      <footer className="px-5 py-10 sm:px-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/35 sm:flex-row sm:items-center"><div><p className="font-black uppercase text-white">Autoflow</p><p className="mt-1">Auto-service website concept created by YY Builds.</p></div><div className="flex items-center gap-5"><a href="#top" className="hover:text-white">Back to top</a><Link href="/#work" className="rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:border-[#d8ff3e] hover:text-[#d8ff3e]">Back to YY Builds portfolio →</Link></div></div></footer>
    </main>
  );
}
