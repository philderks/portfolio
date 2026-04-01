import type { PinnedRepo } from "@/lib/github";

const accentColors = ["text-cyan", "text-green", "text-yellow", "text-red"];

function formatRepoName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProjectsSection({ repos }: { repos: PinnedRepo[] }) {
  const showComingSoon = repos.length <= 5;

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative border-t border-border px-6 py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-12">
          <span className="font-mono text-[11px] text-cyan">03</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            Projects
          </span>
        </div>

        {repos.length === 0 ? (
          <div className="border border-border p-5">
            <p className="font-mono text-sm text-muted">
              No pinned repositories found.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
            {repos.map((repo, i) => (
              <li
                key={repo.name}
                className="group relative flex min-h-[250px] flex-col border border-border bg-bg-2 p-6 transition-colors hover:border-dim sm:p-7"
              >
                <span
                  className={`font-mono text-xs font-bold ${accentColors[i % accentColors.length]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 font-display text-lg font-bold text-fg">
                  {formatRepoName(repo.name)}
                </h3>

                {repo.description && (
                  <p className="font-sans text-sm leading-relaxed mt-2 text-dim line-clamp-3">
                    {repo.description}
                  </p>
                )}

                <div className="grow" />

                <div className="flex items-center justify-between mt-4 font-mono text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    {repo.primaryLanguage && (
                      <>
                        <span
                          className="inline-block h-2 w-2"
                          style={{ backgroundColor: repo.primaryLanguage.color }}
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
                        className="font-mono text-[9px] uppercase tracking-[0.08em] px-2 py-0.5 border border-border text-muted"
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
                  className="absolute right-5 top-5 font-mono text-base font-bold leading-tight text-muted transition-colors group-hover:text-cyan"
                >
                  &#8599;
                </a>
              </li>
            ))}

            {showComingSoon && (
              <li className="flex min-h-[250px] flex-col items-center justify-center border border-dashed border-border bg-bg-2 p-6">
                <span className="font-mono text-xs font-bold text-yellow">
                  {String(repos.length + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg font-bold text-fg">
                  Coming Soon
                </p>
                <p className="mt-1 font-sans text-sm text-dim">
                  More projects on the way
                </p>
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
