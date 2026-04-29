"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

// Scroll distance per card — more breathing room = smoother feel
const SCROLL_PER_CARD = 1.0; // x viewport heights per card

const services = [
  {
    tag: "Bolera",
    title: "Bowling — 10 Pistas",
    desc: "Adaptadas para todas las edades. Sin reserva previa ni calzado especial.",
    cta: "Ver precios",
    href: "/bolera-y-precios",
    bg: "#E82040",
    rotate: -3,
    img: "/images/bolera.jpeg",
    badge: null,
  },
  {
    tag: "Arcade",
    title: "Máquinas Arcade y Juegos",
    desc: "Simuladores, redemption, billar, futbolín. Sistema de tickets y premios.",
    cta: "Explorar",
    href: "/arcade-y-juegos",
    bg: "#FF7043",
    rotate: 2.5,
    img: "/images/arcade.png",
    badge: null,
  },
  {
    tag: "Irish Pub",
    title: "Dublin House",
    desc: "Cervezas importadas, cócteles y ambiente auténtico irlandés mientras juegas o descansas.",
    cta: "Descubrir el pub",
    href: "/irish-pub-y-bar",
    bg: "#1A3D1A",
    rotate: -2,
    img: "/images/irishpub.jpeg",
    badge: "ÚNICO EN LA ZONA",
  },
  {
    tag: "Cumpleaños",
    title: "Fiestas & Celebraciones",
    desc: "Paquetes todo incluido para infantiles y adultos. Zona reservada.",
    cta: "Reservar ahora",
    href: "/cumpleanos-y-celebraciones",
    bg: "#0072CE",
    rotate: 3,
    img: null,
    badge: null,
  },
];

function CumpleBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #1A2744 40%, #0d3a7a 100%)", borderRadius: "28px" }}>
      {["🎂","🎈","🎉","🎊","🎳"].map((e,i) => (
        <span key={i} className="absolute text-5xl opacity-20 pointer-events-none select-none"
          style={{ top:`${[15,55,25,70,45][i]}%`, left:`${[10,80,50,20,65][i]}%`,
            transform:`rotate(${[-15,20,-5,10,-20][i]}deg)`,
            animation:`float-${i} ${3+i*0.5}s ease-in-out infinite alternate` }}>
          {e}
        </span>
      ))}
      <style>{`
        @keyframes float-0{to{transform:rotate(-10deg) translateY(-8px)}}
        @keyframes float-1{to{transform:rotate(25deg) translateY(-10px)}}
        @keyframes float-2{to{transform:rotate(-2deg) translateY(-6px)}}
        @keyframes float-3{to{transform:rotate(15deg) translateY(-9px)}}
        @keyframes float-4{to{transform:rotate(-15deg) translateY(-7px)}}
      `}</style>
    </div>
  );
}

function ServiceCard({ service, index, total, smoothProgress }) {
  const seg = 1 / total;
  const s = index * seg;
  const e = s + seg;
  // Card stays active for 65% of its segment, then exits in the last 35%
  const exitStart = s + seg * 0.65;
  const enterStart = Math.max(0, s - seg * 0.35);

  // Y: behind → active → exit
  const y = useTransform(
    smoothProgress,
    index === 0
      ? [0, exitStart, e]
      : [enterStart, s, exitStart, e],
    index === 0
      ? ["0%", "0%", "-160%"]
      : ["72px", "0px", "0%", "-160%"]
  );

  // Rotation
  const rotate = useTransform(
    smoothProgress,
    index === 0
      ? [0, exitStart, e]
      : [enterStart, s, exitStart, e],
    index === 0
      ? [service.rotate, service.rotate, service.rotate + (service.rotate >= 0 ? 11 : -11)]
      : [service.rotate * 0.4, service.rotate, service.rotate, service.rotate + (service.rotate >= 0 ? 11 : -11)]
  );

  // Scale: cards behind are slightly smaller
  const scale = useTransform(
    smoothProgress,
    [enterStart, s],
    [index === 0 ? 1 : Math.max(0.88, 0.94 - (index - 1) * 0.025), 1]
  );

  // Opacity: fade on exit
  const opacity = useTransform(smoothProgress, [exitStart, e], [1, 0]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y, rotate, scale, opacity,
        zIndex: total - index,
      }}
    >
      <a
        href={service.href}
        className="block relative overflow-hidden"
        style={{
          background: service.bg,
          borderRadius: "28px",
          width: "min(500px, 90vw)",
          minHeight: "min(580px, 78vh)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          textDecoration: "none",
          boxShadow: "0 28px 64px rgba(0,0,0,0.3)",
        }}
      >
        {/* Background */}
        {service.img ? (
          <div className="absolute inset-0" style={{ borderRadius: "28px", overflow: "hidden" }}>
            <img src={service.img} alt={service.title}
              className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
          </div>
        ) : (
          <CumpleBg />
        )}

        {/* Bottom gradient */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ borderRadius: "28px",
            background: `linear-gradient(to top, ${service.bg} 35%, ${service.bg}99 55%, transparent 85%)` }} />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10 text-center">
          {service.badge && (
            <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
              style={{ background: "rgba(255,255,255,0.2)", borderRadius: "9999px", color: "white",
                animation: "pulse-badge 2s ease-in-out infinite" }}>
              {service.badge}
            </span>
          )}

          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            {service.tag}
          </p>

          <h3 style={{
            fontFamily: "var(--font-heading,'Barlow Condensed',sans-serif)",
            fontWeight: 900,
            fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "white",
            marginBottom: "16px",
          }}>
            {service.title}
          </h3>

          <p className="text-sm md:text-base leading-relaxed mb-7"
            style={{ color: "rgba(255,255,255,0.8)", maxWidth: "340px", margin: "0 auto 28px" }}>
            {service.desc}
          </p>

          <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs"
            style={{ background: "rgba(255,255,255,0.18)", borderRadius: "9999px",
              padding: "11px 24px", color: "white", backdropFilter: "blur(4px)" }}>
            {service.cta} <RxChevronRight className="size-4" />
          </span>
        </div>

        <style>{`
          @keyframes pulse-badge {
            0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.2)}
            50%{box-shadow:0 0 0 6px rgba(255,255,255,0)}
          }
        `}</style>
      </a>
    </motion.div>
  );
}

