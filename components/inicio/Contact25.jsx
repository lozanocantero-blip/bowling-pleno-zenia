"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact25() {
  return (
    <section id="ubicacion" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <p className="label-red mb-3">Ubicación</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase leading-none">
            Estamos en<br />Zenia Boulevard
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-md mx-auto md:text-md">
            Planta baja del centro comercial. Parking gratuito para todos los visitantes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">

          {/* Google Maps iframe */}
          <div>
            <div className="overflow-hidden mb-4 w-full" style={{ height: "384px" }}>
              <iframe
                title="Bowling Pleno Zenia - Zenia Boulevard"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354!2d-0.7336!3d37.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6326b0b0b0b0b0%3A0x0!2sBowling+Pleno+Zenia%2C+Zenia+Boulevard%2C+Orihuela+Costa!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses&q=Bowling+Pleno+Zenia+Zenia+Boulevard+Orihuela+Costa"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Cómo llegar</h3>
            <p className="text-brand-navy/60 text-sm mb-4">
              Calle Jade 2, planta baja, CC Zenia Boulevard, Orihuela Costa (Alicante)
            </p>
            <a
              href="https://maps.google.com/?q=Bowling+Pleno+Zenia+Zenia+Boulevard+Orihuela+Costa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-red hover:underline"
            >
              Abrir en Google Maps <RxChevronRight className="size-4" />
            </a>
          </div>

          {/* Info card */}
          <div className="bg-brand-blue-light p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-6">Info rápida</h3>
              <div className="space-y-4">
                {[
                  ["📍", "Dónde", "Planta baja, Zenia Boulevard, Orihuela Costa"],
                  ["🅿️", "Parking", "Gratuito en el centro comercial"],
                  ["🎳", "Pistas", "10 pistas · Sin reserva previa · Sin calzado especial"],
                  ["⭐", "Valoración", "4,3/5 en Google con más de 1.230 reseñas"],
                  ["📅", "Apertura", "Abiertos los 365 días del año"],
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-xl shrink-0">{icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-red">{label}</p>
                      <p className="text-brand-navy text-sm leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+34965355815"
                className="bg-brand-navy text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-red transition-colors">
                Llamar
              </a>
              <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
                className="border-2 border-brand-navy text-brand-navy px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
