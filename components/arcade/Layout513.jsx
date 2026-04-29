"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const maquinas = [
  {
    num: "01",
    title: "Simuladores",
    desc: "Conducción, motos y aventuras en primera persona. La adrenalina garantizada.",
    tag: "Acción",
  },
  {
    num: "02",
    title: "Redemption",
    desc: "Acumula tickets en cada partida y canjéalos por premios en nuestro catálogo.",
    tag: "Tickets",
  },
  {
    num: "03",
    title: "Billar",
    desc: "Mesas de billar profesionales disponibles por horas. Ideal para grupos.",
    tag: "Clásico",
  },
  {
    num: "04",
    title: "Futbolín",
    desc: "Compite en partidas rápidas de futbolín con amigos o familia. Siempre libre.",
    tag: "Familiar",
  },
];

export function Layout513() {
  return (
    <section id="maquinas" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="label-red mb-3">Máquinas</p>
            <h2 className="text-5xl md:text-7xl uppercase leading-none mb-6">Tenemos lo que buscas</h2>
            <p className="text-brand-navy/60 md:text-md mb-8 max-w-lg">
              Desde simuladores de conducción hasta máquinas arcade clásicas, nuestra zona de arcade en Orihuela Costa está diseñada para ofrecer diversión sin límites. Disfruta de una amplia selección de juegos recreativos para todas las edades, con opciones para competir, ganar premios y pasar un día inolvidable en Zenia Boulevard.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="border-2 border-brand-navy text-brand-navy px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                Ir a jugar
              </a>
              <a href="#sistema" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline">
                Sistema de tickets <RxChevronRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-brand-navy/10">
            {maquinas.map((m) => (
              <div key={m.num} className="py-6 flex gap-4">
                <span className="text-4xl font-black text-brand-navy/10 shrink-0 w-12">{m.num}</span>
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
