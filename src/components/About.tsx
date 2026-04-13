"use client";

import { SplitFlapText } from "@/components/SplitFlapText";
import type { Lang } from "@/lib/i18n";
import { content } from "@/lib/i18n";
import { UserRound } from "lucide-react";

const primarySkills = [
  "Vue.js",
  "React",
  "Node.js",
  "Python",
  "MySQL",
];

const secondarySkills = [
  "Docker",
  "AWS",
  "REST",
  "Cloudflare",
  "Git",
];

export interface AboutProps {
  lang: Lang;
}

export function About({ lang }: AboutProps) {
  const t = content[lang].about;

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-12">
          <span className="font-mono text-[15px] text-cyan">01</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[15px] uppercase tracking-[0.18em] text-muted">
            <UserRound className="h-3 w-3" aria-hidden="true" />
            <SplitFlapText target={t.sectionLabel} lang={lang} />
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              <SplitFlapText target={t.headingLine1} lang={lang} />
              <br />
              <SplitFlapText target={t.headingLine2} lang={lang} />
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-dim">
              <SplitFlapText target={t.body} lang={lang} />
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
              <SplitFlapText target={t.primaryStack} lang={lang} />
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {primarySkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-[10px] text-cyan"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
              <SplitFlapText target={t.toolsInfra} lang={lang} />
            </p>
            <div className="flex flex-wrap gap-2">
              {secondarySkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border px-3 py-1 font-mono text-[10px] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
