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
    es: 'Bolera en Orihuela Costa — 10 Pistas sin Reserva',
    en: 'Bowling in Orihuela Costa — 10 Lanes, No Reservation',
    de: 'Bowling in Orihuela Costa — 10 Bahnen ohne Reservierung',
    ru: 'Боулинг в Орихуэла-Коста — 10 дорожек без брони',
  }
  const descriptions: Record<string, string> = {
    es: 'Juega al bowling en Orihuela Costa, a 10 minutos de Torrevieja. 10 pistas sin reserva, bumpers para niños. Desde 4,50€. Zenia Boulevard, 365 días.',
    en: 'Play bowling in Orihuela Costa, 10 minutes from Torrevieja. 10 lanes, no booking needed, bumpers for kids. From €4.50. Zenia Boulevard, open 365 days.',
    de: 'Bowling in Orihuela Costa, 10 Minuten von Torrevieja. 10 Bahnen ohne Voranmeldung, Bumper für Kinder. Ab 4,50€. Zenia Boulevard, 365 Tage geöffnet.',
    ru: 'Боулинг в Орихуэла-Коста, в 10 минутах от Торревьехи. 10 дорожек без записи, бамперы для детей. От 4,50€. Zenia Boulevard, открыто 365 дней.',
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
