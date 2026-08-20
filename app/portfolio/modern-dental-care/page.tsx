import Image from "next/image";
import { createPageMetadata } from "@/app/lib/seo";
import BookingFlow from "./BookingFlow";
import LanguageSwitcher from "./LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Modern Dental Care — Amsterdam Oost Concept | YY Builds",
  description:
    "Premium redesign concept for Modern Dental Care Amsterdam Oost, focused on patient trust, treatments, locations and appointment conversion.",
  path: "/portfolio/modern-dental-care",
});

const treatments = [
  { title: "Periodieke controle", text: "Preventieve zorg voor een gezond gebit en vroegtijdige signalering." },
  { title: "Gebitsreiniging", text: "Professionele mondhygiëne voor gezond tandvlees en een frisse glimlach." },
  { title: "Mondhygiënist", text: "Gerichte zorg voor gezond tandvlees, preventie en een frisse mond." },
  { title: "Implantaten", text: "Duurzame vervanging van ontbrekende tanden met een zorgvuldig behandelplan." },
  { title: "Orthodontie", text: "Moderne oplossingen voor een rechte, functionele en zelfverzekerde glimlach." },
  { title: "Kronen & bruggen", text: "Sterk en natuurlijk herstel van beschadigde of ontbrekende tanden." },
  { title: "Facings", text: "Subtiele cosmetische verbetering van vorm, kleur en uitstraling." },
  { title: "Tanden bleken", text: "Professionele whitening met aandacht voor veiligheid en natuurlijk resultaat." },
  { title: "Wortelkanaalbehandeling", text: "Gerichte behandeling om pijn te verlichten en uw eigen tand te behouden." },
  { title: "Tandvullingen", text: "Duurzaam herstel met aandacht voor comfort en esthetiek." },
  { title: "Kunstgebit", text: "Persoonlijke prothetische oplossingen voor comfort en vertrouwen." },
  { title: "Spoed tandarts", text: "Snelle hulp bij acute pijn, zwelling of tandheelkundig trauma." },
  { title: "MDC Junior", text: "Positieve, rustige tandheelkundige zorg speciaal voor kinderen." },
];

const paths = [
  ["Ik heb pijn", "Spoedzorg en snelle begeleiding bij acute klachten."],
  ["Ik wil een controle", "Periodieke controle, preventie en gebitsreiniging."],
  ["Ik wil mijn glimlach verbeteren", "Ontdek facings, whitening en orthodontie."],
  ["Ik zoek zorg voor mijn kind", "Een positieve eerste ervaring bij MDC Junior."],
];

const locations = [
  ["Amsterdam Oost", "Domselaerstraat 82, 84, 86", "1093 MA Amsterdam", "020 694 19 34"],
  ["Amsterdam West", "Slotermeerlaan 69", "1064 HA Amsterdam", "020 447 3489"],
  ["MDC Junior", "H.R. Holststraat 9-10", "1064 TS Amsterdam", "020 447 3489"],
];

