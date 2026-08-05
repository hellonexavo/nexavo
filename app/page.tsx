const services = [
  {
    number: "01",
    title: "Premium Websites",
    description:
      "High-converting websites designed to make your business look credible, modern, and valuable.",
  },
  {
    number: "02",
    title: "AI Assistants",
    description:
      "Smart assistants that answer questions, capture leads, and support customers around the clock.",
  },
  {
    number: "03",
    title: "Business Automation",
    description:
      "Automated workflows that reduce repetitive work and give your team more time to grow.",
  },
];

const benefits = [
  "Strategy-first approach",
  "Premium responsive design",
  "Fast and scalable development",
  "AI-ready integrations",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] shadow-[0_0_30px_rgba(139,92,246,0.18)]">
            N
          </span>
          NEXAVO
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-white" href="#services">
            Services
          </a>
          <a className="transition hover:text-white" href="#process">
            Process
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium transition hover:border-white/30 hover:bg-white/10"
        >
          Start a project
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center lg:px-10">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/65 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Now accepting selected projects
        </div>

        <h1 className="hero-title max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[96px]">
  Premium websites and
  <span className="block bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
    AI systems that grow businesses.
  </span>
</h1>
<div className="hero-effects pointer-events-none absolute inset-0 overflow-hidden">
  <div className="hero-orbit hero-orbit-one" />
  <div className="hero-orbit hero-orbit-two" />
  <div className="hero-orbit hero-orbit-three" />

  <div className="hero-light hero-light-one" />
  <div className="hero-light hero-light-two" />
</div>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
  Nexavo designs high-converting websites, intelligent AI assistants,
  and automations that help modern businesses attract customers,
  save time, and operate more efficiently.
</p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 sm:w-auto"
          >
            Start your project
            <span className="transition group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#services"
            className="w-full rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
          >
            Explore our services
          </a>
        </div>
<div className="hero-trust mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/35">
  <span>Strategy-led design</span>
  <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
  <span>AI-ready development</span>
  <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
  <span>Responsive on every device</span>
