import type { Metadata } from "next";

import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Arzu Kirici",
  description: "Scientist building web applications for healthcare and biotech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-neutral-100 antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
