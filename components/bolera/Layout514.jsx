"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const features = [
  {
    num: "01",
    title: "Sin calzado obligatorio",
    desc: "Puedes jugar con tus propios zapatos. No necesitas alquilar ni comprar nada especial para disfrutar.",
    tag: "Comodidad",
  },
  {
    num: "02",
    title: "Bolas de varios pesos",
    desc: "Desde las más ligeras para niños hasta las estándar para adultos. Tenemos el peso adecuado para cada jugador.",
    tag: "Equipamiento",
  },
  {
    num: "03",
    title: "Bumpers para los más pequeños",
    desc: "Instalamos las guías para que los niños siempre lleguen al final de la pista. La diversión está garantizada.",
    tag: "Familiar",
  },
  {
    num: "04",
    title: "Hasta 6 jugadores por pista",
    desc: "Cada pista admite hasta 6 jugadores simultáneos. Ideal para grupos familiares y salidas de empresa.",
    tag: "Grupos",
  },
];

export function Layout514() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* Sticky text */}
          <div className="lg:sticky lg:top-24">
            <p className="label-red mb-3">Lo que ofrecemos</p>
            <h2 className="text-5xl md:text-7xl uppercase leading-none mb-6">
              ¿Qué incluye una pista?
            </h2>
            <p className="text-brand-navy/60 md:text-md mb-8 max-w-md">
              Las pistas están equipadas con todo lo esencial para que disfrutes sin preocupaciones.
              Ven cuando quieras — sin reserva previa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/bolera-y-precios#tarifas"
                className="border-2 border-brand-navy text-brand-navy px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                Ver tarifas
              </a>
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline">
                WhatsApp <RxChevronRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-0 divide-y divide-brand-navy/10">
            {features.map((f) => (
              <div key={f.num} className="py-6 flex gap-4">
                <span className="text-4xl font-black text-brand-navy/10 shrink-0 w-12">{f.num}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{f.tag}</p>
                  <h3 className="text-xl font-black uppercase mb-2">{f.title}</h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
