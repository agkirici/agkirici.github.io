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
          PaperScope, PubMed, PMC, SRA ve diğer NCBI kaynaklarını tek bir
          arayüzde birleştiren bilimsel arama ve metadata çıkarma aracıdır.
          Araştırmacıların hızlı, tekrarlanabilir ve esnek şekilde literatür
          taraması yapmasını sağlar.
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

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc ml-5 space-y-1 text-slate-200">
          <li>Multi-database search (NCBI + Crossref)</li>
          <li>DOI, title, year, journal metadata extraction</li>
          <li>Corresponding author ve institution çıkarımı</li>
          <li>Gelişmiş NCBI query syntax desteği</li>
          <li>Tek tıkla Excel'e export</li>
          <li>Streamlit tabanlı kullanıcı dostu arayüz</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-slate-200">
          Benzer bir aracı kendi laboratuvarınız, ekibiniz veya şirketiniz için
          özelleştirmek isterseniz benimle iletişime geçebilirsiniz.
        </p>
        <p className="text-slate-200">
          Email: <strong>arzukirici@gmail.com</strong>
        </p>
      </section>
    </main>
  );
}

