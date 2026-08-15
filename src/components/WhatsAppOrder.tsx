import { businessConfig } from "@/config/business";
import { WhatsAppButton } from "@/components/CtaButtons";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  "WhatsApp dabao",
  "Dawai ya prescription bhejo",
  "Stock + pickup/delivery confirm",
];

export function WhatsAppOrder() {
  return (
    <section id="order" className="scroll-mt-24 bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionTitle eyebrow="Fastest" title="WhatsApp pe order karo" light>
            {businessConfig.whatsappDisplay} pe message karo. Koi app download
            nahi, koi payment online nahi — seedha shop se baat.
          </SectionTitle>
          <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <WhatsAppButton variant="light" className="w-full sm:w-auto" />
            <WhatsAppButton
              variant="onDark"
              className="w-full sm:w-auto"
              message={businessConfig.whatsappPrescriptionPrefill}
            >
              Prescription bhejo
            </WhatsAppButton>
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
