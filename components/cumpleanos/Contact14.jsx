"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-16">
          <p className="label-red mb-3">Reserva</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">Tu fecha te espera</h2>
          <p className="text-brand-navy/60 md:text-md">
            Elige tu paquete, confirma la fecha y nosotros nos encargamos del resto.
            Escríbenos por WhatsApp o llámanos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-20 items-start">
          {/* Contact options */}
          <div className="space-y-8">
            {[
              { Icon: BiPhone, title: "Teléfono", sub: "Llamadas y mensajes", href: "tel:+34965355815", link: "965 35 58 15" },
              { Icon: BiEnvelope, title: "WhatsApp", sub: "La forma más rápida", href: "https://wa.me/34965355815", link: "Escribir ahora →" },
              { Icon: BiMap, title: "Ubicación", sub: "Zenia Boulevard, planta baja, Orihuela Costa", href: "https://maps.google.com/?q=Bowling+Pleno+Zenia", link: "Ver en Google Maps →" },
            ].map(({ Icon, title, sub, href, link }) => (
              <div key={title} className="flex gap-4">
                <div className="size-12 bg-brand-blue-light flex items-center justify-center shrink-0">
                  <Icon className="size-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-sm tracking-wider mb-1">{title}</h3>
                  <p className="text-brand-navy/60 text-sm mb-1">{sub}</p>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-sm font-bold text-brand-red hover:underline">{link}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <a href="https://maps.google.com/?q=Bowling+Pleno+Zenia" target="_blank" rel="noopener noreferrer"
            className="block overflow-hidden">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Mapa Bowling Pleno Zenia"
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500 md:h-[480px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
