import { createPageMetadata } from "@/app/lib/seo";
import LanguageSwitcher from "../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Implantaten — Modern Dental Care Concept | YY Builds",
  description: "Premium implant treatment concept page for Modern Dental Care.",
  path: "/portfolio/modern-dental-care/implantaten",
});

const steps = [
  ["01","Consultatie","We bespreken uw situatie, wensen en medische achtergrond."],
  ["02","Diagnostiek","Een zorgvuldig onderzoek helpt bij een persoonlijk behandelplan."],
  ["03","Behandeling","De implantaatbehandeling wordt stap voor stap uitgevoerd."],
  ["04","Nazorg","Controle en begeleiding voor duurzaam herstel en comfort."],
];

export default function ImplantatenPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17332e]">
      
<header className="border-b border-[#173f39]/10 bg-[#f7f5ef]/95 backdrop-blur-xl">
  <div className="mx-auto flex min-h-20 max-w-[1360px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
    <a href="/portfolio/modern-dental-care" className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#17332e]">
      Modern Dental Care
    </a>
    <div className="flex items-center gap-2">
      <LanguageSwitcher current="nl" dutchPath="/portfolio/modern-dental-care/implantaten" englishPath="/portfolio/modern-dental-care/en/implantaten" />
      <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">Maak een afspraak</a>
    </div>
  </div>
</header>

      <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f938c]">Behandeling · Implantaten</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
            Een duurzame basis voor
            <span className="block font-serif italic font-normal text-[#9a7849]">een natuurlijke glimlach.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#687a74]">
            Implantaten kunnen een oplossing zijn wanneer één of meerdere tanden ontbreken. In deze conceptpagina ligt de nadruk op vertrouwen, duidelijke stappen en persoonlijke begeleiding.
          </p>
          <a href="/portfolio/modern-dental-care#appointment" className="mt-8 inline-flex rounded-full bg-[#173f39] px-7 py-4 text-sm font-semibold text-white">Consultatie aanvragen →</a>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map(([n,title,text]) => (
              <article key={title} className="rounded-[28px] border border-[#173f39]/10 bg-[#f8f8f3] p-7">
                <span className="text-xs font-semibold text-[#8aa096]">{n}</span>
                <h2 className="mt-10 text-2xl font-medium">{title}</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#6d7d78]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7f938c]">Voor wie?</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em]">Wanneer kan een implantaat passen?</h2>
          </div>
          <div className="rounded-[30px] bg-[#173f39] p-8 text-white">
            <ul className="space-y-5 text-sm leading-7 text-white/75">
              <li>• Bij het ontbreken van één of meerdere tanden.</li>
              <li>• Wanneer comfort en stabiliteit belangrijk zijn.</li>
              <li>• Als onderdeel van een persoonlijk restauratief behandelplan.</li>
              <li>• Na beoordeling door een tandarts op basis van uw mondgezondheid.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
