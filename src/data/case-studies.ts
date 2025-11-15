export type ToggleOption = "Desktop" | "Mobile";
export type TagVariant = "dark" | "light";

export type CaseStudyContent = {
  slug: string;
  title: string;
  description: string;
  tags: ReadonlyArray<{ label: string; variant: TagVariant }>;
  heroTitle: string;
  heroIntro: string;
  ctas: {
    viewLive: { label: string; href: string };
    watchDemo?: { label: string; ariaLabel: string; src: string };
  };
  stats: ReadonlyArray<{ value: string; label: string }>;
  challengeParagraph: string;
  challengePoints: ReadonlyArray<string>;
  solutionParagraph: string;
  solutionPoints: ReadonlyArray<string>;
  responsiveDescription: string;
  viewOptions: ReadonlyArray<ToggleOption>;
  images: Record<
    ToggleOption,
    { src: string; alt: string; width: number; height: number }
  >;
  categoryLabels: ReadonlyArray<string>;
  filterLabels: ReadonlyArray<string>;
  financingText: string;
  productCards: ReadonlyArray<{ name: string; price: string }>;
  featureCards: ReadonlyArray<{ title: string; copy: string }>;
  resultsParagraph: string;
  resultsMetrics: ReadonlyArray<string>;
  resultsFeedback: ReadonlyArray<string>;
  navigation: {
    nextSlug: string;
    nextLabel: string;
    previousSlug: string;
    previousLabel: string;
  };
};

const landingCaseStudy: CaseStudyContent = {
  slug: "landing-case-study",
  title: "Landing Case Study",
  description:
    "A high-level overview that showcases how Specialized’s case studies surface product experience wins while guiding partners through the transformation journey.",
  tags: [
    { label: "Case Studies", variant: "dark" },
    { label: "Overview", variant: "light" },
    { label: "Experience Strategy", variant: "light" },
  ],
  heroTitle: "Case Study Landing: Specialized Experience Highlights",
  heroIntro:
    "This landing entry stitches together the Specialized experience workstreams, demonstrating how guided discovery, session continuity, and responsive storytelling come together to drive measurable impact.",
  ctas: {
    viewLive: {
      label: "Explore Specialized.com",
      href: "https://www.specialized.com/us/en",
    },
  },
  stats: [
    { value: "3", label: "Experience Pillars" },
    { value: "27%", label: "Avg Conversion Lift" },
    { value: "2.4x", label: "Faster Product Discovery" },
    { value: "94%", label: "Positive Session Feedback" },
  ],
  challengeParagraph:
    "Stakeholders needed a single narrative that explains how the Specialized commerce ecosystem evolved—from navigation clarity to personalized re-entry—without fragmenting the story across multiple touchpoints.",
  challengePoints: [
    "Multiple initiatives launching without a unified storyline",
    "Hard to showcase how individual UX wins ladder to macro conversion gains",
    "Context switching between artifacts causing knowledge gaps",
    "Need for a repeatable template that future case studies can plug into",
  ],
  solutionParagraph:
    "We created a reusable case-study shell that integrates responsive storytelling, data-backed outcomes, and navigation that mirrors the rider journey. Each subsequent detail page inherits the same structure, making it easy to compare results and dive deeper.",
  solutionPoints: [
    "Codified a modular data model (content, imagery, metrics, navigation)",
    "Anchored the hero in business outcomes with fast access to deeper dives",
    "Provided guidelines for responsive imagery and media presentation",
    "Established previous/next chaining so all studies feel part of a continuum",
  ],
  responsiveDescription:
    "The landing experience matches the detail pages for parity—responsive hero, stats grid, and mobile-friendly navigation—so partners can switch contexts without cognitive overhead.",
  viewOptions: ["Desktop", "Mobile"],
  images: {
    Desktop: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_Destop.png",
      alt: "Desktop view of the Specialized landing case study carousel.",
      width: 1200,
      height: 760,
    },
    Mobile: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_mobile.jpg",
      alt: "Mobile view of the Specialized landing case study carousel.",
      width: 375,
      height: 1352,
    },
  },
  categoryLabels: [
    "Guided Discovery",
    "Session Intelligence",
    "Product Storytelling",
    "Performance Metrics",
    "Design System",
  ],
  filterLabels: [
    "View Detail Case Study",
    "Compare Initiatives",
    "Share Highlights",
    "Request Walkthrough",
    "Download PDF",
  ],
  financingText:
    "Case study taxonomy continuously expands as new Specialized initiatives launch.",
  productCards: [
    { name: "Wayfinding PLP Carousel", price: "Explore" },
    { name: "Continue Shopping Memory", price: "Resume" },
    { name: "Concept Storefront", price: "Preview" },
    { name: "Design System Guidelines", price: "Download" },
    { name: "KPI Dashboard", price: "Inspect" },
    { name: "Team Credits", price: "View" },
  ],
  featureCards: [
    {
      title: "Reusable Framework",
      copy:
        "A single schema powers every case study, keeping presentation uniform while letting each initiative tell its own story.",
    },
    {
      title: "Navigation Continuity",
      copy:
        "Circular previous/next controls echo rider journeys and ensure stakeholders can loop through each initiative without dead ends.",
    },
    {
      title: "Data Transparency",
      copy:
        "Every section maps to measurable outputs so new case studies can plug in KPIs without redesigning the experience.",
    },
    {
      title: "Scalable Authoring",
      copy:
        "Content lives in a TypeScript data registry, making it trivial to add or update studies without touching layout code.",
    },
  ],
  resultsParagraph:
    "Centralizing the Specialized story into a consistent framework made it easier to communicate wins, onboard stakeholders, and reuse the platform for future initiatives.",
  resultsMetrics: [
    "50% faster to publish new experience case studies",
    "Single source of truth for imagery, copy, and KPIs",
    "Stakeholders complete walkthroughs in under 5 minutes",
    "Consistent responsive behavior across every initiative",
  ],
  resultsFeedback: [
    "“I can finally see how all of the Specialized work connects.”",
    "Marketing and product teams reuse the framework for new launches.",
    "Executives cite the landing as the go-to storytelling artifact.",
    "Partners appreciated the seamless navigation between initiatives.",
  ],
  navigation: {
    nextSlug: "wayfinding-plp-carousel",
    nextLabel: "Next: Wayfinding PLP Carousel Case Study",
    previousSlug: "concept-storefront",
    previousLabel: "Back: Concept Storefront Case Study",
  },
};

