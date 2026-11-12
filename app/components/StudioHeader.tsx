"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import s from "../studio.module.css";
const links = [
  ["Services", "/services"],
  ["Work", "/portfolio"],
  ["Company & investors", "/investors"],
  ["Live demos", "/demos"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
];
export default function StudioHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={s.header}>
      <div className={`${s.wrap} ${s.headerRow}`}>
        <Link className={s.logo} href="/" aria-label="YY Builds home">
          YY<span className={s.logoDot}>.</span>
          <span>BUILDS</span>
        </Link>
        <nav className={s.desktopNav} aria-label="Main navigation">
          {links.map(([name, href]) => (
            <Link key={href} href={href}>
              {name}
              {name === "Live demos" && <span className={s.navDot} />}
            </Link>
          ))}
        </nav>
        <div className={s.headerActions}>\n          <nav aria-label="Language" className={s.languageLinks}>\n            <Link href="/uk" lang="uk" title="Українська">UA</Link>\n            <Link href="/pl" lang="pl" title="Polski">PL</Link>\n            <Link href="/en" lang="en" title="English">EN</Link>\n            <Link href="/nl" lang="nl" title="Nederlands">NL</Link>\n          </nav>
          <Link className={s.smallButton} href="/contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
          <button
            className={s.menuButton}
            ref={toggle}
            aria-expanded={open}
            aria-controls="studio-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="studio-menu"
          className={`${s.wrap} ${s.mobileNav}`}
          aria-label="Mobile navigation"
        >
          {[...links, ["Contact", "/contact"], ["Tools", "/tools"]].map(
            ([name, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {name}
                <span aria-hidden="true">↗</span>
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
