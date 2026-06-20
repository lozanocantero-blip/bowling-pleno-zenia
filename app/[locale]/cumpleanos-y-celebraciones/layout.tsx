import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { localizedUrl, languageAlternates } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const titles: Record<string, string> = {
    es: 'Cumpleaños y Celebraciones en Orihuela Costa · Bowling Pleno Zenia',
    en: 'Birthdays & Celebrations in Orihuela Costa · Bowling Pleno Zenia',
    de: 'Geburtstage & Feiern in Orihuela Costa · Bowling Pleno Zenia',
    ru: 'Дни рождения и праздники в Орихуэла-Коста · Bowling Pleno Zenia',
  }
  const descriptions: Record<string, string> = {
    es: 'Celebra cumpleaños infantiles, despedidas y eventos de empresa en Bowling Pleno Zenia, Orihuela Costa. Bolera, arcade y pub irlandés en Zenia Boulevard. Packs para grupos, abiertos 365 días.',
    en: 'Host kids’ birthdays, hen/stag parties and company events at Bowling Pleno Zenia, Orihuela Costa. Bowling, arcade and Irish pub at Zenia Boulevard. Group packages, open 365 days.',
    de: 'Feiern Sie Kindergeburtstage, Junggesellenabschiede und Firmenevents im Bowling Pleno Zenia, Orihuela Costa. Bowling, Arcade und Irish Pub am Zenia Boulevard. Gruppenpakete, 365 Tage geöffnet.',
    ru: 'Отмечайте детские дни рождения, девичники и корпоративы в Bowling Pleno Zenia, Орихуэла-Коста. Боулинг, аркада и ирландский паб в Zenia Boulevard. Пакеты для групп, открыто 365 дней.',
  }
  return {
    title: { absolute: titles[locale] ?? titles.es },
    description: descriptions[locale] ?? descriptions.es,
    alternates: {
      canonical: localizedUrl(locale, 'cumpleanos-y-celebraciones'),
      languages: languageAlternates('cumpleanos-y-celebraciones'),
    },
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, 'cumpleanos-y-celebraciones'),
      images: [{ url: '/images/bolera.jpeg', width: 1200, height: 630, alt: 'Cumpleaños y celebraciones en Bowling Pleno Zenia Orihuela Costa' }],
    },
  }
}

export default function CumpleanosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
