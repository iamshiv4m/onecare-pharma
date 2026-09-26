import { businessConfig } from "@/config/business";
import {
  CallButton,
  DirectionsButton,
  VisitStoreButton,
} from "@/components/CtaButtons";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionTitle } from "@/components/SectionTitle";
import { IconClock, IconPill, IconPin } from "@/components/Icons";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { telHref } from "@/lib/links";

const points = [
  {
    icon: IconPill,
    title: "Asli local shop",
    body: "Counter pe aa ke dekh sakte ho — seedha baat, seedha kaam.",
  },
  {
    icon: IconPin,
    title: "Bhajanpura, Wazirabad Road",
    body: "Ground floor shop — Google Maps se Get Directions lo.",
  },
  {
    icon: IconClock,
    title: "Roz 8:30 AM se 11 PM",
    body: "Sunday bhi khula — walk-in customers ke liye.",
  },
  {
    icon: IconPill,
    title: "Trusted neighbourhood store",
    body: "GST-registered medical store. Hours aur stock ke liye call karo.",
  },
];

export function TrustSection() {
  const { address } = businessConfig;

  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle eyebrow="About" title="Bhajanpura ka apna medical store">
          {businessConfig.shortName} — Main Wazirabad Road pe local pharmacy.
          Visit the store, call, ya directions lo.
        </SectionTitle>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
          <div className="flex flex-col rounded-3xl bg-brand-dark p-6 text-white shadow-lg sm:p-8">
            <div className="inline-flex self-start rounded-2xl bg-white p-4 shadow-sm">
              <BrandLogo variant="footer" />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold sm:text-2xl">
              {businessConfig.name}
            </h3>
            <p className="mt-1 text-sm text-[#b8f0cc]">
              {businessConfig.tagline}
            </p>

            <address className="mt-5 not-italic text-sm leading-relaxed text-white/85">
              {address.streetAddress}
              <br />
              {address.addressLocality}, {address.addressRegion}{" "}
              {address.postalCode}
            </address>

            <div className="mt-4 flex flex-wrap gap-2">
              {businessConfig.phones.map((phone) => (
                <TrackedLink
                  key={phone.e164}
                  href={telHref(phone.e164)}
                  event="click_call"
                  location="trust-phone"
                  className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
                >
                  {phone.display}
                </TrackedLink>
              ))}
            </div>

            <div className="mt-auto space-y-3 pt-8">
              <div className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#9ee8b8]">
                  Opening hours
                </p>
                <p className="mt-1 text-sm font-semibold">
                  <time dateTime="08:30">8:30 AM</time>
                  {" – "}
                  <time dateTime="23:00">11:00 PM</time>, all days
                </p>
              </div>
              <p className="text-xs text-white/60">
                GSTIN {businessConfig.gstin}
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-brand/10 bg-mint/40 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Kyun choose karein
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-brand-dark sm:text-2xl">
              Seedha shop, seedhi baat
            </h3>

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {points.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand/5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-brand-dark">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <VisitStoreButton href="#contact" className="w-full sm:w-auto" />
              <CallButton trackingLocation="trust" className="w-full sm:w-auto" />
              <DirectionsButton
                variant="light"
                trackingLocation="trust"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
