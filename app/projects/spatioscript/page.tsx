// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function SpatioScriptPage() {
  const project = projects[0]; // SpatioScript project

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
            Sep 2025 – Present · PANORAMICS – A Vision · Toronto Bioinformatics Hackathon 2025
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Overview</h2>
            <p className="text-neutral-300 leading-relaxed">
              SpatioScript is an LLM-powered spatial biology query tool that lets users ask natural language questions about spatial and single-cell datasets. The system connects preprocessed data, cell type annotations, spatial graphs and image views to answer biologically meaningful questions.
            </p>
          </section>

          {/* Highlights */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Key Features</h2>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Built an end-to-end prototype that turns English questions into queries over spatial biology data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Combined Scanpy/anndata workflows with Neo4j graphs and OpenCV-based image handling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Integrated OpenAI's API to interpret questions and route them to the right data structures.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Focused on use cases such as neighborhood enrichment, tumor microenvironment questions and marker discovery.</span>
              </li>
            </ul>
          </section>

          {/* Technologies */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200"
                >
                  {tag}
                </span>
              ))}
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
                >
                  DevPost Project
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
