import Link from "next/link";
import styles from "../premium.module.css";
const demos = [
  {
    title: "Website transformation",
    label: "Web design",
    description:
      "A visual before-and-after concept showing a stronger digital first impression.",
    src: "/videos/yy-builds-website.mp4",
  },
  {
    title: "AI automation",
    label: "AI · n8n · Workflows",
    description:
      "An illustrative journey from incoming enquiry to an automated business workflow.",
    src: "/videos/yy-builds-automation.mp4",
  },
  {
    title: "Content Engine",
    label: "Website · AI · Content",
    description:
      "A concept connecting a website, AI assistant, automation and short-form content.",
    src: "/videos/yy-builds-content-engine.mp4",
  },
];
export default function ContentShowcase() {
  return (
    <section id="content-engine" className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>03 / Motion & content</p>
            <h2>
              Your story.
              <br />
              In a few seconds.
            </h2>
          </div>
          <p>
            Short-form video concepts that make digital services easier to see
            and understand. Made for Reels, Shorts and TikTok.
          </p>
        </div>
        <div className={styles.demoGrid}>
          {demos.map((demo) => (
            <article key={demo.title} className={styles.demoCard}>
              <div className={styles.videoFrame}>
                <video
                  src={demo.src}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`${demo.title} concept video`}
                />
              </div>
              <p className={styles.demoLabel}>{demo.label}</p>
              <h3>{demo.title}</h3>
              <p>{demo.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.contentCta}>
          <p>
            Have a service or product to explain? Share your idea and we can
            shape a focused content project.
          </p>
          <Link
            href="/checkout?product=custom-project"
            className={styles.textLink}
          >
            Create my content <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
