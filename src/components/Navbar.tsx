"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
      <a href="#" className="font-mono text-sm font-bold tracking-tight text-fg">
        derks<span className="text-cyan">.dev</span>
      </a>
      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
