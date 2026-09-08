import {
  CallButton,
  DirectionsButton,
  VisitStoreButton,
} from "@/components/CtaButtons";

export function FinalBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="hero-pattern pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Bhajanpura aake milo
          </h2>
          <p className="mt-2 text-white/80">
            Local medical store — visit, call, ya Google Maps se directions lo.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap">
          <VisitStoreButton
            variant="light"
            href="/#contact"
            className="w-full sm:w-auto"
          />
          <CallButton variant="onDark" className="w-full sm:w-auto" />
          <DirectionsButton variant="onDark" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
