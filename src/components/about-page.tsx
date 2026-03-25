"use client";

import {
  aboutCapabilityCards,
  aboutExperienceHighlights,
  aboutMetrics,
  aboutStoryCards,
  type ProfileTone,
} from "@/data/profile";
import {
  BulletList,
  CapabilityCard,
  CapabilityCopy,
  CapabilityGrid,
  CapabilityTitle,
  ClosingCard,
  ClosingTitle,
  ExperienceCard,
  ExperienceHeader,
  ExperienceMeta,
  ExperienceStack,
  ExperienceTitle,
  MetricCard,
  MetricGrid,
  MetricLabel,
  MetricValue,
  PageEyebrow,
  PageIntro,
  PageTitle,
  ProfileBackArrow,
  ProfilePageInner,
  ProfilePageShell,
  StoryCard,
  StoryCopy,
  StoryEyebrow,
  StoryTitle,
  SectionGrid,
} from "./profile-page.styles";
import { ProfileActionLinks } from "./profile-action-links";
import { ProfileNav } from "./profile-nav";

type AboutPageProps = {
  tone?: ProfileTone;
};

export function AboutPage({ tone = "dark" }: AboutPageProps) {
  const themeHref = tone === "light" ? "/sarakeyser" : "/sarakeyser/light";
  const themeLabel = tone === "light" ? "After Hours" : "Studio Light";
  const inverseTone: ProfileTone = tone === "dark" ? "light" : "dark";
  const writingHref = tone === "light" ? "/writing/light" : "/writing";
  const heroLinks = [
    { href: "/resume", label: "Resume" },
    { href: "/", label: "Case Studies", variant: "secondary" as const },
    { href: writingHref, label: "Technical Writing", variant: "secondary" as const },
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
        <StoryCard as="section" $tone={tone}>
          <PageEyebrow $tone={tone}>About Sara Keyser</PageEyebrow>
          <PageTitle $tone={tone}>
            senior frontend engineer for product systems.
          </PageTitle>
          <PageIntro $tone={tone}>
            Specializing in interaction models, stateful UI architecture, and the decisions that make software clear, predictable, and usable.
          </PageIntro>
          <ProfileActionLinks
            tone={tone}
            links={heroLinks}
            includeThemeToggle
            themeHref={themeHref}
            themeLabel={themeLabel}
          />
        </StoryCard>

        <MetricGrid>
          {aboutMetrics.map((item) => (
            <MetricCard key={item.label} $tone={tone} $featured>
              <MetricValue $tone={tone} $featured>{item.value}</MetricValue>
              <MetricLabel $tone={tone} $featured>{item.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricGrid>

        <SectionGrid>
          {aboutStoryCards.map((card) => (
            <StoryCard key={card.title} $tone={tone}>
              {card.eyebrow ? <StoryEyebrow $tone={tone}>{card.eyebrow}</StoryEyebrow> : null}
              <StoryTitle $tone={tone}>{card.title}</StoryTitle>
              <StoryCopy $tone={tone}>{card.copy}</StoryCopy>
              {card.bullets?.length ? (
                <BulletList $tone={tone}>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </BulletList>
              ) : null}
            </StoryCard>
          ))}
        </SectionGrid>

        <ExperienceStack>
          {aboutExperienceHighlights.map((item) => (
            <ExperienceCard key={item.title} $tone={tone} $featured>
              <ExperienceHeader>
                <ExperienceTitle $tone={tone}>{item.title}</ExperienceTitle>
                {item.eyebrow ? <ExperienceMeta $tone={tone}>{item.eyebrow}</ExperienceMeta> : null}
              </ExperienceHeader>
              <StoryCopy $tone={tone}>{item.copy}</StoryCopy>
              {item.bullets?.length ? (
                <BulletList $tone={tone}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </BulletList>
              ) : null}
            </ExperienceCard>
          ))}
        </ExperienceStack>

        <CapabilityGrid>
          {aboutCapabilityCards.map((item) => (
            <CapabilityCard key={item.title} $tone={tone} $toolbox>
              <CapabilityTitle $tone={tone} $toolbox>{item.title}</CapabilityTitle>
              <CapabilityCopy $tone={tone} $toolbox>{item.copy}</CapabilityCopy>
            </CapabilityCard>
          ))}
        </CapabilityGrid>

        <ClosingCard $tone={tone} $featured>
          <ClosingTitle $tone={tone}>
            where product judgment holds up in build.
          </ClosingTitle>
          <p>The throughline is building software that stays clear in use and reliable to extend as products evolve.</p>
          <ProfileActionLinks
            tone={inverseTone}
            links={heroLinks}
          />
        </ClosingCard>
      </ProfilePageInner>
    </ProfilePageShell>
  );
}
