"use client";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { useTranslations } from "next-intl";

export function Testimonial6() {
  const t = useTranslations("bolera_page.reviews");
  const items = t.raw("items");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="label-red mb-3">{t("label")}</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none">{t("h2")}</h2>
          <p className="text-brand-navy/60 mt-2 md:text-md">{t("sub")}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((r, i) => (
            <div key={i} className="bg-white p-8 border-l-4 border-brand-red">
              <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <BiSolidStar key={j} className="size-4 text-yellow-400" />)}</div>
              <blockquote className="text-brand-navy/80 font-medium text-lg leading-relaxed mb-6">"{r.quote}"</blockquote>
              <div>
                <p className="font-black uppercase text-sm tracking-wider">{r.author}</p>
                <p className="text-brand-navy/50 text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
