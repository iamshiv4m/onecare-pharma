import Link from "next/link";
import { businessConfig } from "@/config/business";
import { BrandLogo } from "@/components/BrandLogo";
import { telHref, mapsHref, whatsappHref } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-brand/20 bg-white pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <BrandLogo variant="footer" />
        <p className="mt-4 max-w-md text-sm text-ink">
          {businessConfig.addressDisplay}
        </p>
        <p className="mt-2 text-sm">
          {businessConfig.phones.map((p) => (
            <a key={p.e164} href={telHref(p.e164)} className="mr-3 text-brand">
              {p.display}
            </a>
          ))}
        </p>
        <p className="mt-2 text-sm">
          <a className="text-brand" href={`mailto:${businessConfig.email}`}>
            {businessConfig.email}
          </a>
        </p>
        <p className="mt-2 text-xs text-ink-muted">GSTIN {businessConfig.gstin}</p>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a href={whatsappHref()} className="text-brand" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={mapsHref()} className="text-brand" target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <Link href="/contact" className="text-brand">
            Address
          </Link>
          <Link href="/privacy" className="text-ink-muted">
            Privacy
          </Link>
          <Link href="/terms" className="text-ink-muted">
            Terms
          </Link>
        </p>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-muted">
          {businessConfig.prescriptionDisclaimer}
        </p>
      </div>
    </footer>
  );
}
