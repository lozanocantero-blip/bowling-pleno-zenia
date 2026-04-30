"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const locales = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(newLocale) {
    // Calcular la nueva ruta eliminando el prefijo de locale actual
    let newPath = pathname;

    // Quitar prefijo de locale actual si existe
    const localePrefix = `/${locale}`;
    if (newPath.startsWith(localePrefix + '/')) {
      newPath = newPath.slice(localePrefix.length);
    } else if (newPath === localePrefix) {
      newPath = '/';
    }

    // Añadir nuevo prefijo (si no es español por defecto)
    if (newLocale !== 'es') {
      newPath = `/${newLocale}${newPath === '/' ? '' : newPath}`;
    }

    router.push(newPath || '/');
    setOpen(false);
  }

  const current = locales.find(l => l.code === locale) || locales[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy/70 hover:text-brand-navy transition-colors px-2 py-1.5"
        aria-label="Cambiar idioma / Change language"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <svg className={`size-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 z-50 bg-white shadow-xl border border-brand-navy/10 overflow-hidden"
            style={{ borderRadius: '10px', minWidth: '110px' }}
          >
            {locales.map(l => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-brand-blue-light ${
                  l.code === locale ? 'text-brand-red bg-brand-blue-light' : 'text-brand-navy/70'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
                {l.code === locale && (
                  <span className="ml-auto text-brand-red">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
