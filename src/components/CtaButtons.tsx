import type { ReactNode } from "react";
import { businessConfig } from "@/config/business";
import { mapsHref, telHref, whatsappHref } from "@/lib/links";
import { IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand min-h-12 px-4 py-3 text-sm sm:min-h-11 sm:px-5 sm:py-2.5";

export function WhatsAppButton({
  children = "Order on WhatsApp",
  message,
  className = "",
  variant = "primary",
}: {
  children?: ReactNode;
  message?: string;
  className?: string;
  variant?: "primary" | "light";
}) {
  const styles =
    variant === "primary"
      ? "bg-whatsapp text-white hover:bg-[#198a36] shadow-sm"
      : "bg-white text-brand-dark border border-brand/20 hover:bg-mint";
  return (
    <a
      href={whatsappHref(message)}
      className={`${base} ${styles} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWhatsApp className="size-5" />
      <span className="leading-none">{children}</span>
    </a>
  );
}

export function CallButton({
  children = "Call",
  className = "",
  variant = "secondary",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "secondary" | "ghost";
}) {
  const styles =
    variant === "secondary"
      ? "bg-white text-brand-dark border border-brand/25 hover:bg-mint"
      : "text-brand-dark underline-offset-4 hover:underline px-2";
  return (
    <a href={telHref()} className={`${base} ${styles} ${className}`}>
      <IconPhone className="size-5" />
      <span className="leading-none">
        {children}
        <span className="sr-only"> {businessConfig.phoneDisplay}</span>
      </span>
    </a>
  );
}

export function DirectionsButton({
  children = "Directions",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={mapsHref()}
      className={`${base} bg-brand text-white hover:bg-brand-dark shadow-sm ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconPin className="size-5" />
      <span className="leading-none">{children}</span>
    </a>
  );
}
