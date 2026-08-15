import type { Metadata } from "next";
import BookingExperience from "./BookingExperience";

export const metadata: Metadata = {
  title: "YY Booking — Booking & Payments Demo",
  description: "A fictional cleaning-business booking and instant quote web application created as a YY Builds portfolio demo.",
};

export default function NexavoBookingPage() {
  return (
    <BookingExperience
      currentYear={new Date().getFullYear()}
      paypalClientId={process.env.PAYPAL_CLIENT_ID ?? ""}
    />
  );
}
