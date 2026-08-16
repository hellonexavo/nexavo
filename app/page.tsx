import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
import { contactDetails } from "./lib/contact";
import PurchaseButton from "./components/PurchaseButton";
import { featuredProductId, formatEuro, productIds, products } from "./lib/products";

const services = productIds.map((productId, index) => ({
  ...products[productId],
  number: String(index + 1).padStart(2, "0"),
  featured: productId === featuredProductId,
}));

const serviceCategories = ["Websites", "AI & Automation"] as const;

const projects = [
  { category: "Dental clinic", built: "Website · Treatment catalogue · Appointment requests", name: "NovaDent AI", title: "A calmer route from research to appointment.", description: "A trust-led clinic experience that explains treatments clearly and helps patients take the next step with confidence.", href: "/portfolio/novadent", theme: "project-light project-cyan", capabilities: ["Treatment catalogue", "Appointment request", "Patient assistant"] },
  { category: "Automotive services", built: "Website · Instant estimates · Booking enquiries", name: "Autoflow", title: "From vehicle issue to workshop visit.", description: "A focused auto-service experience with service selection, vehicle details, interactive estimates, and qualified booking requests.", href: "/portfolio/autoflow", theme: "project-dark project-orange", capabilities: ["Service catalogue", "Vehicle-based estimate", "Booking enquiry"] },
  { category: "Restaurant", built: "Website · Interactive menu · Table reservations", name: "Maison", title: "An elegant journey from menu to table.", description: "A refined restaurant concept combining atmosphere, an interactive menu, and a frictionless reservation flow.", href: "/portfolio/maison", theme: "project-light project-warm", capabilities: ["Interactive menu", "Demo ordering", "Table reservations"] },
  { category: "Local cleaning business", built: "Web app · Instant quotes · Booking management", name: "YY Booking", title: "From cleaning estimate to confirmed booking.", description: "A complete service-booking concept with live quote calculations, scheduling, bilingual booking, and an owner dashboard.", href: "/portfolio/booking", theme: "project-light project-blue", capabilities: ["Instant quote calculator", "Customer booking flow", "Owner dashboard"] },
];

const steps = [
  ["01", "Understand", "We identify the business problem and the outcome the project needs to create."],
  ["02", "Design", "We design the page, workflow, or system around a clear customer journey."],
  ["03", "Build", "We build the website, automation, and required integrations."],
  ["04", "Connect", "We connect forms, notifications, AI, or external tools."],
  ["05", "Launch", "We test the complete journey and deploy the finished system."],
];

const packages = productIds.map((productId) => ({
  ...products[productId],
  featured: productId === featuredProductId,
  prefix: "From",
}));

