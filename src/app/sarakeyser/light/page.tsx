import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "Sara Keyser | About Light",
  description:
    "Light-theme alternate for the About page covering career progression across UX engineering, product systems design, SaaS workflows, and frontend delivery.",
};

export default function SaraKeyserLightPage() {
  return <AboutPage tone="light" />;
}
