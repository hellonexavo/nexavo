import Link from "next/link";
import type { ProductId } from "@/app/lib/products";

type Props = {
  productId: ProductId;
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export default function PurchaseButton({
  children = "Choose this service",
  className = "",
  variant = "light",
}: Props) {
  return (
    <Link
      href="/#contact"
      className={`purchase-button ${variant === "dark" ? "purchase-button-dark" : "purchase-button-light"} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
