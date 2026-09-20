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
    const headers: {
      source: string;
      headers: { key: string; value: string }[];
    }[] = [
      {
        source: "/llms.txt",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-snippet:-1",
          },
        ],
      },
    ];

    const verificationFile = businessConfig.googleSiteVerificationFile;
    if (verificationFile) {
      headers.push({
        source: `/${verificationFile}`,
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=utf-8",
          },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;
