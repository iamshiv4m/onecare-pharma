import { businessConfig } from "@/config/business";

export function TrustSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-2xl font-bold text-brand-dark">
          About the shop
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">
          {businessConfig.shortName} is a medical store on Main Wazirabad Road,
          Bhajanpura (Delhi 110053). People from nearby lanes come here for
          daily medicines. You can walk in, call {businessConfig.phoneDisplay},
          or message on WhatsApp. Hours are 8:30 AM to 11 PM, all days.
        </p>
      </div>
    </section>
  );
}
