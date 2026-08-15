import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  WhatsAppButton,
} from "@/components/CtaButtons";
import { BrandLogo } from "@/components/BrandLogo";

export function Hero() {
  return (
    <section className="bg-mint">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <h1 className="font-display text-[1.75rem] font-bold leading-snug text-brand-dark sm:text-4xl">
            One Care Pharma
          </h1>
          <p className="mt-2 text-lg text-ink">
            Medical store, Main Wazirabad Road, Bhajanpura
          </p>
          <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-muted">
            Walk in for medicines, or send the list on WhatsApp. We are open
            8:30 AM to 11 PM, every day.
          </p>
          <p className="mt-3 text-sm break-words text-ink">
            {businessConfig.addressDisplay}
          </p>
          <p className="mt-1 text-sm text-ink">
            {businessConfig.phones.map((p) => p.display).join(" · ")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <WhatsAppButton className="col-span-2 w-full sm:w-auto" />
            <DirectionsButton className="w-full sm:w-auto" />
            <CallButton className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-brand/15 bg-white p-6 lg:min-h-[220px] lg:p-8">
          <BrandLogo variant="hero" />
        </div>
      </div>
    </section>
  );
}