const wayfindingCaseStudy: CaseStudyContent = {
  slug: "wayfinding-plp-carousel",
  title: "Wayfinding PLP Carousel Case Study",
  description:
    "Designing a guided product listing carousel that keeps riders oriented, drives discovery velocity, and lifts conversions across Specialized’s catalog.",
  tags: [
    { label: "E-Commerce", variant: "dark" },
    { label: "UX/UI Design", variant: "light" },
    { label: "Responsive Design", variant: "light" },
  ],
  heroTitle: "Wayfinding PLP Carousel: Guided Discovery for Specialized Riders",
  heroIntro:
    "We reimagined the Specialized product listing experience with a wayfinding carousel that anchors riders to high-interest categories, reduces navigation thrash, and accelerates the path to the perfect bike.",
  ctas: {
    viewLive: {
      label: "View Live Site",
      href: "https://www.specialized.com/us/en/shop/bikes/electric-bikes",
    },
    watchDemo: {
      label: "Watch Demo",
      ariaLabel: "Specialized bikes demo video",
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/plp-carousel.mov",
    },
  },
  stats: [
    { value: "32%", label: "Increase in Engagement" },
    { value: "24%", label: "Higher Conversion Rate" },
    { value: "45%", label: "Faster Product Discovery" },
    { value: "4.8/5", label: "User Satisfaction Score" },
  ],
  challengeParagraph:
    "Specialized's existing product listing page was overwhelming users with too many options and lacked clear categorization. Users struggled to find the right bike type, and the mobile experience was particularly challenging.",
  challengePoints: [
    "Poor mobile experience with cramped layouts",
    "Unclear product categorization and filtering",
    "Low engagement with category hero images",
    "Inconsistent design system across breakpoints",
  ],
  solutionParagraph:
    "We redesigned the product listing page with a focus on visual hierarchy, improved categorization, and responsive design. The new design features large hero images for each bike category, streamlined filtering, and a mobile-first approach.",
  solutionPoints: [
    "Introduced engaging category cards with lifestyle imagery",
    "Redesigned filtering system with clear visual hierarchy",
    "Created fully responsive layouts for mobile and desktop",
    "Implemented consistent design system and components",
  ],
  responsiveDescription:
    "The design seamlessly adapts from desktop to mobile, maintaining visual consistency and usability across all devices.",
  viewOptions: ["Desktop", "Mobile"],
  images: {
    Desktop: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_Destop.png",
      alt: "Desktop layout showcasing the Specialized bikes product listing page.",
      width: 1200,
      height: 760,
    },
    Mobile: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_mobile.jpg",
      alt: "Mobile layout showcasing the Specialized bikes product listing page.",
      width: 375,
      height: 1352,
    },
  },
  categoryLabels: [
    "Electric Bikes",
    "Mountain Bikes",
    "Road Bikes",
    "Gravel Bikes",
    "Active Bikes",
  ],
  filterLabels: ["Relevance", "In Stock", "Clear All", "Compare", "All Filters"],
  financingText: "Financing Available with Klarna. Learn More",
  productCards: [
    { name: "Turbo Vado SL 5.0", price: "$5,250" },
    { name: "Turbo Vado SL 5.0", price: "$5,000" },
    { name: "Turbo Vado SL 5.0", price: "$6,000" },
    { name: "Turbo Como 4.0", price: "$3,250" },
    { name: "Turbo Como 5.0", price: "$3,250" },
    { name: "Turbo Como 4.0", price: "$4,250" },
  ],
  featureCards: [
    {
      title: "Visual Categorization",
      copy:
        "Large, engaging hero images for each bike category (Electric, Mountain, Road, Gravel, Active) help users quickly identify and navigate to their interest area.",
    },
    {
      title: "Enhanced Filtering",
      copy:
        'Streamlined filter system with clear visual hierarchy, active filter tags, and a dedicated "All Filters" panel for advanced product discovery.',
    },
    {
      title: "Mobile Optimization",
      copy:
        "Redesigned mobile experience with touch-friendly controls, optimized spacing, and a bottom-sheet filter interface for seamless on-the-go browsing.",
    },
  ],
  resultsParagraph:
    "The redesigned product listing page significantly improved user engagement and conversion rates. User testing showed a dramatic increase in task completion rates and overall satisfaction.",
  resultsMetrics: [
    "32% increase in category engagement",
    "24% improvement in conversion rate",
    "45% reduction in time to find products",
    "58% decrease in bounce rate on mobile",
  ],
  resultsFeedback: [
    "Users praised the visual category system",
    "Improved brand perception and trust",
    "Higher mobile user satisfaction scores",
    "Positive feedback on filtering experience",
  ],
  navigation: {
    nextSlug: "continue-shopping",
    nextLabel: "Next: Continue Shopping Flow Case Study",
    previousSlug: "landing-case-study",
    previousLabel: "Back: Landing Case Study",
  },
};

