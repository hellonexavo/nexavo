export type Language = "en" | "nl";
export type ServiceId = "regular" | "deep" | "tenancy" | "office";
export type FrequencyId = "once" | "weekly" | "fortnightly";
export type ExtraId = "windows" | "oven" | "fridge" | "ironing";
export type BookingStatus = "Pending" | "Confirmed" | "Completed";

export type DemoBooking = {
  id: string;
  reference: string;
  customer: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  service: ServiceId;
  frequency: FrequencyId;
  size: number;
  bedrooms: number;
  bathrooms: number;
  extras: ExtraId[];
  date: string;
  time: string;
  price: number;
  status: BookingStatus;
};

// Demo pricing rules are kept together so a business owner can adjust them easily.
export const pricingConfig = {
  services: {
    regular: { base: 34, perSquareMetre: 0.42 },
    deep: { base: 72, perSquareMetre: 0.78 },
    tenancy: { base: 110, perSquareMetre: 0.92 },
    office: { base: 58, perSquareMetre: 0.55 },
  },
  bedroom: 8,
  bathroom: 14,
  extras: { windows: 28, oven: 24, fridge: 16, ironing: 20 },
  frequencyMultiplier: { once: 1, weekly: 0.85, fortnightly: 0.92 },
  minimumPrice: 49,
} as const;

export function calculatePrice(input: {
  service: ServiceId;
  size: number;
  bedrooms: number;
  bathrooms: number;
  extras: ExtraId[];
  frequency: FrequencyId;
}) {
  const service = pricingConfig.services[input.service];
  const extras = input.extras.reduce((total, extra) => total + pricingConfig.extras[extra], 0);
  const subtotal = service.base + input.size * service.perSquareMetre + input.bedrooms * pricingConfig.bedroom + input.bathrooms * pricingConfig.bathroom + extras;
  return Math.round(Math.max(pricingConfig.minimumPrice, subtotal * pricingConfig.frequencyMultiplier[input.frequency]));
}

export const serviceIds: ServiceId[] = ["regular", "deep", "tenancy", "office"];
export const extraIds: ExtraId[] = ["windows", "oven", "fridge", "ironing"];
export const frequencyIds: FrequencyId[] = ["once", "weekly", "fortnightly"];
export const timeSlots = ["08:00–10:30", "10:30–13:00", "13:30–16:00", "16:00–18:30"];

