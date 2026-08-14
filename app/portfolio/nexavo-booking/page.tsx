import type { Metadata } from "next";
import BookingExperience from "./BookingExperience";

export const metadata: Metadata = {
  title: "Nexavo Booking — Cleaning Quote & Booking Demo",
  description: "A fictional cleaning-business booking and instant quote web application created as a YY Builds portfolio demo.",
};

export default function NexavoBookingPage() {
  return <BookingExperience currentYear={new Date().getFullYear()} />;
}
