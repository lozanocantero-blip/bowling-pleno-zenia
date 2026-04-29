"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", background: "#0d0d20" }}>

      {/* Imagen hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/arcade.png"
          className="size-full object-cover"
          style={{ objectPosition: "center center" }}
          alt="Arcade Bowling Pleno Zenia"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(13,13,32,0.2) 0%, rgba(13,13,32,0.1) 30%, rgba(13,13,32,0.6) 60%, rgba(13,13,32,0.97) 100%)"
        }} />
      </div>

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">
        <span className="ht-eyebrow">Arcade y Juegos · Simuladores · Premios</span>
        <h1 className="ht-title mb-8">
          PURA<br />
          <span className="accent">DIVERSIÓN</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          Simuladores · Redemption · Billar · Futbolín · Sistema de tickets
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
            Ir a jugar
          </a>
          <a href="#maquinas"
            className="border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Ver máquinas
          </a>
        </div>
      </div>

    </section>
  );
}
