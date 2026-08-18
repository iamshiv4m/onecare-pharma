import type { NextConfig } from "next";
import { businessConfig } from "./src/config/business";

const nextConfig: NextConfig = {
  async headers() {
    const verificationFile = businessConfig.googleSiteVerificationFile;
    if (!verificationFile) return [];

    return [
      {
        source: `/${verificationFile}`,
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=utf-8",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
