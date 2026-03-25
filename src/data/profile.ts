export type ProfileTone = "light" | "dark";

export type ProfileMetric = {
  value: string;
  label: string;
};

export type ProfileStoryCard = {
  eyebrow?: string;
  title: string;
  copy: string;
  bullets?: readonly string[];
};

export type ProfileExperience = {
  company: string;
  dateRange: string;
  title: string;
  subtitle?: string;
  bullets: readonly string[];
};

export type ResumeSkillGroup = {
  title: string;
  items: readonly string[];
};

export type ResumeEducation = {
  school: string;
  program: string;
  details: readonly string[];
};

export const aboutMetrics: readonly ProfileMetric[] = [
  { value: "Product Systems", label: "flows, states, interaction logic, and UX behavior designed beyond the screen layer." },
  { value: "Global Scale", label: "consumer commerce work spanning localization, merchandising, content operations, and platform constraints." },
  { value: "SaaS + Workflows", label: "internal and multi-role software built around task clarity, permissions, and data density." },
  { value: "Frontend Depth", label: "React, Next.js, component systems, and frontend architecture for production UI." },
] as const;

export const aboutStoryCards: readonly ProfileStoryCard[] = [
  {
    eyebrow: "Career Throughline",
    title: "from feature delivery into product structure.",
    copy:
      "My roles expanded beyond feature delivery into interaction models, state design, shared structures, and roadmap planning that keep products coherent as they evolve.",
    bullets: [
      "Define product behavior with engineering constraints and downstream dependencies in view",
      "Clarify requirements and failure modes before they turn into rework",
      "Turn repeated choices into shared foundations that support faster iteration",
    ],
  },
  {
    eyebrow: "What I Bring",
    title: "intent turned into shipped software.",
    copy:
      "I help product, design, and engineering move from intent to execution by tightening priorities, clarifying tradeoffs, and carrying UX choices through iteration.",
    bullets: [
      "Translate goals into interaction models, UX priorities, and executable work",
      "Support iterative delivery without losing the original intent of the feature",
      "Work effectively across consumer products, internal tools, and role-based workflow software",
      "Bring technical fluency to design reviews, implementation tradeoffs, and delivery planning",
    ],
  },
] as const;

export const aboutExperienceHighlights: readonly ProfileStoryCard[] = [
  {
    eyebrow: "Global Commerce",
    title: "commerce UX resolved operational friction.",
    copy:
      "The visible UI was only part of the solution. Discovery, cross-sell, persistence, and responsive behavior had to work across merchandising, localization, inventory, content operations, and platform constraints.",
    bullets: [
      "Refined wayfinding, re-entry, and attach paths across high-intent commerce journeys",
      "Built in Next.js and GraphQL with reusable components and responsive behavior",
      "Made interaction choices with operational dependencies, content constraints, and failure cases in view",
    ],
  },
  {
    eyebrow: "AI-Assisted UX",
    title: "AI software required trust, reviewability, and clear decision paths.",
    copy:
      "Model output only became useful when it was structured into workflows people could review, question, and act on inside real tasks.",
    bullets: [
      "Structured ML output into review flows and decision support instead of raw technical output",
      "Built reusable React building blocks that scaled across teams and product surfaces",
      "Grounded interaction choices in trust, hierarchy, and user accountability",
    ],
  },
  {
    eyebrow: "SaaS + Platform",
    title: "workflow software sharpened role-based thinking.",
    copy:
      "Across dashboards, headless commerce, and multi-sided systems, the need was to design for users who shared a platform but did not share context, permissions, or goals.",
    bullets: [
      "Reduced cognitive load in data-dense screens and reporting workflows",
      "Established frontend conventions intended to last across evolving platform surfaces",
      "Balanced role-specific needs across internal tools, customer products, and operational software",
    ],
  },
] as const;

export const aboutCapabilityCards: readonly ProfileStoryCard[] = [
  {
    title: "shared judgment",
    copy:
      "Bring product, design, and engineering into the same decision loop before issues turn into rework.",
  },
  {
    title: "stateful UI",
    copy:
      "Work through flows, states, edge conditions, and component behavior until the product feels complete in real use.",
  },
  {
    title: "implementation integrity",
    copy:
      "Keep the point of the feature intact through estimation, build, and iteration.",
  },
  {
    title: "design systems",
    copy:
      "Turn shared design principles into reusable components and standards teams can actually ship with.",
  },
] as const;

