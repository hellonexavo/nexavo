export const clinicBasePath = "/portfolio/modern-dental-care";

export const navigation = [
  ["Behandelingen", `${clinicBasePath}/behandelingen`],
  ["Praktijken", `${clinicBasePath}#locations`],
  ["Over ons", `${clinicBasePath}/over-ons`],
  ["Tarieven", `${clinicBasePath}/tarieven`],
  ["FAQ", `${clinicBasePath}/faq`],
] as const;

export const locations = [
  {
    id: "oost",
    name: "Amsterdam Oost",
    address: "Domselaerstraat 82, 84, 86",
    postalCode: "1093 MA Amsterdam",
    phone: "020 694 19 34",
    phoneHref: "tel:0206941934",
    hours: "Ma–Do · 09:00–16:30",
    href: `${clinicBasePath}/amsterdam-oost`,
    description: "Een rustige praktijk voor persoonlijke tandheelkundige zorg in Amsterdam Oost.",
  },
  {
    id: "west",
    name: "Amsterdam West",
    address: "Slotermeerlaan 69",
    postalCode: "1064 HA Amsterdam",
    phone: "020 447 3489",
    phoneHref: "tel:0204473489",
    hours: "Neem contact op voor actuele openingstijden",
    href: `${clinicBasePath}/amsterdam-west`,
    description: "Toegankelijke tandheelkundige zorg met duidelijke communicatie in Amsterdam West.",
  },
  {
    id: "junior",
    name: "MDC Junior",
    address: "H.R. Holststraat 9-10",
    postalCode: "1064 TS Amsterdam",
    phone: "020 447 3489",
    phoneHref: "tel:0204473489",
    hours: "Neem contact op voor actuele openingstijden",
    href: `${clinicBasePath}/mdc-junior`,
    description: "Een rustige, positieve omgeving waar kinderen vertrouwd raken met mondzorg.",
  },
] as const;

export const treatments = [
  { slug: "controle", title: "Periodieke controle", category: "Preventie", text: "Regelmatige aandacht voor een gezond gebit en vroege signalering.", href: `${clinicBasePath}/behandelingen/controle` },
  { slug: "gebitsreiniging", title: "Gebitsreiniging", category: "Preventie", text: "Professionele reiniging met aandacht voor gezond tandvlees en een frisse mond.", href: `${clinicBasePath}/behandelingen/gebitsreiniging` },
  { slug: "mondhygienist", title: "Mondhygiënist", category: "Preventie", text: "Gerichte begeleiding bij mondhygiëne, tandvlees en preventie.", href: `${clinicBasePath}/behandelingen/mondhygienist` },
  { slug: "implantaten", title: "Implantaten", category: "Herstel", text: "Een zorgvuldig traject wanneer één of meerdere tanden ontbreken.", href: `${clinicBasePath}/implantaten` },
  { slug: "orthodontie", title: "Orthodontie", category: "Correctie", text: "Oplossingen voor een rechte, functionele en zelfverzekerde glimlach.", href: `${clinicBasePath}/behandelingen/orthodontie` },
  { slug: "kronen-bruggen", title: "Kronen & bruggen", category: "Herstel", text: "Herstel van beschadigde of ontbrekende tanden met aandacht voor functie en uitstraling.", href: `${clinicBasePath}/behandelingen/kronen-bruggen` },
  { slug: "facings", title: "Facings", category: "Esthetiek", text: "Subtiele verbetering van vorm, kleur en uitstraling na persoonlijk advies.", href: `${clinicBasePath}/behandelingen/facings` },
  { slug: "tanden-bleken", title: "Tanden bleken", category: "Esthetiek", text: "Een professionele aanpak met aandacht voor veiligheid en een natuurlijk resultaat.", href: `${clinicBasePath}/behandelingen/tanden-bleken` },
  { slug: "tandvullingen", title: "Tandvullingen", category: "Herstel", text: "Duurzaam herstel met aandacht voor comfort en een natuurlijke uitstraling.", href: `${clinicBasePath}/behandelingen/tandvullingen` },
  { slug: "wortelkanaalbehandeling", title: "Wortelkanaalbehandeling", category: "Herstel", text: "Gerichte behandeling met als doel uw eigen tand te behouden.", href: `${clinicBasePath}/behandelingen/wortelkanaalbehandeling` },
  { slug: "kunstgebit", title: "Kunstgebit", category: "Herstel", text: "Persoonlijke prothetische oplossingen voor comfort en vertrouwen.", href: `${clinicBasePath}/behandelingen/kunstgebit` },
  { slug: "spoed", title: "Spoed tandarts", category: "Directe hulp", text: "Neem bij acute pijn, zwelling of trauma direct telefonisch contact op.", href: `${clinicBasePath}/contact#spoed` },
  { slug: "mdc-junior", title: "MDC Junior", category: "Kinderen", text: "Een positieve, rustige benadering voor kinderen en hun ouders.", href: `${clinicBasePath}/mdc-junior` },
] as const;

export const faqs = [
  { category: "Afspraken", question: "Hoe vraag ik een afspraak aan?", answer: "U kunt online een afspraak aanvragen of rechtstreeks contact opnemen met de praktijk van uw voorkeur. De praktijk bevestigt de afspraak persoonlijk." },
  { category: "Afspraken", question: "Kan ik zelf een praktijk kiezen?", answer: "Ja. Modern Dental Care heeft praktijken in Amsterdam Oost, Amsterdam West en MDC Junior. Bekijk de locatiegegevens om de praktijk te kiezen die het beste bij u past." },
  { category: "Nieuwe patiënten", question: "Kan ik mij inschrijven als nieuwe patiënt?", answer: "De volgende stap voor nieuwe patiënten is een afspraak aanvragen. Het team bespreekt daarna persoonlijk wat nodig is en hoe het traject verdergaat." },
  { category: "Behandelingen", question: "Welke behandeling past bij mijn vraag?", answer: "Dat hangt af van uw situatie. Een controle of eerste gesprek helpt om uw vraag te begrijpen en samen een passende vervolgstap te bepalen." },
  { category: "Kosten", question: "Waar vind ik informatie over tarieven?", answer: "Tarieven hangen af van de behandeling en uw persoonlijke situatie. Bespreek een behandelplan en de verwachte kosten vooraf met de praktijk." },
  { category: "Spoed", question: "Wat moet ik doen bij acute tandpijn?", answer: "Neem zo snel mogelijk telefonisch contact op met de praktijk. Bij ernstige of snel toenemende klachten is directe telefonische beoordeling belangrijk." },
  { category: "Kinderen", question: "Hoe werkt een eerste bezoek voor mijn kind?", answer: "Bij MDC Junior staat rustig kennismaken centraal. Het team neemt de tijd om uit te leggen wat er gebeurt en een positieve routine op te bouwen." },
] as const;

export const trustPoints = [
  ["Persoonlijke aandacht", "Uw situatie, vragen en wensen staan centraal."],
  ["Duidelijke communicatie", "U weet wat u kunt verwachten voordat een traject begint."],
  ["Preventie als basis", "Regelmatige zorg helpt om uw mondgezondheid actief te onderhouden."],
  ["Zorg dichtbij", "Kies uit meerdere praktijken in Amsterdam."],
] as const;

export const relatedTreatmentSlugs = ["gebitsreiniging", "mondhygienist", "implantaten"] as const;
