export const heroMetrics = [
  {
    label: "Projects shipped",
    value: "28+",
    description:
      "From fast-moving SaaS teams to venture-backed marketing sites shipped end-to-end.",
  },
  {
    label: "Avg. review score",
    value: "4.9/5",
    description:
      "Clients consistently highlight clarity in communication and attention to detail.",
  },
  {
    label: "Time to first prototype",
    value: "72h",
    description:
      "Rapid iterations with design systems and component-driven development.",
  },
];

export const services = [
  {
    title: "Product Discovery & Strategy",
    icon: "🧭",
    description:
      "Align business goals with user outcomes through roadmapping, prototyping, and measurable success metrics.",
    bullets: [
      "Journey mapping & KPI definition",
      "Stakeholder workshops",
      "Prioritized delivery roadmap",
    ],
  },
  {
    title: "Interface Engineering",
    icon: "🎨",
    description:
      "Craft resilient design systems and accessible user interfaces that feel fast on every device.",
    bullets: [
      "Design system foundations",
      "Performance-driven development",
      "Accessibility audits",
    ],
  },
  {
    title: "Application Acceleration",
    icon: "⚡",
    description:
      "Upgrade legacy frontends, integrate analytics, and automate workflows with modern web tooling.",
    bullets: [
      "Progressive migrations",
      "Workflow automation",
      "Monitoring & observability",
    ],
  },
];

export const skills = [
  {
    category: "Frontend Craft",
    items: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Component libraries", level: 92 },
    ],
  },
  {
    category: "Product Ops",
    items: [
      { name: "Design systems", level: 88 },
      { name: "Experimentation", level: 84 },
      { name: "Analytics instrumentation", level: 86 },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Technical leadership", level: 90 },
      { name: "Workshop facilitation", level: 85 },
      { name: "Mentorship", level: 87 },
    ],
  },
];

