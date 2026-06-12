import type { Metadata } from "next";
import { Syne, Space_Mono, DM_Sans } from "next/font/google";
import { ClickSplash } from "@/components/ClickSplash";
import { InsertCoinGate } from "@/components/InsertCoinGate";
import { Providers } from "@/components/Providers";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://derks.dev";
const siteTitle = "Philipp Derks | Software Engineer";
const siteDescription =
  "Portfolio of Philipp Derks, a Zurich-based software engineer focused on full-stack development and distributed systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | derks.dev",
  },
  description: siteDescription,
  applicationName: "derks.dev",
  authors: [{ name: "Philipp Derks", url: siteUrl }],
  creator: "Philipp Derks",
  publisher: "Philipp Derks",
  keywords: [
    "Philipp Derks",
    "software engineer",
    "full-stack developer",
    "distributed systems",
    "ETH Zürich",
    "Zurich",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "derks.dev",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Philipp Derks — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${syne.variable} ${spaceMono.variable} ${dmSans.variable} scroll-smooth scroll-pt-20`}
      suppressHydrationWarning
    >
      <head>
        <meta name="darkreader-lock" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <script
          defer
          src="https://umami.fabricator.site/script.js"
          data-website-id="4b1b3744-ecb4-424c-b7bc-3431126ab966"
        />
      </head>
      <body>
        <Providers>
          <InsertCoinGate>
            <div className="rainbow-line" />
            <div className="noise-overlay" aria-hidden="true" />
            <ClickSplash />
            {children}
          </InsertCoinGate>
        </Providers>
      </body>
    </html>
  );
}
