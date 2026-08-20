import Image from "next/image";
import { createPageMetadata } from "@/app/lib/seo";
import LanguageSwitcher from "../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Modern Dental Care — Amsterdam | YY Builds",
  description: "English concept page for Modern Dental Care in Amsterdam.",
  path: "/portfolio/modern-dental-care/en",
});

const services = [
  ["Routine check-up", "Preventive care and early detection for a healthy smile."],
  ["Dental hygienist", "Focused care for healthy gums, prevention and a fresh mouth."],
  ["Implants", "A considered treatment path for replacing missing teeth."],
  ["Orthodontics", "Modern options for a straight, functional smile."],
  ["Crowns & bridges", "Strong, natural-looking restoration for damaged or missing teeth."],
  ["MDC Junior", "A calm, positive dental experience designed for children."],
];

const locations = [
  ["Amsterdam Oost", "Domselaerstraat 82, 84, 86", "/portfolio/modern-dental-care/en/amsterdam-oost"],
  ["Amsterdam West", "Slotermeerlaan 69", "/portfolio/modern-dental-care/en/amsterdam-west"],
  ["MDC Junior", "H.R. Holststraat 9-10", "/portfolio/modern-dental-care/en/mdc-junior"],
];

export default function EnglishModernDentalCarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17332e]">
      <div className="bg-[#173f39] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">YY Builds concept redesign · demo</div>
      <header className="border-b border-[#173f39]/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
          <a href="/portfolio/modern-dental-care/en" className="text-[12px] font-semibold uppercase leading-4 tracking-[0.19em]">Modern<br />Dental Care</a>
          <nav className="hidden items-center gap-7 text-sm text-[#46615b] lg:flex"><a href="#treatments">Treatments</a><a href="#locations">Practices</a><a href="#about">About us</a></nav>
          <div className="flex items-center gap-2"><LanguageSwitcher current="en" dutchPath="/portfolio/modern-dental-care" englishPath="/portfolio/modern-dental-care/en" /><a href="/portfolio/modern-dental-care/en/booking" className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">Book an appointment</a></div>
        </div>
      </header>
      <section className="px-5 py-10 md:px-8 lg:px-12 lg:py-16"><div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"><div><p className="inline-flex rounded-full border border-[#173f39]/10 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#486b63]">Dental practice · Amsterdam</p><h1 className="mt-7 max-w-[680px] text-[44px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[60px] lg:text-[68px]">A healthy smile starts with<span className="block font-serif italic font-normal text-[#9a7849]">personal attention.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-[#5e716c]">Modern dentistry with clear explanations, personal care and a calm experience for the whole family.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="/portfolio/modern-dental-care/en/booking" className="rounded-full bg-[#173f39] px-7 py-4 text-center text-sm font-semibold text-white">Book an appointment →</a><a href="#treatments" className="rounded-full border border-[#173f39]/15 bg-white px-7 py-4 text-center text-sm font-semibold">Explore treatments</a></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-[34px] shadow-[0_35px_100px_rgba(23,63,57,0.16)]"><Image src="/modern-dental-care/hero.png" alt="Patient enjoying a calm dental visit" width={1536} height={1024} priority className="h-full w-full object-cover" /></div></div></section>
      <section id="treatments" className="bg-white px-5 py-20 md:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Treatments</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Everything your smile needs.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.map(([title, text], i) => <article key={title} className="flex min-h-56 flex-col rounded-[28px] border border-[#173f39]/10 bg-[#f8f8f3] p-6"><span className="text-xs font-semibold text-[#8da198]">0{i + 1}</span><div className="mt-auto"><h3 className="text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6d7d78]">{text}</p><a href={title === "Implants" ? "/portfolio/modern-dental-care/en/implantaten" : title === "MDC Junior" ? "/portfolio/modern-dental-care/en/mdc-junior" : "/portfolio/modern-dental-care/en/booking"} className="mt-5 inline-flex text-sm font-semibold text-[#326256]">Learn more →</a></div></article>)}</div></div></section>
      <section id="locations" className="px-5 py-20 md:px-8 lg:px-12"><div className="mx-auto max-w-[1440px]"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Our practices</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Three locations. One trusted approach.</h2><div className="mt-10 grid gap-4 lg:grid-cols-3">{locations.map(([name, address, href]) => <article key={name} className="rounded-[28px] border border-[#173f39]/10 bg-white p-7"><p className="text-xs text-[#7f938c]">Practice</p><h3 className="mt-6 text-2xl font-medium">{name}</h3><p className="mt-3 text-sm text-[#6d7d78]">{address}<br />Amsterdam</p><a href={href} className="mt-7 inline-flex rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white">View practice</a></article>)}</div></div></section>
      <section id="about" className="px-5 pb-24 md:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 rounded-[30px] bg-[#173f39] px-7 py-10 text-white sm:px-10 lg:flex-row lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a6c4b8]">For patients</p><h2 className="mt-3 text-3xl font-medium">From a question to an appointment, without unnecessary steps.</h2></div><a href="/portfolio/modern-dental-care/en/booking" className="inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#173f39]">Start your request →</a></div></section>
    </main>
  );
}
