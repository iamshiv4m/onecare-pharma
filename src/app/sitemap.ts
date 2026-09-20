import { businessConfig } from "@/config/business";
import { localLandingPages } from "@/lib/local-pages";
import type { MetadataRoute } from "next";

/** Bump this when page content actually changes — do not use `new Date()`. */
const LAST_MODIFIED = "2026-09-20";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 as const, changeFrequency: "weekly" as const },
    {
      path: "/contact",
      priority: 0.8 as const,
      changeFrequency: "monthly" as const,
    },
    ...localLandingPages.map((page) => ({
      path: page.path,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    {
      path: "/privacy",
      priority: 0.3 as const,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms",
      priority: 0.3 as const,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/llms.txt",
      priority: 0.4 as const,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${businessConfig.url}${page.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
