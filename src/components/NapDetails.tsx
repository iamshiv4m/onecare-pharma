import { businessConfig } from "@/config/business";
import { telHref } from "@/lib/links";

/** Visible NAP block — Google matches this to Google Business Profile. */
export function NapDetails({ className = "" }: { className?: string }) {
  const { address, openingHours } = businessConfig;

  return (
    <address className={`not-italic ${className}`}>
      <strong className="block font-display text-lg text-brand-dark">
        {businessConfig.name}
      </strong>
      <p className="mt-2 text-ink break-words">
        {address.streetAddress}
        <br />
        {address.addressLocality}, {address.addressRegion} {address.postalCode}
        <br />
        India
      </p>
      <p className="mt-3 flex flex-col gap-2 text-sm text-ink sm:flex-row sm:flex-wrap sm:gap-0">
        {businessConfig.phones.map((p) => (
          <a
            key={p.e164}
            href={telHref(p.e164)}
            className="inline-flex min-h-11 items-center font-medium text-brand hover:underline sm:mr-3 sm:min-h-0"
          >
            {p.display}
          </a>
        ))}
      </p>
      <p className="mt-1 text-sm">
        <a className="break-all text-brand hover:underline" href={`mailto:${businessConfig.email}`}>
          {businessConfig.email}
        </a>
      </p>
      {openingHours.hoursConfirmed ? (
        <p className="mt-3 text-sm text-ink">
          Hours:{" "}
          <time dateTime="08:30">8:30 AM</time>
          {" – "}
          <time dateTime="23:00">11:00 PM</time>
          , all days
        </p>
      ) : (
        <p className="mt-3 text-sm text-ink">{openingHours.display}</p>
      )}
    </address>
  );
}
