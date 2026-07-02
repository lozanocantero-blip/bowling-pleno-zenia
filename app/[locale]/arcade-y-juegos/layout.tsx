import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, localizedUrl, toLocale, type Locale } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/shared/BreadcrumbSchema'

const PATH = 'arcade-y-juegos'
const crumb: Record<Locale, string> = {
  es: 'Arcade y juegos',
  en: 'Arcade & games',
  de: 'Arcade & Spiele',
  ru: 'Аркада и игры',
}
type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Sala Arcade en Orihuela Costa — Simuladores, Tickets y Premios',
    en: 'Arcade Room in Orihuela Costa — Simulators, Tickets & Prizes',
    de: 'Arcade-Halle in Orihuela Costa — Simulatoren, Tickets & Preise',
    ru: 'Аркадный зал в Орихуэла-Коста — симуляторы, билеты и призы',
  }
  const descriptions: Record<string, string> = {
    es: 'La mejor sala arcade en Orihuela Costa: más de 30 máquinas, simuladores, tickets canjeables por premios, billar y futbolín. Zenia Boulevard, 365 días.',
    en: 'The best arcade room in Orihuela Costa. Over 30 machines: simulators, redemption with prizes, pool and foosball. Zenia Boulevard, open 365 days.',
    de: 'Die beste Arcade-Halle in Orihuela Costa. Über 30 Maschinen: Simulatoren, Redemption mit einlösbaren Tickets, Billard und Tischfußball. Zenia Boulevard.',
    ru: 'Лучший аркадный зал в Орихуэла-Коста. Более 30 автоматов: симуляторы, redemption с призами, бильярд и настольный футбол. Zenia Boulevard.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, PATH),
      images: [{ url: '/images/arcade-orihuela-costa-maquinas-recreativas.png', width: 1188, height: 886, alt: 'Sala arcade Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default async function ArcadeLayout({
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
