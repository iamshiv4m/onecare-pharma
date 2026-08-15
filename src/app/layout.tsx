import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { businessConfig } from "@/config/business";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "One Care Pharma | Medical Store in Bhajanpura, Delhi 110053";
const description =
  "One Care Pharma, Shop No. 2, C-35, Main Wazirabad Road, Bhajanpura, Delhi 110053. Medicines on WhatsApp, call 8796654406, open 8:30 AM to 11 PM every day.";

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.url),
  title: {
    default: title,
    template: `%s | ${businessConfig.shortName}`,
  },
  description,
  applicationName: businessConfig.shortName,
  keywords: [
    "One Care Pharma",
    "pharmacy in Bhajanpura",
    "medical store Bhajanpura",
    "pharmacy Wazirabad Road",
    "medicine shop Delhi 110053",
    "pharmacy near me Bhajanpura",
  ],
  robots: { index: true, follow: true },
  category: "health",
  verification: businessConfig.googleSiteVerification
    ? { google: businessConfig.googleSiteVerification }
    : undefined,
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Bhajanpura, Delhi",
  },
  openGraph: {
    type: "website",
    url: businessConfig.url,
    title,
    description,
    siteName: businessConfig.shortName,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ONE CARE PHARMA logo — medical store in Bhajanpura, Delhi",
      },
      {
        url: "/logo.jpg",
        width: 1024,
        height: 826,
        alt: "ONE CARE PHARMA logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#24a148",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${plusJakarta.variable} h-full overflow-x-clip antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-clip bg-background text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
