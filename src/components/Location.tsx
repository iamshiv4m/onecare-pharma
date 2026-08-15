import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  WhatsAppButton,
} from "@/components/CtaButtons";
import { NapDetails } from "@/components/NapDetails";

export function Location() {
  return (
    <section id="contact" className="scroll-mt-24 bg-mint">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-2xl font-bold text-brand-dark">
          Address
        </h2>
        <div className="mt-6 max-w-xl rounded-xl border border-brand/15 bg-white p-4 sm:p-6">
          <NapDetails />
          <p className="mt-3 text-sm text-ink-muted">
            WhatsApp {businessConfig.whatsappDisplay}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Nearby areas: Bhajanpura, Wazirabad Road, and around 110053. Ask on
            WhatsApp if we deliver to your lane.
          </p>
          <p className="mt-2 text-xs text-ink-muted">GSTIN: {businessConfig.gstin}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <DirectionsButton className="w-full sm:w-auto">
              Google Maps
            </DirectionsButton>
            <WhatsAppButton className="w-full sm:w-auto" variant="light" />
            <CallButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
