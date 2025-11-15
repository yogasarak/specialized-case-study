## Overview

This project is a single-scroll case study experience powered by Next.js 16 using the App Router, styled-components, and a data-driven content layer. The root page (`/`) and any additional case studies reuse the same layout and components – content is injected from a central data registry.

## Development

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000) by default. Linting is available via `npm run lint`.

## Case Study Architecture

- `src/components/case-study-view.tsx` renders the full-page experience. It is paired with `case-study-view.styles.ts`, which contains all styled-components so visual updates stay centralized.
- `src/data/case-studies.ts` is the single source of truth for case study metadata (copy, stats, feature lists, image/video URLs, navigation target). The schema is strongly typed via `CaseStudyContent`.
- The home page (`src/app/page.tsx`) loads the default case study defined by `DEFAULT_CASE_STUDY_SLUG` (currently `"landing-case-study"`). Reordering the array or updating the constant swaps the landing experience without modifying the view component.
- `navigation` on each case study entry controls both arrows. All pages—including the landing entry—participate in the circular flow by setting `nextSlug`/`previousSlug`, so additional studies can be inserted or reordered without touching the component.
- `getCaseStudyPath` keeps the canonical URL for the default case study at the root (`/`). Everywhere else the helper returns `/case-studies/<slug>`, so the landing entry remains dynamic while the rest of the sequence exposes explicit slug URLs.
- Additional case studies are served from the dynamic route `src/app/case-studies/[slug]/page.tsx`. The route pulls its data by slug and shares metadata (Open Graph/Twitter) with the root experience.
- The floating right-edge arrow links to the `navigation.nextSlug` defined for each case study, making it easy to chain multiple stories without introducing global navigation.

### Adding a New Case Study

1. **Create Content Entry**
   - Open `src/data/case-studies.ts`.
   - Duplicate one of the existing objects and update:
     - `slug`: unique identifier used in the URL (e.g., `"trail-explorer"`).
     - `title`, `description`, `heroTitle`, `heroIntro`, etc.
     - Media references (`images`, optional `ctas.watchDemo.src`) with hosted URLs.
     - `navigation.nextSlug` and `nextLabel` to control arrow destination.
   - Add the new object to the exported `CASE_STUDIES` array.

2. **Set Default (Optional)**
   - Update `DEFAULT_CASE_STUDY_SLUG` if the homepage should showcase the new case study.

3. **Visit the Route**
   - The new page is automatically available at `/case-studies/<slug>`.
   - No extra routing code or components are required—the dynamic route reads from the data array.

### Updating Media

- Replace URLs inside `images`, `productCards`, or `ctas.watchDemo` with new hosted assets. Because the `CaseStudyView` component consumes these fields directly, no extra code changes are needed.
- The Open Graph preview image (`/opengraph-image`) is generated dynamically during requests, so any change to the favicon asset referenced in the data layer will flow through social previews.

## Open Graph Image

`src/app/opengraph-image.tsx` creates a 1200×630 PNG at request time. It fetches the remote favicon, centers it on a black background, and supplies it to both OG and Twitter metadata. The generator is shared by all case studies, ensuring consistent previews without storing extra assets in the repo.

## Styling Conventions

All visual rules live in `case-study-view.styles.ts` via styled-components. Components import the exact tokens they need, keeping logic and presentation separate. To tweak layout or add new style variants, adjust the relevant styled component definitions.

## Deployment

Deploy as a standard Next.js App Router project. When using Vercel, the dynamic case study route is statically generated thanks to `generateStaticParams`, so new case studies only require a redeploy after editing `case-studies.ts`.
