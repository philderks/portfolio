import experienceData from "@/data/experience.json";
import { startYear, type ExperienceEntry } from "@/lib/experience";

export function ExperienceSection() {
  const data = experienceData as ExperienceEntry[];

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative scroll-mt-20 border-t border-border px-6 py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-12">
          <span className="font-mono text-[11px] text-cyan">02</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            Experience
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
                    {entry.present ? "Now" : ""}
                  </div>
                </div>

                <div className="relative" aria-hidden="true">
                  <div
                    className={`absolute top-4 left-1/2 -translate-x-1/2 h-2 w-2 ${
                      entry.present ? "bg-green" : "bg-dim"
                    }`}
                    style={{
                      boxShadow: entry.present
                        ? "0 0 0 2px var(--color-bg), 0 0 0 3px var(--color-green)"
                        : "0 0 0 2px var(--color-bg), 0 0 0 3px var(--color-dim)",
                    }}
                  />
                </div>

                <div className="border border-border bg-bg-2 p-[16px_18px] transition-colors hover:border-dim">
                  {entry.present && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping bg-green opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 bg-green" />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-green">
                        Present
                      </span>
                    </div>
                  )}

                  <h3 className="font-sans text-[14px] font-medium text-fg leading-snug">
                    {entry.role}
                  </h3>

                  <p className="font-mono text-[11px] text-cyan mt-1">
                    {entry.company}
                  </p>

                  <p className="font-mono text-[10px] text-muted mt-1">
                    {entry.period} &middot; {entry.location}
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
