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
    es: 'Bolera en Orihuela Costa · Arcade y Pub Irlandés',
    en: 'Bowling in Orihuela Costa · Arcade & Irish Pub',
    de: 'Bowling in Orihuela Costa · Arcade & Irish Pub',
    ru: 'Боулинг в Орихуэла-Коста · Аркада и ирландский паб',
  }
  const descriptions: Record<string, string> = {
    es: 'Bowling Pleno Zenia, la bolera en Orihuela Costa con 10 pistas, sala arcade y pub irlandés Dublin House. Sin reserva, abiertos 365 días. ¡Ven a jugar!',
    en: 'Bowling Pleno Zenia, the bowling alley in Orihuela Costa with 10 lanes, arcade room and Dublin House Irish pub. No booking needed, open 365 days.',
    de: 'Bowling Pleno Zenia, die Bowlingbahn in Orihuela Costa mit 10 Bahnen, Arcade und Irish Pub Dublin House. Ohne Reservierung, 365 Tage geöffnet.',
    ru: 'Bowling Pleno Zenia — боулинг-клуб в Орихуэла-Коста: 10 дорожек, аркада и ирландский паб Dublin House. Без записи, открыто 365 дней.',
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
      'pub irlandés Orihuela Costa',
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
