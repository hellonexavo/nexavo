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
  "custom-project": {
    id: "custom-project",
    name: "Custom Project",
    description: "A tailored website, booking system, AI tool, or automation project scoped around your business.",
    price: null,
    features: ["Personal scope recommendation", "Clear project quotation", "Custom functionality", "Agreed delivery milestones", "Direct project communication"],
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
