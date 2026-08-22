"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { availableDates, serviceById, services, specialistById, specialists, timeSlots, type DemoBooking, type SpecialistId, type StudioServiceId } from "./config";

type Props = { onConfirm: (booking: DemoBooking) => void; onDashboard: () => void };
type Customer = { name: string; email: string; phone: string; notes: string };
type CustomerField = keyof Pick<Customer, "name" | "email" | "phone">;

const steps = ["Service", "Specialist", "Date & time", "Your details", "Review", "Confirmed"];
export default function BookingFlow({ onConfirm, onDashboard }: Props) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<StudioServiceId>("haircut");
  const [specialist, setSpecialist] = useState<SpecialistId>("any");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customer, setCustomer] = useState<Customer>({ name: "", email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Partial<Record<CustomerField, string>>>({});
  const [confirmed, setConfirmed] = useState<DemoBooking | null>(null);
  const bookingRef = useRef<HTMLElement>(null);
  const bookingSequence = useRef(0);
  const stableId = useId().replace(/[^a-z0-9]/gi, "").toUpperCase();
  const selectedService = serviceById(service);
  const selectedSpecialist = specialistById(specialist);

  function openBooking(nextService?: StudioServiceId) {
    if (nextService) setService(nextService);
    setStep(nextService ? 2 : 1);
    window.requestAnimationFrame(() => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function validateCustomer() {
    const next: Partial<Record<CustomerField, string>> = {};
    if (!customer.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(customer.email.trim())) next.email = "Enter a valid email address.";
    if (customer.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a valid phone number.";
    setErrors(next);
    if (Object.keys(next).length) {
      window.requestAnimationFrame(() => document.getElementById(`studio-${Object.keys(next)[0]}`)?.focus());
      return false;
    }
    return true;
  }

  function next() {
    if (step === 3 && (!date || !time)) return;
    if (step === 4 && !validateCustomer()) return;
    setStep((current) => Math.min(5, current + 1));
  }

  function confirm() {
    bookingSequence.current += 1;
    const token = `${stableId.slice(-4).padStart(4, "Y")}${bookingSequence.current}`;
    const booking: DemoBooking = { id: `local-${token}`, reference: `YS-${token}`, customer: customer.name.trim(), email: customer.email.trim(), phone: customer.phone.trim(), notes: customer.notes.trim(), service, specialist, date, time, price: selectedService.price, status: "Confirmed" };
    onConfirm(booking);
    setConfirmed(booking);
    setStep(6);
    window.requestAnimationFrame(() => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function reset() {
    setStep(1); setService("haircut"); setSpecialist("any"); setDate(""); setTime(""); setCustomer({ name: "", email: "", phone: "", notes: "" }); setErrors({}); setConfirmed(null);
  }

  return <main>
    <section className="studio-hero">
      <Image src="/yy-booking/studio-hero.png" alt="Fictional luxury studio interior prepared for appointments" fill priority sizes="100vw" className="studio-hero-image" />
      <div className="studio-hero-shade" aria-hidden="true" />
      <div className="studio-shell studio-hero-content">
        <p className="studio-eyebrow">Premium booking experience</p>
        <h1>Book your next<br />appointment with ease.</h1>
        <p>Choose a service, select your preferred time, and confirm your appointment in just a few steps.</p>
        <div className="studio-actions"><button type="button" onClick={() => openBooking()} className="studio-button studio-button-primary">Book an Appointment <span>↗</span></button><a href="#services" className="studio-button studio-button-secondary">Explore Services <span>↓</span></a></div>
        <span className="studio-demo-chip">Fictional studio · Interactive product demo</span>
      </div>
    </section>

    <section id="services" className="studio-section studio-shell scroll-mt-24">
      <div className="studio-section-heading"><div><p className="studio-eyebrow">The studio menu</p><h2>Carefully considered services.</h2></div><p>Sample services and availability demonstrate how the template can present a real business offer.</p></div>
      <div className="studio-service-grid">{services.map((item) => <article key={item.id} className="studio-service-card"><div className="studio-service-image"><Image src="/yy-booking/studio-hero.png" alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: item.imagePosition }} /></div><div className="studio-service-body"><div className="studio-service-meta"><span>{item.duration} min</span><span>Pricing based on scope</span></div><h3>{item.name}</h3><p>{item.description}</p><button type="button" onClick={() => openBooking(item.id)} className="studio-text-button">Book this service <span>↗</span></button></div></article>)}</div>
    </section>

    <section id="booking" ref={bookingRef} className="studio-booking-section scroll-mt-20">
      <div className="studio-shell">
        <div className="studio-booking-heading"><div><p className="studio-eyebrow">Interactive booking demo</p><h2>{step === 6 ? "Your appointment is ready." : "A clear path from choice to confirmation."}</h2></div>{step < 6 && <p>Demo selections stay in this browser. No real appointment or payment is created.</p>}</div>
        <nav className="studio-progress" aria-label="Booking progress">{steps.map((label, index) => { const number = index + 1; return <div key={label} className={number === step ? "is-current" : number < step ? "is-complete" : ""} aria-current={number === step ? "step" : undefined}><span>{number < step ? "✓" : String(number).padStart(2, "0")}</span><small>{label}</small></div>; })}</nav>
        <div className="studio-wizard" key={step}>
          {step === 1 && <StepPanel eyebrow="Step 1" title="Choose your service" copy="Select the experience that best fits your visit."><div className="studio-choice-grid">{services.map((item) => <Choice key={item.id} active={service === item.id} onClick={() => setService(item.id)} title={item.name} meta={`${item.duration} min · Pricing based on scope`} copy={item.description} />)}</div></StepPanel>}
          {step === 2 && <StepPanel eyebrow="Step 2" title="Choose a specialist" copy="Select a fictional demo specialist or choose the first available appointment."><div className="studio-specialist-grid">{specialists.map((item) => <button key={item.id} type="button" aria-pressed={specialist === item.id} onClick={() => setSpecialist(item.id)} className={`studio-specialist ${specialist === item.id ? "is-selected" : ""}`}><span className="studio-avatar">{item.initials}</span><span><strong>{item.name}</strong><small>{item.role}</small><em>{item.specialty}</em><mark>{item.availability}</mark></span></button>)}</div></StepPanel>}
          {step === 3 && <StepPanel eyebrow="Step 3" title="Choose a date and time" copy="Unavailable dates are shown clearly. Times below are fictional demo availability."><fieldset><legend className="studio-field-label">Available dates</legend><div className="studio-date-grid">{availableDates.map((item) => <button key={item.value} type="button" disabled={!item.available} aria-pressed={date === item.value} onClick={() => { setDate(item.value); setTime(""); }} className={date === item.value ? "is-selected" : ""}><small>{item.day}</small><strong>{item.date}</strong><span>{item.month}</span>{!item.available && <em>Closed</em>}</button>)}</div></fieldset><fieldset className="mt-8"><legend className="studio-field-label">Available times</legend><div className="studio-time-grid">{timeSlots.map((slot, index) => <button key={slot} type="button" disabled={!date || index === 3} aria-pressed={time === slot} onClick={() => setTime(slot)} className={time === slot ? "is-selected" : ""}>{slot}{index === 3 && <small>Unavailable</small>}</button>)}</div>{date && !time && <p className="studio-help">Choose one available time to continue.</p>}</fieldset></StepPanel>}
          {step === 4 && <StepPanel eyebrow="Step 4" title="Your details" copy="These details are used only to simulate the confirmation experience in this browser."><div className="studio-form-grid"><StudioInput field="name" label="Full name" value={customer.name} error={errors.name} onChange={(value) => setCustomer({ ...customer, name: value })} /><StudioInput field="email" type="email" label="Email address" value={customer.email} error={errors.email} onChange={(value) => setCustomer({ ...customer, email: value })} /><StudioInput field="phone" type="tel" label="Phone number" value={customer.phone} error={errors.phone} onChange={(value) => setCustomer({ ...customer, phone: value })} /><label className="studio-field studio-field-wide">Notes <span>Optional</span><textarea rows={4} value={customer.notes} onChange={(event) => setCustomer({ ...customer, notes: event.target.value })} placeholder="Anything the studio should know?" /></label></div></StepPanel>}
          {step === 5 && <StepPanel eyebrow="Step 5" title="Review your booking" copy="Confirm the demo details below. No payment is requested."><Review booking={{ service: selectedService.name, specialist: selectedSpecialist.name, date, time, customer: customer.name, duration: `${selectedService.duration} minutes`, pricing: "Pricing based on scope" }} /><div className="studio-notice">This is a simulated appointment. A production template requires a connected booking backend, database, email, or calendar service.</div></StepPanel>}
          {step === 6 && confirmed && <div className="studio-confirmation"><span className="studio-confirmation-icon">✓</span><p className="studio-eyebrow">Booking confirmed · Demo</p><h2>We’ll see you at the studio.</h2><p>A simulated confirmation has been prepared for <strong>{confirmed.customer}</strong>. No real appointment was created and no message was sent.</p><Review booking={{ service: selectedService.name, specialist: selectedSpecialist.name, date, time, customer: confirmed.customer, duration: `${selectedService.duration} minutes`, pricing: "Pricing based on scope" }} /><div className="studio-reference"><span>Demo reference</span><strong>{confirmed.reference}</strong></div><div className="studio-actions justify-center"><button type="button" onClick={onDashboard} className="studio-button studio-button-primary">View owner preview <span>→</span></button><button type="button" onClick={reset} className="studio-button studio-button-secondary">Book another demo</button></div></div>}
          {step < 6 && <div className="studio-wizard-actions"><button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1} className="studio-back">← Back</button>{step === 5 ? <button type="button" onClick={confirm} className="studio-button studio-button-primary">Confirm demo booking <span>✓</span></button> : <button type="button" onClick={next} disabled={step === 3 && (!date || !time)} className="studio-button studio-button-primary">Continue <span>→</span></button>}</div>}
        </div>
      </div>
    </section>
  </main>;
}

function StepPanel({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children: React.ReactNode }) { return <div className="studio-step"><div className="studio-step-heading"><p>{eyebrow}</p><h3>{title}</h3><span>{copy}</span></div>{children}</div>; }
function Choice({ active, onClick, title, meta, copy }: { active: boolean; onClick: () => void; title: string; meta: string; copy: string }) { return <button type="button" aria-pressed={active} onClick={onClick} className={`studio-choice ${active ? "is-selected" : ""}`}><span className="studio-choice-check">{active ? "✓" : "+"}</span><strong>{title}</strong><small>{meta}</small><em>{copy}</em></button>; }
function StudioInput({ field, label, value, error, onChange, type = "text" }: { field: CustomerField; label: string; value: string; error?: string; onChange: (value: string) => void; type?: string }) { return <label className="studio-field" htmlFor={`studio-${field}`}>{label}<input id={`studio-${field}`} type={type} value={value} onChange={(event) => onChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `studio-${field}-error` : undefined} autoComplete={field === "name" ? "name" : field === "email" ? "email" : "tel"} />{error && <span id={`studio-${field}-error`} role="alert">{error}</span>}</label>; }
function Review({ booking }: { booking: Record<string, string> }) { return <dl className="studio-review">{Object.entries(booking).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || "—"}</dd></div>)}</dl>; }
