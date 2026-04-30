"use client";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";
import { useTranslations } from "next-intl";

export function Layout16() {
  const t = useTranslations("pub_page.drinks");
  const items = t.raw("items");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
          <div>
            <p className="label-red mb-4">{t("label")}</p>
            <h2 className="text-5xl md:text-7xl uppercase leading-none mb-6">{t("h2")}</h2>
            <p className="text-brand-navy/60 mb-6 md:text-md">{t("body")}</p>
            <ul className="space-y-3 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BiCheck className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-brand-navy/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#ambiente" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline">{t("btn2")} <RxChevronRight className="size-4" /></a>
            </div>
          </div>
          <div className="overflow-hidden bg-brand-blue-light aspect-square md:aspect-auto md:h-[480px]">
            <img src="/images/cerveza-heineken-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Cerveza Heineken en mesa Dublin House Irish Pub Bowling Pleno Zenia Orihuela Costa" />
          </div>
        </div>
      </div>
    </section>
  );
}
