import Image from "next/image";
import Link from "next/link";
import teamHero from "../../../public/novadent/team-hero.png";
import AppointmentForm from "./components/AppointmentForm";
import PurchaseButton from "@/app/components/PurchaseButton";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "NovaDent — Dental Website Demo | YY Builds",
  description:
    "Explore NovaDent, a fictional dental website demo by YY Builds with treatment information, team profiles, and appointment enquiry UX.",
  path: "/portfolio/novadent",
});

// DEMO CONTENT: All names, reviews, contact details, hours, and addresses below are fictional.
const clinicPhoneDisplay = "+1 (555) 014-2890";
const clinicPhoneHref = "tel:+15550142890";
const emergencyPhoneDisplay = "+1 (555) 014-2911";
const emergencyPhoneHref = "tel:+15550142911";

const services = [
  {
    number: "01",
    title: "Preventive care",
    description: "Comprehensive exams, hygiene visits, digital imaging, and practical prevention plans.",
    timing: "45–60 min",
  },
  {
    number: "02",
    title: "Dental implants",
    description: "Thoughtfully planned tooth replacement with transparent steps from consultation to restoration.",
    timing: "Consultation first",
  },
  {
    number: "03",
    title: "Cosmetic dentistry",
    description: "Professional whitening, bonding, and veneers designed for natural-looking results.",
    timing: "From 60 min",
  },
  {
    number: "04",
    title: "Clear aligners",
    description: "Discreet orthodontic planning with digital previews and regular progress reviews.",
    timing: "Digital assessment",
  },
  {
    number: "05",
    title: "Family dentistry",
    description: "Calm, age-appropriate care for children, teens, adults, and older family members.",
    timing: "All ages",
  },
  {
    number: "06",
    title: "Emergency care",
    description: "Priority assessment for severe pain, swelling, dental trauma, or a broken tooth.",
    timing: "Same-day priority",
  },
];

const benefits = [
  { title: "Care without surprises", text: "Clear options, written plans, and costs explained before treatment begins." },
  { title: "Modern diagnostics", text: "Digital imaging and careful assessments support precise, conservative decisions." },
  { title: "Comfort-led visits", text: "A calm environment, unhurried explanations, and support for anxious patients." },
  { title: "Accessible support", text: "Simple booking, same-day emergency guidance, and clear follow-up instructions." },
];

const doctors = [
  { name: "Dr. Maya Bennett", role: "Clinical Director · Restorative Dentistry", note: "Demo profile" },
  { name: "Dr. Daniel Cho", role: "Implant & Cosmetic Dentist", note: "Demo profile" },
  { name: "Leah Morgan, RDH", role: "Lead Dental Hygienist", note: "Demo profile" },
];

const reviews = [
  {
    quote: "Everything was explained clearly, and the whole visit felt calm from check-in to follow-up.",
    author: "Elena R.",
    treatment: "Preventive care",
  },
  {
    quote: "The team gave me options without pressure. Booking was simple and the treatment plan made sense.",
    author: "Marcus T.",
    treatment: "Restorative consultation",
  },
  {
    quote: "My emergency appointment was handled quickly and with genuine care. I knew what would happen next.",
    author: "Priya S.",
    treatment: "Emergency care",
  },
];

const hours = [
  ["Monday", "8:00 AM – 6:00 PM"],
  ["Tuesday", "8:00 AM – 6:00 PM"],
  ["Wednesday", "9:00 AM – 7:00 PM"],
  ["Thursday", "8:00 AM – 6:00 PM"],
  ["Friday", "8:00 AM – 4:00 PM"],
  ["Saturday", "9:00 AM – 2:00 PM"],
  ["Sunday", "Closed"],
];

