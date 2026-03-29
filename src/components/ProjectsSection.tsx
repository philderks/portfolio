import type { PinnedRepo } from "@/lib/github";

function formatRepoName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectsSection({ repos }: { repos: PinnedRepo[] }) {
  const count = String(repos.length).padStart(2, "0");

  return (
    <section
      id="projects"
      aria-label="Projects"
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
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-[rgba(26,26,26,0.10)] dark:border-[rgba(232,224,213,0.10)] pb-4 mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Projects
          </span>
          <span className="font-mono text-[11px] text-accent">{count}</span>
        </div>

        {repos.length === 0 ? (
          <div className="border border-[rgba(26,26,26,0.10)] dark:border-[rgba(232,224,213,0.10)] p-5">
            <p className="font-mono text-[12px] text-muted">
              No pinned repositories found.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {repos.map((repo) => (
              <li
                key={repo.name}
                className="relative flex flex-col border border-[rgba(26,26,26,0.10)] dark:border-[rgba(232,224,213,0.10)] hover:border-[rgba(26,26,26,0.20)] dark:hover:border-[rgba(232,224,213,0.20)] transition-colors p-5"
              >
                  <h3 className="font-sans text-[13px] font-medium text-text">
                    {formatRepoName(repo.name)}
                  </h3>

                  {repo.description && (
                    <p className="font-sans text-[12px] leading-[1.6] mt-[6px] text-[rgba(26,26,26,0.55)] dark:text-[rgba(232,224,213,0.55)] line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  <div className="grow" />

                  <div className="flex items-center justify-between mt-4 font-mono text-[10px] text-muted">
                    <div className="flex items-center gap-1.5">
                      {repo.primaryLanguage && (
                        <>
                          <span
                            className="inline-block h-2 w-2"
                            style={{
                              backgroundColor: repo.primaryLanguage.color,
                              borderRadius: "50%",
                            }}
                            aria-hidden="true"
                          />
                          <span>{repo.primaryLanguage.name}</span>
                        </>
                      )}
                    </div>
                    {repo.stargazerCount > 0 && (
                      <span>&#9733; {repo.stargazerCount}</span>
                    )}
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 border text-muted border-border"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${formatRepoName(repo.name)} on GitHub`}
                    className="absolute top-4 right-4 font-display text-[15px] font-bold leading-tight transition-colors hover:text-accent text-muted"
                  >
                    &#8599;
                  </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
