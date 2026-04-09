"use client";

import experienceData from "@/data/experience.json";
import { SplitFlapText } from "@/components/SplitFlapText";
import { startYear, type ExperienceEntry } from "@/lib/experience";
import type { Lang } from "@/lib/i18n";
import { content } from "@/lib/i18n";
import { BriefcaseBusiness, CalendarRange, Circle, MapPin, Radio } from "lucide-react";

export interface ExperienceSectionProps {
  lang: Lang;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const data = experienceData as ExperienceEntry[];
  const t = content[lang].experience;

  return (
    <section
      id="experience"
      aria-label={t.sectionAria}
      className="relative scroll-mt-20 border-t border-border px-6 py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-12">
          <span className="font-mono text-[11px] text-cyan">02</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            <BriefcaseBusiness className="h-3 w-3" aria-hidden="true" />
            <SplitFlapText target={t.sectionLabel} lang={lang} />
          </span>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[104px] w-px bg-border"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {data.map((entry, i) => (
              <li
                key={i}
                className="grid"
                style={{
                  gridTemplateColumns: "80px 1px 1fr",
                  columnGap: "24px",
                }}
              >
                <div className="pt-4 text-right">
                  <div className="font-mono text-[11px] text-cyan">
                    {startYear(entry.start)}
                  </div>
                  <div className="font-mono text-[10px] uppercase text-muted mt-1">
                    {entry.present ? (
                      <SplitFlapText target={t.now} lang={lang} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="relative" aria-hidden="true">
                  <Circle
                    className="absolute top-3.5 left-1/2 h-3 w-3 -translate-x-1/2"
                    style={{
                      color: entry.present
                        ? "var(--color-green)"
                        : "var(--color-dim)",
                      fill: entry.present
                        ? "var(--color-green)"
                        : "var(--color-dim)",
                    }}
                  />
                </div>

                <div className="border border-border bg-bg-2 p-[16px_18px] transition-colors hover:border-dim">
                  {entry.present && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <Radio className="h-3.5 w-3.5 text-green" aria-hidden="true" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-green">
                        <SplitFlapText target={t.present} lang={lang} />
                      </span>
                    </div>
                  )}

                  <h3 className="font-sans text-[14px] font-medium text-fg leading-snug">
                    {entry.role}
                  </h3>

                  <p className="font-mono text-[11px] text-cyan mt-1">
                    {entry.company}
                  </p>

                  <p className="mt-1 inline-flex flex-wrap items-center gap-2 font-mono text-[10px] text-muted">
                    <span className="inline-flex items-center gap-1">
                      <CalendarRange className="h-3 w-3" aria-hidden="true" />
                      {entry.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {entry.location}
                    </span>
                  </p>

                  <p className="font-sans text-[12px] leading-[1.7] mt-3 text-dim">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 border ${
                          entry.present
                            ? "text-cyan border-cyan/30"
                            : "text-muted border-border"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
