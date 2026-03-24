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

- `src/app/showcase/product-systems/page.tsx`
  Renders a focused long-scroll showcase page designed for portfolio reviews,
  interview walkthroughs, and direct-link sharing when a tighter narrative is
  useful than the broader case study flow.

- `src/components/home-landing.tsx`
  Landing page content and navigation into the case studies.

- `src/components/case-study-view.tsx`
  Shared case study renderer used by all case study routes.

- `src/components/showcase-page.tsx`
  A dedicated showcase page that frames the work around product systems
  design, stakeholder complexity, process, delivery, and outcomes.

- `src/components/case-study-view.styles.ts`
  Shared styled-components definitions for the case study experience.

- `src/components/showcase-page.styles.ts`
  Styled-components definitions for the showcase route.

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

## Showcase Page

The site includes a separate showcase route at:

- `/showcase/product-systems`

This page is intentionally different from the standard case study pages. Instead
of presenting one project through the shared case study template, it curates the
work into a single long-scroll narrative focused on:

- product systems design
- strategic framing
- stakeholder alignment
- process and delivery
- relevance beyond ecommerce

### UX intent

The showcase page is meant to function as a guided walkthrough artifact. It is
useful when the audience needs more framing than the standard portfolio pages
provide, especially for conversations about systems thinking, cross-functional
collaboration, and product complexity.

The page uses:

- a dedicated section menu
- in-page anchor links
- a long-scroll layout for uninterrupted storytelling
- a bottom-of-page back-to-top affordance

### Technical behavior

Each major section has an `id`, and the left-side menu links to those sections
with fragment identifiers such as:

- `#overview`
- `#why-systems`
- `#primary-case`
- `#process`
- `#stakeholders`
- `#supporting`
- `#outcomes`

This means the URL can be shared with a section target appended, for example:

- `/showcase/product-systems#process`

From a UX standpoint, this supports:

- quicker navigation within a long page
- direct linking to the most relevant section for a conversation
- a lighter-weight alternative to building a separate slide deck

From a technical standpoint, this keeps the page simple:

- no client-side router state is required for section navigation
- anchors are stable and human-readable
- scrolling behavior is handled by the browser with CSS-assisted smooth scroll
- the route remains fully static and shareable

## Deployment

Deploy as a standard Next.js App Router project. The case study routes are statically generated from the case study registry, so changes to ordering or content require a rebuild/redeploy.

## Notes

- Open Graph and icon assets are generated through the app routes in `src/app/opengraph-image.tsx` and `src/app/icon.tsx`.
- The only known non-blocking build warning is the missing `metadataBase` value for social image URL resolution.

© 2026 Sara Keyser
