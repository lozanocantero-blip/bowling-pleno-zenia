"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const pasos = [
  {
    num: "01",
    tag: "Uno",
    title: "Elige el paquete que te conviene",
    desc: "Infantil básico, completo con arcade o el pack adultos con Irish Pub.",
  },
  {
    num: "02",
    tag: "Dos",
    title: "Confirma fecha y número de personas",
    desc: "Nos encargamos de reservar tu zona y prepararlo todo con antelación.",
  },
  {
    num: "03",
    tag: "Tres",
    title: "Llega y disfruta sin preocupaciones",
    desc: "Todo está listo. Tú solo tienes que disfrutar con los tuyos.",
  },
];

export function Layout395() {
  return (
    <section className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28 section-dark">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Proceso</p>
          <h2 className="text-white text-5xl md:text-7xl uppercase leading-none mb-4">Tres pasos para tu fiesta</h2>
          <p className="text-white/60 md:text-md">Reservar es simple y rápido</p>
        </div>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-3">
          {pasos.map((p, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 transition-colors p-8 md:p-10 border border-white/10">
              <span className="text-6xl font-black text-white/10 block mb-4">{p.num}</span>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">{p.tag}</p>
              <h3 className="text-white text-xl font-black uppercase mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-brand-red text-white px-10 py-4 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
            Empezar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
