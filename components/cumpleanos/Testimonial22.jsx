"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const reviews = [
  {
    quote: "Mi hijo no paró de hablar de su cumpleaños en Pleno Zenia. La zona reservada fue perfecta y el equipo muy atento.",
    author: "María García",
    role: "Madre de dos niños",
    stars: 5,
  },
  {
    quote: "Celebramos una despedida de soltero aquí. El Irish pub, las pistas y el ambiente fueron exactamente lo que buscábamos.",
    author: "Carlos Martínez",
    role: "Organizador de eventos",
    stars: 5,
  },
  {
    quote: "Buena comida, bolos sin presión y un sitio donde los adultos también nos divertimos. Volveremos seguro.",
    author: "Ana López",
    role: "Visitante habitual",
    stars: 5,
  },
];

export function Testimonial22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="label-red mb-3">Familias</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none">Lo que dicen</h2>
          <p className="text-brand-navy/60 mt-2 md:text-md">Familias que celebraron aquí · Reseñas verificadas</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 border-t-4 border-brand-red flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.stars)].map((_, j) => <BiSolidStar key={j} className="size-4 text-yellow-400" />)}
              </div>
              <blockquote className="text-brand-navy/80 leading-relaxed mb-6 flex-1">
                "{r.quote}"
              </blockquote>
              <div>
                <p className="font-black uppercase text-sm tracking-wider">{r.author}</p>
                <p className="text-brand-navy/50 text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
