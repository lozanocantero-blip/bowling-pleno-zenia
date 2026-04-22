"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative px-[5%] py-20 md:py-28 lg:py-36 overflow-hidden" style={{background:"#1a3d1a"}}>
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="label-red mb-4">Dublin House · Irish Pub</p>
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl uppercase leading-none mb-6">
            El único Irish Pub dentro de una bolera en la zona
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl">
            Cervezas importadas, cócteles y ambiente auténtico irlandés.
            Paredes de ladrillo, música y buenas conversaciones en Zenia Boulevard.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
              className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
              Reservar mesa
            </a>
            <a href="#ambiente"
              className="border-2 border-white text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-navy transition-colors">
              Descubrir
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover opacity-10" alt="Dublin House Irish Pub Orihuela Costa" />
      </div>
    </section>
  );
}
