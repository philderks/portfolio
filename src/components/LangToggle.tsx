"use client";

import { useCallback, useRef } from "react";
import type { Lang } from "@/lib/i18n";

export interface LangToggleProps {
  lang: Lang;
  onToggle: (next: Lang) => void;
  onAurebeshToggle?: () => void;
}

const TRIPLE_CLICK_WINDOW_MS = 1500;

export function LangToggle({ lang, onToggle, onAurebeshToggle }: LangToggleProps) {
  const clickCountRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleRedundantClick = useCallback(
    (clicked: Lang) => {
      if (clicked !== lang) {
        clickCountRef.current = 0;
        if (timerRef.current) clearTimeout(timerRef.current);
        onToggle(clicked);
        return;
      }

      clickCountRef.current += 1;

      if (timerRef.current) clearTimeout(timerRef.current);

      if (clickCountRef.current >= 3) {
        clickCountRef.current = 0;
        onAurebeshToggle?.();
        return;
      }

      timerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, TRIPLE_CLICK_WINDOW_MS);
    },
    [lang, onToggle, onAurebeshToggle],
  );

  return (
    <div
      className="flex shrink-0 border border-border overflow-hidden"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => handleRedundantClick("en")}
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
        onClick={() => handleRedundantClick("de")}
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