export const copy = {
  en: {
    demo: "Portfolio demo · No real bookings or payments are processed",
    skip: "Skip to main content",
    customer: "Book a cleaning",
    dashboard: "Owner dashboard",
    back: "Back to YY Builds",
    eyebrow: "Cleaning, made refreshingly simple",
    hero: "A spotless space, booked in minutes.",
    intro: "Choose a service, get an instant estimate, and build a complete demo booking with clear pricing.",
    start: "Get my estimate",
    ownerNote: "Portfolio dashboard demo — no login or live business data",
    servicesTitle: "What can we clean for you?",
    servicesIntro: "Select the service that best matches your space. You can adjust every detail next.",
    regular: "Regular home cleaning",
    regularText: "Reliable recurring care for a tidy, comfortable home.",
    deep: "Deep cleaning",
    deepText: "A detailed reset for kitchens, bathrooms, and overlooked areas.",
    tenancy: "End-of-tenancy cleaning",
    tenancyText: "A thorough clean designed for moving day and handover.",
    office: "Office cleaning",
    officeText: "Flexible cleaning for productive, welcoming workplaces.",
    selected: "Selected",
    choose: "Choose service",
    quote: "Build your instant estimate",
    quoteIntro: "Prices are illustrative and update as you make changes.",
    size: "Property size",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    extras: "Optional extras",
    windows: "Inside windows",
    oven: "Oven cleaning",
    fridge: "Refrigerator",
    ironing: "Ironing",
    frequency: "Frequency",
    once: "One-time",
    weekly: "Weekly",
    fortnightly: "Every two weeks",
    estimate: "Estimated total",
    estimateNote: "Demo estimate · No payment required",
    schedule: "Choose a date and time",
    date: "Preferred date",
    time: "Available time",
    details: "Your details",
    fullName: "Full name",
    email: "Email address",
    phone: "Phone number",
    address: "Cleaning address",
    notes: "Optional notes",
    notesHint: "Access instructions, pets, or anything helpful…",
    summary: "Booking summary",
    editHint: "Review the demo request before confirming.",
    confirm: "Confirm demo booking",
    privacy: "Stored only in this browser. Nothing is sent externally.",
    required: "Please complete all required fields.",
    invalidEmail: "Enter a valid email address.",
    invalidPhone: "Enter a valid phone number.",
    success: "Your demo booking is ready.",
    successText: "This is a portfolio demonstration. No cleaning visit was submitted and no payment was taken.",
    reference: "Demo booking reference",
    viewDashboard: "View in owner dashboard",
    reset: "Reset demo",
    today: "Today’s bookings",
    pending: "Pending requests",
    revenue: "Estimated revenue",
    filters: "Filter bookings",
    all: "All",
    confirmed: "Confirmed",
    completed: "Completed",
    booking: "Booking",
    service: "Service",
    appointment: "Appointment",
    amount: "Estimate",
    status: "Status",
    noBookings: "No demo bookings match this filter.",
    footerConcept: "Nexavo Booking — portfolio concept",
    footerDisclaimer: "No real bookings or payments are processed",
    demoAccess: "Demo access only",
    pendingStatus: "Pending",
    statusChange: "Change demo booking status",
  },
  nl: {
    demo: "Portfoliodemo · Er worden geen echte boekingen of betalingen verwerkt",
    skip: "Ga naar de hoofdinhoud",
    customer: "Schoonmaak boeken",
    dashboard: "Dashboard eigenaar",
    back: "Terug naar YY Builds",
    eyebrow: "Schoonmaak, verrassend eenvoudig",
    hero: "Een stralende ruimte, geboekt in minuten.",
    intro: "Kies een dienst, bekijk direct de prijsindicatie en stel een volledige demoboeking samen.",
    start: "Bereken mijn prijs",
    ownerNote: "Portfolio-dashboarddemo — geen login of live bedrijfsgegevens",
    servicesTitle: "Wat mogen we voor je schoonmaken?",
    servicesIntro: "Kies de dienst die het beste bij je ruimte past. Daarna kun je elk detail aanpassen.",
    regular: "Reguliere huisschoonmaak",
    regularText: "Betrouwbare, terugkerende zorg voor een prettig en opgeruimd huis.",
    deep: "Grondige schoonmaak",
    deepText: "Een gedetailleerde opfrisbeurt voor keuken, badkamer en vergeten hoeken.",
    tenancy: "Eindschoonmaak verhuizing",
    tenancyText: "Een grondige schoonmaak voor de verhuisdag en oplevering.",
    office: "Kantoorschoonmaak",
    officeText: "Flexibele schoonmaak voor een productieve, gastvrije werkplek.",
    selected: "Geselecteerd",
    choose: "Kies dienst",
    quote: "Stel je directe prijsindicatie samen",
    quoteIntro: "Prijzen zijn indicatief en veranderen direct met je keuzes.",
    size: "Oppervlakte",
    bedrooms: "Slaapkamers",
    bathrooms: "Badkamers",
    extras: "Optionele extra’s",
    windows: "Ramen binnenzijde",
    oven: "Ovenreiniging",
    fridge: "Koelkast",
    ironing: "Strijkwerk",
    frequency: "Frequentie",
    once: "Eenmalig",
    weekly: "Wekelijks",
    fortnightly: "Om de twee weken",
    estimate: "Geschat totaal",
    estimateNote: "Demo-indicatie · Geen betaling nodig",
    schedule: "Kies een datum en tijd",
    date: "Voorkeursdatum",
    time: "Beschikbare tijd",
    details: "Jouw gegevens",
    fullName: "Volledige naam",
    email: "E-mailadres",
    phone: "Telefoonnummer",
    address: "Schoonmaakadres",
    notes: "Optionele notities",
    notesHint: "Toegang, huisdieren of andere nuttige informatie…",
    summary: "Boekingsoverzicht",
    editHint: "Controleer de demo-aanvraag voordat je bevestigt.",
    confirm: "Bevestig demoboeking",
    privacy: "Alleen opgeslagen in deze browser. Niets wordt extern verzonden.",
    required: "Vul alle verplichte velden in.",
    invalidEmail: "Vul een geldig e-mailadres in.",
    invalidPhone: "Vul een geldig telefoonnummer in.",
    success: "Je demoboeking staat klaar.",
    successText: "Dit is een portfoliodemonstratie. Er is geen schoonmaakbezoek aangevraagd en geen betaling gedaan.",
    reference: "Referentie demoboeking",
    viewDashboard: "Bekijk in dashboard",
    reset: "Demo resetten",
    today: "Boekingen vandaag",
    pending: "Openstaande aanvragen",
    revenue: "Geschatte omzet",
    filters: "Boekingen filteren",
    all: "Alle",
    confirmed: "Bevestigd",
    completed: "Voltooid",
    booking: "Boeking",
    service: "Dienst",
    appointment: "Afspraak",
    amount: "Indicatie",
    status: "Status",
    noBookings: "Geen demoboekingen voor dit filter.",
    footerConcept: "Nexavo Booking — portfolioconcept",
    footerDisclaimer: "Er worden geen echte boekingen of betalingen verwerkt",
    demoAccess: "Alleen demotoegang",
    pendingStatus: "Openstaand",
    statusChange: "Status van demoboeking wijzigen",
  },
} as const;

export const sampleBookings: DemoBooking[] = [
  { id: "sample-1", reference: "NB-2608-A14", customer: "Sophie de Vries", email: "sophie@example.test", phone: "+31 6 1234 5678", address: "Keizersgracht 120, Amsterdam", notes: "Please ring the upstairs bell.", service: "regular", frequency: "weekly", size: 86, bedrooms: 2, bathrooms: 1, extras: ["ironing"], date: "2026-08-08", time: "08:00–10:30", price: 102, status: "Confirmed" },
  { id: "sample-2", reference: "NB-2608-C82", customer: "Milan Jansen", email: "milan@example.test", phone: "+31 6 8765 4321", address: "Witte de Withstraat 45, Rotterdam", notes: "Key collection needs arranging.", service: "tenancy", frequency: "once", size: 112, bedrooms: 3, bathrooms: 2, extras: ["windows", "oven", "fridge"], date: "2026-08-08", time: "13:30–16:00", price: 333, status: "Pending" },
  { id: "sample-3", reference: "NB-2607-F31", customer: "North Studio", email: "studio@example.test", phone: "+31 20 555 0182", address: "Wibautstraat 88, Amsterdam", notes: "Reception can provide access.", service: "office", frequency: "fortnightly", size: 145, bedrooms: 0, bathrooms: 2, extras: ["windows"], date: "2026-08-07", time: "16:00–18:30", price: 179, status: "Completed" },
  { id: "sample-4", reference: "NB-2609-B09", customer: "Emma Bakker", email: "emma@example.test", phone: "+31 6 2233 4455", address: "Oudegracht 214, Utrecht", notes: "Small dog at home.", service: "deep", frequency: "once", size: 74, bedrooms: 2, bathrooms: 1, extras: ["oven"], date: "2026-08-10", time: "10:30–13:00", price: 184, status: "Pending" },
];
