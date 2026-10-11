"use client";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
const choices = [
  { id: "kit", label: "Lead Capture Starter Kit — €49", amount: 49 },
  { id: "setup", label: "Automation setup — €199 (subject to scope confirmation)", amount: 199 },
  { id: "custom", label: "Custom website or automation — quote first", amount: 0 },
];
export default function PayPage() {
  const [item,setItem]=useState("kit");
  const [method,setMethod]=useState("transfer");
  const [status,setStatus]=useState<"idle"|"sending"|"done"|"error">("idle");
  const [error,setError]=useState("");
  const startedAt=useRef(0);
  useEffect(()=>{startedAt.current=Date.now();},[]);
  const selected=choices.find(x=>x.id===item)??choices[0];
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setStatus("sending");setError("");
    const fields=new FormData(e.currentTarget);
    const note=String(fields.get("notes")||"").trim();
    const message=[
      "Payment arrangement request — no payment collected on site.",
      "Item: "+selected.label,
      "Preferred payment: "+(method==="paypal"?"PayPal Goods and Services":"SEPA bank transfer"),
      "Notes: "+(note||"None"),
      "IMPORTANT: Verify scope and lawful eligibility before sending payment details. Do not treat this submission as a paid order."
    ].join("
");
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        name:fields.get("name"),email:fields.get("email"),phone:"",service:selected.label,message,
        website:"",websiteConfirm:fields.get("websiteConfirm"),startedAt:startedAt.current
      })});
      const body=await response.json().catch(()=>({})) as {error?:string};
      if(!response.ok)throw new Error(body.error||"Could not send request.");
      setStatus("done");
    }catch(err){setError(err instanceof Error?err.message:"Could not send request.");setStatus("error");}
  }
  return <main className="min-h-screen bg-[#080d18] px-6 py-12 text-white"><div className="mx-auto max-w-xl">
    <Link href="/" className="text-emerald-300">← YY Builds</Link><h1 className="mt-12 text-4xl font-semibold">Arrange payment</h1>
    <p className="mt-4 text-slate-300">No card information is collected here. Select what you need and request private bank-transfer instructions or a verified payment link. This is an enquiry, not a completed payment.</p>
    {status==="done"?<section className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/5 p-6"><h2 className="text-2xl font-semibold">Request received</h2><p className="mt-2 text-slate-300">We will review your request and reply with available payment options. No money has been charged and nothing has been purchased yet.</p><Link href="/" className="mt-5 inline-block text-emerald-300">Back to YY Builds →</Link></section>:
    <form onSubmit={submit} className="mt-8 space-y-5 rounded-2xl border border-white/15 bg-white/5 p-6">
      <label className="block text-sm font-semibold">Product or service<select required className="mt-2 w-full rounded-lg bg-slate-900 p-3 text-white" value={item} onChange={e=>setItem(e.target.value)}>{choices.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}</select></label>
      <fieldset className="space-y-3"><legend className="text-sm font-semibold">Preferred payment method</legend><label className="flex items-center gap-3 rounded-lg border border-white/15 p-3"><input type="radio" checked={method==="transfer"} onChange={()=>setMethod("transfer")}/>SEPA bank transfer — details after review</label><label className="flex items-center gap-3 rounded-lg border border-white/15 p-3"><input type="radio" checked={method==="paypal"} onChange={()=>setMethod("paypal")}/>PayPal — verified link after review</label></fieldset><label className="block text-sm font-semibold">Name<input name="name" required maxLength={120} autoComplete="name" className="mt-2 w-full rounded-lg bg-slate-900 p-3 text-white"/></label>
      <label className="block text-sm font-semibold">Email<input name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 w-full rounded-lg bg-slate-900 p-3 text-white"/></label>
      <label className="block text-sm font-semibold">Details (optional)<textarea name="notes" maxLength={1800} rows={3} className="mt-2 w-full rounded-lg bg-slate-900 p-3 text-white"/></label>
      <label className="hidden" aria-hidden="true">Website confirmation<input name="websiteConfirm" tabIndex={-1} autoComplete="off"/></label>
      {status==="error"&&<p role="alert" className="text-amber-300">{error}</p>}
      <button disabled={status==="sending"} type="submit" className="w-full rounded-xl bg-emerald-400 p-4 font-semibold text-slate-950 disabled:opacity-50">{status==="sending"?"Sending request…":"Request payment instructions →"}</button>
      <p className="text-xs text-slate-400">This form records your preferred payment method but does not charge you or store bank/card data. You will receive separate instructions once the request is reviewed. Do not send card numbers or passwords.</p>
    </form>}
    </div></main>;
}
