import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
import SocialLinks from "./components/SocialLinks";
import { contactDetails } from "./lib/contact";

const websiteServices = [
  ["01", "Business websites", "Build trust and turn visits into enquiries."],
  ["02", "Landing pages", "Focused pages designed around one clear action."],
  ["03", "Booking websites", "Help customers choose a service and book with ease."],
  ["04", "Portfolio websites", "Present your work with clarity and confidence."],
  ["05", "Custom web applications", "Purpose-built tools for a specific business need."],
];

const automationServices = [
  ["Business automation", "Connect routine tasks so your team spends less time on admin."],
  ["AI assistants", "Give customers useful answers and guide them to the right next step."],
  ["AI agents", "Handle structured, repeatable work with human oversight where it matters."],
  ["Lead & enquiry automation", "Capture, organise and follow up with new enquiries faster."],
  ["Workflow automation", "Keep information moving between the tools your business uses."],
  ["Booking automation", "Turn appointment requests into a smoother customer experience."],
];

const websiteExamples = [
  { name: "Modern Dental Care", type: "Multi-location dental practice", label: "Concept redesign", href: "/portfolio/modern-dental-care", tone: "healthcare" },
  { name: "NovaDent", type: "Clinic website", label: "Concept", href: "/portfolio/novadent", tone: "cyan" },
  { name: "Autoflow", type: "Automotive services", label: "Concept", href: "/portfolio/autoflow", tone: "orange" },
  { name: "Maison", type: "Restaurant website", label: "Concept", href: "/portfolio/maison", tone: "warm" },
];

const workGroups = [
  { id: "work-websites", label: "Website projects", projects: [
    { name: "Modern Dental Care", sector: "Multi-location dental practice", label: "Concept redesign", summary: "Multi-location dental experience with treatment discovery, multilingual content and a guided appointment flow.", href: "/portfolio/modern-dental-care", tone: "healthcare" },
    { name: "NovaDent", sector: "Dental clinic", label: "Concept", summary: "Treatment discovery, patient guidance and appointment requests.", href: "/portfolio/novadent", tone: "cyan" },
    { name: "Autoflow", sector: "Automotive services", label: "Concept", summary: "Service selection, instant estimates and booking enquiries.", href: "/portfolio/autoflow", tone: "orange" },
    { name: "Maison", sector: "Restaurant", label: "Concept", summary: "Brand-led dining, interactive menus and table reservations.", href: "/portfolio/maison", tone: "warm" },
  ] },
  { id: "work-systems", label: "Product / system projects", projects: [
    { name: "YY Booking", sector: "Booking system", label: "Product demo", summary: "Live quotes, scheduling, customer booking and owner management.", href: "/portfolio/booking", tone: "blue" },
  ] },
];

const bookingTemplateFeatures = [
  "Responsive mobile & desktop design",
  "Customer booking flow",
  "Full source code",
  "Next.js + TypeScript",
  "Easy central configuration",
  "Quick-start & customization documentation",
];

const pricingTrust = [
  ["Direct communication", "Work directly with the person shaping, building and reviewing your project."],
  ["Clear scope", "Scope and price are confirmed before work starts, with no unnecessary agency overhead."],
  ["Responsive builds", "Responsive, conversion-focused structure is part of the build from the start."],
  ["Modern technology", "Use dependable modern tools where they improve the customer experience."],
];

const projectProcess = [
  "Choose a service",
  "Tell us about your project",
  "We review scope, timeline and price",
  "You approve",
  "We build, test and deliver",
];

const pricingIntroTrust = [
  "Direct communication",
  "Clear scope before payment",
  "Responsive by default",
];

