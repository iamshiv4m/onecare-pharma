import { businessConfig } from "@/config/business";
import { WhatsAppButton } from "@/components/CtaButtons";

export function WhatsAppOrder() {
  return (
    <section id="order" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-2xl font-bold text-brand-dark">
          Order on WhatsApp
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">
          Send medicine names or a photo of the prescription to{" "}
          {businessConfig.whatsappDisplay}. We will check and tell you if it is
          in stock. Pickup from the shop, or delivery nearby if we can manage
          it.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-ink-muted">
          {businessConfig.prescriptionDisclaimer}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <WhatsAppButton className="w-full sm:w-auto" />
          <WhatsAppButton
            className="w-full sm:w-auto"
            variant="light"
            message={businessConfig.whatsappPrescriptionPrefill}
          >
            Send prescription
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
