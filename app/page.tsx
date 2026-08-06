import NexavoAssistant from "./components/NexavoAssistant";
import ProjectForm from "./components/ProjectForm";const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Premium, responsive websites designed to turn visitors into real customer enquiries.",
    price: "From €99",
  },
  {
    number: "02",
    title: "AI assistants",
    description:
      "Smart assistants that answer questions, collect contacts, and support customers 24/7.",
    price: "From €149",
  },
  {
    number: "03",
    title: "Booking systems",
    description:
      "Simple online booking for clinics, restaurants, workshops, and service businesses.",
    price: "From €199",
  },
];

const projects = [
  {
    category: "Healthcare",
    name: "NovaDent AI",
    title: "Premium dental care, powered by AI.",
    description:
      "A clinic website with clear services, online appointments, and an AI patient assistant.",
    href: "/portfolio/novadent",
    gradient: "from-cyan-100 via-sky-50 to-white",
    accent: "text-cyan-700",
    tags: ["Website", "AI assistant", "Booking"],
  },
  {
    category: "Automotive",
    name: "AutoFlow",
    title: "Car service without the usual friction.",
    description:
      "A modern workshop platform with service selection, instant estimates, and smart support.",
    href: "/portfolio/autoflow",
    gradient: "from-orange-950 via-stone-950 to-black",
    accent: "text-orange-400",
    tags: ["Landing page", "Automation", "Booking"],
    dark: true,
  },
  {
    category: "Hospitality",
    name: "Maison AI",
    title: "Reservations made effortless.",
    description:
      "A refined restaurant experience with a seasonal menu, reservations, and an AI concierge.",
    href: "/portfolio/maison",
    gradient: "from-amber-50 via-orange-50 to-white",
    accent: "text-orange-700",
    tags: ["Premium design", "Reservations", "AI concierge"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "Choose what you need and share the key information about your company.",
  },
  {
    number: "02",
    title: "We design your solution",
    description:
      "Nexavo creates the structure, visual design, content, and required automation.",
  },
  {
    number: "03",
    title: "Review and launch",
    description:
      "You approve the result, and we prepare the finished project for publication.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-semibold text-black">
              N
            </span>

            <div>
              <p className="font-semibold tracking-tight">Nexavo</p>
              <p className="text-[11px] text-white/40">
                Websites & AI systems
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Portfolio
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            Start a project
          </a>
        </div>
      </header>

      <section className="relative px-6 pb-28 pt-40 lg:px-10 lg:pb-36 lg:pt-52">
        <div className="absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[140px]" />
        <div className="absolute right-0 top-72 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          <h1 className="mt-9 max-w-6xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[106px]">
            Websites and AI systems that help businesses{" "}
            <span className="text-white/35">get more customers.</span>
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/50">
              Nexavo designs modern websites, booking experiences, and AI
              assistants for ambitious small businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
              >
                View our work
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="bg-[#0b0b0b] p-7">
              <p className="text-3xl font-semibold">3</p>
              <p className="mt-2 text-sm text-white/40">Showcase projects</p>
            </div>

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-3xl font-semibold">24/7</p>
              <p className="mt-2 text-sm text-white/40">AI customer support</p>
            </div>

            <div className="bg-[#0b0b0b] p-7">
              <p className="text-3xl font-semibold">Mobile-first</p>
              <p className="mt-2 text-sm text-white/40">
                Built for every screen
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-white/10 bg-white/[0.025] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
            What we build
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Digital solutions built around your business.
            </h2>

            <p className="max-w-md leading-7 text-white/45">
              Start with one essential service and add more automation as your
              business grows.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[28px] border border-white/10 bg-[#0c0c0c] p-7 transition duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/30">
                    {service.number}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Request this service
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Selected work
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Explore our showcase projects.
            </h2>

            <p className="max-w-md leading-7 text-white/45">
              Open each project to see how Nexavo can transform a complete
              customer experience.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className={`group overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br ${project.gradient} transition duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`flex min-h-[410px] flex-col p-7 ${
                    project.dark ? "text-white" : "text-stone-950"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{project.name}</p>

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${
                        project.dark
                          ? "border-white/15 text-white/50"
                          : "border-black/10 text-black/45"
                      }`}
                    >
                      Concept
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.22em] ${project.accent}`}
                    >
                      {project.category}
                    </p>

                    <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em]">
                      {project.title}
                    </h3>

                    <p
                      className={`mt-5 leading-7 ${
                        project.dark ? "text-white/50" : "text-black/55"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between">
                      <span className="text-sm font-semibold">
                        View project
                      </span>

                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition group-hover:translate-x-1 ${
                          project.dark
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-white/10 bg-white/[0.025] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
            Simple process
          </p>

          <h2 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            From idea to launch in three clear steps.
          </h2>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-white/10 p-7"
              >
                <span className="text-sm text-white/30">{step.number}</span>
                <h3 className="mt-16 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-600 via-violet-800 to-[#111] p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Start your project
          </p>

          <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                Ready to build something valuable?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Tell us about your business. We will help you choose the right
                website, booking system, or AI solution.
              </p>
            </div>

            <a
              href="#request"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-5 font-semibold text-black transition hover:scale-105"
            >
              Start a project →
            </a>
          </div>
        </div>
      </section>

      <section id="request" className="px-6 pb-28 lg:px-10">
  <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
        Project request
      </p>

      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
        Tell us what your business needs.
      </h2>

      <p className="mt-6 max-w-md leading-7 text-white/45">
        Complete the short form. We will review your request and suggest the
        most suitable website, booking system, or AI solution.
      </p>

      <div className="mt-10 space-y-4 text-sm text-white/55">
        <p>✓ Clear proposal and starting price</p>
        <p>✓ No obligation to purchase</p>
        <p>✓ Response within one business day</p>
      </div>
    </div>

    <ProjectForm />
  </div>
</section>
      <footer className="border-t border-white/10 px-6 py-9 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-white/35 sm:flex-row sm:items-center">
          <p>© 2026 Nexavo. Websites and AI systems.</p>

          <div className="flex gap-6">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Portfolio
            </a>
            <a href="mailto:hello@nexavo.com" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    <NexavoAssistant />
    </main>
  );
}