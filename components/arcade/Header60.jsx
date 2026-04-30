"use client";

import React, { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const VIDEO_SRC = "/arcade-sala-juegos-bowling-pleno-zenia-orihuela-costa.mp4";
const CROSSFADE_BEFORE_END = 1.0;
const CROSSFADE_MS = 900;

// Arcade accent: brand-coral #FF7043
export function Header60() {
  const t = useTranslations("arcade_page.header");
  const v1Ref = useRef(null);
  const v2Ref = useRef(null);
  const activeRef   = useRef(1);
  const crossfading = useRef(false);
  const rafRef      = useRef(null);

  useEffect(() => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2) return;

    function crossfadeTo(from, to) {
      if (crossfading.current) return;
      crossfading.current = true;
      to.currentTime = 0;
      to.play().catch(() => {});
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / CROSSFADE_MS, 1);
        from.style.opacity = String(1 - p);
        to.style.opacity   = String(p);
        if (p < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          from.pause();
          from.currentTime = 0;
          from.style.opacity = "0";
          to.style.opacity   = "1";
          activeRef.current  = activeRef.current === 1 ? 2 : 1;
          crossfading.current = false;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    function onTimeUpdate() {
      if (crossfading.current || !this.duration) return;
      const remaining = this.duration - this.currentTime;
      if (remaining <= CROSSFADE_BEFORE_END) {
        const isV1Active = activeRef.current === 1;
        if ((isV1Active && this === v1) || (!isV1Active && this === v2)) {
          crossfadeTo(this, isV1Active ? v2 : v1);
        }
      }
    }

    v1.addEventListener("timeupdate", onTimeUpdate);
    v2.addEventListener("timeupdate", onTimeUpdate);
    v1.style.opacity = "1";
    v2.style.opacity = "0";
    v1.play().catch(() => {});

    return () => {
      v1.removeEventListener("timeupdate", onTimeUpdate);
      v2.removeEventListener("timeupdate", onTimeUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const videoStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    transform: "scale(1.04)",
    transformOrigin: "center center",
    zIndex: 0,
    willChange: "opacity",
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", background: "#0d0d20" }}
    >
      <video ref={v1Ref} style={{ ...videoStyle, opacity: 1 }}
        src={VIDEO_SRC} muted playsInline preload="auto" aria-hidden="true" />
      <video ref={v2Ref} style={{ ...videoStyle, opacity: 0 }}
        src={VIDEO_SRC} muted playsInline preload="auto" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex: 2,
        background: "linear-gradient(to bottom, rgba(13,13,32,0.25) 0%, rgba(13,13,32,0.05) 30%, rgba(13,13,32,0.6) 60%, rgba(13,13,32,0.97) 100%)",
      }} />

      <div className="absolute left-0 top-0 bottom-0 w-1" style={{
        zIndex: 10,
        background: "linear-gradient(to bottom, transparent, #FF7043 30%, #FF7043 70%, transparent)",
      }} />

      <div className="relative z-10 w-full px-[5%] pb-16 md:pb-20">
        <div className="mb-5">
          <span className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: "rgba(255,112,67,0.15)", color: "#FF7043", border: "1px solid rgba(255,112,67,0.4)" }}>
            {t("pill")}
          </span>
        </div>

        <h1 className="ht-title mb-8" style={{ "--accent-color": "#FF7043" }}>
          {t("h1")}<br />
          <span style={{ color: "#FF7043" }}>{t("h1Accent")}</span>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: "2rem" }}>
          {t("sub")}
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="rounded-full text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors"
            style={{ background: "#FF7043" }}>
            Ir a jugar
          </a>
          <a href="#maquinas"
            className="rounded-full border-2 border-white/40 text-white/80 px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:border-white hover:text-white transition-colors">
            {t("btn2")}
          </a>
        </div>
      </div>
    </section>
  );
}