export const resumeExperience: readonly ProfileExperience[] = [
  {
    company: "Yembo AI",
    dateRange: "May 2025 – Present",
    title: "Senior Software Engineer (Frontend), IC5 Lead",
    subtitle: "AI-driven UX and scalable frontend systems",
    bullets: [
      "Spearheaded AI-driven UX features translating ML insights into product experiences used by 500k+ end users across enterprise customers.",
      "Designed and scaled a modular React component library adopted across 5 product teams, reducing new feature development time by 35%.",
      "Partnered with product, design, and engineering to define user flows and deliver scalable frontend architecture.",
    ],
  },
  {
    company: "Specialized Bicycle Components",
    dateRange: "July 2022 – April 2025",
    title: "Senior Software Engineer, UX Feature Lead",
    subtitle: "Global commerce platform and rider-first UX",
    bullets: [
      "Led UX-driven feature development for specialized.com, a global e-commerce platform serving 18M+ users.",
      "Owned wayfinding improvements that delivered 18% conversion uplift and 12% revenue impact through iterative A/B testing.",
      "Contributed to the re-platforming of the brand’s website to Next.js, improving performance and scalability through ISR and a GraphQL-based data layer.",
      "Strengthened alignment between the design system and the UI toolkit by expanding reusable components and improving collaboration between design and engineering.",
    ],
  },
  {
    company: "Landi Consulting",
    dateRange: "February 2022 – June 2022",
    title: "Senior Software Engineer, Component Library Lead",
    subtitle: "Booking and CMS tooling for multi-sided workflows",
    bullets: [
      "Led development of a booking platform for a major music-industry client, focused on intuitive user flows and scalable frontend architecture.",
      "Improved booking performance by implementing code splitting and lazy loading, reducing initial load times by 45%.",
      "Implemented a CMS to streamline content updates and enable faster iteration across product and marketing teams.",
    ],
  },
  {
    company: "Chord Commerce",
    dateRange: "July 2020 – May 2021",
    title: "Fullstack Software Engineer",
    subtitle: "Headless commerce and data-rich product tooling",
    bullets: [
      "Built a data-rich analytics dashboard used by 20+ e-commerce brands to support reporting, data exploration, and OKR-driven insights.",
      "Developed reusable React and TypeScript components with D3.js to support interactive data visualization and analytics workflows.",
      "Contributed to RESTful services using Koa.js and Kafka for data aggregation, with robust testing using Cypress and Cucumber.",
    ],
  },
  {
    company: "FYLO",
    dateRange: "June 2019 – March 2020",
    title: "Frontend Software Engineer",
    subtitle: "Human-centered admin tooling and production React systems",
    bullets: [
      "Co-designed and built a user-centric admin platform as both designer and frontend engineer within a small cross-functional product team.",
      "Created low- and high-fidelity prototypes and translated them into production-ready React components, reducing design-to-development handoff time by 30%.",
      "Implemented Redux and Redux Thunk to support predictable state management and reliable data flows.",
    ],
  },
] as const;

export const resumeSkillGroups: readonly ResumeSkillGroup[] = [
  {
    title: "Approach",
    items: [
      "Systems Thinking",
      "Discovery to Delivery",
      "User Advocacy",
      "Triad Collaboration",
      "Scope Shaping",
      "Design QA",
    ],
  },
  {
    title: "Design",
    items: [
      "Design Systems",
      "Component Libraries",
      "Design Tokens",
      "Prototyping",
      "Interaction Design",
      "Atomic Design",
    ],
  },
  {
    title: "Technologies",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "Redux",
      "Apollo",
      "Jest",
      "Cypress",
      "Docker",
      "Git / CI / CD",
      "Styled Components",
      "Visual Regression",
    ],
  },
  {
    title: "AI Tools",
    items: ["Codex CLI", "Claude Code", "Gemini CLI"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "HTML / CSS"],
  },
] as const;

export const resumeEducation: readonly ResumeEducation[] = [
  {
    school: "UNLV",
    program: "Bachelor of Arts, Communication Design",
    details: ["4.0 GPA, magna cum laude", "Focus: Advertising", "Minor: Marketing"],
  },
  {
    school: "Galvanize",
    program: "Fullstack Engineering",
    details: ["Full-time in-person immersive"],
  },
  {
    school: "BDA",
    program: "Human Centered Design",
    details: ["Merit-Based UX/UI Scholarship"],
  },
] as const;
