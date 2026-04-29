"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const services = [
  { label: "Bolera",     href: "/bolera-y-precios"           },
  { label: "Arcade",     href: "/arcade-y-juegos"            },
  { label: "Irish Pub",  href: "/irish-pub-y-bar"            },
  { label: "Cumpleaños", href: "/cumpleanos-y-celebraciones" },
];

export function Navbar1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggle = () => setIsMobileMenuOpen((prev) => !prev);
  const animate = isMobileMenuOpen ? "open" : "close";
  const animateSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-[5%] py-3"
      style={{ height: "72px" }}
    >
      {/* Logo — link to home */}
      <a href="/" className="flex items-center flex-shrink-0">
        <img src="/logo.png" alt="Bowling Pleno Zenia" className="h-11 w-auto object-contain" />
      </a>

      {/* Desktop: single services pill + CTAs */}
      <div className="hidden lg:flex items-center gap-3">

        {/* Single pill */}
        <div
          className="flex items-center"
          style={{
            background: "white",
            borderRadius: "9999px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
            padding: "6px 8px",
          }}
        >
          {services.map((s, i) => (
            <React.Fragment key={s.href}>
              {i > 0 && (
                <span className="flex-shrink-0 self-stretch w-px my-1" style={{ background: "rgba(26,39,68,0.12)" }} />
              )}
              <a
                href={s.href}
                className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors rounded-full whitespace-nowrap hover:bg-[#E82040]/5"
              >
                {s.label}
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* CTAs outside pill */}
        <a
          href="tel:+34965355815"
          className="px-5 py-2 rounded-full border-2 border-white/70 text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1A2744] transition-all whitespace-nowrap"
          style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.1)" }}
        >
          Contacto
        </a>
        <a
          href="https://wa.me/34965355815"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-[#E82040] text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          Reservar
        </a>
      </div>

      {/* Mobile: hamburger only */}
      <button
        className="flex size-11 flex-col items-center justify-center rounded-full bg-white/90 shadow lg:hidden"
        onClick={toggle}
        aria-label="Menú"
      >
        <motion.span className="my-[3px] h-0.5 w-5 bg-[#1A2744]" animate={animateSpan}
          variants={{ open:{translateY:8,transition:{delay:0.1}}, rotatePhase:{rotate:-45,transition:{delay:0.2}}, closed:{translateY:0,rotate:0,transition:{duration:0.2}} }} />
        <motion.span className="my-[3px] h-0.5 w-5 bg-[#1A2744]" animate={animate}
          variants={{ open:{width:0,transition:{duration:0.1}}, closed:{width:"1.25rem",transition:{delay:0.3,duration:0.2}} }} />
        <motion.span className="my-[3px] h-0.5 w-5 bg-[#1A2744]" animate={animateSpan}
          variants={{ open:{translateY:-8,transition:{delay:0.1}}, rotatePhase:{rotate:45,transition:{delay:0.2}}, closed:{translateY:0,rotate:0,transition:{duration:0.2}} }} />
      </button>

      {/* Mobile menu */}
      <motion.div
        variants={{ open:{height:"auto",opacity:1}, close:{height:0,opacity:0} }}
        initial="close" exit="close" animate={animate}
        transition={{ duration: 0.3 }}
        className="absolute right-4 overflow-hidden rounded-2xl bg-white shadow-xl lg:hidden"
        style={{ top: "68px" }}
      >
        <div className="flex flex-col p-4 gap-1 min-w-[200px]">
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="py-3 px-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors"
            >
              {s.label}
            </a>
          ))}
          <div className="border-t border-[#E2E8F0] my-2" />
          <a href="tel:+34965355815"
            className="py-2.5 px-4 rounded-full border-2 border-[#1A2744] text-[#1A2744] text-sm font-bold uppercase tracking-wider text-center hover:bg-[#1A2744] hover:text-white transition-colors">
            Contacto
          </a>
          <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-full bg-[#E82040] text-white text-sm font-bold uppercase tracking-wider text-center hover:bg-red-700 transition-colors">
            Reservar
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
