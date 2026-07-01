import type { MetadataRoute } from 'next'
import { localizedUrl, languageAlternates } from '@/lib/site'

// Indexable routes only. Legal pages are noindex; cumpleaños redirects to home.
const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: 'bolera-y-precios', priority: 0.9 },
  { path: 'arcade-y-juegos', priority: 0.8 },
  { path: 'irish-pub-y-bar', priority: 0.8 },
  { path: 'contacto', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority }) => ({
    url: localizedUrl('es', path),
    lastModified,
    changeFrequency: 'monthly',
    priority,
    alternates: {
      // Drop x-default here; sitemap alternates take language keys only.
      languages: Object.fromEntries(
        Object.entries(languageAlternates(path)).filter(([k]) => k !== 'x-default')
      ),
    },
  }))
}
