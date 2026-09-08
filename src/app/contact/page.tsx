import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Location } from "@/components/Location";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: `Contact ${businessConfig.shortName} | Pharmacy in Bhajanpura, Delhi`,
  },
  description: `Visit ${businessConfig.name} at ${businessConfig.addressDisplay}. Call ${businessConfig.phoneDisplay} or get directions. Open all days, 8:30 AM – 11:00 PM.`,
  robots: { index: true, follow: true },
  alternates: { canonical: `${businessConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <h1 className="font-display text-3xl font-bold text-brand-dark">
            Address and phone
          </h1>
          <p className="mt-3 max-w-2xl text-ink-muted">
            One Care Pharma, Main Wazirabad Road, Bhajanpura — walk-in medical
            store. Address, phone, hours, aur Google Maps directions yahin hain.
          </p>
        </div>
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
