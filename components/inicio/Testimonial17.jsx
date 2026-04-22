"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const reviews = [
  {
    quote: "Pasamos un día increíble en familia. Las pistas están bien cuidadas y el personal muy atento. Sin duda volveremos.",
    author: "María García",
    role: "Visitante de Torrevieja",
    flag: "🇪🇸",
  },
  {
    quote: "El cumpleaños de mi hijo fue perfecto. Buena comida, ambiente genial y todo organizado sin estrés.",
    author: "Carlos López",
    role: "Padre de familia, Orihuela",
    flag: "🇬🇧",
  },
  {
    quote: "Único lugar en la zona donde puedes jugar a boliche y tomar una buena cerveza irlandesa. Muy recomendado.",
    author: "David Martín",
    role: "Cliente habitual",
    flag: "🇩🇪",
  },
];

export function Testimonial17() {
  return (
    <section className="bg-brand-blue-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Reseñas</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            +1.230 familias<br />ya nos visitaron
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <BiSolidStar key={i} className="size-5 text-yellow-400" />)}
            </div>
            <span className="font-bold text-brand-navy">4,3 en Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 md:p-8 border-t-4 border-brand-red flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <BiSolidStar key={j} className="size-4 text-yellow-400" />)}
                </div>
                <blockquote className="text-brand-navy/80 leading-relaxed mb-6">
                  "{r.quote}"
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand-blue-light flex items-center justify-center text-lg">
                  {r.flag}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{r.author}</p>
                  <p className="text-brand-navy/50 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-navy/40 text-xs mt-8 uppercase tracking-wider">
          Reseñas verificadas de Google Business
        </p>
      </div>
    </section>
  );
}
