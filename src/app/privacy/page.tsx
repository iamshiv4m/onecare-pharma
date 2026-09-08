import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessConfig.shortName}`,
  description: `Privacy placeholder for ${businessConfig.shortName}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: `${businessConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-brand-dark">
          Privacy Policy
        </h1>
        <p className="mt-4 text-ink-muted">
          This is a placeholder. {businessConfig.shortName} does not currently
          collect prescription files or take medicine orders on this website.
          WhatsApp, phone, and Google Maps are third-party services with their
          own privacy policies. Replace this page with a full policy before
          collecting personal data through forms or analytics.
        </p>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
