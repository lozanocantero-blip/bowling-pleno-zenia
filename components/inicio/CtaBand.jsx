"use client";

import React from "react";

export function CtaBand() {
  return (
    <section
      aria-label="Reservar en Bowling Pleno Zenia — sin reserva previa en Orihuela Costa"
      className="relative overflow-hidden px-[5%] py-14 md:py-16"
      style={{ background: "#1A2744" }}
    >
      {/* Decorative bowling pin pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='45' font-size='40'%3E🎳%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">
        <div>
          <p
            className="mb-2 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "#E82040" }}
          >
            ¿Listo para jugar?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Sin reserva · Sin calzado especial<br className="hidden md:block" />
            <span style={{ color: "#E82040" }}> Solo visítanos y juega</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          <a
            href="https://wa.me/34965355815"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:scale-105"
            style={{ background: "#E82040", letterSpacing: "0.12em" }}
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
          <a
            href="tel:+34965355815"
            className="rounded-full inline-flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-white hover:text-white"
          >
            📞 965 35 58 15
          </a>
        </div>
      </div>
    </section>
  );
}
