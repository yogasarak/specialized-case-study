import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "Sara Keyser | About",
  description:
    "Career progression across UX engineering, product systems design, SaaS workflows, global commerce, and frontend delivery.",
};

export default function SaraKeyserPage() {
  return <AboutPage tone="dark" />;
}
