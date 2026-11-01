"use client";
import { useState } from "react";
import { services, projectEmail } from "../lib/services";
import s from "../studio.module.css";
export default function ProjectBrief({
  initialService,
}: {
  initialService: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    services.some((item) => item.id === initialService)
      ? initialService
      : "website",
  );
  const [url, setUrl] = useState("");
  const [budget, setBudget] = useState("Let’s discuss");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  const chosen =
    services.find((item) => item.id === service)?.title || "Project enquiry";
  const body = `Name: ${name.trim()}\nReply email: ${email.trim()}\nService: ${chosen}\nExisting website: ${url.trim() || "Not supplied"}\nBudget: ${budget}\n\nWhat I need:\n${message.trim()}`;
  const href = `mailto:${projectEmail}?subject=${encodeURIComponent(`YY Builds enquiry — ${chosen}`)}&body=${encodeURIComponent(body)}`;
  return (
    <form
      className={s.briefForm}
      onSubmit={(event) => {
        event.preventDefault();
        setPrepared(true);
        window.location.href = href;
      }}
    >
      <h2>Start with a short brief.</h2>
      <p>
        This form prepares an email in your mail app. Review and send it there.
      </p>
      <div className={s.formFields}>
        <label>
          Your name
          <input
            autoComplete="name"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Reply email
          <input
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@business.com"
          />
        </label>
      </div>
      <label>
        What can I help with?
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((item) => (
            <option value={item.id} key={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <div className={s.formFields}>
        <label>
          Existing website (optional)
          <input
            type="url"
            autoComplete="url"
            maxLength={250}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourbusiness.com"
          />
        </label>
        <label>
          Indicative budget
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            {[
              "Let’s discuss",
              "Under €200",
              "€200–€600",
              "€600–€1,500",
              "€1,500+",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        What needs to work better?
        <textarea
          required
          minLength={10}
          maxLength={1500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your business and what you would like to improve."
        />
      </label>
      <button type="submit" className={s.darkButton}>
        Prepare my enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className={s.formHint}>
        Your mail app opens with the details above. This website does not submit
        or store this brief. Please leave out passwords and sensitive customer
        data.
      </p>
      {prepared && (
        <div role="status">
          <p className={s.formHint}>
            Email prepared. It has not been sent by this website. If your mail
            app did not open, use the link below or email us directly.
          </p>
          <a className={s.emailFallback} href={href}>
            Open the prepared email again ↗
          </a>
        </div>
      )}
    </form>
  );
}
