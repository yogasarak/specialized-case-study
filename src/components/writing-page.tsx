"use client";

import Link from "next/link";
import type { ProfileTone } from "@/data/profile";
import { WRITING_POSTS } from "@/data/writing";
import {
  ExperienceCard,
  ExperienceMeta,
  ExperienceStack,
  ExperienceTitle,
  HeroCard,
  PageEyebrow,
  PageIntro,
  PageTitle,
  ProfileBackArrow,
  ProfilePageInner,
  ProfilePageShell,
  StoryCopy,
} from "./profile-page.styles";
import { ProfileActionLinks } from "./profile-action-links";
import { ProfileNav } from "./profile-nav";

type WritingPageProps = {
  tone?: ProfileTone;
};

export function WritingPage({ tone = "dark" }: WritingPageProps) {
  const aboutHref = tone === "dark" ? "/sarakeyser" : "/sarakeyser/light";
  const themeHref = tone === "dark" ? "/writing/light" : "/writing";
  const themeLabel = tone === "light" ? "After Hours" : "Studio Light";
  const resumeHref = tone === "dark" ? "/resume" : "/resume/light";
  const heroLinks = [
    { href: aboutHref, label: "About Sara" },
    { href: resumeHref, label: "Resume", variant: "secondary" as const },
    { href: "/", label: "Case Studies", variant: "secondary" as const },
  ] as const;

  return (
    <ProfilePageShell $tone={tone}>
      <ProfileNav tone={tone} />
      <ProfileBackArrow href="/" aria-label="Back to landing page" $tone={tone}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10.5 3.5L5.5 8L10.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ProfileBackArrow>

      <ProfilePageInner>
        <HeroCard $tone={tone}>
          <PageEyebrow $tone={tone}>Writing</PageEyebrow>
          <PageTitle $tone={tone}>technical notes on frontend systems and product behavior.</PageTitle>
          <PageIntro $tone={tone}>
            Technical writing alongside the portfolio: framework tradeoffs, rendering choices,
            shipped product constraints, and the implementation decisions behind the work.
          </PageIntro>
          <ProfileActionLinks
            tone={tone}
            links={heroLinks}
            includeThemeToggle
            themeHref={themeHref}
            themeLabel={themeLabel}
          />
        </HeroCard>

        <ExperienceStack>
          {WRITING_POSTS.map((post, index) => {
            const postHref =
              tone === "dark"
                ? `/writing/${post.slug}`
                : `/writing/${post.slug}/light`;

            return (
              <ExperienceCard
                key={post.slug}
                as={Link}
                href={postHref}
                $tone={tone}
                $featured
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ExperienceMeta $tone={tone}>
                  {`0${index + 1}`.slice(-2)} • {post.readTime} • {post.topics.join(" ")}
                </ExperienceMeta>
                <ExperienceTitle $tone={tone}>{post.title}</ExperienceTitle>
                <StoryCopy $tone={tone}>{post.description}</StoryCopy>
              </ExperienceCard>
            );
          })}
        </ExperienceStack>
      </ProfilePageInner>
    </ProfilePageShell>
  );
}
