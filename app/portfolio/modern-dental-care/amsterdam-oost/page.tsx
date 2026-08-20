import Image from "next/image";
import { createPageMetadata } from "@/app/lib/seo";
import LanguageSwitcher from "../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Amsterdam Oost — Modern Dental Care Concept | YY Builds",
  description: "Premium concept page for Modern Dental Care Amsterdam Oost.",
  path: "/portfolio/modern-dental-care/amsterdam-oost",
});

export default function AmsterdamOostPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17332e]">
      
<header className="border-b border-[#173f39]/10 bg-[#f7f5ef]/95 backdrop-blur-xl">
  <div className="mx-auto flex min-h-20 max-w-[1360px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
    <a href="/portfolio/modern-dental-care" className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#17332e]">
      Modern Dental Care
    </a>
    <div className="flex items-center gap-2">
      <LanguageSwitcher current="nl" dutchPath="/portfolio/modern-dental-care/amsterdam-oost" englishPath="/portfolio/modern-dental-care/en/amsterdam-oost" />
      <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">Maak een afspraak</a>
    </div>
  </div>
</header>

      <section className="px-5 py-14 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f938c]">Praktijk · Amsterdam Oost</p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
              Persoonlijke tandheelkunde in
              <span className="block font-serif italic font-normal text-[#9a7849]">Amsterdam-Oost.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#687a74]">
              Moderne tandheelkundige zorg met een rustige aanpak, duidelijke uitleg en aandacht voor iedere patiënt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-6 py-4 text-sm font-semibold text-white">Afspraak aanvragen</a>
              <a href="tel:0206941934" className="rounded-full border border-[#173f39]/15 bg-white px-6 py-4 text-sm font-semibold">020 694 19 34</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5"><p className="text-xs text-[#7f938c]">Adres</p><p className="mt-2 text-sm font-semibold">Domselaerstraat 82, 84, 86</p></div>
              <div className="rounded-2xl bg-white p-5"><p className="text-xs text-[#7f938c]">Plaats</p><p className="mt-2 text-sm font-semibold">1093 MA Amsterdam</p></div>
              <div className="rounded-2xl bg-white p-5"><p className="text-xs text-[#7f938c]">Opening</p><p className="mt-2 text-sm font-semibold">Ma–Do · 09:00–16:30</p></div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px]">
            <Image
              src="/modern-dental-care/hero.png"
              alt="Conceptbeeld voor Modern Dental Care Amsterdam Oost"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f938c]">Beschikbare zorg</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Veel behandelingen onder één dak.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["Periodieke controle","Gebitsreiniging","Mondhygiënist","Implantaten","Orthodontie","Kronen & bruggen","Facings","Tanden bleken","Wortelkanaalbehandeling","Spoed"].map((item, i) => (
              <article key={item} className="rounded-[26px] border border-[#173f39]/10 bg-[#f8f8f3] p-6">
                <span className="text-xs font-semibold text-[#8aa096]">{String(i+1).padStart(2,"0")}</span>
                <h3 className="mt-8 text-xl font-medium">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1360px] rounded-[34px] bg-[#173f39] p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Amsterdam Oost</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Klaar voor uw volgende afspraak?</h2>
          <a href="/portfolio/modern-dental-care#appointment" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173f39]">Afspraak aanvragen →</a>
        </div>
      </section>
    </main>
  );
}
