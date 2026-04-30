"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

const N = 4; // número de servicios

// services array is built dynamically via useServices() hook below


// ── Card individual ───────────────────────────────────────────────────────────
function ServiceCard({ service, index, scrollYProgress }) {
  const seg = 1 / N;
  const s = index * seg;
  const e = s + seg;
  const exitStart = s + seg * 0.65;
  const enterStart = Math.max(0.001, s - seg * 0.35);

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, exitStart, e] : [enterStart, s, exitStart, e],
    index === 0 ? ["0%", "0%", "-160%"] : ["72px", "0px", "0%", "-160%"]
  );
  const rotate = useTransform(
    scrollYProgress,
    index === 0 ? [0, exitStart, e] : [enterStart, s, exitStart, e],
    index === 0
      ? [service.rotate, service.rotate, service.rotate + (service.rotate >= 0 ? 11 : -11)]
      : [service.rotate * 0.4, service.rotate, service.rotate, service.rotate + (service.rotate >= 0 ? 11 : -11)]
  );
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, enterStart), Math.max(0.001, s)],
    [index === 0 ? 1 : Math.max(0.88, 0.94 - (index - 1) * 0.025), 1]
  );
  const opacity = useTransform(scrollYProgress, [exitStart, e], [1, 0]);

  return (
    <motion.div
      style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        y, rotate, scale, opacity,
        zIndex: N - index,
      }}
    >
      <a
        href={service.href}
        className="block relative overflow-hidden"
        aria-label={`${service.seoTitle} — ${service.cta}`}
        style={{
          background: service.bg,
          borderRadius: "28px",
          /* Tamaño original restaurado */
          width: "min(500px, 90vw)",
          minHeight: "min(580px, 78vh)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          textDecoration: "none",
          boxShadow: "0 28px 64px rgba(0,0,0,0.3)",
        }}
      >
        {service.img ? (
          <div className="absolute inset-0" style={{ borderRadius: "28px", overflow: "hidden" }}>
            <img
              src={service.img}
              alt={service.seoTitle}
              className="w-full h-full object-cover"
              style={{ opacity: 0.3 }}
            />
          </div>
        ) : (
          <CumpleBg />
        )}

        <div className="absolute inset-0 pointer-events-none" style={{
          borderRadius: "28px",
          background: `linear-gradient(to top, ${service.bg} 35%, ${service.bg}99 55%, transparent 85%)`,
        }} />

        <div className="relative z-10 p-8 md:p-10 text-center">
          {service.badge && (
            <span className="inline-block mb-4 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
              style={{ background: "rgba(255,255,255,0.2)", borderRadius: "9999px", color: "white" }}>
              {service.badge}
            </span>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.55)" }}>{service.tag}</p>
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
          <p className="text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)", maxWidth: "340px", margin: "0 auto 28px" }}>
            {service.desc}
          </p>
          <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-xs"
            style={{
              background: "rgba(255,255,255,0.18)", borderRadius: "9999px",
              padding: "11px 24px", color: "white", backdropFilter: "blur(4px)",
            }}>
            {service.cta} <RxChevronRight className="size-4" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}

function CumpleBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0a1628 0%,#1A2744 40%,#0d3a7a 100%)", borderRadius: "28px" }}>
      {["🎂","🎈","🎉","🎊","🎳"].map((e, i) => (
        <span key={i} className="absolute text-5xl opacity-20 pointer-events-none select-none"
          style={{
            top: `${[15,55,25,70,45][i]}%`, left: `${[10,80,50,20,65][i]}%`,
            transform: `rotate(${[-15,20,-5,10,-20][i]}deg)`,
            animation: `cumple-float-${i} ${3+i*0.5}s ease-in-out infinite alternate`,
          }}>{e}</span>
      ))}
      <style>{`
        @keyframes cumple-float-0{to{transform:rotate(-10deg) translateY(-8px)}}
        @keyframes cumple-float-1{to{transform:rotate(25deg) translateY(-10px)}}
        @keyframes cumple-float-2{to{transform:rotate(-2deg) translateY(-6px)}}
        @keyframes cumple-float-3{to{transform:rotate(15deg) translateY(-9px)}}
        @keyframes cumple-float-4{to{transform:rotate(-15deg) translateY(-7px)}}
      `}</style>
    </div>
  );
}