export default function ModernDentalCarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17332e]">
      <div className="bg-[#173f39] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
        YY Builds concept redesign · demo
      </div>

      <header className="border-b border-[#173f39]/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#173f39]/15 bg-white">
              <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
                <path d="M12 8c3.5 0 5.5 2.2 8 2.2S24.5 8 28 8c4.2 0 7 3.2 7 7.7 0 6.2-4.6 16.3-8.2 16.3-2.6 0-2.4-6.3-6.8-6.3S15.8 32 13.2 32C9.6 32 5 21.9 5 15.7 5 11.2 7.8 8 12 8Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <span className="text-[12px] font-semibold uppercase leading-4 tracking-[0.19em]">
              Modern<br />Dental Care
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#46615b] lg:flex">
            <a href="#treatments">Behandelingen</a>
            <a href="#locations">Praktijken</a>
            <a href="#why">Over ons</a>
            <a href="#patients">Voor patiënten</a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher current="nl" dutchPath="/portfolio/modern-dental-care" englishPath="/portfolio/modern-dental-care/en" />
            <a href="#new-patient" className="hidden rounded-full border border-[#173f39]/15 bg-white px-5 py-3 text-xs font-semibold sm:inline-flex">
              Nieuwe patiënt
            </a>
            <a href="#appointment" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">
              Maak een afspraak
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="px-5 py-10 md:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#173f39]/10 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#486b63]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#63aa90]" />
              Tandartspraktijk · Amsterdam Oost
            </div>

            <h1 className="mt-7 max-w-[680px] text-[44px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[60px] lg:text-[68px]">
              Een gezonde glimlach begint met
              <span className="block font-serif italic font-normal text-[#9a7849]">
                persoonlijke aandacht.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5e716c]">
              Moderne tandheelkunde met duidelijke uitleg, persoonlijke zorg en een rustige ervaring voor het hele gezin.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#appointment" className="rounded-full bg-[#173f39] px-7 py-4 text-center text-sm font-semibold text-white">
                Maak een afspraak →
              </a>
              <a href="#new-patient" className="rounded-full border border-[#173f39]/15 bg-white px-7 py-4 text-center text-sm font-semibold">
                Inschrijven als nieuwe patiënt
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-[#173f39]/10 pt-5">
              <div><p className="text-xl font-semibold">3</p><p className="mt-1 text-xs text-[#74847f]">praktijklocaties</p></div>
              <div><p className="text-xl font-semibold">12</p><p className="mt-1 text-xs text-[#74847f]">zorggebieden</p></div>
              <div><p className="text-xl font-semibold">1</p><p className="mt-1 text-xs text-[#74847f]">persoonlijke aanpak</p></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[34px] shadow-[0_35px_100px_rgba(23,63,57,0.16)]">
              <Image
                src="/modern-dental-care/hero.png"
                alt="Conceptbeeld van een patiënt tijdens een ontspannen tandartsbezoek"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122f29]/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/35 bg-white/90 p-4 shadow-xl backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6e817b]">Amsterdam Oost</p>
                <p className="mt-1 text-sm font-semibold">Domselaerstraat 82, 84, 86</p>
                <p className="mt-1 text-xs text-[#6e817b]">Ma–Do · 09:00–16:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="patients" className="border-y border-[#173f39]/10 bg-white px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Snel naar de juiste zorg</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Waar kunnen we u mee helpen?</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {paths.map(([title, text], i) => (
              <article key={title} className="flex min-h-64 flex-col rounded-[28px] border border-[#173f39]/10 bg-[#f8f8f3] p-6 transition hover:-translate-y-1 hover:bg-[#eef3ef]">
                <span className="text-xs font-semibold text-[#8da198]">0{i + 1}</span>
                <div className="mt-auto">
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6d7d78]">{text}</p>
                  <a
                    href={i === 3 ? "/portfolio/modern-dental-care/mdc-junior" : "#appointment"}
                    className="mt-5 inline-flex text-sm font-semibold text-[#326256]"
                  >
                    Bekijk mogelijkheden →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="treatments" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Behandelingen</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Alles voor een gezonde
              <span className="block font-serif italic font-normal text-[#9a7849]">en zelfverzekerde glimlach.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item, i) => (
              <article
                key={item.title}
                className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-[#173f39]/10 bg-[#f7f5ef] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#315f55]/35 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,63,57,0.08)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[72px] bg-[#e4eee8] transition group-hover:scale-110" />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#315f55] shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-[#6f8d84] transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </div>
                <div className="relative mt-16">
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#6d7d78]">{item.text}</p>
                  <a
                    href={
                      item.title === "Implantaten"
                        ? "/portfolio/modern-dental-care/implantaten"
                        : item.title === "MDC Junior"
                          ? "/portfolio/modern-dental-care/mdc-junior"
                          : "#appointment"
                    }
                    className="mt-6 inline-flex text-sm font-semibold text-[#326256]"
                  >
                    Meer informatie →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[36px] bg-[#173f39] px-7 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a6c4b8]">Waarom Modern Dental Care</p>
              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
                Zorg voor de mens
                <span className="block font-serif italic font-normal text-[#ddc69d]">achter de glimlach.</span>
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Persoonlijke aandacht", "Uw situatie, wensen en vragen staan centraal."],
                ["Moderne technieken", "Actuele behandelmethoden met heldere uitleg vooraf."],
                ["Het hele gezin", "Zorg voor volwassenen én een speciale Junior-praktijk."],
                ["Dichtbij in Amsterdam", "Meerdere locaties zodat patiënten makkelijk kunnen kiezen."],
              ].map(([title, text], i) => (
                <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.055] p-6">
                  <span className="text-xs text-[#a6c4b8]">0{i + 1}</span>
                  <h3 className="mt-10 text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="border-y border-[#173f39]/10 bg-white px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Onze praktijken</p>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Drie locaties. Eén vertrouwde aanpak.</h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {locations.map(([name, address, city, phone], i) => (
              <article
                key={name}
                className={`group overflow-hidden rounded-[30px] border ${
                  i === 0 ? "border-[#173f39] bg-[#e8eee9]" : "border-[#173f39]/10 bg-[#f8f8f3]"
                }`}
              >
                <div className={`relative h-44 overflow-hidden ${
                  i === 0
                    ? "bg-[linear-gradient(135deg,#cfe0d7,#8fb7a8)]"
                    : i === 1
                      ? "bg-[linear-gradient(135deg,#e8ded0,#b9c9c0)]"
                      : "bg-[linear-gradient(135deg,#f0e7cf,#bedbd1)]"
                }`}>
                  <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full border border-white/50 bg-white/20" />
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/75 text-lg text-[#315f55] shadow-sm">
                    ⌖
                  </div>
                  <span className="absolute bottom-5 left-6 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#315f55] backdrop-blur">
                    {i === 2 ? "Junior" : "Amsterdam"}
                  </span>
                </div>

                <div className="p-7">
                  <span className="text-xs font-semibold text-[#7f938c]">0{i + 1}</span>
                  <h3 className="mt-8 text-2xl font-medium">{name}</h3>
                  <p className="mt-3 text-sm font-semibold text-[#48675f]">{address}</p>
                  <p className="mt-1 text-sm text-[#73837e]">{city}</p>
                  <p className="mt-5 text-sm text-[#566b65]">{phone}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    <a
                      href={
                        i === 0
                          ? "/portfolio/modern-dental-care/amsterdam-oost"
                          : i === 1
                            ? "/portfolio/modern-dental-care/amsterdam-west"
                            : "/portfolio/modern-dental-care/mdc-junior"
                      }
                      className="inline-flex rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white"
                    >
                      Bekijk praktijk
                    </a>
                    <a
                      href="#appointment"
                      className="rounded-full border border-[#173f39]/15 bg-white px-5 py-3 text-xs font-semibold text-[#173f39]"
                    >
                      Afspraak
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pt-20 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 rounded-[30px] bg-[#8b3c32] px-7 py-8 text-white sm:px-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">Spoed</p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">Acute tandpijn of een ander spoedgeval?</h2>
            <p className="mt-2 text-sm text-white/70">Neem direct telefonisch contact op met de praktijk.</p>
          </div>
          <a href="tel:0204473489" className="inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#6f2f28]">
            Bel direct · 020 447 3489
          </a>
        </div>
      </section>

      <section id="appointment" className="px-5 py-24 md:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Afspraak aanvragen</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Van vraag naar afspraak,
              <span className="block font-serif italic font-normal text-[#9a7849]">zonder onnodige stappen.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6d7d78]">
              Deze demo toont een duidelijk aanvraagproces. De praktijk bevestigt de afspraak daarna persoonlijk.
            </p>
          </div>

          <BookingFlow />
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Patiëntervaring</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Vertrouwen ontstaat in ieder detail.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#6d7d78]">
                Voor productie gebruiken we alleen echte, verifieerbare patiëntreviews met toestemming of een betrouwbare bron.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Duidelijke uitleg", "Van eerste vraag tot behandelplan: patiënten weten wat ze kunnen verwachten."],
                ["Rustige ervaring", "Een kalme, mensgerichte omgeving voor volwassenen en kinderen."],
                ["Persoonlijk contact", "Geen onnodige stappen, maar duidelijke begeleiding door het team."],
              ].map(([title, text], i) => (
                <article key={title} className="rounded-[26px] border border-[#173f39]/10 bg-[#f8f8f3] p-6">
                  <span className="text-xs font-semibold text-[#8aa096]">0{i + 1}</span>
                  <h3 className="mt-10 text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6d7d78]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="new-patient" className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[34px] bg-[#e8eee9] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7c9189]">Nieuwe patiënt</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Nieuw bij Modern Dental Care?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#687a74]">Schrijf u online in. Het team neemt daarna contact op voor de volgende stap.</p>
            </div>
            <button type="button" className="rounded-full bg-[#173f39] px-7 py-4 text-sm font-semibold text-white">Inschrijven als nieuwe patiënt →</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#102d28] px-5 py-12 text-white md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em]">Modern Dental Care</p>
            <p className="mt-3 max-w-sm text-xs leading-6 text-white/45">Concept redesign created by YY Builds.</p>
          </div>
          <div className="text-xs leading-6 text-white/45">
            <p>Amsterdam Oost · Amsterdam West · MDC Junior</p>
            <p>info@moderndentalcare.nl</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] justify-between pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30">
          <p>Concept redesign · 2026</p>
          <p>YY Builds</p>
        </div>
      </footer>
    </main>
  );
}
