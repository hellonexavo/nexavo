"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../premium.module.css";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Content", href: "#content-engine" },
  { label: "Template", href: "/booking-template" },
  { label: "Tools", href: "/tools" },
  { label: "Process", href: "#process" },
  { label: "YY AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];
export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a
          href="#top"
          className={styles.brand}
          onClick={() => setMenuOpen(false)}
          aria-label="YY Builds home"
        >
          <span className={styles.brandMark}>YY</span>YY Builds
        </a>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <Link className={styles.headerCta} href="/checkout">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div id="mobile-navigation" className={styles.mobileNavigation}>
          <div className={styles.container}>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/checkout"
              onClick={() => setMenuOpen(false)}
              className={styles.primaryButton}
            >
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
