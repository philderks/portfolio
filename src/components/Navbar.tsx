"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 mx-auto max-w-6xl flex items-center justify-between border-b border-border px-6 py-4 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-bg"
      }`}
    >
      <a
        href="#"
        className="shrink-0 font-mono text-sm font-bold tracking-tight text-fg"
      >
        derks<span className="text-cyan">.dev</span>
      </a>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-6">
        <nav
          className="flex max-w-full flex-wrap items-center justify-end gap-x-2.5 gap-y-1 sm:gap-x-6 sm:gap-y-0"
          aria-label="Page sections"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[9px] uppercase tracking-wide text-muted transition-colors hover:text-fg sm:text-[10px] sm:tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="hidden items-center gap-3 md:flex">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
