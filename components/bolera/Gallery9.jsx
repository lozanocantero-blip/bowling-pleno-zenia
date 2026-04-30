"use client";

import React from "react";

const photos = [
  {
    src: "/images/bolera-orihuela-costa-10-pistas.jpg",
    alt: "10 pistas de bowling Bowling Pleno Zenia Orihuela Costa Zenia Boulevard",
    span: "row-span-2",
  },
  {
    src: "/images/bolera-pistas.jpg",
    alt: "Pistas de bolera iluminadas Bowling Pleno Zenia Orihuela Costa",
  },
  {
    src: "/images/bolera.jpeg",
    alt: "Sala de bowling familiar Bowling Pleno Zenia Zenia Boulevard Orihuela Costa Alicante",
  },
];

export function Gallery9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Galería</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Nuestras Pistas</h2>
          <p className="text-brand-navy/60 md:text-md">
            10 pistas de bowling profesionales en Bowling Pleno Zenia — Orihuela Costa
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr] md:gap-4">
          <div className="row-span-2 overflow-hidden bg-brand-blue-light">
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="size-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
          </div>
          {photos.slice(1).map((p, i) => (
            <div key={i} className="overflow-hidden bg-brand-blue-light">
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
