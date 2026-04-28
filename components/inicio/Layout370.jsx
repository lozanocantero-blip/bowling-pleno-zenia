"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    tag: "Bolera",
    title: "Bowling — 10 Pistas",
    desc: "Adaptadas para todas las edades. Sin reserva previa ni calzado especial.",
    cta: "Ver precios",
    href: "/bolera-y-precios",
    color: "#E82040",
    img: "/images/bolera.jpeg",
    wide: false,
    badge: null,
  },
  {
    tag: "Arcade",
    title: "Máquinas Arcade y Juegos",
    desc: "Simuladores, redemption, billar, futbolín. Sistema de tickets y premios.",
    cta: "Explorar",
    href: "/arcade-y-juegos",
    color: "#FF7043",
    img: "/images/arcade.png",
    wide: false,
    badge: null,
  },
  {
    tag: "Irish Pub",
    title: "Dublin House",
    desc: "Cervezas importadas, cócteles y ambiente auténtico irlandés mientras juegas o descansas.",
    cta: "Descubrir el pub",
    href: "/irish-pub-y-bar",
    color: "#2A6E4E",
    img: "/images/irishpub.jpeg",
    wide: true,
    badge: "ÚNICO EN LA ZONA",
  },
  {
    tag: "Cumpleaños",
    title: "Fiestas & Celebraciones",
    desc: "Paquetes todo incluido para infantiles y adultos. Zona reservada.",
    cta: "Reservar ahora",
    href: "/cumpleanos-y-celebraciones",
    color: "#0072CE",
    img: null,
    wide: false,
    badge: null,
  },
];

function CumpleBg() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1A2744 40%, #0d3a7a 100%)",
      }}
    >
      {/* Big emoji icons scattered */}
      {["🎂", "🎈", "🎉", "🎊", "🎳"].map((e, i) => (
        <span
          key={i}
          className="absolute text-4xl opacity-20 pointer-events-none select-none"
          style={{
            top: `${[15, 55, 25, 70, 45][i]}%`,
            left: `${[10, 80, 50, 20, 65][i]}%`,
            transform: `rotate(${[-15, 20, -5, 10, -20][i]}deg) scale(${[1.2, 0.9, 1.4, 1, 1.1][i]})`,
            animation: `float-${i} ${3 + i * 0.5}s ease-in-out infinite alternate`,
          }}
        >
          {e}
        </span>
      ))}
      <span className="relative z-10 text-6xl drop-shadow-lg">🎂</span>
      <p
        className="relative z-10 mt-3 text-xs font-black uppercase tracking-[0.2em] text-white/60"
      >
        Celebra con nosotros
      </p>
      <style>{`
        @keyframes float-0 { to { transform: rotate(-10deg) scale(1.3) translateY(-6px); } }
        @keyframes float-1 { to { transform: rotate(25deg) scale(0.85) translateY(-8px); } }
        @keyframes float-2 { to { transform: rotate(-2deg) scale(1.5) translateY(-5px); } }
        @keyframes float-3 { to { transform: rotate(15deg) scale(1.1) translateY(-7px); } }
        @keyframes float-4 { to { transform: rotate(-15deg) scale(1.2) translateY(-6px); } }
      `}</style>
    </div>
  );
}

export function Layout370() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Servicios</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase">
            Todo lo que buscas
          </h2>
          <p className="mt-4 text-brand-navy/60 md:text-md max-w-md mx-auto">
            Elige tu diversión favorita en Bowling Pleno Zenia
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className={`group relative flex flex-col border-2 border-brand-navy/10 hover:border-brand-navy transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${s.wide ? "sm:col-span-2" : ""}`}
            >
              {/* Badge */}
              {s.badge && (
                <div className="absolute top-3 right-3 z-20">
                  <span
                    className="inline-block text-[10px] font-black uppercase tracking-[0.15em] text-white px-2.5 py-1"
                    style={{
                      background: "#E82040",
                      boxShadow: "0 2px 8px rgba(232,32,64,0.5)",
                      animation: "pulse-badge 2s ease-in-out infinite",
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
              )}

              <div className="relative overflow-hidden bg-brand-blue-light aspect-video">
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <CumpleBg />
                )}
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `${s.color}22` }}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: s.color }}>
                    {s.tag}
                  </p>
                  <h3 className="text-xl font-black uppercase leading-tight mb-2 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-navy group-hover:gap-2 transition-all" style={{ color: s.color }}>
                  {s.cta} <RxChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 2px 8px rgba(232,32,64,0.5); }
          50% { box-shadow: 0 2px 16px rgba(232,32,64,0.85), 0 0 0 4px rgba(232,32,64,0.15); }
        }
      `}</style>
    </section>
  );
}
