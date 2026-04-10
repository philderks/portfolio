"use client";

import experienceData from "@/data/experience.json";
import { socialProfileLinks } from "@/data/social-links";
import { SplitFlapText } from "@/components/SplitFlapText";
import { formatCareerTenure, type ExperienceEntry } from "@/lib/experience";
import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";
import type { Lang } from "@/lib/i18n";
import { content } from "@/lib/i18n";
import {
  ArrowUpRight,
  Circle,
  FolderKanban,
  GitBranch,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";

const stackItems = [
  { label: "Next.js", color: "var(--color-cyan)" },
  { label: "TypeScript", color: "var(--color-green)" },
  { label: "Tailwind", color: "var(--color-yellow)" },
  { label: "Vercel", color: "var(--color-red)" },
];

function SocialIcon({ icon }: { icon: "github" | "linkedin" }) {
  if (icon === "github") {
    return <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />;
  }

  return <Link2 className="h-3.5 w-3.5" aria-hidden="true" />;
}

export interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const experienceLabel = formatCareerTenure(
    experienceData as ExperienceEntry[],
  );
  const t = content[lang].hero;

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid min-h-[70vh] md:grid-cols-[1fr_200px] md:min-h-[72vh]">
        <div className="flex flex-col justify-center border-b border-border px-8 py-16 md:border-b-0 md:border-r md:px-12 md:py-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-4 bg-muted" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              <SplitFlapText target={t.label} lang={lang} />
            </span>
          </div>

          <h1
            className="uppercase"
            style={{
              fontFamily: '"Big Shoulders Display", sans-serif',
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
            }}
          >
            <span className="block text-[96px] text-[#e8e0d5]">
              <SplitFlapText target={t.nameLine1} lang={lang} />
            </span>
            <span className="mt-2 block text-[48px] text-[#666666]">
              <SplitFlapText target={t.nameLine2} lang={lang} />
            </span>
          </h1>

          <div
            className="mt-4 flex gap-1"
            aria-hidden="true"
          >
            <span className="h-[3px] w-12 shrink-0 bg-[#84f1e8]" />
            <span className="h-[3px] w-12 shrink-0 bg-[#2bf085]" />
            <span className="h-[3px] w-12 shrink-0 bg-[#f7ce0f]" />
            <span className="h-[3px] w-12 shrink-0 bg-[#f8080b]" />
          </div>

          <p className="mt-4 max-w-md font-sans text-[0.95rem] font-medium leading-relaxed text-fg">
            <SplitFlapText target={t.role} lang={lang} />
          </p>

          <p className="mt-3 max-w-md font-sans text-[0.95rem] leading-relaxed text-dim">
            <SplitFlapText target={t.tagline.before} lang={lang} />
            <a href="https://www.ethz.ch" className="text-cyan">
              <SplitFlapText target={t.tagline.linkText} lang={lang} />
            </a>
            <SplitFlapText target={t.tagline.after} lang={lang} />
          </p>

          <div className="mt-8 flex items-center gap-3">
            <ObfuscatedEmailLink className="inline-flex items-center gap-1.5 bg-cyan px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0a0a0a]">
              <Mail className="h-3 w-3" aria-hidden="true" />
              <SplitFlapText target={t.ctaPrimary} lang={lang} />
            </ObfuscatedEmailLink>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 border border-border px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-fg transition-colors hover:border-muted"
            >
              <FolderKanban className="h-3 w-3" aria-hidden="true" />
              <SplitFlapText target={t.ctaSecondary} lang={lang} />
            </a>
          </div>

          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            aria-label={t.socialNavAria}
          >
            {socialProfileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-cyan"
              >
                <SocialIcon icon={link.icon} />
                {link.label}
                <ArrowUpRight className="h-3 w-3 text-cyan" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden flex-col border-b border-border md:flex">
          <div className="border-b border-border p-4">
            <span className="mb-3 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              <SplitFlapText target={t.sidebarStack} lang={lang} />
            </span>
            <div className="space-y-2">
              {stackItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <Circle
                    className="h-2.5 w-2.5"
                    style={{ color: item.color, fill: item.color }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] text-fg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-border p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              <SplitFlapText target={t.sidebarExperience} lang={lang} />
            </span>
            <span className="font-mono text-[13px] font-bold text-fg">
              {experienceLabel}
            </span>
          </div>

          <div className="p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              <SplitFlapText target={t.sidebarFocus} lang={lang} />
            </span>
            <span className="font-mono text-[13px] font-bold leading-snug text-fg">
              <SplitFlapText target={t.focusLine} lang={lang} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
