export const products = {
  "starter-website": {
    id: "starter-website",
    name: "Starter Website",
    description: "A professional one-page website that gives a small business a clear, credible online presence.",
    price: 199,
    features: ["Professional one-page website", "Mobile responsive", "Contact / enquiry form", "Basic SEO", "Deployment", "1 revision"],
  },
  "business-website": {
    id: "business-website",
    name: "Business Website",
    description: "A stronger multi-section or small multi-page website built to present the business and generate useful enquiries.",
    price: 349,
    features: ["Multi-section or small multi-page website", "Stronger business presentation", "Enquiry / quote flow", "Mobile responsive", "Basic SEO", "Deployment"],
  },
  "ai-automation": {
    id: "ai-automation",
    name: "AI & Automation",
    description: "A focused AI assistant, lead-capture tool, or simple automation configured around a practical business need.",
    price: 149,
    features: ["AI assistant / chat integration", "Lead capture", "Simple business automation", "Custom integrations depending on project"],
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

const legacyProductAliases: Record<string, ProductId> = {
  "premium-website": "business-website",
};

export function getProduct(productId: string | undefined) {
  if (productId && legacyProductAliases[productId]) return products[legacyProductAliases[productId]];
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
