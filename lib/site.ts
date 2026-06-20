// Configuración central del sitio para SEO.
//
// La URL base se lee de NEXT_PUBLIC_SITE_URL para que el día que se migre al
// dominio definitivo solo haya que cambiar esa variable de entorno (en Vercel
// o en el .env) — sin tocar metadatos, sitemap, robots ni schema.
//
// Mientras no exista la variable, se usa el dominio actual de Vercel.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bowling-pleno-zenia.vercel.app'
).replace(/\/$/, '')

export const locales = ['es', 'en', 'de', 'ru'] as const
export const defaultLocale = 'es'

// Slugs de las páginas (mismo path en todos los idiomas).
// '' representa la home.
export const pages = [
  '',
  'bolera-y-precios',
  'arcade-y-juegos',
  'irish-pub-y-bar',
  'cumpleanos-y-celebraciones',
] as const

// Construye la URL absoluta para un (locale, slug) respetando localePrefix
// 'as-needed': el idioma por defecto (es) no lleva prefijo.
export function localizedUrl(locale: string, slug = ''): string {
  const path =
    locale === defaultLocale
      ? slug
      : slug
        ? `${locale}/${slug}`
        : locale
  return path ? `${SITE_URL}/${path}` : SITE_URL
}

// Mapa de hreflang { es: url, en: url, ... } para un slug dado.
export function languageAlternates(slug = ''): Record<string, string> {
  const map: Record<string, string> = {}
  for (const l of locales) map[l] = localizedUrl(l, slug)
  map['x-default'] = localizedUrl(defaultLocale, slug)
  return map
}
