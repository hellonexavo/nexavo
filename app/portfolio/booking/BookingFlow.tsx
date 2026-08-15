"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import PayPalCheckout from "./PayPalCheckout";
import { calculatePrice, copy, extraIds, frequencyIds, serviceIds, timeSlots, type DemoBooking, type ExtraId, type FrequencyId, type Language, type ServiceId } from "./config";

type Props = { language: Language; paypalClientId: string; onConfirm: (booking: DemoBooking) => void; onDashboard: () => void };
type PaymentResult = { orderID: string; captureID: string; status: string };

const inputClass = "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-950 outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100";
type FieldName = "date" | "time" | "name" | "email" | "phone" | "address";

export default function BookingFlow({ language, paypalClientId, onConfirm, onDashboard }: Props) {
  const t = copy[language];
  const [service, setService] = useState<ServiceId>("regular");
  const [size, setSize] = useState(75);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [extras, setExtras] = useState<ExtraId[]>([]);
  const [frequency, setFrequency] = useState<FrequencyId>("once");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState<DemoBooking | null>(null);
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const price = useMemo(() => calculatePrice({ service, size, bedrooms, bathrooms, extras, frequency }), [service, size, bedrooms, bathrooms, extras, frequency]);
  const paymentInput = useMemo(() => ({ service, size, bedrooms, bathrooms, extras, frequency }), [service, size, bedrooms, bathrooms, extras, frequency]);
  const currency = (value: number) => new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const toggleExtra = (extra: ExtraId) => setExtras((current) => current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra]);

  function reset() {
    formRef.current?.reset();
    setService("regular"); setSize(75); setBedrooms(2); setBathrooms(1); setExtras([]); setFrequency("once"); setDate(""); setTime(""); setSuccess(null); setPaymentResult(null); setError(""); setFieldErrors({});
  }

  function clearFieldError(field: FieldName) {
    setError("");
    setFieldErrors((current) => current[field] ? { ...current, [field]: undefined } : current);
  }

  const validateBooking = useCallback(() => {
    setError("");
    const form = formRef.current;
    if (!form) return false;
    const data = new FormData(form);
    const customer = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!date) nextErrors.date = t.required;
    if (!time) nextErrors.time = t.required;
    if (!customer) nextErrors.name = t.required;
    if (!email) nextErrors.email = t.required;
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = t.invalidEmail;
    if (!phone) nextErrors.phone = t.required;
    else if (phone.replace(/\D/g, "").length < 8) nextErrors.phone = t.invalidPhone;
    if (!address) nextErrors.address = t.required;
    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      setError(Object.values(nextErrors)[0] || t.required);
      const firstField = Object.keys(nextErrors)[0];
      window.requestAnimationFrame(() => document.getElementById(`booking-${firstField}`)?.focus());
      return false;
    }
    return true;
  }, [date, time, t]);

  const buildBooking = useCallback((status: DemoBooking["status"]) => {
    if (!validateBooking() || !formRef.current) return null;
    const data = new FormData(formRef.current);
    const customer = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const token = `${Date.now().toString(36).slice(-4)}${Math.random().toString(36).slice(2, 4)}`.toUpperCase();
    return { id: `local-${Date.now()}`, reference: `YB-${token}`, customer, email, phone, address, notes: String(data.get("notes") || "").trim(), service, frequency, size, bedrooms, bathrooms, extras, date, time, price, status } satisfies DemoBooking;
  }, [bathrooms, bedrooms, date, extras, frequency, price, service, size, time, validateBooking]);

  const handlePaymentSuccess = useCallback((result: PaymentResult) => {
    const booking = buildBooking("Confirmed");
    if (!booking) return;
    setPaymentResult(result);
    onConfirm(booking);
    setSuccess(booking);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [buildBooking, onConfirm]);

  if (success && paymentResult) return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-5 py-20 sm:px-7">
      <div className="w-full rounded-[36px] border border-cyan-100 bg-white p-7 text-center shadow-[0_30px_90px_rgba(15,23,42,0.10)] sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl text-cyan-800" aria-hidden="true">✓</div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">{t.demo}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Payment successful</h1>
        <p className="mt-3 text-lg font-semibold text-cyan-800">Demo booking confirmed</p>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">The sandbox payment was captured successfully. No real money was charged.</p>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-left"><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">PayPal sandbox references</p><dl className="mt-4 space-y-3 text-sm"><div><dt className="text-emerald-800/60">Order reference</dt><dd className="mt-1 break-all font-mono font-semibold text-emerald-950">{paymentResult.orderID}</dd></div><div><dt className="text-emerald-800/60">Capture reference</dt><dd className="mt-1 break-all font-mono font-semibold text-emerald-950">{paymentResult.captureID}</dd></div></dl></div>
        <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-slate-950 p-5 text-white"><p className="text-xs uppercase tracking-wider text-white/55">{t.reference}</p><p className="mt-2 break-all font-mono text-2xl font-bold tracking-wider">{success.reference}</p></div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><button type="button" onClick={onDashboard} className="min-h-12 rounded-full bg-cyan-700 px-6 py-3.5 font-semibold text-white hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">{t.viewDashboard}</button><button type="button" onClick={reset} className="min-h-12 rounded-full border border-slate-300 px-6 py-3.5 font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">{t.reset}</button></div>
      </div>
    </section>
  );

  return (
    <form ref={formRef} onSubmit={(event) => event.preventDefault()} noValidate>
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-7 sm:pb-28 sm:pt-24 lg:px-10">
        <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">{t.eyebrow}</p><h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-7xl lg:text-[82px]">{t.hero}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p><a href="#quote" className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white hover:-translate-y-0.5 hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">{t.start} →</a></div>
          <div className="rounded-[32px] border border-white bg-white/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8"><div className="flex items-center justify-between"><span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-800">Live demo</span><span className="text-sm text-slate-400">01 / 04</span></div><p className="mt-10 text-sm text-slate-500">{t.estimate}</p><p className="mt-2 text-5xl font-semibold tracking-tight text-slate-950">{currency(price)}</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm"><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-400">{t.service}</p><p className="mt-1 font-semibold text-slate-800">{t[service]}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-400">{t.size}</p><p className="mt-1 font-semibold text-slate-800">{size} m²</p></div></div></div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">01 · {t.service}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{t.servicesTitle}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">{t.servicesIntro}</p><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{serviceIds.map((id, index) => { const active = service === id; return <button key={id} type="button" onClick={() => setService(id)} aria-pressed={active} className={`min-h-64 rounded-[26px] border p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 ${active ? "border-cyan-600 bg-cyan-50 shadow-[0_18px_45px_rgba(8,145,178,0.12)]" : "border-slate-200 bg-white hover:-translate-y-1 hover:border-cyan-300"}`}><span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold ${active ? "bg-cyan-700 text-white" : "bg-slate-100 text-slate-600"}`}>0{index + 1}</span><span className="mt-8 block text-xl font-semibold text-slate-950">{t[id]}</span><span className="mt-3 block text-sm leading-6 text-slate-500">{t[`${id}Text` as keyof typeof t]}</span><span className="mt-6 block text-sm font-bold text-cyan-800">{active ? `✓ ${t.selected}` : `${t.choose} →`}</span></button>; })}</div></div></section>

      <section id="quote" className="scroll-mt-28 px-5 py-20 sm:px-7 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.55fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">02 · {t.quote}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{t.quote}</h2><p className="mt-3 text-slate-500">{t.quoteIntro}</p>
          <div className="mt-9 grid gap-6 sm:grid-cols-3"><label className="text-sm font-semibold text-slate-700">{t.size} (m²)<input type="number" min="20" max="500" value={size} onChange={(e) => setSize(Math.min(500, Math.max(20, Number(e.target.value) || 20)))} className={inputClass} /></label><label className="text-sm font-semibold text-slate-700">{t.bedrooms}<select value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))} className={inputClass}>{[0,1,2,3,4,5,6].map((n) => <option key={n}>{n}</option>)}</select></label><label className="text-sm font-semibold text-slate-700">{t.bathrooms}<select value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))} className={inputClass}>{[1,2,3,4,5].map((n) => <option key={n}>{n}</option>)}</select></label></div>
          <fieldset className="mt-8"><legend className="text-sm font-semibold text-slate-700">{t.extras}</legend><div className="mt-3 grid gap-3 sm:grid-cols-2">{extraIds.map((id) => <label key={id} className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 ${extras.includes(id) ? "border-cyan-500 bg-cyan-50" : "border-slate-200"}`}><span className="flex items-center gap-3 text-sm font-medium text-slate-800"><input type="checkbox" checked={extras.includes(id)} onChange={() => toggleExtra(id)} className="h-4 w-4 accent-cyan-700" />{t[id]}</span><span className="text-xs text-slate-400">+€{({windows:28,oven:24,fridge:16,ironing:20})[id]}</span></label>)}</div></fieldset>
          <fieldset className="mt-8"><legend className="text-sm font-semibold text-slate-700">{t.frequency}</legend><div className="mt-3 grid gap-3 sm:grid-cols-3">{frequencyIds.map((id) => <button key={id} type="button" onClick={() => setFrequency(id)} aria-pressed={frequency === id} className={`min-h-12 rounded-2xl border px-4 py-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${frequency === id ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 text-slate-700 hover:border-cyan-400"}`}>{t[id]}{id !== "once" && <span className="ml-1 text-xs opacity-60">-{id === "weekly" ? 15 : 8}%</span>}</button>)}</div></fieldset>
        </div>
        <aside className="flex flex-col rounded-[30px] bg-slate-950 p-7 text-white sm:p-9 lg:sticky lg:top-28 lg:self-start"><p className="text-sm text-white/55">{t.estimate}</p><p className="mt-3 text-5xl font-semibold tracking-tight">{currency(price)}</p><p className="mt-3 text-sm text-cyan-200">{t.estimateNote}</p><dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm"><div className="flex justify-between gap-5"><dt className="text-white/50">{t.service}</dt><dd className="text-right font-medium">{t[service]}</dd></div><div className="flex justify-between"><dt className="text-white/50">{t.size}</dt><dd>{size} m²</dd></div><div className="flex justify-between"><dt className="text-white/50">{t.frequency}</dt><dd>{t[frequency]}</dd></div><div className="flex justify-between"><dt className="text-white/50">{t.extras}</dt><dd>{extras.length || "—"}</dd></div></dl><a href="#schedule" className="mt-8 rounded-full bg-cyan-400 px-5 py-3.5 text-center font-semibold text-slate-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">{t.schedule} →</a></aside>
      </div></section>

      <section id="schedule" className="scroll-mt-28 border-y border-slate-200 bg-white px-5 py-20 sm:px-7 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">03 · {t.schedule}</p><h2 className="mt-4 break-words text-4xl font-semibold tracking-[-0.04em] text-slate-950">{t.schedule}</h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">{t.date}<input id="booking-date" required type="date" value={date} onChange={(e) => { setDate(e.target.value); clearFieldError("date"); }} aria-invalid={Boolean(fieldErrors.date)} aria-describedby={fieldErrors.date ? "booking-date-error" : undefined} className={inputClass} />{fieldErrors.date && <FieldError id="booking-date-error" message={fieldErrors.date} />}</label><label className="text-sm font-semibold text-slate-700">{t.time}<select id="booking-time" required value={time} onChange={(e) => { setTime(e.target.value); clearFieldError("time"); }} aria-invalid={Boolean(fieldErrors.time)} aria-describedby={fieldErrors.time ? "booking-time-error" : undefined} className={inputClass}><option value="">—</option>{timeSlots.map((slot) => <option key={slot}>{slot}</option>)}</select>{fieldErrors.time && <FieldError id="booking-time-error" message={fieldErrors.time} />}</label></div></div>
        <div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">04 · {t.details}</p><h2 className="mt-4 break-words text-4xl font-semibold tracking-[-0.04em] text-slate-950">{t.details}</h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><BookingInput field="name" label={t.fullName} autoComplete="name" error={fieldErrors.name} onInput={() => clearFieldError("name")} /><BookingInput field="email" label={t.email} type="email" autoComplete="email" error={fieldErrors.email} onInput={() => clearFieldError("email")} /><BookingInput field="phone" label={t.phone} type="tel" autoComplete="tel" error={fieldErrors.phone} onInput={() => clearFieldError("phone")} /><BookingInput field="address" label={t.address} autoComplete="street-address" error={fieldErrors.address} onInput={() => clearFieldError("address")} /><label className="min-w-0 text-sm font-semibold text-slate-700 sm:col-span-2">{t.notes}<textarea name="notes" rows={4} placeholder={t.notesHint} className={`${inputClass} resize-y`} /></label></div></div></div></section>

      <section className="px-5 py-20 sm:px-7 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 rounded-[34px] bg-cyan-50 p-6 sm:p-9 lg:grid-cols-[1fr_0.65fr] lg:p-12"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">{t.summary}</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{t.summary}</h2><p className="mt-3 text-slate-600">{t.editHint}</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><Summary label={t.service} value={t[service]} /><Summary label={t.estimate} value={currency(price)} /><Summary label={t.appointment} value={date && time ? `${date} · ${time}` : "—"} /><Summary label={t.frequency} value={t[frequency]} /></div></div><div className="rounded-[26px] bg-white p-6 shadow-sm sm:p-8"><p className="text-sm leading-6 text-slate-500">{t.privacy}</p>{error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 p-4 text-sm font-medium text-rose-700">{error}</p>}<PayPalCheckout clientId={paypalClientId} booking={paymentInput} serviceName={t[service]} formattedTotal={currency(price)} validateBooking={validateBooking} onPaymentSuccess={handlePaymentSuccess} /><button type="button" onClick={reset} className="mt-4 w-full rounded-full px-6 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700">{t.reset}</button></div></div></section>
    </form>
  );
}

function Summary({ label, value }: { label: string; value: string }) { return <div className="min-w-0 rounded-2xl border border-cyan-100 bg-white/75 p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-1 break-words font-semibold text-slate-900">{value}</p></div>; }

function FieldError({ id, message }: { id: string; message: string }) { return <span id={id} className="mt-2 block text-xs font-medium text-rose-700">{message}</span>; }

function BookingInput({ field, label, type = "text", autoComplete, error, onInput }: { field: Exclude<FieldName, "date" | "time">; label: string; type?: string; autoComplete: string; error?: string; onInput: () => void }) {
  const id = `booking-${field}`;
  return <label className="min-w-0 text-sm font-semibold text-slate-700">{label}<input id={id} required name={field} type={type} autoComplete={autoComplete} onInput={onInput} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={inputClass} />{error && <FieldError id={`${id}-error`} message={error} />}</label>;
}
