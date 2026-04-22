"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function Navbar1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggle = () => setIsMobileMenuOpen((prev) => !prev);
  const animate = isMobileMenuOpen ? "open" : "close";
  const animateSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center border-b border-[#E2E8F0] bg-white shadow-sm lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">

        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Bowling Pleno Zenia"
              className="h-12 w-auto object-contain"
            />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={toggle}
            aria-label="Menú"
          >
            <motion.span className="my-[3px] h-0.5 w-6 bg-[#1A2744]" animate={animateSpan}
              variants={{ open:{translateY:8,transition:{delay:0.1}}, rotatePhase:{rotate:-45,transition:{delay:0.2}}, closed:{translateY:0,rotate:0,transition:{duration:0.2}} }} />
            <motion.span className="my-[3px] h-0.5 w-6 bg-[#1A2744]" animate={animate}
              variants={{ open:{width:0,transition:{duration:0.1}}, closed:{width:"1.5rem",transition:{delay:0.3,duration:0.2}} }} />
            <motion.span className="my-[3px] h-0.5 w-6 bg-[#1A2744]" animate={animateSpan}
              variants={{ open:{translateY:-8,transition:{delay:0.1}}, rotatePhase:{rotate:45,transition:{delay:0.2}}, closed:{translateY:0,rotate:0,transition:{duration:0.2}} }} />
          </button>
        </div>

        <motion.div
          variants={{ open:{height:"var(--height-open,100dvh)"}, close:{height:"var(--height-closed,0)"} }}
          initial="close" exit="close" animate={animate} transition={{duration:0.4}}
          className="overflow-hidden bg-white px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <a href="/bolera-y-precios" className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
            Bolera y Precios
          </a>
          <a href="/cumpleanos-y-celebraciones" className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors lg:px-4 lg:py-2">
            Cumpleaños
          </a>
          <a href="/irish-pub-y-bar" className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors lg:px-4 lg:py-2">
            Irish Pub
          </a>
          <a href="/arcade-y-juegos" className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors lg:px-4 lg:py-2">
            Arcade
          </a>
          <a href="#ubicacion" className="block py-3 text-sm font-semibold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors lg:px-4 lg:py-2">
            Cómo llegar
          </a>
          <div className="mt-6 flex flex-col items-center gap-3 lg:ml-6 lg:mt-0 lg:flex-row">
            <a href="tel:+34965355815"
              className="w-full lg:w-auto px-4 py-2 border-2 border-[#1A2744] text-[#1A2744] text-sm font-bold uppercase tracking-wider hover:bg-[#1A2744] hover:text-white transition-colors text-center">
              Contacto
            </a>
            <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
              className="w-full lg:w-auto px-4 py-2 bg-[#E82040] text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center">
              Reservar
            </a>
          </div>
        </motion.div>

      </div>
    </nav>
  );
}
