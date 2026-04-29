"use client";

import React from "react";

export function Header60() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", background: "#0d1f0d" }}>

      {/* Imagen hero — placeholder hasta recibir imagen del cliente */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/irishpub.jpeg"
          className="size-full object-cover"
          style={{ objectPosition: "center center" }}
          alt="Dublin House Irish Pub Orihuela Costa"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(10,26,10,0.2) 0%, rgba(10,26,10,0.15) 30%, rgba(10,26,10,0.6) 60%, rgba(10,26,10,0.97) 100%)"
        }} />
      </div>

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">
        <span className="ht-eyebrow">Dublin House · Irish Pub · Único en la zona</span>
        <h1 className="ht-title mb-8">
          DUBLIN<br />
          <span className="accent">HOUSE</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          El único Irish Pub dentro de una bolera · Cervezas importadas · Cócteles
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
            Reservar mesa
          </a>
          <a href="#ambiente"
            className="border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Descubrir
          </a>
        </div>
      </div>

    </section>
  );
}
