import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  WhatsAppButton,
} from "@/components/CtaButtons";
import { BrandLogo } from "@/components/BrandLogo";
import { OpenStatus } from "@/components/OpenStatus";
import { IconClock, IconPin, IconWhatsApp } from "@/components/Icons";

const highlights = [
  { icon: IconClock, label: "Open daily", value: "8:30 AM – 11 PM" },
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: businessConfig.whatsappDisplay,
  },
  { icon: IconPin, label: "Location", value: "Bhajanpura, Delhi" },
];

export function Hero() {
  return (
    <section className="hero-dark relative overflow-hidden bg-brand-dark text-white">
      <div className="hero-orb hero-orb-a pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[#3dd66b]/25 blur-3xl" />
      <div className="hero-orb hero-orb-b pointer-events-none absolute -right-16 top-1/3 size-80 rounded-full bg-[#0ea5e9]/15 blur-3xl" />
      <div className="hero-pattern pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <OpenStatus className="bg-white/10 text-white/90 ring-white/20" />

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#9ee8b8]">
              Bhajanpura · Main Wazirabad Road
            </p>

            <h1 className="mt-3 font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              <span className="hero-gradient-text">Dawai chahiye?</span>
              <br />
              One Care Pharma
            </h1>

            <p className="mt-3 text-xl font-medium text-[#b8f0cc] sm:text-2xl">
              {businessConfig.tagline}
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Prescription check, roz ki dawai, aur ghar tak delivery jab ho
              sake. WhatsApp pe list bhejo — ya seedha shop pe aa jao.
            </p>

            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <WhatsAppButton
                glow
                className="w-full sm:w-auto sm:min-w-[220px]"
              />
              <CallButton variant="onDark" className="w-full sm:w-auto" />
              <DirectionsButton variant="light" className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="hero-logo-float relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/20 to-transparent blur-xl" />
              <div className="relative rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgb(0_0_0_/_0.4)] ring-1 ring-white/50 sm:p-10">
                <BrandLogo variant="heroLarge" priority />
                <p className="mt-6 text-center text-sm font-semibold text-brand-dark">
                  Your neighbourhood pharmacy
                </p>
                <p className="text-center text-xs text-ink-muted">
                  Delhi 110053 · GST registered
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#b8f0cc]">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#9ee8b8]">
                  {label}
                </p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
