"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const services = [
  { labelKey: "bolera",    href: "/bolera-y-precios"           },
  { labelKey: "arcade",    href: "/arcade-y-juegos"            },
  { labelKey: "pub",       href: "/irish-pub-y-bar"            },
];

function MobileLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const langs = [
    { code: "es", label: "ES", cc: "es" },
    { code: "en", label: "EN", cc: "gb" },
    { code: "de", label: "DE", cc: "de" },
    { code: "ru", label: "RU", cc: "ru" },
  ];
  return (
    <div className="flex items-center justify-center gap-1 px-2 pb-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => router.replace(pathname, { locale: l.code })}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
            l.code === locale
              ? "bg-[#E82040] text-white"
              : "text-[#1A2744]/60 hover:text-[#1A2744]"
          }`}
          aria-label={l.label}
        >
          <img
            src={`https://flagcdn.com/20x15/${l.cc}.png`}
            srcSet={`https://flagcdn.com/40x30/${l.cc}.png 2x`}
            width="20" height="15" alt={l.label}
            style={{ borderRadius: "2px", objectFit: "cover", display: "block" }}
          />
          <span>{l.label}</span>
        </button>
      ))}
    </div>
  );
}

export function Navbar1() {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggle = () => setIsMobileMenuOpen((prev) => !prev);
  const animate = isMobileMenuOpen ? "open" : "close";
  const animateSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-end px-[5%] py-3"
      style={{ height: "72px" }}
    >
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-3">

        {/* Single pill — logo first, then service links */}
        <div
          className="flex items-center"
          style={{
            background: "white",
            borderRadius: "9999px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
            padding: "5px 8px",
          }}
        >
          {/* Logo como primer elemento de la pill */}
          <a href="/" className="flex items-center px-2 mr-1">
            <img src="/logo.png" alt="Bowling Pleno Zenia" className="h-8 w-auto object-contain" />
          </a>

          {/* Divisor */}
          <span className="flex-shrink-0 self-stretch w-px my-1" style={{ background: "rgba(26,39,68,0.12)" }} />

          {/* Service links */}
          {services.map((s, i) => (
            <React.Fragment key={s.href}>
              {i > 0 && (
                <span className="flex-shrink-0 self-stretch w-px my-1" style={{ background: "rgba(26,39,68,0.12)" }} />
              )}
              <a
                href={s.href}
                className="px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors rounded-full whitespace-nowrap hover:bg-[#E82040]/5"
              >
                {t(s.labelKey)}
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* Selector de idioma */}
        <div className="relative z-10">
          <LanguageSwitcher />
        </div>

        {/* CTAs fuera de la pill */}
        <a
          href="tel:+34965355815"
          className="px-5 py-2 rounded-full border-2 border-white text-[#1A2744] text-sm font-bold uppercase tracking-wider hover:bg-[#1A2744] hover:text-white transition-all whitespace-nowrap"
          style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
        >
          {t("contacto")}
        </a>
      </div>

      {/* Mobile: hamburger */}
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
          <a href="/" className="flex items-center px-4 py-2 mb-1">
            <img src="/logo.png" alt="Bowling Pleno Zenia" className="h-8 w-auto object-contain" />
          </a>
          <div className="border-t border-[#E2E8F0] mb-1" />
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="py-3 px-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#1A2744] hover:text-[#E82040] transition-colors"
            >
              {t(s.labelKey)}
            </a>
          ))}
          <div className="border-t border-[#E2E8F0] my-2" />
          <a href="tel:+34965355815"
            className="py-2.5 px-4 rounded-full border-2 border-[#1A2744] text-[#1A2744] text-sm font-bold uppercase tracking-wider text-center hover:bg-[#1A2744] hover:text-white transition-colors">
            Contacto
          </a>
          <div className="border-t border-[#E2E8F0] mt-3 mb-2" />
          <MobileLanguageSwitcher />
        </div>
      </motion.div>
    </nav>
  );
}
