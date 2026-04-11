"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";
import { SplitFlapText } from "@/components/SplitFlapText";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/lib/i18n";

export function DatenschutzView() {
  const { lang, setLang } = useLanguage();
  const t = content[lang].datenschutz;
  const impressumT = content[lang].impressum;

  useEffect(() => {
    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", t.metaDescription);
    }
  }, [lang, t.metaDescription, t.metaTitle]);

  return (
    <>
      <LegalPageHeader lang={lang} onLangChange={setLang} />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-fg">
          <SplitFlapText target={t.pageTitle} lang={lang} />
        </h1>

        <div className="mt-8 space-y-6 font-sans text-sm leading-relaxed text-dim">
          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.responsibleHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              Philipp Noél Derks
              <br />
              Zurich, Switzerland
              <br />
              <SplitFlapText target={impressumT.emailLabel} lang={lang} />{" "}
              <ObfuscatedEmailLink className="underline decoration-cyan underline-offset-4 hover:opacity-80" />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.hostingHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.hostingP1} lang={lang} />
            </p>
            <p className="mt-2">
              <SplitFlapText target={t.hostingP2} lang={lang} />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.cookiesHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.cookiesP1} lang={lang} />
            </p>
            <p className="mt-2">
              <SplitFlapText target={t.cookiesP2} lang={lang} />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.externalHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.externalP1} lang={lang} />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.rightsHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.rightsP1} lang={lang} />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.transferHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.transferP1} lang={lang} />
            </p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg">
              <SplitFlapText target={t.versionHeading} lang={lang} />
            </h2>
            <p className="mt-2">
              <SplitFlapText target={t.versionDate} lang={lang} />
            </p>
          </section>
        </div>

        <div className="mt-10">
          <Link href="/impressum" className="font-mono text-xs uppercase tracking-widest text-cyan hover:opacity-80">
            <SplitFlapText target={t.imprintLink} lang={lang} />
          </Link>
        </div>
      </main>
    </>
  );
}
