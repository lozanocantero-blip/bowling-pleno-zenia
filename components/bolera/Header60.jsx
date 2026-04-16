"use client";

import React from "react";

export function Header60() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold text-text-alternative md:text-9xl lg:text-10xl">
              ¿Cómo son las pistas de bowling de Orihuela Costa?
            </h1>
          </div>
          <div>
            <p className="text-text-alternative md:text-md">
              10 pistas en Bowling Pleno Zenia. Bolas de diferentes pesos,
              bumpers para los más pequeños y sin necesidad de calzado especial.
              Ven cuando quieras — sin reserva previa.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
