import { DM_Sans, Geist_Mono, Inter } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { links } from "@/lib/links";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const description =
  "An open standard for a professional profile you own. Platforms and AI assistants read the public part; private sections are released only when you approve a specific request.";

export const metadata: Metadata = {
  metadataBase: new URL(links.site),
  title: "Open Hiring Harness",
  description,
  keywords: [
    "hiring",
    "open standard",
    "professional identity",
    "consent",
    "privacy",
    "OAuth",
    "UMA",
    "provenance",
    "portable reputation",
    "MCP",
  ],
  authors: [{ name: "Guidebeam", url: links.guidebeam }],
  publisher: "Guidebeam",
  openGraph: {
    title: "Open Hiring Harness",
    description: "Publish what you do once. Share the rest only when you approve.",
    url: links.site,
    siteName: "Open Hiring Harness",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Open Hiring Harness",
    description: "Publish what you do once. Share the rest only when you approve.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  name: "Open Hiring Harness",
  headline: "Open Hiring Harness: an open standard for a professional profile you own",
  description:
    "An open specification for publishing a professional profile that platforms and AI assistants can read, with private sections released only on the owner's approval.",
  url: `${links.site}/`,
  version: "0.2.0",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  codeRepository: links.repo,
  programmingLanguage: "JSON Schema",
  author: { "@type": "Organization", name: "Guidebeam", url: links.guidebeam },
  publisher: { "@type": "Organization", name: "Guidebeam", url: links.guidebeam },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-background sr-only z-[60] rounded-md px-3 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
