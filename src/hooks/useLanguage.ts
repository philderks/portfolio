"use client";

import { useCallback, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { Lang } from "@/lib/i18n";

const STORAGE_KEY = "portfolio-lang";
const AUREBESH_KEY = "portfolio-aurebesh";

export function useLanguage(): {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  aurebesh: boolean;
  toggleAurebesh: () => void;
  disableAurebesh: () => void;
} {
  const [lang, setLangState] = useState<Lang>("en");
  const [aurebesh, setAurebeshState] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "de" || stored === "en") {
        setLangState(stored);
      }
      setAurebeshState(sessionStorage.getItem(AUREBESH_KEY) === "1");
    }, 0);
  }, []);

  useEffect(() => {
    if (aurebesh) {
      document.documentElement.setAttribute("data-aurebesh", "true");
    } else {
      document.documentElement.removeAttribute("data-aurebesh");
    }
  }, [aurebesh]);

  const setLang = useCallback((action: SetStateAction<Lang>) => {
    setLangState((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const toggleAurebesh = useCallback(() => {
    setAurebeshState((prev) => {
      const next = !prev;
      sessionStorage.setItem(AUREBESH_KEY, next ? "1" : "0");
      return next;
    });
  }, []);

  const disableAurebesh = useCallback(() => {
    sessionStorage.removeItem(AUREBESH_KEY);
    setAurebeshState(false);
  }, []);

  return { lang, setLang, aurebesh, toggleAurebesh, disableAurebesh };
}
