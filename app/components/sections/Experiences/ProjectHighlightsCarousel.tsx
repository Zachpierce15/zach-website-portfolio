"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FormattedText from "../../ui/FormattedText";

export type ProjectHighlight = {
  eyebrow: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

type ProjectHighlightsCarouselProps = {
  projectHighlights: ProjectHighlight[];
  company: string;
};

const ProjectHighlightsCarousel = ({
  projectHighlights,
  company,
}: ProjectHighlightsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const headingId = useId();
  const shouldReduceMotion = useReducedMotion();

  const totalProjects = projectHighlights.length;

  if (totalProjects === 0) {
    return null;
  }

  const currentIndex = activeIndex % totalProjects;
  const project = projectHighlights[currentIndex];

  const changeProject = (step: number) => {
    setDirection(step);

    setActiveIndex(
      (previous) => (previous + step + totalProjects) % totalProjects,
    );
  };

  const buttonClasses =
    "inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-green-200 transition-colors hover:border-green-400/40 hover:bg-green-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200";

  const slideVariants = {
    enter: (slideDirection: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : slideDirection * 24,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: (slideDirection: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : slideDirection * -24,
    }),
  };

  return (
    <section
      aria-labelledby={headingId}
      aria-roledescription="carousel"
      className="mt-10"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-200">
            Selected Work
          </p>

          <h4
            id={headingId}
            className="mt-2 text-xl font-semibold tracking-tight text-white"
          >
            Project highlights at {company}
          </h4>
        </div>

        {totalProjects > 1 && (
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="min-w-12 text-center text-sm tabular-nums text-zinc-400"
            >
              {currentIndex + 1} / {totalProjects}
            </span>

            <button
              type="button"
              onClick={() => changeProject(-1)}
              aria-label="Previous project"
              className={buttonClasses}
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => changeProject(1)}
              aria-label="Next project"
              className={buttonClasses}
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        )}
      </div>

      <div aria-live="polite" aria-atomic="true" className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} of ${totalProjects}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="visible"
            exit="exit"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-green-400/20 bg-green-400/10 p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-200">
              {project.eyebrow}
            </p>

            <h5 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
              {project.title}
            </h5>

            <FormattedText
              text={project.summary}
              className="mt-4 max-w-2xl text-lg leading-8 text-zinc-200"
            />

            <dl className="mt-7 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Challenge
                </dt>

                <dd className="mt-2 text-sm leading-6 text-zinc-300">
                  <FormattedText text={project.challenge} />
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Approach
                </dt>

                <dd className="mt-2 text-sm leading-6 text-zinc-300">
                  <FormattedText text={project.approach} />
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Outcome
                </dt>

                <dd className="mt-2 text-sm leading-6 text-zinc-300">
                  <FormattedText text={project.outcome} />
                </dd>
              </div>
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectHighlightsCarousel;
