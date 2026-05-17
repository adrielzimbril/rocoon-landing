import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oleap-landing.adrielzimbril.com"),
  title: "Oleap | Turn Customer Support into Product Intelligence",
  description:
    "Day 15/30 of the AI-Generated Landing Page Challenge. Oleap is a conceptual AI customer support platform that closes the support feedback loop — resolving tickets instantly with AI agents and in-app video calls, then turning that feedback directly into shipping features.",
  keywords: [
    "Oleap",
    "AI customer support",
    "product intelligence",
    "support feedback loop",
    "AI agents",
    "in-app video calls",
    "customer support platform",
    "ticket resolution",
    "feature feedback",
    "Next.js",
    "React",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Oleap | Turn Customer Support into Product Intelligence",
    description:
      "A conceptual AI customer support platform landing page for Day 15/30 of the AI-Generated Landing Page Challenge.",
    url: "https://oleap-landing.adrielzimbril.com",
    siteName: "Oleap",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oleap — Turn Customer Support into Product Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleap | Turn Customer Support into Product Intelligence",
    description:
      "A conceptual AI customer support platform landing page for Day 15/30 of the AI-Generated Landing Page Challenge.",
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
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
          {children}
      </body>
    </html>
  );
}
