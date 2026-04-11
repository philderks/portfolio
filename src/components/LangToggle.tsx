"use client";

import type { Lang } from "@/lib/i18n";

export interface LangToggleProps {
  lang: Lang;
  onToggle: (next: Lang) => void;
}

export function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <div
      className="flex shrink-0 border border-border overflow-hidden"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => onToggle("en")}
        className={`px-2 py-1 font-mono text-[12px] tracking-[0.08em] transition-colors ${
          lang === "en"
            ? "bg-red text-fg"
            : "bg-transparent text-muted hover:bg-bg-2"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onToggle("de")}
        className={`border-l border-border px-2 py-1 font-mono text-[12px] tracking-[0.08em] transition-colors ${
          lang === "de"
            ? "bg-red text-fg"
            : "bg-transparent text-muted hover:bg-bg-2"
        }`}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
    </div>
  );
}
