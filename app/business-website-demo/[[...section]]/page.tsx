import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { business } from "../config";
import EnquiryForm from "../EnquiryForm";
import s from "../website.module.css";

type Section = "" | "services" | "contact";
const validSections: Section[] = ["", "services", "contact"];
const base = "/business-website-demo";
export const dynamicParams = false;
export function generateStaticParams() {
  return validSections.map(section => ({ section: section ? [section] : [] }));
}
export async function generateMetadata({ params }: { params: Promise<{ section?: string[] }> }): Promise<Metadata> {
  const { section = [] } = await params;
  const part = section.length > 1 ? "invalid" : section[0] || "";
  if (!validSections.includes(part as Section)) return {};
  const pageName = part === "services" ? "Services" : part === "contact" ? "Contact" : "Home";
  const title = `${pageName} | ${business.legalName} — Website Demo`;
  return {
    title,
    description: business.description,
    robots: { index: false, follow: false },
    alternates: { canonical: base + (part ? "/" + part : "") },
    openGraph: { title, description: business.description, url: base + (part ? "/" + part : "") },
  };
}
export default async function BusinessWebsiteDemo({ params }: { params: Promise<{ section?: string[] }> }) {
  const { section = [] } = await params;
  const path = (section[0] || "") as Section;
  if (section.length > 1 || !validSections.includes(path)) notFound();
  const serviceCards = business.services.map(item => <article className={s.serviceCard} key={item.number}><span className={s.serviceNumber}>{item.number} / {item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><Link href={base + "/services"} className={s.textLink}>Explore service <span aria-hidden="true">↗</span></Link></article>);
  return <div className={s.website} style={{"--brand":business.primaryColor,"--accent":business.accentColor} as React.CSSProperties}>
    <a className={s.skip} href="#content">Skip to content</a>
    <div className={s.demoBar}>YY Builds reusable website template — fictional business demonstration · <Link href="/contact">Request a website like this ↗</Link></div>
    <header className={s.header}><div className={s.container}><div className={s.headerRow}><Link className={s.logo} href={base} aria-label={business.legalName + " home"}>{business.name}<span className={s.logoDetail}>{business.descriptor}</span></Link><nav aria-label="Main navigation" className={s.nav}><Link aria-current={!path?"page":undefined} href={base}>Home</Link><Link aria-current={path==="services"?"page":undefined} href={base+"/services"}>Services</Link><Link aria-current={path==="contact"?"page":undefined} href={base+"/contact"}>Contact</Link></nav><Link className={s.headerCta} href={base+"/contact"}>Get in touch <span>↗</span></Link></div></div></header>
    <main id="content">
      {!path && <>
        <section className={s.hero}><div className={s.container}><div className={s.heroGrid}><div className={s.heroCopy}><p className={s.eyebrow}>{business.heroEyebrow}</p><h1>{business.heroTitle}</h1><p className={s.heroLead}>{business.heroText}</p><div className={s.buttonRow}><Link href={base+"/contact"} className={s.primaryButton}>Let's talk about your home <span>↗</span></Link><Link href={base+"/services"} className={s.secondaryButton}>Explore services</Link></div><div className={s.heroFoot}><span className={s.dot}></span>Thoughtful service · Clear communication · Local focus</div></div><div className={s.heroArt} role="img" aria-label="Stylized illustration of a welcoming house"><div className={s.sun}></div><div className={s.house}><div className={s.roof}></div><div className={s.wall}><div className={s.window}></div><div className={s.door}></div></div></div><span className={s.artTag}>CARE FOR THE EVERYDAY</span><div className={s.plant}><i></i><i></i><i></i></div></div></div></div></section>
        <section className={s.section} id="what-we-do"><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>WHAT WE DO</p><h2>Little projects.<br/>Lasting comfort.</h2><p>Reliable help to make your space feel just right, from maintenance to thoughtful updates.</p></div><div className={s.serviceGrid}>{serviceCards}</div></div></section>
        <section className={s.storySection}><div className={s.container}><div className={s.storyGrid}><div className={s.storyIllustration}><span>GOOD HOMES<br/>ARE MADE<br/>WITH CARE.</span></div><div className={s.storyCopy}><p className={s.eyebrow}>A BETTER WAY TO GET THINGS DONE</p><h2>Taking care of home should feel simple.</h2><p>From your first message to the finishing touches, we believe good service means listening, planning clearly and respecting your space.</p><Link href={base+"/services"} className={s.textLink}>See how we work ↗</Link></div></div></div></section>
        <section className={s.section}><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>OUR APPROACH</p><h2>Simple from the first hello.</h2></div><div className={s.processGrid}>{business.promises.map(x=><div className={s.process} key={x.number}><span>{x.number}</span><h3>{x.title}</h3><p>{x.text}</p></div>)}</div></div></section>
      </>}
      {path==="services"&&<><section className={s.innerHero}><div className={s.container}><p className={s.eyebrow}>OUR SERVICES</p><h1>Practical care.<br/>Beautifully done.</h1><p>Every space has its own needs. Start with a conversation about yours.</p></div></section><section className={s.section}><div className={s.container}><div className={s.detailGrid}>{business.services.map(item=><article className={s.detailCard} key={item.number}><span className={s.serviceNumber}>{item.number} / {item.icon}</span><h2>{item.title}</h2><p>{item.text}</p><ul>{item.details.map(detail=><li key={detail}>{detail}</li>)}</ul><Link href={base+"/contact"} className={s.textLink}>Ask about this service ↗</Link></article>)}</div></div></section><section className={s.storySection}><div className={s.container}><div className={s.sectionHeading}><p className={s.eyebrow}>COMMON QUESTIONS</p><h2>Good to know.</h2></div><div className={s.faq}>{business.faqs.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section></>}
      {path==="contact"&&<><section className={s.innerHero}><div className={s.container}><p className={s.eyebrow}>GET IN TOUCH</p><h1>Tell us what<br/>you have in mind.</h1><p>No pressure, just a conversation about what your home needs.</p></div></section><section className={s.section}><div className={s.container}><div className={s.contactGrid}><div><p className={s.eyebrow}>LET'S CONNECT</p><h2>Start here.</h2><p>Tell us a little about your project, your location and the outcome you're hoping for.</p><div className={s.contactInfo}><div><strong>Email</strong><span>{business.email}</span></div><div><strong>Phone</strong><span>{business.phone}</span></div><div><strong>Service area</strong><span>{business.address}</span></div><div><strong>Availability</strong><span>{business.hours}</span></div></div></div><EnquiryForm/></div></div></section></>}
      <section className={s.cta}><div className={s.container}><div className={s.ctaRow}><div><p className={s.eyebrow}>READY WHEN YOU ARE</p><h2>A little care goes a long way.</h2><p>Bring us the task that's been on your mind.</p></div><Link href={base+"/contact"} className={s.lightButton}>Start a conversation ↗</Link></div></div></section>
    </main>
    <footer className={s.footer}><div className={s.container}><div className={s.footerTop}><div><Link className={s.logo} href={base}>{business.name}<span className={s.logoDetail}>{business.descriptor}</span></Link><p>Care for the spaces that matter.</p></div><nav aria-label="Footer navigation"><Link href={base}>Home</Link><Link href={base+"/services"}>Services</Link><Link href={base+"/contact"}>Contact</Link></nav></div><div className={s.footerBottom}><span>© {new Date().getFullYear()} {business.legalName}. Fictional demo business.</span><span>Website concept by <Link href="/">YY Builds</Link></span></div></div></footer>
  </div>;
}
