"use client";

import React, { useState } from "react";

export function Footer5() {
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
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Newsletter</p>
            <h3 className="text-2xl font-black uppercase">Mantente informado</h3>
            <p className="text-white/70 text-sm mt-1">Eventos, promociones y novedades de Bowling Pleno Zenia</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/30 px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-red text-sm"
            />
            <button type="submit" className="bg-brand-red px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors whitespace-nowrap">
              Suscribir
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <a href="/" className="inline-block">
              <img src="/logo-navy.png" alt="Bowling Pleno Zenia" className="h-16 w-auto object-contain" />
            </a>
            <p className="mt-3 text-white/60 text-xs leading-relaxed">
              Calle Jade 2<br/>CC Zenia Boulevard<br/>Orihuela Costa, Alicante
            </p>
            <p className="mt-2 text-white/60 text-xs">
              ⭐ 4,3 Google · +1.230 reseñas
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Servicios</h4>
            <ul className="space-y-2.5">
              {[["Bolera y Precios","/bolera-y-precios"],["Cumpleaños","/cumpleanos-y-celebraciones"],["Irish Pub","/irish-pub-y-bar"],["Arcade","/arcade-y-juegos"]].map(([label,href]) => (
                <li key={label}><a href={href} className="text-sm text-white/70 hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Horarios</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>L–V: 14:00 – 23:30</li>
              <li>Sáb, Dom y Fest: 12:00 – 00:00</li>
              <li>Verano (Jul–Ago): 11:00 – 01:00</li>
              <li>Navidad y S.Santa: 12:00 – 00:00</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Contacto</h4>
            <ul className="space-y-2.5">
              <li><a href="tel:+34965355815" className="text-sm text-white/70 hover:text-white transition-colors">📞 965 35 58 15</a></li>
              <li><a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">💬 WhatsApp</a></li>
              <li><a href="https://maps.google.com/?q=Bowling+Pleno+Zenia" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">📍 Cómo llegar</a></li>
            </ul>
            <h4 className="mt-6 mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Síguenos</h4>
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
          <p>© 2025 Bowling Pleno Zenia S.L. · Todos los derechos reservados</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-white/70 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
