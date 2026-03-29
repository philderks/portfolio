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
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-sm text-muted">01 &mdash; About</p>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Building software that
              <br />
              actually works.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              I&apos;m a software engineer with a focus on full-stack development
              and distributed systems. I care about performance, clean
              architecture, and shipping products that make a difference. When
              I&apos;m not coding, you&apos;ll find me exercising at the gym
              or configuring my homelab.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm text-muted">Primary Stack</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {primarySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mb-4 text-sm text-muted">Tools &amp; Infrastructure</p>
            <div className="flex flex-wrap gap-2">
              {secondarySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border px-3 py-1 text-xs text-muted"
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
