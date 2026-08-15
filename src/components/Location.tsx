import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  WhatsAppButton,
} from "@/components/CtaButtons";
import { NapDetails } from "@/components/NapDetails";
import { SectionTitle } from "@/components/SectionTitle";
import { IconPin } from "@/components/Icons";

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
              WhatsApp {businessConfig.whatsappDisplay}
            </p>
            <p className="mt-2 text-xs text-ink-muted">
              GSTIN {businessConfig.gstin}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <WhatsAppButton className="w-full sm:w-auto" variant="light" />
              <CallButton className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="flex min-h-56 flex-col justify-between rounded-2xl bg-brand-dark p-6 text-white shadow-lg">
            <div>
              <IconPin className="size-10 text-[#b8f0cc]" />
              <p className="mt-4 font-display text-2xl font-bold">
                Google Maps
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Phone se directions lo — walking, bike ya car, jaisa aapko theek
                lage.
              </p>
            </div>
            <DirectionsButton variant="light" className="mt-6 w-full">
              Directions kholo
            </DirectionsButton>
          </div>
        </div>
      </div>
    </section>
  );
}
