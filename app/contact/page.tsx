import { StudioFrame } from "../components/StudioFrame";
import ProjectBrief from "../components/ProjectBrief";
import s from "../studio.module.css";
export const metadata = {
  title: "Discuss Your Project | YY Builds",
  description:
    "Tell Yurii about your website, booking journey, automation or content project. Prepare a brief and agree a clear scope before work begins.",
  alternates: { canonical: "/contact" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  return (
    <StudioFrame>
      <div className={s.wrap}>
        <section className={s.pageHero}>
          <p className={s.eyebrow}>DIRECT CONTACT / CLEAR NEXT STEPS</p>
          <h1>
            Let’s make your
            <br />
            next step useful.
          </h1>
          <p>
            A new idea, a website that needs attention or a process that takes
            too much time. Tell me where you’d like to start.
          </p>
        </section>
        <div className={s.contactLayout}>
          <aside className={s.contactAside}>
            <h2>Work directly with Yurii.</h2>
            <p>
              I’ll review your requirements and recommend a practical next step.
              Scope, timing and payment terms are agreed before work starts.
            </p>
            <a href="mailto:yybuilds.contact@gmail.com">
              yybuilds.contact@gmail.com ↗
            </a>
            <a
              href="https://t.me/yybuilds"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram: @yybuilds ↗
            </a>
            <ul>
              <li>01 / Tell me what needs to work better</li>
              <li>02 / Share your website or a useful example</li>
              <li>03 / Receive an agreed scope and quote</li>
            </ul>
            <p>
              Working online from the Netherlands. A small first project is
              welcome.
            </p>
          </aside>
          <ProjectBrief initialService={params.service || ""} />
        </div>
      </div>
    </StudioFrame>
  );
}
