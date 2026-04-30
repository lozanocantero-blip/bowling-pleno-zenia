"use client";

import React from "react";
import { useTranslations } from "next-intl";



export function Timeline19() {
  const t = useTranslations("schedule");
  const horarios = [
    { periodo: t("seasons.baja.periodo"), nombre: t("seasons.baja.nombre"), detalle: [{ dias: t("seasons.baja.dias1"), horas: t("seasons.baja.horas1") }, { dias: t("seasons.baja.dias2"), horas: t("seasons.baja.horas2") }], icon: "❄️" },
    { periodo: t("seasons.santaSemana.periodo"), nombre: t("seasons.santaSemana.nombre"), detalle: [{ dias: t("seasons.santaSemana.dias1"), horas: t("seasons.santaSemana.horas1") }], icon: "🌸" },
    { periodo: t("seasons.alta.periodo"), nombre: t("seasons.alta.nombre"), detalle: [{ dias: t("seasons.alta.dias1"), horas: t("seasons.alta.horas1") }], icon: "☀️", highlight: true },
    { periodo: t("seasons.navidad.periodo"), nombre: t("seasons.navidad.nombre"), detalle: [{ dias: t("seasons.navidad.dias1"), horas: t("seasons.navidad.horas1") }], icon: "🎄" },
  ];
  return (
    <section id="horarios" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28 section-dark">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">{t("label")}</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(2.8rem, 7vw, 6.5rem)", lineHeight: 0.88, letterSpacing: "-0.03em", textTransform: "uppercase", color: "white" }}>
            {t("title")}
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
