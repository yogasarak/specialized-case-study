## Overview

This project is a single-scroll case-study experience engineered as a reusable UX portfolio surface. It highlights bespoke wayfinding features designed to improve rider discovery on specialized.com and documents the impact of those initiatives.

### About This Work

These case studies summarize a subset of the features delivered while serving as *Senior Frontend Engineer & UX Feature Lead* at *Specialized Bicycle Components*:

- Led the end-to-end delivery of high-impact wayfinding features—from co-creating UX strategy with senior designers to independently engineering bespoke interactions such as the PLP carousel (pure custom implementation, no third-party libraries).
- Architected the Next.js stack to support reusable data-driven case studies, dynamic content ingestion, and performance-focused deployments (ISR, elevated caching).
- Drove A/B experimentation, iterative refinement, and multi-market rollouts, ensuring each feature accelerated rider discovery and checkout while maintaining a cohesive design-system handshake.

The showcased carousel and session-persistence modules represent a broader program of 50+ PLP enhancements that consistently lifted conversion, session continuity, and revenue.

## Technical Synopsis

The site is built on Next.js 16 with the App Router and a fully dynamic data layer. Each entry (including the landing page) is generated from typed content modules, so logic stays decoupled from presentation. Key capabilities include:

- Centralized case-study registry powering both `/` and `/case-studies/[slug]`
- Shared client component with SOC style modules for behavior/presentation split
- Dynamic OG image generation sourcing the same remote assets as the content layer
- Data-driven navigation arrows; no hardcoded UI flow
- Helper routing that keeps the default case study at `/` while slugged pages live under `/case-studies/<slug>`

The result is an advanced single-page experience that still supports deep linking, responsive media parity, and fast ingestion of future studies.

## Case Study Architecture

- `src/components/case-study-view.tsx` renders the full-page experience. It is paired with `case-study-view.styles.ts`, which contains all styled-components so visual updates stay centralized.
- `src/data/case-studies.ts` is the single source of truth for case study metadata (copy, stats, feature lists, image/video URLs, navigation target). The schema is strongly typed via `CaseStudyContent`.
- The home page (`src/app/page.tsx`) loads the default case study defined by `DEFAULT_CASE_STUDY_SLUG` (currently `"landing-case-study"`). Reordering the array or updating the constant swaps the landing experience without modifying the view component.
- `navigation` on each case study entry controls both arrows. All pages—including the landing entry—participate in the circular flow by setting `nextSlug`/`previousSlug`, so additional studies can be inserted or reordered without touching the component.
- `getCaseStudyPath` keeps the canonical URL for the default case study at the root (`/`). Everywhere else the helper returns `/case-studies/<slug>`, so the landing entry remains dynamic while the rest of the sequence exposes explicit slug URLs.
- Additional case studies are served from the dynamic route `src/app/case-studies/[slug]/page.tsx`. The route pulls its data by slug and shares metadata (Open Graph/Twitter) with the root experience.
- The floating right-edge arrow links to the `navigation.nextSlug` defined for each case study, making it easy to chain multiple stories without introducing global navigation.

## Open Graph Image

`src/app/opengraph-image.tsx` creates a 1200×630 PNG at request time. It fetches the remote favicon, centers it on a black background, and supplies it to both OG and Twitter metadata. The generator is shared by all case studies, ensuring consistent previews without storing extra assets in the repo.

## Styling Conventions

All visual rules live in `case-study-view.styles.ts` via styled-components. Components import the exact tokens they need, keeping logic and presentation separate. 

## Deployment

Deploy as a standard Next.js App Router project. When using Vercel, the dynamic case study route is statically generated thanks to `generateStaticParams`, so new case studies only require a redeploy after editing `case-studies.ts`.

© 2025 Sara Keyser all rights reserved