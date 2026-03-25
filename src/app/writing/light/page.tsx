import type { Metadata } from "next";
import { WritingPage } from "@/components/writing-page";

export const metadata: Metadata = {
  title: "Writing Light | Sara Keyser",
  description:
    "Light-theme writing page for technical notes on frontend engineering, Next.js, performance, and product systems.",
};

export default function WritingLightPage() {
  return <WritingPage tone="light" />;
}
