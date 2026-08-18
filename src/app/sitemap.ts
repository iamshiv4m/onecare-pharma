import { businessConfig } from "@/config/business";
import type { MetadataRoute } from "next";

/** Bump this when page content actually changes — do not use `new Date()`. */
const LAST_MODIFIED = "2026-08-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 as const, changeFrequency: "weekly" as const },
    {
      path: "/contact",
      priority: 0.8 as const,
      changeFrequency: "monthly" as const,
    },
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
  ];

  return pages.map((page) => ({
    url: `${businessConfig.url}${page.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
