import type { ReactNode } from "react";
import { businessConfig } from "@/config/business";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { mapsHref, telHref, whatsappHref } from "@/lib/links";
import { IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand min-h-12 px-4 py-3 text-sm sm:min-h-11 sm:px-5 sm:py-2.5";

export function WhatsAppButton({
  children = "Ask on WhatsApp",
  message,
  className = "",
  variant = "primary",
  glow = false,
  trackingLocation = "whatsapp",
}: {
  children?: ReactNode;
  message?: string;
  className?: string;
  variant?: "primary" | "light" | "onDark";
  glow?: boolean;
  trackingLocation?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-whatsapp text-white hover:bg-[#198a36] shadow-sm"
      : variant === "light"
        ? "border border-brand/20 bg-white text-brand-dark hover:bg-mint"
        : "border border-white/30 bg-white/10 text-white hover:bg-white/20";
  return (
    <TrackedLink
      href={whatsappHref(message)}
      event="click_whatsapp"
      location={trackingLocation}
      className={`${base} ${styles} ${glow ? "whatsapp-glow" : ""} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWhatsApp className="size-5" />
      <span className="leading-none">{children}</span>
    </TrackedLink>
  );
}

export function CallButton({
  children = "Call Now",
  className = "",
  variant = "secondary",
  trackingLocation = "call",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "secondary" | "ghost" | "onDark";
  trackingLocation?: string;
}) {
  const styles =
    variant === "secondary"
      ? "bg-white text-brand-dark border border-brand/25 hover:bg-mint"
      : variant === "onDark"
        ? "border-2 border-white bg-[#b8f0cc] text-brand-dark hover:bg-white shadow-sm"
        : "text-brand-dark underline-offset-4 hover:underline px-2";
  return (
    <TrackedLink
      href={telHref()}
      event="click_call"
      location={trackingLocation}
      className={`${base} ${styles} ${className}`}
    >
      <IconPhone className="size-5" />
      <span className="leading-none">
        {children}
        <span className="sr-only"> {businessConfig.phoneDisplay}</span>
      </span>
    </TrackedLink>
  );
}

export function VisitStoreButton({
  children = "Visit Store",
  className = "",
  variant = "primary",
  href = "/#contact",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "onDark";
  href?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark shadow-sm"
      : variant === "light"
        ? "border-2 border-white bg-white text-brand-dark hover:bg-mint shadow-sm"
        : "border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-dark";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <IconPin className="size-5" />
      <span className="leading-none">{children}</span>
    </a>
  );
}

export function DirectionsButton({
  children = "Get Directions",
  className = "",
  variant = "primary",
  trackingLocation = "directions",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "light" | "onDark";
  trackingLocation?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-dark shadow-sm"
      : variant === "light"
        ? "border border-brand/15 bg-white text-brand-dark hover:bg-mint"
        : "border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-dark";

  return (
    <TrackedLink
      href={mapsHref()}
      event="click_directions"
      location={trackingLocation}
      className={`${base} ${styles} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconPin className="size-5" />
      <span className="leading-none">{children}</span>
    </TrackedLink>
  );
}
