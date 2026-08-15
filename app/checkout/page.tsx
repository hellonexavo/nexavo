import type { Metadata } from "next";
import CheckoutExperience from "./CheckoutExperience";
import { getProduct, productIds, products } from "@/app/lib/products";

export const metadata: Metadata = {
  title: "Sandbox Checkout — YY Builds",
  description: "Choose a YY Builds service and preview a secure PayPal sandbox checkout.",
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedId = Array.isArray(params.product) ? params.product[0] : params.product;
  const selectedProduct = getProduct(requestedId) ?? products["starter-website"];
  const catalogue = productIds.map((id) => products[id]);
  const sandboxEnabled = process.env.PAYPAL_ENV === "sandbox";

  return (
    <CheckoutExperience
      products={catalogue}
      initialProductId={selectedProduct.id}
      paypalClientId={sandboxEnabled ? process.env.PAYPAL_CLIENT_ID ?? "" : ""}
      sandboxEnabled={sandboxEnabled}
    />
  );
}
