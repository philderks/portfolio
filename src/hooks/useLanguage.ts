"use client";

import { useCallback, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Lang } from "@/lib/i18n";

const STORAGE_KEY = "portfolio-lang";

export function useLanguage(): {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
} {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "de" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((action: SetStateAction<Lang>) => {
    setLangState((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { lang, setLang };
}
