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
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "180vh" }}
    >
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* Background frames */}
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
                /* Move image content upward — 25% from top instead of center */
                objectPosition: "center top",
              }}
            />
          ))}

          {/* Stronger bottom gradient — more breathing room between image and text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,39,68,0.3) 0%, transparent 25%, transparent 45%, rgba(26,39,68,0.7) 65%, rgba(26,39,68,0.95) 100%)",
            }}
          />
        </div>

        {/* Foreground text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 px-[5%]">
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
      </div>
    </section>
  );
}
