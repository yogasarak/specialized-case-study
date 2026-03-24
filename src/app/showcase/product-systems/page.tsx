import type { Metadata } from "next";
import { ShowcasePortfolioPage } from "@/components/showcase-page";

export const metadata: Metadata = {
  title: "Product Systems Showcase",
  description:
    "A focused showcase of UX strategy, systems thinking, and cross-functional product delivery across complex product environments.",
};

export default function ProductSystemsShowcasePage() {
  return <ShowcasePortfolioPage />;
}
