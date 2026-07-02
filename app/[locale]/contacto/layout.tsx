import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildAlternates, localizedUrl, toLocale, type Locale } from '@/lib/site'
import { BreadcrumbSchema } from '@/components/shared/BreadcrumbSchema'

const PATH = 'contacto'
const crumb: Record<Locale, string> = {
  es: 'Contacto',
  en: 'Contact',
  de: 'Kontakt',
  ru: 'Контакты',
}
type LocaleParams = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  const titles: Record<string, string> = {
    es: 'Contacto y cómo llegar — Orihuela Costa',
    en: 'Contact & how to find us — Orihuela Costa',
    de: 'Kontakt & Anfahrt — Orihuela Costa',
    ru: 'Контакты и как добраться — Орихуэла-Коста',
  }
  const descriptions: Record<string, string> = {
    es: 'Contacta con Bowling Pleno Zenia en Zenia Boulevard, Orihuela Costa (Calle Jade 2). Escríbenos para grupos, eventos y reservas. Abiertos 365 días.',
    en: 'Contact Bowling Pleno Zenia at Zenia Boulevard, Orihuela Costa (Calle Jade 2). Get in touch for groups, events and bookings. Open 365 days a year.',
    de: 'Kontaktiere Bowling Pleno Zenia am Zenia Boulevard, Orihuela Costa (Calle Jade 2). Für Gruppen, Events und Reservierungen. 365 Tage im Jahr geöffnet.',
    ru: 'Свяжитесь с Bowling Pleno Zenia в Zenia Boulevard, Орихуэла-Коста (Calle Jade 2). Группы, мероприятия и бронирование. Открыто 365 дней в году.',
  }
  return {
    title: titles[locale] ?? titles.es,
    description: descriptions[locale] ?? descriptions.es,
    alternates: buildAlternates(locale, PATH),
    openGraph: {
      title: titles[locale] ?? titles.es,
      description: descriptions[locale] ?? descriptions.es,
      url: localizedUrl(locale, PATH),
    },
  }
}

export default async function ContactoLayout({
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
