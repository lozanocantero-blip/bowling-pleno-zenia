"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
          <div>
            <p className="label-red mb-4">Bebidas</p>
            <h2 className="text-5xl md:text-7xl uppercase leading-none mb-6">
              Cervezas y bebidas de calidad
            </h2>
            <p className="text-brand-navy/60 mb-6 md:text-md">
              Una selección cuidada de cervezas importadas y bebidas premium.
              Lo que no encontrarás en ningún otro local de la costa.
            </p>
            <ul className="space-y-3 mb-8">
              {["Cervezas irlandesas auténticas de barril","Bebidas internacionales variadas","Cócteles y tragos especiales","Café y bebidas sin alcohol"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BiCheck className="size-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-brand-navy/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="border-2 border-brand-navy text-brand-navy px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                Reservar mesa
              </a>
              <a href="#ambiente"
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline">
                Ver ambiente <RxChevronRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden bg-brand-blue-light aspect-square md:aspect-auto md:h-[480px]">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="Cervezas Dublin House Irish Pub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
