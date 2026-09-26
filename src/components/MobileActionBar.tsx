import { businessConfig } from "@/config/business";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { mapsHref, telHref, whatsappHref } from "@/lib/links";
import { IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/15 bg-white/95 pb-[max(0.35rem,env(safe-area-inset-bottom))] shadow-[0_-12px_32px_rgba(11,61,46,0.12)] backdrop-blur-md md:hidden">
      <nav
        className="grid grid-cols-3 items-end gap-1 px-2 pt-1"
        aria-label="Quick contact"
      >
        <TrackedLink
          href={telHref()}
          event="click_call"
          location="mobile-bar"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold leading-none text-brand-dark active:bg-mint"
        >
          <IconPhone className="size-6" />
          <span className="leading-none">Call</span>
          <span className="sr-only"> {businessConfig.phoneDisplay}</span>
        </TrackedLink>
        <TrackedLink
          href={whatsappHref()}
          event="click_whatsapp"
          location="mobile-bar"
          className="whatsapp-glow -mt-5 flex min-h-[4.25rem] flex-col items-center justify-center gap-1 rounded-2xl bg-whatsapp px-3 text-[11px] font-bold leading-none text-white ring-4 ring-white active:bg-[#198a36]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp className="size-7" />
          <span className="leading-none">WhatsApp</span>
        </TrackedLink>
        <TrackedLink
          href={mapsHref()}
          event="click_directions"
          location="mobile-bar"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold leading-none text-brand-dark active:bg-mint"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconPin className="size-6" />
          <span className="leading-none">Directions</span>
        </TrackedLink>
      </nav>
    </div>
  );
}
