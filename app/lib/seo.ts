import type { Metadata } from "next";

export const siteUrl = "https://yybuilds.com";
export const socialImage = "/opengraph-image";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: "YY Builds",
      title,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "YY Builds — Websites, AI & Automation" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
