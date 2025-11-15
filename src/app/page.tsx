import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study-view";
import {
  DEFAULT_CASE_STUDY_SLUG,
  getCaseStudyBySlug,
} from "@/data/case-studies";

export default function HomePage() {
  const content = getCaseStudyBySlug(DEFAULT_CASE_STUDY_SLUG);

  if (!content) {
    notFound();
  }

  return <CaseStudyView content={content} />;
}