const continueShoppingCaseStudy: CaseStudyContent = {
  slug: "continue-shopping",
  title: "Continue Shopping Persistence UX Case Study",
  description:
    "Designing a wayfinding system that remembers the last viewed product so riders can resume shopping without repeating deep navigation steps.",
  tags: [
    { label: "UX Strategy", variant: "dark" },
    { label: "Personalization", variant: "light" },
    { label: "Conversion Optimization", variant: "light" },
  ],
  heroTitle: "Continue Shopping: Memory-Driven Wayfinding for Specialized",
  heroIntro:
    "We introduced a persistent “Continue Shopping” module that stores the rider’s last viewed bike in session storage, allowing instant return to context even after exploring other categories. The treatment shortens rediscovery time and supports higher intent sessions.",
  ctas: {
    viewLive: {
      label: "Review Spec",
      href: "https://www.specialized.com/us/en",
    },
  },
  stats: [
    { value: "19%", label: "Lift in PDP Return Rate" },
    { value: "27%", label: "Increase in Saved Buildups" },
    { value: "2.1x", label: "Faster Rediscovery Time" },
    { value: "92%", label: "Session Continuity Satisfaction" },
  ],
  challengeParagraph:
    "User story: As a rider returning to the site I want to be presented with a path back to the product I was previously viewing, so that I can quickly and easily resume my previous journey and make a purchase. Riders frequently lost the trail to the bikes they had vetted. After drilling deep into a PDP, navigating back through the full taxonomy created cognitive overload and abandoned sessions. Without a memory of the last touchpoint, high intent shoppers were forced to restart the filtering journey.",
  challengePoints: [
    "Session context reset after leaving a PDP",
    "Fragmented navigation patterns across desktop and mobile",
    "Limited visibility to previously configured builds",
    "Competitive platforms offering persistent carts and recently viewed modules",
    "Assumption: introducing additional prompts must not distract or frustrate riders",
  ],
  solutionParagraph:
    "We instrumented a session-based persistence layer that listens for PDP impressions and stores the featured build in browser session storage. A responsive ‘Continue Shopping’ rail promotes the last viewed bike with configuration metadata, offering direct access from any category surface.",
  solutionPoints: [
    "Session storage module captures bike ID, imagery, pricing, and filter state",
    "Context card injected into hero and filter strip breakpoints",
    "One-tap return CTA respecting previously applied filters",
    "Guardrails for privacy and graceful expiry between sessions",
    "Modal behaviors modeled on the winning AB test to preserve consistency",
  ],
  responsiveDescription:
    "The module adapts its hierarchy across viewport sizes. Desktop surfaces a landscape card with copy and action buttons; mobile collapses into a sticky drawer with quick re-entry.",
  viewOptions: ["Desktop", "Mobile"],
  images: {
    Desktop: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/Continue%20Shopping.png",
      alt:
        "Desktop view of the Specialized continue shopping module showing the last viewed bike summary.",
      width: 1200,
      height: 720,
    },
    Mobile: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/Continue%20Shopping%20Mobile.png",
      alt:
        "Mobile view of the continue shopping drawer highlighting a saved bike from the last session interaction.",
      width: 375,
      height: 1352,
    },
  },
  categoryLabels: [
    "Recently Viewed",
    "Saved Builds",
    "Recommended Upgrades",
    "Size Guidance",
    "Accessories Bundle",
  ],
  filterLabels: [
    "Last Filter Set",
    "Return to PDP",
    "Compare Build",
    "Share Configuration",
    "Clear Session",
  ],
  financingText:
    "Session memory secured for 24 hours. Clear any time from Preferences.",
  productCards: [
    { name: "Last Viewed: Turbo Levo SL", price: "Resumable" },
    { name: "Alternate: Stumpjumper EVO", price: "Suggested" },
    { name: "Accessory Bundle", price: "Add-on" },
    { name: "Save to Account", price: "Sync >" },
    { name: "Share Build", price: "Copy Link" },
    { name: "Clear Continue Shopping", price: "Reset" },
  ],
  featureCards: [
    {
      title: "Session Intelligence",
      copy:
        "Client-side session storage schemas capture PDP context, rider fit data, and filter state, enabling frictionless rehydration on return.",
    },
    {
      title: "Cross-Viewport Wayfinding",
      copy:
        "Modular component variants ensure the continue shopping entry point is discoverable on desktop hero rails and mobile sticky utilities.",
    },
    {
      title: "Engineering Observability",
      copy:
        "Event instrumentation tracks return-to-PDP funnels, expiration events, and opt-outs to monitor privacy compliance and effectiveness.",
    },
    {
      title: "Acceptance Criteria Alignment",
      copy:
        "Designs adhere to brand standards, cover all locales, avoid clashes with existing modals, and provide engineering-ready specs matching the successful AB test behaviors.",
    },
  ],
  resultsParagraph:
    "By embedding contextual memory directly in the browsing experience, riders reclaimed the bikes they cared about faster and converted with higher confidence. The experience lowered navigation thrash and improved downstream accessory attachment.",
  resultsMetrics: [
    "65% reduction in redundant category traversals",
    "19% uplift in return-to-PDP conversion",
    "34 sec decrease in time to resume evaluation",
    "12% increase in multi-product cart creation",
  ],
  resultsFeedback: [
    "“I never lost the bike I liked—this feels like a concierge.”",
    "Product teams gained visibility through session analytics dashboards.",
    "CX reported fewer tickets about ‘lost’ builds during comparison.",
    "Stakeholders cited the module as a core personalization win.",
    "Design and engineering teams validated the solution met acceptance criteria and could be implemented without modal conflicts.",
  ],
  navigation: {
    nextSlug: "concept-storefront",
    nextLabel: "Next: Concept Storefront Case Study",
    previousSlug: "wayfinding-plp-carousel",
    previousLabel: "Back: Wayfinding PLP Carousel Case Study",
  },
};

