import { getJsonLd } from "@/lib/jsonld";

export function JsonLd() {
  const data = getJsonLd({ includeFaq: false });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
