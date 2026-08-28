import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
import SocialLinks from "./components/SocialLinks";
import { contactDetails } from "./lib/contact";

const featuredProjects = [
  { name: "Aurelia Dental", type: "Multi-location dental website", label: "Concept project", built: "Treatment discovery, multilingual content and a guided appointment journey.", value: "Makes locations, treatments and next steps easier for patients to understand.", href: "/portfolio/modern-dental-care", tone: "healthcare" },
  { name: "NovaDent", type: "Clinic website", label: "Concept", built: "A focused website with treatment discovery and appointment requests.", value: "Builds trust and guides patients towards the right next step.", href: "/portfolio/novadent", tone: "cyan" },
  { name: "Autoflow", type: "Automotive booking experience", label: "Concept", built: "A service catalogue, tailored service plans and booking enquiries.", value: "Turns complex workshop choices into a clear customer journey.", href: "/portfolio/autoflow", tone: "orange" },
  { name: "Maison", type: "Restaurant website", label: "Concept", built: "A brand-led website with interactive menus and table reservations.", value: "Pairs a premium brand experience with practical booking actions.", href: "/portfolio/maison", tone: "warm" },
];

const services = [
  { name: "Websites", description: "Modern responsive business websites and landing pages built to convert visitors into enquiries." },
  { name: "Booking Systems", description: "Simple booking and appointment experiences for businesses that want fewer manual messages and calls." },
  { name: "AI & Automation", description: "Practical AI assistants and automations that reduce repetitive work and improve customer response." },
  { name: "Custom Builds", description: "Custom web tools, forms, integrations and digital workflows built around a specific business need." },
];

const trustPoints = [
  ["Direct communication", "Work directly with the person shaping, building and reviewing your project."],
  ["Clear direction", "Scope, priorities and the next step are made clear before the build begins."],
  ["Responsive by default", "Mobile, tablet and desktop experiences are considered from the start."],
  ["Practical technology", "Modern tools are used where they create a better experience or save useful time."],
];

export default function Home() {
  return (
    <main id="top" className="yy-home min-h-screen overflow-hidden bg-[#070709] text-white">
      <HomeHeader />

      <section className="hero-section relative flex min-h-[680px] items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10">
        <div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-spotlight" />
          <div className="hero-glow hero-glow-purple" />
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-grid" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/55"><span className="h-px w-8 bg-violet-400" /> Independent digital studio</p>
          <h1 className="hero-title mt-8 max-w-[1080px] text-[clamp(3.25rem,7.4vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]">Modern websites <span className="text-white/38">built to turn attention into enquiries.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">I build fast, modern websites, booking systems and practical AI automations for businesses that want more enquiries and appointments.</p>
          <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row">
            <Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link>
            <Link href="#work" className="button-secondary">View my work <span>↓</span></Link>
          </div>
        </div>
      </section>

      <section id="work" className="home-section scroll-mt-20 border-t border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="01 / Selected work" title="Proof before promises." copy="A focused selection of website and customer journey concepts built to make each business clearer, easier to trust and easier to act on." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link key={project.name} href={project.href} className={`work-card work-card-${project.tone} group`}>
                <article className="flex min-h-[330px] flex-col p-7 sm:p-8">
                  <div className="flex justify-between gap-4 text-xs uppercase tracking-[.16em] opacity-55"><span>{project.type}</span><span className="shrink-0">{project.label}</span></div>
                  <div className="mt-auto pt-14">
                    <h3 className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{project.name}</h3>
                    <p className="mt-4 max-w-xl text-sm font-medium leading-6 opacity-80">{project.built}</p>
                    <p className="mt-2 max-w-xl text-sm leading-6 opacity-60">{project.value}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-current/15 pt-4 text-xs font-semibold uppercase tracking-[.14em]"><span>View project</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-xs leading-5 text-white/38">These projects are clearly marked concepts and show YY Builds&apos; approach to brand, customer experience and useful digital functionality.</p>
        </div>
      </section>

      <section id="audit" className="home-section scroll-mt-20 px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-violet-300/20 px-7 py-9 sm:px-10 lg:px-12 lg:py-11">
          <div className="final-cta-glow" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="eyebrow">Already have a website?</p>
              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-5xl">Send me your website. I&apos;ll show you what I would improve.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/52 sm:text-base sm:leading-7">No long sales call. Send the link and I&apos;ll give you a clear first impression of what could be improved in the design, UX or conversion flow.</p>
            </div>
            <Link href="/checkout" className="button-primary shrink-0">Send your website <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section id="services" className="home-section scroll-mt-20 border-y border-white/[0.08] bg-white/[0.018] px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="02 / Services" title="Four ways to move your business forward." copy="Choose a clear starting point. Every project is shaped around what your business and customers actually need." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.name} className="automation-card flex min-h-[260px] flex-col rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/20 bg-violet-300/[0.08] text-xs text-violet-200">0{index + 1}</span><span className="text-violet-300/60" aria-hidden="true">✦</span></div>
                <div className="mt-auto pt-10"><h3 className="text-xl font-semibold tracking-[-0.035em]">{service.name}</h3><p className="mt-3 text-sm leading-6 text-white/50">{service.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="home-section scroll-mt-20 px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="03 / Why YY Builds" title="Clear thinking. Careful execution." copy="A focused, direct way to turn an idea or business need into a polished digital experience." />
          <div className="commercial-trust-grid mt-12">
            {trustPoints.map(([title, copy], index) => (
              <article key={title}><span className="commercial-trust-icon">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="home-section scroll-mt-20 px-5 pb-12 pt-4 sm:px-6 lg:px-10 lg:pb-16">
        <div className="final-cta relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="final-cta-glow" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div><p className="eyebrow">04 / Start a conversation</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Have a project in mind? Let&apos;s build it.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/52">Tell me what you need, and I&apos;ll reply with a clear direction for the project.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/checkout" className="button-primary">Start a project <span>↗</span></Link><Link href="/checkout" className="button-secondary">Send your website <span>↗</span></Link></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/45 sm:flex-row sm:items-end">
          <div><p className="text-base font-semibold text-white/85">YY Builds</p><p className="mt-1">Websites • Booking Systems • AI &amp; Automation</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a href="https://t.me/yybuilds" target="_blank" rel="noopener noreferrer">{contactDetails.telegram}</a></div><SocialLinks className="mt-4" /></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation"><a href="#work">Work</a><a href="#audit">Website audit</a><a href="#services">Services</a><a href="#why">Why YY Builds</a><a href="#contact">Contact</a></nav>
        </div>
      </footer>
      <YYAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p>{copy}</p></div>;
}
