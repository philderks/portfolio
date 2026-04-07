import { socialProfileLinks } from "@/data/social-links";
import Link from "next/link";

const links = [
  ...socialProfileLinks.map((link) => ({ ...link, external: true as const })),
  {
    label: "hello@derks.dev",
    href: "mailto:hello@derks.dev",
    ariaLabel: "Send email",
    external: false as const,
  },
];

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="relative border-t border-border overflow-hidden scroll-mt-20"
    >
      {/* Contact area */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-8">
          <span className="font-mono text-[11px] text-cyan">04</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            Contact
          </span>
        </div>

        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              Let&apos;s build something good.
            </h2>
            <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-dim">
              Got an interesting project or just want to say hi? I&apos;m always
              open to discussing new opportunities and ideas.
            </p>
          </div>

          <nav className="flex flex-col items-start gap-3 md:items-end">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-[13px] uppercase tracking-[0.14em] text-dim hover:text-cyan transition-colors duration-150"
              >
                {link.label}
                {link.external && (
                  <span className="ml-1 text-[12px] text-cyan">&#8599;</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-border px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              &copy; {currentYear} derks.dev
            </span>
            <div className="flex items-center gap-3">
              <Link href="/impressum" className="font-mono text-[9px] uppercase tracking-widest text-muted hover:text-fg">
                Impressum
              </Link>
              <Link href="/datenschutz" className="font-mono text-[9px] uppercase tracking-widest text-muted hover:text-fg">
                Datenschutz
              </Link>
            </div>
          </div>
          <span className="font-mono text-[9px] text-muted">
            Next.js &middot; Tailwind &middot; Vercel
          </span>
        </div>
      </div>

      {/* Bottom rainbow line */}
      <div className="rainbow-line" />
    </footer>
  );
}
