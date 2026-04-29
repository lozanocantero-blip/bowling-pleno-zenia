"use client";

import React from "react";

// Irish Pub accent: brand-green #2A6E4E
export function Header60() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", background: "#0d1f0d" }}>

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

      {/* Left color accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 w-1"
        style={{ background: "linear-gradient(to bottom, transparent, #2A6E4E 30%, #2A6E4E 70%, transparent)" }}
      />

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">

        {/* Colored service pill */}
        <div className="mb-5">
          <span
            className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(42,110,78,0.2)", color: "#4ade80", border: "1px solid rgba(42,110,78,0.5)" }}
          >
            🍀 Dublin House · Irish Pub · Único en la zona
          </span>
        </div>

        <h1 className="ht-title mb-8">
          DUBLIN<br />
          <span style={{ color: "#4ade80" }}>HOUSE</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          El único Irish Pub dentro de una bolera · Cervezas importadas · Cócteles
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors"
            style={{ background: "#2A6E4E" }}>
            Reservar mesa
          </a>
          <a href="#ambiente"
            className="rounded-full border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            Descubrir
          </a>
        </div>
      </div>

    </section>
  );
}
