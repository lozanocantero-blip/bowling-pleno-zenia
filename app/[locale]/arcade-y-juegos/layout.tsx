import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const titles: Record<string, string> = {
    es: 'Sala Arcade en Orihuela Costa — Simuladores, Tickets y Premios · Bowling Pleno Zenia',
    en: 'Arcade Room in Orihuela Costa — Simulators, Tickets & Prizes · Bowling Pleno Zenia',
    de: 'Arcade-Halle in Orihuela Costa — Simulatoren, Tickets & Preise · Bowling Pleno Zenia',
    ru: 'Аркадный зал в Орихуэла-Коста — симуляторы, билеты и призы · Bowling Pleno Zenia',
  }
  const descriptions: Record<string, string> = {
    es: 'La mejor sala arcade en Orihuela Costa. Más de 30 máquinas recreativas: simuladores, redemption con tickets canjeables por premios, billar y futbolín. Zenia Boulevard, abiertos 365 días.',
    en: 'The best arcade room in Orihuela Costa. Over 30 machines: simulators, redemption with prizes, pool and foosball. Zenia Boulevard, open 365 days.',
    de: 'Die beste Arcade-Halle in Orihuela Costa. Über 30 Maschinen: Simulatoren, Redemption mit einlösbaren Tickets, Billard und Tischfußball. Zenia Boulevard.',
    ru: 'Лучший аркадный зал в Орихуэла-Коста. Более 30 автоматов: симуляторы, redemption с призами, бильярд и настольный футбол. Zenia Boulevard.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: 'https://bowling-pleno-zenia.vercel.app/arcade-y-juegos',
      languages: {
        'es': 'https://bowling-pleno-zenia.vercel.app/arcade-y-juegos',
        'en': 'https://bowling-pleno-zenia.vercel.app/en/arcade-y-juegos',
        'de': 'https://bowling-pleno-zenia.vercel.app/de/arcade-y-juegos',
        'ru': 'https://bowling-pleno-zenia.vercel.app/ru/arcade-y-juegos',
      },
    },
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: 'https://bowling-pleno-zenia.vercel.app/arcade-y-juegos',
      images: [{ url: '/images/arcade-orihuela-costa-maquinas-recreativas.png', width: 1200, height: 630, alt: 'Sala arcade Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default function ArcadeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
