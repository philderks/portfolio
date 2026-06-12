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
    openMenu: string;
    closeMenu: string;
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
    footerImpressum: string;
    footerPrivacy: string;
    footerMeta: string;
  };
  legal: {
    backHome: string;
  };
  impressum: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    providerHeading: string;
    contactHeading: string;
    emailLabel: string;
    classificationHeading: string;
    classificationIntro: string;
    classificationContact: string;
    privacyLink: string;
  };
  datenschutz: {
    metaTitle: string;
    metaDescription: string;
    pageTitle: string;
    responsibleHeading: string;
    hostingHeading: string;
    hostingP1: string;
    hostingP2: string;
    cookiesHeading: string;
    cookiesP1: string;
    cookiesP2: string;
    externalHeading: string;
    externalP1: string;
    rightsHeading: string;
    rightsP1: string;
    transferHeading: string;
    transferP1: string;
    versionHeading: string;
    versionDate: string;
    imprintLink: string;
  };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    statusCode: string;
    gameOver: string;
    heading: string;
    body: string;
    homeCta: string;
    continueHint: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open section menu",
      closeMenu: "Close section menu",
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
      footerImpressum: "Imprint",
      footerPrivacy: "Privacy",
      footerMeta: "Next.js · Tailwind · Vercel",
    },
    legal: {
      backHome: "Back to home",
    },
    impressum: {
      metaTitle: "Imprint | derks.dev",
      metaDescription: "Legal notice for the personal portfolio website.",
      pageTitle: "Imprint",
      providerHeading: "Provider",
      contactHeading: "Contact",
      emailLabel: "Email:",
      classificationHeading: "Nature of this site",
      classificationIntro:
        "This website is a personal, non-commercial portfolio for job search. No services are offered and no sales are conducted.",
      classificationContact:
        "Please use only the email address above for contact. No further personal data is published.",
      privacyLink: "Privacy policy",
    },
    datenschutz: {
      metaTitle: "Privacy | derks.dev",
      metaDescription: "Privacy information for the personal portfolio site.",
      pageTitle: "Privacy policy",
      responsibleHeading: "1. Data controller",
      hostingHeading: "2. Hosting and server logs",
      hostingP1:
        "This site is hosted by Vercel Inc. Vercel processes technically necessary server log data (e.g. IP address, time, requested URL, user agent, and error data) to deliver the website securely and reliably.",
      hostingP2:
        "The legal basis is the legitimate interest in operating and securing this personal portfolio website. Log data is retained according to Vercel's current retention policies and deleted or anonymized when it is no longer required for these purposes.",
      cookiesHeading: "3. Cookies and local storage",
      cookiesP1:
        "This site uses self-hosted Umami analytics to understand page visits without advertising or marketing cookies.",
      cookiesP2:
        "Technically necessary local or session storage may be used for presentation preferences, including theme, language, optional Aurebesh display mode for the current browser session, and whether the insert-coin intro was dismissed during the current browser session.",
      externalHeading: "4. External links",
      externalP1:
        "The site links to external platforms (e.g. GitHub, LinkedIn). When you follow a link, the privacy policies of those providers apply.",
      rightsHeading: "5. Your rights (EU/CH)",
      rightsP1:
        "Depending on applicable law, you may have rights to access, rectification, erasure, restriction, objection, and data portability. Requests can be sent by email.",
      transferHeading: "6. Transfers to third countries",
      transferP1:
        "Where providers outside the EU/CH are used, processing is carried out under the applicable data protection safeguards of the provider.",
      versionHeading: "7. Last updated",
      versionDate: "June 12, 2026",
      imprintLink: "Imprint",
    },
    notFound: {
      metaTitle: "404 — Page not found | derks.dev",
      metaDescription: "The page you are looking for does not exist.",
      statusCode: "404",
      gameOver: "— GAME OVER —",
      heading: "This page doesn't exist.",
      body: "The page you tried to reach was moved, renamed, or never booted up in the first place.",
      homeCta: "Return to home",
      continueHint: "[Press any key to continue]",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
      contact: "Kontakt",
      openMenu: "Abschnittsmenü öffnen",
      closeMenu: "Abschnittsmenü schließen",
    },
    hero: {
      label: "Zürich, Schweiz",
      nameLine1: "PHILIPP",
      nameLine2: "DERKS",
      role: "Software Entwickler",
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
      footerImpressum: "Impressum",
      footerPrivacy: "Datenschutz",
      footerMeta: "Next.js · Tailwind · Vercel",
    },
    legal: {
      backHome: "Zurück zur Startseite",
    },
    impressum: {
      metaTitle: "Impressum | derks.dev",
      metaDescription: "Impressum der persönlichen Portfolio-Website.",
      pageTitle: "Impressum",
      providerHeading: "Anbieter",
      contactHeading: "Kontakt",
      emailLabel: "E-Mail:",
      classificationHeading: "Einordnung",
      classificationIntro:
        "Diese Website ist ein persönliches, nicht-kommerzielles Portfolio zur Jobsuche. Es werden keine Dienstleistungen angeboten und keine Verkäufe abgewickelt.",
      classificationContact:
        "Für Kontakt bitte ausschließlich die oben genannte E-Mail verwenden. Weitere persönliche Daten werden nicht veröffentlicht.",
      privacyLink: "Zur Datenschutzerklärung",
    },
    datenschutz: {
      metaTitle: "Datenschutz | derks.dev",
      metaDescription: "Datenschutzhinweise für ein persönliches Portfolio.",
      pageTitle: "Datenschutzerklärung",
      responsibleHeading: "1. Verantwortliche Person",
      hostingHeading: "2. Hosting und Server-Logs",
      hostingP1:
        "Diese Website wird von Vercel Inc. gehostet. Vercel verarbeitet technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt, angeforderte URL, User-Agent und Fehlerdaten), um die Website sicher und zuverlässig bereitzustellen.",
      hostingP2:
        "Rechtsgrundlage ist das berechtigte Interesse am Betrieb und an der Absicherung dieser persönlichen Portfolio-Website. Logdaten werden gemäß den jeweils aktuellen Aufbewahrungsrichtlinien von Vercel gespeichert und gelöscht oder anonymisiert, sobald sie für diese Zwecke nicht mehr erforderlich sind.",
      cookiesHeading: "3. Cookies und Local Storage",
      cookiesP1:
        "Diese Website nutzt selbst gehostete Umami-Analytics, um Seitenaufrufe ohne Werbe- oder Marketing-Cookies zu verstehen.",
      cookiesP2:
        "Technisch notwendiger Local Storage oder Session Storage kann für Darstellungspräferenzen verwendet werden, darunter Theme, Sprache, optionaler Aurebesh-Anzeigemodus für die aktuelle Browser-Sitzung und ob das Insert-Coin-Intro in der aktuellen Browser-Sitzung geschlossen wurde.",
      externalHeading: "4. Externe Links",
      externalP1:
        "Die Website verlinkt auf externe Plattformen (z. B. GitHub, LinkedIn). Beim Anklicken gelten die Datenschutzbestimmungen der jeweiligen Anbieter.",
      rightsHeading: "5. Deine Rechte (EU/CH)",
      rightsP1:
        "Je nach anwendbarem Recht bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit. Anfragen können per E-Mail gestellt werden.",
      transferHeading: "6. Drittlandübermittlung",
      transferP1:
        "Soweit Anbieter außerhalb der EU/CH eingesetzt werden, erfolgt die Verarbeitung nach den jeweils anwendbaren datenschutzrechtlichen Garantien des Anbieters.",
      versionHeading: "7. Stand",
      versionDate: "12.06.2026",
      imprintLink: "Zum Impressum",
    },
    notFound: {
      metaTitle: "404 — Seite nicht gefunden | derks.dev",
      metaDescription: "Die gesuchte Seite existiert nicht.",
      statusCode: "404",
      gameOver: "— GAME OVER —",
      heading: "Diese Seite existiert nicht.",
      body: "Die aufgerufene Seite wurde verschoben, umbenannt oder ist nie gestartet.",
      homeCta: "Zurück zur Startseite",
      continueHint: "[Beliebige Taste drücken, um fortzufahren]",
    },
  },
};
