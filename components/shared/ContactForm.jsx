"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const DESTINO = "plenozenia@gmail.com";

export function ContactForm() {
  const t = useTranslations("contact_page");
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    data.append("_subject", "Nuevo mensaje desde la web de Bowling Pleno Zenia");
    data.append("_template", "table");
    data.append("_captcha", "false");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full border-2 border-brand-navy/20 bg-white px-4 py-3 text-brand-navy focus:border-brand-red focus:outline-none transition-colors";

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-xl">
        <div className="mb-8 text-center md:mb-12">
          <p className="label-red mb-3">{t("label")}</p>
          <h1 className="text-brand-navy text-5xl md:text-7xl uppercase leading-none mb-5">
            {t("title")}
          </h1>
          <p className="text-brand-navy/70 md:text-md">
            {t("intro")}{" "}
            <a href={`mailto:${DESTINO}`} className="font-bold text-brand-red underline">
              {DESTINO}
            </a>
            .
          </p>
        </div>

        {status === "ok" ? (
          <div className="border-2 border-brand-navy/20 p-8 text-center">
            <h2 className="text-brand-navy text-3xl uppercase mb-3">{t("sentTitle")}</h2>
            <p className="text-brand-navy/70">
              {t("sentBody")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="nombre" className="text-sm font-bold uppercase tracking-wider text-brand-navy">{t("name")}</label>
              <input id="nombre" name="Nombre" type="text" required className={inputCls} />
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-brand-navy">{t("email")}</label>
              <input id="email" name="Email" type="email" required className={inputCls} />
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="telefono" className="text-sm font-bold uppercase tracking-wider text-brand-navy">{t("phone")}</label>
              <input id="telefono" name="Telefono" type="tel" className={inputCls} />
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label htmlFor="mensaje" className="text-sm font-bold uppercase tracking-wider text-brand-navy">{t("message")}</label>
              <textarea id="mensaje" name="Mensaje" required rows={5} className={inputCls} />
            </div>

            {status === "error" && (
              <p className="text-sm text-brand-red font-bold">
                {t("error")} {DESTINO}.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-brand-red text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
