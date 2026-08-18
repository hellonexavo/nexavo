import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
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
  { name: "NovaDent", type: "Clinic website", href: "/portfolio/novadent", tone: "cyan" },
  { name: "Autoflow", type: "Automotive services", href: "/portfolio/autoflow", tone: "orange" },
  { name: "Maison", type: "Restaurant website", href: "/portfolio/maison", tone: "warm" },
];

const workGroups = [
  { id: "work-websites", label: "Website projects", projects: [
    { name: "NovaDent", sector: "Dental clinic", summary: "Treatment discovery, patient guidance and appointment requests.", href: "/portfolio/novadent", tone: "cyan" },
    { name: "Autoflow", sector: "Automotive services", summary: "Service selection, instant estimates and booking enquiries.", href: "/portfolio/autoflow", tone: "orange" },
    { name: "Maison", sector: "Restaurant", summary: "Brand-led dining, interactive menus and table reservations.", href: "/portfolio/maison", tone: "warm" },
  ] },
  { id: "work-systems", label: "Product / system projects", projects: [
    { name: "YY Booking", sector: "Booking system", summary: "Live quotes, scheduling, customer booking and owner management.", href: "/portfolio/booking", tone: "blue" },
  ] },
];

export default function Home() {
  return (
    <main id="top" className="yy-home min-h-screen overflow-hidden bg-[#070709] text-white">
      <HomeHeader />
      <section className="hero-section relative flex min-h-[760px] items-center px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="hero-spotlight" /><div className="hero-glow hero-glow-purple" /><div className="hero-glow hero-glow-blue" /><div className="hero-grid" /></div>
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55"><span className="h-px w-8 bg-violet-400" /> Independent digital studio</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end lg:gap-16"><h1 className="hero-title max-w-[1030px] text-[clamp(3.25rem,7.7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">Modern digital systems <span className="text-white/38">built for business.</span></h1><p className="text-lg leading-8 text-white/62">YY Builds creates modern websites, AI automation and digital products that help businesses look better, move faster and serve customers well.</p></div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row"><Link href="#work" className="button-primary">View work <span>↓</span></Link><Link href="/checkout" className="button-secondary">Start a project <span>↗</span></Link></div>
          <div className="hero-trust mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/35"><span>Websites</span><span>AI &amp; automation</span><span>Digital products</span></div>
        </div>
      </section>

      <section id="websites" className="home-section border-t border-white/[0.08] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="01 / Websites" title="Websites that make the value of your business clear." copy="Strategy, design and development brought together in one focused build—from a sharp landing page to a custom business platform." />
        <div className="mt-12 grid overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5 lg:gap-px">{websiteServices.map(([number, title, copy]) => <article key={title} className="website-service flex min-h-[220px] flex-col bg-[#0a0a0d] p-6"><span className="text-xs text-violet-300/70">{number}</span><div className="mt-auto pt-10"><h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/48">{copy}</p></div></article>)}</div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{websiteExamples.map((project) => <Link key={project.name} href={project.href} className={`mini-project mini-project-${project.tone}`}><span className="text-xs uppercase tracking-[0.16em] opacity-55">{project.type}</span><span className="mt-12 flex items-end justify-between gap-4 text-2xl font-semibold tracking-[-0.04em]"><span>{project.name}</span><span>↗</span></span></Link>)}</div>
        <Link href="#work-websites" className="button-secondary mt-8">Explore website work <span>↓</span></Link>
      </div></section>

      <section id="automation" className="home-section border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="02 / AI & Automation" title="Less repetitive work. Faster customer journeys." copy="We turn manual steps into dependable workflows—so enquiries get answered, information reaches the right place and your team can focus on the work that matters." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{automationServices.map(([title, copy], index) => <article key={title} className="automation-card rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/20 bg-violet-300/[0.08] text-xs text-violet-200">0{index + 1}</span><span className="text-violet-300/60">✦</span></div><h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{copy}</p></article>)}</div>
        <div className="mt-8 flex flex-col gap-5 rounded-[24px] border border-violet-300/15 bg-violet-300/[0.055] p-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl font-medium text-white/75">Not sure what to automate? Show us the task that keeps slowing you down.</p><Link href="/checkout?product=business-automation" className="button-primary shrink-0">Explore automation <span>↗</span></Link></div>
      </div></section>

      <section id="products" className="home-section px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="03 / Products" title="Focused software, ready for real businesses." copy="YY products solve repeatable business problems with a polished customer experience and practical operations behind it." />
        <article className="product-showcase relative mt-12 overflow-hidden rounded-[32px] border border-emerald-200/15 p-7 sm:p-10 lg:p-12"><div className="product-glow" aria-hidden="true" /><div className="relative grid gap-12 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div><div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-sm font-bold text-[#153f35]">YY</span><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-200/65">YY Builds product</p><h3 className="mt-1 text-2xl font-semibold tracking-[-.04em]">YY Booking</h3></div></div><h4 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-5xl">Modern online booking, without the friction.</h4><p className="mt-5 max-w-2xl text-lg leading-8 text-white/58">A modern online booking system for salons, clinics and local service businesses.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/booking" className="button-primary">View live demo <span>↗</span></Link><Link href="/portfolio/booking" className="button-secondary">Learn more <span>→</span></Link></div></div>
          <div className="product-ui rounded-[26px] border border-white/10 bg-black/25 p-5 shadow-2xl"><div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs font-semibold uppercase tracking-[.16em] text-white/45">Booking overview</span><span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.7)]" /></div><div className="mt-5 grid grid-cols-3 gap-2">{["Choose", "Schedule", "Confirm"].map((item, i) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><span className="text-[10px] text-white/30">0{i + 1}</span><p className="mt-5 text-xs font-medium">{item}</p></div>)}</div><div className="mt-4 rounded-2xl bg-white p-5 text-[#12221e]"><p className="text-xs font-semibold text-emerald-800/55">Your appointment</p><div className="mt-4 h-2 w-3/4 rounded-full bg-emerald-950/10" /><div className="mt-2 h-2 w-1/2 rounded-full bg-emerald-950/10" /><div className="mt-5 rounded-full bg-[#173f35] py-3 text-center text-xs font-semibold text-white">Confirm booking</div></div></div>
        </div><div className="relative mt-10 border-t border-white/10 pt-5 text-xs uppercase tracking-[.15em] text-white/32">Product 01 <span className="mx-3">•</span> Built to support future YY products</div></article>
      </div></section>

      <section id="work" className="home-section border-t border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="04 / Selected work" title="Browse by the kind of thing we built." copy="Explore live concept projects across websites, customer journeys and digital systems." />
        {workGroups.map((group) => <div key={group.id} id={group.id} className="work-group pt-12"><div className="mb-5 flex items-center gap-5"><h3 className="text-xs font-semibold uppercase tracking-[.2em] text-violet-200">{group.label}</h3><span className="h-px flex-1 bg-white/10" /><span className="text-xs text-white/30">{String(group.projects.length).padStart(2, "0")}</span></div><div className={`grid gap-4 ${group.projects.length > 1 ? "md:grid-cols-3" : ""}`}>{group.projects.map((project) => <Link key={project.name} href={project.href} className={`work-card work-card-${project.tone} group`}><article className="flex min-h-[330px] flex-col p-7"><div className="flex justify-between gap-4 text-xs uppercase tracking-[.16em] opacity-55"><span>{project.sector}</span><span>Concept</span></div><div className="mt-auto pt-16"><h4 className="text-3xl font-semibold tracking-[-.05em]">{project.name}</h4><p className="mt-3 max-w-md text-sm leading-6 opacity-65">{project.summary}</p><div className="mt-6 flex items-center justify-between border-t border-current/15 pt-4 text-xs font-semibold uppercase tracking-[.14em]"><span>View project</span><span className="project-arrow">↗</span></div></div></article></Link>)}</div></div>)}
        <div className="mt-12 rounded-[24px] border border-dashed border-white/15 p-6 text-white/42"><span className="text-xs font-semibold uppercase tracking-[.18em] text-white/60">Concept projects</span><p className="mt-3 max-w-2xl text-sm leading-6">The projects shown are clearly marked concepts—built to demonstrate our approach to brand, customer experience and useful digital functionality.</p></div>
      </div></section>

      <section id="contact" className="home-section px-5 py-12 sm:px-6 lg:px-10 lg:py-16"><div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 px-7 py-10 sm:px-10 lg:px-12 lg:py-14"><div className="final-cta-glow" /><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow">05 / Contact</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Tell us what you need and we&apos;ll recommend the right solution.</h2><p className="mt-5 text-white/50">A clear scope, a practical next step, and no obligation.</p></div><Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link></div></div></section>
      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/45 sm:flex-row sm:items-end"><div><p className="text-base font-semibold text-white/85">YY Builds</p><p className="mt-1">Websites • AI &amp; Automation • Products</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a href="https://t.me/yybuilds" target="_blank" rel="noreferrer">{contactDetails.telegram}</a></div></div><nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation"><a href="#websites">Websites</a><a href="#automation">Automation</a><a href="#products">Products</a><a href="#work">Work</a><a href="#contact">Contact</a></nav></div></footer>
      <YYAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{copy}</p></div>;
}
