import { businessConfig } from "@/config/business";

const items = [
  "Open daily 8:30 AM – 11 PM",
  "Walk-in medical store",
  "Bhajanpura, Delhi 110053",
  "Visit Store · Call Now",
  `GSTIN ${businessConfig.gstin}`,
  businessConfig.tagline,
];

export function PromoTicker() {
  const track = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-b border-brand/10 bg-brand text-white"
      aria-hidden
    >
      <div className="ticker-track flex w-max gap-10 py-2.5 text-xs font-semibold uppercase tracking-wide">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10"
          >
            <span>{item}</span>
            <span className="size-1.5 rounded-full bg-white/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
