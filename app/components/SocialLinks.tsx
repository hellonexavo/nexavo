import { socialLinks } from "../lib/contact";

const links = [
  { name: "Instagram", href: socialLinks.instagram, icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></> },
  { name: "TikTok", href: socialLinks.tiktok, icon: <path d="M15 4v9.1a4.6 4.6 0 1 1-4-4.45V12a1.6 1.6 0 1 0 1.6 1.6V3h3.2c.25 1.7 1.25 2.75 3.2 3.1v3.15A7.2 7.2 0 0 1 15 7.7" /> },
  { name: "Facebook", href: socialLinks.facebook, icon: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" /> },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export default function SocialLinks({ className = "" }: { className?: string }) {
  return <div className={`flex items-center gap-2 ${className}`} aria-label="YY Builds social media">{links.map((link) => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/55 hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-violet-300/[0.08] hover:text-white"><svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{link.icon}</svg></a>)}</div>;
}
