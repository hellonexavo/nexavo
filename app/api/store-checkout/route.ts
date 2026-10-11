import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const catalog = {
  "lead-kit": { name: "Lead Capture Starter Kit", amount: 4900, mode: "payment" },
  "lead-setup": { name: "Lead Intake Automation Setup", amount: 19900, mode: "payment" },
} as const;

export async function POST(req: NextRequest) {
  // This endpoint must never request real payment while onboarding is incomplete.
  if (process.env.YY_ENABLE_LIVE_CHECKOUT !== "true") {
    return NextResponse.json({ error: "Payment checkout is not yet available." }, { status: 503 });
  }
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !key.startsWith("sk_live_")) {
    return NextResponse.json({ error: "Live payments are not configured." }, { status: 503 });
  }
  let productId: string;
  try {
    const data = await req.json() as { productId?: unknown };
    if (typeof data.productId !== "string") throw new Error("Invalid product");
    productId = data.productId;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!Object.prototype.hasOwnProperty.call(catalog, productId)) {
    return NextResponse.json({ error: "Unknown product." }, { status: 400 });
  }
  const product = catalog[productId as keyof typeof catalog];
  const baseUrl = process.env.YY_PUBLIC_ORIGIN;
  if (!baseUrl || !/^https:\/\/[^/]+$/.test(baseUrl)) {
    return NextResponse.json({ error: "Checkout origin is not configured." }, { status: 503 });
  }

  const form = new URLSearchParams({
    mode: product.mode,
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][unit_amount]": String(product.amount),
    "line_items[0][price_data][product_data][name]": product.name,
    "line_items[0][quantity]": "1",
    success_url: `${baseUrl}/payment-result?status=returned&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pricing?cancelled=1`,
    "metadata[yy_product_id]": productId,
    billing_address_collection: "auto",
    customer_creation: "always",
  });
  try {
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: form,
      cache: "no-store",
    });
    const session = await response.json() as { url?: string; error?: { message?: string } };
    if (!response.ok || !session.url?.startsWith("https://checkout.stripe.com/")) {
      console.error("Stripe Checkout session creation failed", response.status);
      return NextResponse.json({ error: "Checkout temporarily unavailable." }, { status: 502 });
    }
    return NextResponse.json({ url: session.url }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Payment provider unavailable." }, { status: 502 });
  }
}
