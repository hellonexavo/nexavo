import Link from "next/link";

const dishes = [
  {
    name: "Truffle Tagliolini",
    description: "Fresh pasta, black truffle, aged parmesan",
    price: "€28",
  },
  {
    name: "Sea Bass",
    description: "Wild sea bass, fennel, citrus beurre blanc",
    price: "€34",
  },
  {
    name: "Beef Tenderloin",
    description: "Dry-aged beef, potato pavé, red wine jus",
    price: "€39",
  },
];

const features = [
  "Instant table reservations",
  "AI-powered guest assistance",
  "Digital seasonal menu",
  "Private dining requests",
];

export default function MaisonPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] text-[#21180f]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21180f] font-serif text-xl text-white">
            M
          </span>

          <div>
            <p className="font-serif text-lg font-semibold">Maison AI</p>
            <p className="text-xs text-stone-500">Modern dining experience</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#menu" className="transition hover:opacity-50">
            Menu
          </a>
          <a href="#experience" className="transition hover:opacity-50">
            Experience
          </a>
          <a href="#concierge" className="transition hover:opacity-50">
            AI Concierge
          </a>
        </nav>

        <a
          href="#reserve"
          className="rounded-full bg-[#21180f] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
        >
          Reserve a table
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b75132]">
            Contemporary European dining
          </p>

          <h1 className="mt-7 max-w-3xl font-serif text-6xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Reservations made effortless.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
            Seasonal cuisine, thoughtful hospitality, and intelligent service
            designed around every guest.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-[#b75132] px-7 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              Book your table
            </a>

            <a
              href="#menu"
              className="rounded-full border border-stone-400/60 px-7 py-4 text-sm font-semibold transition hover:bg-white"
            >
              Explore menu
            </a>
          </div>

          <div className="mt-14 flex gap-10 border-t border-stone-300 pt-7">
            <div>
              <p className="font-serif text-3xl">4.9/5</p>
              <p className="mt-1 text-xs text-stone-500">Guest rating</p>
            </div>
            <div>
              <p className="font-serif text-3xl">2 min</p>
              <p className="mt-1 text-xs text-stone-500">Online booking</p>
            </div>
            <div>
              <p className="font-serif text-3xl">24/7</p>
              <p className="mt-1 text-xs text-stone-500">AI concierge</p>
            </div>
          </div>
        </div>

        <div
          id="reserve"
          className="rounded-[36px] bg-[#21180f] p-6 text-white shadow-2xl shadow-stone-900/20 sm:p-8"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e8a78e]">
              Table reservation
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              Your evening at Maison
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left">
                <span className="block text-xs text-white/50">Date</span>
                <span className="mt-2 block font-medium">Friday, Aug 14</span>
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left">
                <span className="block text-xs text-white/50">Guests</span>
                <span className="mt-2 block font-medium">2 guests</span>
              </button>
            </div>

            <p className="mt-7 text-sm text-white/60">Available times</p>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {["18:30", "19:15", "20:00"].map((time) => (
                <button
                  key={time}
                  className="rounded-xl border border-white/10 py-3 text-sm transition hover:bg-[#b75132]"
                >
                  {time}
                </button>
              ))}
            </div>

            <button className="mt-6 w-full rounded-2xl bg-[#b75132] py-4 font-semibold transition hover:bg-[#c86343]">
              Continue reservation
            </button>

            <p className="mt-4 text-center text-xs text-white/40">
              Instant confirmation · Free cancellation
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#21180f] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a78e]">
            Selected dishes
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-5xl sm:text-6xl">
              A menu guided by the season.
            </h2>

            <p className="max-w-sm leading-7 text-white/50">
              Locally sourced ingredients transformed into a refined,
              contemporary dining experience.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="grid gap-3 py-7 md:grid-cols-[1fr_1.4fr_auto] md:items-center"
              >
                <h3 className="font-serif text-2xl">{dish.name}</h3>
                <p className="text-sm text-white/50">{dish.description}</p>
                <p className="font-semibold text-[#e8a78e]">{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b75132]">
            The experience
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">
            Hospitality made personal.
          </h2>
        </div>

        <div id="concierge">
          <p className="text-lg leading-8 text-stone-600">
            Maison combines elegant dining with intelligent technology. Guests
            can reserve a table, explore the menu, request private dining, and
            receive assistance at any time.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-stone-300 bg-white/50 p-5 text-sm font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-300 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-stone-500">
          <p>Maison AI — portfolio concept created by Nexavo.</p>
          <Link href="/" className="transition hover:text-[#21180f]">
            Back to Nexavo →
          </Link>
        </div>
      </footer>
    </main>
  );
}
