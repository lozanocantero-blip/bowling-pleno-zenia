"use client";

import React, { useEffect, useRef, useState } from "react";

// Animation sequence: image_6 (ball far) → image_1 (pins flying)
// Files in /public/frames/ are named to match the sequence order
const SEQUENCE = [
  "/frames/frame6.png", // scroll 0%   — bola lejos, pinos de pie
  "/frames/frame5.png", // scroll 20%  — bola acercándose
  "/frames/frame4.png", // scroll 40%  — bola muy cerca
  "/frames/frame3.png", // scroll 60%  — contacto / impacto
  "/frames/frame2.png", // scroll 80%  — pinos explotando
  "/frames/frame1.png", // scroll 100% — pinos volando
];

// How wide the crossfade overlap is (fraction of one inter-frame gap)
const FADE_WINDOW = 0.35;

function preloadFrames(srcs) {
  if (typeof window === "undefined") return;
  srcs.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

export function Header83() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const preloaded = useRef(false);

  // Preload all frames on mount — zero flicker on first transition
  useEffect(() => {
    if (!preloaded.current) {
      preloadFrames(SEQUENCE);
      preloaded.current = true;
    }
  }, []);

  // Map scroll position → progress (0–1) scoped to this section only
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
        setProgress(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Compute per-frame opacity — smooth crossfade between consecutive frames
  const count = SEQUENCE.length;
  const opacities = SEQUENCE.map((_, i) => {
    const center = i / (count - 1);
    const dist = Math.abs(progress - center);
    const halfFade = (1 / (count - 1)) * FADE_WINDOW;
    const falloff = halfFade * 1.5;
    if (dist <= halfFade) return 1;
    if (dist <= falloff) return 1 - (dist - halfFade) / (falloff - halfFade);
    return 0;
  });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "380vh" }}
      aria-label="Animación de bowling scroll"
    >
      {/* Sticky viewport — stays fixed while section scrolls past */}
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* ── Background: stacked frames with crossfade ── */}
        <div className="absolute inset-0 z-0" style={{ background: "#1A2744" }}>
          {SEQUENCE.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              style={{
                opacity: opacities[i],
                willChange: opacities[i] > 0.01 ? "opacity" : "auto",
                transform: "translateZ(0)",
                transition: "none",
              }}
            />
          ))}

          {/* Vignette — keeps text readable without covering animation */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,39,68,0.55) 0%, rgba(26,39,68,0.08) 30%, rgba(26,39,68,0.08) 55%, rgba(26,39,68,0.78) 100%)",
            }}
          />
        </div>

        {/* ── Foreground: text and CTAs ── */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 px-[5%]">
          <div className="w-full max-w-3xl text-center">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "#E82040" }}
            >
              Zenia Boulevard · Orihuela Costa · Abiertos 365 días
            </p>

            <h1
              className="mb-6 text-white uppercase leading-none"
              style={{
                fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 10vw, 7rem)",
              }}
            >
              La bolera de<br />Orihuela Costa
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
              10 pistas de bowling, zona arcade y el único pub irlandés
              dentro de una bolera en toda la zona.
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
            </div>
          </div>

          {/* Scroll hint — disappears once user starts scrolling */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{
              opacity: Math.max(0, 1 - progress * 10),
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          >
            <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div
              className="w-px bg-white/30"
              style={{ height: "40px", animation: "scrollPulse 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.6); transform-origin: top; }
          50%       { opacity: 0.8; transform: scaleY(1);   transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
