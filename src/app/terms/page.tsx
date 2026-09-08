import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: `Terms | ${businessConfig.shortName}`,
  description: `Terms placeholder for ${businessConfig.shortName}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: `${businessConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-brand-dark">
          Terms of use
        </h1>
        <p className="mt-4 text-ink-muted">
          This website is an information and enquiry page for{" "}
          {businessConfig.shortName}, a physical medical store in Bhajanpura. It
          is not an online pharmacy and not a medical advice service.{" "}
          {businessConfig.prescriptionDisclaimer}
        </p>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
