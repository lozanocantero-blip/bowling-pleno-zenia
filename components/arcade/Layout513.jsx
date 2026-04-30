"use client";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useTranslations } from "next-intl";

export function Layout513() {
  const t = useTranslations("arcade_page.machines");
  const items = t.raw("items");
  return (
    <section id="maquinas" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="label-red mb-3">{t("label")}</p>
            <h2 className="text-5xl md:text-7xl uppercase leading-none mb-6">{t("h2")}</h2>
            <p className="text-brand-navy/60 md:text-md mb-8 max-w-lg">{t("body")}</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer" className="border-2 border-brand-navy text-brand-navy px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">{t("btn1")}</a>
              <a href="#sistema" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline">{t("btn2")} <RxChevronRight className="size-4" /></a>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-brand-navy/10">
            {items.map((m, i) => (
              <div key={i} className="py-6 flex gap-4">
                <span className="text-4xl font-black text-brand-navy/10 shrink-0 w-12">0{i+1}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{m.tag}</p>
                  <h3 className="text-xl font-black uppercase mb-2">{m.title}</h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
