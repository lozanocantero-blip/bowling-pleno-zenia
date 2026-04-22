"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

const PriceCard = ({ price, period, features, primary }) => (
  <div className={`flex flex-col justify-between p-8 border-2 ${primary ? "border-brand-red bg-brand-navy text-white" : "border-brand-navy/20 bg-white"}`}>
    <div>
      <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 ${primary ? "bg-brand-red text-white" : "bg-brand-blue-light text-brand-navy"}`}>
        {period}
      </div>
      <div className={`text-6xl font-black uppercase mb-1 ${primary ? "text-white" : "text-brand-navy"} md:text-8xl lg:text-9xl`}>
        {price}
      </div>
      <p className={`text-sm mb-6 ${primary ? "text-white/60" : "text-brand-navy/50"}`}>por persona · una partida</p>
      <div className={`h-px w-full mb-6 ${primary ? "bg-white/20" : "bg-brand-navy/10"}`} />
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <BiCheck className={`size-5 shrink-0 mt-0.5 ${primary ? "text-brand-red" : "text-brand-green"}`} />
            <span className={`text-sm ${primary ? "text-white/80" : "text-brand-navy/70"}`}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <a href="https://wa.me/34965355815" target="_blank" rel="noopener noreferrer"
      className={`mt-8 block text-center py-3.5 text-sm font-bold uppercase tracking-wider transition-colors ${primary ? "bg-brand-red text-white hover:bg-red-700" : "bg-brand-navy text-white hover:bg-brand-red"}`}>
      Reservar ahora
    </a>
  </div>
);

export function Pricing15() {
  return (
    <section id="tarifas" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="label-red mb-3">Tarifas</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">
            ¿Cuánto cuesta jugar?
          </h2>
          <p className="text-brand-navy/60 md:text-md">Los precios cambian según día de la semana y temporada</p>
        </div>

        <Tabs defaultValue="semana">
          <TabsList className="mx-auto mb-10 flex w-fit border-2 border-brand-navy/20 bg-white p-1">
            <TabsTrigger value="semana" className="px-6 py-2 text-sm font-bold uppercase tracking-wider data-[state=active]:bg-brand-navy data-[state=active]:text-white transition-colors">
              Lun — Vie
            </TabsTrigger>
            <TabsTrigger value="finde" className="px-6 py-2 text-sm font-bold uppercase tracking-wider data-[state=active]:bg-brand-navy data-[state=active]:text-white transition-colors">
              Sáb, Dom y Festivos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="semana" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
            <PriceCard price="4,50€" period="Ene — Jun" primary={false}
              features={["Una partida completa","Hasta 6 jugadores por pista","Bolas de todos los pesos","Zapatos propios permitidos"]} />
            <PriceCard price="6,00€" period="Jul — Ago" primary={true}
              features={["Una partida completa","Hasta 6 jugadores por pista","Bolas de todos los pesos","Bumpers para niños","Sin calzado especial"]} />
          </TabsContent>

          <TabsContent value="finde" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
            <PriceCard price="5,00€" period="Ene — Jun" primary={false}
              features={["Una partida completa","Hasta 6 jugadores","Sin obligación de calzado especial","Bumpers disponibles"]} />
            <PriceCard price="6,00€" period="Jul — Ago" primary={true}
              features={["Una partida completa","Hasta 6 jugadores por pista","Bolas de todos los pesos","Bumpers para niños","Acceso a máquinas arcade"]} />
          </TabsContent>
        </Tabs>

        <p className="text-center text-brand-navy/40 text-xs mt-8">
          Precios por persona. Menores de 4 años gratis. Sin reserva previa.
        </p>
      </div>
    </section>
  );
}
