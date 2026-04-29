"use client";

import React from "react";

// Arcade accent: brand-coral #FF7043
export function Header60() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", background: "#0d0d20" }}>

      <div className="absolute inset-0 z-0">
        <img
          src="/images/arcade-hero.jpg"
          className="size-full object-cover"
          style={{ objectPosition: "center 40%" }}
          alt="Máquinas arcade con sistema de tickets en Bowling Pleno Zenia — Orihuela Costa"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(13,13,32,0.2) 0%, rgba(13,13,32,0.1) 30%, rgba(13,13,32,0.6) 60%, rgba(13,13,32,0.97) 100%)"
        }} />
      </div>

      {/* Left color accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #FF7043 30%, #FF7043 70%, transparent)" }}
      />

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">

        {/* Colored service pill */}
        <div className="mb-5">
          <span
            className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(255,112,67,0.15)", color: "#FF7043", border: "1px solid rgba(255,112,67,0.4)" }}
          >
            🕹️ Arcade y Juegos · Simuladores · Premios
          </span>
        </div>

        <h1 className="ht-title mb-8" style={{ "--accent-color": "#FF7043" }}>
          PURA<br />
          <span style={{ color: "#FF7043" }}>DIVERSIÓN</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          Simuladores · Redemption · Billar · Futbolín · Sistema de tickets
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors"
            style={{ background: "#FF7043" }}>
            Ir a jugar
          </a>
          <a href="#maquinas"
            className="rounded-full border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Ver máquinas
          </a>
        </div>
      </div>

    </section>
  );
}
