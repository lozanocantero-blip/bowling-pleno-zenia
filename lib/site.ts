// Centralized site URL + i18n URL helpers.
// The production URL comes from NEXT_PUBLIC_SITE_URL (set in Vercel).
// Fallback is the real domain so canonicals/hreflang never point to *.vercel.app.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bowlingzenia.com'
).replace(/\/+$/, '')

export const locales = ['es', 'en', 'de', 'ru'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

/** Narrow an unknown route param to a valid Locale (falls back to default). */
export function toLocale(raw: string | undefined): Locale {
  return (locales as readonly string[]).includes(raw ?? '')
    ? (raw as Locale)
    : defaultLocale
}

// OpenGraph locale codes per app locale.
export const ogLocale: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_GB',
  de: 'de_DE',
  ru: 'ru_RU',
}

/**
 * Absolute URL for a route in a given locale.
 * localePrefix is 'as-needed', so the default locale (es) has no prefix.
 * `path` is the route without locale (e.g. 'bolera-y-precios' or '' for home).
 */
export function localizedUrl(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '')
  const prefix = locale === defaultLocale ? '' : `/${locale}`
  const suffix = clean ? `/${clean}` : ''
  return `${SITE_URL}${prefix}${suffix}` || SITE_URL
}

/** hreflang map (es/en/de/ru + x-default → default locale). */
export function languageAlternates(path = ''): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = localizedUrl(locale, path)
  }
  languages['x-default'] = localizedUrl(defaultLocale, path)
  return languages
}

/**
 * Metadata `alternates` block: canonical points to the *current* locale's own
 * URL (self-referencing canonical), plus the full hreflang set.
 */
export function buildAlternates(locale: Locale, path = '') {
  return {
    canonical: localizedUrl(locale, path),
    languages: languageAlternates(path),
  }
}
