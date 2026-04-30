"use client";
import React from "react";
import { useTranslations } from "next-intl";

export function Cta51() {
  const t = useTranslations("bolera_page.cta");
  return (
    <section className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28 section-dark">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-red mb-4">{t("label")}</p>
          <h2 className="text-white text-5xl md:text-7xl uppercase leading-none mb-6">{t("h2")}</h2>
          <p className="text-white/70 md:text-md mb-8 max-w-md mx-auto">{t("body")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">{t("btn1")}</a>
            <a href="tel:+34965355815" className="rounded-full border-2 border-white text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-navy transition-colors">{t("btn2")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
