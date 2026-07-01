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
    es: 'Bolera en Orihuela Costa — 10 Pistas sin Reserva · Bowling Pleno Zenia',
    en: 'Bowling in Orihuela Costa — 10 Lanes, No Reservation · Bowling Pleno Zenia',
    de: 'Bowling in Orihuela Costa — 10 Bahnen ohne Reservierung · Bowling Pleno Zenia',
    ru: 'Боулинг в Орихуэла-Коста — 10 дорожек без брони · Bowling Pleno Zenia',
  }
  const descriptions: Record<string, string> = {
    es: 'Juega al bowling en Orihuela Costa sin reserva previa. 10 pistas para todas las edades, bumpers para niños y bolas de todos los pesos. Desde 4,50€. Zenia Boulevard, abiertos 365 días.',
    en: 'Play bowling in Orihuela Costa with no reservation needed. 10 lanes for all ages, bumpers for kids. From €4.50. Zenia Boulevard, open 365 days a year.',
    de: 'Bowling in Orihuela Costa ohne Voranmeldung. 10 Bahnen für jedes Alter, Bumper für Kinder. Ab 4,50€. Zenia Boulevard, 365 Tage geöffnet.',
    ru: 'Боулинг в Орихуэла-Коста без предварительной записи. 10 дорожек для всех возрастов, бамперы для детей. От 4,50€. Zenia Boulevard, открыто 365 дней.',
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
