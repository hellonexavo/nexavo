import Link from "next/link";
export default function PaymentResult() {
 return <main className="min-h-screen bg-[#080d18] px-6 py-20 text-white"><div className="mx-auto max-w-2xl"><h1 className="text-3xl font-semibold">Checkout returned</h1><p className="mt-4 text-slate-300">Your return to this page does not itself confirm payment. We verify payments through Stripe before fulfilling orders. If you have paid and have not received an order confirmation, contact YY Builds and include your Stripe receipt reference. Do not share card details.</p><Link href="/" className="mt-8 inline-block text-emerald-300">Back to YY Builds →</Link></div></main>;
}
