"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function StatsTicker() {
  const t = useTranslations("ticker");
  const items = t.raw("items");
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
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
