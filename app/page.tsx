import Link from "next/link";
import YYAssistant from "./components/YYAssistant";
import OperationsDemo from "./components/OperationsDemo";
import { StudioFrame, ProjectCTA } from "./components/StudioFrame";
import StudioWork from "./components/StudioWork";
import StudioVideos from "./components/StudioVideos";
import s from "./studio.module.css";
import { services } from "./lib/services";

const starterOfferIds = ["fixes", "crm", "landing"];
const starterOffers = services.filter((service) => starterOfferIds.includes(service.id));
export const metadata = {
  title: "YY Builds | Websites, Booking & Automation for Small Businesses",
  description:
    "Websites, enquiry forms, online booking and workflow automation for small businesses. View working demos and request a written quote from YY Builds.",
  alternates: { canonical: "/" },
};
export default function Home() {
  return (
    <StudioFrame>
      <section className={s.hero}>
        <div className={s.wrap}>
          <div className={s.heroTop}>
            <p className={s.eyebrow}>
              DIGITAL STUDIO FOR SMALL BUSINESSES / NETHERLANDS
            </p>
            <p className={s.availability}>Work directly with Yurii</p>
          </div>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <h1>
                Websites, enquiry forms and online booking
                <br />
                <em>for small businesses.</em>
              </h1>
              <p>
                Need a new site, a fix to an existing one, or an easier way to
                manage enquiries? Tell me what you need and I’ll send you a
                written quote.
              </p>
              <div className={s.actions}>
                <Link className={s.button} href="/contact">
                  Request a quote <span aria-hidden="true">↗</span>
                </Link>
                <a className={s.inlineLink} href="#live-demo">
                  See a working demo <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className={s.heroNote}>
                Direct contact with Yurii · Clear scope before work begins
              </p>
            </div>
            <Link
              href="/demos"
              className={s.heroVisual}
              aria-label="Open the interactive ServiceFlow demonstration"
            >
              <div className={s.miniApp}>
                <div className={s.miniTop}>
                  <div className={s.miniBrand}>
                    Service<span>Flow</span>
                  </div>
                  <span>DEMO WORKSPACE</span>
                </div>
                <div className={s.miniBody}>
                  <p className={s.miniLabel}>YOUR BUSINESS, AT A GLANCE</p>
                  <h2>A clearer working day.</h2>
                  <div className={s.miniMetrics}>
                    <div>
                      <p>Open jobs</p>
                      <strong>03</strong>
                    </div>
                    <div>
                      <p>To follow up</p>
                      <strong>01</strong>
                    </div>
                    <div>
                      <p>Estimated value</p>
                      <strong>€920</strong>
                    </div>
                  </div>
                  <div className={s.miniColumns}>
                    <div>
                      <p>
                        New enquiry <span>01</span>
                      </p>
                      <div className={s.miniJob}>
                        <span>JOB #104</span>
                        <h3>Kitchen tap replacement</h3>
                        <p>Alex · Amsterdam</p>
                        <div>
                          <span>Assigned to Sam</span>
                          <strong>€145</strong>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>
                        In progress <span>01</span>
                      </p>
                      <div className={s.miniJob}>
                        <span>JOB #102</span>
                        <h3>Door adjustment</h3>
                        <p>Charlie · Utrecht</p>
                        <div>
                          <span>Assigned to Sam</span>
                          <strong>€95</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={s.miniBottom}>
                    <span>Illustrative data / interactive concept</span>
                    <span>Open workspace ↗</span>
                  </div>
                </div>
              </div>
              <div className={s.floatingLabel}>
                <span aria-hidden="true">↗</span>
                <div>
                  <strong>From first enquiry to finished job.</strong>
                  <small>Explore how your workflow could look</small>
                </div>
              </div>
            </Link>
          </div>
          <div className={s.heroBottom}>
            <span>Document workflows / Automation / CRM / Websites</span>
            <span>For people who have a business to run.</span>
          </div>
        </div>
      </section>
      <section className={`${s.section} ${s.light}`} id="services">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <p className={s.eyebrow}>01 / WHAT WE CAN BUILD</p>
              <h2>
                A good first impression.
                <br />A better everyday flow.
              </h2>
            </div>
            <p>
              Start with one practical improvement. Build a connected system as
              your business grows.
            </p>
          </div>
          <div className={s.solutionGrid}>
            {[
              {
                number: "01",
                icon: "↗",
                title: "Websites & fixes",
                copy: "A website that explains what you do and makes the next step obvious.",
                points: [
                  "Business websites & landing pages",
                  "Mobile layouts & website fixes",
                  "Clear enquiry and contact journeys",
                ],
                href: "/services#website",
                link: "Explore websites",
              },
              {
                number: "02",
                icon: "▦",
                title: "Forms, booking & CRM",
                copy: "Bring enquiries, bookings and job progress into a clearer working process.",
                points: [
                  "Lead forms & customer tracking",
                  "Booking & appointment requests",
                  "Job dashboards & operational tools",
                ],
                href: "/services#booking",
                link: "Explore booking and enquiries",
              },
              {
                number: "03",
                icon: "⌁",
                title: "Automation & AI",
                copy: "Reduce repetitive admin and help people discover what you offer.",
                points: [
                  "Practical workflow automation",
                  "Business-specific AI assistants",
                  "Short-form video & social content",
                ],
                href: "/services#automation",
                link: "Explore automation",
              },
            ].map((item) => (
              <div key={item.number} className={s.solutionCard}>
                <div className={s.solutionNumber}>
                  <span>{item.number} / DIGITAL SERVICES</span>
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className={s.inlineLink} href={item.href}>
                  {item.link} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ))}
          </div>
          <div className={s.solutionsFoot}>
            <p>
              {starterOffers.map((service, index) => (
                <span key={service.id}>
                  {index > 0 && " · "}
                  <Link href={`/contact?service=${service.id}`}>
                    {service.title} {service.price}
                  </Link>
                </span>
              ))}
            </p>
            <Link className={s.inlineLink} href="/pricing">
              All services & starting prices ↗
            </Link>
          </div>
        </div>
      </section>
      <section id="live-demo" className={s.section}>
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <p className={`${s.eyebrow} ${s.demoIntro}`}>
                02 / LESS THEORY. MORE TRYING.
              </p>
              <h2>
                See the system.
                <br />
                Move the work forward.
              </h2>
            </div>
            <p>
              Explore three interactive concepts. Add a sample job, preview an
              appointment request or run a workflow simulation.
            </p>
          </div>
          <OperationsDemo />
          <p className={s.note}>
            A demonstration of what we can build around your process. Real
            integrations, access controls and data storage are scoped
            separately.
          </p>
        </div>
      </section>
      <section className={`${s.section} ${s.light}`} id="work">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <p className={s.eyebrow}>03 / SELECTED WEBSITE CONCEPTS</p>
              <h2>
                Different businesses.
                <br />
                Distinctive experiences.
              </h2>
            </div>
            <p>
              Explore the details: service discovery, brand presentation and
              booking journeys across different industries.
            </p>
          </div>
          <article className={s.solutionCard}>
            <p className={s.eyebrow}>AUTOFLOW / AUTOSERVICE CONCEPT</p>
            <h3>From choosing a service to requesting an appointment</h3>
            <p>
              A driver selects a service, describes the issue and requests a time.
              In a live setup, the workshop can receive the request by email or in
              its CRM and confirm the appointment.
            </p>
            <div className={s.actions}>
              <Link className={s.inlineLink} href="/portfolio/autoflow">
                Try the AutoFlow demo ↗
              </Link>
              <Link className={s.inlineLink} href="/contact?service=booking">
                Request a similar setup ↗
              </Link>
            </div>
          </article>
          <StudioWork />
          <p className={s.note}>
            Independently created demonstration projects. These are concepts,
            not commissioned client work.
          </p>
          <div className={s.allServices}>
            <Link className={s.inlineLink} href="/portfolio">
              Explore the complete portfolio ↗
            </Link>
            <Link className={s.inlineLink} href="/booking-template">
              Try the booking template ↗
            </Link>
            <Link className={s.inlineLink} href="/business-website-demo">
              View the Business Website demo ↗
            </Link>
          </div>
        </div>
      </section>
      <section className={s.section} id="content">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <p className={s.eyebrow}>04 / MOTION & CONTENT</p>
              <h2>
                Your work.
                <br />
                Worth showing.
              </h2>
            </div>
            <p>
              Short-form concept videos for a clear first impression. A starting
              point for Reels, Shorts and social campaigns.
            </p>
          </div>
          <StudioVideos />
          <p className={s.note}>
            Illustrative promotional concepts. Client content, production scope
            and publishing are agreed separately.
          </p>
        </div>
      </section>
      <section className={`${s.section} ${s.light}`} id="process">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <p className={s.eyebrow}>05 / A CLEAR WAY FORWARD</p>
              <h2>
                One conversation.
                <br />A practical plan.
              </h2>
            </div>
            <p>
              Work directly with Yurii. Know what is being built, what it costs
              and what happens next.
            </p>
          </div>
          <div className={s.processGrid}>
            {[
              {
                title: "Understand the work",
                copy: "We look at your current website or process and identify the part that needs to work better.",
              },
              {
                title: "Agree on the scope",
                copy: "You receive a clear proposal: deliverables, estimated schedule, costs and any external services.",
              },
              {
                title: "Build, review, hand over",
                copy: "Review the working experience, check the details and get an explanation of how to use it. Ongoing care can be agreed.",
              },
            ].map((item, i) => (
              <div key={item.title}>
                <span>0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={s.section}>
        <div className={`${s.wrap} ${s.faqGrid}`}>
          <div>
            <p className={s.eyebrow}>A FEW USEFUL ANSWERS</p>
            <h2 className={s.sectionTitle}>
              Before we
              <br />
              build anything.
            </h2>
          </div>
          <div className={s.faqList}>
            {[
              [
                "Can you improve my existing website?",
                "Yes. We start by reviewing your website and access to its platform. Small fixes, content updates and larger improvements are scoped around what you already have.",
              ],
              [
                "Are the demos real customer projects?",
                "They are independent concepts using fictional data. They show design and interaction possibilities. Production integrations and real customer data require a separately agreed implementation.",
              ],
              [
                "Can a system work on my phone?",
                "We design web experiences for mobile as well as desktop. The demos on this site can be explored in your phone’s browser.",
              ],
              [
                "What will my project cost?",
                "The pricing page shows starting estimates. After reviewing your requirements, we confirm the scope, timing, applicable taxes, hosting and any software fees before work starts.",
              ],
              [
                "Can we start small?",
                "Yes. One page, one repair or one workflow is a useful first step. We can plan further improvements after the initial result has been reviewed.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
      <YYAssistant />
    </StudioFrame>
  );
}
