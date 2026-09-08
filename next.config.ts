import type { NextConfig } from "next";
import { businessConfig } from "./src/config/business";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/medicine-delivery",
        destination: "/medical-store-110053",
        permanent: true,
      },
    ];
  },
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
