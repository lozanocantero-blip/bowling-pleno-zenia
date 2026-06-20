import type { MetadataRoute } from 'next'
import { locales, defaultLocale, pages, localizedUrl } from '@/lib/site'

// Sitemap con todas las páginas y sus alternativas de idioma (hreflang),
// generado a partir de la configuración central en lib/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((slug) => ({
    url: localizedUrl(defaultLocale, slug),
    changeFrequency: 'monthly',
    priority: slug === '' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, localizedUrl(l, slug)]),
      ),
    },
  }))
}
