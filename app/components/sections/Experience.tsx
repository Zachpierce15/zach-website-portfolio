"use client";

import { motion, useReducedMotion } from "motion/react";

const experience = [
  {
    company: "Oracle",
    role: "Senior Infrastructure Engineer",
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
      "Jest",
    ],
    projectHighlight: {
      eyebrow: "Project Highlight · Oracle Access Governance",
      title: "Access Guardrails",
      summary:
        "A connected investigation and reporting workflow that helps users understand and act on access-policy violations.",
      challenge:
        "Users needed to filter complex violation data and move between reports and related detail pages without losing their selected context.",
      approach:
        "Designed shared state management with React Context and local storage to keep filters and workflow context consistent across connected pages.",
      outcome:
        "Delivered a landing page, Guardrail details, Violation details, and a dynamic reporting experience in one month while maintaining approximately 80% test coverage.",
    },
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
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="bg-zinc-950 px-6 pb-20 pt-8 text-zinc-100 md:px-12 md:pb-32 md:pt-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Professional Experience
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-balance sm:text-6xl md:text-8xl">
            Building products people can trust.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            I build frontend experiences for complex products, with an emphasis
            on usability, maintainable systems, quality, and thoughtful
            collaboration.
          </p>
        </motion.div>

        <div className="mt-12 border-t border-white/15 md:mt-16">
          {experience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="grid gap-8 border-b border-white/15 py-10 md:grid-cols-[0.3fr_0.7fr] md:gap-12 md:py-14"
            >
              <div>
                <p className="text-sm font-medium text-zinc-500">{job.dates}</p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
                  {job.company}
                </h3>

                <p className="mt-2 text-base font-medium text-violet-300">
                  {job.role}
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                  {job.description}
                </p>

                <ul className="mt-7 space-y-3 text-zinc-400">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-7">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {job.projectHighlight && (
                  <div className="mt-10 rounded-2xl border border-violet-400/20 bg-violet-400/10 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                      {job.projectHighlight.eyebrow}
                    </p>

                    <h4 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      {job.projectHighlight.title}
                    </h4>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-200">
                      {job.projectHighlight.summary}
                    </p>

                    <dl className="mt-7 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                          Challenge
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-zinc-300">
                          {job.projectHighlight.challenge}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                          Approach
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-zinc-300">
                          {job.projectHighlight.approach}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                          Outcome
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-zinc-300">
                          {job.projectHighlight.outcome}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                <ul className="mt-8 flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
