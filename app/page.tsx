export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-sm font-medium text-sky-500">Welcome</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&apos;m <span className="text-sky-500">Arzu Kirici</span>.
          </h1>
          <h2 className="text-xl font-semibold text-neutral-200">
            I&apos;m a scientist building web applications for healthcare and biotech.
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            I started in genetic disease diagnostics and wet-lab molecular biology, working
            on PCR-based tests and clinical genomics in Turkey. Later I moved into cancer
            research projects in Canada, focusing on genomic data analysis and
            project-based data work. Now I combine wet-lab experience with data analysis
            and software development to build applications that teams in healthcare and
            biotech can actually use.
          </p>
        </section>

        {/* Where I'm heading */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Where I&apos;m heading</h3>
          <p className="text-neutral-300 leading-relaxed">
            I&apos;m moving toward full bioinformatics software engineering — combining my
            biology background with modern software tools. I&apos;m strengthening my skills
            in:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-300">
            <li>Python for data processing, analysis, and backend logic.</li>
            <li>TypeScript, React, and Next.js for full-stack web applications.</li>
            <li>Tailwind and modern UI patterns for clear, usable interfaces.</li>
            <li>API design and deployment for reliable backend services.</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            The goal is to deliver tools that are both technically solid and biologically
            meaningful.
          </p>
        </section>

        {/* What this website is for */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">What this website is for</h3>
          <p className="text-neutral-300 leading-relaxed">
            This website is a place to collect the products I&apos;m building at the
            intersection of biology, data analysis, and software:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-300">
            <li>Internal tools and dashboards for biotech and pharma teams.</li>
            <li>Web applications for spatial biology and multi-omics data.</li>
            <li>Small applications that simplify lab workflows or data handling.</li>
            <li>Prototypes that test ideas in healthcare and research software.</li>
          </ul>
        </section>

        {/* How I help */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">How I can help</h3>
          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">
              End-to-end application development
            </h4>
            <p className="leading-relaxed">
              You describe the biological or clinical need — I design and build the
              software. From raw data or a rough idea to a functional web tool with a clean
              UI.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">
              Tool development &amp; handover
            </h4>
            <p className="leading-relaxed">
              I develop the pipelines, dashboards, or analysis modules you need and hand
              over fully documented, maintainable code that your team can extend.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Done-for-you</h4>
            <p className="leading-relaxed">
              I take full ownership of a clearly scoped project — frontend, backend,
              deployment, and basic data handling — and deliver a working product.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Done-with-you</h4>
            <p className="leading-relaxed">
              We collaborate on your infrastructure and workflows. I build the core logic
              and help integrate it into your existing systems and team practices.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Advisory</h4>
            <p className="leading-relaxed">
              I review workflows, evaluate tool choices, and provide guidance on how to
              structure pipelines and applications for healthcare, spatial biology, and
              biotech use cases.
            </p>
          </div>
        </section>

        {/* Call to action */}
        <section className="border-t border-neutral-800 pt-6">
          <p className="text-neutral-300 leading-relaxed">
            If you&apos;re in healthcare, pharma, or biotech and you&apos;re missing a tool
            you wish existed, feel free to reach out through the{" "}
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
