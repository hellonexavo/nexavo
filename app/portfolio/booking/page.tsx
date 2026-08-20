import BookingExperience from "./BookingExperience";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "YY Booking — Premium Appointment Demo | YY Builds",
  description: "Explore a premium fictional salon booking experience with services, specialists, scheduling, confirmation, and an owner dashboard.",
  path: "/portfolio/booking",
});

export default function YYBookingPage() {
  return <BookingExperience currentYear={new Date().getFullYear()} />;
}
