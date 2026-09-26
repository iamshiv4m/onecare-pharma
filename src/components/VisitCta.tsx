import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  VisitStoreButton,
} from "@/components/CtaButtons";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  "Store pe aao — Main Wazirabad Road",
  "Hours confirm karo — 8:30 AM to 11 PM",
  "Call ya WhatsApp se general enquiry",
];

export function VisitCta() {
  return (
    <section id="visit" className="scroll-mt-24 bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle
            eyebrow="Walk-in store"
            title="Bhajanpura aake milo"
            light
          >
            {businessConfig.addressDisplay}. Koi online cart nahi — yeh physical
            medical store hai. Hours, directions, ya product availability ke
            liye call karo.
          </SectionTitle>
          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <VisitStoreButton
              variant="light"
              href="#contact"
              className="w-full sm:w-auto"
            />
            <CallButton
              variant="onDark"
              trackingLocation="visit-cta"
              className="w-full sm:w-auto"
            />
            <DirectionsButton
              variant="onDark"
              trackingLocation="visit-cta"
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/15"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-dark">
                {i + 1}
              </span>
              <span className="font-medium text-white">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
