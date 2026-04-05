const stackItems = [
  { label: "Next.js", color: "var(--color-cyan)" },
  { label: "TypeScript", color: "var(--color-green)" },
  { label: "Tailwind", color: "var(--color-yellow)" },
  { label: "Vercel", color: "var(--color-red)" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl">
      {/* Two-column hero */}
      <div className="grid md:grid-cols-[1fr_200px]">
        {/* Left column */}
        <div className="flex flex-col justify-center border-b border-border p-8 md:border-b-0 md:border-r md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-4 bg-muted" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Zurich, Switzerland
            </span>
          </div>

          <h1
            className="font-display leading-none tracking-normal"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)", fontWeight: 800 }}
          >
            <span className="text-fg">PHILIPP</span>
            <br />
            <span className="text-stroke-cyan">DERKS</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-[0.95rem] leading-relaxed text-dim">
            Software engineer with a focus on full-stack development and
            distributed systems. Working at <a href="https://www.ethz.ch" className="text-cyan">ETH Zürich</a>.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="mailto:hello@derks.dev"
              className="bg-cyan px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0a0a0a]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="border border-border px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-fg transition-colors hover:border-muted"
            >
              View work
            </a>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="hidden flex-col border-b border-border md:flex">
          {/* Stack block */}
          <div className="border-b border-border p-4">
            <span className="mb-3 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Stack
            </span>
            <div className="space-y-2">
              {stackItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-mono text-[10px] text-fg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience block */}
          <div className="border-b border-border p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Experience
            </span>
            <span className="font-mono text-[13px] font-bold text-fg">3+ years</span>
          </div>

          {/* Status block */}
          <div className="p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Status
            </span>
            <span className="font-mono text-[13px] font-bold text-green">Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
