"use client";
import { useState } from "react";
export default function BuyButton({ productId, label }: { productId: string; label: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function checkout() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/store-checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId }) });
      const json = await response.json() as { url?: string; error?: string };
      if (!response.ok || !json.url) throw new Error(json.error || "Checkout unavailable");
      window.location.assign(json.url);
    } catch (err) { setError(err instanceof Error ? err.message : "Checkout unavailable"); setLoading(false); }
  }
  return <div><button type="button" disabled={loading} onClick={checkout} className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 disabled:opacity-60">{loading ? "Opening checkout…" : label}</button>{error && <p role="status" className="mt-2 text-sm text-amber-300">{error}</p>}</div>;
}
