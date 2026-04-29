"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    tag: "Bolera",
    title: "Bowling",
    sub: "10 Pistas",
    desc: "Sin reserva previa ni calzado especial. Adaptadas para todas las edades.",
    cta: "Ver precios",
    href: "/bolera-y-precios",
    bg: "#E82040",
    textColor: "white",
    rotate: -3,
    img: "/images/bolera.jpeg",
  },
  {
    tag: "Arcade",
    title: "Arcade",
    sub: "y Juegos",
    desc: "Simuladores, redemption, billar y futbolín. Sistema de tickets y premios.",
    cta: "Explorar",
    href: "/arcade-y-juegos",
    bg: "#FF7043",
    textColor: "white",
    rotate: 2.5,
    img: "/images/arcade.png",
  },
  {
    tag: "Irish Pub",
    title: "Dublin",
    sub: "House",
    desc: "El único Irish Pub dentro de una bolera en toda la zona. Cervezas importadas.",
    cta: "Descubrir el pub",
    href: "/irish-pub-y-bar",
    bg: "#1A3D1A",
    textColor: "white",
    rotate: -2,
    badge: "ÚNICO EN LA ZONA",
    img: "/images/irishpub.jpeg",
  },
  {
    tag: "Cumpleaños",
    title: "Fiestas &",
    sub: "Celebraciones",
    desc: "Paquetes todo incluido para infantiles y adultos. Zona reservada.",
    cta: "Reservar ahora",
    href: "/cumpleanos-y-celebraciones",
    bg: "#0072CE",
    textColor: "white",
    rotate: 3,
    img: null,
  },
];

function ServiceCard({ service, index, total, scrollYProgress }) {
  const seg = 1 / total;
  const s = index * seg;
  const e = s + seg;
  const isFirst = index === 0;

  const behindY    = isFirst ? "0px"  : "70px";
  const behindScale = isFirst ? 1 : 0.9 - (index - 1) * 0.025;
  const behindRot  = isFirst ? service.rotate : service.rotate * 0.4;
  const activeStart = isFirst ? 0 : s - seg * 0.35;
  const safeStart   = Math.max(0, activeStart);

  const y = useTransform(
    scrollYProgress,
    [safeStart, s, e * 0.82, e],
    [behindY, "0px", "0px", "-170%"]
  );
  const rotate = useTransform(
    scrollYProgress,
    [safeStart, s, e * 0.82, e],
    [behindRot, service.rotate, service.rotate, service.rotate + (service.rotate >= 0 ? 16 : -16)]
  );
  const scale = useTransform(
    scrollYProgress,
    [safeStart, s],
    [behindScale, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [e * 0.82, e],
    [1, 0]
  );

  const zIndex = total - index;

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y, rotate, scale, opacity,
        zIndex,
      }}
    >
      <a
        href={service.href}
        className="block relative overflow-hidden"
        style={{
          background: service.bg,
          borderRadius: "28px",
          width: "min(420px, 84vw)",
          minHeight: "460px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          textDecoration: "none",
          cursor: "pointer",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Photo top half */}
        {service.img && (
          <div className="absolute inset-0" style={{ borderRadius: "28px", overflow: "hidden" }}>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
              style={{ opacity: 0.35 }}
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          {/* Badge */}
          {service.badge && (
            <span
              className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1"
              style={{ background: "rgba(255,255,255,0.25)", borderRadius: "9999px", color: "white" }}
            >
              {service.badge}
            </span>
          )}

          {/* Tag */}
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {service.tag}
          </p>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 4.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "white",
              marginBottom: "6px",
            }}
          >
            {service.title}
          </h3>
          <h3
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 4.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "20px",
            }}
          >
            {service.sub}
          </h3>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: "300px", margin: "0 auto 24px" }}
          >
            {service.desc}
          </p>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs"
            style={{
              background: "rgba(255,255,255,0.18)",
              borderRadius: "9999px",
              padding: "10px 22px",
              color: "white",
              backdropFilter: "blur(4px)",
            }}
          >
            {service.cta} <RxChevronRight className="size-4" />
          </span>
        </div>

        {/* Bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "28px",
            background: `linear-gradient(to top, ${service.bg} 30%, transparent 80%)`,
          }}
        />
      </a>
    </motion.div>
  );
}

export function Layout370() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section>
      {/* Header — fuera del sticky, encima */}
      <div className="bg-white text-center px-[5%] pt-16 pb-8 md:pt-20">
        <p className="label-red mb-3">Servicios</p>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Todo lo que<br />
          <span style={{ color: "#E82040" }}>buscas</span>
        </h2>
        <p className="mt-4 text-brand-navy/60 md:text-md max-w-md mx-auto">
          Elige tu diversión favorita en Bowling Pleno Zenia
        </p>
      </div>

      {/* Scroll container — 4 × 100vh */}
      <div
        ref={containerRef}
        style={{ height: `${services.length * 100}vh`, position: "relative" }}
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: "#f5f4f0",
          }}
        >
          {/* Hint scroll indicator at bottom */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 pointer-events-none"
            style={{ color: "rgba(26,39,68,0.35)" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-current opacity-40" />
          </div>

          {/* Cards */}
          <div style={{ position: "absolute", inset: 0 }}>
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                service={service}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
