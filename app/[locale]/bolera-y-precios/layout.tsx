import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, localizedUrl, toLocale, type Locale } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/shared/BreadcrumbSchema'

const PATH = 'bolera-y-precios'
const crumb: Record<Locale, string> = {
  es: 'Bolera y precios',
  en: 'Bowling & prices',
  de: 'Bowling & Preise',
  ru: 'Боулинг и цены',
}
type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Bolera en Orihuela Costa — Desde 4,50 €, sin Alquiler de Calzado',
    en: 'Bowling in Orihuela Costa — From €4.50, No Shoe Rental',
    de: 'Bowling in Orihuela Costa — Ab 4,50 €, ohne Schuhverleih',
    ru: 'Боулинг в Орихуэла-Коста — от 4,50 €, без аренды обуви',
  }
  const descriptions: Record<string, string> = {
    es: '10 pistas en Zenia Boulevard, a 10 min de Torrevieja. Desde 4,50 €, sin reserva y sin alquilar calzado. Bumpers para niños. Abierto 365 días.',
    en: '10 lanes at Zenia Boulevard, 10 min from Torrevieja. From €4.50, no booking and no shoe rental. Bumpers for kids. Open 365 days.',
    de: '10 Bahnen im Zenia Boulevard, 10 Min. von Torrevieja. Ab 4,50 €, ohne Reservierung und ohne Schuhverleih. Bumper für Kinder. 365 Tage geöffnet.',
    ru: '10 дорожек в Zenia Boulevard, 10 минут от Торревьехи. От 4,50 €, без брони и без аренды обуви. Бамперы для детей. Открыто 365 дней.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, PATH),
      images: [{ url: '/images/bolera-orihuela-costa-10-pistas.jpg', width: 1920, height: 1440, alt: '10 pistas de bowling Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default async function BoleraLayout({
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
