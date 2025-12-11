// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function GeneExpressionAtlasPage() {
  const project = projects.find((p) => p.slug === "gene-expression-atlas");

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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-neutral-50">
              {project.title}
            </h1>
            {project.featured && (
              <span className="rounded-full bg-sky-600/40 px-3 py-1 text-xs uppercase tracking-wide text-sky-200">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Interactive Single-Cell RNA-seq Visualization Tool · Web Application
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Overview</h2>
            <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
              Gene Expression Atlas Explorer is an interactive web application for visualizing single-cell RNA-seq gene expression patterns across immune cell types and cancer-related genes. It provides instant gene expression lookup without requiring programming knowledge, making single-cell analysis accessible to wet-lab scientists, clinicians, and researchers who don't write code.
            </p>
          </section>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
            <Image
              src="/gene-expression-atlas.png"
              alt="Gene Expression Atlas Explorer Interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Highlights */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Key Features</h2>
            <ul className="space-y-2 text-gray-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Real-time gene search across 45+ curated genes including immune cell markers and cancer genes with auto-suggest functionality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Interactive UMAP visualization with 2,500 simulated cells based on PBMC 3k structure, showing expression patterns with intuitive color gradients.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Cell-type specificity scoring that quantifies how specific a gene is to its primary cell type, helping identify optimal markers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Multi-gene comparison mode with radar charts for comparing up to 3 genes simultaneously, perfect for marker panel design.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Biological context integration showing key pathways, clinical relevance, and FDA-approved drugs targeting each gene.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Publication-ready visualizations including UMAP projections and bar charts ready for export and presentation.</span>
              </li>
            </ul>
          </section>

          {/* Technologies */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 dark:bg-neutral-800 px-3 py-1 text-sm text-gray-700 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Links</h2>
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
                  Live Demo
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

