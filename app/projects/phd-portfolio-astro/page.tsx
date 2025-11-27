// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function PhdPortfolioPage() {
  const project = projects.find((p) => p.slug === "phd-portfolio-astro");

  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-50">
              {project.title}
            </h1>
            {project.featured && (
              <span className="rounded-full bg-sky-600/40 px-3 py-1 text-xs uppercase tracking-wide text-sky-200">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-neutral-400">
            Academic Portfolio Template · Open Source
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Overview</h2>
            <p className="text-neutral-300 leading-relaxed">
              This project is a modern academic portfolio template built using Astro and Tailwind. It provides researchers with a clean, structured, and responsive way to present their projects, publications, skills, and CV online. Offering a clearer and more functional alternative to static PDF résumés, which are increasingly limiting in a digital environment where scientific work benefits from interactive and accessible formats.
            </p>
          </section>

          {/* Highlights */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Key Features</h2>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Built with Astro and Tailwind for fast performance and clean architecture.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Includes sections for research projects, publications, skills, and CV download.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Fully responsive layout suitable for academic and industry portfolios.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Easy to maintain and modify for other researchers or PhD students.</span>
              </li>
            </ul>
          </section>

          {/* Technologies */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">
                Astro
              </span>
              <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">
                Tailwind CSS
              </span>
              <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">
                TypeScript
              </span>
              <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">
                Vercel
              </span>
            </div>
          </section>

          {/* Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
                >
                  GitHub Repository
                </a>
              )}
              <a
                href="https://phd-portfolio-astro.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
              >
                Live Demo
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

