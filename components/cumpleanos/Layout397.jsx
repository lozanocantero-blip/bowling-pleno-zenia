"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const items = [
  { icon: "🎳", tag: "Actividad", title: "Partida de bolos para todos", desc: "Acceso a las pistas el tiempo que necesites durante tu fiesta." },
  { icon: "🍕", tag: "Niños", title: "Merienda y refresco incluido", desc: "Sándwiches, patatas y bebidas para todos los asistentes." },
  { icon: "🏷️", tag: "Privacidad", title: "Zona reservada solo para vosotros", desc: "Espacio privado sin interrupciones de otros grupos." },
  { icon: "🕹️", tag: "Extras", title: "Máquinas arcade en packs completos", desc: "Acceso a todos los juegos y sistema de tickets canjeable." },
  { icon: "🍺", tag: "Adultos", title: "Bebidas y ambiente del Irish Pub", desc: "Cervezas, refrescos y comida mientras juegas o celebras." },
  { icon: "👋", tag: "Servicio", title: "Atención personalizada durante la fiesta", desc: "Nuestro equipo está presente durante toda la celebración." },
];

export function Layout397() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Incluido</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Lo que traemos a tu fiesta</h2>
          <p className="text-brand-navy/60 md:text-md">Cada paquete viene completo y listo — sin sorpresas</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="border-2 border-brand-navy/10 hover:border-brand-navy transition-colors p-6 md:p-8">
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{item.tag}</p>
              <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
              <p className="text-brand-navy/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
