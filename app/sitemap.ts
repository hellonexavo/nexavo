import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/checkout`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/booking`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio/modern-dental-care`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/controle`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/gebitsreiniging`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/mondhygienist`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/orthodontie`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/kronen-bruggen`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/facings`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/tanden-bleken`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/tandvullingen`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/wortelkanaalbehandeling`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/kunstgebit`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/spoed`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/behandelingen/mdc-junior`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/over-ons`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/tarieven`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/portfolio/modern-dental-care/booking`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/amsterdam-oost`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/amsterdam-west`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/mdc-junior`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/modern-dental-care/implantaten`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/novadent`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/maison`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/autoflow`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/booking`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
