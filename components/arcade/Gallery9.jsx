"use client";
import React from "react";
import { useTranslations } from "next-intl";

const photos = [
  { src: "/images/arcade-motos-speed-rider-asphalt-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Simuladores de motos Speed Rider Asphalt 9 arcade Bowling Pleno Zenia Orihuela Costa", span: "row-span-2" },
  { src: "/images/arcade-hero.jpg", alt: "Sala de arcade y juegos recreativos Bowling Pleno Zenia Orihuela Costa" },
  { src: "/images/arcade.png", alt: "Zona arcade familiar Bowling Pleno Zenia Zenia Boulevard Orihuela Costa" },
  { src: "/images/arcade-tickets.jpg", alt: "Sistema de tickets máquinas arcade Bowling Pleno Zenia Orihuela Costa" },
  { src: "/images/arcade-coches-outrun-simulador-bowling-pleno-zenia-orihuela-costa.jpg", alt: "Simuladores de coches OutRun arcade Bowling Pleno Zenia Orihuela Costa" },
];

export function Gallery9() {
  const t = useTranslations("arcade_page.gallery");
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
