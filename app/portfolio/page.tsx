import Link from "next/link";
import { StudioFrame, ProjectCTA } from "../components/StudioFrame";
import StudioWork from "../components/StudioWork";
import StudioVideos from "../components/StudioVideos";
import s from "../studio.module.css";
export const metadata = {
  title: "Website Concepts & Interactive Portfolio | YY Builds",
  description:
    "Explore independently created website concepts, business workflow demonstrations and short-form promotional videos by YY Builds.",
  alternates: { canonical: "/portfolio" },
};
export default function Portfolio() {
  return (
    <StudioFrame>
      <div className={s.wrap}>
        <section className={s.pageHero}>
          <p className={s.eyebrow}>THE YY BUILDS SHOWROOM</p>
          <h1>
            Ideas you can
            <br />
            actually explore.
          </h1>
          <p>
            Websites, booking journeys and business tools. Independently created
            concepts to help you picture the possibilities for your own
            business.
          </p>
          <div className={s.actions}>
            <Link className={s.button} href="/demos">
              Try the business workspace ↗
            </Link>
            <Link className={s.inlineLink} href="/booking-template">
              Explore the booking template ↗
            </Link>
          </div>
        </section>
        <section className={s.sectionTight}>
          <StudioWork />
          <p className={s.note}>
            These are demonstration projects, not commissioned client work.
            Names, scenarios and example data are illustrative.
          </p>
        </section>
        <section className={s.sectionTight}>
          <div className={s.sectionHead}>
            <div>
              <p className={s.eyebrow}>MOTION & CONTENT</p>
              <h2>
                Small stories.
                <br />
                Clear ideas.
              </h2>
            </div>
            <p>
              Three promotional concepts showing different ways to communicate
              digital services.
            </p>
          </div>
          <StudioVideos />
        </section>
      </div>
      <ProjectCTA />
    </StudioFrame>
  );
}