const websiteOffers = [
  {
    name: "Starter Website",
    price: "from €299",
    priceNote: "starting price",
    description: "For small businesses that need a professional online presence.",
    features: ["Responsive design", "Essential business information", "Contact CTA", "Basic SEO setup"],
    cta: "Start a Project",
    href: "/checkout?product=starter-website",
  },
  {
    name: "Business Website",
    price: "from €599",
    priceNote: "starting price",
    description: "For an established business that needs a stronger, more complete online presence.",
    features: ["Premium multi-section website", "Contact or inquiry form", "Responsive design", "Stronger SEO structure", "Appropriate business integrations"],
    cta: "Get a Business Website",
    href: "/checkout?product=business-website",
    recommended: true,
  },
  {
    name: "Booking Website",
    price: "from €699",
    priceNote: "starting price",
    description: "For salons, barbers, consultants, clinics, repair services, and appointment-based businesses.",
    features: ["Customized booking experience", "Service presentation", "Responsive customer flow", "Inquiry or booking form", "Business-specific setup"],
    cta: "Build My Booking Site",
    href: "/checkout?product=booking-website",
  },
  {
    name: "E-commerce / Online Store",
    price: "from €999",
    priceNote: "starting price",
    description: "For businesses selling products online with a professional, customer-ready storefront.",
    features: ["Responsive storefront", "Product presentation", "Core store setup", "Checkout journey", "Basic SEO structure"],
    cta: "Build My Online Store",
    href: "/checkout?product=ecommerce-store",
  },
];

