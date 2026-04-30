import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const titles: Record<string, string> = {
    es: 'Dublin House — Pub Irlandés en Orihuela Costa · Único en la zona',
    en: 'Dublin House — Irish Pub in Orihuela Costa · Unique in the area',
    de: 'Dublin House — Irish Pub in Orihuela Costa · Einzigartig in der Region',
    ru: 'Dublin House — ирландский паб в Орихуэла-Коста · Единственный в районе',
  }
  const descriptions: Record<string, string> = {
    es: 'El único pub irlandés de Orihuela Costa, dentro de Bowling Pleno Zenia en Zenia Boulevard. Guinness, Heineken y Cruzcampo de barril, dardos electrónicos, cócteles y ambiente auténtico.',
    en: 'The only Irish pub in Orihuela Costa, inside Bowling Pleno Zenia at Zenia Boulevard. Guinness, Heineken on draught, electronic darts, cocktails and authentic atmosphere.',
    de: 'Der einzige Irish Pub in Orihuela Costa, im Bowling Pleno Zenia am Zenia Boulevard. Guinness, Heineken vom Fass, elektronische Darts, Cocktails und authentische Atmosphäre.',
    ru: 'Единственный ирландский паб в Орихуэла-Коста, внутри Bowling Pleno Zenia в Zenia Boulevard. Guinness, Heineken на разлив, электронные дартс, коктейли.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: 'https://bowling-pleno-zenia.vercel.app/irish-pub-y-bar',
      languages: {
        'es': 'https://bowling-pleno-zenia.vercel.app/irish-pub-y-bar',
        'en': 'https://bowling-pleno-zenia.vercel.app/en/irish-pub-y-bar',
        'de': 'https://bowling-pleno-zenia.vercel.app/de/irish-pub-y-bar',
        'ru': 'https://bowling-pleno-zenia.vercel.app/ru/irish-pub-y-bar',
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: 'https://bowling-pleno-zenia.vercel.app/irish-pub-y-bar',
      images: [{ url: '/images/interior-barra-ara%C3%B1a-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg', width: 1200, height: 630, alt: 'Dublin House Irish Pub interior Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default function PubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
