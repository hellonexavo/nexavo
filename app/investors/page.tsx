import Link from "next/link";
import { StudioFrame } from "../components/StudioFrame";
import s from "../studio.module.css";
import st from "./investors.module.css";

export const metadata = {
  title: "Company & Investor Overview | YY Builds",
  description: "YY Builds is developing practical AI business systems. Learn about the service-led strategy, product concepts, validation milestones and partnership opportunities.",
  alternates: { canonical: "/investors" },
};

const products = [
  {name:"DocumentFlow",stage:"Proposed first commercial product",description:"Turn incoming PDF documents and emails into structured, human-reviewed records for existing tools.",customer:"Operations teams, freight forwarders, service companies"},
  {name:"SalesFlow",stage:"Product concept",description:"Connect enquiries, follow-ups and simple CRM workflows without replacing an entire business stack.",customer:"Small and medium service businesses"},
  {name:"FlowLedger",stage:"Interactive local prototype",description:"Make invoice status and overdue balances easier to review; payment actions remain controlled by people.",customer:"Businesses with manual receivables administration"},
  {name:"CargoOS",stage:"Exploratory vertical concept",description:"A focused transport-order and document workflow for freight forwarders, subject to customer discovery.",customer:"European logistics operators"},
];
const milestones=[
  ["01","Validate demand","Interview 15–30 qualified operators, assess workflow costs and seek paid pilot commitments."],
  ["02","Deliver a paid pilot","Build the narrowest safe integration, measure time saved and document acceptance criteria."],
  ["03","Repeat delivery","Standardise deployment, security and support for several paying customers."],
  ["04","Productise","Only invest in subscription software once repeated demand and retention are demonstrated."],
];
export default function Investors() {
return <StudioFrame>
 <section className={st.hero}><div className={s.wrap}>
  <p className={s.eyebrow}>YY BUILDS / COMPANY OVERVIEW / 2026</p>
  <h1>From repetitive work<br/>to <em>repeatable systems.</em></h1>
  <p>YY Builds is building a service-led AI automation business with a longer-term ambition to develop reusable software products. We start with concrete operational problems, paid implementation work and measurable customer outcomes.</p>
  <div className={st.actions}><Link className={s.button} href="/contact">Discuss a partnership ↗</Link><Link className={s.inlineLink} href="/demos">Explore demonstrations ↗</Link></div>
  <div className={st.disclosure}>Early-stage initiative · No public claim of customers, revenue, funding secured or validated product-market fit · Figures below are planning assumptions, not forecasts.</div>
 </div></section>
 <section className={st.section}><div className={s.wrap}>
  <p className={s.eyebrow}>THE THESIS</p><h2>Automation that pays for itself through useful work.</h2>
  <div className={st.three}>
  <article><span>01 / PROBLEM</span><h3>Manual hand-offs</h3><p>Small businesses move information between email, PDFs, spreadsheets and disconnected applications.</p></article>
  <article><span>02 / SOLUTION</span><h3>Human-reviewed AI workflows</h3><p>Capture, structure, route and check information before it enters a customer's existing operations.</p></article>
  <article><span>03 / MODEL</span><h3>Services first, products next</h3><p>Earn implementation fees and support revenue; turn repeated demand into focused subscription products.</p></article>
  </div>
 </div></section>
 <section className={st.light}><div className={s.wrap}>
  <p className={s.eyebrow}>COMMERCIAL ENTRY POINT</p><h2>One first offer. A clear buyer.</h2>
  <div className={st.split}><div><h3>Document-to-workflow pilot</h3><p>For a company receiving repeat business documents by email: extract key fields, flag uncertainty, let a staff member approve, and export data to a spreadsheet or CRM. No autonomous financial decisions or transport dispatch.</p><Link className={s.darkButton} href="/contact?service=documents">Explore a paid pilot ↗</Link></div><div className={st.metric}><span>Illustrative economics — not actual results</span><strong>1,000 × 6 min</strong><p>At 1,000 items per month, reducing manual handling by six minutes each would save 100 working hours. Actual savings must be measured in a customer pilot.</p></div></div>
 </div></section>
 <section className={st.section}><div className={s.wrap}>
  <p className={s.eyebrow}>PRODUCT ROADMAP</p><h2>A focused portfolio, not four simultaneous launches.</h2>
  <div className={st.products}>{products.map(p=><article key={p.name}><span>{p.stage}</span><h3>{p.name}</h3><p>{p.description}</p><small>Intended users: {p.customer}</small></article>)}</div>
  <p className={st.caption}>Prototype demonstrations are not commercial deployments. Capabilities shown as concepts are not represented as production integrations.</p>
 </div></section>
 <section className={st.light}><div className={s.wrap}>
  <p className={s.eyebrow}>GO-TO-MARKET</p><h2>How we intend to reach paying customers.</h2>
  <div className={st.three}>
   <article><span>INITIAL MARKETS</span><h3>Netherlands, then EU</h3><p>Start with accessible Dutch service and operations businesses; expand to German and Polish logistics and administrative teams if validated.</p></article>
   <article><span>DISTRIBUTION</span><h3>Direct pilots + partners</h3><p>Founder-led discovery, relevant freelance briefs and partnerships with web agencies and business-software integrators.</p></article>
   <article><span>REVENUE</span><h3>Implementation + support</h3><p>Project fees and scoped recurring service first; product subscriptions only after evidence of repeatable demand.</p></article>
  </div>
 </div></section>
 <section className={st.section}><div className={s.wrap}>
  <p className={s.eyebrow}>VALIDATION ROADMAP</p><h2>Milestones before scale.</h2>
  <div className={st.timeline}>{milestones.map(m=><div key={m[0]}><strong>{m[0]}</strong><h3>{m[1]}</h3><p>{m[2]}</p></div>)}</div>
 </div></section>
 <section className={st.light}><div className={s.wrap}>
  <p className={s.eyebrow}>CAPITAL DISCIPLINE</p><h2>Funding follows evidence.</h2>
  <div className={st.split}><div><h3>Initial model: lean & customer-funded</h3><p>Use existing software, open-source tooling and scoped client payments to test the market. Avoid major debt, expensive teams or speculative infrastructure before paid demand is proven.</p><p>Potential later uses of capital: product engineering, security audits, customer acquisition experiments and integrations. Any investment proposal requires a verified budget, business registration details and validated traction.</p></div><div className={st.metric}><span>Working pilot pricing hypotheses</span><strong>€500–€1,500</strong><p>Indicative first pilot range, subject to scope and customer interviews. Not historical revenue or a guaranteed sales price.</p></div></div>
 </div></section>
 <section className={st.section}><div className={s.wrap}>
  <p className={s.eyebrow}>INVESTMENT READINESS</p><h2>What we can show — and what remains to prove.</h2>
  <div className={st.three}>
   <article><span>AVAILABLE</span><h3>Visible work</h3><p>Existing digital demos, design concepts, service structure and a defined product thesis.</p></article>
   <article><span>NOT YET VERIFIED</span><h3>Commercial traction</h3><p>Paying customers, revenue, product retention and independently measured savings must be validated before being presented as facts.</p></article>
   <article><span>NEXT DOCUMENTS</span><h3>Due-diligence pack</h3><p>Registration and ownership details, 12-month cash-flow model, signed pilot agreements, technical architecture, risk register and cap table if applicable.</p></article>
  </div>
 </div></section>
 <section className={st.cta}><div className={s.wrap}><p className={s.eyebrow}>CUSTOMERS / PARTNERS / INVESTORS</p><h2>Build the evidence with us.</h2><p>We welcome conversations with pilot customers, integration partners and potential early-stage supporters. No investment offering is made through this website.</p><Link className={s.button} href="/contact">Contact YY Builds ↗</Link><p className={st.caption}>Email: yybuilds.contact@gmail.com · Netherlands-based initiative</p></div></section>
</StudioFrame>;
}
