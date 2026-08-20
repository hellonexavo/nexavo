import { createPageMetadata } from "@/app/lib/seo";
import LanguageSwitcher from "../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "MDC Junior — Modern Dental Care Concept | YY Builds",
  description: "Premium pediatric dentistry concept page for MDC Junior.",
  path: "/portfolio/modern-dental-care/mdc-junior",
});

export default function MdcJuniorPage() {
  return (
    <main className="min-h-screen bg-[#fff9ef] text-[#17332e]">
      
<header className="border-b border-[#173f39]/10 bg-[#f7f5ef]/95 backdrop-blur-xl">
  <div className="mx-auto flex min-h-20 max-w-[1360px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
    <a href="/portfolio/modern-dental-care" className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#17332e]">
      Modern Dental Care
    </a>
    <div className="flex items-center gap-2">
      <LanguageSwitcher current="nl" dutchPath="/portfolio/modern-dental-care/mdc-junior" englishPath="/portfolio/modern-dental-care/en/mdc-junior" />
      <a href="/portfolio/modern-dental-care#appointment" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">Maak een afspraak</a>
    </div>
  </div>
</header>

      <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f9f92]">MDC Junior</p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
              Een positieve start voor
              <span className="block font-serif italic font-normal text-[#c08756]">kleine glimlachen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#6f7f77]">
              Een rustige, kindvriendelijke benadering helpt kinderen vertrouwd te raken met tandheelkundige zorg.
            </p>
            <a href="/portfolio/modern-dental-care#appointment" className="mt-8 inline-flex rounded-full bg-[#173f39] px-7 py-4 text-sm font-semibold text-white">Afspraak voor mijn kind →</a>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#f2dfb7,#b9ddd1)]">
            <div className="absolute left-[12%] top-[14%] h-36 w-36 rounded-full bg-white/45" />
            <div className="absolute right-[10%] top-[20%] h-24 w-24 rounded-full bg-white/35" />
            <div className="absolute bottom-[12%] left-[24%] h-52 w-52 rounded-[38%] bg-white/55" />
            <div className="absolute inset-x-8 bottom-8 rounded-[24px] bg-white/85 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a9a95]">Concept visual</p>
              <p className="mt-2 text-sm font-semibold">Hier gebruiken we later echte beelden van MDC Junior.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Rust, vertrouwen en een positieve ervaring.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Een rustige kennismaking","Kinderen krijgen de tijd om te wennen aan de omgeving en het team."],
              ["Duidelijke uitleg","We leggen stap voor stap uit wat er gebeurt, in begrijpelijke taal."],
              ["Positieve routine","Een prettige ervaring helpt gezonde gewoonten voor later op te bouwen."],
            ].map(([title,text], i) => (
              <article key={title} className="rounded-[28px] border border-[#173f39]/10 bg-[#fff9ef] p-7">
                <span className="text-xs font-semibold text-[#a2967e]">0{i+1}</span>
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f7f77]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px] rounded-[34px] bg-[#173f39] p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Voor ouders</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Wilt u een afspraak plannen voor uw kind?</h2>
          <a href="/portfolio/modern-dental-care#appointment" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173f39]">Afspraak aanvragen →</a>
        </div>
      </section>
    </main>
  );
}
