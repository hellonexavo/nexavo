"use client";

import { useMemo, useState } from "react";

type Language = "nl" | "en";

const locations = [
  { id: "oost", name: "Amsterdam Oost", address: "Domselaerstraat 82, 84, 86" },
  { id: "west", name: "Amsterdam West", address: "Slotermeerlaan 69" },
  { id: "junior", name: "MDC Junior", address: "H.R. Holststraat 9-10" },
];

const treatments = [
  "Periodieke controle",
  "Gebitsreiniging",
  "Mondhygiënist",
  "Tandvullingen",
  "Wortelkanaalbehandeling",
  "Implantaten",
  "Orthodontie / beugels",
  "Kronen & bruggen",
  "Kunstgebit / prothese",
  "Tanden bleken",
  "Facings",
  "Spoed / pijnklacht",
  "Anders",
];

const englishTreatments = [
  "Routine check-up", "Dental cleaning", "Dental hygienist", "Fillings", "Root canal treatment", "Implants", "Orthodontics / braces", "Crowns & bridges", "Dentures / prosthetics", "Teeth whitening", "Veneers", "Emergency / toothache", "Other",
];

const steps = ["Locatie", "Behandeling", "Voorkeur", "Gegevens"];

export default function BookingFlow({ language = "nl" }: { language?: Language }) {
  const isEnglish = language === "en";
  const activeTreatments = isEnglish ? englishTreatments : treatments;
  const activeSteps = isEnglish ? ["Location", "Treatment", "Preference", "Details"] : steps;
  const t = isEnglish
    ? {
        complete: "Demo complete", ready: "Your request is ready.", message: "In a real version, this request would be sent securely to the practice. This demo does not send patient data.", practice: "Practice", treatment: "Treatment", noDate: "No date selected", newRequest: "New demo request", chooseLocation: "Choose your location", locationHint: "Select the practice that suits you best.", chooseTreatment: "What would you like to visit us for?", treatmentHint: "Choose the treatment that best matches your question.", chooseTime: "When would suit you best?", timeHint: "Choose a preferred date and time of day. The practice will confirm the appointment later.", desiredDate: "Preferred date", daypart: "Time of day", morning: "Morning", afternoon: "Afternoon", noPreference: "No preference", details: "Your details", detailsHint: "For this demo interface only. Nothing is sent or stored.", name: "Name", phone: "Phone number", email: "Email address", note: "Note", optional: "Optional", namePlaceholder: "Your name", phonePlaceholder: "+31 6 12345678", emailPlaceholder: "name@email.com", back: "← Back", next: "Continue →", finish: "Complete demo request →", disclaimer: "Concept demo · No patient data is sent or stored.",
      }
    : {
        complete: "Demo voltooid", ready: "Uw aanvraag staat klaar.", message: "In de echte versie wordt deze aanvraag veilig naar de praktijk verzonden. Deze demo verstuurt geen patiëntgegevens.", practice: "Praktijk", treatment: "Behandeling", noDate: "Geen datum gekozen", newRequest: "Nieuwe demo-aanvraag", chooseLocation: "Kies uw locatie", locationHint: "Selecteer de praktijk die het beste bij u past.", chooseTreatment: "Waarvoor wilt u langskomen?", treatmentHint: "Kies de behandeling die het beste aansluit bij uw vraag.", chooseTime: "Wanneer komt het u het beste uit?", timeHint: "Kies een voorkeursdatum en dagdeel. De praktijk bevestigt de afspraak later.", desiredDate: "Gewenste datum", daypart: "Voorkeur dagdeel", morning: "Ochtend", afternoon: "Middag", noPreference: "Geen voorkeur", details: "Uw gegevens", detailsHint: "Alleen voor de demo-interface. Er wordt niets verzonden of opgeslagen.", name: "Naam", phone: "Telefoonnummer", email: "E-mailadres", note: "Opmerking", optional: "Optioneel", namePlaceholder: "Uw naam", phonePlaceholder: "06 12345678", emailPlaceholder: "naam@email.nl", back: "← Terug", next: "Verder →", finish: "Demo-aanvraag afronden →", disclaimer: "Concept demo · Geen patiëntgegevens worden verzonden of opgeslagen.",
      };
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState("oost");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [daypart, setDaypart] = useState(isEnglish ? "No preference" : "Geen voorkeur");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [done, setDone] = useState(false);

  const selectedLocation = useMemo(
    () => locations.find((item) => item.id === location) ?? locations[0],
    [location],
  );

  const canContinue =
    step === 0 ||
    (step === 1 && treatment.length > 0) ||
    (step === 2 && (date.length > 0 || daypart === t.noPreference)) ||
    (step === 3 && name.trim().length > 1 && email.includes("@"));

  function next() {
    if (!canContinue) return;
    setStep((current) => Math.min(current + 1, 3));
  }

  function back() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function finish() {
    if (!canContinue) return;
    setDone(true);
  }

  function reset() {
    setStep(0);
    setLocation("oost");
    setTreatment("");
    setDate("");
    setDaypart(t.noPreference);
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-[34px] border border-[#173f39]/10 bg-white p-7 shadow-[0_30px_100px_rgba(23,63,57,0.08)] sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f0eb] text-2xl text-[#315f55]">
          ✓
        </div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c9189]">
          {t.complete}
        </p>
        <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
          {t.ready}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#6d7d78]">
          {t.message}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#f5f6f1] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9894]">
              {t.practice}
            </p>
            <p className="mt-2 text-sm font-semibold">{selectedLocation.name}</p>
            <p className="mt-1 text-xs text-[#74847f]">{selectedLocation.address}</p>
          </div>
          <div className="rounded-2xl bg-[#f5f6f1] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9894]">
              {t.treatment}
            </p>
            <p className="mt-2 text-sm font-semibold">{treatment}</p>
            <p className="mt-1 text-xs text-[#74847f]">
              {date || t.noDate} · {daypart}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full border border-[#173f39]/15 bg-white px-6 py-3 text-sm font-semibold text-[#173f39]"
        >
          {t.newRequest}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[34px] border border-[#173f39]/10 bg-white p-5 shadow-[0_30px_100px_rgba(23,63,57,0.08)] sm:p-8">
      <div className="grid gap-2 sm:grid-cols-4">
        {activeSteps.map((label, index) => {
          const active = index === step;
          const complete = index < step;
          return (
            <button
              key={label}
              type="button"
              onClick={() => complete && setStep(index)}
              className={`rounded-2xl p-4 text-left transition ${
                active
                  ? "bg-[#173f39] text-white"
                  : complete
                    ? "bg-[#e7f0eb] text-[#173f39]"
                    : "bg-[#f3f4ef] text-[#526963]"
              }`}
            >
              <p className={`text-[10px] font-semibold ${active ? "text-white/55" : "text-[#8a9a95]"}`}>
                0{index + 1}
              </p>
              <p className="mt-2 text-xs font-semibold">{label}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 min-h-[390px]">
        {step === 0 && (
          <div>
            <p className="text-sm font-semibold">{t.chooseLocation}</p>
            <p className="mt-2 text-xs leading-5 text-[#7c8b86]">{t.locationHint}</p>
            <div className="mt-5 grid gap-3">
              {locations.map((item) => {
                const selected = item.id === location;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLocation(item.id)}
                    className={`flex w-full items-center justify-between rounded-[20px] border p-5 text-left transition ${
                      selected
                        ? "border-[#315f55] bg-[#edf3ef]"
                        : "border-[#173f39]/10 bg-[#fafaf7] hover:border-[#315f55]/35"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="mt-1 text-xs text-[#71827d]">{item.address}</p>
                    </div>
                    <span
                      className={`h-5 w-5 rounded-full border-4 ${
                        selected ? "border-[#315f55] bg-white" : "border-[#d7ddda] bg-white"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="text-sm font-semibold">{t.chooseTreatment}</p>
            <p className="mt-2 text-xs leading-5 text-[#7c8b86]">{t.treatmentHint}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {activeTreatments.map((item) => {
                const selected = item === treatment;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTreatment(item)}
                    className={`rounded-[18px] border p-4 text-left text-sm font-medium transition ${
                      selected
                        ? "border-[#315f55] bg-[#edf3ef] text-[#173f39]"
                        : "border-[#173f39]/10 bg-[#fafaf7] hover:border-[#315f55]/35"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm font-semibold">{t.chooseTime}</p>
            <p className="mt-2 text-xs leading-5 text-[#7c8b86]">{t.timeHint}</p>
            <label className="mt-6 block">
              <span className="text-xs font-semibold text-[#516761]">{t.desiredDate}</span>
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="mt-2 w-full rounded-[18px] border border-[#173f39]/10 bg-[#fafaf7] px-4 py-4 text-sm outline-none transition focus:border-[#315f55]" />
            </label>
            <div className="mt-6">
              <p className="text-xs font-semibold text-[#516761]">{t.daypart}</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[t.morning, t.afternoon, t.noPreference].map((item) => (
                  <button key={item} type="button" onClick={() => setDaypart(item)} className={`rounded-[18px] border p-4 text-sm font-semibold transition ${daypart === item ? "border-[#315f55] bg-[#edf3ef]" : "border-[#173f39]/10 bg-[#fafaf7]"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="text-sm font-semibold">{t.details}</p>
            <p className="mt-2 text-xs leading-5 text-[#7c8b86]">{t.detailsHint}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label>
                <span className="text-xs font-semibold text-[#516761]">{t.name} *</span>
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder={t.namePlaceholder} className="mt-2 w-full rounded-[18px] border border-[#173f39]/10 bg-[#fafaf7] px-4 py-4 text-sm outline-none transition focus:border-[#315f55]" />
              </label>
              <label>
                <span className="text-xs font-semibold text-[#516761]">{t.phone}</span>
                <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder={t.phonePlaceholder} className="mt-2 w-full rounded-[18px] border border-[#173f39]/10 bg-[#fafaf7] px-4 py-4 text-sm outline-none transition focus:border-[#315f55]" />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold text-[#516761]">{t.email} *</span>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t.emailPlaceholder} className="mt-2 w-full rounded-[18px] border border-[#173f39]/10 bg-[#fafaf7] px-4 py-4 text-sm outline-none transition focus:border-[#315f55]" />
              </label>
              <label className="sm:col-span-2">
                <span className="text-xs font-semibold text-[#516761]">{t.note}</span>
                <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder={t.optional} rows={3} className="mt-2 w-full resize-none rounded-[18px] border border-[#173f39]/10 bg-[#fafaf7] px-4 py-4 text-sm outline-none transition focus:border-[#315f55]" />
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[#173f39]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="rounded-full border border-[#173f39]/15 px-6 py-3 text-sm font-semibold text-[#173f39] disabled:cursor-not-allowed disabled:opacity-30"
          >
            {t.back}
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canContinue}
            className="rounded-full bg-[#173f39] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24584f] disabled:cursor-not-allowed disabled:opacity-35"
          >
                {t.next}
          </button>
        ) : (
          <button
            type="button"
            onClick={finish}
            disabled={!canContinue}
            className="rounded-full bg-[#173f39] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#24584f] disabled:cursor-not-allowed disabled:opacity-35"
          >
            {t.finish}
            </button>
        )}
      </div>

      <p className="mt-4 text-center text-[10px] leading-5 text-[#8a9894]">
        {t.disclaimer}
      </p>
    </div>
  );
}
