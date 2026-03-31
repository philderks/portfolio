import experienceData from "@/data/experience.json";

type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  present: boolean;
  location: string;
  description: string;
  tags: string[];
};

function parseYear(period: string): string {
  const match = period.match(/\b(\d{4})\b/);
  return match ? match[1] : "";
}

export function ExperienceSection() {
  const data = experienceData as Experience[];
  const count = String(data.length).padStart(2, "0");

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative border-t border-border px-6 py-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none [--grid-line:rgba(26,26,26,0.06)] dark:[--grid-line:rgba(232,224,213,0.07)]"
        style={{
          backgroundImage: [
            "linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            "linear-gradient(180deg, var(--grid-line) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "calc(100% / 12) 100%, 100% 96px",
        }}
        aria-hidden="true"
        suppressHydrationWarning
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-[rgba(26,26,26,0.10)] dark:border-[rgba(232,224,213,0.10)] pb-4 mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Experience
          </span>
          <span className="font-mono text-[11px] text-accent">{count}</span>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[104px] w-px bg-[rgba(26,26,26,0.06)] dark:bg-[rgba(232,224,213,0.07)]"
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
                suppressHydrationWarning
              >
                <div className="pt-4 text-right">
                  <div className="font-mono text-[11px] text-accent">
                    {parseYear(entry.period)}
                  </div>
                  <div className="font-mono text-[10px] uppercase text-muted mt-1">
                    {entry.present ? "Now" : ""}
                  </div>
                </div>

                <div className="relative" aria-hidden="true">
                  <div
                    className={`absolute top-4 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full ${
                      entry.present ? "bg-accent" : "bg-[#6b6560]"
                    }`}
                    style={{
                      boxShadow: entry.present
                        ? "0 0 0 2px var(--color-bg), 0 0 0 3px var(--color-accent)"
                        : "0 0 0 2px var(--color-bg), 0 0 0 3px #6b6560",
                    }}
                    suppressHydrationWarning
                  />
                </div>

                <div className="rounded-sm border border-[rgba(26,26,26,0.10)] bg-[rgba(255,255,255,0.62)] dark:bg-[rgba(16,16,16,0.55)] supports-backdrop-filter:backdrop-blur-[3px] dark:supports-backdrop-filter:backdrop-blur-xs dark:border-[rgba(232,224,213,0.10)] hover:border-[rgba(26,26,26,0.20)] dark:hover:border-[rgba(232,224,213,0.20)] transition-colors p-[16px_18px]">
                  {entry.present && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span
                          className="absolute inline-flex h-full w-full rounded-full animate-ping bg-accent opacity-75"
                        />
                        <span
                          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"
                        />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-accent">
                        Present
                      </span>
                    </div>
                  )}

                  <h3 className="font-sans text-[14px] font-medium text-text leading-snug">
                    {entry.role}
                  </h3>

                  <p className="font-mono text-[11px] text-accent mt-1">
                    {entry.company}
                  </p>

                  <p className="font-mono text-[10px] text-muted mt-1">
                    {entry.period} &middot; {entry.location}
                  </p>

                  <p className="font-sans text-[12px] leading-[1.7] mt-3 text-[rgba(26,26,26,0.66)] dark:text-[rgba(232,224,213,0.68)]">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 border ${
                          entry.present
                            ? "text-accent border-accent/30"
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
