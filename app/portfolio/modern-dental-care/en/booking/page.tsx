import { createPageMetadata } from "@/app/lib/seo";
import BookingFlow from "../../BookingFlow";
import LanguageSwitcher from "../../LanguageSwitcher";

export const metadata = createPageMetadata({
  title: "Book an Appointment — Modern Dental Care | YY Builds",
  description: "English demo booking flow for Modern Dental Care.",
  path: "/portfolio/modern-dental-care/en/booking",
});

export default function EnglishBookingPage() {
  return <main className="min-h-screen bg-[#f7f5ef] px-5 py-8 text-[#17332e] md:px-8 lg:px-12"><header className="mx-auto flex max-w-[1000px] items-center justify-between"><a href="/portfolio/modern-dental-care/en" className="text-[12px] font-semibold uppercase tracking-[0.18em]">Modern Dental Care</a><LanguageSwitcher current="en" dutchPath="/portfolio/modern-dental-care#appointment" englishPath="/portfolio/modern-dental-care/en/booking" /></header><section className="mx-auto max-w-[1000px] py-14"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82928d]">Appointment request</p><h1 className="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.055em] sm:text-7xl">Find the right care<span className="block font-serif italic font-normal text-[#9a7849]">at your own pace.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-[#687a74]">This concept demonstrates a clear request process. The practice confirms the appointment personally.</p><div className="mt-10"><BookingFlow language="en" /></div></section></main>;
}
