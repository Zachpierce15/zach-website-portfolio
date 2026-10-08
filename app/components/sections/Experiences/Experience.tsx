"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../../../data/experience";
import ProjectHighlightsCarousel from "./ProjectHighlightsCarousel";

const Experience = () => {
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
            Professional Experience
          </p>

          <h2 className="mt-5 text-7xl font-black leading-[0.92] tracking-[-0.06em] text-balance sm:text-6xl md:text-8xl">
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

                {job?.product && (
                  <a
                    href="https://www.oracle.com/security/cloud-security/access-governance/#features:~:text=Access%20guardrails%3A%20Strengthening%20segregation%20of%20duties%20(SoD)%20with%20metadata%2Ddriven%20rules"
                    className="hover:underline mt-2 text-base font-medium text-green-200 group inline-flex items-center gap-1 tracking-tight"
                    target="_blank"
                  >
                    {job.product}
                    <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                )}

                <p className="mt-2 text-base font-medium text-green-200">
                  {job.role}
                </p>
                <p className="mt-2">Technologies used</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      <strong>{technology}</strong>
                    </li>
                  ))}
                </ul>
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
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-green-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {job?.projectHighlights && (
                  <ProjectHighlightsCarousel
                    projectHighlights={job.projectHighlights}
                    company={job.company}
                  />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
