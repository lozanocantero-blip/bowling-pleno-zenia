import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, localizedUrl, toLocale, type Locale } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/shared/BreadcrumbSchema'

const PATH = 'irish-pub-y-bar'
const crumb: Record<Locale, string> = {
  es: 'Irish Pub y bar',
  en: 'Irish pub & bar',
  de: 'Irish Pub & Bar',
  ru: 'Ирландский паб и бар',
}
type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Dublin House — Pub Irlandés en Orihuela Costa',
    en: 'Dublin House — Irish Pub in Orihuela Costa',
    de: 'Dublin House — Irish Pub in Orihuela Costa',
    ru: 'Dublin House — ирландский паб в Орихуэла-Коста',
  }
  const descriptions: Record<string, string> = {
    es: 'El único pub irlandés de Orihuela Costa, en Zenia Boulevard. Guinness, Heineken y Cruzcampo de barril, dardos electrónicos y ambiente auténtico.',
    en: 'The only Irish pub in Orihuela Costa, at Zenia Boulevard. Guinness and Heineken on draught, electronic darts, cocktails and authentic atmosphere.',
    de: 'Der einzige Irish Pub in Orihuela Costa, am Zenia Boulevard. Guinness und Heineken vom Fass, Darts, Cocktails und authentische Atmosphäre.',
    ru: 'Единственный ирландский паб в Орихуэла-Коста, внутри Bowling Pleno Zenia в Zenia Boulevard. Guinness, Heineken на разлив, электронные дартс, коктейли.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, PATH),
      images: [{ url: '/images/interior-barra-ara%C3%B1a-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg', width: 1400, height: 1050, alt: 'Dublin House Irish Pub interior Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default async function PubLayout({
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