// ── Dots de progreso ──────────────────────────────────────────────────────────
function ProgressDots({ scrollYProgress, services }) {
  const seg = 1 / N;
  const op0 = useTransform(scrollYProgress, [0, 0.04, seg - 0.04, seg], [1, 1, 1, 0.25]);
  const op1 = useTransform(scrollYProgress, [seg - 0.04, seg, seg * 2 - 0.04, seg * 2], [0.25, 1, 1, 0.25]);
  const op2 = useTransform(scrollYProgress, [seg * 2 - 0.04, seg * 2, seg * 3 - 0.04, seg * 3], [0.25, 1, 1, 0.25]);
  const op3 = useTransform(scrollYProgress, [seg * 3 - 0.04, seg * 3, 1 - 0.04, 1], [0.25, 1, 1, 1]);
  const opacities = [op0, op1, op2, op3];

  return (
    <div className="mt-8 flex items-center gap-2.5">
      {services.map((s, i) => (
        <motion.a key={i} href={s.href} aria-label={s.seoTitle}
          style={{ opacity: opacities[i], width: 10, height: 10, borderRadius: "50%", background: s.bg, display: "block", flexShrink: 0 }} />
      ))}
    </div>
  );
}

// ── Panel SEO — texto animado sincronizado con la tarjeta activa ──────────────
//
//  FIX: Las transiciones son estrictamente NO solapadas.
//  Texto 0 se va (0.22→0.25) → Texto 1 llega (0.25→0.28).
//  Nunca hay dos textos visibles al mismo tiempo.
//
function SeoPanel({ seoOpacities, services }) {
  return (
    <div className="mt-4 relative" style={{ height: "140px" }}>
      {services.map((s, i) => (
        <motion.article
          key={i}
          aria-label={s.seoTitle}
          style={{
            opacity: seoOpacities[i],
            position: "absolute", top: 0, left: 0, right: 0,
            pointerEvents: "none",
          }}
        >
          <h3 style={{
            fontFamily: "var(--font-heading,'Barlow Condensed',sans-serif)",
            fontWeight: 700,
            fontSize: "0.76rem",
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: s.bg,
            marginBottom: "7px",
          }}>
            {s.seoTitle}
          </h3>
          <p style={{ fontSize: "0.79rem", lineHeight: 1.7, color: "rgba(26,39,68,0.62)" }}>
            {s.seoText}
          </p>
        </motion.article>
      ))}
    </div>
  );
}

