const services = [
  {
    title: "Diagnostics",
    description:
      "Fast digital inspection with clear findings and transparent recommendations.",
  },
  {
    title: "Maintenance",
    description:
      "Oil changes, brakes, filters, and scheduled maintenance in one simple booking flow.",
  },
  {
    title: "Repair",
    description:
      "Professional repair services with live status updates and clear pricing.",
  },
  {
    title: "Tyres",
    description:
      "Tyre replacement, balancing, seasonal changes, and safety checks.",
  },
];

const benefits = [
  "Online booking in minutes",
  "Instant service estimates",
  "Automatic reminders",
  "24/7 AI customer support",
];

export default function AutoFlowPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-sm font-black text-black">
            A
          </span>
          <div>
            <p className="text-sm font-semibold">AutoFlow</p>
            <p className="text-xs text-white/40">Smart auto service</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#process" className="transition hover:text-white">
            Process
          </a>
          <a href="#assistant" className="transition hover:text-white">
            AI Assistant
          </a>
        </nav>

        <a
          href="#booking"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
        >
          Book service
        </a>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="absolute left-[10%] top-10 h-80 w-80 rounded-full bg-orange-500/15 blur-[120px]" />
        <div className="absolute right-[-80px] top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Same-day service available
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Car service without
              <span className="block text-orange-400">the usual friction.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              Book repairs online, receive clear estimates, track progress, and
              get instant support from an AI service assistant.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Book a service
              </a>

              <a
                href="#assistant"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold transition hover:bg-white/[0.08]"
              >
                Ask AutoFlow AI
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-semibold">4.9/5</p>
                <p className="mt-1 text-xs text-white/35">Customer rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-xs text-white/35">AI support</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">3 min</p>
                <p className="mt-1 text-xs text-white/35">Online booking</p>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            <div className="rounded-[26px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-orange-950 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
                    Smart booking
                  </p>
                  <h2 className="mt-2 text-2xl font-medium">
                    What does your car need?
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  ✦
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  "Diagnostics",
                  "Oil and filter service",
                  "Brake inspection",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4"
                  >
                    <div>
                      <p className="text-sm font-medium">{item}</p>
                      <p className="mt-1 text-xs text-white/35">
                        {index === 0
                          ? "Available today"
                          : index === 1
                            ? "Available tomorrow"
                            : "Available this week"}
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black">
                      Select
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-orange-500 p-5 text-black">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
                  Estimated service
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-semibold">€89–€129</p>
                    <p className="mt-1 text-xs text-black/60">
                      Final price after inspection
                    </p>
                  </div>
                  <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
                    Continue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
              Services
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Everything your car needs.
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-white/45 lg:justify-self-end">
            Clear service options, transparent communication, and a smoother
            experience from booking to pickup.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-semibold text-orange-400">
                0{index + 1}
              </p>
              <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/45">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
                Why AutoFlow
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Simple from booking to pickup.
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-white/70">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="assistant" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
              AI service assistant
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Answers before you arrive.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-white/45">
              The assistant identifies likely service needs, explains available
              options, and helps customers book the right appointment.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
            <div className="rounded-[24px] bg-zinc-950 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-black">
                  ✦
                </span>
                <div>
                  <p className="text-sm font-semibold">AutoFlow Assistant</p>
                  <p className="text-xs text-emerald-400">Online now</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] p-4 text-sm leading-6 text-white/70">
                  What issue are you experiencing?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-orange-500 p-4 text-sm leading-6 text-black">
                  My brakes make a noise when I stop.
                </div>

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.07] p-4 text-sm leading-6 text-white/70">
                  A brake inspection is recommended. I found an available slot
                  today at 16:30.
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Book 16:30", "Tomorrow", "Ask price"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] bg-orange-500 px-7 py-20 text-center text-black sm:px-12">
          <div className="absolute left-1/2 top-[-180px] h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-200/60 blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">
              Ready when you are
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Book your car service in minutes.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-black/65">
              Choose a service, select a time, and receive instant confirmation.
            </p>

            <a
              href="mailto:service@autoflow.example"
              className="mt-9 inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Book service
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-10 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>AutoFlow — portfolio concept created by Nexavo.</p>
        <a href="/" className="font-medium text-white/70 hover:text-orange-400">
          Back to Nexavo →
        </a>
      </footer>
    </main>
  );
}