import { ArrowDownRight } from "lucide-react";

// import { ExperienceSection } from "@/components/sections/Experience";
// import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "../app/components/Hero";
// import { Skills } from "@/components/sections/Skills";
// import { YouTubeWork } from "@/components/sections/YouTubeWork";

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <Hero />
      {/* <FeaturedWork />
      <ExperienceSection />
      <Skills />
      <YouTubeWork /> */}
      HELLO
      <section className="px-6 py-24 md:px-12">
        <a
          href="mailto:your-professional-email@example.com"
          className="group inline-flex items-center gap-3 text-3xl font-semibold tracking-tight md:text-5xl"
        >
          Let’s work together
          <ArrowDownRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </a>
      </section>
    </main>
  );
}
