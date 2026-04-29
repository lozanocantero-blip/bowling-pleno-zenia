"use client";

import React, { useRef, useEffect } from "react";

const CROSSFADE_BEFORE_END = 1.2;
const CROSSFADE_MS = 900;

export function Header83() {
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
    zIndex: 0,
    willChange: "opacity",
  };

  return (
    <section className="relative overflow-hidden" style={{ height: "100vh" }}>

      <video ref={v1Ref} style={{ ...videoStyle, opacity: 1 }}
        src="/hero-bowling.mp4" muted playsInline preload="auto" />
      <video ref={v2Ref} style={{ ...videoStyle, opacity: 0 }}
        src="/hero-bowling.mp4" muted playsInline preload="auto" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(26,39,68,0.2) 0%, transparent 30%, rgba(26,39,68,0.5) 60%, rgba(26,39,68,0.96) 100%)",
        }}
      />

      <div className="relative h-full flex flex-col px-[5%]" style={{ zIndex: 10 }}>

        <div className="flex-1 flex items-center justify-start">
          <img
            src="/logo-hero.png"
            alt="Bowling Pleno Zenia"
            className="w-auto select-none pointer-events-none"
            style={{
              height: "clamp(180px, 26vw, 380px)",
              filter: "drop-shadow(0 6px 32px rgba(0,0,0,0.55))",
            }}
            draggable={false}
          />
        </div>

        <div className="pb-16 w-full">
          <p
            className="mb-5"
            style={{
              color: "#E82040",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontFamily: "var(--font-heading)",
            }}
          >
            Zenia Boulevard · Orihuela Costa · Abiertos 365 días
          </p>
          <h1
            className="mb-6 text-white uppercase"
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(4rem, 11vw, 10.5rem)",
              lineHeight: 0.86,
              letterSpacing: "-0.03em",
            }}
          >
            La bolera de<br />
            <span style={{ color: "#E82040" }}>Orihuela Costa</span>
          </h1>
          <p
            className="mb-8 max-w-xl text-white/50"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            10 pistas · Irish Pub · Arcade · Cumpleaños
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/cumpleanos-y-celebraciones"
              className="inline-block rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:opacity-90 transition-opacity"
              style={{ background: "#E82040" }}
            >
              Reservar cumpleaños
            </a>
            <a
              href="/bolera-y-precios"
              className="inline-block rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1A2744] transition-colors"
            >
              Ver precios
            </a>
            <a
              href="#horarios"
              className="inline-block rounded-full border-2 border-white/50 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:border-white hover:text-white transition-colors"
            >
              Horarios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
