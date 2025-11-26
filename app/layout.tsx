import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://arzukirici.com"),
  title: "Arzu Kirici | Portfolio",
  description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
  keywords: [
    "Arzu Kirici",
    "bioinformatics",
    "software engineer",
    "spatial biology",
    "single-cell analysis",
    "healthcare software",
    "biotech",
    "Python",
    "TypeScript",
    "Next.js",
    "Scanpy",
    "Neo4j",
    "LLMs",
    "spatial transcriptomics",
    "data visualization",
    "Toronto",
  ],
  authors: [{ name: "Arzu Kirici" }],
  creator: "Arzu Kirici",
  openGraph: {
    title: "Arzu Kirici | Portfolio",
    description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
    url: "https://arzukirici.com",
    siteName: "Arzu Kirici Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arzu Kirici | Portfolio",
    description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
    site: "https://arzukirici.com",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arzukirici.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arzu Kirici",
              description: "Portfolio of Arzu Kirici — bioinformatics tools, scientific software, and multi-omics data workflows.",
              url: "https://arzukirici.com",
              sameAs: [
                "https://www.linkedin.com/in/arzu-kirici",
                "https://github.com/agkirici",
              ],
              knowsAbout: [
                "Bioinformatics",
                "Software Engineering",
                "Spatial Biology",
                "Single-Cell Analysis",
                "Python",
                "TypeScript",
                "Next.js",
                "Machine Learning",
                "Data Visualization",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Astraea Bio",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressCountry: "CA",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-neutral-100 antialiased">
        {/* Üstte sabit navbar */}
        <Navbar />

        {/* Navbar'ın altında içerik; çakışmaması için biraz padding-top */}
        <main className="pt-16">
          {children}
        </main>

        {/* Her sayfada görünen scroll-to-top butonu */}
        <ScrollToTop />
      </body>
    </html>
  );
}
