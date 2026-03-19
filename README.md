## Overview

This project is a portfolio site for Specialized-focused UX and frontend case studies. It is built as a reusable Next.js surface for presenting product strategy, process artifacts, responsive mocks, and shipped feature walkthroughs.

The current case study sequence is:

- `complete-your-ride`
- `continue-shopping`
- `discovery-wayfinding`
- `specialized-experience-highlights`

The root route (`/`) is a lightweight landing page that introduces the portfolio and links into those case studies.

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

## Architecture

- `src/app/page.tsx`
  Renders the custom portfolio landing page.

- `src/app/case-studies/[slug]/page.tsx`
  Renders individual case study pages and their metadata.

- `src/components/home-landing.tsx`
  Landing page content and navigation into the case studies.

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

## Deployment

Deploy as a standard Next.js App Router project. The case study routes are statically generated from the case study registry, so changes to ordering or content require a rebuild/redeploy.

## Notes

- Open Graph and icon assets are generated through the app routes in `src/app/opengraph-image.tsx` and `src/app/icon.tsx`.
- The only known non-blocking build warning is the missing `metadataBase` value for social image URL resolution.

© 2026 Sara Keyser
