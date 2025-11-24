import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Picture - Left Side */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Arzu Kirici"
              width={200}
              height={200}
              className="rounded-full object-cover border-2 border-neutral-700"
              priority
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="flex-1 space-y-4">
            <p className="text-sm font-medium text-sky-500">Welcome</p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hi, I&apos;m <span className="text-sky-500">Arzu Kirici</span>
            </h1>

            <h2 className="text-xl font-semibold text-neutral-200">
              I&apos;m a scientist building web applications for healthcare industries and biotech companies.
            </h2>

            <p className="text-neutral-300 leading-relaxed">
              I started my career in genetic disease diagnostics and molecular biology
              wet-lab. Later, I moved into cancer research where I worked as a data
              analyst on multiple research projects. Today I combine biology, data
              analysis and software development to create tools that people in healthcare
              and biotech actually use.
            </p>
          </div>
        </section>

        {/* Where I'm heading */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Where I&apos;m heading?</h3>

          <p className="text-neutral-300 leading-relaxed">
            I&apos;m focusing on bioinformatics software development. I work with Python
            for data processing, TypeScript and React for full-stack applications, and
            modern frameworks that let me build clean and reliable interfaces. I use
            tools like Scanpy for single-cell and spatial workflows and I write both
            frontend and backend logic depending on what a project needs.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-neutral-300">
            <li>Web applications for healthcare and clinical data workflows</li>
            <li>Tools for single-cell and spatial data analysis</li>
            <li>Dashboards and internal platforms for small and mid-size biotech teams</li>
          </ul>
        </section>

        {/* What this website is for */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">What this website is for?</h3>

          <p className="text-neutral-300 leading-relaxed">
            This website collects the projects I&apos;m building at the intersection of
            biology, data analysis and software. My goal is to create simple, focused
            applications that make everyday research workflows easier.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-neutral-300">
            <li>Internal tools and dashboards for biotech and pharma teams</li>
            <li>Applications for spatial biology and multi-omics data exploration</li>
            <li>Small applications that simplify lab or analytics tasks</li>
            <li>Prototypes that test ideas in healthcare and research software</li>
          </ul>
        </section>

        {/* Who I help */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">Who I work with?</h3>

          <ul className="list-disc pl-5 space-y-1 text-neutral-300">
            <li>Companies developing single-cell or spatial technologies</li>
            <li>Biotech and pharma teams working with single-cell or spatial data</li>
            <li>Research groups and PIs running single-cell or spatial biology projects</li>
          </ul>
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

        {/* How I help */}
        <section className="space-y-3">
          <h3 className="text-lg font-semibold">How I can help?</h3>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">End-to-end development</h4>
            <p className="leading-relaxed">
              You explain the biological or clinical problem and I design and build the
              application from start to finish. This includes data handling, backend
              logic and the full interface.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">
              Tool development and handover
            </h4>
            <p className="leading-relaxed">
              I build the pipelines or dashboards you need and I provide clean, documented
              code that your team can maintain or extend.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Done for you</h4>
            <p className="leading-relaxed">
              I take responsibility for a clearly defined project and deliver a working
              product that is ready to use.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Done with you</h4>
            <p className="leading-relaxed">
              We work together on your systems. I help implement the core parts of your
              infrastructure and make sure it runs smoothly in your environment.
            </p>
          </div>

          <div className="space-y-2 text-neutral-300">
            <h4 className="font-semibold text-neutral-100">Advisory</h4>
            <p className="leading-relaxed">
              I review your workflows and help you make better decisions about tools,
              pipelines and architecture for projects in healthcare, spatial biology and
              biotech.
            </p>
          </div>
        </section>

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
