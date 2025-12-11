import type { Metadata } from "next";

import "./globals.css";

// © 2025 Arzu Kirici — All Rights Reserved

import Navbar from "@/components/Navbar";

import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arzukirici.com"),
  title: "Arzu Kirici — Computational Biologist & Bioinformatics Developer",
  description:
    "Portfolio of Arzu Kirici: computational biology, bioinformatics software development, clinical and multi-omics data analysis, spatial omics, molecular diagnostics, AI-bio integration, research operations, and genomics project management.",
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
    title: "Arzu Kirici — Computational Biologist & Bioinformatics Developer",
    description:
      "Computational biology, multi-omics analysis, spatial omics, bioinformatics pipelines, AI-bio integration, and software development projects by Arzu Kirici.",
    url: "https://arzukirici.com",
    siteName: "Arzu Kirici",
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
    title: "Arzu Kirici — Computational Biologist & Bioinformatics Developer",
    description:
      "Computational biology, multi-omics analysis, spatial omics, bioinformatics pipelines, AI-bio integration, and software development projects by Arzu Kirici.",
    site: "https://arzukirici.com",
    images: ["https://arzukirici.com/og-image.png"],
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
  other: {
    copyright: "© 2025 Arzu Kirici. All Rights Reserved.",
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
        <meta property="og:image" content="https://arzukirici.com/og-image.png" />
        <meta property="og:image:secure_url" content="https://arzukirici.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Arzu Kirici Portfolio" />
        <meta name="twitter:image" content="https://arzukirici.com/og-image.png" />
        <meta name="twitter:image:src" content="https://arzukirici.com/og-image.png" />
        <link rel="icon" href="/og-image.png" />
        <link rel="apple-touch-icon" href="/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arzu Kirici",
              description:
                "Portfolio of Arzu Kirici: computational biology, bioinformatics software development, clinical and multi-omics data analysis, spatial omics, molecular diagnostics, AI-bio integration, research operations, and genomics project management.",
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
      <body className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-neutral-100 antialiased">
        {/* Üstte sabit navbar */}
        <Navbar />

        {/* Navbar'ın altında içerik; çakışmaması için biraz padding-top */}
        <main className="pt-16">
          {children}
        </main>

        {/* Her sayfada görünen scroll-to-top butonu */}
        <ScrollToTop />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
