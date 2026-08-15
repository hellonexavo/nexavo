export const products = {
  "starter-website": {
    id: "starter-website",
    name: "Starter Website",
    description: "A focused one-page website that gives a small business a polished, credible online presence.",
    price: 199,
    features: ["One-page business website", "Mobile responsive", "Contact / enquiry form", "Basic SEO setup", "Deployment included", "1 revision"],
  },
  "business-website": {
    id: "business-website",
    name: "Business Website",
    description: "A complete multi-page website designed to generate enquiries and make services easy to understand.",
    price: 349,
    features: ["Up to 5 pages", "Booking or enquiry system", "Service / product catalogue", "WhatsApp or email integration", "SEO structure", "2 revisions"],
  },
  "premium-website": {
    id: "premium-website",
    name: "Premium Website",
    description: "A tailored business website with advanced presentation, interactions, and conversion-focused functionality.",
    price: 499,
    features: ["Custom business website", "Advanced UI and animations", "Conversion-focused page flows", "Custom integrations", "Advanced SEO structure", "Priority support"],
  },
  "booking-automation": {
    id: "booking-automation",
    name: "Booking / Automation Setup",
    description: "A practical booking, enquiry, or automation system configured around the way your business operates.",
    price: 499,
    features: ["Custom booking flow", "Service configuration", "Email or WhatsApp hand-off", "Automation setup", "Mobile-first interface", "Launch support"],
  },
  "custom-project-deposit": {
    id: "custom-project-deposit",
    name: "Custom Project Deposit",
    description: "A sandbox demonstration deposit for a custom YY Builds project after scope and timing are agreed.",
    price: 99,
    features: ["Applied to an agreed custom project", "Scope confirmation before work", "Clear delivery milestones", "Direct project communication"],
  },
} as const;

export type ProductId = keyof typeof products;
export type Product = (typeof products)[ProductId];

export const productIds = Object.keys(products) as ProductId[];

export function getProduct(productId: string | undefined) {
  if (!productId || !productIds.includes(productId as ProductId)) return null;
  return products[productId as ProductId];
}

export function formatEuro(price: number) {
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}
