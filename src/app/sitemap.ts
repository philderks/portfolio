import type { MetadataRoute } from "next";

const baseUrl = "https://derks.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-09");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
