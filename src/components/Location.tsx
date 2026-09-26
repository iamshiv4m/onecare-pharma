import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  WhatsAppButton,
} from "@/components/CtaButtons";
import { NapDetails } from "@/components/NapDetails";
import { SectionTitle } from "@/components/SectionTitle";
import { mapsEmbedSrc } from "@/lib/links";
import Link from "next/link";

export function Location() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle eyebrow="Visit" title="Shop pe aao">
          Main Wazirabad Road, Bhajanpura — Google Maps se seedha rasta.
        </SectionTitle>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand/10 bg-mint/40 p-5 sm:p-6">
            <NapDetails />
            <p className="mt-3 text-sm text-ink-muted">
              WhatsApp {businessConfig.whatsappDisplay} — general store
              enquiries (hours, directions, in-store products).
            </p>
            <p className="mt-2 text-xs text-ink-muted">
              GSTIN {businessConfig.gstin}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <CallButton trackingLocation="location" className="w-full sm:w-auto" />
              <DirectionsButton
                trackingLocation="location"
                className="w-full sm:w-auto"
              />
              <WhatsAppButton
                trackingLocation="location"
                className="w-full sm:w-auto"
                variant="light"
              />
            </div>
          </div>

          <div className="flex min-h-72 flex-col overflow-hidden rounded-2xl border border-brand/10 bg-mint/40 shadow-sm">
            <iframe
              title={`Map of ${businessConfig.shortName}, ${businessConfig.addressDisplay}`}
              src={mapsEmbedSrc()}
              className="min-h-72 w-full flex-1 border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-brand/10 bg-white p-3">
              <DirectionsButton
                trackingLocation="location-map"
                className="w-full"
                variant="light"
              >
                Directions kholo
              </DirectionsButton>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          <Link
            href="/bhajanpura-pharmacy"
            className="font-semibold text-brand hover:underline"
          >
            Medical store in Bhajanpura
          </Link>
          {" · "}
          <Link
            href="/medical-store-110053"
            className="font-semibold text-brand hover:underline"
          >
            Medical store near 110053
          </Link>
        </p>
      </div>
    </section>
  );
}