// Active card progress dots
function ProgressDots({ smoothProgress, total }) {
  return (
    <div className="flex items-center gap-2">
      {services.map((_, i) => {
        const seg = 1 / total;
        const opacity = useTransform(
          smoothProgress,
          [Math.max(0, i * seg - 0.02), i * seg + 0.05, (i + 1) * seg - 0.05, (i + 1) * seg],
          [i === 0 ? 1 : 0.3, 1, 1, 0.3]
        );
        return (
          <motion.div key={i} style={{ opacity }}
            className="rounded-full bg-brand-navy"
            css={{ width: 6, height: 6 }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A2744", opacity }} />
        );
      })}
    </div>
  );
}

export function Layout370() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct — no spring lag, instant scroll response
  const smoothProgress = scrollYProgress;

  const totalHeight = services.length * SCROLL_PER_CARD;

  return (
    <section>
      {/* Scroll container */}
      <div ref={containerRef} style={{ height: `${totalHeight * 100}vh`, position: "relative" }}>

        {/* Sticky viewport */}
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#f5f4f0" }}>

          {/* Split layout: left = title, right = cards */}
          <div className="h-full flex items-stretch">

            {/* LEFT: Always-visible title */}
            <div className="hidden md:flex flex-col justify-center px-10 lg:px-16"
              style={{ width: "38%", flexShrink: 0 }}>
              <p className="label-red mb-4">Servicios</p>
              <h2 style={{
                fontWeight: 900,
                fontSize: "clamp(3.8rem, 7.5vw, 9rem)",
                lineHeight: 0.86,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#1A2744",
              }}>
                Todo lo<br />que<br /><span style={{ color: "#E82040" }}>buscas</span>
              </h2>
              <p className="mt-5 text-brand-navy/60 text-sm leading-relaxed max-w-xs">
                Elige tu diversión favorita en Bowling Pleno Zenia
              </p>

              {/* Active indicator dots */}
              <div className="mt-8 flex items-center gap-2.5">
                {services.map((s, i) => {
                  const seg = 1 / services.length;
                  const dotOpacity = useTransform(
                    smoothProgress,
                    [Math.max(0, i * seg - 0.01), i * seg + 0.04,
                     (i + 1) * seg - 0.04, (i + 1) * seg + 0.01],
                    [i === 0 ? 1 : 0.25, 1, 1, 0.25]
                  );
                  const dotScale = useTransform(
                    smoothProgress,
                    [Math.max(0, i * seg - 0.01), i * seg + 0.04,
                     (i + 1) * seg - 0.04, (i + 1) * seg + 0.01],
                    [i === 0 ? 1 : 0.6, 1, 1, 0.6]
                  );
                  return (
                    <motion.a key={i} href={s.href}
                      style={{ opacity: dotOpacity, scale: dotScale,
                        width: 10, height: 10, borderRadius: "50%", background: s.bg,
                        display: "block", flexShrink: 0 }} />
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Card deck */}
            <div className="relative flex-1" style={{ minWidth: 0 }}>
              {/* Mobile title — only on small screens */}
              <div className="md:hidden absolute top-8 left-0 right-0 z-50 text-center px-5">
                <p className="label-red text-[10px] mb-1">Servicios</p>
                <h2 style={{ fontWeight: 900, fontSize: "clamp(2.4rem,9vw,4rem)",
                  lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
                  Todo lo que <span style={{ color: "#E82040" }}>buscas</span>
                </h2>
              </div>

              {/* Cards */}
              <div style={{ position: "absolute", inset: 0 }}>
                {services.map((service, i) => (
                  <ServiceCard
                    key={i}
                    service={service}
                    index={i}
                    total={services.length}
                    smoothProgress={smoothProgress}
                  />
                ))}
              </div>

              {/* Scroll hint */}
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1.5 pointer-events-none"
                style={{ color: "rgba(26,39,68,0.3)" }}>
                <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
                <motion.div className="w-px bg-current"
                  style={{ height: 28, opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
