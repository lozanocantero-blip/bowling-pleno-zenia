import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'
import { CookieBanner } from '@/components/shared/CookieBanner'
import { SchemaOrg } from '@/components/shared/SchemaOrg'
import '../globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()

  const titles: Record<string, string> = {
    es: 'Bolera en Orihuela Costa · Arcade, Pub y Cumpleaños',
    en: 'Bowling in Orihuela Costa · Arcade, Pub & Birthdays',
    de: 'Bowling in Orihuela Costa · Arcade, Pub & Geburtstage',
    ru: 'Боулинг в Орихуэла-Коста · Аркада, Паб и Дни рождения',
  }
  const descriptions: Record<string, string> = {
    es: 'Bowling Pleno Zenia, la bolera en Orihuela Costa con 10 pistas, arcade, pub irlandés y fiestas de cumpleaños. Abiertos 365 días. ¡Reserva hoy!',
    en: 'Bowling Pleno Zenia, the bowling alley in Orihuela Costa with 10 lanes, arcade, Irish pub and birthday parties. Open 365 days. Book today!',
    de: 'Bowling Pleno Zenia, die Bowlingbahn in Orihuela Costa mit 10 Bahnen, Arcade, Irish Pub und Geburtstagspartys. 365 Tage geöffnet. Jetzt buchen!',
    ru: 'Bowling Pleno Zenia — боулинг-клуб в Орихуэла-Коста: 10 дорожек, аркада, ирландский паб и дни рождения. Открыто 365 дней. Бронируйте сейчас!',
  }

  return {
    title: {
      default: titles[locale] ?? titles.es,
      template: '%s · Bowling Pleno Zenia',
    },
    description: descriptions[locale] ?? descriptions.es,
    keywords: [
      'bolera en Orihuela Costa', 'bowling Orihuela Costa',
      'Bowling Pleno Zenia', 'bolera Zenia Boulevard',
      'cumpleaños infantiles Orihuela Costa', 'pub irlandés Orihuela Costa',
      'ocio familiar Orihuela Costa', 'arcade Orihuela Costa',
    ],
    alternates: {
      canonical: 'https://bowling-pleno-zenia.vercel.app',
      languages: {
        'es': 'https://bowling-pleno-zenia.vercel.app',
        'en': 'https://bowling-pleno-zenia.vercel.app/en',
        'de': 'https://bowling-pleno-zenia.vercel.app/de',
        'ru': 'https://bowling-pleno-zenia.vercel.app/ru',
        'x-default': 'https://bowling-pleno-zenia.vercel.app',
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: 'https://bowling-pleno-zenia.vercel.app',
      siteName: 'Bowling Pleno Zenia',
      locale: locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_GB' : locale === 'de' ? 'de_DE' : 'ru_RU',
      type: 'website',
      images: [{ url: '/images/bolera.jpeg', width: 1200, height: 630, alt: 'Bowling Pleno Zenia — Bolera, Arcade y Pub Irlandés en Orihuela Costa' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      images: ['/images/bolera.jpeg'],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const messages = await getMessages()

  return (
    <html lang={(await params).locale}>
      <body className={barlowCondensed.variable + ' ' + inter.variable + ' antialiased'}>
        <SchemaOrg />
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
