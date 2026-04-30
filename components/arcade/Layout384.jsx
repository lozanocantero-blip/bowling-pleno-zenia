"use client";

import React from "react";

export function Layout384() {
  return (
    <section id="sistema" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="label-red mb-3">Sistema</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Cómo jugar y ganar</h2>
          <p className="text-brand-navy/60 md:text-md">Juega, acumula tickets y canjéalos por premios en nuestra sala arcade</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Tarjeta Tickets — foto máquina contadora */}
          <div className="bg-white border-2 border-brand-navy/10 hover:border-brand-navy transition-colors overflow-hidden flex flex-col">
            <div className="overflow-hidden aspect-video">
              <img
                src="/images/arcade-tickets.jpg"
                alt="Máquina contadora de tickets en el arcade de Bowling Pleno Zenia — Orihuela Costa"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Tickets</p>
              <h3 className="text-2xl font-black uppercase mb-2">Acumula puntos mientras juegas</h3>
              <p className="text-brand-navy/60 text-sm flex-1">
                Gana tickets en cada partida según tu desempeño. Cuanto mejor juegas, más acumulas. Disponible en todas las máquinas arcade de nuestra sala en Bowling Pleno Zenia, Orihuela Costa.
              </p>
            </div>
          </div>

          {/* Tarjeta Premios — foto peluches */}
          <div className="bg-brand-navy text-white border-2 border-brand-navy overflow-hidden flex flex-col lg:col-span-2">
            <div className="overflow-hidden aspect-video">
              <img
                src="/images/arcade-premios.jpg"
                alt="Premios canjeables por tickets en el arcade de Bowling Pleno Zenia — peluches y regalos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col section-dark">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Premios</p>
              <h3 className="text-white text-2xl font-black uppercase mb-2">Canjea tus tickets por regalos</h3>
              <p className="text-white/60 text-sm">
                Elige entre nuestro catálogo de premios en Zenia Boulevard, Orihuela Costa. Desde peluches y juguetes hasta artículos especiales — cuantos más tickets, mejor el premio.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
