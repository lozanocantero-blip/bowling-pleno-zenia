"use client";

import React, { useEffect, useRef, useState } from "react";

const SEQUENCE = [
  "/frames/frame1.png",
  "/frames/frame2.png",
  "/frames/frame3.png",
  "/frames/frame4.png",
  "/frames/frame5.png",
  "/frames/frame6.png",
];

function preloadFrames(srcs) {
  if (typeof window === "undefined") return;
  srcs.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

export function Header83() {
  const sectionRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const rafRef = useRef(null);
  const preloaded = useRef(false);

  useEffect(() => {
    if (!preloaded.current) {
      preloadFrames(SEQUENCE);
      preloaded.current = true;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const totalScroll = el.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const p = Math.min(1, Math.max(0, scrolled / totalScroll));
        const idx = Math.min(SEQUENCE.length - 1, Math.floor(p * SEQUENCE.length));
        setCurrentFrame(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "180vh" }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* ── Background frames ── */}
        <div className="absolute inset-0 z-0" style={{ background: "#1A2744" }}>
          {SEQUENCE.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 w-full h-full select-none pointer-events-none"
              style={{
                opacity: i === currentFrame ? 1 : 0,
                transform: "translateZ(0)",
                transition: "none",
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
            />
          ))}
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,39,68,0.3) 0%, transparent 25%, transparent 45%, rgba(26,39,68,0.7) 65%, rgba(26,39,68,0.95) 100%)",
            }}
          />
        </div>

        {/* ── Foreground ── */}
        <div className="relative z-10 h-full flex flex-col px-[5%]">

          {/* Logo grande — izquierda, centrado verticalmente en la mitad superior */}
          <div className="flex-1 flex items-center justify-start">
            <img
              src="/logo-hero.png"
              alt="Bowling Pleno Zenia"
              className="w-auto select-none pointer-events-none"
              style={{
                height: "clamp(160px, 22vw, 280px)",
                filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))",
              }}
              draggable={false}
            />
          </div>

          {/* Texto y CTAs — abajo */}
          <div className="pb-16 w-full">
            <p
              className="mb-5"
              style={{ color: "#E82040", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", fontFamily: "var(--font-heading)" }}
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
              La bolera de<br /><span style={{ color: "#E82040" }}>Orihuela Costa</span>
            </h1>
            <p className="mb-8 max-w-xl text-white/50"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              10 pistas · Irish Pub · Arcade · Cumpleaños
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/cumpleanos-y-celebraciones"
                className="inline-block px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white"
                style={{ background: "#E82040" }}
              >
                Reservar cumpleaños
              </a>
              <a
                href="/bolera-y-precios"
                className="inline-block border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#1A2744] transition-colors"
              >
                Ver precios
              </a>
              <a
                href="#horarios"
                className="inline-block border-2 border-white/50 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:border-white hover:text-white transition-colors"
              >
                Horarios
              </a>
            </div>
          </div>

          {/* Frame dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {SEQUENCE.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-150"
                style={{
                  width: i === currentFrame ? "20px" : "6px",
                  height: "6px",
                  background: i === currentFrame ? "#E82040" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Three.js bowling pin — z-20, encima del texto ── */}
        <iframe
          src="/bowling-pin.html"
          title="Bowling pin 3D"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            border: "none",
            background: "transparent",
            pointerEvents: "none",
            zIndex: 20,
          }}
          allowTransparency={true}
        />
    </section>
  );
}
