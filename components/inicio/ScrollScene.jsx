"use client";

import { useEffect, useRef } from "react";

export function ScrollScene() {
  const wrapRef  = useRef(null);
  const pinRef   = useRef(null);
  const beerRef  = useRef(null);
  const arcadeRef= useRef(null);
  const ballRef  = useRef(null);

  useEffect(() => {
    const wrap   = wrapRef.current;
    const pin    = pinRef.current;
    const beer   = beerRef.current;
    const arcade = arcadeRef.current;
    const ball   = ballRef.current;
    if (!wrap || !pin || !beer || !arcade || !ball) return;

    let raf;
    let idleT = 0;
    let lastTime = performance.now();

    function tick(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      idleT += dt;

      const scrollY = window.scrollY;
      const vh      = window.innerHeight;
      const p       = Math.min(Math.max(scrollY / vh, 0), 1);   // 0–1 while in hero
      const eased   = p * p * (3 - 2 * p);                       // smoothstep

      // ── Global fade: visible in hero, out after 70 % scroll ──
      wrap.style.opacity = p < 0.7 ? "1" : String(1 - (p - 0.7) / 0.3);

      // ── Idle float (only when not scrolling) ──
      const floatPin   = Math.sin(idleT * 1.05) * 10;
      const floatBeer  = Math.sin(idleT * 0.82 + 1.2) * 9;
      const floatArcade= Math.sin(idleT * 0.93 + 2.4) * 8;
      const floatBall  = Math.sin(idleT * 0.78 + 0.7) * 7;

      // ── Scroll transforms ──
      // Pin: rises + tilts right (Hungry Tiger-style)
      const pinY   =  floatPin - eased * 160;
      const pinRot =  eased * 22;
      const pinS   =  1 - eased * 0.18;
      pin.style.transform = `translateY(${pinY}px) rotate(${pinRot}deg) scale(${pinS})`;

      // Beer: slides right + tilts
      const beerX  =  eased * 90;
      const beerY  =  floatBeer + eased * 60;
      const beerRot= -eased * 18;
      const beerS  =  1 - eased * 0.12;
      beer.style.transform = `translate(${beerX}px, ${beerY}px) rotate(${beerRot}deg) scale(${beerS})`;

      // Arcade: slides left + slight tilt
      const arcX   = -eased * 100;
      const arcY   =  floatArcade + eased * 50;
      const arcRot =  eased * 14;
      const arcS   =  1 - eased * 0.12;
      arcade.style.transform = `translate(${arcX}px, ${arcY}px) rotate(${arcRot}deg) scale(${arcS})`;

      // Ball: rolls down-right
      const ballX  =  eased * 70;
      const ballY  =  floatBall + eased * 120;
      const ballRot=  eased * 540;
      const ballS  =  1 - eased * 0.25;
      ball.style.transform = `translate(${ballX}px, ${ballY}px) rotate(${ballRot}deg) scale(${ballS})`;

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
    draggable: false,
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
      {/* Bolo — protagonista central, ocupa el centro-derecha */}
      <img
        ref={pinRef}
        src="/images/obj-pin.png"
        alt=""
        style={{
          ...base,
          right: "32%",
          top: "4%",
          height: "clamp(280px, 50vh, 560px)",
          width: "auto",
          transformOrigin: "bottom center",
        }}
      />

      {/* Jarra de cerveza — derecha */}
      <img
        ref={beerRef}
        src="/images/obj-beer.png"
        alt=""
        style={{
          ...base,
          right: "3%",
          top: "8%",
          height: "clamp(200px, 38vh, 400px)",
          width: "auto",
          transformOrigin: "bottom center",
        }}
      />

      {/* Máquina arcade — izquierda alta */}
      <img
        ref={arcadeRef}
        src="/images/obj-arcade.png"
        alt=""
        style={{
          ...base,
          left: "-3%",
          top: "3%",
          height: "clamp(220px, 42vh, 460px)",
          width: "auto",
          transformOrigin: "bottom center",
          opacity: 0.9,
        }}
      />

      {/* Bola — derecha baja, fuera del área de texto */}
      <img
        ref={ballRef}
        src="/images/obj-ball.png"
        alt=""
        style={{
          ...base,
          right: "14%",
          bottom: "22%",
          height: "clamp(110px, 17vh, 190px)",
          width: "auto",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
