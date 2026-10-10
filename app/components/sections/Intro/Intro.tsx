"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { DrawnWord, LAST_NAME_DELAY } from "./DrawnWord";

const Intro = () => {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  const [nameFinished, setNameFinished] = useState(false);
  const contentVisible = reduceMotion || nameFinished;

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: {
      opacity: contentVisible ? 1 : 0,
      y: contentVisible ? 0 : 16,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
      ease: "easeOut" as const,
    },
  };

  // Keep unrevealed content out of keyboard navigation.
  // Visibility does not remove its reserved layout space.
  const revealStyle = {
    visibility: contentVisible ? ("visible" as const) : ("hidden" as const),
  };

  const socialLinkClass =
    "group inline-flex items-center justify-center rounded-lg " +
    "border-2 border-green-200/30 bg-zinc-900 px-6 py-3 " +
    "font-semibold tracking-tight text-green-200 " +
    "transition-colors hover:border-green-300 hover:text-green-300";

  const arrowClass =
    "ml-1 size-4 transition-transform duration-200 ease-out " +
    "group-hover:translate-x-1 group-hover:-translate-y-1";

  return (
    <section className="min-h-screen px-6 pb-16 pt-20 md:px-12 md:pb-24">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="w-full">
          <motion.p
            {...reveal}
            style={revealStyle}
            className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-green-200"
          >
            Senior Software Engineer
          </motion.p>

          <div className="flex flex-col items-start md:flex-row md:items-center">
            <h1 className="w-full max-w-70 shrink-0 sm:max-w-90 md:max-w-100 lg:max-w-125">
              <span className="sr-only">Zach Pierce</span>

              <DrawnWord
                word="Zach"
                color="#fafafa"
                delay={0}
                reduceMotion={reduceMotion}
              />

              <DrawnWord
                word="Pierce"
                color="#bbf7d0"
                delay={LAST_NAME_DELAY}
                reduceMotion={reduceMotion}
                onComplete={() => setNameFinished(true)}
              />
            </h1>

            <motion.div
              {...reveal}
              style={revealStyle}
              className="relative size-46 shrink-0 overflow-hidden rounded-3xl border-2 border-green-200/30 bg-zinc-900"
            >
              <Image
                src="/images/profile/profile.jpeg"
                alt="Zachary Pierce"
                fill
                sizes="184px"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            {...reveal}
            style={revealStyle}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            Engineer specializing in polished, reliable interfaces, reusable
            systems, and thoughtful user workflows.
          </motion.p>

          <motion.div
            {...reveal}
            style={revealStyle}
            className="mt-10 flex flex-wrap gap-2"
          >
            <a
              href="mailto:zachary.15pierce@gmail.com"
              className="inline-flex items-center justify-center rounded-lg bg-green-200 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-green-300"
            >
              zachary.15pierce@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/zachary-pierce-tui/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              LinkedIn
              <ArrowUpRight className={arrowClass} />
            </a>

            <a
              href="https://github.com/Zachpierce15/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClass}
            >
              GitHub
              <ArrowUpRight className={arrowClass} />
            </a>

            <Link href="/resume" className={socialLinkClass}>
              Résumé
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
