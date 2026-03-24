## Overview

This project is a portfolio site for Specialized-focused UX and frontend case studies, plus a separate profile/writing layer for broader technical and product-facing work. It is built as a reusable Next.js surface for presenting product strategy, process artifacts, responsive mocks, shipped feature walkthroughs, and technical writing.

The current case study sequence is:

- `complete-your-ride`
- `continue-shopping`
- `discovery-wayfinding`
- `specialized-experience-highlights`

The root route (`/`) is a lightweight landing page that introduces the portfolio and links into those case studies.

The primary profile pages live at `/sarakeyser` and `/resume`, with `/about` retained as a redirect. A writing index lives at `/writing`, with article routes generated from reusable slugs.

## About The Work

These case studies summarize a subset of the work delivered while serving as **Senior Frontend Engineer / UX Feature Lead** at **Specialized Bicycle Components**.

The work spans:

- rider-first wayfinding and product discovery
- persistence and session re-entry patterns
- responsive commerce and PDP enhancement
- design systems and component-library alignment
- platform delivery across Next.js, GraphQL, Apollo, ISR, and caching strategies

## Tech Stack

- Next.js 15 App Router
- TypeScript
- styled-components
- data-driven case study content via `src/data/case-studies.ts`
- markdown-backed writing content via `content/writing/*.md`

## Architecture

- `src/app/page.tsx`
  Renders the custom portfolio landing page.

- `src/app/case-studies/[slug]/page.tsx`
  Renders individual case study pages and their metadata.

- `src/app/about/page.tsx`
  Redirects legacy About traffic to `/sarakeyser`.

- `src/app/sarakeyser/page.tsx`
  Renders the primary About page for the broader portfolio narrative and career progression.

- `src/app/resume/page.tsx`
  Renders the interactive resume page with structured experience, skill groups, and education.

- `src/app/writing/page.tsx`
  Renders the writing index.

- `src/app/writing/[slug]/page.tsx`
  Renders writing articles from the shared slug route.

- `src/app/writing/[slug]/light/page.tsx`
  Renders the light-theme variant for writing articles from the same slug route.

- `src/components/home-landing.tsx`
  Landing page content and navigation into the case studies.

- `src/components/about-page.tsx`
  About page content covering career progression, SaaS/product systems experience, and portfolio context.

- `src/components/resume-page.tsx`
  Resume page content built from typed profile data.

- `src/components/writing-page.tsx`
  Shared writing index surface used by dark and light writing routes.

- `src/components/writing-article-page.tsx`
  Shared article renderer used by all writing slug routes.

- `src/components/profile-page.styles.ts`
  Shared themed styles for About, Resume, and Writing surfaces, with reusable dark/light support.

- `src/data/profile.ts`
  Typed content for About and Resume pages, including metrics, experience, skills, and education.

- `src/data/writing.ts`
  Writing registry containing slug, title, description, topics, and read time for each article.

- `src/lib/writing.ts`
  Markdown loader/parser for writing content in `content/writing`.

- `src/components/case-study-view.tsx`
  Shared case study renderer used by all case study routes.

- `src/components/case-study-view.styles.ts`
  Shared styled-components definitions for the case study experience.

- `src/data/case-studies.ts`
  The single source of truth for case study copy, stats, assets, process artifacts, navigation, and CTA configuration.

## Content Model

Each case study can define:

- hero copy and CTAs
- stats
- challenge and solution sections
- responsive design images
- process artifacts
- flow carousel slides
- interactive session demos
- feature summaries
- results and metrics
- previous / next navigation

This keeps content changes centralized and makes it easy to reorder or refine case studies without rebuilding page structure from scratch.

## Writing Model

Writing content is intentionally lightweight and reusable:

- source markdown files live in `content/writing`
- each post must have a matching metadata entry in `src/data/writing.ts`
- the article URL is derived from the metadata slug: `content/writing/<slug>.md` becomes `/writing/<slug>`
- light-theme article routes are generated at `/writing/<slug>/light`

Current parser support in `src/lib/writing.ts` includes:

- one top-level `#` title
- `##`, `###`, and `####` headings
- paragraphs
- unordered lists using `-`
- fenced code blocks with optional language labels
- horizontal rules using `---`

### Adding A New Writing Post

1. Create a markdown file at `content/writing/<slug>.md`.
2. Add a matching metadata entry to `src/data/writing.ts`.
3. Rebuild the site.

No new route file is needed. The reusable slug routes in `src/app/writing/[slug]/page.tsx` and `src/app/writing/[slug]/light/page.tsx` will pick up the new post automatically through `generateStaticParams`.

## Deployment

Deploy as a standard Next.js App Router project. Case study routes and writing routes are statically generated from their registries, so changes to ordering or content require a rebuild/redeploy.

## Notes

- Open Graph and icon assets are generated through the app routes in `src/app/opengraph-image.tsx` and `src/app/icon.tsx`.
- `npm run build` now runs `npm run lint` first, then `next build`.
- The only known non-blocking build warning is the missing `metadataBase` value for social image URL resolution.

© 2026 Sara Keyser
