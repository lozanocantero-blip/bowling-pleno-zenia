"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    tag: "Bolera",
    title: "Bowling — 10 Pistas",
    desc: "Adaptadas para todas las edades. Sin reserva previa ni calzado especial.",
    cta: "Ver precios",
    href: "/bolera-y-precios",
    accent: "brand-red",
    wide: false,
  },
  {
    tag: "Cumpleaños",
    title: "Fiestas y Celebraciones",
    desc: "Paquetes todo incluido para infantiles y adultos. Zona reservada.",
    cta: "Reservar",
    href: "/cumpleanos-y-celebraciones",
    accent: "brand-blue",
    wide: false,
  },
  {
    tag: "Irish Pub",
    title: "Dublin House · El único Irish Pub dentro de una bolera en la zona",
    desc: "Cervezas importadas, cócteles y ambiente auténtico irlandés mientras juegas o descansas.",
    cta: "Descubrir",
    href: "/irish-pub-y-bar",
    accent: "brand-green",
    wide: true,
  },
  {
    tag: "Arcade",
    title: "Máquinas Arcade y Juegos",
    desc: "Simuladores, redemption, billar, futbolín. Sistema de tickets y premios.",
    cta: "Explorar",
    href: "/arcade-y-juegos",
    accent: "brand-coral",
    wide: false,
  },
];

const accentMap = {
  "brand-red": "text-brand-red border-brand-red",
  "brand-blue": "text-brand-blue border-brand-blue",
  "brand-green": "text-brand-green border-brand-green",
  "brand-coral": "text-brand-coral border-brand-coral",
};

export function Layout370() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Servicios</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase">
            Todo lo que buscas
          </h2>
          <p className="mt-4 text-brand-navy/60 md:text-md max-w-md mx-auto">
            Elige tu diversión favorita en Bowling Pleno Zenia
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className={`group flex flex-col border-2 border-brand-navy/10 hover:border-brand-navy transition-all duration-300 hover:shadow-lg ${s.wide ? "sm:col-span-2" : ""}`}
            >
              {/* Image placeholder */}
              <div className="relative overflow-hidden bg-brand-blue-light aspect-video">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${accentMap[s.accent].split(" ")[0]}`}>
                    {s.tag}
                  </p>
                  <h3 className="text-xl font-black uppercase leading-tight mb-2 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-red transition-colors">
                  {s.cta} <RxChevronRight className="size-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
