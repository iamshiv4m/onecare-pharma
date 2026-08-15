import Link from "next/link";
import { businessConfig } from "@/config/business";
import { BrandLogo } from "@/components/BrandLogo";
import { IconPin, IconWhatsApp } from "@/components/Icons";
import { telHref, mapsHref, whatsappHref } from "@/lib/links";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#order", label: "Order Medicine" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  const { address, openingHours } = businessConfig;

  return (
    <footer className="border-t border-brand/20 bg-brand-dark text-white pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-2xl bg-white p-3">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              {businessConfig.tagline}
            </p>
            <p className="mt-3 text-xs text-white/55">
              GSTIN {businessConfig.gstin}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#9ee8b8]">
              Contact
            </h2>
            <address className="mt-4 space-y-3 not-italic text-sm leading-relaxed text-white/85">
              <p>
                {address.streetAddress}
                <br />
                {address.addressLocality}, {address.addressRegion}{" "}
                {address.postalCode}
              </p>
              <div className="flex flex-col gap-2">
                {businessConfig.phones.map((phone) => (
                  <a
                    key={phone.e164}
                    href={telHref(phone.e164)}
                    className="inline-flex w-fit font-semibold text-white transition hover:text-[#b8f0cc]"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${businessConfig.email}`}
                className="block break-all text-[#b8f0cc] transition hover:text-white"
              >
                {businessConfig.email}
              </a>
              {openingHours.hoursConfirmed ? (
                <p className="text-white/70">
                  Open daily <time dateTime="08:30">8:30 AM</time>
                  {" – "}
                  <time dateTime="23:00">11:00 PM</time>
                </p>
              ) : null}
            </address>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#9ee8b8]">
              Quick links
            </h2>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 text-sm font-semibold text-white transition hover:bg-[#198a36]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp className="size-4" />
                WhatsApp
              </a>
              <a
                href={mapsHref()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconPin className="size-4" />
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-white/50">
            {businessConfig.prescriptionDisclaimer}
          </p>
          <p className="mt-4 text-xs text-white/45">
            © {new Date().getFullYear()} {businessConfig.shortName}. Bhajanpura,
            Delhi 110053.
          </p>
        </div>
      </div>
    </footer>
  );
}
