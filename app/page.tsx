import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import NexavoAssistant from "./components/NexavoAssistant";
import ProjectForm from "./components/ProjectForm";

const services = [
  ["01", "Business websites", "Fast, polished websites that make your business look credible and turn visits into real enquiries.", "Landing pages · Multi-page sites · SEO foundations"],
  ["02", "Booking systems", "Simple appointment and reservation journeys built around your services, availability, and customers.", "Appointments · Reservations · Enquiry flows"],
  ["03", "Product & service catalogues", "Clear menus, services, products, and galleries that help customers browse and choose faster.", "Menus · Services · Products · Galleries"],
  ["04", "AI-assisted tools / automation", "Useful assistants and workflows that answer questions, qualify leads, and reduce repetitive admin.", "AI assistants · Lead routing · Integrations"],
];

const projects = [
  { category: "Dental clinic", built: "Website · Treatment catalogue · Appointment requests", name: "NovaDent AI", title: "A calmer route from research to appointment.", description: "A trust-led clinic experience that explains treatments clearly and helps patients take the next step with confidence.", href: "/portfolio/novadent", theme: "project-light project-cyan", capabilities: ["Treatment catalogue", "Appointment request", "Patient assistant"] },
  { category: "Automotive services", built: "Website · Instant estimates · Booking enquiries", name: "Autoflow", title: "From vehicle issue to workshop visit.", description: "A focused auto-service experience with service selection, vehicle details, interactive estimates, and qualified booking requests.", href: "/portfolio/autoflow", theme: "project-dark project-orange", capabilities: ["Service catalogue", "Vehicle-based estimate", "Booking enquiry"] },
  { category: "Restaurant", built: "Website · Interactive menu · Table reservations", name: "Maison", title: "An elegant journey from menu to table.", description: "A refined restaurant concept combining atmosphere, an interactive menu, and a frictionless reservation flow.", href: "/portfolio/maison", theme: "project-light project-warm", capabilities: ["Interactive menu", "Demo ordering", "Table reservations"] },
  { category: "Local cleaning business", built: "Web app · Instant quotes · Booking management", name: "Nexavo Booking", title: "From cleaning estimate to confirmed booking.", description: "A complete service-booking concept with live quote calculations, scheduling, bilingual booking, and an owner dashboard.", href: "/portfolio/nexavo-booking", theme: "project-light project-blue", capabilities: ["Instant quote calculator", "Customer booking flow", "Owner dashboard"] },
];

const steps = [
  ["01", "Tell us what you need", "Share your business, goals, and the features your customers need. We’ll recommend a clear scope and price."],
  ["02", "We design and build", "We shape the structure, visual direction, and functionality into a polished, mobile-first website."],
  ["03", "Your website goes live", "After your review and refinements, we handle the final setup and launch your new website."],
];

const packages = [
  { name: "Starter", price: "€199", value: "Starter — €199", description: "A sharp, focused online presence for a small business.", features: ["One-page business website", "Mobile responsive", "Contact / enquiry form", "Basic SEO setup", "Deployment included", "1 revision"], action: "Choose Starter" },
  { name: "Business", price: "€349", value: "Business — €349", description: "A complete website built to generate and handle enquiries.", features: ["Up to 5 pages", "Booking or enquiry system", "Service / product catalogue", "WhatsApp or email integration", "SEO structure", "2 revisions"], action: "Choose Business", featured: true },
  { name: "Custom", price: "€499", value: "Custom — From €499", description: "A tailored digital experience for more advanced needs.", features: ["Custom business website", "Advanced booking flows", "AI assistant or automation", "Custom integrations", "Advanced UI / animations", "Priority support"], action: "Discuss Custom", prefix: "From" },
];

