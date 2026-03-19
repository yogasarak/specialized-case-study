export type ToggleOption = string;
export type TagVariant = "dark" | "light";
export type CaseStudyImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type CaseStudyArtifact = {
  title: string;
  copy: string;
  image: CaseStudyImageAsset;
  modalImage?: CaseStudyImageAsset;
  ctaLabel?: string;
  textFirst?: boolean;
};
export type CaseStudyFlowSlide = {
  label: string;
  copy: string;
  image: CaseStudyImageAsset;
  modalImage?: CaseStudyImageAsset;
};
export type CaseStudySessionDemo = {
  title: string;
  intro: string;
  durationMs: number;
  instructions?: ReadonlyArray<string>;
  liveSteps?: ReadonlyArray<{ label: string; href: string }>;
  modalTitle?: string;
  productName: string;
  productMeta: string;
  productPrice?: string;
  ctaLabel: string;
  productImage?: CaseStudyImageAsset;
};

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
  images: Record<ToggleOption, CaseStudyImageAsset>;
  processSection?: {
    title: string;
    intro: string;
    artifacts: ReadonlyArray<CaseStudyArtifact>;
  };
  flowCarousel?: {
    title: string;
    intro: string;
    slides: ReadonlyArray<CaseStudyFlowSlide>;
  };
  sessionDemo?: CaseStudySessionDemo;
  categoryHeading?: string;
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
  slug: "specialized-experience-highlights",
  title: "Specialized Experience Highlights",
  description:
    "An overview of the Specialized platform work spanning rider-first navigation, Next.js platform modernization, editorial storytelling, and a stronger design-system-to-delivery pipeline.",
  tags: [
    { label: "Platform Delivery", variant: "dark" },
    { label: "GraphQL + Apollo", variant: "light" },
    { label: "Systems Architecture", variant: "light" },
  ],
  heroTitle: "Specialized Experience Highlights",
  heroIntro:
    "This page summarizes the broader platform and product work behind my Specialized role. The throughline was not shipping isolated features in parallel, but improving the full rider journey through a Next.js re-platform, more intuitive navigation, stronger storytelling surfaces, and a cleaner bridge between design systems and frontend delivery.",
  ctas: {
    viewLive: {
      label: "Explore Specialized.com",
      href: "https://www.specialized.com",
    },
  },
  stats: [
    { value: "Next.js", label: "SSR + ISR Platform" },
    { value: "Global", label: "Commerce Experience" },
    { value: "35%", label: "Component Library Adoption" },
    { value: "8% / 12%", label: "Conversion / Revenue Lift" },
  ],
  challengeParagraph:
    "Specialized needed more than isolated UX wins. The platform had to support global commerce growth, clearer rider discovery, richer brand storytelling, and faster frontend execution across a broad product surface. The challenge was aligning experience quality, system consistency, and engineering scalability without treating them as separate workstreams.",
  challengePoints: [
    "Modernize the frontend platform to support stronger performance and publishing flexibility",
    "Improve rider wayfinding across navigation, category discovery, and content journeys",
    "Create a cleaner bridge between design intent, component reuse, and shipped quality",
    "Support marketing, merchandising, product, and engineering needs inside one ecosystem",
  ],
  solutionParagraph:
    "The work spanned product strategy, UX systems, and frontend architecture. I contributed to a Next.js re-platforming effort using SSR and Incremental Static Regeneration, helped strengthen a shared React component library, partnered across triads to improve rider-first navigation patterns, and supported more editorially compelling surfaces for stories and delivery-focused content.",
  solutionPoints: [
    "Re-platformed parts of the experience to Next.js with SSR and ISR for better flexibility and performance",
    "Expanded and scaled a modular React component library adopted across product teams",
    "Strengthened alignment between the design system and UI toolkit to improve collaboration",
    "Shipped rider-first navigation, responsive shopping, filtering, and content improvements across multiple surfaces",
  ],
  responsiveDescription:
    "These three examples represent the broader scope of work: delivery-focused commerce content, an improved navigation system for rider discovery, and storytelling surfaces that better connect brand, product, and rider context.",
  viewOptions: ["Delivery Experience", "Navigation System", "Stories Platform"],
  images: {
    "Delivery Experience": {
      src: "/images/delivery.png",
      alt: "Delivery-focused Specialized commerce experience showing ship-to-home content.",
      width: 1986,
      height: 1796,
    },
    "Navigation System": {
      src: "/images/navigation.png",
      alt: "Specialized global navigation system showing improved category discovery and resources.",
      width: 2142,
      height: 1760,
    },
    "Stories Platform": {
      src: "/images/stories.png",
      alt: "Specialized stories experience showing editorial content and rider storytelling.",
      width: 2150,
      height: 1978,
    },
  },
  categoryHeading: "Platform Focus Areas",
  categoryLabels: [
    "Platform Delivery",
    "Rider Discovery",
    "Editorial Storytelling",
    "Design Systems",
    "Frontend Architecture",
  ],
  filterLabels: [
    "SSR",
    "ISR",
    "React Components",
    "Design Systems",
    "GraphQL Data",
  ],
  financingText:
    "Representative platform work spanning engineering quality, rider-first UX, and scalable content delivery.",
  productCards: [
    { name: "Next.js Re-platform", price: "SSR / ISR" },
    { name: "Navigation Architecture", price: "Rider Discovery" },
    { name: "Responsive Commerce", price: "Filtering + PLP UX" },
    { name: "Stories Platform", price: "Editorial UX" },
    { name: "Component Library", price: "Scaled Delivery" },
    { name: "Design System Alignment", price: "Shared Language" },
    { name: "GraphQL Content Flows", price: "Publishing Flexibility" },
  ],
  featureCards: [
    {
      title: "Platform Modernization",
      copy:
        "I contributed to re-platforming work in Next.js using SSR and Incremental Static Regeneration to improve experience flexibility, performance, maintainability, and release velocity.",
    },
    {
      title: "Design System to Delivery",
      copy:
        "The role required translating design-system intent into a stronger shared React component library so product teams could ship faster with better consistency and fewer implementation gaps.",
    },
    {
      title: "Rider-First Navigation",
      copy:
        "From global navigation to PLP orientation, the work focused on helping riders find the right path with less friction and more confidence.",
    },
    {
      title: "Responsive Commerce Patterns",
      copy:
        "The broader storefront work also improved responsive shopping behavior, filtering clarity, and product-listing usability so discovery stayed strong across breakpoints.",
    },
    {
      title: "Storytelling and Delivery",
      copy:
        "I partnered across design, product, marketing, and engineering to support richer delivery and editorial surfaces that better connected brand, product, and rider context.",
    },
  ],
  resultsParagraph:
    "Taken together, these workstreams improved both the rider experience and the internal product-development system. The value was not just new UI, but a better platform for shipping, scaling, and aligning product experience across the business.",
  resultsMetrics: [
    "8% conversion uplift and 12% revenue impact from iterative platform and experience improvements",
    "35% adoption of the modular React component library across product teams",
    "Improved platform flexibility through SSR, ISR, GraphQL, and cleaner frontend architecture",
    "More coherent rider journeys across commerce, navigation, and content surfaces",
  ],
  resultsFeedback: [
    "Demonstrates breadth beyond a single feature or single page redesign",
    "Shows how UX engineering can influence both platform quality and user experience",
    "Connects architectural work directly to rider-facing outcomes",
    "Provides context for the deeper feature case studies that follow",
  ],
  navigation: {
    nextSlug: "__home__",
    nextLabel: "Back to Landing Page",
    previousSlug: "discovery-wayfinding",
    previousLabel: "Back: UX Wayfinding Case Study",
  },
};

