import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import NexavoAssistant from "./components/NexavoAssistant";
import ProjectForm from "./components/ProjectForm";

const services = [
  ["01", "Business websites", "A credible, mobile-friendly home for your business, structured so customers quickly understand what you offer.", "Present your business clearly and turn visits into enquiries."],
  ["02", "Booking systems", "Simple appointment and reservation flows designed around your availability, services, and customer journey.", "Reduce back-and-forth and make it easier to book."],
  ["03", "Product & service catalogues", "Organised menus, service lists, galleries, or product collections that are easy to browse on any screen.", "Help customers find and compare the right option."],
  ["04", "Contact & request forms", "Focused enquiry forms that collect the information you actually need before following up with a customer.", "Receive more useful requests, not vague messages."],
  ["05", "WhatsApp integrations", "Clear contact routes, pre-filled messages, and practical hand-offs from your website into WhatsApp.", "Move interested visitors into a familiar conversation."],
  ["06", "AI-assisted tools", "Simple assistants and guided experiences for common questions or choosing the right service.", "Make routine information easier to access."],
];

const projects = [
  {
    category: "Healthcare", name: "NovaDent AI", title: "A calmer route from research to appointment.",
    description: "A dental clinic concept that explains treatments clearly and helps patients take the next step with confidence.",
    href: "/portfolio/novadent", gradient: "from-cyan-100 via-sky-50 to-white", accent: "text-cyan-700",
    capabilities: ["Treatment catalogue", "Appointment request", "Patient assistant"], result: "Designed for considered, trust-led decisions",
  },
  {
    category: "Auto service booking & estimates", name: "Autoflow", title: "A clearer route from vehicle issue to workshop visit.",
    description: "An auto-service concept with service selection, vehicle details, interactive estimates, and booking enquiries.",
    href: "/portfolio/autoflow", gradient: "from-orange-950 via-stone-950 to-black", accent: "text-orange-400", dark: true,
    capabilities: ["Service catalogue", "Vehicle-based estimate", "Booking enquiry"], result: "Designed for clearer, better-qualified workshop requests",
  },
  {
    category: "Restaurant menu & reservations", name: "Maison", title: "An elegant restaurant journey, from menu to table.",
    description: "A restaurant website concept with an interactive menu, demo order experience, and table reservation flow.",
    href: "/portfolio/maison", gradient: "from-amber-50 via-orange-50 to-white", accent: "text-orange-700",
    capabilities: ["Interactive menu", "Demo ordering", "Table reservations"], result: "Designed to move guests from discovery to a planned visit",
  },
];

const steps = [
  ["01", "Understand", "We learn what your business offers, who your customers are, and where the current process creates friction.", "A clear scope and recommended approach"],
  ["02", "Structure", "We organise the pages, content, customer journey, and practical features before polishing the visuals.", "Page structure and functional plan"],
  ["03", "Design & build", "We create the responsive experience and connect the forms, booking flow, catalogue, or integrations you need.", "A working version for review"],
  ["04", "Review & launch", "You test the result, we refine the details, and the finished project is prepared for publication.", "A launch-ready digital presence"],
];

