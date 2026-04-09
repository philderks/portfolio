export type Lang = "en" | "de";

export interface HeroTaglineParts {
  before: string;
  linkText: string;
  after: string;
}

export interface Content {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    label: string;
    nameLine1: string;
    nameLine2: string;
    role: string;
    tagline: HeroTaglineParts;
    ctaPrimary: string;
    ctaSecondary: string;
    sidebarStack: string;
    sidebarExperience: string;
    sidebarFocus: string;
    focusLine: string;
    socialNavAria: string;
  };
  about: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    primaryStack: string;
    toolsInfra: string;
  };
  experience: {
    sectionAria: string;
    sectionLabel: string;
    present: string;
    now: string;
  };
  projects: {
    sectionAria: string;
    sectionLabel: string;
    empty: string;
    comingSoonTitle: string;
    comingSoonSubtitle: string;
    githubSuffix: string;
  };
  contact: {
    sectionAria: string;
    sectionLabel: string;
    heading: string;
    body: string;
    emailLabel: string;
    footerCopyright: string;
    footerMeta: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      label: "Zurich, Switzerland",
      nameLine1: "PHILIPP",
      nameLine2: "DERKS",
      role: "Software engineer",
      tagline: {
        before:
          "Focused on full-stack development and distributed systems. Working at ",
        linkText: "ETH Zürich",
        after: ".",
      },
      ctaPrimary: "Get in touch",
      ctaSecondary: "View work",
      sidebarStack: "Stack",
      sidebarExperience: "Experience",
      sidebarFocus: "Focus",
      focusLine: "Full-stack · Distributed systems",
      socialNavAria: "Social profiles",
    },
    about: {
      sectionLabel: "About",
      headingLine1: "Building software that",
      headingLine2: "actually works.",
      body: "I'm a software engineer with a focus on full-stack development and distributed systems. I care about performance, clean architecture, and shipping products that make a difference. When I'm not coding, you'll find me exercising at the gym or configuring my homelab.",
      primaryStack: "Primary Stack",
      toolsInfra: "Tools & Infrastructure",
    },
    experience: {
      sectionAria: "Experience",
      sectionLabel: "Experience",
      present: "Present",
      now: "Now",
    },
    projects: {
      sectionAria: "Projects",
      sectionLabel: "Projects",
      empty: "No pinned repositories found.",
      comingSoonTitle: "Coming Soon",
      comingSoonSubtitle: "More projects on the way",
      githubSuffix: "on GitHub",
    },
    contact: {
      sectionAria: "Contact",
      sectionLabel: "Contact",
      heading: "Let's build something good.",
      body: "Got an interesting project or just want to say hi? I'm always open to discussing new opportunities and ideas.",
      emailLabel: "Email",
      footerCopyright: "derks.dev",
      footerMeta: "Next.js · Tailwind · Vercel",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      label: "Zürich, Schweiz",
      nameLine1: "PHILIPP",
      nameLine2: "DERKS",
      role: "Software Engineer",
      tagline: {
        before:
          "Fokus auf Full-Stack-Entwicklung und verteilte Systeme. Tätig an der ",
        linkText: "ETH Zürich",
        after: ".",
      },
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Arbeiten ansehen",
      sidebarStack: "Stack",
      sidebarExperience: "Erfahrung",
      sidebarFocus: "Fokus",
      focusLine: "Full-stack · Verteilte Systeme",
      socialNavAria: "Social-Media-Profile",
    },
    about: {
      sectionLabel: "Über mich",
      headingLine1: "Software, die",
      headingLine2: "wirklich funktioniert.",
      body: "Ich bin Software Engineer mit Schwerpunkt auf Full-Stack-Entwicklung und verteilten Systemen. Mir sind Performance, saubere Architektur und Produkte wichtig, die etwas bewirken. Wenn ich nicht programmiere, trainiere ich im Gym oder richte mein Homelab ein.",
      primaryStack: "Primärer Stack",
      toolsInfra: "Tools & Infrastruktur",
    },
    experience: {
      sectionAria: "Erfahrung",
      sectionLabel: "Erfahrung",
      present: "Aktuell",
      now: "Jetzt",
    },
    projects: {
      sectionAria: "Projekte",
      sectionLabel: "Projekte",
      empty: "Keine angehefteten Repositories gefunden.",
      comingSoonTitle: "Demnächst",
      comingSoonSubtitle: "Weitere Projekte in Arbeit",
      githubSuffix: "auf GitHub",
    },
    contact: {
      sectionAria: "Kontakt",
      sectionLabel: "Kontakt",
      heading: "Lass uns etwas Gutes bauen.",
      body: "Interessantes Projekt oder einfach Hallo sagen? Ich freue mich auf den Austausch über neue Möglichkeiten und Ideen.",
      emailLabel: "E-Mail",
      footerCopyright: "derks.dev",
      footerMeta: "Next.js · Tailwind · Vercel",
    },
  },
};
