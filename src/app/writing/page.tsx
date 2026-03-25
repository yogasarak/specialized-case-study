import type { Metadata } from "next";
import { WritingPage as WritingIndexPage } from "@/components/writing-page";

export const metadata: Metadata = {
  title: "Writing | Sara Keyser",
  description:
    "Technical writing on frontend engineering, Next.js, performance, and product systems.",
};

export default function WritingPage() {
  return <WritingIndexPage tone="dark" />;
}
