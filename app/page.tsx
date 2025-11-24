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
           I'm a scientist building web applications for healthcare and biotech.
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            I work across biology and data — from genomics and NGS diagnostics to
            research data analysis and reporting. Now I design and build websites and
            applications that close the gap between wet-lab biology and real software
            tools, with a focus on healthcare, spatial biology, pharma, and small to
            medium-sized biotech companies.
          </p>
        </section>

        {/* Current focus */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Where I&apos;m heading</h3>
          <p className="text-neutral-300 leading-relaxed">
            I started in molecular biology and NGS diagnostics, and I&apos;ve been
            working as a data analyst on research projects. I&apos;m moving deliberately
            toward bioinformatics software engineering — strengthening my skills in
            Python, TypeScript, and modern web frameworks so I can deliver tools that
            are both technically solid and biologically meaningful.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-300">
            <li>Web applications for healthcare and clinical workflows.</li>
            <li>Tools for spatial and single-cell data exploration.</li>
            <li>Dashboards and internal tools for small and mid-size biotech teams.</li>
          </ul>
        </section>

        {/* About this site */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">What this website is for</h3>
          <p className="text-neutral-300 leading-relaxed">
            This website is a place to collect the products I&apos;m building at the
            intersection of biology, data analysis, and software:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-300">
            <li>Internal tools and dashboards for biotech and pharma teams.</li>
            <li>Applications for spatial biology and multi-omics data.</li>
            <li>Prototypes that test ideas in healthcare and research software.</li>
          </ul>
        </section>

        {/* Call to action */}
        <section className="border-t border-neutral-800 pt-6">
          <p className="text-neutral-300">
            If you&apos;re in healthcare, pharma, or biotech and you&apos;re missing a
            tool you wish existed, feel free to reach out through the{" "}
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
