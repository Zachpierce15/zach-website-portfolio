type ResumeBullet = {
  before?: string;
  highlight: string;
  after?: string;
};

export type ResumeJob = {
  company: string;
  role: string;
  dates: string;
  location: string;
  industry: string;
  product: string;
  bullets: ResumeBullet[];
};

export const resumeExperience: ResumeJob[] = [
  {
    company: "Oracle",
    role: "Senior Infrastructure Engineer",
    dates: "2022 — 2026",
    location: "REMOTE",
    industry: "Enterprise software",
    product: "Access Governance · Identity and access governance",
    bullets: [
      {
        before: "Led frontend development for ",
        highlight: "Oracle Access Governance",
        after:
          " using Preact, Oracle JET, JavaScript, and TypeScript, collaborating with distributed teams to deliver complex enterprise workflows.",
      },
      {
        before: "Delivered ",
        highlight: "Access Guardrails",
        after:
          " across four interconnected views in one month, preserving report filters and navigation context with React Context and local storage while maintaining approximately 80% test coverage.",
      },
      {
        before: "Built dynamic visualizations for ",
        highlight: "Access Review Insights",
        after:
          " to help users interpret machine-learning data and make more informed access decisions.",
      },
      {
        before: "Led implementation of ",
        highlight: "Manage Organizations",
        after:
          ", translating UX designs into an interface for creating and managing organizations and their members.",
      },
      {
        before: "Implemented ",
        highlight:
          "frontend permission checks across more than 10 landing pages",
        after:
          " and created a dedicated no-access experience for users without the required permissions.",
      },
      {
        before: "Extended ",
        highlight:
          "reusable selection improvements across more than seven workflows",
        after:
          ", creating integration layers that allowed the shared component to work within different creation experiences.",
      },
      {
        before: "Championed ",
        highlight: "unit and Cypress testing",
        after: ", achieving more than 80% test coverage across owned areas.",
      },
      {
        before: "Migrated ",
        highlight: "Oracle Bastion deployment workflows to Shepard",
        after:
          ", using Codex to rapidly learn unfamiliar CI/CD tooling and migrate a meaningful portion of the workflows in a short timeframe.",
      },
    ],
  },
  {
    company: "LiveAuctioneers",
    role: "Frontend Software Developer",
    dates: "2021 — 2022",
    location: "Hybrid Lehi, Utah",
    industry: "Online auctions",
    product: "Consumer auction marketplace",
    bullets: [
      {
        before: "Developed ",
        highlight: "customer-facing auction experiences",
        after: " using React, TypeScript, Redux, and Styled Components.",
      },
      {
        before: "Redesigned ",
        highlight: "auction item cards",
        after:
          " and improved the My Items and For You pages to create clearer, more concise interfaces.",
      },
      {
        before: "Expanded ",
        highlight: "component test coverage",
        after:
          " with React Testing Library and Jest, including rendering, click, drag, and mocked interaction scenarios.",
      },
      {
        before: "Mentored engineers on ",
        highlight: "testing, file structure, and React/Redux concepts",
        after: " to support maintainable frontend development.",
      },
    ],
  },
  {
    company: "Sling TV",
    role: "Frontend Software Developer",
    dates: "2019 — 2021",
    location: "American Fork",
    industry: "Streaming media",
    product: "Browser and mobile TV streaming experiences",
    bullets: [
      {
        before: "Built ",
        highlight: "responsive React functional components",
        after:
          " using TypeScript and SCSS for Sling TV’s browser and mobile experiences.",
      },
      {
        before: "Wrote ",
        highlight: "unit tests for component functionality and edge cases",
        after: " using Jest and React Testing Library.",
      },
      {
        before: "Debugged ",
        highlight: "React, Redux, TypeScript, and SCSS issues",
        after: " across browser and mobile experiences.",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript ES6+", "TypeScript", "HTML", "CSS", "SCSS"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Preact",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Oracle JET",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Sequelize",
      "AWS",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Cypress"],
  },
  {
    title: "Tools & AI-Assisted Development",
    items: ["Git", "GitHub", "Codex", "Cline", "Oracle Code Assist"],
  },
];
