import AutoflowExperience from "./AutoflowExperience";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "AutoFlow — Automotive Website Demo | YY Builds",
  description:
    "Explore AutoFlow, a fictional automotive website demo by YY Builds with service filtering, vehicle details, estimates, and booking enquiries.",
  path: "/portfolio/autoflow",
});

export default function AutoflowPage() {
  return <AutoflowExperience />;
}
