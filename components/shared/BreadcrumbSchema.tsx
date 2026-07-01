// BreadcrumbList JSON-LD for interior pages.
// Home → current page, using the localized page name.
import { localizedUrl, type Locale } from '@/lib/site'

const homeName: Record<Locale, string> = {
  es: 'Inicio',
  en: 'Home',
  de: 'Startseite',
  ru: 'Главная',
}

export function BreadcrumbSchema({
  locale,
  path,
  name,
}: {
  locale: Locale
  path: string
  name: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeName[locale] ?? homeName.es,
        item: localizedUrl(locale, ''),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: localizedUrl(locale, path),
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
