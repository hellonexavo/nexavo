import { StudioFrame } from "../components/StudioFrame";

export const metadata = {
 title: "Website Fix — €99 Starter Scope | YY Builds",
 description: "Clear, small website fixes: forms, broken links, mobile layout and basic technical help. Transparent scope and direct contact.",
 alternates: { canonical: "/website-fix-99" }
};
const fixes = [
 "A broken contact form or enquiry flow",
 "Mobile spacing, alignment or unreadable text",
 "Broken links, small UI bugs or a simple technical issue",
 "A short audit plus a written fix recommendation"
];
export default function WebsiteFix() {
 const subject = encodeURIComponent("YY Builds — €99 website fix enquiry");
 const body = encodeURIComponent("Hello YY Builds,\n\nMy website URL: \nThe problem I need fixed: \nWhat I expected to happen: \n\nPlease confirm the scope and quote before starting.");
 return <StudioFrame><main style={{maxWidth:1030,margin:"0 auto",padding:"clamp(48px,7vw,110px) 24px",lineHeight:1.65}}>
 <p style={{letterSpacing:2,fontSize:12,opacity:.65}}>YY BUILDS / SMALL BUSINESS SUPPORT</p>
 <h1 style={{fontSize:"clamp(38px,6vw,72px)",lineHeight:1.06,margin:"20px 0"}}>One annoying website issue.<br/><em>Finally fixed.</em></h1>
 <p style={{fontSize:20,maxWidth:700}}>Forms not sending? Layout broken on phones? Let’s fix one specific problem without starting an expensive rebuild.</p>
 <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20,marginTop:42}}>
  <div style={{border:"1px solid #8887",borderRadius:16,padding:28}}>
   <p style={{fontSize:14,opacity:.65}}>STARTER SERVICE · FIXED SCOPE</p>
   <h2 style={{fontSize:48,margin:"8px 0"}}>€99</h2>
   <p>One clearly defined website fix, agreed in writing before work begins. If the issue needs more extensive work, we'll quote separately and you can decline.</p>
   <a href={`mailto:yybuilds.contact@gmail.com?subject=${subject}&body=${body}`} style={{display:"inline-block",border:"1px solid currentColor",borderRadius:9,padding:"12px 20px",marginTop:12,fontWeight:700}}>Ask for a fix ↗</a>
  </div>
  <div style={{border:"1px solid #8887",borderRadius:16,padding:28}}>
   <h2 style={{fontSize:24,marginBottom:16}}>Typical requests</h2>
   <ul style={{paddingLeft:22}}>{fixes.map(f=><li key={f} style={{marginBottom:12}}>{f}</li>)}</ul>
  </div>
 </section>
 <h2 style={{fontSize:29,margin:"42px 0 16px"}}>How it works</h2>
 <p><strong>1.</strong> Send the website URL and describe the issue. <strong>2.</strong> We confirm what can be fixed for €99, timeline and access needs. <strong>3.</strong> After agreement, the fix is delivered and checked.</p>
 <p style={{marginTop:34,fontSize:14,opacity:.7}}>No payment is taken on this page. Your quote is confirmed before any paid work begins. Never send passwords by email. Service availability and applicable taxes are confirmed before contracting.</p>
 </main></StudioFrame>;
}
