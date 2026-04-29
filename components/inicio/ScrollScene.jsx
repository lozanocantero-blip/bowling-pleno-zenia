"use client";

import { useEffect, useRef } from "react";

export function ScrollScene() {
  const wrapRef   = useRef(null);
  const pinRef    = useRef(null);
  const arcadeRef = useRef(null);
  const arcadeRRef= useRef(null);
  const ballRef   = useRef(null);

  useEffect(() => {
    const wrap    = wrapRef.current;
    const pin     = pinRef.current;
    const arcade  = arcadeRef.current;
    const arcadeR = arcadeRRef.current;
    const ball    = ballRef.current;
    if (!wrap || !pin || !arcade || !arcadeR || !ball) return;

    let raf;
    let idleT = 0;
    let lastTime = performance.now();

    function tick(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      idleT += dt;

      const scrollY = window.scrollY;
      const vh      = window.innerHeight;
      const p       = Math.min(Math.max(scrollY / vh, 0), 1);
      const eased   = p * p * (3 - 2 * p);

      // Siempre visible — sin fade
      wrap.style.opacity = "1";

      // Flotar idle
      const floatPin    = Math.sin(idleT * 1.05) * 10;
      const floatL      = Math.sin(idleT * 0.93 + 2.4) * 8;
      const floatR      = Math.sin(idleT * 0.82 + 1.2) * 9;
      const floatBall   = Math.sin(idleT * 0.78 + 0.7) * 7;

      // Pin: sube hacia arriba al hacer scroll
      const pinY   = floatPin - eased * 200;
      const pinRot = eased * 18;
      const pinS   = 1 - eased * 0.12;
      pin.style.transform = `translateY(${pinY}px) rotate(${pinRot}deg) scale(${pinS})`;

      // Arcade izquierda: sale por la izquierda
      const arcX = -eased * 200;
      const arcY = floatL + eased * 40;
      arcade.style.transform = `translate(${arcX}px, ${arcY}px) rotate(${eased * 10}deg) scale(${1 - eased * 0.1})`;

      // Arcade derecha (donde estaba la cerveza): sale por la derecha
      const arcRX = eased * 200;
      const arcRY = floatR + eased * 50;
      arcadeR.style.transform = `translate(${arcRX}px, ${arcRY}px) rotate(${-eased * 14}deg) scale(${1 - eased * 0.1})`;

      // Bola: rueda abajo-derecha
      const ballX  = eased * 80;
      const ballY  = floatBall + eased * 150;
      const ballRot= eased * 540;
      ball.style.transform = `translate(${ballX}px, ${ballY}px) rotate(${ballRot}deg) scale(${1 - eased * 0.2})`;

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
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 6,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Bolo — centro */}
      <img ref={pinRef} src="/images/obj-pin.png" alt=""
        style={{ ...base, right: "32%", top: "4%", height: "clamp(280px, 50vh, 560px)", width: "auto", transformOrigin: "bottom center" }}
      />

      {/* Arcade — izquierda */}
      <img ref={arcadeRef} src="/images/obj-arcade.png" alt=""
        style={{ ...base, left: "-3%", top: "3%", height: "clamp(220px, 42vh, 460px)", width: "auto", transformOrigin: "bottom center", opacity: 0.92 }}
      />

      {/* Arcade — derecha (donde estaba la cerveza) */}
      <img ref={arcadeRRef} src="/images/obj-arcade.png" alt=""
        style={{ ...base, right: "3%", top: "8%", height: "clamp(200px, 38vh, 400px)", width: "auto", transformOrigin: "bottom center", opacity: 0.88, transform: "scaleX(-1)" }}
      />

      {/* Bola — derecha baja */}
      <img ref={ballRef} src="/images/obj-ball.png" alt=""
        style={{ ...base, right: "14%", bottom: "22%", height: "clamp(110px, 17vh, 190px)", width: "auto", transformOrigin: "center center" }}
      />
    </div>
  );
}
