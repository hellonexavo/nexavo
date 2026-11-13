/**
 * YY Builds Business Website — client configuration.
 * Replace this object for each business; the pages, navigation, metadata and form
 * consume these values. All demo contact details are placeholders.
 */
export const business = {
  name: "NORTHLINE",
  descriptor: "HOME SERVICES",
  legalName: "Northline Home Services",
  city: "Haarlem",
  country: "Netherlands",
  tagline: "A better home starts with the little things.",
  description: "Thoughtful maintenance, home repairs and refresh projects from a dependable local team.",
  heroEyebrow: "LOCAL CARE. LASTING RESULTS.",
  heroTitle: "The home you love, looked after.",
  heroText: "From the small repairs you keep postponing to a whole-room refresh, we make it easier to feel good at home.",
  email: "hello@example.com",
  phone: "+31 00 000 0000",
  hours: "Monday – Friday, 09:00 – 17:00",
  address: "Haarlem, Netherlands",
  primaryColor: "#3c5e47",
  accentColor: "#e7ecdf",
  demo: true, // Set to false ONLY after real contact details, service claims & legal policies are verified.
  services: [
    { number: "01", title: "Home maintenance", text: "The small fixes that make a big difference — handled neatly and with care.", icon: "◇", details: ["General household repairs", "Regular upkeep", "Small installation work"] },
    { number: "02", title: "Interior refresh", text: "Thoughtful updates that make familiar rooms feel new again.", icon: "◈", details: ["Painting and touch-ups", "Minor finishing work", "Room refresh projects"] },
    { number: "03", title: "Property care", text: "Practical help to keep your property ready for everyday living.", icon: "✳", details: ["Routine inspections", "Maintenance planning", "Move-in preparation"] },
  ],
  promises: [
    { number: "01", title: "A clear first conversation", text: "Tell us what needs attention. We'll discuss the scope before any work is agreed." },
    { number: "02", title: "A practical plan", text: "Understand the tasks, timing and costs before making a decision." },
    { number: "03", title: "Care in every detail", text: "The goal is simple: a finished result that makes your day easier." },
  ],
  faqs: [
    { question: "Can I ask about a small repair?", answer: "Yes. Describe the task and share the general area. We can discuss the scope before quoting." },
    { question: "Do you provide a quote?", answer: "We aim to agree the scope and estimated cost before any project begins." },
    { question: "Which areas do you cover?", answer: "The coverage area is agreed directly based on the service required." },
  ],
} as const;
