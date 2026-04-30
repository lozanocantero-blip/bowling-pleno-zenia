"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export function Footer5() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <footer className="bg-brand-navy text-white px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        {/* Newsletter */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/20 pb-12 md:mb-16 md:flex-row md:items-center md:justify-between md:pb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">{t("newsletterLabel")}</p>
            <h3 className="text-2xl font-black uppercase">{t("newsletterTitle")}</h3>
            <p className="text-white/70 text-sm mt-1">{t("newsletterSubtitle")}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/30 px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-red text-sm"
            />
            <button type="submit" className="bg-brand-red px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors whitespace-nowrap">
{t("subscribe")}
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          {/* Columna marca + NAP semántico ─────────────────────────────────
               itemScope en el div raíz = BowlingAlley.
               name, telephone y aggregateRating son hijos directos del BowlingAlley.
               PostalAddress solo contiene campos de dirección.               */}
          <div
            className="col-span-2 md:col-span-1 lg:col-span-1"
            itemScope
            itemType="https://schema.org/BowlingAlley"
          >
            {/* name directamente en BowlingAlley — fix del error crítico */}
            <meta itemProp="name" content="Bowling Pleno Zenia" />
            <meta itemProp="telephone" content="+34965355815" />
            <meta itemProp="priceRange" content="€€" />

            <a href="/" className="inline-block" aria-label="Bowling Pleno Zenia — inicio">
              <img
                src="/logo-navy.png"
                alt="Bowling Pleno Zenia — Bolera en Orihuela Costa"
                className="h-16 w-auto object-contain"
                itemProp="image"
              />
            </a>

            {/* PostalAddress — solo campos de dirección, sin name */}
            <address
              className="not-italic mt-3 text-white/60 text-xs leading-relaxed"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">Calle Jade 2, CC Zenia Boulevard</span><br />
              <span itemProp="addressLocality">Orihuela Costa</span>,{" "}
              <span itemProp="addressRegion">Alicante</span>{" "}
              <span itemProp="postalCode">03189</span>
            </address>

            {/* aggregateRating — ratingValue con punto, reviewCount entero */}
            <p
              className="mt-2 text-white/60 text-xs"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <meta itemProp="ratingValue" content="4.3" />
              <meta itemProp="reviewCount" content="1230" />
              <meta itemProp="bestRating" content="5" />
              ⭐ 4,3 Google · +1.230 reseñas
            </p>

            <a
              href="tel:+34965355815"
              className="mt-2 block text-white/60 text-xs hover:text-white transition-colors"
            >
              📞 965 35 58 15
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">{t("servicesTitle")}</h4>
            <ul className="space-y-2.5">
              {[
                ["/bolera-y-precios",                 "links.bolera"],
                ["/irish-pub-y-bar",                   "links.pub"],
                ["/arcade-y-juegos",                   "links.arcade"],
              ].map(([href, key]) => (
                <li key={key}><a href={href} className="text-sm text-white/70 hover:text-white transition-colors">{t(key)}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">{t("scheduleTitle")}</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{t("scheduleItems.0")}</li>
              <li>{t("scheduleItems.1")}</li>
              <li>{t("scheduleItems.2")}</li>
              <li>{t("scheduleItems.3")}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">{t("contactTitle")}</h4>
            <ul className="space-y-2.5">
              <li><a href="tel:+34965355815" className="text-sm text-white/70 hover:text-white transition-colors">📞 965 35 58 15</a></li>
              <li><a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">💬 WhatsApp</a></li>
              <li><a href="https://maps.google.com/?q=Bowling+Pleno+Zenia" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">{t("howToGet")}</a></li>
            </ul>
            <h4 className="mt-6 mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">{t("followTitle")}</h4>
            <div className="flex gap-3">
              {[["FB","https://facebook.com"],["IG","https://instagram.com"],["TT","https://tiktok.com"],["YT","https://youtube.com"]].map(([label,href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="size-8 flex items-center justify-center border border-white/30 text-xs font-bold text-white/70 hover:border-brand-red hover:text-brand-red transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/20 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>
          <div className="flex gap-4">
            <a href="https://bowlingzenia.com/politica-de-cookies-2/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">{t("legal")}</a>
            <a href="https://bowlingzenia.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">{t("privacy")}</a>
            <a href="https://bowlingzenia.com/politica-de-cookies/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">{t("cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
