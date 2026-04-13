"use client";

import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CircuitBackground } from "@/components/CircuitBackground";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useLanguage } from "@/hooks/useLanguage";
import { content } from "@/lib/i18n";
import type { PinnedRepo } from "@/lib/github";

export interface HomeClientProps {
  repos: PinnedRepo[];
}

export function HomeClient({ repos }: HomeClientProps) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <Navbar
        lang={lang}
        onLangChange={setLang}
        nav={content[lang].nav}
      />
      <div className="relative">
        <CircuitBackground />
        <Hero lang={lang} />
      </div>
      <main>
        <About lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection repos={repos} lang={lang} />
      </main>
      <ContactSection lang={lang} />
    </>
  );
}
