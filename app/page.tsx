import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
import SocialLinks from "./components/SocialLinks";
import ContentShowcase from "./components/ContentShowcase";
import { contactDetails } from "./lib/contact";

const featuredProjects = [
  { name: "Aurelia Dental", type: "Dental website", label: "Concept project", built: "A multilingual patient journey with treatment discovery and guided appointment requests.", href: "/portfolio/modern-dental-care", badge: "Healthcare", className: "from-emerald-100 via-white to-teal-50" },
  { name: "NovaDent", type: "Clinic website", label: "Concept", built: "A focused clinic experience built around trust, treatment discovery and clear next steps.", href: "/portfolio/novadent", badge: "Clinic", className: "from-cyan-100 via-white to-sky-50" },
  { name: "Autoflow", type: "Booking experience", label: "Concept", built: "A clearer way for customers to explore services, choose the right option and send a booking request.", href: "/portfolio/autoflow", badge: "Automotive", className: "from-orange-100 via-white to-amber-50" },
  { name: "Maison", type: "Restaurant website", label: "Concept", built: "A warm brand experience combining menus, storytelling and simple reservation actions.", href: "/portfolio/maison", badge: "Hospitality", className: "from-rose-100 via-white to-orange-50" },
];

const services = [
  { icon: "✦", name: "Websites", description: "Modern business websites and landing pages designed to look clear, trustworthy and easy to act on.", accent: "bg-violet-100 text-violet-700" },
  { icon: "↗", name: "Booking Systems", description: "Simple booking and appointment flows that reduce back-and-forth messages and missed opportunities.", accent: "bg-sky-100 text-sky-700" },
  { icon: "AI", name: "AI Assistants", description: "Website assistants that answer common questions, guide visitors and help qualify serious enquiries.", accent: "bg-fuchsia-100 text-fuchsia-700" },
  { icon: "⚡", name: "Automation", description: "Practical workflows for lead capture, notifications, follow-ups, routing and repetitive admin tasks.", accent: "bg-amber-100 text-amber-700" },
];

const process = [
  ["01", "Tell me what you need", "Share your business, website or current problem. No long brief is required to start."],
  ["02", "Get a clear direction", "I recommend the simplest useful solution: website, booking flow, AI assistant or automation."],
  ["03", "Build and launch", "Once the scope is clear, I build the experience and prepare it for real customer use."],
];

const trustPoints = [
  "Direct communication",
  "Responsive by default",
  "Clear project scope",
  "Practical AI, not hype",
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#fbfbfe] text-slate-950">
      <HomeHeader />

      <section className="relative px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-200/60 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-80 w-80 rounded-full bg-sky-200/55 blur-3xl" />
          <div className="absolute left-1/2 top-[28rem] h-64 w-64 -translate-x-1/2 rounded-full bg-pink-100/70 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Websites • AI • Automation
            </div>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,7vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
              Digital tools that make your business <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">easier to choose.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">I build modern websites, booking systems and practical AI tools that help small businesses get more enquiries and spend less time on repetitive work.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/checkout" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700">Start a project <span className="ml-2">↗</span></Link>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200">Explore services <span className="ml-2 text-violet-600">↓</span></a>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {trustPoints.map((point) => <span key={point} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-900/5">✓ {point}</span>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-violet-200/60 via-sky-100/30 to-pink-200/50 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/90 p-5 shadow-[0_35px_100px_rgba(69,49,120,.16)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">YY</span><div><p className="font-semibold">YY AI Receptionist</p><p className="text-xs text-slate-500">Smart customer guidance</p></div></div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live</span>
              </div>
              <div className="space-y-4 py-6">
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">Hi — tell me what your business does and what you want to improve.</div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-violet-600 p-4 text-sm leading-6 text-white">I want more bookings and fewer manual messages.</div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-slate-100 p-4 text-sm leading-6 text-slate-700">A booking flow plus automation could be a strong fit. I can help you narrow down the simplest setup.</div>
              </div>
              <a href="#ai" className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-violet-50 to-sky-50 px-5 py-4 text-sm font-semibold text-slate-800 ring-1 ring-violet-100">Meet YY AI <span className="text-violet-600">↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What I build" title="Useful digital systems, without the complexity." copy="Start with the business result you need. The technology comes second." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.name} className="group flex min-h-[285px] flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold ${service.accent}`}>{service.icon}</span>
                <div className="mt-auto pt-10"><h3 className="text-2xl font-semibold tracking-[-0.04em]">{service.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">How it works</p><h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">From idea to useful result.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">You do not need to know what technology you need. Start with the problem, and I’ll help shape the clearest next step.</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {process.map(([number, title, copy]) => <article key={number} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-7 sm:p-8"><span className="text-sm font-semibold text-violet-300">{number}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-6 text-white/55">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Selected work" title="See how the thinking looks in practice." copy="Concept projects showing how YY Builds approaches brand, customer journeys, booking and useful digital functionality." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link key={project.name} href={project.href} className={`group overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br ${project.className} p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8`}>
                <article className="flex min-h-[330px] flex-col">
                  <div className="flex items-center justify-between gap-4"><span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">{project.badge}</span><span className="text-xs font-medium uppercase tracking-[.14em] text-slate-500">{project.label}</span></div>
                  <div className="mt-auto pt-16"><p className="text-sm font-medium text-slate-500">{project.type}</p><h3 className="mt-2 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{project.name}</h3><p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">{project.built}</p><div className="mt-7 flex items-center justify-between border-t border-slate-900/10 pt-4 text-xs font-semibold uppercase tracking-[.14em]"><span>View project</span><span className="transition group-hover:translate-x-1">↗</span></div></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContentShowcase />

      <section id="ai" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-sky-500 p-[1px] shadow-2xl shadow-violet-900/10">
          <div className="grid gap-10 rounded-[35px] bg-white p-7 sm:p-10 lg:grid-cols-[1fr_.8fr] lg:items-center lg:p-14">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Meet YY AI</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">A receptionist that helps visitors find the right next step.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">YY AI can answer common questions, understand what a visitor needs, guide them toward the right service and carry useful context into a project request.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#top" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white">Try YY AI <span className="ml-2">↑</span></a><Link href="/checkout?product=custom-project" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-800">Build one for my business <span className="ml-2 text-violet-600">↗</span></Link></div></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {["Answers common questions", "Guides and qualifies leads", "Works across multiple languages", "Connects conversation to enquiry flow"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700 ring-1 ring-slate-900/5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700">✓</span>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-14 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-[34px] bg-[#f0edff] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Ready when you are</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">Let’s build something useful for your business.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">Tell me what you need. I’ll review it and recommend a clear next step before any work or payment.</p></div>
            <Link href="/checkout" className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700">Start a project <span className="ml-2">↗</span></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-slate-500 sm:flex-row sm:items-end">
          <div><p className="text-base font-semibold text-slate-950">YY Builds</p><p className="mt-1">Websites • Booking Systems • AI • Automation • Content</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><a className="hover:text-slate-950" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a className="hover:text-slate-950" href="https://t.me/yybuilds" target="_blank" rel="noopener noreferrer">{contactDetails.telegram}</a></div><SocialLinks className="mt-4" /></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#content-engine">Content</a><a href="#process">How it works</a><a href="#ai">YY AI</a><a href="#contact">Contact</a></nav>
        </div>
      </footer>

      <YYAssistant />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">{title}</h2></div><p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">{copy}</p></div>;
}
