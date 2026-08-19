export const products = {
  "starter-website": {
    id: "starter-website",
    name: "Starter Website",
    category: "Websites",
    description: "A clear one-page website for freelancers and local businesses that need a professional online presence.",
    capabilities: ["One-page website", "Responsive design", "Clear call to action", "Basic SEO"],
    price: 299,
    cta: "Start a website",
    features: ["Focused landing page or one-page website", "Responsive design", "Clear call to action", "Contact or project form", "Basic SEO setup"],
  },
  "business-website": {
    id: "business-website",
    name: "Business Website",
    category: "Websites",
    description: "A larger website that presents your services, builds trust, and turns more visits into enquiries.",
    capabilities: ["Multiple sections", "Service presentation", "Lead forms", "Conversion structure"],
    price: 599,
    cta: "Build my website",
    features: ["Larger business website", "Multiple sections or pages where appropriate", "Services and work presentation", "Lead forms", "Integrations scoped where appropriate"],
  },
  "booking-website": {
    id: "booking-website",
    name: "Booking Website",
    category: "Websites",
    description: "A customized booking website for appointment-based service businesses.",
    capabilities: ["Service presentation", "Booking journey", "Customer forms", "Responsive design"],
    price: 699,
    cta: "Build my booking site",
    features: ["Customized booking experience", "Service and pricing presentation", "Responsive customer journey", "Contact or booking form", "Business-specific configuration"],
  },
  "ecommerce-store": {
    id: "ecommerce-store",
    name: "E-commerce / Online Store",
    category: "Websites",
    description: "A professional online storefront for businesses ready to sell products online.",
    capabilities: ["Product presentation", "Store structure", "Checkout journey", "Responsive design"],
    price: 999,
    cta: "Build my online store",
    features: ["Responsive online store", "Product presentation", "Core store setup", "Checkout journey", "Basic SEO structure"],
  },
  "business-automation": {
    id: "business-automation",
    name: "Custom / AI / Automation",
    category: "AI & Automation",
    description: "Custom systems, AI integrations, automation, internal tools, and workflows scoped around your business.",
    capabilities: ["AI integrations", "Automation", "Internal tools", "Custom development"],
    price: 0,
    cta: "Tell us what you need",
    features: ["AI integrations", "Business automation", "Custom business workflows", "Internal tools", "Custom development scoped to your needs"],
  },
  "ai-assistant-automation": {
    id: "ai-assistant-automation",
    name: "AI Assistant & Automation",
    category: "AI & Automation",
    description: "Help visitors get answers, share useful details, and reach the right service through a tailored AI-assisted flow.",
    capabilities: ["Website assistant", "FAQ support", "Lead qualification", "AI workflows"],
    price: 499,
    cta: "Explore AI automation",
    features: ["Website AI assistant", "Customer FAQ assistance", "Lead qualification and information capture", "Customer service routing", "Integrations scoped where appropriate"],
  },
  "website-care": {
    id: "website-care",
    name: "Website Care",
    category: "Ongoing Care",
    description: "Ongoing technical maintenance, monitoring, small content updates, and basic support.",
    capabilities: ["Technical maintenance", "Monitoring", "Small content updates", "Basic support"],
    price: 59,
    cta: "Ask about website care",
    features: ["Technical maintenance", "Website monitoring", "Small content updates", "Basic support", "Major features and third-party costs scoped separately"],
  },
} as const;

export type ProductId = keyof typeof products;
export type Product = (typeof products)[ProductId];

export const productIds = [
  "starter-website",
  "business-website",
  "booking-website",
  "ecommerce-store",
  "business-automation",
  "ai-assistant-automation",
  "website-care",
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
