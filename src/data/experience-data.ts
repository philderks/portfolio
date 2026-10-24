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
      role: "Apprentice Software Developer EFZ",
      company: "ETH Zürich",
      type: "Apprenticeship",
      period: "Aug 2023 — Present · Year 4 of 4",
      present: true,
      start: "2023-08-01",
      end: null,
      location: "Zürich, Switzerland",
      description:
        "Four-year software development apprenticeship at ETH Zürich. Currently back with Informatikdienste after placements in the IT-Lehrlabor and Young 'n' Rising.",
      tags: [],
      placements: [
        { year: "Year 4 · current", team: "Informatikdienste, ETH Zürich", current: true },
        { year: "Year 3", team: "Young 'n' Rising, ETH Zürich" },
        { year: "Year 2", team: "Informatikdienste, ETH Zürich" },
        { year: "Year 1", team: "IT-Lehrlabor · Basislehrjahr" },
      ],
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
      role: "Lernender Applikationsentwickler EFZ",
      company: "ETH Zürich",
      type: "Lehre",
      period: "Aug 2023 — Heute · 4. von 4 Lehrjahren",
      present: true,
      start: "2023-08-01",
      end: null,
      location: "Zürich, Schweiz",
      description:
        "Vierjährige Lehre in der Applikationsentwicklung an der ETH Zürich. Nach Einsätzen im IT-Lehrlabor und bei Young 'n' Rising bin ich jetzt wieder bei den Informatikdiensten.",
      tags: [],
      placements: [
        { year: "4. Lehrjahr · aktuell", team: "Informatikdienste, ETH Zürich", current: true },
        { year: "3. Lehrjahr", team: "Young 'n' Rising, ETH Zürich" },
        { year: "2. Lehrjahr", team: "Informatikdienste, ETH Zürich" },
        { year: "1. Lehrjahr", team: "IT-Lehrlabor · Basislehrjahr" },
      ],
    },
  ],
};
