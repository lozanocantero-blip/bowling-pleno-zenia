"use client";

import React from "react";

const horarios = [
  {
    periodo: "Enero — Junio",
    nombre: "Temporada Baja",
    detalle: [
      { dias: "Lunes a Viernes", horas: "14:00 — 23:30" },
      { dias: "Sáb, Dom y Festivos", horas: "12:00 — 00:00" },
    ],
    icon: "❄️",
  },
  {
    periodo: "30 Mar — 12 Abr",
    nombre: "Semana Santa",
    detalle: [
      { dias: "Todos los días", horas: "12:00 — 00:00" },
    ],
    icon: "🌸",
  },
  {
    periodo: "Julio — Agosto",
    nombre: "Temporada Alta",
    detalle: [
      { dias: "Todos los días", horas: "11:00 — 01:00" },
    ],
    icon: "☀️",
    highlight: true,
  },
  {
    periodo: "22 Dic — 06 Ene",
    nombre: "Navidad",
    detalle: [
      { dias: "Todos los días", horas: "12:00 — 00:00" },
    ],
    icon: "🎄",
  },
];

export function Timeline19() {
  return (
    <section className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28 section-dark">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Horarios</p>
          <h2 className="text-white text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            Abiertos los 365 días del año
          </h2>
          <p className="mt-4 text-white/60 md:text-md max-w-lg mx-auto">
            Los horarios varían según la temporada. Consulta cuál corresponde a tu visita.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8">
            <a href="tel:+34965355815"
              className="border-2 border-white text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-colors">
              Llamar
            </a>
            <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
              className="bg-brand-red text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {horarios.map((h, i) => (
            <div
              key={i}
              className={`relative p-6 md:p-8 border border-white/10 ${h.highlight ? "bg-white/10" : "bg-white/5"} hover:bg-white/10 transition-colors`}
            >
              {h.highlight && (
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-0.5">
                  Temporada alta
                </span>
              )}
              <div className="text-3xl mb-4">{h.icon}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{h.periodo}</p>
              <h3 className="text-white text-xl font-black uppercase mb-4">{h.nombre}</h3>
              <div className="space-y-2">
                {h.detalle.map((d, j) => (
                  <div key={j} className="flex flex-col">
                    <span className="text-white/50 text-xs uppercase tracking-wide">{d.dias}</span>
                    <span className="text-white font-bold text-lg">{d.horas}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
