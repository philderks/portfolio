export type ExperienceEntry = {
  role: string;
  company: string;
  type: string;
  period: string;
  present: boolean;
  start: string;
  end: string | null;
  location: string;
  description: string;
  tags: string[];
};

/** Full calendar years completed between two dates (same idea as "age"). */
function completedYearsBetween(from: Date, to: Date): number {
  let years = to.getFullYear() - from.getFullYear();
  const monthDiff = to.getMonth() - from.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) {
    years -= 1;
  }
  return years;
}

/**
 * Years from the earliest role start to `asOf` (defaults to now).
 * Overlapping roles are not double-counted.
 */
export function careerCompletedYears(
  entries: ExperienceEntry[],
  asOf: Date = new Date(),
): number {
  if (entries.length === 0) return 0;
  const starts = entries.map((e) => new Date(`${e.start}T12:00:00`));
  const earliest = new Date(Math.min(...starts.map((d) => d.getTime())));
  return Math.max(0, completedYearsBetween(earliest, asOf));
}

const tenureLabels = {
  en: { lessThanOne: "< 1 year", suffix: "years" },
  de: { lessThanOne: "< 1 Jahr", suffix: "Jahre" },
} as const;

export function formatCareerTenure(
  entries: ExperienceEntry[],
  lang: "en" | "de" = "en",
  asOf?: Date,
): string {
  const years = careerCompletedYears(entries, asOf);
  const labels = tenureLabels[lang];
  if (years < 1) return labels.lessThanOne;
  return `${years}+ ${labels.suffix}`;
}

export function startYear(isoDate: string): string {
  return isoDate.slice(0, 4);
}
