import experienceData from "@/data/experience.json";
import { socialProfileLinks } from "@/data/social-links";
import { formatCareerTenure, type ExperienceEntry } from "@/lib/experience";
import { ObfuscatedEmailLink } from "@/components/ObfuscatedEmailLink";
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

export function Hero() {
  const experienceLabel = formatCareerTenure(
    experienceData as ExperienceEntry[],
  );

  return (
    <section className="mx-auto max-w-6xl">
      {/* Two-column hero */}
      <div className="grid min-h-[70vh] md:grid-cols-[1fr_200px] md:min-h-[72vh]">
        {/* Left column */}
        <div className="flex flex-col justify-center border-b border-border px-8 py-16 md:border-b-0 md:border-r md:px-12 md:py-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-4 bg-muted" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Zurich, Switzerland
            </span>
          </div>

          <h1
            className="font-display leading-none tracking-normal"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)", fontWeight: 800 }}
          >
            <span className="text-fg">PHILIPP</span>
            <br />
            <span className="text-stroke-cyan">DERKS</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-[0.95rem] leading-relaxed text-dim">
            Software engineer with a focus on full-stack development and
            distributed systems. Working at <a href="https://www.ethz.ch" className="text-cyan">ETH Zürich</a>.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <ObfuscatedEmailLink className="inline-flex items-center gap-1.5 bg-cyan px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0a0a0a]">
              <Mail className="h-3 w-3" aria-hidden="true" />
              Get in touch
            </ObfuscatedEmailLink>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 border border-border px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-fg transition-colors hover:border-muted"
            >
              <FolderKanban className="h-3 w-3" aria-hidden="true" />
              View work
            </a>
          </div>

          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Social profiles"
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

        {/* Right sidebar */}
        <div className="hidden flex-col border-b border-border md:flex">
          {/* Stack block */}
          <div className="border-b border-border p-4">
            <span className="mb-3 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Stack
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

          {/* Experience block */}
          <div className="border-b border-border p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Experience
            </span>
            <span className="font-mono text-[13px] font-bold text-fg">
              {experienceLabel}
            </span>
          </div>

          {/* Focus block */}
          <div className="p-4">
            <span className="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Focus
            </span>
            <span className="font-mono text-[13px] font-bold leading-snug text-fg">
              Full-stack · Distributed systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
