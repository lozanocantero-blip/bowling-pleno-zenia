"use client";

import React from "react";

export function Header83() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Video background — loop infinito, sin sonido */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src="/hero-bowling.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient overlay para legibilidad del texto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(26,39,68,0.25) 0%, transparent 35%, rgba(26,39,68,0.55) 62%, rgba(26,39,68,0.96) 100%)",
        }}
      />

      {/* Contenido — z-10 */}
      <div
        className="relative h-full flex flex-col px-[5%]"
        style={{ zIndex: 10 }}
      >
        {/* Logo centrado verticalmente en la mitad superior */}
        <div className="flex-1 flex items-center justify-start">
          <img
            src="/logo-hero.png"
            alt="Bowling Pleno Zenia"
            className="w-auto select-none pointer-events-none"
            style={{
              height: "clamp(140px, 18vw, 240px)",
              filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))",
            }}
            draggable={false}
          />
        </div>

        {/* Texto y CTAs — pegados al fondo */}
        <div className="pb-16 w-full">
          <p
            className="mb-5"
            style={{
              color: "#E82040",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontFamily: "var(--font-heading)",
            }}
          >
            Zenia Boulevard · Orihuela Costa · Abiertos 365 días
          </p>
          <h1
            className="mb-6 text-white uppercase"
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(4rem, 11vw, 10.5rem)",
              lineHeight: 0.86,
              letterSpacing: "-0.03em",
            }}
          >
            La bolera de<br />
            <span style={{ color: "#E82040" }}>Orihuela Costa</span>
          </h1>
          <p
            className="mb-8 max-w-xl text-white/50"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            10 pistas · Irish Pub · Arcade · Cumpleaños
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/cumpleanos-y-celebraciones"
              className="inline-block rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors"
              style={{ background: "#E82040" }}
            >
              Reservar cumpleaños
            </a>
            <a
              href="/bolera-y-precios"
              className="inline-block rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1A2744] transition-colors"
            >
              Ver precios
            </a>
            <a
              href="#horarios"
              className="inline-block rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:border-white hover:text-white transition-colors"
            >
              Horarios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
