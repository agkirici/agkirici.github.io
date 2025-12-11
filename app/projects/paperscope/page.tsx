// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function PaperScopePage() {
  const project = projects.find((p) => p.slug === "paperscope");

  if (!project) return null;

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
            Multi-Database Scientific Search Tool · PubMed · PMC · GEO/SRA
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Overview</h2>
            <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
              PaperScope is a unified interface for searching PubMed, PMC, GEO/SRA,
              and other NCBI endpoints. It extracts structured metadata such as DOI,
              title, year, journal, author affiliations, and institutional details.
              Researchers can run advanced queries, preview results interactively,
              and export everything to Excel for downstream analysis.
            </p>
          </section>

          {/* Promo Video */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
            <video
              src="/pumbed-scraper.mp4"
              controls
              muted
              className="w-full h-auto"
            />
          </div>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
            <Image
              src="/paperscope-cover.png"
              alt="PaperScope Application Interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Features */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Key Features</h2>

            <ul className="space-y-2 text-gray-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  Unified multi-database search across PubMed, PMC, GEO/SRA, and NCBI endpoints.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  Structured extraction of DOI, title, year, journal, citations, and metadata fields.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  Intelligent parsing of corresponding authors, affiliations, and institutional metadata.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  Full support for advanced NCBI query syntax, Boolean logic, and field-specific filters.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  One-click Excel export for easy organization, sharing, or downstream analysis.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>
                  Clean and intuitive Streamlit UI requiring no programming experience.
                </span>
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

          {/* Contact */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Contact</h2>
            <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
              If you'd like a customized version of PaperScope for your research group,
              lab, or organization, feel free to reach out.
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              Email: <strong className="text-gray-900 dark:text-neutral-100">arzukirici@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
