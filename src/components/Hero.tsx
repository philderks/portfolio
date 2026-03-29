import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "12+", label: "Projects" },
  { value: "3 yr", label: "Experience" },
  { value: "Zurich, CH", label: "Based" },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl border-x border-grid">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-grid px-6 py-4">
        <a href="#" className="font-display text-sm font-bold tracking-tight text-accent">
          Philipp Derks
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      {/* Three-column grid */}
      <div className="grid min-h-[60vh] md:grid-cols-3">
        {/* Left column */}
        <div className="flex flex-col justify-between border-b border-grid p-6 md:border-b-0 md:border-r">
          <span className="text-xs text-muted">00 / HERO</span>
          <div className="mt-16 md:mt-0">
            <p className="text-xs uppercase tracking-widest text-muted">
              Software Developer
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
              Available
            </p>
          </div>
        </div>

        {/* Center column */}
        <div className="flex items-center border-b border-grid p-6 md:border-b-0 md:border-r">
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Philipp
            <br />
            <span className="text-accent">Derks</span>
          </h1>
        </div>

        {/* Right column — intentional whitespace */}
        <div className="hidden md:block" />
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 border-t border-grid md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 py-5 ${i > 0 ? "border-l border-grid" : ""}`}
          >
            <p className="font-display text-[15px] font-bold leading-tight">
              {stat.value}
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-wider text-muted">
              {stat.label}
            </p>
          </div>
        ))}

        {/* Socials cell */}
        <div className="border-l border-grid px-6 py-5">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/philderks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[15px] font-bold leading-tight transition-colors hover:text-accent"
            >
              &#8599;
            </a>
            <a
              href="https://www.linkedin.com/in/philderks/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[15px] font-bold leading-tight transition-colors hover:text-accent"
            >
              &#8599;
            </a>
          </div>
          <div className="mt-1 flex items-center gap-4">
            <a
              href="https://github.com/philderks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-text"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/philderks/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-text"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
