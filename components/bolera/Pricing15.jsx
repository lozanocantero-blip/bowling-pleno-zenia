"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";
import { useTranslations } from "next-intl";

const PriceCard = ({ price, label, primary, wide, perPerson, features }) => (
  <div className={`flex flex-col justify-between p-8 border-2 ${wide ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full" : ""} ${primary ? "border-brand-red bg-brand-navy text-white" : "border-brand-navy/20 bg-white"}`}>
    <div>
      <div className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 rounded-full ${primary ? "bg-brand-red text-white" : "bg-brand-blue-light text-brand-navy"}`}>{label}</div>
      <div className={`text-6xl font-black uppercase mb-1 md:text-8xl lg:text-9xl ${primary ? "text-white" : "text-brand-navy"}`}>{price}</div>
      <p className={`text-sm mb-6 ${primary ? "text-white/60" : "text-brand-navy/50"}`}>{perPerson}</p>
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
  </div>
);

export function Pricing15() {
  const t = useTranslations("bolera_page.pricing");
  const features = t.raw("features");
  const perPerson = t("perPerson");
  return (
    <section id="tarifas" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-blue-light">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="label-red mb-3">{t("label")}</p>
          <h2 className="text-5xl md:text-7xl uppercase leading-none mb-4">{t("h2")}</h2>
          <p className="text-brand-navy/60 md:text-md">{t("sub")}</p>
        </div>
        <Tabs defaultValue="baja">
          <TabsList className="mx-auto mb-10 flex w-fit border-2 border-brand-navy/20 bg-white p-1 rounded-full">
            <TabsTrigger value="baja" className="px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full data-[state=active]:bg-brand-navy data-[state=active]:text-white transition-colors">{t("tabLow")}</TabsTrigger>
            <TabsTrigger value="alta" className="px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full data-[state=active]:bg-brand-navy data-[state=active]:text-white transition-colors">{t("tabHigh")}</TabsTrigger>
          </TabsList>
          <TabsContent value="baja" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
            <PriceCard price="4,50€" label={t("labelWeekday")} primary={false} perPerson={perPerson} features={features} />
            <PriceCard price="6,00€" label={t("labelWeekend")} primary={true} perPerson={perPerson} features={features} />
          </TabsContent>
          <TabsContent value="alta" className="grid grid-cols-1 gap-6 data-[state=active]:animate-tabs md:grid-cols-2">
            <PriceCard price="6,00€" label={t("labelSummer")} primary={true} wide={true} perPerson={perPerson} features={features} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
