type ProjectHighlight = {
  eyebrow: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
  technologies: string[];
  product?: string;
  projectHighlights?: ProjectHighlight[];
};

export const experience: Experience[] = [
  {
    company: "Oracle",
    role: "Senior Infrastructure Engineer",
    product: "Access Governance",
    dates: "2022 — 2026",
    description:
      "Building frontend experiences for Oracle Access Governance, with a focus on clear, secure, and reliable enterprise workflows.",
    highlights: [
      "Led frontend development across Access Governance experiences using Preact, Oracle JET, JavaScript, and TypeScript.",
      "Built data visualizations for Access Review Insights to help users make more informed access decisions.",
      "Implemented permission checks across more than 10 landing pages and created a dedicated no-access experience.",
      "Expanded an improved reusable selection component across more than seven creation workflows.",
      "Championed unit and Cypress testing practices, achieving more than 80% coverage across owned areas.",
    ],
    technologies: [
      "Preact",
      "TypeScript",
      "JavaScript",
      "Oracle JET",
      "Cypress",
      "React Testing Library",
      "Shepard",
    ],
    projectHighlights: [
      {
        eyebrow: "Project Highlight · Oracle Infrastructure",
        title: "Bastion CI/CD Migration to Shepard",
        summary:
          "Migrated Oracle Bastion deployment workflows from a legacy CI/CD pipeline to Shepard, using Codex to accelerate learning and implementation.",
        challenge:
          "The migration required working with <strong>unfamiliar deployment tooling and pipeline configurations.</strong> With no prior experience in the migration process, I needed to get up to speed quickly while making meaningful progress.",
        approach:
          "Used Codex to help understand the existing pipeline, navigate unfamiliar configurations, and break the migration into manageable steps. Applied that understanding to migrate deployment workflows to Shepard.",
        outcome:
          "Migrated a meaningful portion of the Bastion deployment workflows in a short timeframe, demonstrating the ability to <strong>learn unfamiliar systems quickly and turn that knowledge into delivery.</strong>",
      },
      {
        eyebrow: "Project Highlight · Oracle Access Governance",
        title: "Access Guardrails",
        summary:
          "An interconnected investigation and reporting experience that helps users understand and act on access-policy violations.",
        challenge:
          "Users needed to filter complex violation data across charts, tables, and summary information, then navigate between reports and related detail pages <strong>without losing their selected context.</strong>",
        approach:
          "Owned the frontend implementation across the landing page, two detail pages, and violations-reporting page. Used React Context and local storage to preserve relevant filter selections and keep the connected workflows consistent.",
        outcome:
          "Delivered four interconnected user experiences from implementation through testing in <strong>one month</strong>, while maintaining approximately <strong>80% test coverage</strong> across the pages I owned.",
      },
      {
        eyebrow: "Technical Highlight · Oracle Access Governance",
        title: "Resolving Duplicate Report Loading",
        summary:
          "A targeted state-management fix that eliminated duplicate loading when users returned to the violations-reporting page with saved filters.",
        challenge:
          "When saved filters were present in local storage, the page loaded twice, causing <strong>duplicate component renders and API calls.</strong> Identifying the cause was difficult because state was managed across local storage, React Context, and component state.",
        approach:
          "Traced the issue to a useEffect that restored saved filters after the initial render. Initialized the relevant useState values directly from local storage instead, removing the additional filter update that triggered another round of loading.",
        outcome:
          "Eliminated the duplicate loading caused by restoring filters after the initial render, while preserving users’ saved filter selections.",
      },
      {
        eyebrow: "Project Highlight · Oracle Access Governance",
        title: "Access Review Insights",
        summary:
          "Dynamic data visualizations that help users interpret machine-learning insights during access reviews.",
        challenge:
          "The frontend needed to present machine-learning data as <strong>clear, actionable visualizations</strong> that users could reference when making access decisions.",
        approach:
          "Led development of dynamic graphs for Access Review Insights, translating the available data into visual reporting within the Access Governance interface.",
        outcome:
          "Delivered visualizations that gave users additional insight to support more informed access-review decisions.",
      },
      {
        eyebrow: "Project Highlight · Oracle Access Governance",
        title: "Manage Organizations",
        summary:
          "A dedicated interface for creating and managing organizations and their members.",
        challenge:
          "The project required translating UX designs into a <strong>clear, usable organization-management experience</strong> within the existing product.",
        approach:
          "Led the frontend implementation of the Manage Organizations page, using the product’s Preact and Oracle JET stack to bring the designs into the application.",
        outcome:
          "Delivered an interface for creating and managing organizations and their members within Oracle Access Governance.",
      },
      {
        eyebrow: "Project Highlight · Oracle Access Governance",
        title: "Permission-Aware Navigation",
        summary:
          "Frontend permission checks and a dedicated no-access experience across Access Governance landing pages.",
        challenge:
          "Landing pages needed to handle users with different permissions consistently and provide a <strong>clear experience when access was unavailable.</strong>",
        approach:
          "Took ownership of frontend permission checks across more than 10 landing pages and created a dedicated landing page for users without the required permissions.",
        outcome:
          "Implemented permission-aware frontend behavior across <strong>more than 10 landing pages</strong>, with a dedicated experience for users who lacked access.",
      },
      {
        eyebrow: "Project Highlight · Oracle Access Governance",
        title: "Reusable Selection Workflows",
        summary:
          "A shared selection-component improvement rolled out across multiple creation workflows.",
        challenge:
          "An improved selection component needed to work across <strong>more than seven creation workflows</strong>, each with its own integration requirements.",
        approach:
          "Updated the affected workflows to use the improved selection component and created integration layers so the reusable component could fit each workflow.",
        outcome:
          "Extended the selection improvements across <strong>more than seven workflows</strong>, reusing the shared component throughout those experiences.",
      },
    ],
  },
  {
    company: "LiveAuctioneers",
    role: "Frontend Software Developer",
    dates: "2021 — 2022",
    description:
      "Built and improved customer-facing auction experiences with an emphasis on clear interactions, maintainable React components, and test coverage.",
    highlights: [
      "Developed key user experiences using React, TypeScript, Redux, and Styled Components.",
      "Redesigned auction item cards and improved the My Items and For You experiences.",
      "Used React Testing Library and Jest to test rendering, click, drag, and mocked interaction scenarios.",
      "Mentored other engineers on testing, file structure, and React/Redux concepts.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Styled Components",
      "React Testing Library",
      "Jest",
    ],
  },
  {
    company: "Sling TV",
    role: "Frontend Software Developer",
    dates: "2019 — 2021",
    description:
      "Built and maintained responsive frontend experiences for Sling TV across browser and mobile, with a focus on reusable components, testing, and troubleshooting.",
    highlights: [
      "Developed responsive React functional components using TypeScript and SCSS for Sling TV’s browser and mobile experiences.",
      "Wrote unit tests with Jest and React Testing Library to validate component functionality and edge cases.",
      "Debugged React, Redux, TypeScript, and SCSS issues across browser and mobile experiences.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "SCSS",
      "Jest",
      "React Testing Library",
    ],
    projectHighlights: [],
  },
];
