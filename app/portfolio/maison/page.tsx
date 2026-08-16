import MaisonExperience from "./MaisonExperience";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata({
  title: "Maison — Restaurant Website Demo | YY Builds",
  description:
    "Explore Maison, a fictional restaurant website demo by YY Builds featuring a menu catalogue, demo ordering, and reservation flows.",
  path: "/portfolio/maison",
});

export default function MaisonPage() {
  return <MaisonExperience />;
}
