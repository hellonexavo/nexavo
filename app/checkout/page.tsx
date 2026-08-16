import CheckoutExperience from "./CheckoutExperience";
import { getProduct, productIds, products } from "@/app/lib/products";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Choose a Service — YY Builds",
  description: "Choose a YY Builds website or business automation service and send your project request for personal review.",
  path: "/checkout",
});

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedId = Array.isArray(params.product) ? params.product[0] : params.product;
  const selectedProduct = getProduct(requestedId);
  const catalogue = productIds.map((id) => products[id]);
  return (
    <CheckoutExperience
      products={catalogue}
      initialProductId={selectedProduct?.id}
    />
  );
}
