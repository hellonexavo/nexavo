"use client";

import { copy, type BookingStatus, type DemoBooking, type Language } from "./config";

type Filter = "All" | BookingStatus;
type Props = { language: Language; bookings: DemoBooking[]; filter: Filter; onFilter: (filter: Filter) => void; onStatus: (id: string, status: BookingStatus) => void; onReset: () => void };

const filters: Filter[] = ["All", "Pending", "Confirmed", "Completed"];

export default function OwnerDashboard({ language, bookings, filter, onFilter, onStatus, onReset }: Props) {
  const t = copy[language];
  const visible = filter === "All" ? bookings : bookings.filter((booking) => booking.status === filter);
  const today = "2026-08-08";
  const todayCount = bookings.filter((booking) => booking.date === today).length;
  const pendingCount = bookings.filter((booking) => booking.status === "Pending").length;
  const revenue = bookings.filter((booking) => booking.status !== "Completed").reduce((sum, booking) => sum + booking.price, 0);
  const money = (value: number) => new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const statusLabel = (status: Filter) => status === "All" ? t.all : status === "Pending" ? t.pendingStatus : status === "Confirmed" ? t.confirmed : t.completed;

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-7 sm:py-16 lg:px-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">YY Booking</p><h1 className="mt-3 break-words text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{t.dashboard}</h1><p className="mt-3 break-words text-sm text-slate-500">{t.ownerNote}</p></div><div className="flex flex-wrap items-center gap-2"><div className="flex min-h-10 items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-800"><span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />{t.demoAccess}</div><button type="button" onClick={onReset} className="min-h-10 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700">{t.reset}</button></div></div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3"><Metric label={t.today} value={String(todayCount)} detail="08 Aug 2026" /><Metric label={t.pending} value={String(pendingCount)} detail={language === "nl" ? "Actie vereist" : "Needs review"} /><Metric label={t.revenue} value={money(revenue)} detail={language === "nl" ? "Openstaande boekingen" : "Open bookings"} hideValue /></div>

      <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-semibold text-slate-950">{language === "nl" ? "Boekingen beheren" : "Manage bookings"}</h2><p className="mt-1 text-sm text-slate-500">{bookings.length} {language === "nl" ? "demo-items" : "demo records"}</p></div><div><p className="sr-only">{t.filters}</p><div className="flex max-w-full gap-2 overflow-x-auto pb-1" role="group" aria-label={t.filters}>{filters.map((item) => <button key={item} type="button" onClick={() => onFilter(item)} aria-pressed={filter === item} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 ${filter === item ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-800"}`}>{statusLabel(item)}</button>)}</div></div></div>

        <div className="mt-7 hidden overflow-x-auto md:block"><table className="w-full min-w-[850px] border-collapse text-left"><thead><tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400"><th className="px-3 py-4 font-semibold">{t.booking}</th><th className="px-3 py-4 font-semibold">{t.service}</th><th className="px-3 py-4 font-semibold">{t.appointment}</th><th className="px-3 py-4 font-semibold">{t.amount}</th><th className="px-3 py-4 font-semibold">{t.status}</th></tr></thead><tbody>{visible.map((booking) => <tr key={booking.id} className="border-b border-slate-100 last:border-0"><td className="px-3 py-5"><p className="font-semibold text-slate-900">{booking.customer}</p><p className="mt-1 text-xs text-slate-400">{booking.reference}</p></td><td className="px-3 py-5 text-sm text-slate-600">{t[booking.service]}<span className="mt-1 block text-xs text-slate-400">{booking.size} m² · {t[booking.frequency]}</span></td><td className="px-3 py-5 text-sm text-slate-600">{booking.date}<span className="mt-1 block text-xs text-slate-400">{booking.time}</span></td><td className="invisible px-3 py-5 font-semibold text-slate-900" aria-hidden="true">{money(booking.price)}</td><td className="px-3 py-5"><StatusSelect language={language} value={booking.status} onChange={(status) => onStatus(booking.id, status)} /></td></tr>)}</tbody></table></div>

        <div className="mt-6 grid gap-4 md:hidden">{visible.map((booking) => <div key={booking.id} className="min-w-0 rounded-2xl border border-slate-200 p-5"><div className="flex min-w-0 flex-col gap-2 min-[360px]:flex-row min-[360px]:items-start min-[360px]:justify-between"><div className="min-w-0"><p className="break-words font-semibold text-slate-950">{booking.customer}</p><p className="mt-1 break-all text-xs text-slate-400">{booking.reference}</p></div><p className="invisible shrink-0 break-words font-semibold text-slate-950" aria-hidden="true">{money(booking.price)}</p></div><dl className="mt-5 grid min-w-0 grid-cols-1 gap-4 border-y border-slate-100 py-4 text-sm min-[360px]:grid-cols-2"><div className="min-w-0"><dt className="text-xs text-slate-400">{t.service}</dt><dd className="mt-1 break-words text-slate-700">{t[booking.service]}</dd></div><div className="min-w-0"><dt className="text-xs text-slate-400">{t.appointment}</dt><dd className="mt-1 break-words text-slate-700">{booking.date}<br />{booking.time}</dd></div></dl><div className="mt-4"><StatusSelect language={language} value={booking.status} onChange={(status) => onStatus(booking.id, status)} /></div></div>)}</div>
        {visible.length === 0 && <p className="py-16 text-center text-sm text-slate-500">{t.noBookings}</p>}
      </section>
    </main>
  );
}

function Metric({ label, value, detail, hideValue = false }: { label: string; value: string; detail: string; hideValue?: boolean }) { return <div className="min-w-0 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"><p className="break-words text-sm text-slate-500">{label}</p><p className={`${hideValue ? "invisible " : ""}mt-3 break-words text-3xl font-semibold tracking-tight text-slate-950`} aria-hidden={hideValue || undefined}>{value}</p><p className="mt-2 break-words text-xs font-medium text-cyan-700">{detail}</p></div>; }

function StatusSelect({ language, value, onChange }: { language: Language; value: BookingStatus; onChange: (status: BookingStatus) => void }) { const t = copy[language]; return <select value={value} onChange={(event) => onChange(event.target.value as BookingStatus)} aria-label={t.statusChange} className={`min-h-10 max-w-full rounded-full border px-3 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-cyan-600 ${value === "Pending" ? "border-amber-200 bg-amber-50 text-amber-800" : value === "Confirmed" ? "border-cyan-200 bg-cyan-50 text-cyan-800" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`}><option value="Pending">{t.pendingStatus}</option><option value="Confirmed">{t.confirmed}</option><option value="Completed">{t.completed}</option></select>; }
