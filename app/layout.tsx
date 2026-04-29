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
  title: 'Bowling Pleno Zenia | Bolera en Orihuela Costa',
  description: 'El plan de ocio familiar mas completo de Orihuela Costa. 10 pistas de bowling, Arcade y Irish Pub. Abiertos 365 dias en Zenia Boulevard.',
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
