import type { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessConfig.name,
    short_name: businessConfig.shortName,
    description:
      "Medical store in Bhajanpura, Delhi. WhatsApp order, call, or visit.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#24a148",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "1024x826",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
