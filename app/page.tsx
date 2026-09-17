import Image from "next/image";
import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import YYAssistant from "./components/YYAssistant";
import AssistantTrigger from "./components/AssistantTrigger";
import SocialLinks from "./components/SocialLinks";
import ContentShowcase from "./components/ContentShowcase";
import { contactDetails } from "./lib/contact";
import styles from "./premium.module.css";

const projects = [
  {
    name: "Aurelia Dental",
    category: "Healthcare · Multilingual website",
    description: "Treatment discovery and a guided appointment journey.",
    href: "/portfolio/modern-dental-care",
    image: "/modern-dental-care/hero.png",
    tone: "dental",
  },
  {
    name: "NovaDent",
    category: "Healthcare · Clinic website",
    description: "A patient experience built around clarity and trust.",
    href: "/portfolio/novadent",
    image: "/novadent/team-hero.png",
    tone: "clinic",
  },
  {
    name: "Autoflow",
    category: "Automotive · Booking experience",
    description: "From exploring workshop services to requesting a booking.",
    href: "/portfolio/autoflow",
    image: null,
    tone: "auto",
  },
  {
    name: "Maison",
    category: "Hospitality · Restaurant website",
    description: "Menus, brand storytelling and a simple reservation journey.",
    href: "/portfolio/maison",
    image: null,
    tone: "maison",
  },
];
const services = [
  [
    "01",
    "Websites",
    "A clear first impression. A thoughtful customer journey. Business websites and landing pages designed around the next step.",
    "Design · Development · Responsive layouts",
  ],
  [
    "02",
    "Booking systems",
    "Make appointments easier to request, with clear service choices and fewer back-and-forth messages.",
    "Service selection · Forms · Notifications",
  ],
  [
    "03",
    "AI assistants",
    "Help visitors find answers and the right service, with a website assistant shaped around your business.",
    "Customer guidance · Questions · Enquiries",
  ],
  [
    "04",
    "Automation",
    "Connect incoming enquiries with the people and tools that handle them. Reduce repetitive admin work.",
    "Lead capture · Routing · Follow-ups",
  ],
];
const process = [
  [
    "01",
    "A conversation",
    "Tell me about your business and what needs to work better. We start with the problem.",
  ],
  [
    "02",
    "A clear plan",
    "We agree on the scope, deliverables and next steps before the build begins.",
  ],
  [
    "03",
    "Build & launch",
    "I build and review the experience across devices, then prepare it for launch.",
  ],
];
export default function Home() {
  return (
    <main id="top" className={styles.home}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <HomeHeader />
      <section id="main-content" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroIntro}>
            <p className={styles.eyebrow}>Independent digital studio</p>
            <p className={styles.heroIndex}>Websites / AI / Automation</p>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                Make your
                <br />
                next impression
                <br />
                <span>exceptional.</span>
              </h1>
              <p className={styles.heroDescription}>
                Thoughtful websites, booking experiences and practical AI tools
                for businesses ready for a better digital presence.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/checkout">
                  Start a project <span aria-hidden="true">↗</span>
                </Link>
                <a className={styles.textLink} href="#work">
                  Explore the work <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <Link
              href="/portfolio/modern-dental-care"
              className={styles.heroProject}
              aria-label="Explore the Aurelia Dental concept project"
            >
              <div className={styles.heroImage}>
                <Image
                  src="/modern-dental-care/hero.png"
                  alt="Patient smiling during a dental visit, from the Aurelia Dental concept"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  preload
                />
              </div>
              <div className={styles.heroProjectOverlay}>
                <span className={styles.projectLabel}>
                  Featured concept / 01
                </span>
                <h2>
                  Aurelia
                  <br />
                  Dental
                </h2>
                <span className={styles.heroProjectAction}>
                  Explore the experience <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          </div>
          <div className={styles.heroFoot}>
            <p>Built by Yurii. Designed around your business.</p>
            <a href="#services">
              Discover what we can build <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <section id="work" className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            number="01"
            label="Selected work"
            title={"Considered design.\nUseful experiences."}
            copy="Explore website concepts across healthcare, automotive and hospitality. Each shows a different approach to a real customer journey."
          />
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className={styles.projectCard}
              >
                <div
                  className={`${styles.projectVisual} ${styles[project.tone]}`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} concept imagery`}
                      fill
                      sizes="(max-width: 650px) 100vw, 50vw"
                    />
                  ) : (
                    <div className={styles.projectWordmark}>
                      <span>
                        {project.name === "Autoflow" ? "AUTOFLOW" : "Maison"}
                      </span>
                      <p>
                        {project.name === "Autoflow"
                          ? "A clearer road to your next booking."
                          : "A table. A story. An evening."}
                      </p>
                    </div>
                  )}
                  <span className={styles.conceptBadge}>Concept project</span>
                  <span className={styles.projectArrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className={styles.projectCaption}>
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className={styles.workNote}>
            These are independently built concepts, not commissioned client
            projects.
          </p>
        </div>
      </section>
      <section
        id="services"
        className={`${styles.section} ${styles.darkSection}`}
      >
        <div className={styles.container}>
          <SectionHeading
            number="02"
            label="What I build"
            title={"Your business.\nBetter connected."}
            copy="Start with what your customers need. Build the technology that makes it easier."
          />
          <div className={styles.serviceList}>
            {services.map(([number, name, description, detail]) => (
              <article key={number} className={styles.serviceRow}>
                <span className={styles.rowNumber}>{number}</span>
                <h3>{name}</h3>
                <div>
                  <p>{description}</p>
                  <span className={styles.serviceDetail}>{detail}</span>
                </div>
              </article>
            ))}
          </div>
          <Link href="/checkout" className={styles.textLink}>
            Discuss your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <ContentShowcase />
      <section id="process" className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            number="04"
            label="How it works"
            title={"Clear from the\nfirst conversation."}
            copy="Work directly with the person designing and building your project. A focused process, with room for your ideas."
          />
          <div className={styles.processGrid}>
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span className={styles.rowNumber}>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="ai" className={styles.aiSection}>
        <div className={`${styles.container} ${styles.aiGrid}`}>
          <div>
            <p className={styles.eyebrow}>05 / Meet YY AI</p>
            <h2>
              A useful conversation.
              <br />
              <span>A clearer next step.</span>
            </h2>
            <p>
              Ask about websites, booking systems or automation. YY AI helps you
              explore the options before you send a project request.
            </p>
            <div className={styles.actions}>
              <AssistantTrigger className={styles.primaryButton} />
              <Link
                href="/checkout?product=custom-project"
                className={styles.textLink}
              >
                Build one for my business <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <ul className={styles.aiFeatures}>
            {[
              "Answers common questions",
              "Guides visitors to relevant services",
              "Supports conversations in multiple languages",
              "Carries useful context into a project request",
            ].map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>06 / Start a conversation</p>
          <div className={styles.contactGrid}>
            <h2>
              Your next chapter
              <br />
              <span>starts here.</span>
            </h2>
            <div>
              <p>
                Share your idea, your website or the problem you want to solve.
                I’ll review it and recommend a clear next step.
              </p>
              <Link href="/checkout" className={styles.primaryButton}>
                Let’s build it <span aria-hidden="true">↗</span>
              </Link>
              <a
                className={styles.contactEmail}
                href={`mailto:${contactDetails.email}`}
              >
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <a href="#top" className={styles.footerBrand}>
              YY Builds<span>Websites · AI · Automation · Content</span>
            </a>
            <nav aria-label="Footer navigation">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#content-engine">Content</a>
              <Link href="/booking-template">Template</Link>
              <Link href="/tools">Tools</Link>
              <a href="#process">Process</a>
              <a href="#ai">YY AI</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p>Independent studio by Yurii Yanishevskyi</p>
            <div>
              <SocialLinks />
              <a
                href="https://t.me/yybuilds"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactDetails.telegram}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <YYAssistant />
    </main>
  );
}
function SectionHeading({
  number,
  label,
  title,
  copy,
}: {
  number: string;
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        <p className={styles.eyebrow}>
          {number} / {label}
        </p>
        <h2>
          {title.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>
      </div>
      <p>{copy}</p>
    </div>
  );
}