export const experiences = [
  {
    period: "2022 — Present",
    company: "Atlas Labs",
    role: "Senior Frontend Consultant",
    achievements: [
      "Led a cross-functional squad delivering a unified analytics experience for 12k+ users.",
      "Introduced component governance that reduced UI defects by 37% quarter-over-quarter.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Playwright"],
  },
  {
    period: "2020 — 2022",
    company: "Northwind Studio",
    role: "Product Engineer",
    achievements: [
      "Rebuilt the marketing pipeline into a composable architecture powering 15 localized sites.",
      "Delivered a high-converting onboarding flow that shortened activation time by 45%.",
    ],
    stack: ["React", "Node.js", "Contentful", "Tailwind CSS"],
  },
  {
    period: "2018 — 2020",
    company: "Freelance",
    role: "Full-stack Developer",
    achievements: [
      "Partnered with early-stage founders to validate concepts through rapid prototypes.",
      "Implemented CI/CD workflows that enabled shipping multiple releases per week.",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Netlify"],
  },
];

export const process = [
  {
    title: "Discover",
    icon: "🔍",
    duration: "Week 1",
    description:
      "Uncover goals, map success metrics, and align stakeholders through structured workshops.",
  },
  {
    title: "Design",
    icon: "✏️",
    duration: "Weeks 2-3",
    description:
      "Prototype flows, define UI tokens, and validate with users before committing to build.",
  },
  {
    title: "Build",
    icon: "🛠️",
    duration: "Weeks 3-6",
    description:
      "Ship production-ready components, integrate data, and set up testing + observability.",
  },
  {
    title: "Launch & Iterate",
    icon: "🚀",
    duration: "Week 6+",
    description:
      "Deploy confidently, capture insights, and prioritize the next iteration with live analytics.",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ayşe felt like gaining an internal product team. She translates fuzzy vision into a roadmap, prototypes in days, and delivers polished experiences that our customers love.",
    name: "Leyla Karaca",
    title: "VP of Product",
    company: "FinEdge",
    project: "Commerce Intelligence Suite",
  },
  {
    quote:
      "Communication was flawless. Every milestone arrived ahead of schedule, and the documentation made it effortless for our engineers to continue iterating after launch.",
    name: "Hugo Martins",
    title: "CTO",
    company: "Northwind Studio",
    project: "Brand Platform Refresh",
  },
  {
    quote:
      "From design system to deployment, the process was transparent and collaborative. We’re still using the same components across three new initiatives.",
    name: "Selin Kaya",
    title: "Head of Design",
    company: "Atlas Labs",
    project: "Design System Enablement",
  },
];

export const projectCategories = [
  "All",
  "SaaS Platforms",
  "Marketing Sites",
  "Internal Tools",
];

export const projects = [
  {
    slug: "commerce-intelligence-suite",
    title: "Commerce Intelligence Suite",
    excerpt:
      "Unified analytics dashboards that surface actionable revenue insights for modern retail teams.",
    description:
      "FinEdge needed a single source of truth for revenue, retention, and campaign performance. I partnered with the data and product teams to design and build a modular analytics suite that keeps leadership aligned in real time.",
    category: "SaaS Platforms",
    featured: true,
    timeline: "2024 • 8 weeks",
    role: "Lead Frontend Engineer",
    metrics: [
      { label: "Conversion lift", value: "40%" },
      { label: "Onboarding time", value: "-55%" },
    ],
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "Supabase", "Playwright"],
    problem:
      "Disparate data pipelines caused leadership teams to rely on manual spreadsheets, delaying critical decisions.",
    approach: [
      "Mapped stakeholder needs into a component-based dashboard architecture with reusable visualization primitives.",
      "Implemented streaming API integrations and skeleton loading states to keep the experience responsive.",
      "Instrumented analytics and monitoring to capture adoption and uncover optimization opportunities.",
    ],
    results: [
      "Tripled self-serve reporting usage within the first month after launch.",
      "Established a design system that now powers 4 additional internal tools.",
      "Enabled revenue teams to ship weekly experiments with automated QA checks.",
    ],
    deliverables: [
      "Component library",
      "Analytics dashboards",
      "Performance budget",
      "QA automation setup",
    ],
  },
  {
    slug: "brand-platform-refresh",
    title: "Brand Platform Refresh",
    excerpt:
      "A high-converting marketing presence for a global design studio with localized experiences.",
    description:
      "Northwind Studio wanted to relaunch their brand with a multi-market site that felt bespoke yet scalable. I delivered a composable marketing platform with an editorial workflow and real-time previewing.",
    category: "Marketing Sites",
    timeline: "2023 • 6 weeks",
    role: "Product Engineer",
    metrics: [
      { label: "Leads generated", value: "+62%" },
      { label: "Page speed", value: "98 Lighthouse" },
    ],
    tags: ["Next.js", "Contentful", "Tailwind CSS", "Cloudinary"],
    problem:
      "The existing marketing site was fragile, slow, and costly to update across regions.",
    approach: [
      "Created a flexible block-based page builder with localization support.",
      "Optimized media delivery with responsive image strategies and streaming rendering.",
      "Built editorial guardrails to empower marketers without relying on engineering.",
    ],
    results: [
      "Generated 62% more qualified leads within the first quarter.",
      "Reduced build & deploy time from 15 minutes to under 3 minutes.",
      "Enabled marketing to launch 4 regional campaigns simultaneously.",
    ],
    deliverables: ["Component-driven CMS", "Localization workflow", "Performance audit"],
  },
  {
    slug: "operations-control-center",
    title: "Operations Control Center",
    excerpt:
      "A mission-critical internal tool that orchestrates logistics and provides real-time incident visibility.",
    description:
      "Atlas Labs required a resilient control center to coordinate their hardware deployments. I collaborated with operations leads to deliver a dashboard that scales with new product lines.",
    category: "Internal Tools",
    timeline: "2022 • 5 weeks",
    role: "Senior Frontend Consultant",
    metrics: [
      { label: "Incidents resolved", value: "-47%" },
      { label: "Team adoption", value: "100%" },
    ],
    tags: ["Next.js", "TypeScript", "GraphQL", "Hasura"],
    problem:
      "Operators juggled multiple legacy systems and had no shared visibility into device health.",
    approach: [
      "Designed a progressive disclosure UI that surfaces the right data to the right role.",
      "Implemented optimistic updates and offline caching for field engineers.",
      "Automated alerting workflows to notify the right team before incidents escalate.",
    ],
    results: [
      "Reduced incident resolution time by 47% across hardware teams.",
      "Achieved full adoption within two weeks of rollout.",
      "Provided leadership with real-time fleet health reporting.",
    ],
    deliverables: ["Role-based dashboards", "Alert automation", "Design handoff docs"],
  },
];

export const availability = {
  status: "Accepting new client projects",
  nextAvailability: "Project kickoff openings from April 2025",
  responseTime: "Replies within 24 hours",
  location: "Based in Istanbul • Remote friendly",
};
