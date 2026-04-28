"use client";

import React from "react";

const items = [
  "🎳 10 Pistas de Bowling",
  "⭐ 4,3 en Google",
  "💬 +1.230 Reseñas",
  "🍺 Dublin House Irish Pub",
  "🎮 Zona Arcade y Juegos",
  "🎂 Fiestas & Cumpleaños",
  "📅 Abiertos 365 Días",
  "🏆 El Único Irish Pub en una Bolera",
  "🅿️ Parking Gratuito",
  "🎳 Sin Reserva Previa",
];

export function StatsTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden bg-brand-red py-3 select-none"
      aria-hidden="true"
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "ticker-scroll 28s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-8 text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            {item}
            <span className="ml-8 text-white/30">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
