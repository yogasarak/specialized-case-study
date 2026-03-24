import type { Metadata } from "next";
import { ResumePage } from "@/components/resume-page";

export const metadata: Metadata = {
  title: "Resume Light | Sara Keyser",
  description:
    "Light-theme resume covering frontend architecture, UX strategy, design systems, SaaS workflows, and cross-functional product execution.",
};

export default function ResumeLightPage() {
  return <ResumePage tone="light" />;
}
