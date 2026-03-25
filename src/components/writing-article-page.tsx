"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { ProfileTone } from "@/data/profile";
import type { WritingBlock } from "@/lib/writing";
import {
  HeroCard,
  PageEyebrow,
  PageIntro,
  PageTitle,
  ProfilePageInner,
  ProfilePageShell,
  StoryCard,
} from "./profile-page.styles";
import { ProfileActionLinks } from "./profile-action-links";
import { ProfileNav } from "./profile-nav";

type WritingArticlePageProps = {
  title: string;
  description: string;
  topics: readonly string[];
  readTime: string;
  slug: string;
  blocks: WritingBlock[];
  tone?: ProfileTone;
};

function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/gu).map((part, index) => {
    if (!part) {
      return null;
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          style={{
            padding: "0.12em 0.4em",
            borderRadius: 8,
            background: "rgba(242, 203, 5, 0.14)",
            color: "#f4e585",
            fontSize: "0.92em",
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function renderBlock(block: WritingBlock, tone: ProfileTone, index: number) {
  const copyColor = tone === "dark" ? "#ddd3c4" : "#404040";
  const headingColor = tone === "dark" ? "#f7f3ea" : "#171717";
  const listColor = tone === "dark" ? "#ddd3c4" : "#353535";

  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: copyColor }}>
          {renderInlineMarkdown(block.text)}
        </p>
      );

    case "heading": {
      const fontSize =
        block.level === 2 ? "clamp(1.8rem, 2.5vw, 2.3rem)" : block.level === 3 ? "1.32rem" : "1.08rem";

      return (
        <h2
          key={index}
          style={{
            margin: 0,
            fontSize,
            lineHeight: block.level === 2 ? 1.08 : 1.28,
            letterSpacing: block.level === 2 ? "-0.04em" : "-0.02em",
            color: headingColor,
          }}
        >
          {renderInlineMarkdown(block.text)}
        </h2>
      );
    }

    case "list":
      return (
        <ul
          key={index}
          style={{
            margin: 0,
            paddingLeft: 22,
            display: "grid",
            gap: 12,
            color: listColor,
          }}
        >
          {block.items.map((item) => (
            <li key={item} style={{ fontSize: 16, lineHeight: 1.75 }}>
              {renderInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div
          key={index}
          style={{
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid #31363f",
            background: "linear-gradient(180deg, #252526 0%, #1e1e1e 100%)",
            boxShadow: "0 22px 54px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              background: "#2d2d30",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#27c93f" }} />
            </div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9da5b4",
              }}
            >
              {block.language || "code"}
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              overflowX: "auto",
              padding: "22px 24px",
              color: "#d4d4d4",
              fontSize: 14,
              lineHeight: 1.75,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "hr":
      return (
        <div
          key={index}
          style={{
            height: 1,
            width: "100%",
            background: tone === "dark" ? "rgba(243, 239, 229, 0.1)" : "rgba(23, 23, 23, 0.1)",
          }}
        />
      );
  }
}

export function WritingArticlePage({
  title,
  description,
  topics,
  readTime,
  slug,
  blocks,
  tone = "dark",
}: WritingArticlePageProps) {
  const aboutHref = tone === "dark" ? "/sarakeyser" : "/sarakeyser/light";
  const writingHref = tone === "dark" ? "/writing" : "/writing/light";
  const themeHref =
    tone === "dark" ? `/writing/${slug}/light` : `/writing/${slug}`;
  const themeLabel = tone === "light" ? "After Hours" : "Studio Light";
  const resumeHref = tone === "dark" ? "/resume" : "/resume/light";
  const heroLinks = [
    { href: aboutHref, label: "About Sara" },
    { href: resumeHref, label: "Resume", variant: "secondary" as const },
    { href: "/", label: "Case Studies", variant: "secondary" as const },
  ] as const;
  const arrowToneStyles =
    tone === "dark"
      ? {
          background: "#f3efe5",
          border: "1px solid #f3efe5",
          color: "#111111",
        }
      : {
          background: "#171717",
          border: "1px solid #171717",
          color: "#ffffff",
        };

  return (
    <ProfilePageShell $tone={tone}>
      <ProfileNav tone={tone} />

      <ProfilePageInner>
        <HeroCard $tone={tone}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <PageEyebrow $tone={tone}>
              Writing • {readTime} • {topics.join(" ")}
            </PageEyebrow>
            <Link
              href={writingHref}
              aria-label="Back to writing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 46,
                height: 46,
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.22)",
                ...arrowToneStyles,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.5 3.5L5.5 8L10.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <PageTitle $tone={tone}>{title}</PageTitle>
          <PageIntro $tone={tone}>{description}</PageIntro>
          <ProfileActionLinks
            tone={tone}
            links={heroLinks}
            includeThemeToggle
            themeHref={themeHref}
            themeLabel={themeLabel}
          />
        </HeroCard>

        <StoryCard
          as="article"
          $tone={tone}
          style={{
            gap: 24,
            padding: "40px clamp(24px, 4vw, 42px)",
          }}
        >
          {blocks.map((block, index) => renderBlock(block, tone, index))}
        </StoryCard>
      </ProfilePageInner>
    </ProfilePageShell>
  );
}
