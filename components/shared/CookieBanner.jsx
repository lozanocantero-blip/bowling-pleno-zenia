"use client";

import { useState, useEffect } from "react";

const COOKIE_KEY = "bpz_cookie_consent"; // bowling pleno zenia

export function CookieBanner() {
  const [status, setStatus] = useState(null); // null | "visible" | "settings" | "hidden"

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY);
      if (saved) {
        setStatus("hidden");
      } else {
        // pequeño delay para que no tape el hero inmediatamente
        const t = setTimeout(() => setStatus("visible"), 900);
        return () => clearTimeout(t);
      }
    } catch {
      setStatus("visible");
    }
  }, []);

  function save(value) {
    try { localStorage.setItem(COOKIE_KEY, value); } catch {}
    setStatus("hidden");
  }

  if (!status || status === "hidden") return null;

  // ── Panel de gestión de preferencias ──────────────────────────────────────
  if (status === "settings") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Gestionar preferencias de cookies"
        className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-4"
        style={{ background: "rgba(10,16,32,0.75)", backdropFilter: "blur(4px)" }}
      >
        <div
          className="w-full max-w-lg bg-white text-brand-navy"
          style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
        >
          {/* Header */}
          <div className="px-7 pt-7 pb-5 border-b border-brand-navy/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red mb-1">Privacidad</p>
            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "var(--font-heading,'Barlow Condensed',sans-serif)",
                fontWeight: 900,
                fontSize: "clamp(1.6rem,5vw,2.2rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Gestionar el Consentimiento
            </h2>
          </div>

          {/* Toggles */}
          <div className="px-7 py-5 space-y-4">
            {/* Esenciales — siempre activas */}
            <CookieRow
              label="Cookies esenciales"
              desc="Necesarias para el funcionamiento básico del sitio. No se pueden desactivar."
              locked
              checked
            />
            {/* Analíticas */}
            <CookieRow
              label="Cookies analíticas"
              desc="Nos ayudan a entender cómo los visitantes usan la web (Google Analytics)."
              id="analytics"
            />
            {/* Marketing */}
            <CookieRow
              label="Cookies de marketing"
              desc="Se usan para mostrar anuncios relevantes en otras plataformas."
              id="marketing"
            />
          </div>

          {/* Acciones */}
          <div className="px-7 pb-7 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => save("all")}
              className="flex-1 py-3 text-xs font-black uppercase tracking-[0.15em] text-white transition-colors hover:bg-red-700"
              style={{ background: "#E82040", borderRadius: "8px" }}
            >
              Aceptar todas
            </button>
            <button
              onClick={() => save("essential")}
              className="flex-1 py-3 text-xs font-black uppercase tracking-[0.15em] border-2 transition-colors hover:bg-brand-navy hover:text-white"
              style={{ borderColor: "#1A2744", color: "#1A2744", borderRadius: "8px" }}
            >
              Solo esenciales
            </button>
          </div>

          {/* Links legales */}
          <div className="px-7 pb-6 flex gap-4 border-t border-brand-navy/10 pt-4">
            {[
              ["Política de cookies", "https://bowlingzenia.com/politica-de-cookies/"],
              ["Aviso legal", "https://bowlingzenia.com/politica-de-cookies-2/"],
              ["Privacidad", "https://bowlingzenia.com/politica-de-privacidad/"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 hover:text-brand-navy transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Banner principal ───────────────────────────────────────────────────────
  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-5"
      style={{
        animation: "cookie-slide-up 0.4s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div
        className="container max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
        style={{
          background: "#1A2744",
          borderRadius: "14px",
          padding: "20px 24px",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Texto */}
        <div className="flex-1 min-w-0">
          <p
            className="text-white font-black uppercase mb-1"
            style={{
              fontFamily: "var(--font-heading,'Barlow Condensed',sans-serif)",
              fontSize: "clamp(1rem,3vw,1.15rem)",
              letterSpacing: "-0.01em",
            }}
          >
            🍪 Usamos cookies
          </p>
          <p className="text-white/55 text-xs leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia y mostrarte contenido relevante.
            Puedes aceptarlas, rechazarlas o{" "}
            <button
              onClick={() => setStatus("settings")}
              className="underline text-white/75 hover:text-white transition-colors font-bold"
            >
              gestionar tus preferencias
            </button>
            .{" "}
            <a
              href="https://bowlingzenia.com/politica-de-cookies/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/55 hover:text-white/80 transition-colors"
            >
              Más info
            </a>
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setStatus("settings")}
            className="px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/70 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
            style={{ borderRadius: "8px" }}
          >
            Gestionar
          </button>
          <button
            onClick={() => save("essential")}
            className="px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/70 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
            style={{ borderRadius: "8px" }}
          >
            Rechazar
          </button>
          <button
            onClick={() => save("all")}
            className="px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-white hover:bg-red-700 transition-colors"
            style={{ background: "#E82040", borderRadius: "8px" }}
          >
            Aceptar todas
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookie-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ── Fila de toggle de cookie ───────────────────────────────────────────────
function CookieRow({ label, desc, locked, checked, id }) {
  const [on, setOn] = useState(checked ?? false);
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <p className="text-sm font-black uppercase tracking-wide text-brand-navy">{label}</p>
        <p className="text-xs text-brand-navy/50 leading-relaxed mt-0.5">{desc}</p>
      </div>
      <button
        role="switch"
        aria-checked={locked ? true : on}
        onClick={() => !locked && setOn(!on)}
        disabled={locked}
        className="shrink-0 mt-0.5 relative transition-colors"
        style={{
          width: 44, height: 24, borderRadius: 12,
          background: (locked || on) ? "#E82040" : "rgba(26,39,68,0.15)",
          cursor: locked ? "not-allowed" : "pointer",
          border: "none", padding: 0,
        }}
        aria-label={`${label} ${locked ? "(obligatoria)" : on ? "activada" : "desactivada"}`}
      >
        <span
          style={{
            position: "absolute", top: 3, borderRadius: "50%",
            width: 18, height: 18, background: "white",
            transition: "left 0.2s",
            left: (locked || on) ? 23 : 3,
            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
}
