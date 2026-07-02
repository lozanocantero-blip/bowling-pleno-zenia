"use client";
import React from "react";
import { useTranslations } from "next-intl";

export function Faq() {
  const t = useTranslations("bolera_page.faq");
  const items = t.raw("items");

  // El schema FAQPage se construye desde las mismas traducciones que se
  // muestran en pantalla: Google exige que el JSON-LD coincida con el
  // contenido visible de la página.
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-10 md:mb-14">
          <p className="label-red mb-4">{t("label")}</p>
          <h2 className="text-brand-navy text-5xl md:text-7xl uppercase leading-none mb-4">{t("h2")}</h2>
          <p className="text-brand-navy/70 md:text-md">{t("sub")}</p>
        </div>
        <div className="mx-auto max-w-3xl divide-y-2 divide-brand-navy/10 border-y-2 border-brand-navy/10">
          {items.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold uppercase tracking-wider text-brand-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-brand-red text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-brand-navy/70 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
