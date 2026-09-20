import { businessConfig } from "@/config/business";
import { aiSearchUserAgents } from "@/lib/ai-crawlers";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: [...aiSearchUserAgents], allow: "/" },
    ],
    sitemap: `${businessConfig.url}/sitemap.xml`,
    host: new URL(businessConfig.url).host,
  };
}
