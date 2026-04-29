"use client";

import React from "react";

const serviceStrip = [
  { label: "🎳 Bolera",     color: "#E82040", bg: "rgba(232,32,64,0.12)",  href: "/bolera-y-precios"           },
  { label: "🕹️ Arcade",    color: "#FF7043", bg: "rgba(255,112,67,0.12)", href: "/arcade-y-juegos"            },
  { label: "🍺 Dublin House", color: "#2A6E4E", bg: "rgba(42,110,78,0.12)", href: "/irish-pub-y-bar"           },
  { label: "🎂 Cumpleaños", color: "#0072CE", bg: "rgba(0,114,206,0.12)",  href: "/cumpleanos-y-celebraciones" },
];

export function Header83() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", background: "#1A2744" }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 9,
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(26,39,68,0.6) 62%, rgba(26,39,68,0.97) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col px-[5%]" style={{ zIndex: 10 }}>

        {/* Logo */}
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

        {/* Text + CTAs */}
        <div className="pb-16 w-full">

          {/* Service strip — the Maxima "world per program" signal */}
          <div className="flex flex-wrap gap-2 mb-7">
            {serviceStrip.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                style={{
                  background: s.bg,
                  color: s.color,
                  border: `1px solid ${s.color}55`,
                  backdropFilter: "blur(6px)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>

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
              className="inline-block px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white"
              style={{ background: "#E82040" }}
            >
              Reservar cumpleaños
            </a>
            <a
              href="/bolera-y-precios"
              className="inline-block border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1A2744] transition-colors"
            >
              Ver precios
            </a>
            <a
              href="#horarios"
              className="inline-block border-2 border-white/50 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:border-white hover:text-white transition-colors"
            >
              Horarios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
