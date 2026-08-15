import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PromoTicker } from "@/components/PromoTicker";
import { Hero } from "@/components/Hero";
import { WhatsAppOrder } from "@/components/WhatsAppOrder";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { FinalBanner } from "@/components/FinalBanner";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  alternates: { canonical: businessConfig.url },
};

export default function Home() {
  return (
    <>
      <Header />
      <PromoTicker />
      <main>
        <Hero />
        <WhatsAppOrder />
        <Services />
        <TrustSection />
        <Location />
        <Reviews />
        <FAQ />
        <FinalBanner />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
