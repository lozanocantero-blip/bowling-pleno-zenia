"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const cards = [
  {
    tag: "Comodidad",
    title: "Toma algo mientras esperas tu pista",
    desc: "No necesitas estar jugando para disfrutar del pub.",
    wide: true,
  },
  {
    tag: "Grupos",
    title: "Perfecto para reuniones",
    desc: "Reserva tu zona y disfruta con amigos.",
    wide: false,
  },
  {
    tag: "Café & Descanso",
    title: "El mejor café mientras juegas o descansas",
    desc: "Cappuccinos, cafés con leche y mucho más. Tómate un respiro con estilo.",
    wide: false,
    img: "/cafe-cappuccino-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg",
    imgAlt: "Café cappuccino Dublin House Irish Pub Bowling Pleno Zenia Orihuela Costa",
  },
];

export function Layout369() {
  return (
    <section id="ambiente" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Ambiente</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Espacio auténtico para adultos</h2>
          <p className="text-brand-navy/60 md:text-md max-w-md mx-auto">
            Paredes de ladrillo, música en vivo algunos fines de semana, luz cálida y la mejor selección de cervezas
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div key={i} className={`bg-white border-2 border-brand-navy/10 hover:border-brand-navy transition-colors overflow-hidden ${c.wide ? "sm:col-span-2 flex flex-col sm:flex-row" : ""}`}>
              <div className={`${c.wide ? "sm:w-1/2" : "w-full"} overflow-hidden bg-brand-blue-light aspect-video`}>
                <img src={c.img || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  alt={c.imgAlt || c.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{c.tag}</p>
                <h3 className="text-xl font-black uppercase mb-2">{c.title}</h3>
                <p className="text-brand-navy/60 text-sm mb-4">{c.desc}</p>
                <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-bold text-brand-navy hover:text-brand-red transition-colors">
                  Reservar <RxChevronRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
