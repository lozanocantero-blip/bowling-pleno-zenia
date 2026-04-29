"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative overflow-hidden bg-brand-navy" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end" }}>

      {/* Imagen hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bolera-pistas.jpg"
          className="size-full object-cover"
          style={{ objectPosition: "center center" }}
          alt="Pistas de bowling Orihuela Costa"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(26,39,68,0.15) 0%, rgba(26,39,68,0.1) 30%, rgba(26,39,68,0.55) 60%, rgba(26,39,68,0.96) 100%)"
        }} />
      </div>

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">
        <span className="ht-eyebrow">Bolera · 10 Pistas · Zenia Boulevard</span>
        <h1 className="ht-title mb-8">
          10 PISTAS<br />
          <span className="accent">DE BOWLING</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          Sin reserva previa · Sin calzado especial · Bumpers para niños
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
            Reservar ahora
          </a>
          <a href="#tarifas"
            className="border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Ver tarifas
          </a>
        </div>
      </div>

    </section>
  );
}
