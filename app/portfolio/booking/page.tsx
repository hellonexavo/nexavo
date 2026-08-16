import BookingExperience from "./BookingExperience";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "YY Booking — Booking System Demo | YY Builds",
  description: "Explore YY Booking, a fictional cleaning-business booking, quote, and sandbox payment demonstration created by YY Builds.",
  path: "/portfolio/booking",
});

export default function YYBookingPage() {
  return (
    <BookingExperience
      currentYear={new Date().getFullYear()}
      paypalClientId={process.env.PAYPAL_CLIENT_ID ?? ""}
    />
  );
}
