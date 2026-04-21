"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { SplitFlapText } from "@/components/SplitFlapText";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/lib/i18n";

export function NotFoundView() {
  const { lang, setLang } = useLanguage();
  const router = useRouter();
  const t = content[lang].notFound;

  useEffect(() => {
    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t.metaDescription);
    }
  }, [lang, t.metaDescription, t.metaTitle]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key === "Shift" || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      e.preventDefault();
      router.push("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <>
      <LegalPageHeader lang={lang} onLangChange={setLang} />
      <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <p
          className="insert-coin-arcade-text text-[56px] leading-none text-red sm:text-[96px]"
          style={{
            textShadow:
              "2px 0 0 rgba(255,80,80,0.65), -2px 0 0 rgba(80,200,255,0.65)",
          }}
          aria-label={t.statusCode}
        >
          {t.statusCode}
        </p>

        <p className="insert-coin-arcade-text mt-8 text-[14px] leading-relaxed text-yellow sm:text-[18px]">
          {t.gameOver}
        </p>

        <h1 className="mt-10 font-mono text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
          <SplitFlapText target={t.heading} lang={lang} />
        </h1>

        <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-dim sm:text-base">
          <SplitFlapText target={t.body} lang={lang} />
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center border border-border bg-bg-2 px-5 py-3 font-mono text-xs uppercase tracking-widest text-fg hover:border-cyan hover:text-cyan"
        >
          <SplitFlapText target={t.homeCta} lang={lang} />
        </Link>

        <p className="insert-coin-arcade-text insert-coin-hint mt-10 text-[9px] leading-relaxed text-muted sm:text-[10px]">
          {t.continueHint}
        </p>
      </main>
    </>
  );
}
