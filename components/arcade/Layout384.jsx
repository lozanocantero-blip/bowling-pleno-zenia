"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout384() {
  return (
    <section id="sistema" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Sistema</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Cómo jugar y ganar</h2>
          <p className="text-brand-navy/60 md:text-md">Cada máquina funciona con monedas o tarjeta recargable</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="bg-white border-2 border-brand-navy/10 hover:border-brand-navy transition-colors overflow-hidden flex flex-col">
            <div className="overflow-hidden bg-brand-blue-light aspect-video">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Tickets arcade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Tickets</p>
              <h3 className="text-2xl font-black uppercase mb-2">Acumula puntos mientras juegas</h3>
              <p className="text-brand-navy/60 text-sm mb-4 flex-1">Gana tickets en cada partida según tu desempeño. Cuanto mejor juegas, más ganas.</p>
              <a href="#" className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-navy hover:text-brand-red transition-colors">
                Saber más <RxChevronRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="bg-brand-navy text-white border-2 border-brand-navy overflow-hidden flex flex-col lg:col-span-2">
            <div className="overflow-hidden bg-brand-navy/50 aspect-video">
              <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Premios arcade" className="w-full h-full object-cover opacity-50 hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col section-dark">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Premios</p>
              <h3 className="text-white text-2xl font-black uppercase mb-2">Canjea tus tickets por regalos</h3>
              <p className="text-white/60 text-sm mb-4 flex-1">Elige entre nuestro catálogo de premios. Desde pequeños detalles hasta artículos especiales.</p>
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-brand-red text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center">
                Ver catálogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
