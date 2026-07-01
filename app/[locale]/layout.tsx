import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { CookieBanner } from '@/components/shared/CookieBanner'
import { SchemaOrg } from '@/components/shared/SchemaOrg'
import { SITE_URL, buildAlternates, localizedUrl, ogLocale, type Locale } from '@/lib/site'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type LocaleParams = { params: Promise<{ locale: string }> }

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

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale: raw } = await params
  const locale = (hasLocale(routing.locales, raw) ? raw : routing.defaultLocale) as Locale
  setRequestLocale(locale)

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
    metadataBase: new URL(SITE_URL),
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
    alternates: buildAlternates(locale, ''),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, ''),
      siteName: 'Bowling Pleno Zenia',
      locale: ogLocale[locale] ?? 'es_ES',
      type: 'website',
      images: [{ url: '/images/bolera.jpeg', width: 1920, height: 1440, alt: 'Bowling Pleno Zenia — Bolera, Arcade y Pub Irlandés en Orihuela Costa' }],
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
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
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
