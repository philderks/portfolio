"use client";

import { socialProfileLinks } from "@/data/social-links";
import { SplitFlapText } from "@/components/SplitFlapText";
import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";
import { content, type Lang } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight, GitBranch, Link2, Mail } from "lucide-react";

const links = [
  ...socialProfileLinks.map((link) => ({ ...link, external: true as const })),
];

function SocialIcon({ icon }: { icon: "github" | "linkedin" }) {
  if (icon === "github") {
    return <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />;
  }

  return <Link2 className="h-3.5 w-3.5" aria-hidden="true" />;
}

export interface ContactSectionProps {
  lang: Lang;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const currentYear = new Date().getFullYear();
  const t = content[lang].contact;

  return (
    <footer
      id="contact"
      aria-label={t.sectionAria}
      className="relative border-t border-border overflow-hidden scroll-mt-20 px-6"
    >
      <div className="relative mx-auto max-w-6xl py-16">
        <div className="flex items-baseline gap-3 border-b border-border pb-4 mb-8">
          <span className="font-mono text-[15px] text-cyan">04</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[15px] uppercase tracking-[0.18em] text-muted">
            <Mail className="h-3 w-3" aria-hidden="true" />
            <SplitFlapText target={t.sectionLabel} lang={lang} />
          </span>
        </div>

        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              <SplitFlapText target={t.heading} lang={lang} />
            </h2>
            <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-dim">
              <SplitFlapText target={t.body} lang={lang} />
            </p>
          </div>

          <nav className="flex flex-col items-start gap-3 md:items-end">
            <ObfuscatedEmailLink className="inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.14em] text-dim hover:text-cyan transition-colors duration-150">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <SplitFlapText target={t.emailLabel} lang={lang} />
            </ObfuscatedEmailLink>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.14em] text-dim hover:text-cyan transition-colors duration-150"
              >
                <SocialIcon icon={link.icon} />
                {link.label}
                {link.external && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan" aria-hidden="true" />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              &copy; {currentYear}{" "}
              <SplitFlapText target={t.footerCopyright} lang={lang} />
            </span>
            <div className="flex items-center gap-3">
              <Link href="/impressum" className="font-mono text-[9px] uppercase tracking-widest text-muted hover:text-fg">
                {t.footerImpressum}
              </Link>
              <Link href="/datenschutz" className="font-mono text-[9px] uppercase tracking-widest text-muted hover:text-fg">
                {t.footerPrivacy}
              </Link>
            </div>
          </div>
          <span className="font-mono text-[9px] text-muted">
            {content.en.contact.footerMeta}
          </span>
        </div>
      </div>

      <div className="rainbow-line" />
    </footer>
  );
}
