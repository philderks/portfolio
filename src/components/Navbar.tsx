"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, FolderKanban, Mail, UserRound } from "lucide-react";
import type { Content, Lang } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SplitFlapText } from "./SplitFlapText";

const navDefs: readonly {
  labelKey: keyof Content["nav"];
  href: string;
  icon: LucideIcon;
}[] = [
  { labelKey: "about", href: "#about", icon: UserRound },
  { labelKey: "experience", href: "#experience", icon: BriefcaseBusiness },
  { labelKey: "projects", href: "#projects", icon: FolderKanban },
  { labelKey: "contact", href: "#contact", icon: Mail },
];

export interface NavbarProps {
  lang: Lang;
  onLangChange: (next: Lang) => void;
  nav: Content["nav"];
}

export function Navbar({ lang, onLangChange, nav }: NavbarProps) {
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
          {navDefs.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-muted transition-colors hover:text-fg sm:text-[10px] sm:tracking-widest"
            >
              <link.icon className="h-3 w-3" aria-hidden="true" />
              <SplitFlapText target={nav[link.labelKey]} lang={lang} />
            </a>
          ))}
          <LangToggle lang={lang} onToggle={onLangChange} />
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
