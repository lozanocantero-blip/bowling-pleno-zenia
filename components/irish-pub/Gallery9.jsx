"use client";

import React from "react";

export function Gallery9() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Galería</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">El Dublin House</h2>
          <p className="text-brand-navy/60 md:text-md">Así es el Irish Pub dentro de Bowling Pleno Zenia</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[2fr_1fr_1fr] md:gap-4">
          <div className="row-span-2 overflow-hidden bg-brand-blue-light">
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Dublin House Irish Pub 1" className="size-full object-cover aspect-square hover:scale-105 transition-transform duration-500" />
          </div>
          {[2,3,4,5].map((n) => (
            <div key={n} className="overflow-hidden bg-brand-blue-light">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt={`Dublin House ${n}`} className="aspect-square size-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
