const projects = [
  {
    number: "001",
    title: "Cloud Dashboard",
    description:
      "Real-time monitoring platform for distributed microservices with custom alerting and metrics visualization.",
    tags: ["React", "Go", "WebSocket", "PostgreSQL"],
  },
  {
    number: "002",
    title: "Auth Gateway",
    description:
      "High-throughput authentication service handling 50k+ requests per second with JWT rotation and rate limiting.",
    tags: ["Node.js", "Redis", "Docker", "TypeScript"],
  },
  {
    number: "003",
    title: "Data Pipeline",
    description:
      "ETL pipeline processing terabytes of event data daily with fault-tolerant message queues and schema validation.",
    tags: ["Go", "Kafka", "AWS", "PostgreSQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-sm text-muted">02 &mdash; Projects</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-border/30"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-muted">{project.number}</span>
                  <span className="text-muted transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>

                <h3 className="font-display text-lg font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
