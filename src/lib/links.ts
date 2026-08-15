import { businessConfig, isPlaceholderPhone } from "@/config/business";

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function telHref(phone: string = businessConfig.phone): string {
  const digits = digitsOnly(phone);
  return digits ? `tel:+${digits}` : "tel:";
}

export function whatsappHref(
  message: string = businessConfig.whatsappPrefill,
  whatsapp = businessConfig.whatsapp,
): string {
  const digits = digitsOnly(whatsapp);
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

export function mapsHref(): string {
  return businessConfig.googleMapsUrl;
}

export function reviewHref(): string | null {
  const url = businessConfig.googleReviewUrl.trim();
  return url ? url : null;
}

export function phoneReady(): boolean {
  return !isPlaceholderPhone(businessConfig.phone);
}

export function whatsappReady(): boolean {
  return !isPlaceholderPhone(businessConfig.whatsapp);
}
