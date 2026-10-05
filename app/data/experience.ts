export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Oracle",
    role: "Senior Infrastructure Engineer",
    startDate: "2022",
    endDate: "Present",
    description:
      "Building frontend experiences for Oracle Access Governance, with a focus on usable, secure, and reliable enterprise workflows.",
    highlights: [
      "Led frontend work across access-governance experiences using Preact, Oracle JET, JavaScript, and TypeScript.",
      "Implemented permission checks across more than 10 landing pages and built a dedicated no-access experience.",
      "Delivered Access Guardrails, including interconnected detail views and dynamic reporting, in one month.",
      "Maintained approximately 80% test coverage across owned pages through unit and Cypress testing.",
    ],
    technologies: [
      "Preact",
      "TypeScript",
      "Oracle JET",
      "React Context",
      "Cypress",
      "Jest",
    ],
  },
  {
    company: "LiveAuctioneers",
    role: "Frontend Software Developer",
    startDate: "2021",
    endDate: "2022",
    description:
      "Built and improved auction-platform experiences with React, TypeScript, Redux, and Styled Components.",
    highlights: [
      "Redesigned auction item cards and improved My Items and For You experiences.",
      "Expanded test coverage using React Testing Library and Jest.",
      "Mentored engineers on testing practices, project structure, and React/Redux concepts.",
    ],
    technologies: ["React", "TypeScript", "Redux", "Jest", "Styled Components"],
  },
];
