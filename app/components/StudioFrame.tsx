import Link from "next/link";
import type { ReactNode } from "react";
import StudioHeader from "./StudioHeader";
import s from "../studio.module.css";
export function StudioFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.footerTop}>
          <div>
            <Link className={s.logo} href="/">
              YY<span className={s.logoDot}>.</span>
              <span>BUILDS</span>
            </Link>
            <p>
              Independent digital studio.
              <br />
              Built around the way you work.
            </p>
          </div>
          <nav aria-label="Explore">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/demos">Live demos</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/investors">Company & investors</Link>
          </nav>
          <nav aria-label="Resources">
            <Link href="/booking-template">Booking template</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/about">About Yurii</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <nav aria-label="Social media">
            <a
              href="https://www.instagram.com/yybuilds.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=1295138693680821"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.tiktok.com/@yybuilds.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok ↗
            </a>
            <a
              href="https://t.me/yybuilds"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram ↗
            </a>
          </nav>
        </div>
        <div className={s.footerBottom}>
          <span>© 2026 YY Builds · Yurii Yanishevskyi</span>
          <a href="mailto:yybuilds.contact@gmail.com">
            yybuilds.contact@gmail.com ↗
          </a>
          <span>Netherlands / Working online</span>
        </div>
      </div>
    </footer>
  );
}
export function StudioFrame({ children }: { children: ReactNode }) {
  return (
    <div className={s.site}>
      <a className={s.skip} href="#main-content">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main-content">{children}</main>
      <StudioFooter />
    </div>
  );
}
export function ProjectCTA() {
  return (
    <section className={s.ctaSection}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>YOUR NEXT CHAPTER</p>
        <div className={s.ctaGrid}>
          <h2>
            Good work deserves
            <br />
            <em>a better system.</em>
          </h2>
          <div>
            <p>
              Bring your idea, your website or the task you keep doing by hand.
              We’ll work out a useful next step.
            </p>
            <Link className={s.button} href="/contact">
              Tell me about your project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
