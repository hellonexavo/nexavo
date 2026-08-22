"use client";

import { serviceById, specialistById, type BookingStatus, type DemoBooking } from "./config";

type Filter = "All" | BookingStatus;
type Props = { bookings: DemoBooking[]; filter: Filter; onFilter: (filter: Filter) => void; onStatus: (id: string, status: BookingStatus) => void; onReset: () => void };
const filters: Filter[] = ["All", "Pending", "Confirmed", "Completed"];

export default function OwnerDashboard({ bookings, filter, onFilter, onStatus, onReset }: Props) {
  const visible = filter === "All" ? bookings : bookings.filter((booking) => booking.status === filter);
  const todayCount = bookings.filter((booking) => booking.date === "2026-08-20").length;
  const upcoming = bookings.filter((booking) => booking.status !== "Completed").length;
  const popular = serviceById(bookings[0]?.service ?? "haircut").name;

  return <main className="studio-dashboard studio-shell">
    <div className="studio-dashboard-heading"><div><p className="studio-eyebrow">Owner workspace · Demo</p><h1>Good morning, Studio North.</h1><p>A polished preview using fictional bookings and browser-only demo state.</p></div><div className="studio-dashboard-tools"><span><i /> Demo access</span><button type="button" onClick={onReset}>Reset sample data</button></div></div>
    <div className="studio-dashboard-metrics"><Metric label="Today’s bookings" value={String(todayCount)} detail="Thursday, 20 August" /><Metric label="Upcoming appointments" value={String(upcoming)} detail="Across the next five days" /><Metric label="Most requested" value={popular} detail="Based on sample data" /></div>
    <div className="studio-dashboard-layout">
      <section className="studio-dashboard-card studio-schedule"><div className="studio-dashboard-card-head"><div><p>Today’s schedule</p><h2>Appointments</h2></div><span>{todayCount} bookings</span></div><div className="studio-schedule-list">{bookings.filter((booking) => booking.date === "2026-08-20").map((booking) => <article key={booking.id}><time>{booking.time}</time><span className="studio-schedule-line" /><div><strong>{booking.customer}</strong><small>{serviceById(booking.service).name} · {specialistById(booking.specialist).name}</small></div><Status status={booking.status} /></article>)}</div></section>
      <aside className="studio-dashboard-card"><div className="studio-dashboard-card-head"><div><p>Service overview</p><h2>Today’s focus</h2></div></div><div className="studio-service-overview">{["haircut", "color", "facial"].map((id, index) => { const service = serviceById(id as "haircut" | "color" | "facial"); return <div key={id}><span>{String(index + 1).padStart(2, "0")}</span><p><strong>{service.name}</strong><small>{service.duration} min · Pricing based on scope</small></p></div>; })}</div></aside>
    </div>
    <section className="studio-dashboard-card studio-bookings-table"><div className="studio-dashboard-card-head"><div><p>Booking management</p><h2>Upcoming appointments</h2></div><div className="studio-filter" role="group" aria-label="Filter demo bookings">{filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => onFilter(item)}>{item}</button>)}</div></div><div className="studio-booking-rows">{visible.map((booking) => <article key={booking.id}><div><strong>{booking.customer}</strong><small>{booking.reference}</small></div><div><span>Service</span><strong>{serviceById(booking.service).name}</strong></div><div><span>Appointment</span><strong>{booking.date} · {booking.time}</strong></div><div><span>Specialist</span><strong>{specialistById(booking.specialist).name}</strong></div><select value={booking.status} onChange={(event) => onStatus(booking.id, event.target.value as BookingStatus)} aria-label={`Change status for ${booking.customer}`}><option>Pending</option><option>Confirmed</option><option>Completed</option></select></article>)}</div>{visible.length === 0 && <p className="studio-empty">No demo bookings match this filter.</p>}</section>
  </main>;
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) { return <article><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>; }
function Status({ status }: { status: BookingStatus }) { return <mark className={`status-${status.toLowerCase()}`}>{status}</mark>; }
