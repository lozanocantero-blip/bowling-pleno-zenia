"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";

const packs = [
  {
    id: "basico",
    nombre: "Pack Infantil Básico",
    desde: "89€",
    desc: "Para cumpleaños de niños con lo esencial cubierto.",
    incluye: ["Partida de bowling para todos","Merienda y bebidas","Zona reservada solo para vosotros","Atención personalizada"],
    cta: "Reservar",
    highlight: false,
  },
  {
    id: "completo",
    nombre: "Pack Infantil + Arcade",
    desde: "129€",
    desc: "Todo lo anterior más acceso libre a las máquinas arcade.",
    incluye: ["Todo del pack básico","Acceso a todas las máquinas arcade","Crédito de tickets incluido","Posibilidad de canjear premios"],
    cta: "Reservar",
    highlight: true,
  },
  {
    id: "adultos",
    nombre: "Pack Adultos con Pub",
    desde: "149€",
    desc: "Despedidas, cumpleaños adultos o reuniones de empresa.",
    incluye: ["Partida de bowling completa","Mesa reservada en Dublin House","Consumición incluida","Zona privada"],
    cta: "Reservar",
    highlight: false,
  },
];

export function Layout373() {
  return (
    <section id="paquetes" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Paquetes</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Elige tu paquete</h2>
          <p className="text-brand-navy/60 md:text-md max-w-md mx-auto">Cada celebración es diferente. Nosotros tenemos la opción adecuada para vosotros.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packs.map((p) => (
            <div key={p.id} className={`flex flex-col border-2 ${p.highlight ? "border-brand-red" : "border-brand-navy/10"} relative`}>
              {p.highlight && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-brand-red" />
              )}
              {p.highlight && (
                <div className="bg-brand-red text-white text-xs font-bold uppercase tracking-widest text-center py-1.5">
                  Más popular
                </div>
              )}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">{p.nombre}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs text-brand-navy/50 uppercase">Desde</span>
                    <span className="text-4xl font-black text-brand-navy">{p.desde}</span>
                  </div>
                  <p className="text-brand-navy/60 text-sm mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {p.incluye.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <BiCheck className="size-4 text-brand-green shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-navy/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                    className={`block text-center py-3 text-sm font-bold uppercase tracking-wider transition-colors ${p.highlight ? "bg-brand-red text-white hover:bg-red-700" : "bg-brand-navy text-white hover:bg-brand-red"}`}>
                    {p.cta}
                  </a>
                  <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-navy/50 hover:text-brand-red transition-colors">
                    Consultar por WhatsApp <RxChevronRight className="size-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-navy/40 text-xs mt-8">
          Precios orientativos. Contacta para un presupuesto personalizado según número de asistentes y fecha.
        </p>
      </div>
    </section>
  );
}
