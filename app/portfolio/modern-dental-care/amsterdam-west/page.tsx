import { createPageMetadata } from "@/app/lib/seo";
import LanguageSwitcher from "../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Amsterdam West — Modern Dental Care Concept | YY Builds",
  description: "Premium concept page for Modern Dental Care Amsterdam West.",
  path: "/portfolio/modern-dental-care/amsterdam-west",
});

const treatments = [
  "Periodieke controle",
  "Gebitsreiniging",
  "Implantaten",
  "Orthodontie",
  "Kronen & bruggen",
  "Facings",
  "Tanden bleken",
  "Wortelkanaalbehandeling",
  "Spoed",
];

export default function AmsterdamWestPage() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#17332e]">
      <header className="border-b border-[#173f39]/10 bg-[#f6f2ea]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[1360px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
          <a href="/portfolio/modern-dental-care" className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#17332e]">
            Modern Dental Care
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher current="nl" dutchPath="/portfolio/modern-dental-care/amsterdam-west" englishPath="/portfolio/modern-dental-care/en/amsterdam-west" />
            <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">Maak een afspraak</a>
          </div>
        </div>
      </header>

      <section className="px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a938c]">
              Praktijk · Amsterdam West
            </p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
              Moderne tandheelkunde
              <span className="block font-serif italic font-normal text-[#9a7849]">
                dichtbij in Amsterdam-West.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#687a74]">
              Een toegankelijke praktijkervaring met persoonlijke aandacht,
              duidelijke communicatie en een breed aanbod van tandheelkundige zorg.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-6 py-4 text-sm font-semibold text-white">
                Afspraak aanvragen
              </a>
              <a href="tel:0204473489" className="rounded-full border border-[#173f39]/15 bg-white px-6 py-4 text-sm font-semibold">
                020 447 3489
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-xs text-[#7f938c]">Adres</p>
                <p className="mt-2 text-sm font-semibold">Slotermeerlaan 69</p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="text-xs text-[#7f938c]">Plaats</p>
                <p className="mt-2 text-sm font-semibold">1064 HA Amsterdam</p>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="text-xs text-[#7f938c]">Contact</p>
                <p className="mt-2 text-sm font-semibold">020 447 3489</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#e7dac8,#9db8ad)]">
            <div className="absolute left-[10%] top-[12%] h-40 w-40 rounded-full bg-white/35" />
            <div className="absolute right-[12%] top-[18%] h-28 w-28 rounded-full border border-white/45 bg-white/20" />
            <div className="absolute bottom-[13%] left-[22%] h-60 w-60 rounded-[38%] bg-white/45" />
            <div className="absolute inset-x-7 bottom-7 rounded-[24px] bg-white/88 p-6 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7d8f88]">
                Amsterdam West
              </p>
              <p className="mt-2 text-sm font-semibold">
                Hier plaatsen we later echte fotografie van de praktijk en het team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f938c]">
            Behandelingen
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
            Veel tandheelkundige zorg op één locatie.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item, i) => (
              <article key={item} className="rounded-[26px] border border-[#173f39]/10 bg-[#f8f8f3] p-6 transition hover:-translate-y-1 hover:bg-[#f0f4f0]">
                <span className="text-xs font-semibold text-[#8aa096]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-medium">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1360px] rounded-[34px] bg-[#173f39] p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Amsterdam West
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
            Wilt u een afspraak aanvragen?
          </h2>
          <a href="/portfolio/modern-dental-care#appointment" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173f39]">
            Afspraak aanvragen →
          </a>
        </div>
      </section>
    </main>
  );
}
