import type { Metadata } from "next";
import AutoflowExperience from "./AutoflowExperience";

export const metadata: Metadata = {
  title: "Autoflow — Auto-Service Website Concept",
  description:
    "An interactive auto-service website concept with service filtering, vehicle details, demo estimates, and booking enquiries.",
};

export default function AutoflowPage() {
  return <AutoflowExperience />;
}
