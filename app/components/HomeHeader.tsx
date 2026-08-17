"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#070709]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-6 lg:px-10">
        <a href="#top" onClick={() => setMenuOpen(false)} className="flex min-w-0 items-center gap-3" aria-label="YY Builds home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-sm font-semibold text-white">YY</span>
          <span className="min-w-0">
            <span className="block font-semibold tracking-tight">YY Builds</span>
            <span className="hidden text-[11px] text-white/40 sm:block">Websites • AI • Automation</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/checkout" className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/85 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] sm:inline-flex">Start a project <span className="ml-2 text-violet-300">↗</span></Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-1 block h-px w-5 bg-current transition ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#090909] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-lg text-white/75 last:border-0">{item.label}</a>
            ))}
            <Link href="/checkout" onClick={() => setMenuOpen(false)} className="mt-3 flex items-center justify-center rounded-full bg-white px-5 py-4 font-semibold text-black">Start a project →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
