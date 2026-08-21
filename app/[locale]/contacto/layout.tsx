import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, localizedUrl, toLocale, type Locale } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/shared/BreadcrumbSchema'

const PATH = 'contacto'
const crumb: Record<Locale, string> = {
  es: 'Contacto',
  en: 'Contact',
  de: 'Kontakt',
  ru: 'Контакты',
}
type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Contacto, Horarios y Cómo Llegar — Orihuela Costa',
    en: 'Contact, Opening Hours & Directions — Orihuela Costa',
    de: 'Kontakt, Öffnungszeiten & Anfahrt — Orihuela Costa',
    ru: 'Контакты, часы работы и как добраться — Орихуэла-Коста',
  }
  const descriptions: Record<string, string> = {
    es: 'Bowling Pleno Zenia, en Zenia Boulevard (Calle Jade 2, Orihuela Costa). Abierto 365 días: L-V 14:00-23:30, findes 12:00-00:00, verano 11:00-01:00.',
    en: 'Bowling Pleno Zenia at Zenia Boulevard (Calle Jade 2, Orihuela Costa). Open 365 days: Mon-Fri 2pm-11:30pm, weekends 12pm-12am, summer 11am-1am.',
    de: 'Bowling Pleno Zenia im Zenia Boulevard (Calle Jade 2, Orihuela Costa). 365 Tage geöffnet: Mo-Fr 14-23:30, Wochenende 12-24 Uhr, Sommer 11-1 Uhr.',
    ru: 'Bowling Pleno Zenia в Zenia Boulevard (Calle Jade 2, Орихуэла-Коста). Открыто 365 дней: пн-пт 14:00-23:30, выходные 12:00-00:00, летом 11:00-01:00.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, PATH),
    },
  }
}

export default async function ContactoLayout({
  children,
  params,
}: {
  children: React.ReactNode
} & LocaleParams) {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  return (
    <>
      <BreadcrumbSchema locale={locale} path={PATH} name={crumb[locale] ?? crumb.es} />
      {children}
    </>
  )
}
