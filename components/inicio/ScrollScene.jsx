"use client";

import { useEffect, useRef } from "react";

const NAV_H = 72; // altura del navbar

export function ScrollScene() {
  const wrapRef    = useRef(null);
  const pinRef     = useRef(null);
  const arcadeRef  = useRef(null);
  const arcadeRRef = useRef(null);
  const ballRef    = useRef(null);

  useEffect(() => {
    const wrap    = wrapRef.current;
    const pin     = pinRef.current;
    const arcade  = arcadeRef.current;
    const arcadeR = arcadeRRef.current;
    const ball    = ballRef.current;
    if (!wrap || !pin || !arcade || !arcadeR || !ball) return;

    let raf;
    let idleT    = 0;
    let lastTime = performance.now();

    function tick(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      idleT += dt;

      const scrollY = window.scrollY;
      const vh      = window.innerHeight - NAV_H;
      // p: 0→1 durante el hero, puede superar 1 pero usamos clamp para translate
      const raw     = scrollY / vh;
      const eased   = Math.min(raw, 1);
      const e       = eased * eased * (3 - 2 * eased); // smoothstep 0→1

      // ── Flotar idle ──────────────────────────────────────
      const fPin  = Math.sin(idleT * 1.05)       * 10;
      const fL    = Math.sin(idleT * 0.93 + 2.4) * 8;
      const fR    = Math.sin(idleT * 0.82 + 1.2) * 9;
      const fBall = Math.sin(idleT * 0.78 + 0.7) * 7;

      // ── Rotación CONTINUA basada en scrollY (no se para) ──
      const rot = scrollY * 0.07; // gira indefinidamente al scrollear

      // Pin — sube + rota continuo
      pin.style.transform = `translateY(${fPin - e * 220}px) rotate(${rot}deg) scale(${1 - e * 0.12})`;

      // Arcade izquierda — sale izq + rota contrario
      arcade.style.transform = `translate(${-e * 220}px, ${fL + e * 40}px) rotate(${-rot * 0.75}deg) scale(${1 - e * 0.1})`;

      // Arcade derecha (espejo) — sale der + rota
      arcadeR.style.transform = `translate(${e * 220}px, ${fR + e * 50}px) scaleX(-1) rotate(${rot * 0.65}deg) scale(${1 - e * 0.1})`;

      // Bola — rueda: rotación más rápida proporcional al scroll
      ball.style.transform = `translate(${e * 80}px, ${fBall + e * 160}px) rotate(${scrollY * 0.35}deg) scale(${1 - e * 0.2})`;

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const base = {
    position: "absolute",
    pointerEvents: "none",
    willChange: "transform",
    userSelect: "none",
  };

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: NAV_H,                        // empieza BAJO la navbar
        left: 0,
        width: "100%",
        height: `calc(100vh - ${NAV_H}px)`,
        zIndex: 6,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Bolo — protagonista central */}
      <img ref={pinRef} src="/images/obj-pin.png" alt=""
        style={{ ...base, right: "32%", top: "3%", height: "clamp(260px, 48vh, 520px)", width: "auto", transformOrigin: "bottom center" }}
      />

      {/* Arcade — izquierda */}
      <img ref={arcadeRef} src="/images/obj-arcade.png" alt=""
        style={{ ...base, left: "-3%", top: "2%", height: "clamp(200px, 40vh, 440px)", width: "auto", transformOrigin: "bottom center", opacity: 0.92 }}
      />

      {/* Arcade — derecha (espejo) */}
      <img ref={arcadeRRef} src="/images/obj-arcade.png" alt=""
        style={{ ...base, right: "3%", top: "6%", height: "clamp(180px, 36vh, 390px)", width: "auto", transformOrigin: "bottom center", opacity: 0.88 }}
      />

      {/* Bola — derecha baja */}
      <img ref={ballRef} src="/images/obj-ball.png" alt=""
        style={{ ...base, right: "14%", bottom: "20%", height: "clamp(100px, 16vh, 180px)", width: "auto", transformOrigin: "center center" }}
      />
    </div>
  );
}