</div>
        {/* Product preview */}
        <div className="relative mt-20 w-full max-w-5xl">
          <div className="absolute inset-x-16 top-0 h-40 rounded-full bg-violet-500/20 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            <div className="rounded-[22px] border border-white/[0.08] bg-[#09090b]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Intelligent business system
                </span>
                <div className="w-12" />
              </div>

              <div className="grid gap-4 p-5 md:grid-cols-[1.3fr_0.7fr] md:p-8">
                <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-transparent p-6 text-left">
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-300/70">
                    Growth overview
                  </p>
                  <h2 className="mt-4 max-w-md text-2xl font-medium tracking-tight sm:text-3xl">
                    Your website should be your best salesperson.
                  </h2>

                  <div className="mt-10 flex h-36 items-end gap-2">
                    {[34, 48, 42, 62, 58, 76, 72, 91, 86, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/35 to-violet-300/90"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 text-left">
                    <p className="text-sm text-white/45">AI response time</p>
                    <p className="mt-3 text-4xl font-medium tracking-tight">
                      1.2s
                    </p>
                    <p className="mt-2 text-xs text-emerald-300">
                      Always available
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 text-left">
                    <p className="text-sm text-white/45">Automated workflows</p>
                    <p className="mt-3 text-4xl font-medium tracking-tight">
                      24/7
                    </p>
                    <p className="mt-2 text-xs text-blue-300">
                      Less repetitive work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300">
              What we build
            </p>
            <h2 className="mt-5 max-w-lg text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Digital systems built for real business growth.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/50 lg:justify-self-end">
            Every project combines clear strategy, premium design, modern
            technology, and practical AI. The result is not only beautiful—it
            is useful, fast, and designed to convert.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-[26px] border border-white/[0.09] bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">{service.number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-white/25 group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-20 text-2xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-white/45">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      {/* AI Demo */}
      <section
        id="ai-demo"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300">
            Nexavo intelligence
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            From a business problem
            <span className="block text-white/35">
              to a clear digital solution.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/50">
            We combine strategy, design, AI, and automation to turn complex
            business needs into practical systems that support growth.
          </p>
        </div>

        <div className="ai-demo-shell relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.035] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="ai-demo-glow pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="relative grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Business request */}
            <div className="ai-step ai-step-one rounded-[24px] border border-white/[0.09] bg-black/25 p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-lg">
                  👤
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Business request
                </span>
              </div>

              <p className="mt-10 text-sm text-white/40">Business owner</p>

              <div className="mt-3 rounded-2xl rounded-tl-sm border border-white/[0.08] bg-white/[0.06] p-4">
                <p className="leading-7 text-white/80">
                  “I need more customers, but I do not know what my website
                  should do.”
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="ai-connector hidden items-center justify-center lg:flex">
              <span className="ai-arrow text-2xl text-violet-300">→</span>
            </div>

            {/* AI analysis */}
            <div className="ai-step ai-step-two rounded-[24px] border border-violet-300/15 bg-violet-500/[0.07] p-6">
              <div className="flex items-center justify-between">
                <span className="ai-orb flex h-10 w-10 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/10 text-lg">
                  ✦
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-violet-200/50">
                  Nexavo AI
                </span>
              </div>

              <p className="mt-10 text-sm text-white/40">
                Analysing business needs
              </p>

              <div className="mt-5 space-y-3">
                <div className="ai-analysis-row">
                  <span>Market positioning</span>
                  <span>Complete</span>
                </div>

                <div className="ai-analysis-row">
                  <span>Customer journey</span>
                  <span>Complete</span>
                </div>

                <div className="ai-analysis-row">
                  <span>Growth opportunities</span>
                  <span>Complete</span>
                </div>
              </div>

              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="ai-progress h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-300 to-blue-300" />
              </div>
            </div>

            {/* Arrow */}
            <div className="ai-connector hidden items-center justify-center lg:flex">
              <span className="ai-arrow text-2xl text-blue-300">→</span>
            </div>

            {/* Solution */}
            <div className="ai-step ai-step-three rounded-[24px] border border-white/[0.09] bg-black/25 p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/15 bg-emerald-400/10 text-lg">
                  ✓
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Growth system
                </span>
              </div>

              <p className="mt-10 text-sm text-white/40">Solution ready</p>

              <div className="mt-5 space-y-3">
                {[
                  "Premium conversion website",
                  "24/7 AI customer assistant",
                  "Automated lead capture",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">
                      ✓
                    </span>

                    <span className="text-sm text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-6 flex flex-col gap-4 rounded-[22px] border border-white/[0.08] bg-black/25 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-white/80">
                Your growth plan is ready.
              </p>

              <p className="mt-1 text-sm text-white/35">
                Strategy, website, AI assistant, and automation in one system.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Build my system
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section
        id="process"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 sm:p-12 lg:p-16">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-300">
                Why Nexavo
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Built to look premium.
                <span className="block text-white/35">
                  Designed to perform.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-white/[0.08] pb-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-white/70">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section
        id="portfolio"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300">
              Featured projects
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Concepts built to show
              <span className="block text-white/35">
                what your business could become.
              </span>
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-white/50">
            These portfolio concepts demonstrate how Nexavo combines premium
            design, AI assistance, and practical automation for different
            industries.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* Dental */}
          <article className="group overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.035]">
            <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-6 text-slate-950">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/40 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    N
                  </span>

                  <div>
                    <p className="text-sm font-semibold">NovaDent AI</p>
                    <p className="text-xs text-slate-500">
                      Premium dental care
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Concept
                </span>
              </div>

              <div className="relative mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                  Dental clinic website
                </p>

                <h3 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.04em]">
                  Premium dental care, powered by AI.
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                  Online booking, clear services, and a 24/7 AI assistant for
                  modern patient support.
                </p>

                <div className="mt-7 flex gap-3">
                  <span className="rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white">
                    Book appointment
                  </span>

                  <span className="rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-xs font-semibold">
                    Talk to AI
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Healthcare
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    NovaDent AI Clinic
                  </h3>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-white/25 group-hover:text-white">
                  ↗
                </span>
              </div>

              <p className="mt-4 leading-7 text-white/45">
                A premium clinic concept with appointment booking, service
                presentation, and AI-powered patient assistance.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/40">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Web design
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  AI assistant
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Booking flow
                </span>
              </div>
            </div>
          </article>

          {/* Auto service */}
          <article className="group overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.035]">
            <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 p-6">
              <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">AutoFlow</p>
                  <p className="text-xs text-white/40">Smart auto service</p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Concept
                </span>
              </div>

              <div className="relative mt-14">
                <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
                  Auto service platform
                </p>

                <h3 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.04em]">
                  Book service in minutes.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                  Digital booking, service reminders, and instant customer
                  support in one streamlined experience.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="flex items-center justify-between text-xs text-white/45">
                    <span>Vehicle check</span>
                    <span className="text-emerald-300">Available today</span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange-500 to-amber-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Automotive
              </p>

              <h3 className="mt-2 text-xl font-medium">
                AutoFlow Service Platform
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                A modern booking experience for workshops with service
                requests, customer communication, and smart reminders.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/40">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Landing page
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Online booking
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Automation
                </span>
              </div>
            </div>
          </article>

          {/* Restaurant */}
          <article className="group overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.035]">
            <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100 p-6 text-stone-950">
              <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-orange-300/40 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg font-semibold">Maison AI</p>
                  <p className="text-xs text-stone-500">
                    Modern dining experience
                  </p>
                </div>

                <span className="rounded-full bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  Concept
                </span>
              </div>

              <div className="relative mt-14">
                <p className="text-xs uppercase tracking-[0.22em] text-orange-700">
                  Restaurant website
                </p>

                <h3 className="mt-4 max-w-sm font-serif text-4xl leading-tight">
                  Reservations made effortless.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
                  A premium menu, online reservations, and AI-powered guest
                  assistance.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-2">
                  {["Menu", "Reserve", "Ask AI"].map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-stone-200 bg-white/70 px-3 py-3 text-center text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                Hospitality
              </p>

              <h3 className="mt-2 text-xl font-medium">
                Maison AI Restaurant
              </h3>

              <p className="mt-4 leading-7 text-white/45">
                A refined restaurant concept with menu presentation, table
                reservations, and an AI concierge for guests.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/40">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Premium design
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Reservations
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  AI concierge
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>



      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white px-7 py-20 text-center text-black sm:px-12">
          <div className="absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-300/70 blur-[110px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
              Start your project
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Ready to build something people remember?
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-black/55">
              Tell us about your business, your goals, and what you want to
              improve. We will turn the idea into a clear digital experience.
            </p>

            <a
              href="mailto:hello@nexavo.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-black/85"
            >
              hello@nexavo.com
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-5 px-6 pb-10 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 Nexavo. Digital experiences for ambitious businesses.</p>
        <div className="flex gap-6">
          <a className="transition hover:text-white" href="#">
            Instagram
          </a>
          <a className="transition hover:text-white" href="#">
            LinkedIn
          </a>
          <a className="transition hover:text-white" href="#">
            Upwork
          </a>
        </div>
      </footer>
    </main>
  );
}