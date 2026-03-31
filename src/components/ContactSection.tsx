const links = [
  {
    label: "GitHub",
    href: "https://github.com/philderks",
    ariaLabel: "GitHub profile",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/philderks",
    ariaLabel: "LinkedIn profile",
    external: true,
  },
  {
    label: "hello@derks.dev",
    href: "mailto:hello@derks.dev",
    ariaLabel: "Send email",
    external: false,
  },
];

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Contact"
      className="relative border-t border-[rgba(26,26,26,0.10)] dark:border-[rgba(232,224,213,0.10)] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none [--grid-line:rgba(26,26,26,0.06)] dark:[--grid-line:rgba(232,224,213,0.07)]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl flex justify-between items-end py-5 px-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[rgba(26,26,26,0.20)] dark:text-[rgba(232,224,213,0.20)]">
          Philipp Derks &middot; {currentYear}
        </span>

        <nav className="flex flex-col items-end gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-mono text-[15px] uppercase tracking-[0.14em] text-[rgba(26,26,26,0.52)] dark:text-[rgba(232,224,213,0.58)] hover:text-text transition-colors duration-150"
            >
              {link.label}
              <span className="ml-1 text-[12px] text-accent">&#8599;</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
