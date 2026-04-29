"use client";

import React from "react";

// Cumpleaños accent: brand-blue #0072CE
export function Header60() {
  return (
    <section className="relative overflow-hidden bg-brand-navy" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end" }}>

      <div className="absolute inset-0 z-0">
        <img
          src="/images/cumpleanos-hero.jpg"
          className="size-full object-cover"
          style={{ objectPosition: "center center" }}
          alt="Cumpleaños Bowling Pleno Zenia"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(26,39,68,0.1) 0%, rgba(26,39,68,0.1) 25%, rgba(26,39,68,0.5) 58%, rgba(26,39,68,0.97) 100%)"
        }} />
      </div>

      {/* Left color accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #0072CE 30%, #0072CE 70%, transparent)" }}
      />

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">

        {/* Colored service pill */}
        <div className="mb-5">
          <span
            className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(0,114,206,0.15)", color: "#60a5fa", border: "1px solid rgba(0,114,206,0.4)" }}
          >
            🎂 Cumpleaños y Celebraciones · Todo incluido
          </span>
        </div>

        <h1 className="ht-title mb-8">
          LA FIESTA<br />
          <span style={{ color: "#60a5fa" }}>PERFECTA</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          Paquetes todo incluido · Infantil y adultos · Zona reservada
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors"
            style={{ background: "#0072CE" }}>
            Reservar mi fiesta
          </a>
          <a href="#paquetes"
            className="rounded-full border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Ver paquetes
          </a>
        </div>
      </div>

    </section>
  );
}
