import type { Metadata } from "next";
import MaisonExperience from "./MaisonExperience";

export const metadata: Metadata = {
  title: "Maison — Restaurant Website Concept",
  description:
    "An interactive restaurant website concept created by Nexavo, featuring a menu catalogue, demo ordering, and demo reservations.",
};

export default function MaisonPage() {
  return <MaisonExperience />;
}
