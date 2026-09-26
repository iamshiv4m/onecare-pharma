import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import {
  CallButton,
  DirectionsButton,
  VisitStoreButton,
} from "@/components/CtaButtons";
import { businessConfig } from "@/config/business";
import { getFaqPageJsonLd } from "@/lib/jsonld";
import { getLocalLandingPage, type LocalLandingPage } from "@/lib/local-pages";

export function localPageMetadata(path: LocalLandingPage["path"]): Metadata {
  const page = getLocalLandingPage(path);
  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${businessConfig.url}${page.path}`,
      types: { "text/plain": `${businessConfig.url}/llms.txt` },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${businessConfig.url}${page.path}`,
    },
  };
}

export function LocalLanding({ path }: { path: LocalLandingPage["path"] }) {
  const page = getLocalLandingPage(path);
  const related =
    path === "/bhajanpura-pharmacy"
      ? {
          href: "/medical-store-110053" as const,
          label: "Medical store near 110053",
        }
      : { href: "/bhajanpura-pharmacy" as const, label: "Bhajanpura pharmacy" };

  const faqLd = getFaqPageJsonLd(page.faqs);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: businessConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: `${businessConfig.url}${page.path}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            {businessConfig.localityShort}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {page.intro}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <VisitStoreButton href="#contact" />
            <CallButton trackingLocation="local-landing" />
            <DirectionsButton variant="light" trackingLocation="local-landing" />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {page.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-brand/10 bg-white p-5 sm:p-6"
              >
                <h2 className="font-display text-lg font-bold text-brand-dark">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Also see{" "}
            <Link
              href={related.href}
              className="font-semibold text-brand hover:underline"
            >
              {related.label}
            </Link>
            {" · "}
            <Link
              href="/contact"
              className="font-semibold text-brand hover:underline"
            >
              Address and phone
            </Link>
            .
          </p>
        </div>

        <Location />
        <Reviews />
        <FAQ items={page.faqs} includeJsonLd={false} />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
