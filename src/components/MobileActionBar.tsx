import { businessConfig } from "@/config/business";
import { mapsHref, telHref, whatsappHref } from "@/lib/links";
import { IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/15 bg-white/95 pb-[max(0.35rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(11,61,46,0.08)] md:hidden">
      <nav
        className="grid grid-cols-3 gap-1 px-2 pt-2"
        aria-label="Quick contact"
      >
        <a
          href={telHref()}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold leading-none text-brand-dark active:bg-mint"
        >
          <IconPhone className="size-6" />
          <span className="leading-none">Call</span>
          <span className="sr-only"> {businessConfig.phoneDisplay}</span>
        </a>
        <a
          href={whatsappHref()}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-whatsapp text-[11px] font-semibold leading-none text-white active:bg-[#198a36]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp className="size-6" />
          <span className="leading-none">WhatsApp</span>
        </a>
        <a
          href={mapsHref()}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-semibold leading-none text-brand-dark active:bg-mint"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconPin className="size-6" />
          <span className="leading-none">Directions</span>
        </a>
      </nav>
    </div>
  );
}
