import type { Lang } from "@/lib/i18n";
import type { ExperienceEntry } from "@/lib/experience";

export const experienceData: Record<Lang, ExperienceEntry[]> = {
  en: [
    {
      role: "Software Developer",
      company: "Young 'n' Rising, ETH Zürich",
      type: "Apprentice",
      period: "Aug 2025 — Present",
      present: true,
      start: "2025-08-01",
      end: null,
      location: "Zürich, Switzerland",
      description:
        "Full-stack development in a fast-paced startup environment at ETH Zürich.",
      tags: ["Python", "Customer Support"],
    },
    {
      role: "Apprentice Software Developer EFZ",
      company: "ETH Zürich",
      type: "Apprentice",
      period: "Aug 2023 — Present",
      present: true,
      start: "2023-08-01",
      end: null,
      location: "Zürich, Switzerland",
      description:
        "Core apprenticeship in software development. Building practical applications across the full stack.",
      tags: ["Vue.js", "Spring Framework"],
    },
  ],
  de: [
    {
      role: "Softwareentwickler",
      company: "Young 'n' Rising, ETH Zürich",
      type: "Azubi",
      period: "Aug 2025 — Heute",
      present: true,
      start: "2025-08-01",
      end: null,
      location: "Zürich, Schweiz",
      description:
        "Full-Stack-Entwicklung in einem schnelllebigen Startup-Umfeld an der ETH Zürich.",
      tags: ["Python", "Kundensupport"],
    },
    {
      role: "Lernender Applikationsentwickler EFZ",
      company: "ETH Zürich",
      type: "Azubi",
      period: "Aug 2023 — Heute",
      present: true,
      start: "2023-08-01",
      end: null,
      location: "Zürich, Schweiz",
      description:
        "Grundbildung in der Softwareentwicklung. Aufbau praktischer Anwendungen über den gesamten Stack.",
      tags: ["Vue.js", "Spring Framework"],
    },
  ],
};
