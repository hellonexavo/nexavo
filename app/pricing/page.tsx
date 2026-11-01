import Link from "next/link";
import { StudioFrame, ProjectCTA } from "../components/StudioFrame";
import { services, priceNote } from "../lib/services";
import s from "../studio.module.css";
export const metadata = {
  title: "Starting Prices & Project Quotes | YY Builds",
  description:
    "Transparent starting estimates for website fixes, websites, CRM and automation. Scope, delivery and costs agreed before work begins.",
  alternates: { canonical: "/pricing" },
};
export default function Pricing() {
  return (
    <StudioFrame>
      <div className={s.wrap}>
        <section className={s.pageHero}>
          <p className={s.eyebrow}>CLEAR FROM THE START</p>
          <h1>
            A starting point.
            <br />
            Then a clear proposal.
          </h1>
          <p>
            Clear starting estimates, with a defined scope for each project.
            Tell me what needs to work better and we’ll agree on the right next
            step.
          </p>
        </section>
      </div>
      <section className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <div className={s.pricingList}>
            {services.map((service) => (
              <div className={s.priceRow} key={service.id}>
                <span>{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.scope}</p>
                </div>
                <strong>{service.price}</strong>
                <Link href={`/contact?service=${service.id}`}>
                  Request a quote <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ))}
          </div>
          <p className={s.note}>{priceNote}</p>
        </div>
      </section>
      <ProjectCTA />
    </StudioFrame>
  );
}