const packages = [
  { label: "Starter", title: "Business page", description: "A professional one-page website for presenting your business online.", price: "€149", value: "Starter package — €149", features: ["Mobile-friendly design", "Services and contact sections", "Direct contact buttons", "Online publication"], action: "Choose Starter" },
  { label: "Growth", title: "Website + assistant", description: "A complete business website with a contact form and guided assistant.", price: "€199", value: "Growth package — €199", features: ["Everything in Starter", "Contact request form", "Guided online assistant", "Portfolio or gallery"], action: "Choose Growth", featured: true },
  { label: "Business", title: "Custom solution", description: "A tailored solution with booking, catalogues, or connected features.", price: "€349", value: "Business package — from €349", features: ["Everything in Growth", "Booking or custom forms", "Business integrations", "Priority project support"], action: "Discuss a project" },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <HomeHeader />

      <section className="relative px-5 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-10 lg:pb-36 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[15%] top-24 h-80 w-80 rounded-full bg-violet-700/20 blur-[120px]" />
          <div className="absolute right-[5%] top-80 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60"><span className="h-2 w-2 rounded-full bg-emerald-400" />Websites and practical digital tools for small businesses</div>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_0.37fr] lg:gap-16">
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">Make it easier for customers to <span className="text-white/35">choose, book, and contact you.</span></h1>
            <div className="pb-1 lg:pb-3">
              <p className="text-lg leading-8 text-white/55">Nexavo builds clear business websites with booking, catalogues, enquiry forms, WhatsApp connections, and simple AI-assisted tools.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#request" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black hover:scale-[1.03]">Discuss your project →</a>
                <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold hover:bg-white/10">See examples</a>
              </div>
            </div>
          </div>
          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-3 lg:mt-20">
            {[["Clear structure", "Customers quickly understand what you offer"], ["Useful features", "Forms, bookings, catalogues, and integrations"], ["Responsive by default", "A considered experience on every screen"]].map(([title, description]) => (
              <div key={title} className="border-b border-white/10 bg-[#0b0b0b] p-6 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-7"><p className="font-semibold">{title}</p><p className="mt-2 text-sm leading-6 text-white/40">{description}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">What we build</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">The right digital pieces, working together.</h2></div>
            <p className="max-w-md leading-7 text-white/45">Start with the problem your customer needs solved. We shape the website and features around that outcome.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map(([number, title, description, outcome]) => (
              <article key={title} className="group flex min-h-[330px] flex-col rounded-[28px] border border-white/10 bg-[#0c0c0c] p-6 hover:border-white/20 sm:p-7">
                <div className="flex items-center justify-between text-sm text-white/30"><span>{number}</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65">↗</span></div>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-white/45">{description}</p><p className="mt-auto border-t border-white/10 pt-5 text-sm leading-6 text-white/70">{outcome}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-5 rounded-[26px] border border-violet-400/20 bg-violet-400/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><p className="font-semibold">Not sure which combination fits?</p><p className="mt-2 text-sm leading-6 text-white/45">Describe the current bottleneck and we’ll suggest a focused starting point.</p></div><a href="#request" className="shrink-0 rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black hover:scale-[1.03]">Tell us what you need →</a></div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-[1fr_0.42fr] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Selected work</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Three industries. Three different customer journeys.</h2></div><p className="leading-7 text-white/45">Explore each concept to see how structure, content, and functionality change with the business.</p></div>
          <div className="mt-14 space-y-5 lg:mt-16">
            {projects.map((project, index) => (
              <Link key={project.name} href={project.href} className={`group block overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br ${project.gradient}`}>
                <article className={`grid min-h-[430px] gap-10 p-7 sm:p-9 lg:grid-cols-[0.42fr_0.58fr] lg:p-12 ${project.dark ? "text-white" : "text-stone-950"}`}>
                  <div className="flex flex-col"><div className="flex items-center gap-3"><span className={`text-xs font-semibold uppercase tracking-[0.22em] ${project.accent}`}>{project.category}</span><span className={`h-px flex-1 ${project.dark ? "bg-white/15" : "bg-black/10"}`} /><span className="text-xs opacity-40">0{index + 1}</span></div><div className="mt-auto pt-16"><p className="text-sm font-semibold opacity-55">{project.name}</p><h3 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">{project.title}</h3><p className="mt-5 max-w-xl leading-7 opacity-55">{project.description}</p></div></div>
                  <div className={`flex flex-col justify-between rounded-[24px] border p-6 sm:p-8 ${project.dark ? "border-white/10 bg-white/[0.05]" : "border-black/10 bg-white/45"}`}><div><p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-45">Capabilities shown</p><div className="mt-5 space-y-3">{project.capabilities.map((capability) => <div key={capability} className={`flex items-center justify-between border-b pb-3 text-sm font-medium ${project.dark ? "border-white/10" : "border-black/10"}`}><span>{capability}</span><span className="opacity-35">↗</span></div>)}</div></div><div className="mt-12 flex items-end justify-between gap-5"><p className="max-w-xs text-sm leading-6 opacity-55">{project.result}</p><span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-1 ${project.dark ? "bg-white text-black" : "bg-black text-white"}`}>→</span></div></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">How projects move</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">A clear process, with useful decisions at every stage.</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 lg:mt-16 lg:grid-cols-4">{steps.map(([number, title, description, deliverable]) => <article key={number} className="flex min-h-[350px] flex-col bg-[#0b0b0b] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-sm text-white/30">{number}</span><span className="h-2 w-2 rounded-full bg-violet-400/70" /></div><h3 className="mt-12 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-white/45">{description}</p><p className="mt-auto border-t border-white/10 pt-5 text-xs leading-5 text-white/35">You receive: {deliverable}</p></article>)}</div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-9 overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-violet-600 via-violet-800 to-[#111] p-7 sm:p-11 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Have a project in mind?</p><h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">Let’s identify the simplest useful version.</h2><p className="mt-5 max-w-xl leading-7 text-white/60">Tell us what customers need to do and where the current experience falls short.</p></div><a href="#request" className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-5 font-semibold text-black hover:scale-[1.03]">Start a project →</a></div></section>

      <section id="pricing" className="scroll-mt-20 px-5 pb-24 sm:px-6 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-[1fr_0.4fr] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">Starting points</p><h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">A practical scope for different stages.</h2></div><p className="leading-7 text-white/45">Clear starting prices, adapted to your content, customers, and required functionality.</p></div>
          <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3">{packages.map((item) => <article key={item.title} className={`relative flex flex-col rounded-[30px] border p-7 ${item.featured ? "border-violet-400/50 bg-violet-500/10 shadow-[0_0_60px_rgba(139,92,246,0.16)]" : "border-white/10 bg-white/[0.03]"}`}>{item.featured && <span className="absolute right-6 top-6 rounded-full bg-violet-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">Popular</span>}<p className={`text-xs font-semibold uppercase tracking-[0.2em] ${item.featured ? "text-violet-300" : "text-white/45"}`}>{item.label}</p><h3 className="mt-4 text-2xl font-semibold">{item.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-white/50">{item.description}</p><p className="mt-8 text-4xl font-semibold">{item.price}<span className="ml-2 text-sm font-normal text-white/40">from</span></p><div className="mt-8 space-y-3 text-sm text-white/65">{item.features.map((feature) => <p key={feature}>✓ {feature}</p>)}</div><a href="#request" data-package={item.value} className={`mt-9 rounded-full px-5 py-3 text-center text-sm font-semibold ${item.featured ? "bg-white text-black hover:scale-[1.02]" : "border border-white/15 hover:bg-white hover:text-black"}`}>{item.action}</a></article>)}</div>
          <p className="mt-7 text-center text-sm text-white/35">Final pricing depends on the agreed scope. No hidden subscriptions.</p>
        </div>
      </section>

      <section id="request" className="scroll-mt-24 px-5 pb-24 sm:px-6 sm:pb-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-14"><div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">Project request</p><h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Tell us what your business needs customers to do.</h2><p className="mt-6 max-w-md leading-7 text-white/45">Share the goal, current problem, and useful context. We’ll suggest a focused website or digital system.</p><div className="mt-10 space-y-4 text-sm text-white/55"><p>✓ Clear recommended scope</p><p>✓ Transparent starting price</p><p>✓ Response within one business day</p></div></div><ProjectForm /></div></section>

      <footer className="border-t border-white/10 px-5 py-9 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/35 sm:flex-row sm:items-center"><div><p className="font-medium text-white/60">Nexavo</p><p className="mt-1">Websites and practical digital systems.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3"><a href="#services" className="hover:text-white">Services</a><a href="#work" className="hover:text-white">Work</a><a href="#process" className="hover:text-white">Process</a><a href="#request" className="hover:text-white">Contact</a></div></div></footer>
      <NexavoAssistant />
    </main>
  );
}
