"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function CtaBand() {
  const t = useTranslations("cta");
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
            {t("label")}
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
            {t("title")}<br className="hidden md:block" />
            <span style={{ color: "#E82040" }}> {t("titleRed")}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          <a
            href="/contacto"
            className="rounded-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:scale-105"
            style={{ background: "#E82040", letterSpacing: "0.12em" }}
          >
            {t("whatsapp")}
          </a>
          <a
            href="tel:+34965355815"
            className="rounded-full inline-flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white/80 transition-colors hover:border-white hover:text-white"
          >
            {t("phone")}
          </a>
        </div>
      </div>
    </section>
  );
}
