import Link from "next/link";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Recommended Tools for Small Business | YY Builds",
  description:
    "A practical shortlist of website, ecommerce, SEO and automation tools YY Builds recommends for small businesses.",
  path: "/tools",
});

const tools = [
  {
    name: "Hostinger",
    category: "Hosting & websites",
    bestFor: "Small businesses that need a simple place to host and launch a website.",
    why: "Useful for getting a business website online without adding unnecessary infrastructure or technical overhead.",
    href: "https://www.hostinger.com/",
  },
  {
    name: "n8n",
    category: "AI & automation",
    bestFor: "Businesses that want to connect forms, notifications, CRM steps and AI workflows.",
    why: "A strong fit when repetitive customer or admin work can be turned into a clear automated workflow.",
    href: "https://n8n.io/",
  },
  {
    name: "Shopify",
    category: "Ecommerce",
    bestFor: "Businesses that want to sell products online with a proven ecommerce platform.",
    why: "A practical choice when the core requirement is a real online store, product management and checkout rather than a brochure website.",
    href: "https://www.shopify.com/",
  },
  {
    name: "Semrush",
    category: "SEO & marketing",
    bestFor: "Businesses and marketers that want to understand search visibility, keywords and competitors.",
    why: "Useful when a website already exists and the next challenge is finding search opportunities and improving discoverability.",
    href: "https://www.semrush.com/",
  },
  {
    name: "Elementor",
    category: "Website building",
    bestFor: "WordPress projects that need flexible visual page building and a large ecosystem.",
    why: "A familiar option for businesses that specifically want WordPress and need editable marketing pages after launch.",
    href: "https://elementor.com/",
  },
] as const;

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfe] text-slate-950">
      <section className="px-5 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="YY Builds home">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white">YY</span>
              <span>
                <span className="block font-semibold">YY Builds</span>
                <span className="text-[11px] text-slate-500">Websites • AI • Automation</span>
              </span>
            </Link>
            <Link href="/checkout" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Start a project ↗</Link>
          </div>

          <div className="mx-auto mt-20 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">YY Builds toolkit</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Tools worth considering before you add more complexity.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">This is a focused shortlist for small businesses building a website, store, SEO workflow or automation system. The right tool depends on the problem, not the hype.</p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <article key={tool.name} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">{tool.category}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{tool.name}</h2>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Recommended</span>
                </div>
                <div className="mt-7 space-y-4 text-sm leading-6 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Best for:</span> {tool.bestFor}</p>
                  <p><span className="font-semibold text-slate-900">Why it can make sense:</span> {tool.why}</p>
                </div>
                <a href={tool.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800">Visit official site ↗</a>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Need help choosing?</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em]">Choose the business result first.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">If you tell YY Builds what you want to improve, we can recommend the simplest stack and avoid paying for tools you do not need.</p>
              </div>
              <Link href="/checkout?product=custom-project" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950">Ask for a recommendation →</Link>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-slate-500">No tool is paid to appear on this page. If YY Builds later uses an affiliate link, it will be clearly identified. Product features and partner terms can change, so check the provider&apos;s current terms before buying.</p>
        </div>
      </section>
    </main>
  );
}
