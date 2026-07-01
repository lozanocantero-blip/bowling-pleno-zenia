import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, toLocale } from '@/lib/site'

type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Política de cookies',
    en: 'Cookie policy',
    de: 'Cookie-Richtlinie',
    ru: 'Политика использования файлов cookie',
  }
  return {
    title: titles[locale] ?? titles.es,
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, 'politica-de-cookies'),
  }
}

export default async function CookiesLayout({
  children,
  params,
}: {
  children: React.ReactNode
} & LocaleParams) {
  setRequestLocale(toLocale((await params).locale))
  return <>{children}</>
}