const bikeDiscoveryWayfindingCaseStudy: CaseStudyContent = {
  slug: "discovery-wayfinding",
  title: "UX Wayfinding Case Study",
  description:
    "A UX case study on reframing bike discovery for a complex global catalog through a scalable wayfinding carousel shipped to the homepage and nearly 50 PLPs.",
  tags: [
    { label: "UX Architecture", variant: "dark" },
    { label: "Experimentation", variant: "light" },
    { label: "Triad Delivery", variant: "light" },
  ],
  heroTitle:
    "Helping Riders Find the Right Bike with Guided Wayfinding",
  heroIntro:
    "Specialized’s bike catalog is broad, technical, and high-consideration. Riders often landed on a listing page knowing they needed a bike, but not knowing which category fit their riding style, terrain, or intent. As the UX lead working across product, design, and engineering, I helped reframe the page from a passive product grid into an active decision-making surface that guided riders to the right category faster.",
  ctas: {
    viewLive: {
      label: "View Live Feature",
      href: "https://www.specialized.com",
    },
    watchDemo: {
      label: "View Demo",
      ariaLabel: "Specialized bike discovery wayfinding demo video",
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/plp-carousel.mov",
    },
  },
  stats: [
    { value: "50", label: "PLPs Supported" },
    { value: "Global", label: "Commerce Rollout" },
    { value: "24%", label: "Conversion Lift" },
    { value: "12%", label: "Revenue Lift" },
  ],
  challengeParagraph:
    "The business problem looked simple on the surface: improve bike discovery. The real challenge was more nuanced. Riders were entering a complex taxonomy with unclear category differences, merchandising wanted stronger storytelling, product wanted measurable conversion impact, and engineering needed a reusable component that could scale well beyond a single page. We needed to reduce decision friction without slowing shoppers down or overwhelming them with more UI.",
  challengePoints: [
    "Riders had a 'what should I buy?' problem before they had a filtering problem",
    "Bike categories were meaningful internally but not always obvious to customers",
    "The PLP experience optimized for browsing inventory, not orienting first-time or uncertain shoppers",
    "The solution had to work on the global homepage and nearly 50 product listing pages",
    "We needed a reusable pattern that merchandising, design, and engineering could all support",
  ],
  solutionParagraph:
    "I led the UX work from framing through delivery. I synthesized stakeholder input, reviewed live-site behavior, mapped the decision points riders hit before filtering, and designed a category-first wayfinding carousel that used strong imagery, plain-language labels, and a clear visual hierarchy to create orientation at the top of the page. The component gave riders a fast answer to 'where do I start?' while preserving the efficiency of the existing PLP for users with higher intent.",
  solutionPoints: [
    "Facilitated triad alignment on the actual user problem and success criteria before moving into UI",
    "Translated category complexity into a simpler decision architecture riders could scan quickly",
    "Designed desktop and mobile variants that preserved intent, hierarchy, and speed",
    "Paired closely with engineering to define a scalable component model for rollout across surfaces",
    "Shaped the shipped experience through iterative review, implementation guidance, and experiment readouts",
  ],
  responsiveDescription:
    "The carousel was designed as a reusable wayfinding pattern, not a one-off hero. On desktop, larger cards created immediate category recognition and made browsing feel editorial and premium. On mobile, the pattern compressed into a swipeable rail that still surfaced category intent early without pushing products too far below the fold.",
  viewOptions: ["Desktop", "Mobile"],
  images: {
    Desktop: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_Destop.png",
      alt:
        "Desktop layout of the Specialized bike wayfinding carousel above the product listing page.",
      width: 1200,
      height: 760,
    },
    Mobile: {
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/PLP_Carousel_mobile.jpg",
      alt:
        "Mobile layout of the Specialized bike wayfinding carousel adapted for swipe interaction.",
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
  filterLabels: ["Relevance", "M", "Road", "Clear All", "All Filters"],
  financingText:
    "Built as a reusable wayfinding pattern for global merchandising and PLP discovery.",
  productCards: [
    { name: "Turbo Vado SL", price: "Commuting / Fitness" },
    { name: "Tarmac", price: "Performance Road" },
    { name: "Creo", price: "Endurance / E-Road" },
    { name: "Diverge", price: "Gravel / Adventure" },
    { name: "Stumpjumper", price: "Trail / Mountain" },
    { name: "Como", price: "Comfort / Utility" },
  ],
  featureCards: [
    {
      title: "Problem Framing",
      copy:
        "Rather than starting from visuals, I centered the work on a rider orientation problem: users needed help choosing a category before comparing individual bikes.",
    },
    {
      title: "Triad Collaboration",
      copy:
        "I worked as a senior partner across product, stakeholders, and engineering to align on scope, success criteria, component constraints, and rollout strategy.",
    },
    {
      title: "Scalable UX Pattern",
      copy:
        "The carousel was intentionally designed as a systemized pattern that could flex across the homepage and dozens of PLPs without fragmenting the experience.",
    },
    {
      title: "Implementation Quality",
      copy:
        "My engineering background helped close the loop between design intent and shipped quality, especially around responsiveness, hierarchy, and reusable component behavior.",
    },
  ],
  resultsParagraph:
    "The feature performed because it solved the right problem. Riders got orientation earlier, merchandising gained a stronger storytelling surface, and the business saw measurable improvement in downstream shopping behavior. It became a successful global pattern rather than a one-page experiment.",
  resultsMetrics: [
    "Rolled out from the global homepage to nearly 50 bike-related product listing pages",
    "A/B testing drove a 24% lift in conversion and stronger category engagement",
    "Average order value increased 9% as riders reached better-fit, higher-intent product paths sooner",
    "Revenue increased 12% after rollout across the highest-value bike discovery surfaces",
    "Established a reusable merchandising and navigation component for future category experiences",
  ],
  resultsFeedback: [
    "Stakeholders saw it as a strong example of UX directly influencing revenue, not just presentation",
    "The pattern gave merchandising a clearer place to tell the category story without hijacking the page",
    "Engineering benefited from a more reusable and predictable component model",
    "The work strengthened my position as a senior triad partner operating across strategy, design, and delivery",
  ],
  navigation: {
    nextSlug: "specialized-experience-highlights",
    nextLabel: "Next: Specialized Experience Highlights",
    previousSlug: "continue-shopping",
    previousLabel: "Back: Continue Shopping Case Study",
  },
};

const completeYourRideCaseStudy: CaseStudyContent = {
  slug: "complete-your-ride",
  title: "Complete Your Ride Case Study",
  description:
    "A case study on reframing accessory attachment as a guided rider journey, using KPI alignment, concept exploration, and competitor analysis to shape a live commerce feature.",
  tags: [
    { label: "UX Strategy", variant: "dark" },
    { label: "Research & Ideation", variant: "light" },
    { label: "Merchandising", variant: "light" },
  ],
  heroTitle:
    "Designing a Smarter 'Complete Your Ride' Experience for Higher-Intent Shopping",
  heroIntro:
    "This work focused on a familiar commerce problem with more nuance underneath it: how do you help riders discover the right add-ons without making the experience feel like a generic upsell rail? Working with a senior UX strategist, I helped shape the concept from KPI framing and problem definition through competitive review, flow design, technical constraints, and final implementation guidance.",
  ctas: {
    viewLive: {
      label: "View Live Feature",
      href:
        "https://www.specialized.com/us/en/haul-st/p/277759?color=442435-277759&searchText=91023-8000U",
    },
  },
  stats: [
    { value: "1", label: "PLP Rollout" },
    { value: "Attach", label: "Revenue Opportunity" },
    { value: "Earlier", label: "Accessory Discovery" },
    { value: "Stronger", label: "Cross-Sell Strategy" },
  ],
  challengeParagraph:
    "The team wanted to increase attachment and basket size, but the UX problem was broader than adding recommendations. We needed to define what add-ons actually meant in a rider context, identify where guidance would feel useful rather than intrusive, and create a pattern that balanced merchandising, relevance, and implementation feasibility.",
  challengePoints: [
    "Business goals centered on items per transaction, AOV, and lower PDP exits",
    "Existing shopping flows made it easy to buy the bike but harder to build confidence around accessories",
    "The team needed a rider-centered concept, not a generic 'you may also like' module",
    "We had to align technical constraints, content rules, image specs, and viewport behavior early",
    "The initial rollout was narrower than the bike wayfinding work, so the concept had to prove value before expanding",
  ],
  solutionParagraph:
    "We approached the feature as a guided merchandising system rather than a recommendation widget. The work began with KPI alignment and problem statements, then moved through concept framing, precedent analysis, flow definition, and design specifications that engineering could implement cleanly. The resulting experience connected riders to compatible accessories and supporting products in a way that felt intentional, contextual, and easier to act on.",
  solutionPoints: [
    "Established shared definitions for the rider problem and the business opportunity",
    "Used FigJam artifacts to align stakeholders on concept direction before moving into final UI",
    "Reviewed competitor patterns to identify gaps and avoid copying lower-quality attach experiences",
    "Paired design strategy with engineering detail including content limits, image behavior, and viewport rules",
    "Delivered a live feature that created a stronger platform for future cross-sell improvements",
  ],
  responsiveDescription:
    "The final responsive mocks translated the strategy into concrete desktop and mobile layouts, keeping the attach experience useful, contextual, and visually integrated with the rest of the PDP journey.",
  viewOptions: ["Desktop", "Mobile"],
  images: {
    Desktop: {
      src: "/images/CYR desktop.png",
      alt:
        "Desktop mockup for the Complete Your Ride feature on the Specialized product detail page.",
      width: 1146,
      height: 1422,
    },
    Mobile: {
      src: "/images/CYR mobile.png",
      alt:
        "Mobile mockup for the Complete Your Ride feature on the Specialized product detail page.",
      width: 314,
      height: 1030,
    },
  },
  categoryHeading: "Attach Strategy Coverage",
  processSection: {
    title: "Research, Framing, and Iteration",
    intro:
      "This project is useful in interviews because the process work is visible. Rather than jumping directly to polished UI, the team clarified business goals, defined the rider problem, studied adjacent patterns, and mapped the intended flow before final visual design and implementation.",
    artifacts: [
      {
        title: "Concept Intro and Problem Statements",
        copy:
          "The opening FigJam board reframed the opportunity around rider value and business value, establishing what 'add-ons' should mean in practice across compatible accessories, apparel, and service parts.",
        textFirst: true,
        image: {
          src: "/images/complete-your-ride-concept-intro.png",
          alt:
            "FigJam board introducing the Complete Your Ride concept and problem statements.",
          width: 692,
          height: 1568,
        },
      },
      {
        title: "Business Goals and KPIs",
        copy:
          "A shared KPI frame aligned the team on items per transaction, average order value, PDP exit rate, and rider satisfaction so the concept was anchored in outcomes instead of opinion.",
        textFirst: true,
        image: {
          src: "/images/complete-your-ride-business-goals.png",
          alt:
            "Business goals and KPI board for the Complete Your Ride feature.",
          width: 656,
          height: 652,
        },
      },
      {
        title: "Competitor Analysis",
        copy:
          "Competitive review helped identify where adjacent brands were solving compatibility and attach problems well, and where their patterns created friction or felt too transactional.",
        image: {
          src: "/images/complete-your-ride-competitor-analysis.png",
          alt:
            "Competitor analysis board reviewing attach and accessory discovery patterns.",
          width: 658,
          height: 1566,
        },
      },
      {
        title: "Complete Your Ride Flow",
        copy:
          "The full flow documents how strategy turned into a shippable experience, including viewport previews, technical considerations, image guidance, and content constraints. Open it to inspect at full size.",
        image: {
          src: "/images/complete-your-ride-flow.png",
          alt:
            "End-to-end flow for the Complete Your Ride feature showing specs and design states.",
          width: 2732,
          height: 960,
        },
        modalImage: {
          src: "/images/complete-your-ride-flow.png",
          alt:
            "Expanded end-to-end flow for the Complete Your Ride feature.",
          width: 2732,
          height: 960,
        },
        ctaLabel: "Open Full Flow",
      },
    ],
  },
  flowCarousel: {
    title: "Detailed Flow Walkthrough",
    intro:
      "These individual frames make the flow easier to discuss in an interview. They show how the concept moved from high-level strategy into concrete UX decisions, viewport planning, and implementation-ready detail.",
    slides: [
      {
        label: "Step 1",
        copy:
          "A broad system view of the Complete Your Ride experience, showing how the feature was positioned within the overall shopping journey.",
        image: {
          src: "/images/complete-your-ride-flow-step-1.png",
          alt:
            "Complete Your Ride flow step 1 showing the broader journey map and feature structure.",
          width: 2500,
          height: 1980,
        },
        modalImage: {
          src: "/images/complete-your-ride-flow-step-1.png",
          alt:
            "Expanded Complete Your Ride flow step 1 showing the broader journey map and feature structure.",
          width: 2500,
          height: 1980,
        },
      },
      {
        label: "Step 2",
        copy:
          "A closer view into one of the feature states, clarifying how riders would encounter add-on groupings and supporting content.",
        image: {
          src: "/images/complete-your-ride-flow-step-2.png",
          alt:
            "Complete Your Ride flow step 2 showing a detailed feature state and content planning.",
          width: 1050,
          height: 1540,
        },
        modalImage: {
          src: "/images/complete-your-ride-flow-step-2.png",
          alt:
            "Expanded Complete Your Ride flow step 2 showing a detailed feature state and content planning.",
          width: 1050,
          height: 1540,
        },
      },
      {
        label: "Step 3",
        copy:
          "This frame captures mid-flow interaction detail, helping align behavior, content structure, and layout expectations before implementation.",
        image: {
          src: "/images/complete-your-ride-flow-step-3.png",
          alt:
            "Complete Your Ride flow step 3 showing interaction detail and mid-flow layout decisions.",
          width: 956,
          height: 942,
        },
        modalImage: {
          src: "/images/complete-your-ride-flow-step-3.png",
          alt:
            "Expanded Complete Your Ride flow step 3 showing interaction detail and mid-flow layout decisions.",
          width: 956,
          height: 942,
        },
      },
      {
        label: "Step 4",
        copy:
          "The final frame shows later-stage flow planning with more explicit implementation and specification detail that engineering could work from.",
        image: {
          src: "/images/complete-your-ride-flow-step-4.png",
          alt:
            "Complete Your Ride flow step 4 showing later-stage design and implementation detail.",
          width: 1050,
          height: 1490,
        },
        modalImage: {
          src: "/images/complete-your-ride-flow-step-4.png",
          alt:
            "Expanded Complete Your Ride flow step 4 showing later-stage design and implementation detail.",
          width: 1050,
          height: 1490,
        },
      },
    ],
  },
  categoryLabels: [
    "Compatible Accessories",
    "Apparel Kits",
    "Service Parts",
    "Fit-Based Attach",
    "Merchandising Logic",
  ],
  filterLabels: [
    "Accessory Type",
    "Bike Match",
    "Price Range",
    "Use Case",
    "All Add-ons",
  ],
  financingText:
    "Initial rollout shipped to one product listing surface with room to expand the pattern.",
  productCards: [
    { name: "Helmet + Light Bundle", price: "Safety Attach" },
    { name: "Bottle Cage + Bottle", price: "Essentials" },
    { name: "Flat Kit", price: "Preparedness" },
    { name: "Commuter Gear", price: "Utility" },
    { name: "Apparel Collection", price: "Style & Comfort" },
    { name: "Service Parts", price: "Compatibility" },
  ],
  featureCards: [
    {
      title: "KPI-Led Framing",
      copy:
        "The team aligned on concrete business and rider outcomes before exploring interface patterns, keeping the work focused on measurable value.",
    },
    {
      title: "Concept Definition",
      copy:
        "We clarified what kinds of add-ons belonged in the experience and how they should ladder back to rider needs rather than generic product promotion.",
    },
    {
      title: "Cross-Functional Readiness",
      copy:
        "The flow included implementation details such as image specs, content rules, and viewport guidance so the handoff was useful to engineering and merchandising alike.",
    },
  ],
  resultsParagraph:
    "This feature was rolled out more narrowly than the bike wayfinding carousel, but it is one of the best examples of how I work through upstream UX strategy. It shows how I help teams move from loosely defined revenue goals to a more coherent, rider-centered concept that can be designed, specified, and shipped.",
  resultsMetrics: [
    "Created a clearer attach strategy tied to basket-size and AOV goals",
    "Produced reusable problem-framing artifacts for stakeholder alignment",
    "Connected concept work to implementation details early in the process",
    "Shipped a live merchandising feature with room for broader expansion",
  ],
  resultsFeedback: [
    "Useful example of design strategy before high-fidelity UI",
    "Demonstrates strong collaboration between UX strategy and UX engineering",
    "Shows how business goals were translated into rider-centered decisions",
    "Good secondary case study for discussing iteration, alignment, and tradeoffs",
  ],
  navigation: {
    nextSlug: "continue-shopping",
    nextLabel: "Next: Continue Shopping Case Study",
    previousSlug: "specialized-experience-highlights",
    previousLabel: "Back: Specialized Experience Highlights",
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
    previousSlug: "specialized-experience-highlights",
    previousLabel: "Back: Specialized Experience Highlights",
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
      label: "View Setup PDP",
      href:
        "https://www.specialized.com/us/en/haul-st/p/277759?color=442435-277759&searchText=91023-8000U",
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
  categoryHeading: "Persistent Shopping Signals",
  sessionDemo: {
    title: "Interactive Session Re-entry Demo",
    intro:
      "This preview recreates the intended behavior inside the case study. The live feature requires a remembered PDP in normal browser storage, then a fresh homepage entry in a new tab or window.",
    durationMs: 12000,
    instructions: [
      "Open the setup PDP in a normal browser session so the remembered product can be stored.",
      "Then open Specialized.com in a new non-incognito tab or window.",
      "The modal should appear on homepage entry, but not when the next session begins on a PDP.",
    ],
    liveSteps: [
      {
        label: "View Setup PDP",
        href:
          "https://www.specialized.com/us/en/haul-st/p/277759?color=442435-277759&searchText=91023-8000U",
      },
      {
        label: "Live Continue Shopping Modal",
        href: "https://www.specialized.com",
      },
    ],
    modalTitle: "Pick up where you left off",
    productName: "Turbo Levo SL",
    productMeta: "View Product",
    ctaLabel: "View Product",
    productImage: {
      src: "/images/Turbo Levo SL.png",
      alt: "Turbo Levo SL bike used in the continue shopping re-entry demo.",
      width: 1282,
      height: 858,
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
    nextSlug: "discovery-wayfinding",
    nextLabel: "Next: UX Wayfinding Case Study",
    previousSlug: "complete-your-ride",
    previousLabel: "Back: Complete Your Ride Case Study",
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
  ctas: {
    viewLive: {
      label: "View Live Site",
      href: "https://www.specialized.com",
    },
    watchDemo: {
      label: "Watch Demo",
      ariaLabel: "Specialized bikes demo video",
      src:
        "https://iwkgbbmrbksmctgieaoz.supabase.co/storage/v1/object/public/Specialized%20Case%20Study/plp-carousel.mov",
    },
  },
  navigation: {
    nextSlug: "discovery-wayfinding",
    nextLabel: "Next: UX Wayfinding Case Study",
    previousSlug: "continue-shopping",
    previousLabel: "Back: Continue Shopping Case Study",
  },
};

export const CASE_STUDIES: ReadonlyArray<CaseStudyContent> = [
  completeYourRideCaseStudy,
  continueShoppingCaseStudy,
  bikeDiscoveryWayfindingCaseStudy,
  landingCaseStudy,
];

export const ARCHIVED_CASE_STUDIES: ReadonlyArray<CaseStudyContent> = [
  conceptStorefrontCaseStudy,
  wayfindingCaseStudy,
];

export const DEFAULT_CASE_STUDY_SLUG = "complete-your-ride";

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyPath(slug: string) {
  if (slug === "__home__") {
    return "/";
  }

  return `/case-studies/${slug}`;
}
