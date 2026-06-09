"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  FolderKanban,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
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
  onAurebeshToggle?: () => void;
  nav: Content["nav"];
}

export function Navbar({ lang, onLangChange, onAurebeshToggle, nav }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => setMobileMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const sectionLinkClass =
    "inline-flex min-h-11 items-center gap-2 px-2 -mx-2 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-fg sm:text-[10px] sm:tracking-widest";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border transition-[background-color,backdrop-filter] duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md" : "bg-bg"
      } relative`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="shrink-0 font-mono text-sm font-bold tracking-tight text-fg"
        >
          Philipp Derks
        </a>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-6">
          <nav
            className="hidden max-w-full flex-wrap items-center justify-end gap-x-2.5 gap-y-1 sm:flex sm:gap-x-6 sm:gap-y-0"
            aria-label="Page sections"
          >
            {navDefs.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={sectionLinkClass}
              >
                <link.icon className="h-3 w-3" aria-hidden="true" />
                <SplitFlapText target={nav[link.labelKey]} lang={lang} />
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-muted transition-colors hover:bg-bg-2 hover:text-fg sm:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-section-nav"
            aria-label={mobileMenuOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" aria-hidden strokeWidth={1.75} />
            )}
          </button>
          <LangToggle lang={lang} onToggle={onLangChange} onAurebeshToggle={onAurebeshToggle} />
          <ThemeToggle />
        </div>
      </div>
      {mobileMenuOpen ? (
        <nav
          id="mobile-section-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-bg/95 backdrop-blur-md px-6 py-4 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.45)] sm:hidden"
          aria-label="Page sections"
        >
          <ul className="flex flex-col gap-1">
            {navDefs.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${sectionLinkClass} px-2 py-2.5 -mx-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <SplitFlapText target={nav[link.labelKey]} lang={lang} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
