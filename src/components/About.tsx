import { UserRound } from "lucide-react";

const primarySkills = [
  "Vue.js",
  "React",
  "Next.js",
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

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-12">
          <span className="font-mono text-[11px] text-cyan">01</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            <UserRound className="h-3 w-3" aria-hidden="true" />
            About
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              Building software that
              <br />
              actually works.
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-dim">
              I&apos;m a software engineer with a focus on full-stack development
              and distributed systems. I care about performance, clean
              architecture, and shipping products that make a difference. When
              I&apos;m not coding, you&apos;ll find me exercising at the gym
              or configuring my homelab.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted">
              Primary Stack
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
              Tools &amp; Infrastructure
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
