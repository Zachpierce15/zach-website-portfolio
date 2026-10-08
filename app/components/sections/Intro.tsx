"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

const Intro = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen px-6 pb-16 pt-20 md:px-12 md:pb-24">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="w-full"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-green-200">
            Senior Software Engineer
          </p>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12 lg:gap-20">
            <h1 className="min-w-0 text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block">Zach</span>

              <span className="block text-green-200">Pierce</span>
            </h1>

            <div className="relative size-36 shrink-0 overflow-hidden rounded-3xl  border-2 border-green-200/30 bg-zinc-900">
              <Image
                src="/images/profile/profile.jpg"
                alt="Zachary Pierce"
                fill
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, (min-width: 640px) 192px, 160px"
                className="object-cover"
              />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
                Engineer specializing in polished, reliable interfaces, reusable
                systems, and thoughtful user workflows.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Engineer specializing in polished, reliable interfaces, reusable
            systems, and thoughtful user workflows.
          </p>
          <div className="mt-10 flex max-w-2xl flex-wrap gap-2">
            <a
              href="mailto:zachary.15pierce@gmail.com"
              className="inline-flex items-center justify-center rounded-lg bg-green-200 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-green-300"
            >
              zachary.15pierce@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/zachary-pierce-tui/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border-2 border-green-200/30 bg-zinc-900 px-6 py-3 font-semibold text-green-200/30 transition-colors hover:text-green-300 hover:border-green-300 tracking-tight"
            >
              LinkedIn
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 " />
            </a>

            <a
              href="https://github.com/Zachpierce15/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border-2 border-green-200/30 bg-zinc-900 px-6 py-3 font-semibold text-green-200/30 transition-colors hover:text-green-300 hover:border-green-300 tracking-tight"
            >
              GitHub
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-lg border-2 border-green-200/30 bg-zinc-900 px-6 py-3 font-semibold text-green-200/30 transition-colors hover:text-green-300 hover:border-green-300"
            >
              Résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
