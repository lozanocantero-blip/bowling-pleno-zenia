"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const locales = [
  { code: 'es', label: 'ES', countryCode: 'es' },
  { code: 'en', label: 'EN', countryCode: 'gb' },
  { code: 'de', label: 'DE', countryCode: 'de' },
  { code: 'ru', label: 'RU', countryCode: 'ru' },
];

function FlagImg({ countryCode, label }) {
  return (
    <img
      src={`https://flagcdn.com/20x15/${countryCode}.png`}
      srcSet={`https://flagcdn.com/40x30/${countryCode}.png 2x`}
      width="20"
      height="15"
      alt={label}
      style={{ borderRadius: '2px', objectFit: 'cover', display: 'block', flexShrink: 0 }}
    />
  );
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(newLocale) {
    let newPath = pathname;
    const localePrefix = `/${locale}`;
    if (newPath.startsWith(localePrefix + '/')) {
      newPath = newPath.slice(localePrefix.length);
    } else if (newPath === localePrefix) {
      newPath = '/';
    }
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
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors px-2 py-1.5"
        aria-label="Cambiar idioma / Change language"
        aria-expanded={open}
      >
        <FlagImg countryCode={current.countryCode} label={current.label} />
        <span>{current.label}</span>
        <svg
          className={`size-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-full mt-2 z-50 bg-white shadow-xl border border-brand-navy/10 py-1 overflow-hidden"
            style={{ borderRadius: '10px', minWidth: '120px' }}
          >
            {locales.map(l => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-brand-blue-light ${
                  l.code === locale
                    ? 'text-brand-red bg-brand-blue-light'
                    : 'text-brand-navy/70'
                }`}
              >
                <FlagImg countryCode={l.countryCode} label={l.label} />
                <span>{l.label}</span>
                {l.code === locale && (
                  <span className="ml-auto text-brand-red text-[10px]">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
