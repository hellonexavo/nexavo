import LanguageSwitcher from "../LanguageSwitcher";
import { clinicBasePath, navigation } from "../data";

export function ClinicLogo() {
  return <a href={clinicBasePath} className="flex items-center gap-3" aria-label="Modern Dental Care home"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173f39]/15 bg-white text-[#173f39]"><span className="text-xl leading-none">⌁</span></span><span className="text-[12px] font-semibold uppercase leading-4 tracking-[0.19em]">Modern<br />Dental Care</span></a>;
}

export function ClinicHeader({ compact = false }: { compact?: boolean }) {
  return <header className="clinic-header sticky top-0 z-50 border-b border-[#173f39]/10 bg-[#f7f5ef]/90 backdrop-blur-xl"><div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 lg:px-12"><ClinicLogo /><nav className="hidden items-center gap-6 text-sm text-[#46615b] xl:flex" aria-label="Hoofdnavigatie">{navigation.map(([label, href]) => <a key={label} href={href} className="transition hover:text-[#173f39]">{label}</a>)}</nav><div className="flex items-center gap-2"><LanguageSwitcher current="nl" dutchPath={compact ? clinicBasePath : clinicBasePath} englishPath={`${clinicBasePath}/en`} /><a href={`${clinicBasePath}/booking`} className="rounded-full bg-[#173f39] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#285b50] sm:px-6">Afspraak maken <span className="ml-1">↗</span></a></div></div></header>;
}

export function ClinicFooter() {
  return <footer className="bg-[#102d28] px-5 py-12 text-white md:px-8 lg:px-12"><div className="mx-auto grid max-w-[1440px] gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_.8fr_.8fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.15em]">Modern Dental Care</p><p className="mt-4 max-w-sm text-sm leading-7 text-white/55">Persoonlijke tandheelkundige zorg in Amsterdam, met aandacht voor preventie, duidelijke uitleg en een rustige ervaring.</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6c4b8]">Navigatie</p><div className="mt-4 grid gap-3 text-sm text-white/65"><a href={`${clinicBasePath}/behandelingen`}>Behandelingen</a><a href={`${clinicBasePath}#locations`}>Praktijken</a><a href={`${clinicBasePath}/faq`}>Veelgestelde vragen</a><a href={`${clinicBasePath}/contact`}>Contact</a></div></div><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a6c4b8]">Afspraak</p><p className="mt-4 text-sm leading-7 text-white/55">Kies uw praktijk en vraag een afspraak aan. De praktijk bevestigt de afspraak persoonlijk.</p><a href={`${clinicBasePath}/booking`} className="mt-4 inline-flex text-sm font-semibold text-white">Afspraak aanvragen <span className="ml-2">↗</span></a></div></div><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row"><p>Concept by YY Builds</p><p>Modern Dental Care · Amsterdam</p></div></footer>;
}

export function ClinicPage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <main className={`min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17332e] ${className}`}><div className="bg-[#173f39] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">Modern Dental Care · Persoonlijke zorg in Amsterdam</div><ClinicHeader />{children}<ClinicFooter /></main>;
}
