import { getJsonLd } from "@/lib/jsonld";

/** Sitewide Pharmacy graph. FAQPage is page-specific (see FAQ / LocalLanding). */
export function JsonLd() {
  const data = getJsonLd({ includeFaq: false });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
