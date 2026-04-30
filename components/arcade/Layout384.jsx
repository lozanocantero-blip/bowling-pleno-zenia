"use client";
import React from "react";
import { useTranslations } from "next-intl";

export function Layout384() {
  const t = useTranslations("arcade_page.system");
  return (
    <section id="sistema" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">{t("label")}</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">{t("h2")}</h2>
          <p className="text-brand-navy/60 md:text-md">{t("sub")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="bg-white border-2 border-brand-navy/10 hover:border-brand-navy transition-colors overflow-hidden flex flex-col">
            <div className="overflow-hidden aspect-video">
              <img src="/images/arcade-tickets.jpg" alt="Máquina contadora de tickets en el arcade de Bowling Pleno Zenia — Orihuela Costa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">{t("ticketsTag")}</p>
              <h3 className="text-2xl font-black uppercase mb-2">{t("ticketsH3")}</h3>
              <p className="text-brand-navy/60 text-sm flex-1">{t("ticketsDesc")}</p>
            </div>
          </div>
          <div className="bg-brand-navy text-white border-2 border-brand-navy overflow-hidden flex flex-col lg:col-span-2">
            <div className="overflow-hidden aspect-video">
              <img src="/images/arcade-premios.jpg" alt="Premios canjeables por tickets en el arcade de Bowling Pleno Zenia — peluches y regalos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col section-dark">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">{t("prizesTag")}</p>
              <h3 className="text-white text-2xl font-black uppercase mb-2">{t("prizesH3")}</h3>
              <p className="text-white/60 text-sm">{t("prizesDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
