import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/checkout`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio/novadent`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/maison`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/autoflow`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/booking`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
