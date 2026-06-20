import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// robots.txt: permite el rastreo completo y apunta al sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
