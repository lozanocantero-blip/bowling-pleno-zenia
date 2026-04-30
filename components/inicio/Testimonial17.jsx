"use client";
import { useTranslations } from "next-intl";

import React, { useEffect, useRef, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const reviews = [
  {
    quote: "Pasamos un día increíble en familia. Las pistas están bien cuidadas y el personal muy atento. Sin duda volveremos.",
    author: "María García",
    role: "Visitante de Torrevieja",
    flag: "🇪🇸",
  },
  {
    quote: "El cumpleaños de mi hijo fue perfecto. Buena comida, ambiente genial y todo organizado sin estrés.",
    author: "Carlos López",
    role: "Padre de familia, Orihuela",
    flag: "🇬🇧",
  },
  {
    quote: "Único lugar en la zona donde puedes jugar a boliche y tomar una buena cerveza irlandesa. Muy recomendado.",
    author: "David Martín",
    role: "Cliente habitual",
    flag: "🇩🇪",
  },
];

function useCountUp(target, duration = 1800, startTrigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [startTrigger, target, duration]);
  return count;
}

function StatsHeader() {
  const t = useTranslations("reviews");
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reviews = useCountUp(1230, 2000, visible);
  const rating = useCountUp(43, 1600, visible); // we'll show as 4.3

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      {/* H2 sr-only: invisible visualmente, semántico para Google */}
      <h2 className="sr-only">{t("srTitle")}</h2>
      <p className="label-red mb-3 text-center" aria-hidden="true">{t("label")}</p>

      {/* Big stats row */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16 mb-8">
        <div className="text-center">
          <div
            className="font-black leading-none text-brand-navy"
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 900,
            }}
          >
            +{reviews.toLocaleString("es-ES")}
          </div>
          <p className="text-brand-navy/50 text-sm font-bold uppercase tracking-widest mt-1">
            {t("families")}
          </p>
        </div>

        <div
          className="hidden md:block w-px self-stretch"
          style={{ background: "rgba(26,39,68,0.15)" }}
        />

        <div className="text-center">
          <div
            className="font-black leading-none"
            style={{
              fontFamily: "var(--font-heading, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(4rem, 12vw, 8rem)",
              fontWeight: 900,
              color: "#E82040",
            }}
          >
            {(rating / 10).toFixed(1)}
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <BiSolidStar key={i} className="size-5 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-bold text-brand-navy/50 uppercase tracking-widest">
              en Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial17() {
  const t = useTranslations("reviews");
  return (
    <section className="bg-brand-blue-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <StatsHeader />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 border-t-4 border-brand-red flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <BiSolidStar key={j} className="size-4 text-yellow-400" />)}
                </div>
                <blockquote className="text-brand-navy/80 leading-relaxed mb-6">
                  "{r.quote}"
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand-blue-light flex items-center justify-center text-lg">
                  {r.flag}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm">{r.author}</p>
                  <p className="text-brand-navy/50 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-navy/40 text-xs mt-8 uppercase tracking-wider">
          {t("source")}
        </p>
      </div>
    </section>
  );
}
