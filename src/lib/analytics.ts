/**
 * Consent-aware measurement for store actions.
 *
 * The public GA4 measurement ID is configured below. A deployment environment
 * can override it with NEXT_PUBLIC_GA_MEASUREMENT_ID when needed.
 * Link that GA4 property to Google Ads and import click_call, click_whatsapp,
 * and click_directions as primary conversions. Keep click_review secondary.
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-W1T1QV353X";

export type ConsentChoice = "granted" | "denied";

export type CtaEvent =
  | "click_call"
  | "click_whatsapp"
  | "click_directions"
  | "click_review";

const CONSENT_KEY = "ocp-analytics-consent";
const CAMPAIGN_KEY = "ocp-campaign";

type QueuedEvent = {
  event: CtaEvent;
  location: string;
};

const queue: QueuedEvent[] = [];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isValidMeasurementId(
  value: string | undefined,
): value is string {
  return typeof value === "string" && /^G-[A-Za-z0-9]+$/.test(value);
}

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  window.localStorage.setItem(CONSENT_KEY, choice);
  window.dispatchEvent(new Event("ocp-consent-change"));
}

export function subscribeToConsent(onStoreChange: () => void): () => void {
  window.addEventListener("ocp-consent-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("ocp-consent-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/** Remember ad campaign params locally. They reach Google only after consent. */
export function captureCampaign(): void {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source")?.slice(0, 80) ?? "";
  const medium = params.get("utm_medium")?.slice(0, 80) ?? "";
  const campaign = params.get("utm_campaign")?.slice(0, 80) ?? "";
  if (!source && !medium && !campaign) return;
  try {
    window.sessionStorage.setItem(
      CAMPAIGN_KEY,
      JSON.stringify({ source, medium, campaign }),
    );
  } catch {
    // Storage can be unavailable in private contexts. Events still send without campaign params.
  }
}

export function trackCta(event: CtaEvent, location: string): void {
  if (typeof window === "undefined" || readConsent() !== "granted") return;
  if (typeof window.gtag !== "function") {
    queue.push({ event, location });
    return;
  }
  sendCta(event, location);
}

export function flushCtaQueue(): void {
  if (typeof window.gtag !== "function") return;
  while (queue.length > 0) {
    const item = queue.shift();
    if (item) sendCta(item.event, item.location);
  }
}

let lastPagePath: string | null = null;

export function trackPageView(path: string): void {
  if (readConsent() !== "granted" || typeof window.gtag !== "function") return;
  if (lastPagePath === path) return;
  lastPagePath = path;
  window.gtag("event", "page_view", {
    page_path: path,
    transport_type: "beacon",
    ...campaignParams(),
  });
}

export function denyAnalyticsConsent(): void {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function sendCta(event: CtaEvent, location: string): void {
  window.gtag?.("event", event, {
    cta_location: location.slice(0, 80),
    page_path: window.location.pathname,
    transport_type: "beacon",
    ...campaignParams(),
  });
}

function campaignParams(): Record<string, string> {
  try {
    const raw = window.sessionStorage.getItem(CAMPAIGN_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as {
      source?: unknown;
      medium?: unknown;
      campaign?: unknown;
    };
    return {
      ...(typeof parsed.source === "string" && parsed.source
        ? { campaign_source: parsed.source }
        : {}),
      ...(typeof parsed.medium === "string" && parsed.medium
        ? { campaign_medium: parsed.medium }
        : {}),
      ...(typeof parsed.campaign === "string" && parsed.campaign
        ? { campaign_name: parsed.campaign }
        : {}),
    };
  } catch {
    return {};
  }
}
