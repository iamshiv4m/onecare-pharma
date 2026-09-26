import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { ConsentSettingsButton } from "@/components/analytics/ConsentSettingsButton";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessConfig.shortName}`,
  description: `How ${businessConfig.shortName} handles website visits, optional analytics, and links to phone, WhatsApp, and Google Maps.`,
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
        <p className="mt-4 text-sm text-ink-muted">Last updated: 26 September 2026</p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          {businessConfig.shortName} is a walk-in medical store at{" "}
          {businessConfig.addressDisplay}. This website shares the store
          address, hours, and contact options. It does not take medicine
          orders, upload prescriptions, or collect health information through a
          form.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-brand-dark">
          What this site handles
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-muted">
          <li>Phone links open your phone app. The call itself is handled by your network provider.</li>
          <li>WhatsApp links open WhatsApp with a general store question. Message content is handled by WhatsApp.</li>
          <li>Directions and review links open Google Maps or Google Search.</li>
          <li>The contact email is {businessConfig.email}.</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-bold text-brand-dark">
          Optional analytics
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          If a Google Analytics 4 measurement ID is configured, the site asks
          before loading it. Until you choose Allow, no analytics tag is added.
          If you choose No thanks, the choice is stored in local storage on
          your browser and analytics stays off. You can change it from
          Analytics settings.
        </p>
        <p className="mt-3 leading-relaxed text-ink-muted">
          After consent, Google Analytics receives page paths and clicks on
          Call, WhatsApp, Directions, and Review. A click location such as
          “hero” or “footer” may be included. Campaign names from the page
          address, such as utm_source, may also be included. The events do not
          include medicine names, prescriptions, phone numbers, or WhatsApp
          message text. Advertising cookies and ad personalization stay off.
        </p>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Google processes this measurement data under its own terms. Analytics
          is used to understand which store buttons are useful and whether a
          Google Ads visit led to a call, WhatsApp click, or directions click.
          It is not used to sell personal information.
        </p>
        <ConsentSettingsButton className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl border border-brand/20 px-4 text-sm font-semibold text-brand-dark hover:bg-mint" />

        <h2 className="mt-8 font-display text-xl font-bold text-brand-dark">
          Contact
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Questions about this policy can be sent to {businessConfig.email} or
          asked at the store, {businessConfig.addressDisplay}. Phone:{" "}
          {businessConfig.phoneDisplay}.
        </p>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