// ── Sección SEO móvil ─────────────────────────────────────────────────────────
function MobileSeoSection({ services }) {
  return (
    <div className="md:hidden bg-[#f5f4f0] px-5 pt-2 pb-12">
      <div className="space-y-8">
        {services.map((s, i) => (
          <article key={i} className="flex gap-4 items-start"
            style={{ animation: `seo-fade-up 0.5s ease ${i * 0.08}s both` }}>
            <div aria-hidden="true" style={{
              width: 4, borderRadius: 2, background: s.bg,
              flexShrink: 0, alignSelf: "stretch", minHeight: 56,
            }} />
            <div>
              <h3 style={{
                fontFamily: "var(--font-heading,'Barlow Condensed',sans-serif)",
                fontWeight: 700, fontSize: "1rem", textTransform: "uppercase",
                letterSpacing: "0.1em", color: s.bg, marginBottom: "6px",
              }}>
                {s.seoTitle}
              </h3>
              <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "rgba(26,39,68,0.65)" }}>
                {s.seoText}
              </p>
              <a href={s.href} className="inline-flex items-center gap-1 mt-3 font-bold uppercase tracking-wider text-xs"
                style={{ color: s.bg }}>
                {s.cta} <RxChevronRight className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        @keyframes seo-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ── Hook que genera el array de servicios con traducciones ───────────────────
function useServices(t) {
  return [
    { tag: t("cards.bolera.tag"), title: t("cards.bolera.title"), desc: t("cards.bolera.desc"), cta: t("cards.bolera.cta"), href: "/bolera-y-precios", bg: "#E82040", rotate: -3, img: "/images/bolera.jpeg", badge: null, seoTitle: t("cards.bolera.seoTitle"), seoText: t("cards.bolera.seoText") },
    { tag: t("cards.arcade.tag"), title: t("cards.arcade.title"), desc: t("cards.arcade.desc"), cta: t("cards.arcade.cta"), href: "/arcade-y-juegos", bg: "#FF7043", rotate: 2.5, img: "/images/arcade.png", badge: null, seoTitle: t("cards.arcade.seoTitle"), seoText: t("cards.arcade.seoText") },
    { tag: t("cards.pub.tag"), title: t("cards.pub.title"), desc: t("cards.pub.desc"), cta: t("cards.pub.cta"), href: "/irish-pub-y-bar", bg: "#1A3D1A", rotate: -2, img: "/images/irishpub.jpeg", badge: t("cards.pub.badge"), seoTitle: t("cards.pub.seoTitle"), seoText: t("cards.pub.seoText") },
    { tag: t("cards.cumpleanos.tag"), title: t("cards.cumpleanos.title"), desc: t("cards.cumpleanos.desc"), cta: t("cards.cumpleanos.cta"), href: "/cumpleanos-y-celebraciones", bg: "#0072CE", rotate: 3, img: null, badge: null, seoTitle: t("cards.cumpleanos.seoTitle"), seoText: t("cards.cumpleanos.seoText") },
  ];
}

// ── Componente principal ──────────────────────────────────────────────────────
export function Layout370() {
  const tServices = useTranslations("services");
  const containerRef = useRef(null);
  const services = useServices(tServices);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  // ── Opacidades SEO sin solapamiento ──────────────────────────────────────
  // Cada texto hace fade-out justo ANTES de que el siguiente haga fade-in.
  // Ventana de transición: 0.03 (≈ muy rápido al scrollear).
  // Estructura por segmento (seg = 0.25):
  //   Texto 0: visible de 0 → 0.22, fade-out 0.22 → 0.25
  //   Texto 1: fade-in 0.25 → 0.28, visible 0.28 → 0.47, fade-out 0.47 → 0.50
  //   Texto 2: fade-in 0.50 → 0.53, visible 0.53 → 0.72, fade-out 0.72 → 0.75
  //   Texto 3: fade-in 0.75 → 0.78, visible 0.78 → 1
  const seoOp0 = useTransform(scrollYProgress, [0, 0.22, 0.25],          [1, 1, 0]);
  const seoOp1 = useTransform(scrollYProgress, [0.25, 0.28, 0.47, 0.50], [0, 1, 1, 0]);
  const seoOp2 = useTransform(scrollYProgress, [0.50, 0.53, 0.72, 0.75], [0, 1, 1, 0]);
  const seoOp3 = useTransform(scrollYProgress, [0.75, 0.78, 1],           [0, 1, 1]);
  const seoOpacities = [seoOp0, seoOp1, seoOp2, seoOp3];

  return (
    <section aria-label="Servicios de Bowling Pleno Zenia — bolera, arcade, pub y cumpleaños en Orihuela Costa">

      <div ref={containerRef} style={{ height: `${N * 100}vh`, position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#f5f4f0" }}>
          <div className="h-full flex items-stretch">

            {/* IZQUIERDA — título + SEO + dots */}
            <div className="hidden md:flex flex-col justify-center px-10 lg:px-16"
              style={{ width: "40%", flexShrink: 0 }}>
              <p className="label-red mb-4">{tServices("label")}</p>
              <h2 style={{
                fontWeight: 900,
                fontSize: "clamp(3.8rem, 7.5vw, 9rem)",
                lineHeight: 0.86,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#1A2744",
              }}>
                {tServices("title")}<br />{tServices("titleLine2")}<br />
                <span style={{ color: "#E82040" }}>{tServices("titleRed")}</span>
              </h2>
              <SeoPanel seoOpacities={seoOpacities} services={services} />
              <ProgressDots scrollYProgress={scrollYProgress} services={services} />
            </div>

            {/* DERECHA — tarjetas */}
            <div className="relative flex-1" style={{ minWidth: 0 }}>

              <div className="md:hidden absolute top-8 left-0 right-0 z-50 text-center px-5">
                <p className="label-red text-[10px] mb-1">Servicios</p>
                <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem,8vw,3.2rem)",
                  lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
                  {tServices("title")} {tServices("titleLine2")} <span style={{ color: "#E82040" }}>{tServices("titleRed")}</span>
                </h2>
              </div>

              <div style={{ position: "absolute", inset: 0 }}>
                {services.map((service, i) => (
                  <ServiceCard key={i} service={service} index={i} scrollYProgress={scrollYProgress} />
                ))}
              </div>

              <motion.div style={{ opacity: hintOpacity }}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1.5 pointer-events-none">
                <span className="text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: "rgba(26,39,68,0.3)" }}>Scroll</span>
                <div className="w-px h-7" style={{ background: "rgba(26,39,68,0.3)" }} />
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <MobileSeoSection services={services} />

    </section>
  );
}
