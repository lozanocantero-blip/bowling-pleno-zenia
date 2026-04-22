"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative px-[5%] py-20 md:py-28 lg:py-36 bg-brand-navy overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="label-red mb-4">Cumpleaños y Celebraciones</p>
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl uppercase leading-none mb-6">
            La fiesta perfecta para cualquier edad
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl">
            Paquetes todo incluido para cumpleaños infantiles y adultos.
            Zona reservada, comida, acceso a pistas y más — sin estrés.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
              className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
              Reservar mi fiesta
            </a>
            <a href="#paquetes"
              className="border-2 border-white text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-navy transition-colors">
              Ver paquetes
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover opacity-20" alt="Cumpleaños Bowling Pleno Zenia" />
      </div>
    </section>
  );
}
