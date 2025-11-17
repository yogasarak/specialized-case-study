import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyView } from "@/components/case-study-view"
import { CASE_STUDIES, getCaseStudyBySlug } from "@/data/case-studies"
import type { CaseStudyPageProps, CaseStudyRouteParams } from "./types"

export function generateStaticParams(): CaseStudyRouteParams[] {
  return CASE_STUDIES.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const content = getCaseStudyBySlug(slug)

  if (!content) {
    return {
      title: "Case Study",
    }
  }

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      images: [{ url: "/opengraph-image" }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["/opengraph-image"],
    },
  }
}

export default async function CaseStudySlugPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params
  const content = getCaseStudyBySlug(slug)

  if (!content) {
    notFound()
  }

  return <CaseStudyView content={content} />
}
