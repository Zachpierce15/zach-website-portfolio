"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="flex min-h-screen items-end px-6 pb-16 pt-28 md:px-12 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
          Senior Frontend Engineer · Creator
        </p>

        <h1 className="text-5xl font-black tracking-[-0.06em] text-balance sm:text-7xl md:text-9xl">
          Building clear experiences for complex products.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          I’m Zach Pierce, a frontend-focused engineer specializing in polished,
          reliable interfaces, reusable systems, and thoughtful user workflows.
        </p>

        <a
          href="#work"
          className="mt-10 inline-flex rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
        >
          Explore my work
        </a>
      </motion.div>
    </section>
  );
}
