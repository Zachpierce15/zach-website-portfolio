import type { Metadata } from "next";
import Link from "next/link";
import { resumeExperience, skillGroups } from "../data/resumeExperience";
import ResumeActions from "../components/ui/ResumeAction";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Zachary Pierce | Résumé",
  description:
    "Professional résumé for Zachary Pierce, a senior frontend-focused software engineer.",
};

const websiteUrl = "https://zach-website-portfolio.vercel.app/";

const contactLinks = [
  {
    label: "zachary.15pierce@gmail.com",
    href: "mailto:zachary.15pierce@gmail.com",
  },
  {
    label: "Website",
    href: websiteUrl,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ZachPierce",
  },
  {
    label: "GitHub",
    href: "https://github.com/ZachPierce15",
  },
];

const ResumePage = () => {
  return (
    <main
      className={`${styles.page} min-h-screen bg-zinc-950 px-6 pb-20 pt-24 text-zinc-100 md:px-12 md:pt-32`}
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className={`${styles.screenOnly} mb-8 inline-flex text-sm text-zinc-400 transition-colors hover:text-green-200`}
        >
          ← Back to portfolio
        </Link>

        <header>
          <h1 className={styles.name}>Zachary Pierce</h1>

          <p className="mt-4 text-lg leading-7 text-zinc-300">
            Senior Software Engineer · South Jordan, Utah
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            {contactLinks.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  className={`${styles.contactLink} transition-colors hover:text-green-200 hover:underline`}
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`${styles.screenOnly} mt-7`}>
            <ResumeActions />
          </div>
        </header>

        <section aria-labelledby="resume-summary" className={styles.section}>
          <h2 id="resume-summary" className={styles.sectionHeading}>
            Summary
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            Senior software engineer with several years of experience building{" "}
            <span className="font-semibold text-green-200">
              enterprise and consumer web applications
            </span>
            . At Oracle, I led frontend development for{" "}
            <span className="font-semibold text-green-200">
              Access Governance experiences
            </span>
            , including interconnected workflows, data visualizations,
            permission-aware interfaces, and reusable components. My experience
            also includes customer-facing auction and streaming products at{" "}
            <span className="font-semibold text-green-200">
              LiveAuctioneers and Sling TV
            </span>
            , with a strong emphasis on automated testing and maintainable code.
            I use{" "}
            <span className="font-semibold text-green-200">
              AI-assisted development
            </span>{" "}
            to streamline feature planning, troubleshoot and resolve bugs, and
            rapidly learn unfamiliar systems. This approach helped me get up to
            speed on Oracle Bastion deployment tooling and{" "}
            <span className="font-semibold text-green-200">
              migrate a meaningful portion of workflows from a legacy CI/CD
              pipeline to Shepard
            </span>{" "}
            in a short timeframe.
          </p>
        </section>

        <section aria-labelledby="resume-experience" className={styles.section}>
          <h2 id="resume-experience" className={styles.sectionHeading}>
            Experience
          </h2>

          <div className="mt-6 space-y-9">
            {resumeExperience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-lg font-semibold leading-7 text-white">
                    {job.role}
                    <span className="mx-2 font-normal text-zinc-500">|</span>
                    <span className={styles.accent}>{job.company}</span>
                  </h3>

                  <p className="text-sm text-zinc-400">{job.dates}</p>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {job.location} | {job.industry} | {job.product}
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300 marker:text-green-200">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.highlight} className={styles.bullet}>
                      {bullet.before}
                      <strong className={styles.accent}>
                        {bullet.highlight}
                      </strong>
                      {bullet.after}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-skills" className={styles.section}>
          <h2 id="resume-skills" className={styles.sectionHeading}>
            Skills
          </h2>

          <dl className="mt-5 space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-1 sm:grid-cols-[12rem_1fr] sm:gap-5"
              >
                <dt className="text-sm font-semibold text-white">
                  {group.title}
                </dt>

                <dd className="text-sm leading-6 text-zinc-300">
                  {group.items.join(" | ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="resume-education" className={styles.section}>
          <h2 id="resume-education" className={styles.sectionHeading}>
            Education
          </h2>

          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="text-base leading-7 text-zinc-300">
              <span className="font-semibold text-white">Hack Reactor</span>
              {" | "}
              Immersive Software Engineering Bootcamp
            </p>

            <p className="text-sm text-zinc-400">2019</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResumePage;
