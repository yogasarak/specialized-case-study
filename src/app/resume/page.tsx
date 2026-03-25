import type { Metadata } from "next";
import { ResumePage } from "@/components/resume-page";

export const metadata: Metadata = {
  title: "Resume | Sara Keyser",
  description:
    "Interactive resume covering frontend architecture, UX strategy, design systems, SaaS workflows, and cross-functional product execution.",
};

export default function Resume() {
  return <ResumePage tone="dark" />;
}
