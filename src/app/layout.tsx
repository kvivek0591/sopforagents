import type { Metadata } from "next";
import { Suspense } from "react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoPforAgents | Operating knowledge for AI agents",
  description: "Building a public library of source-backed knowledge bundles with KL4A, starting with prior authorization across US health insurers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Suspense fallback={null}>
          <PrismicPreview repositoryName={repositoryName} />
        </Suspense>
      </body>
    </html>
  );
}
