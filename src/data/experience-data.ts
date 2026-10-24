import type { Lang } from "@/lib/i18n";
import type { ExperienceEntry } from "@/lib/experience";

export const experienceData: Record<Lang, ExperienceEntry[]> = {
  en: [
    {
      role: "Software Development Intern",
      company: "Nrlyze",
      type: "Internship",
      period: "Sep — Oct 2026 · 4 weeks",
      present: false,
      start: "2026-09-01",
      end: "2026-10-01",
      location: "Stockholm, Sweden",
      description:
        "Built a modular report generator that turns building sensor data into clear customer reports on energy, temperature, CO₂, humidity, and savings.",
      tags: ["Python", "React", "Typst"],
      postUrl: "https://lnkd.in/p/eMY99rbF",
    },
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
      role: "Praktikant in der Softwareentwicklung",
      company: "Nrlyze",
      type: "Praktikum",
      period: "Sep — Okt 2026 · 4 Wochen",
      present: false,
      start: "2026-09-01",
      end: "2026-10-01",
      location: "Stockholm, Schweden",
      description:
        "Entwicklung eines modularen Berichtsgenerators, der Sensordaten aus Gebäuden in verständliche Kundenberichte zu Energie, Temperatur, CO₂, Luftfeuchtigkeit und Einsparungen umwandelt.",
      tags: ["Python", "React", "Typst"],
      postUrl: "https://lnkd.in/p/eMY99rbF",
    },
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
