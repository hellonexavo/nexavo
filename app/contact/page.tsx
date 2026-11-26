import { StudioFrame } from "../components/StudioFrame";
import { enquiryFormUrl } from "../lib/contact";
import { services } from "../lib/services";
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
  const { service } = await searchParams;
  const selectedService = services.find((item) => item.id === service);
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
          <section className={s.briefForm} aria-labelledby="enquiry-heading">
            <h2 id="enquiry-heading">Send a project enquiry</h2>
            <p>
              {selectedService
                ? `Tell me what you need for ${selectedService.title}. Include the service name in your description if it isn’t listed in the form.`
                : "Choose a service, enter your reply email and briefly describe what you need."}
            </p>
            <a className={s.darkButton} href={enquiryFormUrl}>
              Open enquiry form <span aria-hidden="true">↗</span>
            </a>
            <p className={s.formHint}>
              Opens Google Forms in Ukrainian. Please leave out passwords,
              payment details and confidential customer information.
            </p>
          </section>
        </div>
      </div>
    </StudioFrame>
  );
}
