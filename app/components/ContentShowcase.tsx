import Link from "next/link";

const demos = [
  {
    title: "Website transformation",
    label: "Web design",
    description: "A fast before-and-after story built to show how a stronger digital first impression changes the way a business feels.",
    src: "/videos/yy-builds-website.mp4",
    accent: "from-lime-300/20 via-violet-500/10 to-transparent",
  },
  {
    title: "AI automation",
    label: "AI • n8n • workflows",
    description: "A visual pipeline from incoming lead to AI understanding, workflow execution and a completed business action.",
    src: "/videos/yy-builds-automation.mp4",
    accent: "from-cyan-300/20 via-sky-500/10 to-transparent",
  },
  {
    title: "Content Engine",
    label: "Connected growth system",
    description: "Website, AI agent, automation and short-form content shown as one connected system for a modern business.",
    src: "/videos/yy-builds-content-engine.mp4",
    accent: "from-violet-300/20 via-fuchsia-500/10 to-transparent",
  },
];

export default function ContentShowcase() {
  return (
    <section id="content-engine" className="scroll-mt-24 bg-[#080a10] px-5 py-20 text-white sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,.85)]" />
              YY Content Engine
            </div>
            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Content that shows what your business can do — in seconds.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-white/55">
              Short-form video, product storytelling and AI-assisted content built to make services easier to understand, remember and act on.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-white/60">
              {['9:16 social video', 'Motion design', 'AI-assisted production', 'Reels • Shorts • TikTok'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <article key={demo.title} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#10131c] shadow-[0_28px_80px_rgba(0,0,0,.28)]">
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b ${demo.accent}`} />
              <div className="relative p-3 sm:p-4">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-black ring-1 ring-white/10">
                  <video
                    src={demo.src}
                    className="h-full w-full object-cover"
                    controls
                    muted
                    playsInline
                    preload={index === 0 ? "metadata" : "none"}
                    aria-label={`${demo.title} demo video`}
                  />
                  <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
                    18 sec demo
                  </div>
                </div>
              </div>
              <div className="relative px-6 pb-7 pt-4 sm:px-7 sm:pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-300">{demo.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{demo.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{demo.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/[0.045] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold text-lime-300">Need content for your own business?</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">Send your website, service or idea. YY Builds can turn it into a clear short-form concept and a production-ready first batch.</p>
          </div>
          <Link href="/checkout?product=custom-project" className="inline-flex shrink-0 items-center justify-center rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white">
            Create my content <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
