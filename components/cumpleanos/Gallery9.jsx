"use client";

import React from "react";

export function Gallery9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Galería</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Momentos reales</h2>
          <p className="text-brand-navy/60 md:text-md">Celebraciones que ya hemos organizado en Zenia Boulevard</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-2 grid-rows-2 gap-3 md:auto-cols-auto md:grid-cols-[2fr_1fr_1fr] md:gap-4">
          <div className="col-start-1 col-end-2 row-start-1 row-end-3 overflow-hidden bg-brand-navy/10">
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Cumpleaños en Bowling Pleno Zenia 1"
              className="aspect-square size-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          {[2,3,4,5].map((n) => (
            <div key={n} className="overflow-hidden bg-brand-navy/10">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt={`Cumpleaños en Bowling Pleno Zenia ${n}`}
                className="aspect-square size-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
