import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { brand } from "@/lib/landing-data";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.liveUrl),
  title: "Rocoon | AI Architecture for Modern Smart Homes",
  description: brand.description,
  keywords: [
    "Rocoon",
    "AI architecture agency",
    "AI architecture",
    "modern smart homes",
    "generative home design",
    "smart home planning",
    "residential architecture",
    "AI site analysis",
    "Next.js",
    "React",
    "Tailwind CSS",
    "motion/react",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Rocoon | AI Architecture for Modern Smart Homes",
    description:
      "A conceptual AI architecture agency landing page for Day 16/30 of the AI-Generated Landing Page Challenge.",
    url: brand.liveUrl,
    siteName: "Rocoon",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Rocoon - AI Architecture for Modern Smart Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocoon | AI Architecture for Modern Smart Homes",
    description:
      "A conceptual AI architecture agency landing page for Day 16/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${hankenGrotesk.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-rocoon-cream text-rocoon-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
