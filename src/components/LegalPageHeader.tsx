"use client";

import Link from "next/link";
import { LangToggle } from "@/components/LangToggle";
import { SplitFlapText } from "@/components/SplitFlapText";
import { ThemeToggle } from "@/components/ThemeToggle";
import { content, type Lang } from "@/lib/i18n";

export interface LegalPageHeaderProps {
  lang: Lang;
  onLangChange: (next: Lang) => void;
  onAurebeshToggle?: () => void;
}

export function LegalPageHeader({ lang, onLangChange, onAurebeshToggle }: LegalPageHeaderProps) {
  const t = content[lang].legal;

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-6xl border-b border-border bg-bg/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="min-w-0 font-mono text-sm font-bold tracking-tight text-fg hover:text-cyan">
          <SplitFlapText target={t.backHome} lang={lang} />
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <LangToggle lang={lang} onToggle={onLangChange} onAurebeshToggle={onAurebeshToggle} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
