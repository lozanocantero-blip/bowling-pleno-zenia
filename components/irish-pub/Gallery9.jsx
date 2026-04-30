"use client";
import React from "react";
import { useTranslations } from "next-intl";

const photos = [
  { src: "/images/interior-barra-araña-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Interior barra y araña de cristal Dublin House Irish Pub Bowling Pleno Zenia Orihuela Costa", span: "row-span-2" },
  { src: "/images/zona-asientos-bancos-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Zona de asientos y bancos de cuero Dublin House Irish Pub Bowling Pleno Zenia Orihuela Costa" },
  { src: "/images/sofa-chesterfield-ambiente-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Sofá Chesterfield y ambiente oscuro elegante Dublin House Irish Pub Orihuela Costa" },
  { src: "/images/futbolin-interior-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Futbolín e interior Dublin House Irish Pub Bowling Pleno Zenia Zenia Boulevard" },
  { src: "/images/sala-completa-sofas-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Sala completa con sofás y barra Dublin House Irish Pub Bowling Pleno Zenia Orihuela Costa" },
];

export function Gallery9() {
  const t = useTranslations("pub_page.gallery");
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">{t("label")}</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">{t("h2")}</h2>
          <p className="text-brand-navy/60 md:text-md">{t("sub")}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr_1fr] md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`overflow-hidden bg-brand-blue-light ${p.span || ""}`}>
              <img src={p.src} alt={p.alt} className="size-full object-cover aspect-square hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