export default function Home() {
  return (
    <main id="top" className="nexavo-home min-h-screen overflow-hidden bg-[#070709] text-white">
      <HomeHeader />
      <section className="hero-section relative flex min-h-[860px] items-center px-5 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-10 lg:pt-44">
        <div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="hero-spotlight" /><div className="hero-glow hero-glow-purple" /><div className="hero-glow hero-glow-blue" /><div className="hero-grid" /></div>
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55"><span className="h-px w-8 bg-violet-400" /> Websites <span className="text-white/20">•</span> AI <span className="text-white/20">•</span> Automation</p>
              <h1 className="hero-title mt-8 max-w-[1050px] text-[clamp(3.4rem,8.2vw,7.2rem)] font-semibold leading-[0.92] tracking-[-0.065em]">Premium websites built to turn visitors into <span className="text-white/38">customers.</span></h1>
            </div>
            <div className="lg:pb-2"><p className="text-base leading-7 text-white/55 sm:text-lg sm:leading-8">Modern, mobile-first websites with booking, contact forms, catalogues and smart automations — designed, built and launched for your business.</p><p className="mt-6 text-sm font-medium text-white/80">For restaurants, clinics, local services, car and beauty businesses, consultants, and growing companies.</p></div>
          </div>
          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row"><a href="#request" className="button-primary">Start your website <span>↗</span></a><a href="#work" className="button-secondary">View our work <span>↓</span></a></div>
            <div className="flex items-baseline gap-3"><span className="text-xs uppercase tracking-[0.2em] text-white/35">Websites from</span><span className="text-3xl font-semibold tracking-[-0.04em]">€199</span></div>
          </div>
          <p className="mt-7 text-xs tracking-wide text-white/38 sm:text-sm">Fast launch <span className="mx-2 text-white/15">•</span> Mobile-first <span className="mx-2 text-white/15">•</span> Clear pricing <span className="mx-2 text-white/15">•</span> No unnecessary complexity</p>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.018] px-5 py-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><span className="uppercase tracking-[0.18em]">Built for ambitious small businesses</span><div className="flex flex-wrap gap-x-7 gap-y-3 text-white/60"><span>Restaurants</span><span>Clinics</span><span>Local services</span><span>Consultants</span><span>Small companies</span></div></div></section>

      <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Selected work" title="Websites shaped around how each business wins customers." copy="Explore real, working concepts built for healthcare, automotive, hospitality, and local service businesses." />
          <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Link key={project.name} href={project.href} className={`project-card group ${project.theme}`}>
                <article className="flex min-h-[560px] flex-col p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-5 text-xs font-semibold uppercase tracking-[0.18em]"><span>{project.category}</span><span className="opacity-35">0{index + 1}</span></div>
                  <div className="mt-10 flex flex-wrap gap-2">{project.capabilities.map((item) => <span key={item} className="project-pill">{item}</span>)}</div>
                  <div className="mt-auto pt-24"><p className="text-sm font-semibold opacity-45">{project.name}</p><h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">{project.title}</h3><p className="mt-5 max-w-xl leading-7 opacity-55">{project.description}</p><div className="mt-8 flex items-center justify-between gap-5 border-t border-current/10 pt-5"><p className="text-xs font-medium uppercase tracking-[0.13em] opacity-45">{project.built}</p><span className="project-arrow">↗</span></div></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-y border-white/[0.08] bg-white/[0.018] px-5 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we build" title="Everything your website needs to do its job." copy="Start with a polished business website, then add only the practical tools that help your customers act." />
          <div className="mt-14 grid border-t border-white/10 md:grid-cols-2 lg:mt-20">
            {services.map(([number, title, description, detail]) => <article key={number} className="service-card group border-b border-white/10 py-9 md:px-8 md:[&:nth-child(odd)]:border-r lg:py-12"><div className="flex items-center justify-between"><span className="text-xs text-white/28">{number}</span><span className="service-icon">↗</span></div><h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{title}</h3><p className="mt-4 max-w-lg leading-7 text-white/45">{description}</p><p className="mt-9 text-xs uppercase tracking-[0.14em] text-white/28">{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 px-5 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Simple by design" title="From first conversation to a live website." copy="A direct, collaborative process with clear decisions, useful feedback, and no agency theatre." />
          <div className="mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/10 lg:mt-20 lg:grid-cols-3 lg:gap-px">{steps.map(([number, title, description]) => <article key={number} className="flex min-h-[360px] flex-col bg-[#0a0a0d] p-7 sm:p-9"><div className="flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/25 bg-violet-400/[0.08] text-xs text-violet-300">{number}</span><span className="h-px flex-1 bg-white/10" /></div><div className="mt-auto pt-20"><h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-4 leading-7 text-white/45">{description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 border-y border-white/[0.08] bg-white/[0.018] px-5 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Clear pricing" title="A professional website, without the agency-sized bill." copy="Choose a focused starting point. We’ll confirm your exact scope before any work begins." />
          <div className="mt-14 grid items-stretch gap-5 lg:mt-20 lg:grid-cols-3">
            {packages.map((item) => <article key={item.name} className={`pricing-card ${item.featured ? "pricing-card-featured" : ""}`}>{item.featured && <span className="popular-badge">Most popular</span>}<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{item.name}</p><div className="mt-8 flex items-end gap-2">{item.prefix && <span className="mb-2 text-sm text-white/40">{item.prefix}</span>}<span className="text-5xl font-semibold tracking-[-0.055em]">{item.price}</span>{!item.prefix && <span className="mb-2 text-xs text-white/30">one-time</span>}</div><p className="mt-5 min-h-12 text-sm leading-6 text-white/45">{item.description}</p><div className="my-8 h-px bg-white/10" /><ul className="space-y-4 text-sm text-white/67">{item.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300">✓</span><span>{feature}</span></li>)}</ul><a href="#request" data-package={item.value} className={item.featured ? "button-primary mt-10" : "button-secondary mt-10"}>{item.action} <span>→</span></a></article>)}
          </div>
          <p className="mt-7 text-center text-sm text-white/30">One-time project pricing. Final cost depends on the agreed scope.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-10"><div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 px-7 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24"><div className="final-cta-glow" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Let’s build something useful</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Ready to give your business a website that actually works?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/48">Tell us what you need. We’ll turn it into a fast, modern and professional website.</p></div><a href="#request" className="button-primary lg:mb-1">Start your project <span>↗</span></a></div></div></section>

      <section id="request" className="scroll-mt-24 px-5 pb-24 sm:px-6 sm:pb-32 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 rounded-[32px] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:p-14"><div><p className="eyebrow">Start your project</p><h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">Tell us about your business and the website you need.</h2><p className="mt-6 max-w-md leading-7 text-white/45">We’ll review your requirements and reply with a recommended scope, timeline, and clear starting price.</p><div className="mt-10 space-y-4 text-sm text-white/55"><p>✓ Clear recommended scope</p><p>✓ Transparent project pricing</p><p>✓ Response within one business day</p></div></div><ProjectForm /></div></section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/35 sm:flex-row sm:items-center"><div><p className="text-base font-semibold text-white/75">YY Builds</p><p className="mt-1 text-white/50">Yurii Yanishevskyi</p><p className="mt-1">Websites • AI • Automation</p></div><div className="flex flex-wrap gap-x-7 gap-y-3"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#pricing">Pricing</a><a href="#request">Start a project</a></div></div></footer>
      <NexavoAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{copy}</p></div>;
}
