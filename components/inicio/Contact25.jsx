"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { RxChevronRight } from "react-icons/rx";

export function Contact25() {
  const t = useTranslations("location");
  return (
    <section id="ubicacion" aria-label={t("howToGet") + " — Bowling Pleno Zenia"} className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Ubicación</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            {t("title")}<br />{t("titleBold")}{" "}<span className="text-brand-red">{t("titleRed")}</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-md mx-auto md:text-md">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">

          {/* Google Maps iframe */}
          <div>
            <div className="overflow-hidden mb-4 w-full" style={{ height: "384px" }}>
              <iframe
                title="Bowling Pleno Zenia - Zenia Boulevard"
                src="https://maps.google.com/maps?q=Bowling+Pleno+Zenia,+Calle+Jade+2,+Zenia+Boulevard,+Orihuela+Costa,+Alicante,+Spain&output=embed&z=17"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">{t("howToGet")}</h3>
            <p className="text-brand-navy/60 text-sm mb-4">
              {t("address")}
            </p>
            <a
              href="https://maps.google.com/?q=Bowling+Pleno+Zenia+Zenia+Boulevard+Orihuela+Costa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline"
            >
              {t("openMaps")} <RxChevronRight className="size-4" />
            </a>
          </div>

          {/* Info card */}
          <div className="bg-brand-blue-light p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">{t("quickInfo")}</h3>
              <div className="space-y-4">
                {[
                  t.raw("infoItems.where"),
                  t.raw("infoItems.parking"),
                  t.raw("infoItems.lanes"),
                  t.raw("infoItems.rating"),
                  t.raw("infoItems.open"),
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-xl shrink-0">{icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">{label}</p>
                      <p className="text-brand-navy text-sm leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+34965355815"
                className="bg-brand-navy text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-red transition-colors">
                Llamar
              </a>
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="border-2 border-brand-navy text-brand-navy px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
