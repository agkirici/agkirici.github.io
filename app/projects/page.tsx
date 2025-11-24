import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const project = projects[0]; // Only one project for now

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <header className="space-y-2">
          <p className="text-sm font-medium text-sky-500">Projects</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h1>
          <p className="text-neutral-300 text-sm md:text-base">
            A project at the intersection of spatial biology, LLMs and software engineering.
          </p>
        </header>

        {/* === CLICKABLE PROJECT CARD === */}
        <Link
          href="/projects/spatioscript"
          className="block rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-sky-500/20"
        >
          <article className="space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-neutral-50">
                {project.title}
              </h2>
              {project.featured && (
                <span className="rounded-full bg-sky-600/40 px-2 py-0.5 text-[11px] uppercase tracking-wide text-sky-200">
                  Featured
                </span>
              )}
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-neutral-800 px-3 py-1 text-xs text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Link>

      </div>
    </main>
  );
}
