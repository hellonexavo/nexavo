export const products = {
  "starter-website": {
    id: "starter-website",
    name: "Starter Website",
    category: "Websites",
    description:
      "A focused one-page website for freelancers and local businesses that need a professional online presence.",
    capabilities: [
      "One-page website",
      "Responsive design",
      "Clear call to action",
      "Basic SEO",
    ],
    price: 900,
    cta: "Start with Starter",
    features: [
      "1-page custom website",
      "Up to 5 main sections",
      "Responsive mobile design",
      "Contact CTA or project form",
      "Basic SEO setup",
      "Launch support",
    ],
  },

  "business-website": {
    id: "business-website",
    name: "Business Website",
    category: "Websites",
    description:
      "A complete multi-page website for small businesses that need a stronger and more credible online presence.",
    capabilities: [
      "Multi-page website",
      "Service presentation",
      "Lead forms",
      "Conversion structure",
    ],
    price: 1800,
    cta: "Choose Business",
    features: [
      "Multi-page business website",
      "Custom design",
      "Services and about pages",
      "Contact page and enquiry form",
      "Responsive design",
      "Basic SEO setup",
      "Analytics setup",
      "Launch support",
    ],
  },

  "professional-website": {
    id: "professional-website",
    name: "Professional Website",
    category: "Websites",
    description:
      "A premium custom website for serious service businesses, clinics, and brands that need stronger structure, booking flows, advanced forms, and integrations.",
    capabilities: [
      "Advanced custom design",
      "Booking or request flow",
      "Advanced forms",
      "Integrations",
    ],
    price: 3500,
    cta: "Choose Professional",
    features: [
      "Advanced custom design",
      "Multi-page website",
      "Custom information architecture",
      "Booking or request flow",
      "Advanced forms",
      "Stronger SEO setup",
      "Business integrations",
      "Conversion-focused sections",
      "Performance optimization",
      "Launch support",
      "Up to 2 rounds of revisions",
    ],
  },

  "custom-project": {
    id: "custom-project",
    name: "Custom / AI / Automation",
    category: "Custom",
    description:
      "Tailored websites, AI integrations, automations, multilingual builds, APIs, CRM integrations, and custom business workflows.",
    capabilities: [
      "AI integrations",
      "Automation",
      "Custom development",
      "CRM / API",
    ],
    price: 0,
    cta: "Request custom quote",
    features: [
      "Fully custom architecture",
      "Complex booking systems",
      "Multilingual setup",
      "CRM / API integrations",
      "AI and automation workflows",
      "Custom internal tools",
      "Advanced SEO structure",
      "Analytics and conversion tracking",
      "Tailored launch plan",
    ],
  },
} as const;

export type ProductId = keyof typeof products;
export type Product = (typeof products)[ProductId];

export const productIds = [
  "starter-website",
  "business-website",
  "professional-website",
  "custom-project",
] as const satisfies readonly ProductId[];

export const featuredProductId: ProductId = "professional-website";

export function getProduct(productId: string | undefined) {
  if (!productId || !productIds.includes(productId as ProductId)) return null;
  return products[productId as ProductId];
}
