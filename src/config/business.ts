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

/** Google Knowledge Graph mid for the GBP listing. Do not invent a Place ID. */
const GOOGLE_KNOWLEDGE_GRAPH_ID = "/g/11zd9jg5t2";

/** Stable Maps search (address query). Avoid share.google short links. */
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=One%20Care%20Pharma%2C%20Shop%20No.%202%2C%20C-35%2C%20Main%20Wazirabad%20Road%2C%20Bhajanpura%2C%20Delhi%20110053";

/** Opens the Google listing for reviews via kgmid when Place ID is unknown. */
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=One+Care+Pharma+Bhajanpura&kgmid=/g/11zd9jg5t2";

const GOOGLE_KNOWLEDGE_GRAPH_URL = `https://www.google.com/search?kgmid=${GOOGLE_KNOWLEDGE_GRAPH_ID}`;

export const businessConfig = {
  name: "ONE CARE PHARMA",
  shortName: "One Care Pharma",
  legalName: "One Care Pharma",
  tagline: "Your local medical store in Bhajanpura",
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
    "Hi One Care Pharma, I have a question about store hours, location, or products available at the shop.",

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

  /** Public site is positioned as a walk-in medical store, not an online pharmacy. */
  offersDelivery: false,
  serviceArea:
    "Walk-in customers from Bhajanpura, Main Wazirabad Road, and nearby neighbourhoods in North East Delhi (110053), including Yamuna Vihar, Khajuri Khas, Sonia Vihar, and Seelampur.",

  googleKnowledgeGraphId: GOOGLE_KNOWLEDGE_GRAPH_ID,
  googleKnowledgeGraphUrl: GOOGLE_KNOWLEDGE_GRAPH_URL,

  googleMapsUrl: GOOGLE_MAPS_URL,

  /** Google Business Profile / Search listing — “Write a review” CTA. */
  googleReviewUrl: GOOGLE_REVIEW_URL,

  /**
   * Real storefront photos for a future gallery + extra schema images.
   * public/ currently only has logo.jpg — do not add stock or AI photos.
   */
  storePhotos: [] as readonly string[],

  /** Meta tag content for Google Search Console (HTML tag method). */
  googleSiteVerification: "Kz-HjGOwQs8E82I0OkHdISzH5onBdzcEwhgpuLxYXho",

  /** HTML file name for Google Search Console (HTML file upload method). */
  googleSiteVerificationFile: "googlef46004cb09a5f5e3.html",

  /** Approximate pin for C-35, Main Wazirabad Road, Bhajanpura Chowk. Refine from GBP if Maps differs. */
  geo: {
    latitude: 28.70316,
    longitude: 77.26408,
  } satisfies GeoCoordinates,

  /** Official profiles only. Maps listing helps Google match GBP ↔ website. */
  socialLinks: [
    { name: "Google Maps", url: GOOGLE_MAPS_URL },
    { name: "Google", url: GOOGLE_REVIEW_URL },
  ] as SocialLink[],

  prescriptionDisclaimer:
    "Prescription medicines are dispensed only as permitted under applicable laws and after appropriate prescription verification where required.",

  nav: [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Visit Store" },
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
