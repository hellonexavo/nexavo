import {
  BookingPaymentError,
  getValidatedBookingAmount,
  parseBookingPaymentInput,
  type BookingPaymentInput,
} from "@/app/lib/booking-payment";
import { getProduct, type ProductId } from "@/app/lib/products";

export type PaymentSelection =
  | { kind: "product"; productId: ProductId }
  | { kind: "booking"; booking: BookingPaymentInput };

export type ResolvedPayment = {
  amount: string;
  description: string;
  referenceId: string;
};

export function resolvePaymentSelection(value: unknown): ResolvedPayment {
  if (!value || typeof value !== "object") throw new BookingPaymentError("Invalid payment selection.");
  const selection = value as Record<string, unknown>;

  if (selection.kind === "product") {
    if (typeof selection.productId !== "string") throw new BookingPaymentError("Invalid product.");
    const product = getProduct(selection.productId);
    if (!product) throw new BookingPaymentError("Unknown product.");
    return {
      amount: product.price.toFixed(2),
      description: product.name,
      referenceId: `YY_PRODUCT_${product.id.toUpperCase().replaceAll("-", "_")}`,
    };
  }

  if (selection.kind === "booking") {
    const booking = parseBookingPaymentInput(selection.booking);
    return {
      amount: getValidatedBookingAmount(booking),
      description: "YY Booking sandbox demo",
      referenceId: "YY_BOOKING_DEMO",
    };
  }

  throw new BookingPaymentError("Invalid payment type.");
}
