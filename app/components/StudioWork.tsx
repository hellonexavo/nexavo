import Image from "next/image";
import Link from "next/link";
import s from "../studio.module.css";
export default function StudioWork() {
  return (
    <div className={s.workGrid}>
      {[
        {
          name: "Aurelia Dental",
          kind: "Healthcare · Website & booking",
          href: "/portfolio/modern-dental-care",
          image: "/modern-dental-care/hero.png",
          tone: "",
          line: "",
        },
        {
          name: "NovaDent",
          kind: "Healthcare · Patient experience",
          href: "/portfolio/novadent",
          image: "/novadent/team-hero.png",
          tone: "",
          line: "",
        },
        {
          name: "Autoflow",
          kind: "Automotive · Booking concept",
          href: "/portfolio/autoflow",
          image: "",
          tone: "automotive",
          line: "A clearer road to your next booking.",
        },
        {
          name: "Maison",
          kind: "Hospitality · Restaurant concept",
          href: "/portfolio/maison",
          image: "",
          tone: "restaurant",
          line: "A table. A story. An evening.",
        },
      ].map((project) => (
        <Link className={s.workCard} href={project.href} key={project.name}>
          <div className={`${s.workVisual} ${s[project.tone] || ""}`}>
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} demonstration website imagery`}
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            ) : (
              <div className={s.wordmark}>
                <span>{project.name}</span>
                <p>{project.line}</p>
              </div>
            )}
            <span className={s.workBadge}>INDEPENDENT CONCEPT</span>
            <span className={s.workArrow} aria-hidden="true">
              ↗
            </span>
          </div>
          <div className={s.workCaption}>
            <h3>{project.name}</h3>
            <p>{project.kind}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
