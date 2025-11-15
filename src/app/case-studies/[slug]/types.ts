export type CaseStudyRouteParams = { slug: string };

export type CaseStudyPageProps = {
  params: Promise<CaseStudyRouteParams>;
};
