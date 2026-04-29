import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  // ── Title ───────────────────────────────────────────────────────────────────
  // default para la home · template para páginas internas (añade la marca)
  title: {
    default: 'Bolera en Orihuela Costa · Arcade, Pub y Cumpleaños',
    template: '%s · Bowling Pleno Zenia',
  },

  // ── Meta description ────────────────────────────────────────────────────────
  description:
    'Bowling Pleno Zenia, la bolera en Orihuela Costa con 10 pistas, arcade, pub irlandés y fiestas de cumpleaños. Abiertos 365 días. ¡Reserva hoy!',

  // ── Keywords ────────────────────────────────────────────────────────────────
  keywords: [
    'bolera en Orihuela Costa',
    'bowling Orihuela Costa',
    'Bowling Pleno Zenia',
    'bolera Zenia Boulevard',
    'pistas de bolos Alicante',
    'cumpleaños infantiles Orihuela Costa',
    'pub irlandés Orihuela Costa',
    'ocio familiar Orihuela Costa',
    'arcade Orihuela Costa',
    'qué hacer en Orihuela Costa con niños',
  ],

  // ── Canonical ───────────────────────────────────────────────────────────────
  alternates: {
    canonical: 'https://bowling-pleno-zenia.vercel.app',
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // ── Open Graph (redes sociales / WhatsApp / iMessage) ───────────────────────
  openGraph: {
    title: 'Bowling Pleno Zenia · Bolera, Arcade y Pub Orihuela Costa',
    description:
      '10 pistas de bowling, arcade, Dublin House Irish Pub y fiestas de cumpleaños en Zenia Boulevard, Orihuela Costa.',
    url: 'https://bowling-pleno-zenia.vercel.app',
    siteName: 'Bowling Pleno Zenia',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/bolera.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bowling Pleno Zenia — Bolera en Orihuela Costa, Zenia Boulevard',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={barlowCondensed.variable + ' ' + inter.variable + ' antialiased'}>
        {children}
      </body>
    </html>
  )
}
