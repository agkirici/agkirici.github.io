// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function PaperScopePage() {
  const project = projects.find((p) => p.slug === "paperscope");

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
            Scientific Literature Search Tool · Multi-Database Search
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Overview</h2>
            <p className="text-neutral-300 leading-relaxed">
              PaperScope is a scientific search and metadata extraction tool that combines PubMed, PMC, SRA, and other NCBI databases into a unified interface. It enables fast, repeatable, and flexible literature discovery for researchers, analysts, and biotech teams who need fast literature intelligence.
            </p>
          </section>

          {/* Video */}
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
            <video
              src="/pumbed-scraper.mp4"
              controls
              muted
              className="w-full h-auto"
            />
          </div>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
            <Image
              src="/paperscope-cover.png"
              alt="PaperScope Application Interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Highlights */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-100">Key Features</h2>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Multi-database search across PubMed, PMC, SRA, and other NCBI endpoints with unified query interface.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Automatic extraction of DOI, title, year, journal, and comprehensive metadata fields from search results.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Intelligent parsing of corresponding author information and institution details from article affiliations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Full support for advanced NCBI query syntax, enabling complex and precise literature searches.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>One-click Excel export functionality for easy data analysis and sharing with research teams.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>User-friendly Streamlit-based interface that requires no coding knowledge to operate.</span>
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
            <h2 className="text-lg font-semibold text-neutral-100">Contact</h2>
            <p className="text-neutral-300 leading-relaxed">
              If you'd like a customized version of this tool for your lab, research group, or organization, feel free to reach out.
            </p>
            <p className="text-neutral-300">
              Email: <strong className="text-neutral-100">arzukirici@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
