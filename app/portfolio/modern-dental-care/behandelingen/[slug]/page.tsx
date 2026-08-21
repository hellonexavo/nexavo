import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/app/lib/seo";
import { ClinicButton, ClosingCta, FaqPreview, TreatmentCards } from "../../components/ClinicSections";
import { ClinicPage } from "../../components/ClinicShell";
import { treatments } from "../../data";

type TreatmentContent = {
  lead: string;
  steps: [string, string][];
  guidance: string[];
};

const details: Record<string, TreatmentContent> = {
  controle: {
    lead: "Een periodieke controle geeft ruimte om uw mondgezondheid rustig te bekijken, vragen te bespreken en samen vooruit te kijken.",
    steps: [
      ["Kennismaken", "We bespreken uw gezondheid, vragen en eventuele klachten."],
      ["Onderzoek", "De tandarts bekijkt uw gebit en mondgezondheid zorgvuldig."],
      ["Uitleg", "U krijgt duidelijke uitleg over wat opvalt en welke vervolgstap passend is."],
      ["Vervolg", "Als behandeling nodig is, maken we samen een plan dat bij u past."],
    ],
    guidance: ["De conditie van tanden, kiezen en tandvlees", "Mogelijke signalen die extra aandacht vragen", "Uw vragen, gewoonten en wensen", "Preventieve stappen voor de komende periode"],
  },
  gebitsreiniging: {
    lead: "Een professionele gebitsreiniging ondersteunt een gezonde mond en helpt u uw dagelijkse mondverzorging goed vol te houden.",
    steps: [
      ["Bespreken", "We kijken waar u extra aandacht aan wilt geven."],
      ["Reinigen", "Aanslag en tandsteen worden zorgvuldig verwijderd."],
      ["Begeleiden", "U krijgt praktische aanwijzingen voor uw eigen routine."],
      ["Opvolgen", "Waar nodig spreken we een passend vervolg af."],
    ],
    guidance: ["Gezond tandvlees", "Een frisse mond", "Gerichte preventie", "Persoonlijke uitleg"],
  },
  mondhygienist: {
    lead: "De mondhygiënist helpt u met gerichte preventie, een gezonde mondverzorging en aandacht voor het tandvlees.",
    steps: [
      ["Inventariseren", "We bespreken uw gewoonten en aandachtspunten."],
      ["Beoordelen", "De mondgezondheid wordt zorgvuldig bekeken."],
      ["Behandelen", "De behandeling wordt rustig en stap voor stap uitgevoerd."],
      ["Uitleggen", "U krijgt advies dat aansluit bij uw dagelijkse leven."],
    ],
    guidance: ["Tandvlees en mondhygiëne", "Preventie van problemen", "Een persoonlijke verzorgingsroutine", "Comfort en duidelijke communicatie"],
  },
};

export function generateStaticParams() {
  return treatments.filter((item) => item.slug !== "implantaten").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);
  return createPageMetadata({
    title: `${treatment?.title ?? "Behandeling"} — Modern Dental Care`,
    description: treatment?.text ?? "Informatie over behandelingen bij Modern Dental Care in Amsterdam.",
    path: `/portfolio/modern-dental-care/behandelingen/${slug}`,
  });
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);
  if (!treatment || slug === "implantaten") notFound();

  const content = details[slug] ?? {
    lead: `${treatment.title} bij Modern Dental Care begint met duidelijke uitleg en aandacht voor uw persoonlijke situatie.`,
    steps: [
      ["Kennismaken", "We bespreken uw vraag en verwachtingen."],
      ["Beoordelen", "De tandarts bekijkt welke aanpak passend kan zijn."],
      ["Bespreken", "U krijgt uitleg over de mogelijkheden en vervolgstappen."],
      ["Begeleiden", "Het team blijft betrokken tijdens het afgesproken traject."],
    ],
    guidance: ["Uw persoonlijke situatie", "Uw vragen en verwachtingen", "De mogelijke vervolgstappen", "Duidelijke afspraken vooraf"],
  } satisfies TreatmentContent;
  const related = treatments.filter((item) => item.slug !== slug && ["controle", "gebitsreiniging", "mondhygienist", "implantaten"].includes(item.slug)).slice(0, 3);

  return <ClinicPage>
    <section className="px-5 py-20 md:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1440px]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Behandeling · {treatment.category}</p><h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-0.06em] sm:text-7xl">{treatment.title} met <span className="font-serif italic font-normal text-[#9a7849]">persoonlijke aandacht.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#687a74]">{content.lead}</p><div className="mt-8 flex flex-wrap gap-3"><ClinicButton href="/portfolio/modern-dental-care/booking">Afspraak maken <span className="ml-2">↗</span></ClinicButton><ClinicButton href="/portfolio/modern-dental-care/behandelingen" secondary>Alle behandelingen</ClinicButton></div></div></section>
    <section className="bg-white px-5 py-24 md:px-8 lg:px-12"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Hoe het werkt</p><div className="mt-10 grid gap-4 md:grid-cols-2">{content.steps.map(([title, text], index) => <article key={title} className="rounded-[28px] border border-[#173f39]/10 bg-[#f8f8f3] p-7"><span className="text-xs font-semibold text-[#8aa096]">0{index + 1}</span><h2 className="mt-10 text-2xl font-medium">{title}</h2><p className="mt-3 text-sm leading-7 text-[#6d7d78]">{text}</p></article>)}</div></div></section>
    <section className="px-5 py-24 md:px-8 lg:px-12"><div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Aandachtspunten</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Samen kijken naar wat voor u belangrijk is.</h2></div><div className="rounded-[30px] bg-[#173f39] p-8 text-white"><ul className="space-y-5 text-sm leading-7 text-white/75">{content.guidance.map((item) => <li key={item} className="flex gap-3"><span className="text-[#a6c4b8]">✓</span>{item}</li>)}</ul></div></div></section>
    <section className="bg-white px-5 py-24 md:px-8 lg:px-12"><div className="mx-auto max-w-[900px]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Veelgestelde vragen</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Meer weten over uw bezoek?</h2><div className="mt-10"><FaqPreview limit={3} /></div></div></section>
    <section className="px-5 py-24 md:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]"><div className="flex items-end justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Gerelateerde zorg</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.05em]">Misschien ook relevant</h2></div><Link href="/portfolio/modern-dental-care/behandelingen" className="hidden text-sm font-semibold text-[#326256] sm:inline-flex">Alles bekijken ↗</Link></div><div className="mt-10"><TreatmentCards limit={related.length} /></div></div></section>
    <ClosingCta />
  </ClinicPage>;
}