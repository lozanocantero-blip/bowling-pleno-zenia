"use client";
import React from "react";
import { useTranslations } from "next-intl";

export function Header60() {
  const t = useTranslations("bolera_page.header");
  return (
    <section className="relative overflow-hidden bg-brand-navy" style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end" }}>
      <div className="absolute inset-0 z-0">
        <img src="/images/bolera-pistas.jpg" className="size-full object-cover" style={{ objectPosition: "center center" }} alt="Pistas de bowling Orihuela Costa" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,39,68,0.15) 0%, rgba(26,39,68,0.1) 30%, rgba(26,39,68,0.55) 60%, rgba(26,39,68,0.96) 100%)" }} />
      </div>
      <div className="absolute left-0 top-0 bottom-0 z-10 w-1" style={{ background: "linear-gradient(to bottom, transparent, #E82040 30%, #E82040 70%, transparent)" }} />
      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">
        <div className="mb-5">
          <span className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider" style={{ background: "rgba(232,32,64,0.15)", color: "#E82040", border: "1px solid rgba(232,32,64,0.4)" }}>
            {t("pill")}
          </span>
        </div>
        <h1 className="ht-title mb-8">
          {t("h1")}<br />
          <span className="accent">{t("h1Red")}</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          {t("sub")}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer" className="rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors" style={{ background: "#E82040" }}>
            {t("btn1")}
          </a>
          <a href="#tarifas" className="rounded-full border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            {t("btn2")}
          </a>
        </div>
      </div>
    </section>
  );
}
