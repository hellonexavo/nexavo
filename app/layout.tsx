import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl, socialImage } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "YY Builds | Websites, AI & Automation for Small Businesses",
  description: "YY Builds creates professional websites, practical AI assistants, and business automations for small businesses.",
  applicationName: "YY Builds",
  creator: "Yurii Yanishevskyi",
  publisher: "YY Builds",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "YY Builds",
    title: "YY Builds | Websites, AI & Automation for Small Businesses",
    description: "YY Builds creates professional websites, practical AI assistants, and business automations for small businesses.",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "YY Builds — Websites, AI & Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YY Builds | Websites, AI & Automation for Small Businesses",
    description: "YY Builds creates professional websites, practical AI assistants, and business automations for small businesses.",
    images: [socialImage],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
