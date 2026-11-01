import { StudioFrame, ProjectCTA } from "../components/StudioFrame";
import s from "../studio.module.css";
export const metadata = {
  title: "About Yurii & YY Builds | Independent Digital Studio",
  description:
    "YY Builds is an independent digital studio focused on useful design, clear communication and responsibly scoped technology.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <StudioFrame>
      <div className={s.wrap}>
        <section className={s.pageHero}>
          <p className={s.eyebrow}>INDEPENDENT BY DESIGN</p>
          <h1>
            Technology with
            <br />a practical purpose.
          </h1>
          <p>
            YY Builds is an independent digital studio by Yurii Yanishevskyi,
            working online from the Netherlands. The focus is useful design,
            clear communication and technology shaped around everyday business.
          </p>
        </section>
        <section className={s.sectionTight}>
          <div className={s.serviceGrid}>
            {[
              {
                title: "Clarity",
                text: "Know what will be built, what it costs and what is not included. Every project starts with an agreed scope.",
              },
              {
                title: "Craft",
                text: "Thoughtful responsive interfaces and practical workflows. The details should make the experience easier to use.",
              },
              {
                title: "Responsibility",
                text: "Requirements, technical limits and ongoing costs are assessed before taking on complex systems.",
              },
              {
                title: "Direct collaboration",
                text: "Discuss your idea directly with Yurii. Start with a small improvement, review the result and decide what to build next.",
              },
            ].map((item) => (
              <div className={s.serviceCard} key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ProjectCTA />
    </StudioFrame>
  );
}
