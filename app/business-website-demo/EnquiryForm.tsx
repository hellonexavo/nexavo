"use client";
import { useState } from "react";
import { business } from "./config";
import s from "./website.module.css";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>(business.services[0].title);
  const [details, setDetails] = useState("");
  const [opened, setOpened] = useState(false);
  const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(business.email);
  const isConfigured = !business.demo && validEmail && !business.email.endsWith("@example.com");
  const subject = `Website enquiry — ${service}`;
  const body = `Name: ${name.trim()}\\nReply email: ${email.trim()}\\nService: ${service}\\n\\nDetails:\\n${details.trim()}`;
  const href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConfigured) return;
    setOpened(true);
    window.location.href = href;
  }
  return <form className={s.form} onSubmit={submit}>
    <div className={s.formGrid}>
      <label>Full name<input required name="name" autoComplete="name" maxLength={100} placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/></label>
      <label>Email address<input required name="email" type="email" autoComplete="email" maxLength={200} placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)}/></label>
    </div>
    <label>What can we help with?<select name="service" value={service} onChange={e=>setService(e.target.value)}>{business.services.map(x=><option key={x.title} value={x.title}>{x.title}</option>)}</select></label>
    <label>Tell us about your project<textarea required name="details" rows={5} minLength={10} maxLength={2000} placeholder="What needs fixing or improving?" value={details} onChange={e=>setDetails(e.target.value)}/></label>
    <button className={s.primaryButton} type="submit" disabled={!isConfigured}>{isConfigured ? "Prepare enquiry ↗" : "Enquiries disabled in demo"}</button>
    <p className={s.formNote}>{isConfigured ? "Your email app will open with the enquiry. Review and send it there; this website does not send or store form data." : "This is a fictional showcase. Contact details are placeholders. Form submission is disabled until the owner sets real contact details and turns off demo mode."}</p>
    {opened && <p role="status" className={s.formNote}>The email has been prepared, not sent. If your email app did not open, <a href={href}>open it again</a>.</p>}
  </form>;
}
