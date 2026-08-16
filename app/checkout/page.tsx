import type { Metadata } from "next";
import CheckoutExperience from "./CheckoutExperience";
import { getProduct, productIds, products } from "@/app/lib/products";

export const metadata: Metadata = {
  title: "Choose a Package — YY Builds",
  description: "Choose a YY Builds website, AI, automation, or custom project package and request payment details after project review.",
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
  return (
    <CheckoutExperience
      products={catalogue}
      initialProductId={selectedProduct.id}
    />
  );
}
