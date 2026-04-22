"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const useRelume = () => {
  const { scrollYProgress } = useScroll();
  const opacityContent = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3.2, 1]);
  return { opacityContent, opacityOverlay, scale };
};

const CELLS = [
  { bg: "bg-brand-navy", opacity: "opacity-90" },
  { bg: "bg-[#0f1e3a]", opacity: "opacity-80" },
  { bg: "bg-brand-navy", opacity: "opacity-95" },
  { bg: "bg-[#162240]", opacity: "opacity-90" },
  { bg: "bg-[#0d1a33]", opacity: "opacity-85" },
  { bg: "bg-brand-navy", opacity: "opacity-90" },
  { bg: "bg-[#162240]", opacity: "opacity-85" },
  { bg: "bg-[#0f1e3a]", opacity: "opacity-95" },
  { bg: "bg-brand-navy", opacity: "opacity-90" },
];

export function Header83() {
  const { opacityContent, opacityOverlay, scale } = useRelume();

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Content overlay */}
        <motion.div
          className="relative z-20 flex h-full items-center justify-center"
          style={{ opacity: opacityContent }}
        >
          <div className="px-[5%] py-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
              Zenia Boulevard · Orihuela Costa · Abiertos 365 días
            </p>
            <h1 className="mb-6 text-white text-5xl md:text-8xl lg:text-9xl leading-none uppercase">
              La bolera de<br />Orihuela Costa
            </h1>
            <p className="mx-auto max-w-xl text-white/80 text-base md:text-lg mb-8">
              10 pistas de bowling, zona arcade y el único pub irlandés
              dentro de una bolera en toda la zona.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/cumpleanos-y-celebraciones"
                className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
                Reservar cumpleaños
              </a>
              <a href="/bolera-y-precios"
                className="border-2 border-white text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-navy transition-colors">
                Ver precios
              </a>
            </div>
          </div>
        </motion.div>

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-1 gap-y-1 md:grid-cols-3"
          >
            {CELLS.map((cell, i) => (
              <div
                key={i}
                className={`relative ${i === 1 || i === 4 || i === 7 ? "" : "hidden md:block"} ${i === 1 || i === 4 || i === 7 ? "block" : ""}`}
              >
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt={`Bowling Pleno Zenia ${i + 1}`}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className={`absolute inset-0 ${cell.bg} ${cell.opacity}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
