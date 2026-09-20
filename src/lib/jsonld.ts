import { businessConfig, isPlaceholderPhone } from "@/config/business";
import { getFaqs } from "@/lib/faq";

export function getJsonLd(options: { includeFaq?: boolean } = {}): object[] {
  const includeFaq = options.includeFaq ?? true;
  const { address, url, name, shortName, googleMapsUrl, socialLinks, geo } =
    businessConfig;

  const pharmacy: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Pharmacy", "LocalBusiness", "MedicalBusiness"],
    "@id": `${url}/#pharmacy`,
    name,
    alternateName: shortName,
    legalName: businessConfig.legalName,
    description:
      "Neighbourhood pharmacy and medical store in Bhajanpura, Delhi. Visit the physical shop, call, or get directions for healthcare products and daily health needs.",
    slogan: businessConfig.tagline,
    inLanguage: ["en-IN", "hi"],
    currenciesAccepted: "INR",
    isAccessibleForFree: true,
    knowsAbout: [
      "Pharmacy",
      "Medical store",
      "Healthcare products",
      "OTC medicines",
      "First aid",
      "Bhajanpura",
      "Wazirabad Road",
      "Delhi 110053",
    ],
    url,
    logo: {
      "@type": "ImageObject",
      "@id": `${url}/#logo`,
      url: `${url}/logo.jpg`,
      contentUrl: `${url}/logo.jpg`,
      width: 1024,
      height: 826,
    },
    email: businessConfig.email,
    taxID: businessConfig.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    areaServed: [
      { "@type": "Place", name: "Bhajanpura" },
      { "@type": "Place", name: "Wazirabad Road, Delhi" },
      { "@type": "AdministrativeArea", name: "North East Delhi" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessConfig.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  if (!isPlaceholderPhone(businessConfig.phone)) {
    pharmacy.telephone = businessConfig.phones.map((p) => p.e164);
  }

  if (googleMapsUrl) {
    pharmacy.hasMap = googleMapsUrl;
  }

  if (geo) {
    pharmacy.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }

  if (
    businessConfig.openingHours.hoursConfirmed &&
    businessConfig.openingHours.schema
  ) {
    const schema = businessConfig.openingHours.schema;
    const list = Array.isArray(schema) ? schema : [schema];
    pharmacy.openingHoursSpecification = list.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    }));
    pharmacy.openingHours = "Mo-Su 08:30-23:00";
  }

  const sameAs = [...socialLinks.map((link) => link.url), googleMapsUrl].filter(
    (value, index, arr) => value && arr.indexOf(value) === index,
  );

  if (sameAs.length > 0) {
    pharmacy.sameAs = sameAs;
  }

  pharmacy.potentialAction = [
    {
      "@type": "ViewAction",
      name: "Get directions",
      target: googleMapsUrl || url,
    },
    {
      "@type": "CommunicateAction",
      name: "Call store",
      target: `tel:${businessConfig.phone}`,
    },
  ];

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: shortName,
    url,
    inLanguage: ["en-IN", "hi"],
    publisher: { "@id": `${url}/#pharmacy` },
    about: { "@id": `${url}/#pharmacy` },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: `${shortName} | Medical Store in Bhajanpura, Delhi 110053`,
    description:
      "Walk-in medical store on Main Wazirabad Road, Bhajanpura. Address, hours, phone, and Google Maps directions.",
    inLanguage: "en-IN",
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#pharmacy` },
    primaryImageOfPage: { "@id": `${url}/#logo` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#geo-entity", "h1"],
    },
    citation: `${url}/llms.txt`,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
    ],
  };

  const faqs = getFaqs();
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const graphs: object[] = [pharmacy, website, webpage, breadcrumbs];
  if (includeFaq) {
    graphs.push(faqPage);
  }
  return graphs;
}
