"use client";

import React from "react";

const photos = [
  {
    src: "/images/arcade-orihuela-costa-maquinas-recreativas.png",
    alt: "Máquinas recreativas arcade Bowling Pleno Zenia Orihuela Costa Zenia Boulevard",
    span: "row-span-2",
  },
  {
    src: "/images/arcade-hero.jpg",
    alt: "Sala de arcade y juegos recreativos Bowling Pleno Zenia Orihuela Costa",
  },
  {
    src: "/images/arcade.png",
    alt: "Zona arcade familiar Bowling Pleno Zenia Zenia Boulevard Orihuela Costa",
  },
  {
    src: "/images/arcade-tickets.jpg",
    alt: "Sistema de tickets máquinas arcade Bowling Pleno Zenia Orihuela Costa",
  },
  {
    src: "/images/arcade-premios.jpg",
    alt: "Premios y regalos canjeables con tickets arcade Bowling Pleno Zenia Orihuela Costa",
  },
];

export function Gallery9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Galería</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">La Sala Arcade</h2>
          <p className="text-brand-navy/60 md:text-md">
            Simuladores, tickets, premios y mucho más en Bowling Pleno Zenia — Orihuela Costa
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr_1fr] md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`overflow-hidden bg-brand-blue-light ${p.span || ""}`}>
              <img
                src={p.src}
                alt={p.alt}
                className="size-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