export default function Home() {
  return (
    <main id="top" className="yy-home min-h-screen overflow-hidden bg-[#070709] text-white">
      <HomeHeader />
      <section className="hero-section relative flex min-h-[760px] items-center px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="hero-spotlight" /><div className="hero-glow hero-glow-purple" /><div className="hero-glow hero-glow-blue" /><div className="hero-grid" /></div>
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55"><span className="h-px w-8 bg-violet-400" /> Independent digital studio</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end lg:gap-16"><h1 className="hero-title max-w-[1030px] text-[clamp(3.25rem,7.7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">Modern websites <span className="text-white/38">built to turn attention into enquiries.</span></h1><p className="text-lg leading-8 text-white/62">YY Builds creates premium websites, booking experiences and digital systems for small and service businesses—helping more visitors understand what you do and take the next step.</p></div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row"><Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link><Link href="#work" className="button-secondary">View work <span>↓</span></Link></div>
          <div className="hero-trust mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/35"><span>Websites &amp; booking experiences</span><span>AI &amp; automation</span><span>Digital products</span></div>
        </div>
      </section>

      <section id="websites" className="home-section border-t border-white/[0.08] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="01 / Websites & booking experiences" title="Websites that make the value of your business clear." copy="Strategy, design and development brought together in one focused build—from a sharp landing page to a booking experience that helps customers take the next step." />
        <div className="mt-12 grid overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5 lg:gap-px">{websiteServices.map(([number, title, copy]) => <article key={title} className="website-service flex min-h-[220px] flex-col bg-[#0a0a0d] p-6"><span className="text-xs text-violet-300/70">{number}</span><div className="mt-auto pt-10"><h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/48">{copy}</p></div></article>)}</div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{websiteExamples.map((project) => <Link key={project.name} href={project.href} className={`mini-project mini-project-${project.tone}`}><span className="text-xs uppercase tracking-[0.16em] opacity-55">{project.type}</span><span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] opacity-45">{project.label}</span><span className="mt-10 flex items-end justify-between gap-4 text-2xl font-semibold tracking-[-0.04em]"><span>{project.name}</span><span>↗</span></span></Link>)}</div>
        <Link href="#work-websites" className="button-secondary mt-8">Explore website work <span>↓</span></Link>
      </div></section>

      <section id="automation" className="home-section border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="02 / AI & Automation" title="Less repetitive work. Faster customer journeys." copy="We turn manual steps into dependable workflows—so enquiries get answered, information reaches the right place and your team can focus on the work that matters." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{automationServices.map(([title, copy], index) => <article key={title} className="automation-card rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/20 bg-violet-300/[0.08] text-xs text-violet-200">0{index + 1}</span><span className="text-violet-300/60">✦</span></div><h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{copy}</p></article>)}</div>
        <div className="mt-8 flex flex-col gap-5 rounded-[24px] border border-violet-300/15 bg-violet-300/[0.055] p-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl font-medium text-white/75">Not sure what to automate? Show us the task that keeps slowing you down.</p><Link href="/checkout?product=business-automation" className="button-primary shrink-0">Explore automation <span>↗</span></Link></div>
      </div></section>

      <section id="products" className="home-section px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <div className="commercial-hero"><p className="eyebrow">Pricing &amp; Services</p><div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end"><h2>Choose the right solution<br className="hidden sm:block" /> to grow your business.</h2><p>Premium websites, booking systems, online stores, automation and digital products built around your business.</p></div><div className="commercial-trust-grid mt-12">{pricingTrust.map(([title, copy], index) => <article key={title}><span className="commercial-trust-icon">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
        <article className="template-product relative mt-12 overflow-hidden rounded-[32px] border border-violet-300/20 p-7 sm:p-10 lg:p-12">
          <div className="template-product-glow" aria-hidden="true" />
          <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start xl:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl border border-violet-200/20 bg-violet-300/10 text-sm font-bold text-violet-100">YY</span><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-200/65">Digital product · Source code</p><h3 className="mt-1 text-2xl font-semibold tracking-[-.04em]">YY Booking Template</h3></div></div>
              <h4 className="mt-9 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-5xl">Premium Booking Website Template</h4>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">A ready-to-customize premium booking website template with full source code.</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Template features">{bookingTemplateFeatures.map((feature) => <li key={feature} className="template-feature"><span aria-hidden="true">✓</span><span>{feature}</span></li>)}</ul>
            </div>
            <aside className="template-offer rounded-[26px] border border-white/10 bg-black/25 p-6 shadow-2xl sm:p-7" aria-label="YY Booking Template purchase options">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-violet-200/60">Digital template · One-time purchase</p>
              <div className="mt-4 flex items-end gap-3"><span className="text-6xl font-semibold tracking-[-.07em]">€39</span><span className="pb-2 text-sm text-white/42">one-time</span></div>
              <p className="mt-4 text-sm leading-6 text-white/50">This is ready-made source code—not a custom €699 booking website service.</p>
              <div className="mt-7 grid gap-3"><a href="https://buildsy2.gumroad.com/l/yy-booking" target="_blank" rel="noopener noreferrer" className="button-primary">Buy Template — €39 <span>↗</span></a><Link href="/portfolio/booking" className="button-secondary">View Demo <span>→</span></Link><a href="#contact" className="template-customize-link">Need it customized? <span>↓</span></a></div>
            </aside>
          </div>
          <p className="relative mt-10 border-t border-white/10 pt-5 text-xs font-medium text-white/38">Instant digital download <span className="mx-2 text-violet-300/50">•</span> Full source code <span className="mx-2 text-violet-300/50">•</span> Secure checkout via Gumroad</p>
        </article>
      </div></section>

      <section id="pricing" className="home-section border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <div className="commercial-sales-intro"><div><p className="eyebrow">Pricing &amp; Services</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">Choose the right foundation for your business.</h2></div><div><p className="max-w-2xl text-base leading-7 text-white/52">Start with a professional website, booking experience, online store, or custom digital solution built around your business goals.</p><ul className="commercial-sales-trust mt-6" aria-label="Project assurances">{pricingIntroTrust.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div></div>
        <div className="commercial-group-heading mt-12"><p>Website services</p><span /></div>
        <div className="commercial-services-grid mt-12">{websiteOffers.map((option) => <article key={option.name} className={`commercial-price-card commercial-price-card-${option.name === "Starter Website" ? "starter" : option.name === "Business Website" ? "business" : option.name === "Booking Website" ? "booking" : "store"} ${option.recommended ? "commercial-price-card-featured" : ""}`}>
          <div className="flex items-start justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-[.18em] text-white/42">{option.name}</p>{option.recommended && <span className="commercial-popular">Most popular</span>}</div>
          <div className="mt-7 min-h-[76px]"><p className="text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-none tracking-[-.06em]">{option.price}</p><p className="mt-2 text-xs text-white/35">{option.priceNote}</p></div>
          <p className="commercial-price-description mt-5 text-sm leading-6 text-white/52">{option.description}</p>
          <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/62">{option.features.map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300" aria-hidden="true">✓</span><span>{feature}</span></li>)}</ul>
          <div className="mt-auto pt-8"><Link href={option.href} className={option.recommended ? "button-primary w-full" : "button-secondary w-full"}>{option.cta} <span>↗</span></Link></div>
        </article>)}</div>
        <div className="commercial-pricing-notes mt-6"><p>Every project is different. Final scope, timeline and price are confirmed before work begins — no hidden fees.</p><p>Complex stores, large catalogs, advanced integrations, payment/shipping systems, ERP connections, and custom functionality are quoted individually.</p></div>
        <div className="commercial-group-heading mt-10"><p>Advanced solutions &amp; ongoing care</p><span /></div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <article className="commercial-solution-card"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-violet-200/65">Advanced solutions</p><h3 className="mt-5 text-3xl font-semibold tracking-[-.05em]">Custom / AI / Automation</h3><p className="mt-3 text-2xl font-semibold tracking-[-.04em]">Custom quote</p><p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">For businesses that need a carefully scoped system, integration, internal tool, or workflow designed around how they operate.</p></div><div className="mt-7 flex flex-wrap gap-2">{["AI integrations", "Automation", "Custom workflows", "APIs & integrations", "Internal tools", "Custom development"].map((feature) => <span key={feature} className="commercial-solution-pill">{feature}</span>)}</div><Link href="/checkout?product=business-automation" className="button-secondary mt-8 self-start">Tell Us What You Need <span>↗</span></Link></article>
          <article className="commercial-care-card"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-violet-200/65">Ongoing care</p><h3 className="mt-5 text-3xl font-semibold tracking-[-.05em]">Website Care</h3><p className="mt-3 text-2xl font-semibold tracking-[-.04em]">from €59<span className="ml-1 text-sm font-medium tracking-normal text-white/40"> / month</span></p><p className="mt-4 text-xs leading-5 text-violet-100/55">Available for YY Builds projects and selected existing websites.</p><ul className="mt-6 grid gap-3 text-sm text-white/58 sm:grid-cols-2 lg:grid-cols-1">{["Technical maintenance", "Monitoring", "Small content updates", "Basic support"].map((feature) => <li key={feature} className="flex gap-3"><span className="text-violet-300" aria-hidden="true">✓</span>{feature}</li>)}</ul><p className="mt-5 border-t border-white/10 pt-5 text-xs leading-5 text-white/35">Major redesigns, new functionality, third-party subscriptions, hosting/domain fees and large content changes are quoted separately.</p></div><Link href="/checkout?product=website-care" className="button-secondary mt-8 w-full">Ask About Website Care <span>↗</span></Link></article>
        </div>

        <div className="commercial-process mt-16"><div className="commercial-group-heading"><p>How it works</p><span /></div><ol className="mt-6 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">{projectProcess.map((step, index) => <li key={step} className="bg-[#0a0a0d] p-5"><span className="text-xs font-semibold text-violet-300/70">0{index + 1}</span><p className="mt-7 text-sm font-medium leading-6 text-white/72">{step}</p></li>)}</ol></div>

        <div className="commercial-final-trust mt-16"><div><p className="eyebrow">Every project is different</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">Final pricing is confirmed before work begins — no hidden fees.</h2></div><div className="commercial-final-trust-items">{["Direct communication", "Clear scope", "Responsive builds", "Modern technology"].map((item) => <span key={item}>✓ {item}</span>)}</div></div>

        <div className="commercial-closing-cta mt-8"><div><p className="eyebrow">Final step</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">Ready to build something better?</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/52">Tell us what you need and we&apos;ll recommend the right scope before any work begins.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:justify-end"><Link href="/checkout" className="button-primary">Start a Project <span>↗</span></Link><a href="#work" className="button-secondary">View Our Work <span>↓</span></a></div></div>
      </div></section>

      <section id="work" className="home-section border-t border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="05 / Selected work" title="Browse by the kind of thing we built." copy="Explore live concept projects across websites, customer journeys and digital systems." />
        {workGroups.map((group) => <div key={group.id} id={group.id} className="work-group pt-12"><div className="mb-5 flex items-center gap-5"><h3 className="text-xs font-semibold uppercase tracking-[.2em] text-violet-200">{group.label}</h3><span className="h-px flex-1 bg-white/10" /><span className="text-xs text-white/30">{String(group.projects.length).padStart(2, "0")}</span></div><div className={`grid gap-4 ${group.projects.length > 1 ? "md:grid-cols-3" : ""}`}>{group.projects.map((project) => <Link key={project.name} href={project.href} className={`work-card work-card-${project.tone} group`}><article className="flex min-h-[330px] flex-col p-7"><div className="flex justify-between gap-4 text-xs uppercase tracking-[.16em] opacity-55"><span>{project.sector}</span><span>{project.label}</span></div><div className="mt-auto pt-16"><h4 className="text-3xl font-semibold tracking-[-.05em]">{project.name}</h4><p className="mt-3 max-w-md text-sm leading-6 opacity-65">{project.summary}</p><div className="mt-6 flex items-center justify-between border-t border-current/15 pt-4 text-xs font-semibold uppercase tracking-[.14em]"><span>View project</span><span className="project-arrow">↗</span></div></div></article></Link>)}</div></div>)}
        <div className="mt-12 rounded-[24px] border border-dashed border-white/15 p-6 text-white/42"><span className="text-xs font-semibold uppercase tracking-[.18em] text-white/60">Concept projects</span><p className="mt-3 max-w-2xl text-sm leading-6">The projects shown are clearly marked concepts—built to demonstrate our approach to brand, customer experience and useful digital functionality.</p></div>
      </div></section>

      <section id="contact" className="home-section px-5 py-12 sm:px-6 lg:px-10 lg:py-16"><div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 px-7 py-10 sm:px-10 lg:px-12 lg:py-14"><div className="final-cta-glow" /><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow">06 / Contact</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Tell us what you need and we&apos;ll recommend the right solution.</h2><p className="mt-5 text-white/50">A clear scope, a practical next step, and no obligation.</p><div className="mt-7 border-t border-white/10 pt-6"><p className="font-medium text-white/78">Already have a website? Send me the link and I&apos;ll tell you what I would improve.</p><p className="mt-2 text-sm leading-6 text-white/42">Include the URL in the project request and I&apos;ll review it alongside your goals.</p><Link href="/checkout" className="mt-4 inline-flex text-sm font-semibold text-violet-200 transition hover:text-white">Share your website <span className="ml-2">↗</span></Link></div></div><Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link></div></div></section>
      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/45 sm:flex-row sm:items-end"><div><p className="text-base font-semibold text-white/85">YY Builds</p><p className="mt-1">Websites • AI &amp; Automation • Products</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a href="https://t.me/yybuilds" target="_blank" rel="noopener noreferrer">{contactDetails.telegram}</a></div><SocialLinks className="mt-4" /></div><nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation"><a href="#websites">Websites</a><a href="#automation">Automation</a><a href="#products">Products</a><a href="#pricing">Pricing</a><a href="#work">Work</a><a href="#contact">Contact</a></nav></div></footer>
      <YYAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{copy}</p></div>;
}
