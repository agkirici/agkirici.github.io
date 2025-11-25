import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Arzu Kirici | Portfolio",
  description: "Arzu Kirici is a bioinformatics software engineer building web applications for healthcare and biotech. Specializing in spatial biology, single-cell analysis, LLMs, and data visualization.",
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
    description: "Building web applications for healthcare and biotech. Specializing in spatial biology, single-cell analysis, and LLMs.",
    url: "https://agkirici.github.io",
    siteName: "Arzu Kirici Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arzu Kirici | Portfolio",
    description: "Building web applications for healthcare and biotech.",
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
    canonical: "https://agkirici.github.io",
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
              jobTitle: "Bioinformatics Software Engineer",
              description: "Building web applications for healthcare and biotech. Specializing in spatial biology, single-cell analysis, and LLMs.",
              url: "https://agkirici.github.io",
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
