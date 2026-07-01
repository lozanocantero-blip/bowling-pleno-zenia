import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  transpilePackages: ['@relume_io/relume-ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  // Nota: en Next 16 la clave `eslint` en next.config ya no existe
  // (ESLint no se ejecuta durante `next build`), por eso se ha eliminado.
  // Redirecciones permanentes. Next emite 308 (equivalente a 301 para SEO:
  // conserva el enlace/link equity y el método HTTP).
  async redirects() {
    return [
      // Sección de cumpleaños desactivada → contacto (todas las variantes de idioma).
      { source: '/cumpleanos-y-celebraciones', destination: '/contacto', permanent: true },
      {
        source: '/:locale(en|de|ru)/cumpleanos-y-celebraciones',
        destination: '/:locale/contacto',
        permanent: true,
      },

      // --- URLs heredadas del WordPress antiguo (sitio en un solo idioma → sin prefijo) ---
      // Sustituir/ampliar con la lista real de permalinks de Plesk (ver informe SEO).
      { source: '/inicio', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },

      { source: '/reservas', destination: '/bolera-y-precios', permanent: true },
      { source: '/reserva', destination: '/bolera-y-precios', permanent: true },
      { source: '/precios', destination: '/bolera-y-precios', permanent: true },
      { source: '/tarifas', destination: '/bolera-y-precios', permanent: true },
      { source: '/bolera', destination: '/bolera-y-precios', permanent: true },
      { source: '/bowling', destination: '/bolera-y-precios', permanent: true },

      { source: '/arcade', destination: '/arcade-y-juegos', permanent: true },
      { source: '/recreativos', destination: '/arcade-y-juegos', permanent: true },
      { source: '/salon-recreativo', destination: '/arcade-y-juegos', permanent: true },

      { source: '/pub', destination: '/irish-pub-y-bar', permanent: true },
      { source: '/bar', destination: '/irish-pub-y-bar', permanent: true },
      { source: '/dublin-house', destination: '/irish-pub-y-bar', permanent: true },
      { source: '/irish-pub', destination: '/irish-pub-y-bar', permanent: true },

      { source: '/cumpleanos', destination: '/contacto', permanent: true },
      { source: '/fiestas', destination: '/contacto', permanent: true },
      { source: '/celebraciones', destination: '/contacto', permanent: true },
      { source: '/contact', destination: '/contacto', permanent: true },
    ]
  },
}

export default withNextIntl(nextConfig)
