// © 2025 Arzu Kirici — All Rights Reserved

import Image from 'next/image';
import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: "Arzu Kirici | Portfolio",
  description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
  openGraph: {
    title: "Arzu Kirici | Portfolio",
    description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
    url: "https://arzukirici.com",
    siteName: "Arzu Kirici Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://arzukirici.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arzu Kirici Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arzu Kirici | Portfolio",
    description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
    site: "https://arzukirici.com",
    images: ["https://arzukirici.com/og-image.png"],
  },
  alternates: {
    canonical: "https://arzukirici.com",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* Name Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-sky-500">
            Arzu Kirici
          </h1>
        </header>

        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-neutral-100">About</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
            {/* Profile Picture and Social Media - Left Side */}
            <div className="flex-shrink-0 flex flex-col items-center space-y-4">
              <Image
                src="/profile.jpg"
                alt="Arzu Kirici"
                width={200}
                height={200}
                className="rounded-full object-cover border-2 border-neutral-700"
                priority
              />
              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arzu-kirici"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-neutral-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/agkirici"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6 text-neutral-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Upwork */}
                <a
                  href="https://www.upwork.com/freelancers/~0135d7c36f12a8eba8?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="Upwork"
                >
                  <svg
                    className="w-6 h-6 text-neutral-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="flex-1 space-y-4">
              <p className="text-neutral-300 leading-relaxed">
                I am a scientist building user-friendly software that supports real 
                research workflows for the healthcare industry, biotech companies, 
                and academic research groups. I began my career in a genetic disease diagnostic laboratory, working on molecular assays and next-generation sequencing workflows. 
                I later moved into cancer research, where I supported multi-omics projects as a data analyst and contributed to data curation, workflow optimization, and research operations. 
                Today, I combine molecular biology, data analysis, and software development to build practical computational tools, pipelines, 
                interfaces, and automation modules that integrate directly into research workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Data & tooling */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Working with complex research data</h3>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Connecting datasets</h4>
            <p className="leading-relaxed">
              Many projects combine assay results, annotations, clinical fields and public
              resources. I work on structuring these datasets so that they can be joined and
              queried reliably, sometimes using graph databases such as Neo4j when relationships
              matter more than individual tables.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Querying data with language models</h4>
            <p className="leading-relaxed">
              I also experiment with using large language models as an interface to data.
              A common pattern is to translate plain English questions into a query language
              like Cypher or SQL so that biologists can explore their data without writing
              code, while still keeping the underlying schemas and constraints explicit.
            </p>
          </div>
        </section>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Where I'm heading */}
          <Accordion title="Where I'm heading?">
            <p className="leading-relaxed">
              I&apos;m on bioinformatics software development, building tools that sit between data analysis and practical research workflows. 
              I work with Python for data processing, and TypeScript/React for full-stack applications, 
              using frameworks that let me develop clean, reliable interfaces. I work with tools like Scanpy for single-cell and spatial data, 
              and I write both backend and frontend logic depending on what a project requires.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Software platforms for clinical and healthcare data workflows</li>
              <li>Analysis tools for single-cell and spatial-omics</li>
              <li>Dashboards, internal tools, and automation pipelines for biotech teams</li>
            </ul>
          </Accordion>

          {/* What this website is for */}
          <Accordion title="What this website is for?">
            <p className="leading-relaxed">
              This website collects the projects I&apos;m building at the intersection of
              biology, data analysis and software. My goal is to create simple, focused
              applications that make everyday research workflows easier.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Internal tools and dashboards for biotech and pharma teams</li>
              <li>Applications for spatial biology and multi-omics data exploration</li>
              <li>Small applications that simplify lab or analytics tasks</li>
              <li>Prototypes that test ideas in healthcare and research software</li>
            </ul>
          </Accordion>

          {/* Who I help */}
          <Accordion title="Who I work with?">
            <ul className="list-disc pl-5 space-y-1">
              <li>Companies developing single-cell or spatial technologies</li>
              <li>Biotech and pharma teams working with single-cell or spatial data</li>
              <li>Research groups and PIs running single-cell or spatial biology projects</li>
            </ul>
          </Accordion>

          {/* How I help */}
          <Accordion title="How I can help?">
            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-100">End-to-end development</h4>
              <p className="leading-relaxed">
                You explain the biological or clinical problem and I design and build the
                application from start to finish. This includes data handling, backend
                logic and the full interface.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-100">
                Tool development and handover
              </h4>
              <p className="leading-relaxed">
                I build the pipelines or dashboards you need and I provide clean, documented
                code that your team can maintain or extend.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-100">Done for you</h4>
              <p className="leading-relaxed">
                I take responsibility for a clearly defined project and deliver a working
                product that is ready to use.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-100">Done with you</h4>
              <p className="leading-relaxed">
                We work together on your systems. I help implement the core parts of your
                infrastructure and make sure it runs smoothly in your environment.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-neutral-100">Advisory</h4>
              <p className="leading-relaxed">
                I review your workflows and help you make better decisions about tools,
                pipelines and architecture for projects in healthcare, spatial biology and
                biotech.
              </p>
            </div>
          </Accordion>
        </div>

        {/* CTA */}
        <section className="border-t border-neutral-800 pt-6">
          <p className="text-neutral-300 leading-relaxed">
            If you work in healthcare, pharma or biotech and you need a tool that doesn&apos;t
            exist yet, you can reach me through the{" "}
            <a
              href="/contact"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
