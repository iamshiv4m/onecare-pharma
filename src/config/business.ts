/**
 * Single source of truth for One Care Pharma.
 * Values taken from the official visiting card unless noted.
 */

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

export type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export type OpeningHoursSchema = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type SocialLink = {
  name: string;
  url: string;
};

export const businessConfig = {
  name: "ONE CARE PHARMA",
  shortName: "One Care Pharma",
  legalName: "One Care Pharma",
  tagline: "Your health, our priority",
  domain: "onecarepharma.com",
  /** Must match the live primary host. Vercel currently 308s apex → www. */
  url: "https://www.onecarepharma.com",
  email: "onecarepharma2@gmail.com",
  gstin: "07BWSPJ2504B1ZT",

  address: {
    streetAddress: "Shop No. 2, C-35, Ground Floor, Main Wazirabad Road",
    addressLocality: "Bhajanpura",
    addressRegion: "Delhi",
    postalCode: "110053",
    addressCountry: "IN",
  } satisfies PostalAddress,

  addressDisplay:
    "Shop No. 2, C-35, Ground Floor, Main Wazirabad Road, Bhajanpura, Delhi 110053",

  localityShort: "Bhajanpura",

  /** Primary number — used for Call Now. */
  phone: "+918796654406",
  phoneDisplay: "8796654406",

  /** Additional store numbers from the visiting card. */
  phones: [
    { e164: "+918796654406", display: "8796654406" },
    { e164: "+919958857893", display: "9958857893" },
  ],

  /** WhatsApp digits only, country code included, no +. */
  whatsapp: "918796654406",
  whatsappDisplay: "8796654406",

  whatsappPrefill:
    "Hi One Care Pharma, I would like to order medicines. I will share my prescription/details here.",

  whatsappPrescriptionPrefill:
    "Hi One Care Pharma, I would like to send my prescription for review. I will attach the prescription photo in this chat.",

  openingHours: {
    hoursConfirmed: true,
    display: "Open all days, 8:30 AM to 11:00 PM",
    schema: {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:30",
      closes: "23:00",
    } as OpeningHoursSchema | OpeningHoursSchema[] | null,
  },

  offersDelivery: true,
  serviceArea:
    "Bhajanpura, Main Wazirabad Road and nearby neighbourhoods in North East Delhi (110053). Delivery availability may vary — please check on WhatsApp or by phone.",

  googleMapsUrl: "https://share.google/qObhh3jxQhWoCL4q5",

  /** Google Business Profile / Search listing — “Write a review” CTA. */
  googleReviewUrl: "https://share.google/8BdFdwI1PhQZsx9NW",

  /** Meta tag content for Google Search Console (HTML tag method). */
  googleSiteVerification: "Kz-HjGOwQs8E82I0OkHdISzH5onBdzcEwhgpuLxYXho",

  /** HTML file name for Google Search Console (HTML file upload method). */
  googleSiteVerificationFile: "googlef46004cb09a5f5e3.html",

  geo: null as GeoCoordinates | null,

  /** Official profiles only. Maps listing helps Google match GBP ↔ website. */
  socialLinks: [
    { name: "Google Maps", url: "https://share.google/qObhh3jxQhWoCL4q5" },
    { name: "Google", url: "https://share.google/8BdFdwI1PhQZsx9NW" },
  ] as SocialLink[],

  prescriptionDisclaimer:
    "Prescription medicines are dispensed only as permitted under applicable laws and after appropriate prescription verification where required.",

  nav: [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#order", label: "Order Medicine" },
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type BusinessConfig = typeof businessConfig;

export function formatAddress(address: PostalAddress): string {
  return `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;
}

export function isPlaceholderPhone(value: string): boolean {
  return /x/i.test(value) || value.trim() === "";
}
