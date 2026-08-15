import { mapsHref, reviewHref } from "@/lib/links";
import { businessConfig } from "@/config/business";

export function Reviews() {
  const href = reviewHref() ?? mapsHref();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-sm text-ink-muted">
          Agar shop acchi lagi ho to{" "}
          <a
            href={href}
            className="font-medium text-brand underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google pe review
          </a>{" "}
          likh dena. {businessConfig.shortName}, Bhajanpura.
        </p>
      </div>
    </section>
  );
}