export default function NovaDentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbfc] text-slate-950">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-slate-950 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <div className="bg-slate-950 px-4 py-2.5 text-center text-xs font-medium text-white/75">
        <span className="text-cyan-300">Portfolio demo:</span> NovaDent is a fictional clinic. No patient data is collected.
      </div>

      <header className="border-b border-slate-200/80 bg-[#f7fbfc]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <a href="#top" aria-label="NovaDent home" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">N</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">NovaDent AI</p>
              <p className="hidden text-xs text-slate-500 sm:block">Premium dental care · Demo</p>
            </div>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#why-us" className="hover:text-slate-950">Why us</a>
            <a href="#team" className="hover:text-slate-950">Team</a>
            <a href="#visit" className="hover:text-slate-950">Visit</a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={clinicPhoneHref}
              className="hidden rounded-full border border-slate-300 px-4 py-3 text-xs font-semibold text-slate-800 hover:border-slate-500 sm:inline-flex"
            >
              Call clinic
            </a>
            <a
              href="#booking"
              className="rounded-full bg-slate-950 px-4 py-3 text-xs font-semibold text-white hover:bg-cyan-800 sm:px-5 sm:text-sm"
            >
              Book appointment
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 pb-24 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-300/25 blur-[110px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-300/20 blur-[130px]" />

        <div id="main-content" className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-medium text-cyan-900">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Accepting new patients · Demo availability
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Confident smiles start with
              <span className="block text-cyan-700">care you can trust.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Thoughtful dentistry, clear treatment plans, and a calm experience—from your first question to your next healthy smile.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white hover:bg-cyan-800">
                Book appointment
              </a>
              <a href={clinicPhoneHref} className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/75 px-7 py-4 text-sm font-semibold text-slate-900 hover:border-slate-500">
                Call clinic · {clinicPhoneDisplay}
              </a>
            </div>

            <a href={emergencyPhoneHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-700 underline decoration-rose-300 underline-offset-4 hover:text-rose-900">
              <span aria-hidden="true">+</span> Emergency contact · {emergencyPhoneDisplay}
            </a>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 border-t border-slate-200 pt-6">
              <div><p className="text-xl font-semibold sm:text-2xl">4.9/5</p><p className="mt-1 text-xs text-slate-500">Demo rating</p></div>
              <div><p className="text-xl font-semibold sm:text-2xl">Same day</p><p className="mt-1 text-xs text-slate-500">Emergency priority</p></div>
              <div><p className="text-xl font-semibold sm:text-2xl">All ages</p><p className="mt-1 text-xs text-slate-500">Family care</p></div>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[34px] border-8 border-white shadow-[0_35px_100px_rgba(15,23,42,0.16)] sm:aspect-[16/11]">
              <Image
                src={teamHero}
                alt="A fictional NovaDent dental team in a bright modern treatment room"
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur sm:inset-x-auto sm:left-5 sm:max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Meet your care team</p>
                <p className="mt-1 text-sm font-medium text-slate-900">Fictional professionals created for this portfolio demo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Dental services</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Complete care, clearly explained.</h2></div>
            <p className="max-w-xl leading-7 text-slate-600 lg:justify-self-end">Preventive, restorative, cosmetic, and urgent dentistry in one calm, modern setting.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group flex min-h-72 flex-col rounded-[26px] border border-slate-200 bg-[#f7fbfc] p-7 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold text-cyan-700">{service.number}</span><span className="rounded-full bg-white px-3 py-1 text-xs text-slate-500">{service.timing}</span></div>
                <div className="mt-auto"><h3 className="text-2xl font-semibold">{service.title}</h3><p className="mt-4 leading-7 text-slate-600">{service.description}</p><a href="#booking" className="mt-5 inline-flex text-sm font-semibold text-cyan-800">Request this service <span className="ml-2 group-hover:translate-x-1" aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Why choose us</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A better dental visit begins with trust.</h2><p className="mt-6 max-w-lg leading-7 text-white/60">Every touchpoint is designed to help patients feel informed, respected, and comfortable.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <article key={benefit.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">{index + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold">{benefit.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-cyan-50/70 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Doctors & team</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Experienced care, human connection.</h2><p className="mt-6 leading-7 text-slate-600">These names and credentials are fictional and shown only to demonstrate a professional clinic team layout.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <article key={doctor.name} className="rounded-[26px] border border-cyan-100 bg-white p-7 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-cyan-200" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{doctor.note}</p><h3 className="mt-3 text-2xl font-semibold">{doctor.name}</h3><p className="mt-2 leading-6 text-slate-600">{doctor.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Patient stories</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Care people remember.</h2></div><p className="rounded-full bg-amber-50 px-4 py-2 text-xs font-medium text-amber-900">Fictional demo reviews</p></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.author} className="flex min-h-72 flex-col rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-cyan-700" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-8 text-lg leading-8 text-slate-700">“{review.quote}”</blockquote><figcaption className="mt-auto pt-8"><p className="font-semibold">{review.author}</p><p className="mt-1 text-sm text-slate-500">{review.treatment} · Demo patient</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="booking" className="border-y border-slate-200 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-8"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Book an appointment</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Your next visit starts here.</h2><p className="mt-6 max-w-md leading-7 text-slate-600">Send a demo request and preview a polished booking experience. No information is transmitted or stored.</p><div className="mt-8 space-y-3 text-sm"><a href={clinicPhoneHref} className="flex min-h-12 items-center justify-between rounded-2xl border border-slate-200 bg-[#f7fbfc] px-5 font-semibold"><span>Call clinic</span><span>{clinicPhoneDisplay}</span></a><a href={emergencyPhoneHref} className="flex min-h-12 items-center justify-between rounded-2xl border border-rose-200 bg-rose-50 px-5 font-semibold text-rose-800"><span>Emergency contact</span><span>{emergencyPhoneDisplay}</span></a></div></div>
          <AppointmentForm />
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 text-white lg:grid-cols-2">
          <div className="p-8 sm:p-12"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Opening hours</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">Plan your visit.</h2><dl className="mt-8 divide-y divide-white/10">{hours.map(([day, time]) => <div key={day} className="flex justify-between gap-5 py-3.5 text-sm"><dt className="text-white/55">{day}</dt><dd className="font-medium">{time}</dd></div>)}</dl></div>
          <div className="relative min-h-[430px] overflow-hidden bg-gradient-to-br from-cyan-200 via-cyan-100 to-white p-8 text-slate-950 sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[45px] border-white/50" aria-hidden="true" />
            <div className="relative flex h-full flex-col"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">Location · Demo address</p><h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em]">Easy to reach. Simple to visit.</h2><address className="mt-8 not-italic leading-7 text-slate-700">NovaDent AI<br />240 Harbor Avenue, Suite 310<br />Northport, CA 90000</address><div className="mt-auto rounded-3xl bg-white/75 p-5 backdrop-blur"><p className="font-semibold">Visitor information</p><p className="mt-2 text-sm leading-6 text-slate-600">Step-free entrance · Lift access · Demo parking information · Public transport nearby</p></div></div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-cyan-300 px-7 py-16 text-center sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-900/60">Ready when you are</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Make your next dental visit feel effortless.</h2><p className="mx-auto mt-6 max-w-xl leading-7 text-slate-700">Request a demo appointment or speak with the fictional NovaDent team.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#booking" className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white">Book appointment</a><a href={clinicPhoneHref} className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-900/20 bg-white/60 px-7 py-4 text-sm font-semibold text-slate-950">Call clinic</a></div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[30px] bg-slate-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">A YY Builds portfolio concept</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Want a site like this?</h2><p className="mt-2 text-sm text-white/45">Start a premium website project for your own business.</p></div>
          <PurchaseButton productId="business-website" className="shrink-0">Start a similar project</PurchaseButton>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-medium text-slate-700">NovaDent AI · Fictional portfolio demo</p><p className="mt-1">No real clinic, clinicians, reviews, availability, or patient data.</p></div><Link href="/" className="font-semibold text-slate-800 hover:text-cyan-700">Back to YY Builds →</Link></div>
      </footer>
    </main>
  );
}
