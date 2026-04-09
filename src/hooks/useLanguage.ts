"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import type { Lang } from "@/lib/i18n";

export function useLanguage(): {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
} {
  const [lang, setLang] = useState<Lang>("en");
  return { lang, setLang };
}
