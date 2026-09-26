"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  captureCampaign,
  denyAnalyticsConsent,
  flushCtaQueue,
  GA_MEASUREMENT_ID,
  isValidMeasurementId,
  readConsent,
  subscribeToConsent,
  trackPageView,
  writeConsent,
  type ConsentChoice,
} from "@/lib/analytics";

const measurementId = GA_MEASUREMENT_ID;

type ConsentState = ConsentChoice | "unset" | "pending";

function consentSnapshot(): ConsentState {
  return readConsent() ?? "unset";
}

function pendingConsentSnapshot(): ConsentState {
  return "pending";
}

export function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribeToConsent,
    consentSnapshot,
    pendingConsentSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    captureCampaign();
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("ocp-open-consent", openSettings);
    return () => window.removeEventListener("ocp-open-consent", openSettings);
  }, []);

  useEffect(() => {
    if (consent !== "denied") return;
    denyAnalyticsConsent();
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;
    trackPageView(pathname);
  }, [consent, pathname]);

  if (!isValidMeasurementId(measurementId) || consent === "pending")
    return null;

  const showBanner = consent === "unset" || settingsOpen;

  function choose(choice: ConsentChoice) {
    writeConsent(choice);
    setSettingsOpen(false);
  }

  return (
    <>
      {consent === "granted" ? (
        <GoogleAnalytics measurementId={measurementId} />
      ) : null}
      {showBanner ? (
        <section
          className="fixed inset-x-3 z-60 rounded-2xl border border-brand/15 bg-white p-4 shadow-2xl bottom-[calc(5.75rem+env(safe-area-inset-bottom))] md:inset-x-auto md:right-4 md:bottom-4 md:w-104"
          aria-labelledby="analytics-consent-title"
        >
          <h2
            id="analytics-consent-title"
            className="font-display text-base font-bold text-brand-dark"
          >
            Store analytics
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Allow karoge to hum sirf yeh dekhte hain ki Call, WhatsApp,
            Directions, aur Review buttons use hue. Dawai ka naam, prescription,
            phone number, ya WhatsApp message collect nahi hota.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/privacy"
              className="font-semibold text-brand hover:underline"
            >
              Privacy policy
            </Link>
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-dark"
              onClick={() => choose("granted")}
            >
              Allow analytics
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-brand/20 bg-white px-4 text-sm font-semibold text-brand-dark hover:bg-mint"
              onClick={() => choose("denied")}
            >
              No thanks
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const consentDefaults = JSON.stringify({
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        onReady={() => {
          flushCtaQueue();
          trackPageView(window.location.pathname);
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', ${consentDefaults});
          gtag('config', '${measurementId}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
