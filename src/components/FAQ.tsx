import { getFaqs, type FaqItem } from "@/lib/faq";

export function FAQ({ items }: { items?: FaqItem[] }) {
  const faqs = items ?? getFaqs();
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 bg-mint/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
          Questions
        </h2>
        <div className="mt-8 divide-y divide-brand/15 rounded-2xl border border-brand/10 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none py-1 font-semibold text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded min-h-11 flex items-center">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
