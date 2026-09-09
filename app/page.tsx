// © 2025 Arzu Kirici — All Rights Reserved
import Image from 'next/image';
import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: "Arzu Kirici, MSc | Project Manager & Software Developer",
  description: "I bridge technical and non-technical teams in healthcare, biotechnology, and software, translating complex requirements into working solutions. With a background in molecular biology, 5+ years of project management experience, and hands-on development in TypeScript, React, and Node.js, I work across the full project lifecycle, from the first conversation to the finished product.",
  openGraph: {
    title: "Arzu Kirici, MSc | Project Manager & Software Developer",
    description: "I bridge technical and non-technical teams in healthcare, biotechnology, and software, translating complex requirements into working solutions.",
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
    title: "Arzu Kirici, MSc | Project Manager & Software Developer",
    description: "I bridge technical and non-technical teams in healthcare, biotechnology, and software, translating complex requirements into working solutions.",
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
      <div className="mx-auto max-w-3xl md:max-w-6xl space-y-12">
        {/* Name Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-sky-500 text-center">
            Arzu Kirici, MSc
          </h1>
          <p className="text-lg font-medium text-gray-800 dark:text-neutral-200 text-center mt-4">
            Project Manager | Software Developer
          </p>
          <p className="text-base text-gray-600 dark:text-neutral-400 text-center mt-2">
            Healthcare, Biotech &amp; Software | Agile | Cross-Functional Team Leadership
          </p>
          <p className="text-lg text-gray-600 dark:text-neutral-400 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            I bridge technical and non-technical teams in healthcare, biotechnology, and software, translating
            complex requirements into working solutions. With a background in molecular biology, 5+ years of project
            management experience, and hands-on development in TypeScript, React, and Node.js, I work across the
            full project lifecycle, from the first conversation to the finished product.
          </p>
        </header>

        {/* About Section */}
        <section>
          {/* Mobile: Centered heading */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-neutral-100 text-center md:hidden">
            About
          </h2>

          {/* Desktop: Two-column grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
            {/* Profile Picture and Social Media - Left Column (Desktop) / Centered (Mobile) */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/profile.jpg"
                alt="Arzu Kirici"
                width={200}
                height={200}
                className="rounded-full object-cover border-2 border-gray-300 dark:border-neutral-700"
                priority
              />

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arzu-kirici"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-neutral-200"
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
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-neutral-200"
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
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-sky-600 transition-colors"
                  aria-label="Upwork"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-neutral-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Text Content - Right Column (Desktop) / Full Width (Mobile) */}
            <div className="space-y-4 max-w-3xl">
              {/* Desktop: Left-aligned heading */}
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-neutral-100 hidden md:block text-left">
                About
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                <p>
                  My background started in molecular biology, and it shaped how I approach every problem since. In the lab,
                  catching an error early meant catching it before it became a wrong diagnosis. That same instinct now drives
                  how I build software and manage projects: verify everything, and don&apos;t trust a system until you understand
                  exactly how it fails.
                </p>
                <p>
                  As a project manager, most of my requirements never arrived in writing. They came from a conversation, changed
                  halfway through, or came from someone with no technical background who just needed a problem solved. I&apos;ve
                  learned to ask the right questions early, scope work honestly, and explain a plan clearly enough that both a
                  scientist and an engineer would trust it.
                </p>
                <p>
                  Over the past few years I&apos;ve added hands-on development to that, building with <strong>TypeScript, React, and Node.js</strong>.
                  I develop tracking systems and dashboards for executive decision-making, and I&apos;m as comfortable writing the
                  code as I am managing the team that ships it.
                </p>
                <p>
                  With a background spanning <strong>molecular biology, project management, and software development</strong>, I bridge
                  the gap between researchers, engineers, and business stakeholders, translating between all three so that
                  nothing gets lost in the handoff.
                </p>
                <p className="italic">
                  Open to Software Engineer, Project Manager, and Business Analyst opportunities at the intersection of healthcare, technology, and business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <div className="space-y-4">
          <Accordion title="Where I'm Heading">
            <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m looking for <strong>Software Engineer, Project Manager</strong> roles where I can put my background in biology, project management, and software development to use together.
              </p>
              <p>
                My goal is to work at the intersection of supply chain, healthcare, data, and technology, building software and leading projects that actually solve the problem in front of people, not just the one written in a spec. I&apos;ve spent the last few years adding hands-on development with <strong>TypeScript, React, and Node.js</strong> to a background that started in the lab and grew through years of managing cross-functional teams.
              </p>
              <p>
                I do my best work where technical depth and business context both matter, and where someone has to be the person who understands both sides well enough to translate between them.
              </p>
            </div>
          </Accordion>

          <Accordion title="What This Website Is For">
            <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              <p>
                This site shows my work and how I think, across software development, project management, and the science background that shaped both.
              </p>
              <p>
                Whether you&apos;re looking for an engineer who understands the business side without needing everything spelled out or a project manager who can also read and write code or someone who&apos;s spent years verifying data before trusting it, this is where you&apos;d start.
              </p>
              <p>
                I built this site the way I approach most things: figure out what&apos;s actually needed, then build it.
              </p>
            </div>
          </Accordion>

          <Accordion title="Who I Work With">
            <div className="space-y-3 text-gray-700 dark:text-neutral-300 text-sm md:text-base">
              <p>
                I work between engineers, researchers, and the people running the business side, whether that&apos;s leadership, operations, or clients who don&apos;t care how the code works as long as it does. I&apos;ve done this in supply chain, healthcare and biotech, and I&apos;m applying the same skill set to software teams now.
              </p>
              <p>
                Whether it&apos;s a fast-moving team that needs someone who can pick up context quickly, or an organization that needs project work and technical work handled by the same person, I translate requirements, manage expectations, and make sure what gets built is actually what was needed.
              </p>
            </div>
          </Accordion>

          <Accordion title="How I Can Help">
            <div className="space-y-3 text-gray-700 dark:text-neutral-300 text-sm md:text-base">
              <ul className="list-disc pl-6 space-y-2">
                <li>Building and shipping software, mainly with TypeScript, React, and Node.js</li>
                <li>Translating technical requirements into project plans people can actually execute</li>
                <li>Coordinating cross-functional teams across engineering, science, and business</li>
                <li>Running Agile/Scrum practices in teams that don&apos;t already have them figured out</li>
                <li>Building dashboards and tracking tools for decision-making</li>
                <li>Managing stakeholders and keeping technical work and business goals aligned</li>
              </ul>
            </div>
          </Accordion>
        </div>

        {/* CTA */}
        <section className="border-t border-gray-200 dark:border-neutral-800 pt-6">
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
            If you work in healthcare, pharma, biotech, or technology and you&apos;re looking to collaborate, you can reach me through the{" "}
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
