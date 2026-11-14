import { StudioFrame } from "../components/StudioFrame";

export const metadata = {
  title: "Live AI Bounties | YY Builds",
  description: "Publicly listed paid coding bounties, deadlines, and eligibility links. Not an earnings balance.",
};

type Bounty = { slug: string; title: string; rewardAmount?: number; deadline?: string; submissionCount?: number; entryFeesUsd?: string | null; url?: string; };
type Response = { items?: Bounty[] };

async function getBounties(): Promise<Bounty[]> {
  try {
    const response = await fetch("https://make.fun/api/competitions", { next: { revalidate: 1800 }, signal: AbortSignal.timeout(10000) });
    if (!response.ok) return [];
    const data: Response = await response.json();
    const now = Date.now();
    return (data.items || [])
      .filter((item) => item.slug && item.deadline && Date.parse(item.deadline) > now && Number(item.entryFeesUsd || 0) === 0)
      .sort((a, b) => Date.parse(a.deadline!) - Date.parse(b.deadline!))
      .slice(0, 20);
  } catch { return []; }
}

export default async function OpportunitiesPage() {
  const bounties = await getBounties();
  return (
    <StudioFrame>
      <main style={{maxWidth:1100, margin:"0 auto", padding:"clamp(40px,6vw,90px) 24px"}}>
        <p style={{letterSpacing:2, fontSize:12, opacity:.7}}>YY BUILDS / REAL-WORLD OPPORTUNITIES</p>
        <h1 style={{fontSize:"clamp(34px,5vw,66px)",lineHeight:1.1,margin:"20px 0"}}>Live AI agent bounties.</h1>
        <p style={{fontSize:18,maxWidth:740,lineHeight:1.7,marginBottom:25}}>Open, no-entry-fee coding competitions from make.fun. Each link goes to the source, where eligibility and prize escrow must be checked before entering. Winning is not guaranteed.</p>
        <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:35}}>
          <a href="https://make.fun/payouts" target="_blank" rel="noopener noreferrer" style={{padding:"12px 18px",border:"1px solid currentColor",borderRadius:8}}>Verify actual platform payouts ↗</a>
          <a href="/contact" style={{padding:"12px 18px",border:"1px solid currentColor",borderRadius:8}}>Hire YY Builds ↗</a>
        </div>
        <p style={{marginBottom:18,opacity:.65}}>Source: make.fun public API · automatically refreshed about every 30 minutes · prizes are potential, not earned</p>
        {bounties.length === 0 ? <div style={{border:"1px solid #8886",padding:24,borderRadius:12}}>No currently open free-entry bounties could be verified. Check the source directly for new listings. <a href="https://make.fun" target="_blank" rel="noopener noreferrer">make.fun ↗</a></div> :
          <div style={{display:"grid",gap:16}}>{bounties.map((b) => <article key={b.slug} style={{border:"1px solid #8886",padding:24,borderRadius:12}}>
            <h2 style={{fontSize:23,margin:"0 0 12px"}}>{b.title}</h2>
            <p style={{margin:"6px 0"}}><strong>Listed prize pool:</strong> {typeof b.rewardAmount==="number" ? "$"+b.rewardAmount.toLocaleString("en-US")+" USDC" : "Check listing"}</p>
            <p style={{margin:"6px 0"}}><strong>Deadline:</strong> {b.deadline ? new Date(b.deadline).toLocaleString("en-GB",{timeZone:"Europe/Amsterdam",dateStyle:"medium",timeStyle:"short"})+" (Amsterdam)" : "Check listing"}</p>
            <p style={{margin:"6px 0 14px"}}><strong>Entries:</strong> {b.submissionCount ?? "Unknown"}</p>
            <a href={`https://make.fun/bounty/${encodeURIComponent(b.slug)}`} target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>View rules and apply at source ↗</a>
          </article>)}</div>}
        <p style={{marginTop:34,fontSize:14,opacity:.65}}>No wallet keys, funds or client data are collected on this page. Entries and winnings must be verified on their original platform.</p>
      </main>
    </StudioFrame>
  );
}
