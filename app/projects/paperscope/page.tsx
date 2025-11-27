import Image from 'next/image';

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
          PaperScope is a scientific search and metadata extraction tool that 
          combines PubMed, PMC, SRA, and other NCBI databases into a unified interface. 
          It enables fast, repeatable, and flexible literature discovery for 
          researchers, analysts, and biotech teams.
        </p>
      </header>

      {/* Video */}
      <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black/40">
        <video
          src="/pumbed-scraper.mp4"
          controls
          muted
          className="w-full h-auto"
        />
      </div>

      {/* Cover Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black/40">
        <Image
          src="/paperscope-cover.png"
          alt="PaperScope Application Interface"
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc ml-5 space-y-1 text-slate-200">
          <li>Multi-database search (PubMed, PMC, SRA, and NCBI endpoints)</li>
          <li>Extraction of DOI, title, year, journal, and metadata fields</li>
          <li>Corresponding author and institution parsing</li>
          <li>Full support for advanced NCBI query syntax</li>
          <li>One-click Excel export</li>
          <li>User-friendly Streamlit interface</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-slate-200">
          If you'd like a customized version of this tool for your lab, 
          research group, or organization, feel free to reach out.
        </p>
        <p className="text-slate-200">
          Email: <strong>arzukirici@gmail.com</strong>
        </p>
      </section>
    </main>
  );
}
