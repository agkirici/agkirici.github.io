// © 2025 Arzu Kirici — All Rights Reserved

import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";

export default function GCPFastQPipelinePage() {
  const project = projects.find((p) => p.slug === "gcp-fastq-pipeline");

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
            Serverless Bioinformatics Pipeline · Cloud Architecture · 2024
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Overview</h2>
            <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
              A production-ready serverless bioinformatics pipeline on Google Cloud Platform that automatically processes FASTQ sequencing files, performs quality control analysis, and provides real-time visualizations. The system uses event-driven architecture to trigger automated QC processing when files are uploaded, stores metrics in BigQuery for analytics, and serves an interactive React dashboard for researchers to monitor data quality.
            </p>
          </section>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
            <Image
              src="/gcp-fastq-pipeline.png"
              alt="GCP Serverless Bioinformatics Pipeline Dashboard"
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
                <span>Event-driven serverless architecture with Cloud Functions that automatically trigger QC analysis when FASTQ files are uploaded to Cloud Storage, eliminating manual processing steps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Interactive React dashboard with real-time metrics visualization including quality trends, GC content distribution, and comprehensive file tables with sortable columns and search functionality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Scalable data pipeline using BigQuery for storing and querying QC metrics, enabling efficient analysis of large-scale sequencing datasets with SQL-like queries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>Infrastructure as Code with Terraform for reproducible deployments, including GCS buckets, BigQuery datasets, Cloud Functions, and Cloud Run services with proper IAM configurations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">•</span>
                <span>FastAPI backend providing RESTful endpoints for metrics retrieval and signed URL generation for secure file uploads, with comprehensive error handling and CORS support.</span>
              </li>
            </ul>
          </section>

          {/* Technologies */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">Technologies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200 mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-100 dark:bg-neutral-800 px-3 py-1 text-sm text-gray-700 dark:text-neutral-200">React</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">TypeScript</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Vite</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">TailwindCSS</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Recharts</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">React Query</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-200 mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Python</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">FastAPI</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Biopython</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-200 mb-2">Cloud Services</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Google Cloud Functions</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Cloud Storage</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">BigQuery</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Cloud Run</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-200 mb-2">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Terraform</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">Docker</span>
                  <span className="rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-200">GitHub Actions</span>
                </div>
              </div>
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

