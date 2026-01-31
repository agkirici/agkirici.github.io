// © 2025 Arzu Kirici — All Rights Reserved
import Image from 'next/image';
import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: "Arzu Kirici, MSc | Project Manager & Business Analyst",
  description: "Bridge technical and non-technical teams in healthcare, AI, and biotechnology. Project Manager, Business Analyst, and Strategic Leader with 10+ years in healthcare and 5+ years in project management and software development.",
  openGraph: {
    title: "Arzu Kirici, MSc | Project Manager & Business Analyst",
    description: "Bridge technical and non-technical teams in healthcare, AI, and biotechnology. Project Manager, Business Analyst, and Strategic Leader with 10+ years in healthcare and 5+ years in project management and software development.",
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
    title: "Arzu Kirici, MSc | Project Manager & Business Analyst",
    description: "Bridge technical and non-technical teams in healthcare, AI, and biotechnology. Project Manager, Business Analyst, and Strategic Leader with 10+ years in healthcare and 5+ years in project management and software development.",
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
          <p className="text-lg text-gray-600 dark:text-neutral-400 text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            I bridge technical and non-technical teams in healthcare, AI, and biotechnology, translating complex technical requirements into actionable business strategies. With 10+ years in healthcare, 5+ years in project management, and 5+ years in software development, I lead cross-functional initiatives across the full project lifecycle, delivering strategic projects on time and within scope.
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
                  I bridge technical and non-technical teams in healthcare, AI, and biotechnology, translating complex technical requirements into actionable business strategies. With 10+ years of healthcare experience, 5+ years in project management, and 5+ years in software development, I bring a unique perspective as both a project manager and business analyst, leading cross-functional initiatives across the full project lifecycle.
                </p>

                <p>
                  My unique strength is translating complex requirements between researchers, data scientists, and software developers on one side, and business stakeholders, executive leadership, and operational teams on the other. I gather requirements from both technical and business perspectives, manage stakeholder engagement across all levels, and ensure alignment across wet-lab operations, software development, and AI deployment initiatives.
                </p>

                <p>
                  I develop tracking systems and dashboards to monitor project KPIs, enabling data-driven decision-making and strategic planning for executive teams. Working with Agile and Scrum methodologies, I leverage project management platforms and tools to facilitate communication between research teams and business stakeholders, conducting gap analyses and identifying opportunities for process improvement.
                </p>

                <p>
                  With a background spanning molecular biology, data science, and software development, I serve as the critical link ensuring technical teams understand business objectives while helping business leaders make informed decisions about technical investments.
                </p>

                <p className="italic">
                  Open to Business Analyst, Project Manager, Senior Project Analyst, Senior Research Analyst, opportunities at the intersection of healthcare, IT, AI and business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Where I'm Heading */}
          <Accordion title="Where I'm Heading">
            <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              <p>
                I'm seeking Project Manager, Project Development Manager, Research Manager, Project Analyst, and Business Analyst roles where I can leverage my unique blend of 10+ years healthcare expertise, 5+ years project management experience, and 5+ years software development capabilities in forward-thinking healthcare and technology organizations.
              </p>

              <p>
                My goal is to drive innovation at the intersection of life sciences and technology, leading projects that improve patient outcomes and advance scientific understanding. Currently pursuing CAPM certification and actively expanding my business analysis capabilities to deliver even greater value to complex, cross-functional initiatives.
              </p>

              <p>
                I thrive in environments where strategic thinking meets execution excellence, and where bridging technical and business perspectives creates measurable impact.
              </p>
            </div>
          </Accordion>

          {/* What This Website Is For */}
          <Accordion title="What This Website Is For">
            <div className="space-y-4 text-gray-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              <p>
                This platform showcases my professional journey and capabilities in project management, business analysis, and strategic leadership within healthcare and biotechnology sectors. Here you'll find examples of my work, insights into my approach, and ways to connect.
              </p>

              <p>
                Whether you're looking for a project manager who understands both the science and the business, need a business analyst who can translate technical requirements into strategic initiatives, or you're interested in collaboration opportunities, this is your starting point.
              </p>

              <p>
                I believe the most impactful innovations happen when technical excellence meets business acumen, and this site demonstrates how I bridge that gap.
              </p>
            </div>
          </Accordion>

          {/* Who I Work With */}
          <Accordion title="Who I Work With">
            <div className="space-y-3 text-gray-700 dark:text-neutral-300 text-sm md:text-base">
              <p className="font-semibold text-gray-900 dark:text-neutral-100">
                I serve as the bridge between diverse teams and stakeholders, facilitating communication and alignment across:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Executive leadership and C-suite stakeholders requiring strategic insights and business outcomes</li>
                <li>Biologists and researchers developing cutting-edge therapeutic approaches and spatial biology solutions</li>
                <li>AI engineers and data scientists building healthcare and bioinformatics applications</li>
                <li>Software developers creating tools for life sciences and clinical research applications</li>
                <li>Marketing teams translating scientific innovations into compelling value propositions</li>
                <li>Communication teams ensuring clear messaging across technical and non-technical audiences</li>
                <li>Clinical research teams advancing patient care through innovative diagnostic technologies</li>
                <li>Healthcare organizations implementing digital transformation and process optimization initiatives</li>
                <li>Operations teams managing day-to-day execution and resource allocation</li>
                <li>Cross-functional teams in biotech startups navigating rapid growth and scaling challenges</li>
              </ul>
              <p>
                My role is to ensure seamless collaboration by translating requirements, managing expectations, and aligning objectives across all these diverse groups.
              </p>
            </div>
          </Accordion>

          {/* How I Can Help */}
          <Accordion title="How I Can Help">
            <div className="space-y-4 text-gray-700 dark:text-neutral-300 text-sm md:text-base">
              <ul className="list-disc pl-6 space-y-2">
                <li>Bridging communication gaps between technical and non-technical stakeholders across all organizational levels</li>
                <li>Translating complex scientific requirements into executable project plans and actionable business strategies</li>
                <li>Coordinating cross-functional teams across biology, engineering, software development, and business domains</li>
                <li>Facilitating alignment between research teams, marketing teams, communication teams, and executive leadership</li>
                <li>Optimizing laboratory and research workflows through comprehensive process analysis and improvement initiatives</li>
                <li>Implementing Agile/Scrum methodologies and project management best practices in scientific organizations</li>
                <li>Developing data pipelines, automation tools, and reporting systems to support research and business objectives</li>
                <li>Managing stakeholder engagement, conducting gap analyses, and ensuring alignment between technical execution and business goals</li>
                <li>Creating tracking systems and dashboards for monitoring project KPIs and enabling data-driven decision-making</li>
                <li>Ensuring all teams—from wet lab scientists to marketing professionals—work in sync toward common objectives</li>
              </ul>
            </div>
          </Accordion>
        </div>

        {/* CTA */}
        <section className="border-t border-gray-200 dark:border-neutral-800 pt-6">
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
            If you work in healthcare, pharma, biotech, or technology and you're looking to collaborate with a strategic leader who bridges technical and business perspectives, you can reach me through the{" "}
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
