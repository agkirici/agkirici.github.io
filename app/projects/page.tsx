export default function PaperScopePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Project
        </p>
        <h1 className="text-3xl font-semibold">
          PaperScope — Multi-Source Scientific Search Tool
        </h1>
        <p className="text-slate-300">
          PaperScope combines PubMed, PMC, SRA, and other NCBI sources into one unified
          scientific search interface. It extracts metadata, DOI, journal info,
          corresponding authors, and exports everything to Excel.
        </p>
      </header>

      <div className="rounded-xl overflow-hidden border border-slate-700 bg-black/40">
        <video
          src="/pumbed-scraper.mp4"
          controls
          muted
          className="w-full h-auto"
        />
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc ml-6 space-y-1 text-slate-200">
          <li>PubMed + PMC + SRA multi-database search</li>
          <li>Corresponding author extraction</li>
          <li>Advanced NCBI query syntax</li>
          <li>Instant Excel export</li>
          <li>Streamlit-based UI</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          If you'd like a customized version of this tool for your lab or team,
          feel free to reach out.
        </p>
        <p>Email: <strong>arzukirici@gmail.com</strong></p>
      </section>
    </main>
  );
}
