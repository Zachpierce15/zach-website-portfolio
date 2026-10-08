import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const ResumeActions = () => {
  const resumePath = "/resume/zachary-pierce-resume.pdf";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={resumePath}
        download
        className="group inline-flex items-center justify-center rounded-lg border-2 border-green-200/30 bg-zinc-900 px-6 py-3 font-semibold tracking-tight text-green-200/30 transition-colors hover:border-green-300 hover:text-green-300"
      >
        Download PDF
        <ArrowDownToLine
          aria-hidden="true"
          className="ml-1 size-4 transition-transform duration-200 ease-out group-hover:translate-y-1"
        />
      </a>

      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center rounded-lg border-2 border-green-200/30 bg-zinc-900 px-6 py-3 font-semibold tracking-tight text-green-200/30 transition-colors hover:border-green-300 hover:text-green-300"
      >
        Print / Save as PDF
        <ArrowUpRight
          aria-hidden="true"
          className="ml-1 size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        <span className="sr-only"> (opens the résumé PDF in a new tab)</span>
      </a>
    </div>
  );
};

export default ResumeActions;
