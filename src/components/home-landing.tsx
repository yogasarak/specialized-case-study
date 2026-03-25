"use client";

import Image from "next/image";
import { CASE_STUDIES, getCaseStudyPath } from "@/data/case-studies";
import {
  LandingPage,
  LandingShell,
  LandingHero,
  LogoGlow,
  Eyebrow,
  LandingTitle,
  LandingCopy,
  LandingActions,
  PrimaryLink,
  SecondaryLink,
  LandingNextArrow,
  CaseStudyGrid,
  CaseStudyCard,
  CaseStudyIndex,
  CaseStudyTitle,
  CaseStudyDescription,
  CaseStudyMeta,
  CaseStudyTag,
} from "./home-landing.styles";

export function HomeLanding() {
  const featured = CASE_STUDIES[0];
  const formatCardTitle = (title: string) =>
    title.replace(/ Case Study$/u, "");

  return (
    <LandingPage>
      <LandingNextArrow
        href={getCaseStudyPath(featured.slug)}
        aria-label={`Go to ${formatCardTitle(featured.title)}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.5 3.5L10.5 8L5.5 12.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </LandingNextArrow>
      <LandingShell>
        <LandingHero>
          <LogoGlow aria-hidden="true">
            <Image src="/images/favicon.png" alt="" width={512} height={512} />
          </LogoGlow>
          <Eyebrow>Sara Keyser • Senior Software Engineer / UX Lead</Eyebrow>
          <LandingTitle>
            case studies shaped through strategy, systems, and delivery.
          </LandingTitle>
          <LandingCopy>
            Case studies shaped through strategy, systems, and delivery across UX
            architecture, design systems, frontend implementation, and product
            execution. The strongest walkthroughs start with Complete Your Ride,
            then move through Continue Shopping, UX Wayfinding, and broader
            Specialized platform highlights.
          </LandingCopy>
          <LandingActions>
            <PrimaryLink href="/sarakeyser">About Sara</PrimaryLink>
            <SecondaryLink href={getCaseStudyPath(featured.slug)}>
              Start with Complete Your Ride
            </SecondaryLink>
            <SecondaryLink href={getCaseStudyPath("specialized-experience-highlights")}>
              View Specialized Highlights
            </SecondaryLink>
          </LandingActions>
        </LandingHero>

        <CaseStudyGrid>
          {CASE_STUDIES.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.slug} href={getCaseStudyPath(caseStudy.slug)}>
              <CaseStudyIndex>{`0${index + 1}`.slice(-2)}</CaseStudyIndex>
              <CaseStudyTitle>{formatCardTitle(caseStudy.title)}</CaseStudyTitle>
              <CaseStudyDescription>{caseStudy.description}</CaseStudyDescription>
              <CaseStudyMeta>
                {caseStudy.tags.map((tag) => (
                  <CaseStudyTag key={`${caseStudy.slug}-${tag.label}`}>
                    {tag.label}
                  </CaseStudyTag>
                ))}
              </CaseStudyMeta>
            </CaseStudyCard>
          ))}
        </CaseStudyGrid>
      </LandingShell>
    </LandingPage>
  );
}
