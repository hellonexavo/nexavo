import type { Metadata } from "next";
import { StudioFrame, ProjectCTA } from "../components/StudioFrame";
import OperationsDemo from "../components/OperationsDemo";
import s from "../studio.module.css";
export const metadata: Metadata = {
  title: "Interactive Business Demos | YY Builds",
  description:
    "Try ServiceFlow job management, a booking journey and a local automation simulation. Interactive concepts for small service businesses.",
  alternates: { canonical: "/demos" },
};
export default function Demos() {
  return (
    <StudioFrame>
      <section className={s.demoPage}>
        <div className={s.wrap}>
          <div className={s.pageHero}>
            <p className={s.eyebrow}>THE INTERACTIVE SHOWROOM</p>
            <h1>
              Don’t just imagine it.
              <br />
              Try it.
            </h1>
            <p>
              Three ways to see what a better working process could look like.
              Use the controls, move the jobs and explore the customer journey.
            </p>
            <div className={s.featureStrip}>
              <span>Service teams</span>
              <span>Workshops</span>
              <span>Cleaning businesses</span>
              <span>Independent professionals</span>
            </div>
          </div>
          <OperationsDemo />
          <p className={s.note}>
            These concepts use fictional data and run locally in your page
            session. They do not store customer details, reserve appointments or
            contact external services. Production systems are scoped
            individually, including data access, integrations and ongoing
            support.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </StudioFrame>
  );
}
