"use client";

import {
  resumeEducation,
  resumeExperience,
  resumeSkillGroups,
  type ProfileTone,
} from "@/data/profile";
import {
  BulletList,
  ClosingCard,
  ClosingTitle,
  EducationCard,
  EducationDetail,
  EducationEntry,
  EducationProgram,
  EducationSchool,
  ExperienceCard,
  ExperienceHeader,
  ExperienceStack,
  ExperienceSubhead,
  ExperienceTitle,
  PageEyebrow,
  PageIntro,
  PageTitle,
  ProfileBackArrow,
  ProfilePageInner,
  ProfilePageShell,
  ResumeGrid,
  SidebarStack,
  SkillGroupCard,
  SkillGroupTitle,
  SkillList,
  SkillPill,
  StoryCard,
  StoryCopy,
} from "./profile-page.styles";
import { ProfileActionLinks } from "./profile-action-links";
import { ProfileNav } from "./profile-nav";

type ResumePageProps = {
  tone?: ProfileTone;
};

export function ResumePage({ tone = "dark" }: ResumePageProps) {
  const themeHref = tone === "light" ? "/resume" : "/resume/light";
  const themeLabel = tone === "light" ? "After Hours" : "Studio Light";
  const inverseTone: ProfileTone = tone === "dark" ? "light" : "dark";
  const aboutHref = tone === "light" ? "/sarakeyser/light" : "/sarakeyser";
  const writingHref = tone === "light" ? "/writing/light" : "/writing";
  const heroLinks = [
    { href: aboutHref, label: "About Sara" },
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
          <PageEyebrow $tone={tone}>Resume</PageEyebrow>
          <PageTitle $tone={tone}>experience, scope, and technical range.</PageTitle>
          <PageIntro $tone={tone}>
            UX feature work across global commerce, AI-assisted
            software, SaaS dashboards, and internal tools.
          </PageIntro>
          <PageIntro $tone={tone}>
            Experience spanning frontend architecture, reusable patterns,
            experimentation, and product delivery.
          </PageIntro>
          <ProfileActionLinks
            tone={tone}
            links={heroLinks}
            includeThemeToggle
            themeHref={themeHref}
            themeLabel={themeLabel}
          />
        </StoryCard>

        <ResumeGrid>
          <ExperienceStack>
            {resumeExperience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.dateRange}`} $tone={tone}>
                <ExperienceHeader>
                  <ExperienceTitle $tone={tone}>{item.company}</ExperienceTitle>
                  {/* Keeping dateRange in the typed model for future variants, but hiding it in the current UI. */}
                </ExperienceHeader>
                <ExperienceSubhead $tone={tone}>{item.title}</ExperienceSubhead>
                {item.subtitle ? <StoryCopy $tone={tone}>{item.subtitle}</StoryCopy> : null}
                <BulletList $tone={tone}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </BulletList>
              </ExperienceCard>
            ))}
          </ExperienceStack>

          <SidebarStack>
            {resumeSkillGroups.map((group) => (
              <SkillGroupCard key={group.title} $tone={tone}>
                <SkillGroupTitle $tone={tone}>{group.title}</SkillGroupTitle>
                <SkillList>
                  {group.items.map((item) => (
                    <SkillPill key={item} $tone={tone}>
                      {item}
                    </SkillPill>
                  ))}
                </SkillList>
              </SkillGroupCard>
            ))}

            <EducationCard $tone={tone}>
              <SkillGroupTitle $tone={tone}>Education</SkillGroupTitle>
              {resumeEducation.map((item) => (
                <EducationEntry key={item.school}>
                  <EducationSchool $tone={tone}>{item.school}</EducationSchool>
                  <EducationProgram $tone={tone}>{item.program}</EducationProgram>
                  {item.details.map((detail) => (
                    <EducationDetail key={detail} $tone={tone}>
                      {detail}
                    </EducationDetail>
                  ))}
                </EducationEntry>
              ))}
            </EducationCard>
          </SidebarStack>
        </ResumeGrid>

        <ClosingCard $tone={tone}>
          <ClosingTitle $tone={tone}>
            the record behind the work.
          </ClosingTitle>
          <p>
            Experience across commerce, AI-assisted UX, workflow software, and
            frontend architecture, with the strongest throughline in
            product-facing engineering from definition through delivery.
          </p>
          <ProfileActionLinks
            tone={inverseTone}
            links={heroLinks}
          />
        </ClosingCard>
      </ProfilePageInner>
    </ProfilePageShell>
  );
}
