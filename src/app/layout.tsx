import type { Metadata } from "next";
import { Syne, Space_Mono, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Philipp Derks | Portfolio",
  description: "Software engineer portfolio — Philipp Derks",
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
      <body>
        <Providers>
          <div className="rainbow-line" />
          <div className="noise-overlay" aria-hidden="true" />
          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
