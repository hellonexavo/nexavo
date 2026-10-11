import Link from "next/link";
import { getProduct } from "@/app/lib/products";
export const metadata = { title: "Order & Payment | YY Builds", description: "Choose a YY Builds product and view available payment options." };
export default async function CheckoutPage({searchParams}:{searchParams:Promise<{product?:string|string[]}>}) {
 const p=await searchParams;const id=Array.isArray(p.product)?p.product[0]:p.product;
 const selected=getProduct(id);
 return <main className="min-h-screen bg-[#090c10] px-6 py-12 text-white"><div className="mx-auto max-w-4xl">
 <div className="flex items-center justify-between"><Link href="/" className="text-2xl font-black tracking-tight">YY<span className="text-emerald-300">.</span>BUILDS</Link><Link href="/pricing" className="text-sm text-slate-300">← All prices</Link></div>
 <p className="mt-20 text-xs font-bold tracking-[.23em] text-emerald-300">ORDER / PAYMENT OPTIONS</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-[-.07em] sm:text-7xl">Choose. Order.<br/><span className="text-emerald-300">Move forward.</span></h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">No long project form. Choose your offer and your preferred way to arrange payment.</p>
 {selected&&<div className="mt-12 rounded-2xl border border-emerald-300/25 bg-emerald-300/5 p-6"><p className="text-xs uppercase tracking-widest text-emerald-300">Your selection</p><h2 className="mt-3 text-2xl font-semibold">{selected.name}</h2><p className="mt-3 text-sm text-slate-300">{selected.description}</p></div>}
 <div className="mt-8 grid gap-4 sm:grid-cols-2"><Link href="/pay" className="rounded-2xl border border-emerald-300/35 bg-[#17241f] p-7 transition hover:bg-[#20352c]"><p className="text-xs tracking-widest text-emerald-300">AVAILABLE OPTION</p><h2 className="mt-4 text-2xl font-semibold">Bank transfer / PayPal ↗</h2><p className="mt-3 text-sm leading-6 text-slate-300">Choose a product and ask for transfer instructions or a verified payment link. No charge is taken on this page.</p></Link><Link href="/pricing" className="rounded-2xl border border-white/15 bg-white/5 p-7 transition hover:bg-white/10"><p className="text-xs tracking-widest text-slate-400">ALL OFFERS</p><h2 className="mt-4 text-2xl font-semibold">Browse prices ↗</h2><p className="mt-3 text-sm leading-6 text-slate-300">Compare digital kits, website design and automation before choosing.</p></Link></div>
 <p className="mt-8 text-xs leading-6 text-slate-400">The website does not collect card details or confirm payment. Card checkout remains unavailable until a verified payment provider is activated.</p>
 </div></main>;
}