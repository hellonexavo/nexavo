export const products = {
  "starter-website": {
    id: "starter-website",
    name: "Starter Website",
    category: "Websites",
    description: "A focused professional website for freelancers and local businesses that need a clear online presence.",
    capabilities: ["One-page website", "Responsive design", "Clear call to action", "Basic SEO"],
    price: 199,
    cta: "Start a website",
    features: ["Focused landing page or one-page website", "Responsive design", "Clear call to action", "Contact or project form", "Basic SEO setup"],
  },
  "business-website": {
    id: "business-website",
    name: "Business Website",
    category: "Websites",
    description: "A stronger website designed around your services, credibility, and lead generation.",
    capabilities: ["Multiple sections", "Service presentation", "Lead forms", "Conversion structure"],
    price: 399,
    cta: "Build my website",
    features: ["Larger business website", "Multiple sections or pages where appropriate", "Services and work presentation", "Lead forms", "Conversion-focused structure", "Integrations scoped where appropriate"],
  },
  "business-automation": {
    id: "business-automation",
    name: "Business Automation",
    category: "AI & Automation",
    description: "Connect leads, emails, notifications, and follow-ups into one practical business workflow.",
    capabilities: ["Lead capture", "Email workflows", "Lead routing", "Business integrations"],
    price: 349,
    cta: "Automate my business",
    features: ["Website lead capture", "Owner and customer notifications", "Lead routing and follow-ups", "Forms connected to business workflows", "Google Sheets, CRM, or email integrations where appropriate"],
  },
  "ai-assistant-automation": {
    id: "ai-assistant-automation",
    name: "AI Assistant & Automation",
    category: "AI & Automation",
    description: "A premium AI assistant and workflow designed around customer questions, qualification, and routing.",
    capabilities: ["Website assistant", "FAQ support", "Lead qualification", "AI workflows"],
    price: 499,
    cta: "Explore AI automation",
    features: ["Website AI assistant", "Customer FAQ assistance", "Lead qualification and information capture", "Customer service routing", "AI-assisted workflows", "Custom integrations scoped where appropriate"],
  },
} as const;

export type ProductId = keyof typeof products;
export type Product = (typeof products)[ProductId];

export const productIds = [
  "starter-website",
  "business-website",
  "business-automation",
  "ai-assistant-automation",
] as const satisfies readonly ProductId[];

export const featuredProductId: ProductId = "business-automation";

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
