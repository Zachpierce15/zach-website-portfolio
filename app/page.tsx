import { ArrowDownRight } from "lucide-react";

import Experience from "./components/sections/Experiences/Experience";
// import { FeaturedWork } from "@/components/sections/FeaturedWork";
import Intro from "./components/sections/Intro/Intro";
// import { Skills } from "@/components/sections/Skills";
// import { YouTubeWork } from "@/components/sections/YouTubeWork";

export default function About() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <Intro />
      <Experience />
      {/* <FeaturedWork />
      <Skills />
      <YouTubeWork /> */}

      <section className="px-6 py-24 md:px-12">
        <a
          href="mailto:zachary.15pierce@gmail.com"
          className="group inline-flex items-center gap-3 text-3xl font-semibold tracking-tight md:text-5xl"
        >
          Let’s work together
          <ArrowDownRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </a>
      </section>
    </main>
  );
}