export default function Home() {
  return (
    <main id="top" className="yy-home min-h-screen overflow-hidden bg-[#070709] text-white">
      <HomeHeader />
      <section className="hero-section relative flex min-h-[800px] items-center px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-10 lg:pt-40">
        <div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="hero-spotlight" /><div className="hero-glow hero-glow-purple" /><div className="hero-glow hero-glow-blue" /><div className="hero-grid" /></div>
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55"><span className="h-px w-8 bg-violet-400" /> Websites <span className="text-white/20">•</span> AI <span className="text-white/20">•</span> Automation</p>
              <h1 className="hero-title mt-8 max-w-[1050px] text-[clamp(3.4rem,8.2vw,7.2rem)] font-semibold leading-[0.92] tracking-[-0.065em]">Premium websites built to turn visitors into <span className="text-white/38">customers.</span></h1>
            </div>
            <div className="lg:pb-2"><p className="text-base leading-7 text-white/55 sm:text-lg sm:leading-8">Websites, AI assistants, and automated business workflows—designed as one clear digital system.</p><p className="mt-6 text-sm font-medium text-white/80">For restaurants, clinics, local services, car and beauty businesses, consultants, and growing companies.</p></div>
          </div>
          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link>
            <div className="flex items-baseline gap-3"><span className="text-xs uppercase tracking-[0.2em] text-white/35">Websites from</span><span className="text-3xl font-semibold tracking-[-0.04em]">€199</span></div>
          </div>
          <p className="mt-7 text-xs tracking-wide text-white/38 sm:text-sm">Fast launch <span className="mx-2 text-white/15">•</span> Mobile-first <span className="mx-2 text-white/15">•</span> Clear pricing <span className="mx-2 text-white/15">•</span> No unnecessary complexity</p>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.018] px-5 py-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><span className="uppercase tracking-[0.18em]">Built for ambitious small businesses</span><div className="flex flex-wrap gap-x-7 gap-y-3 text-white/60"><span>Restaurants</span><span>Clinics</span><span>Local services</span><span>Consultants</span><span>Small companies</span></div></div></section>

      <section id="work" className="home-section px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Selected work" title="Digital experiences shaped around how each business wins customers." copy="Explore working portfolio demonstrations across business websites, catalogues, lead capture, booking flows, and customer assistance." />
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link key={project.name} href={project.href} className={`project-card group ${project.theme}`}>
                <article className="flex min-h-[520px] flex-col p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-5 text-xs font-semibold uppercase tracking-[0.18em]"><span>{project.category}</span><span className="opacity-35">0{index + 1}</span></div>
                  <div className="mt-10 flex flex-wrap gap-2">{project.capabilities.map((item) => <span key={item} className="project-pill">{item}</span>)}</div>
                  <div className="mt-auto pt-18"><p className="text-sm font-semibold opacity-45">{project.name}</p><h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">{project.title}</h3><p className="mt-5 max-w-xl leading-7 opacity-55">{project.description}</p><div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-current/10 pt-5 sm:flex-row sm:items-center"><p className="text-xs font-medium uppercase tracking-[0.13em] opacity-45">{project.built}</p><span className="inline-flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em]"><span>View project</span><span className="project-arrow">↗</span></span></div></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="home-section border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we build" title="Web, AI, and automation built around real business outcomes." copy="Start with one focused service or connect several into a practical digital system." />
          <div className="mt-12 space-y-10 lg:mt-14">
            {serviceCategories.map((category) => <div key={category}><div className="mb-4 flex items-center gap-4"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">{category}</p><span className="h-px flex-1 bg-white/10" /></div><div className="grid gap-4 md:grid-cols-2">{services.filter((service) => service.category === category).map((service) => <article key={service.id} className={`service-card group flex min-h-[330px] flex-col rounded-[26px] border border-white/10 bg-white/[0.022] p-6 sm:p-7 ${service.featured ? "service-card-featured" : ""}`}><div className="flex items-start justify-between gap-4"><span className="text-xs text-white/25">{service.number}</span>{service.featured ? <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-violet-200">Recommended</span> : <span className="service-icon">↗</span>}</div><h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em]">{service.name}</h3><p className="mt-3 max-w-2xl leading-7 text-white/48">{service.description}</p><div className="mt-5 flex flex-wrap gap-2">{service.capabilities.map((capability) => <span key={capability} className="service-tag">{capability}</span>)}</div><div className="mt-auto pt-7"><Link href={`/checkout?product=${service.id}`} className="inline-flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white">{service.cta} <span className="text-violet-300">→</span></Link></div></article>)}</div></div>)}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Need something custom?</p><p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">Tell us what you want to improve or automate. We&apos;ll recommend the simplest practical solution.</p></div><Link href="/checkout" className="button-secondary shrink-0">Discuss your project <span>→</span></Link></div>
        </div>
      </section>

      <section id="process" className="home-section px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Simple by design" title="From business problem to working digital system." copy="A direct process for websites, AI assistants, and connected automations." />
          <div className="mt-12 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:mt-14 xl:grid-cols-5 xl:gap-px">{steps.map(([number, title, description]) => <article key={number} className="flex min-h-[270px] flex-col border-white/10 bg-[#0a0a0d] p-7 md:border-b xl:border-b-0"><div className="flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/25 bg-violet-400/[0.08] text-xs text-violet-300">{number}</span><span className="h-px flex-1 bg-white/10" /></div><div className="mt-auto pt-12"><h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="pricing" className="home-section border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Clear starting points" title="Focused services, scoped around the outcome you need." copy="Prices are starting points. We confirm the exact scope before any work or payment begins." />
          <div className="mt-12 space-y-10 lg:mt-14">
            {serviceCategories.map((category) => <div key={category}><div className="mb-4 flex items-center gap-4"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">{category}</p><span className="h-px flex-1 bg-white/10" /></div><div className="grid items-stretch gap-4 md:grid-cols-2">{packages.filter((item) => item.category === category).map((item) => <article key={item.name} className={`pricing-card ${item.featured ? "pricing-card-featured" : ""}`}>{item.featured && <span className="popular-badge">Recommended</span>}<p className="max-w-[75%] text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{item.name}</p><div className="mt-7 flex items-end gap-2"><span className="mb-2 text-sm text-white/40">{item.prefix}</span><span className="text-5xl font-semibold tracking-[-0.055em]">{formatEuro(item.price)}</span></div><p className="mt-5 min-h-12 text-sm leading-6 text-white/48">{item.description}</p><div className="my-7 h-px bg-white/10" /><ul className="space-y-3 text-sm text-white/67">{item.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300">✓</span><span>{feature}</span></li>)}</ul><div className="mt-auto pt-8"><PurchaseButton productId={item.id} className="w-full">{item.cta}</PurchaseButton></div></article>)}</div></div>)}
          </div>
          <p className="mt-7 text-center text-sm text-white/30">One-time project pricing. Final cost depends on the agreed scope.</p>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Not sure what you need?</p><h3 className="mt-3 text-xl font-semibold">Tell us about your business.</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-white/42">We’ll recommend a practical starting point based on your goals, customers, and current setup.</p></div><Link href="/checkout" className="button-secondary shrink-0">Start a project <span>→</span></Link></div>
        </div>
      </section>

      <section id="request" className="home-section px-5 py-16 sm:px-6 sm:py-20 lg:px-10"><div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"><div className="final-cta-glow" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Let’s build something useful</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Ready to build something?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/48">Tell us what you need and we&apos;ll recommend the right solution.</p></div><Link href="/checkout" className="button-primary lg:mb-1">Start a project <span>↗</span></Link></div></div></section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/35 sm:flex-row sm:items-center"><div><p className="text-base font-semibold text-white/75">YY Builds</p><p className="mt-1 text-white/50">Websites • AI • Automation</p><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2"><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a href="https://t.me/yybuilds" target="_blank" rel="noreferrer">{contactDetails.telegram}</a><a href="https://yybuilds.com">{contactDetails.website}</a></div></div><div className="flex flex-wrap gap-x-7 gap-y-3"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#pricing">Pricing</a><Link href="/checkout">Start a project</Link></div></div></footer>
      <YYAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{copy}</p></div>;
}