const conceptStorefrontCaseStudy: CaseStudyContent = {
  ...wayfindingCaseStudy,
  slug: "concept-storefront",
  title: "Specialized Bikes E-Commerce Case Study",
  description:
    "A comprehensive redesign of Specialized's product listing page highlighting responsive shopping, streamlined filtering, and higher conversion performance.",
  heroTitle: "Specialized Bikes: Redesigning the E-Commerce Experience",
  heroIntro:
    "A comprehensive redesign of Specialized's product listing page to improve user engagement, streamline bike discovery, and increase conversion rates through enhanced filtering, responsive design, and intuitive navigation.",
  navigation: {
    nextSlug: "landing-case-study",
    nextLabel: "Back to Landing Case Study",
    previousSlug: "continue-shopping",
    previousLabel: "Back: Continue Shopping Case Study",
  },
};

export const CASE_STUDIES: ReadonlyArray<CaseStudyContent> = [
  landingCaseStudy,
  wayfindingCaseStudy,
  continueShoppingCaseStudy,
  conceptStorefrontCaseStudy,
];

export const DEFAULT_CASE_STUDY_SLUG =
  CASE_STUDIES[0]?.slug ?? "wayfinding-plp-carousel";

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyPath(slug: string) {
  if (slug === DEFAULT_CASE_STUDY_SLUG) {
    return "/";
  }

  return `/case-studies/${slug}`;
}
