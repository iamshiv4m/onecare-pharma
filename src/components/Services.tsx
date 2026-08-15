import {
  IconBaby,
  IconDevice,
  IconHeart,
  IconPill,
  IconWhatsApp,
} from "@/components/Icons";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    icon: IconPill,
    title: "Medicines",
    body: "Regular aur prescription dawai — verification ke baad.",
  },
  {
    icon: IconHeart,
    title: "Health essentials",
    body: "ORS, bandage, vitamins, first-aid.",
  },
  {
    icon: IconBaby,
    title: "Baby care",
    body: "Baby aur mother care products.",
  },
  {
    icon: IconDevice,
    title: "Devices",
    body: "Thermometer, BP monitor — stock pe depend.",
  },
  {
    icon: IconWhatsApp,
    title: "WhatsApp order",
    body: "List bhejo, hum confirm karenge.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <SectionTitle eyebrow="Store" title="Yahan kya milega">
          Bhajanpura ka medical store — roz ki dawai se lekar ghar ki health
          needs tak.
        </SectionTitle>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="group rounded-2xl border border-brand/10 bg-mint/30 p-5 transition hover:border-brand/25 hover:bg-mint/60 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-sm transition group-hover:scale-105">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-dark">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
