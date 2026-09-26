import { mapsHref, reviewHref } from "@/lib/links";
import { businessConfig } from "@/config/business";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function Reviews() {
  const href = reviewHref() ?? mapsHref();

  return (
    <section className="bg-mint/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="rounded-3xl border border-brand/10 bg-white p-6 text-center shadow-sm sm:p-8">
          <div
            className="flex justify-center gap-1 text-2xl text-amber-400"
            aria-hidden
          >
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-brand-dark sm:text-2xl">
            Google pe apna experience share karo
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
            Hum fake reviews nahi lagate — agar {businessConfig.shortName} se
            khush ho to Google Maps pe likh dena. Bhajanpura ke liye helpful
            hota hai.
          </p>
          <TrackedLink
            href={href}
            event={reviewHref() ? "click_review" : "click_directions"}
            location="reviews"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review likho on Google
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
