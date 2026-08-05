const services = [
  {
    title: "Dental Implants",
    description:
      "Natural-looking, long-lasting replacements designed around your smile.",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening for a brighter smile with safe, visible results.",
  },
  {
    title: "Orthodontics",
    description:
      "Modern aligners and orthodontic care for adults and young patients.",
  },
  {
    title: "Emergency Care",
    description:
      "Fast support for pain, broken teeth, swelling, and urgent dental needs.",
  },
];

const benefits = [
  "Same-day appointments",
  "24/7 AI patient assistant",
  "Transparent treatment plans",
  "Modern digital diagnostics",
];

export default function NovaDentPage() {
  return (
    <main className="min-h-screen bg-[#f7fbfc] text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            N
          </span>

          <div>
            <p className="text-sm font-semibold">NovaDent AI</p>
            <p className="text-xs text-slate-500">Premium dental care</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a href="#services" className="transition hover:text-slate-950">
            Services
          </a>
          <a href="#why-us" className="transition hover:text-slate-950">
            Why us
          </a>
          <a href="#assistant" className="transition hover:text-slate-950">
            AI Assistant
          </a>
        </nav>

        <a
          href="#booking"
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          Book appointment
        </a>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-[100px]" />
        <div className="absolute right-[-80px] top-0 h-80 w-80 rounded-full bg-sky-300/25 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-xs font-medium text-cyan-800 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              New patients welcome
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Premium dental care,
              <span className="block text-cyan-700">powered by AI.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Modern dentistry, clear treatment plans, fast online booking,
              and intelligent patient support—designed around your comfort.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Book appointment
              </a>

              <a
                href="#assistant"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Talk to our AI
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-2xl font-semibold">4.9/5</p>
                <p className="mt-1 text-xs text-slate-500">Patient rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-xs text-slate-500">AI support</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">2 min</p>
                <p className="mt-1 text-xs text-slate-500">Online booking</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[34px] border border-white/80 bg-white/75 p-4 shadow-[0_35px_100px_rgba(15,23,42,0.13)] backdrop-blur-xl">
              <div className="rounded-[26px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                      Smart booking
                    </p>
                    <h2 className="mt-2 text-2xl font-medium">
                      Find the right appointment.
                    </h2>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                    ✦
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Routine check-up",
                    "Emergency appointment",
                    "Whitening consultation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4"
                    >
                      <div>
                        <p className="text-sm font-medium">{item}</p>
                        <p className="mt-1 text-xs text-white/40">
                          {index === 0
                            ? "Available tomorrow"
                            : index === 1
                              ? "Available today"
                              : "Available this week"}
                        </p>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-950">
                        Select
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-cyan-300 p-5 text-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-900/60">
                    AI recommendation
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    “Based on your symptoms, an emergency consultation is
                    recommended today.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Our services
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Everything your smile needs.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-slate-600 lg:justify-self-end">
            From preventive care to advanced treatments, every service is
            explained clearly and delivered with modern technology.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-semibold text-cyan-700">
                0{index + 1}
              </p>
              <h3 className="mt-12 text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[34px] bg-slate-950 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Why NovaDent
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Modern care without the stress.
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-white/55">
                Patients receive fast answers, clear information, and a simple
                path from the first question to the final appointment.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-white/75">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="assistant" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
              AI patient assistant
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Helpful answers, any time of day.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-slate-600">
              The assistant explains services, answers common questions, and
              helps patients choose the right appointment before speaking with
              the clinic.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-xl">
            <div className="rounded-[24px] bg-slate-100 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                  ✦
                </span>
                <div>
                  <p className="text-sm font-semibold">NovaDent Assistant</p>
                  <p className="text-xs text-emerald-600">Online now</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-slate-700">
                  Hello. How can I help you today?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-950 p-4 text-sm leading-6 text-white">
                  I have tooth pain and need an appointment.
                </div>

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 text-slate-700">
                  I can help with that. Would you like an emergency appointment
                  today or tomorrow morning?
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <span className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium">
                  Today
                </span>
                <span className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium">
                  Tomorrow
                </span>
                <span className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium">
                  Ask a question
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] bg-cyan-300 px-7 py-20 text-center text-slate-950 sm:px-12">
          <div className="absolute left-1/2 top-[-180px] h-80 w-80 -translate-x-1/2 rounded-full bg-white/70 blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-900/60">
              Your healthier smile starts here
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Book your appointment in minutes.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-700">
              Choose a service, select a convenient time, and receive instant
              confirmation.
            </p>

            <a
              href="mailto:hello@novadent.example"
              className="mt-9 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Book appointment
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>NovaDent AI — portfolio concept created by Nexavo.</p>
        <a
          href="/"
          className="font-medium text-slate-800 transition hover:text-cyan-700"
        >
          Back to Nexavo →
        </a>
      </footer>
    </main>
  );
}