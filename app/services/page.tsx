import Link from "next/link";
import { StudioFrame, ProjectCTA } from "../components/StudioFrame";
import { services, priceNote } from "../lib/services";
import s from "../studio.module.css";
export const metadata = {
  title: "Websites, CRM, Automation & Content Services | YY Builds",
  description:
    "Website support, booking, CRM, job dashboards, AI assistants and short-form content for small businesses. Explore the services and starting estimates.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <StudioFrame>
      <div className={s.wrap}>
        <section className={s.pageHero}>
          <p className={s.eyebrow}>WHAT WE CAN BUILD TOGETHER</p>
          <h1>
            Useful technology.
            <br />
            Thoughtfully delivered.
          </h1>
          <p>
            From a small website fix to a connected business workflow. Choose a
            starting point, then we’ll shape the scope around your work.
          </p>
          <div className={s.actions}>
            <Link className={s.button} href="/demos">
              Explore the live demos ↗
            </Link>
            <Link className={s.inlineLink} href="/pricing">
              Compare starting prices ↗
            </Link>
          </div>
        </section>
        <section className={s.sectionTight}>
          <div className={s.serviceGrid}>
            {services.map((service) => (
              <article
                className={s.serviceCard}
                key={service.id}
                id={service.id}
              >
                <div className={s.serviceTop}>
                  <span>
                    {service.number} / {service.group}
                  </span>
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <small>{service.scope}</small>
                <div className={s.serviceBottom}>
                  <strong>{service.price}</strong>
                  <Link href={`/contact?service=${service.id}`}>
                    Discuss this service ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className={s.note}>{priceNote}</p>
        </section>
      </div>
      <ProjectCTA />
    </StudioFrame>
  );
}
