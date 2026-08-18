import { businessConfig } from "@/config/business";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${businessConfig.url}/sitemap.xml`,
    host: new URL(businessConfig.url).host,
  };
}
