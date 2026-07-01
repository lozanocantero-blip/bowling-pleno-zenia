# Auditoría SEO técnica — Bowling Pleno Zenia

**Dominio:** https://bowlingzenia.com · **Stack:** Next.js 16 (App Router) + React 19 + next-intl 4 (es/en/de/ru, `localePrefix: 'as-needed'`, defaultLocale `es`) · **Deploy:** Vercel
**Rama:** `seo/mejoras` · **Fecha:** julio 2026

> Contexto: la web se migró recientemente desde un WordPress antiguo al dominio `bowlingzenia.com` apuntando a Vercel.

---

## 1. Resumen ejecutivo

El repositorio ya partía de una base SEO decente (metadatos por página e idioma, Schema.org LocalBusiness, hreflang, títulos con `template`). **El problema crítico era que todo el SEO apuntaba al dominio equivocado** (`bowling-pleno-zenia.vercel.app`) tras la migración a `bowlingzenia.com`, y que **`sitemap.ts`/`robots.ts`/`lib/site.ts` no existían en `main`** (estaban en el PR #1 sin fusionar, y además también con el dominio de Vercel).

Esta rama corrige el dominio en todo el código vía una única variable (`NEXT_PUBLIC_SITE_URL`), crea sitemap/robots correctos, añade metadata única a las páginas que no la tenían, marca las legales como `noindex`, añade redirecciones 301 para las URLs viejas de WordPress, y ataca los mayores lastres de rendimiento (imagen OG de 5,5 MB, vídeos con `preload="auto"`).

---

## 2. Hallazgos priorizados (impacto × esfuerzo)

Leyenda impacto: 🔴 crítico · 🟠 alto · 🟡 medio · ⚪ bajo. Esfuerzo: S/M/L.

| # | Hallazgo | Impacto | Esf. | Estado |
|---|----------|:------:|:----:|--------|
| 1 | Canonicals, hreflang, OG y JSON-LD apuntaban a `*.vercel.app` en 5 layouts + `SchemaOrg` | 🔴 | M | ✅ Corregido vía `lib/site.ts` + `NEXT_PUBLIC_SITE_URL` |
| 2 | No existían `sitemap.ts` ni `robots.ts` en `main` | 🔴 | S | ✅ Creados apuntando al dominio real |
| 3 | `app/contacto/page.tsx` (sin locale) duplicaba la ruta y saltaba el provider i18n | 🔴 | S | ✅ Eliminado |
| 4 | Canonical no auto-referenciado: la versión `de/en/ru` declaraba el canonical en español | 🟠 | S | ✅ Canonical por-idioma |
| 5 | Imagen OG/hero de **5,5 MB (5712×4284)** + varias imágenes multi-MB | 🟠 | M | ✅ Recomprimidas (lado largo 1920, q72): OG 5,5 MB → 0,74 MB |
| 6 | Vídeos con `preload="auto"` (2 por página) y **sin `poster`** | 🟠 | S | ✅ `preload="metadata"` + poster |
| 7 | `cumpleanos-y-celebraciones` hacía redirect client-side (`useEffect`) devolviendo `null` (200 + página vacía) | 🟠 | S | ✅ Reemplazado por 301 en `next.config` |
| 8 | Sin redirecciones 301 para URLs antiguas de WordPress | 🟠 | M | ✅ Añadidas (candidatos); pendiente lista real de Plesk |
| 9 | Páginas legales sin metadata ni `noindex` (thin content ×4 idiomas) | 🟡 | S | ✅ `noindex, follow` + título propio |
| 10 | Contacto sin title/description propios (heredaba el genérico) | 🟡 | S | ✅ Metadata única por idioma |
| 11 | Sin `BreadcrumbList` en páginas interiores | 🟡 | S | ✅ JSON-LD Breadcrumb en bolera/arcade/pub/contacto |
| 12 | `SchemaOrg`: `sameAs` con placeholder `tripadvisor.com`; `numberOfRooms` mal usado | 🟡 | S | ✅ Limpiado |
| 13 | `export const dynamic = 'force-dynamic'` en las 9 páginas (SSR en cada request) | 🟡 | M | ⚙️ Ver §4 (render estático) |
| 14 | Cero uso de `next/image` (todo `<img>` crudo, sin lazy/width-height) | 🟡 | L | ⏭️ Follow-up (PR aparte) — ver §6 |
| 15 | `metadataBase` ausente (OG relativas sin base absoluta) | 🟡 | S | ✅ Añadido |

---

## 3. Cambios aplicados en esta rama

### URL centralizada (`lib/site.ts`)
- `SITE_URL = NEXT_PUBLIC_SITE_URL ?? 'https://bowlingzenia.com'` (sin barra final).
- Helpers `localizedUrl(locale, path)`, `languageAlternates(path)`, `buildAlternates(locale, path)` que respetan `localePrefix: 'as-needed'` (es sin prefijo).
- **Un solo sitio donde vive el dominio.** Cambiarlo en Vercel (`NEXT_PUBLIC_SITE_URL`) reconfigura canonicals, hreflang, OG, sitemap, robots y JSON-LD.

### Metadatos
- `app/[locale]/layout.tsx`: `metadataBase`, canonical auto-referenciado, hreflang + `x-default`, OG locale correcto por idioma.
- Sub-layouts bolera/arcade/pub: canonical/hreflang/OG vía helpers.
- **Nuevos** layouts con `generateMetadata`: `contacto` (indexable, título+descripción únicos ×4) y legales (`noindex, follow`).

### sitemap.ts / robots.ts
- `sitemap.xml`: home + bolera + arcade + pub + contacto, con `alternates.languages` (hreflang en el sitemap). Excluye legales (noindex) y cumpleaños (redirigida).
- `robots.txt`: `Allow: /`, `Disallow: /api/`, `Sitemap: https://bowlingzenia.com/sitemap.xml`, `Host`.

### Datos estructurados
- `LocalBusiness/BowlingAlley/EntertainmentBusiness` + `WebSite` con URLs derivadas de `SITE_URL`.
- Datos reales conservados: 10 pistas, `aggregateRating` 4.3 / 1230 reseñas, Calle Jade 2, abiertos 365 días, teléfono.
- `BreadcrumbList` por página interior.

### Redirecciones 301 (`next.config.ts`)
- Cumpleaños (todas las variantes de idioma) → `/contacto`.
- Candidatos WordPress: `/inicio`, `/home`, `/index.php`, `/reservas`, `/precios`, `/bolera`, `/arcade`, `/pub`, `/dublin-house`, `/fiestas`, etc.
- Next normaliza la barra final automáticamente (308): `/politica-de-privacidad/` → `/politica-de-privacidad`. No requiere config.

### Rendimiento
- Imágenes >800 KB recomprimidas (lado largo ≤1920 px, JPEG q72). La OG pasó de **5,5 MB a ~0,74 MB**.
- Vídeos hero: `preload="metadata"` + `poster` (evita descargar el mp4 completo en la carga).

---

## 4. `force-dynamic` → render estático (tradeoff)

**Motivo original** (commit *"Home dinamica (force-dynamic) para evitar cache de version antigua"*): tras migrar de WordPress se forzó SSR en cada request para que nadie viera la versión cacheada antigua.

**Ahora** la migración terminó y el contenido es 100 % estático (sin base de datos). `force-dynamic`:
- Renderiza en el servidor en cada visita → peor TTFB/LCP y coste.
- No aporta nada a la indexación (el HTML SSR ya es completo).

**Decisión:** pasar a **render estático** con el patrón oficial de next-intl (`generateStaticParams` + `setRequestLocale`). Si el build detectara algún *bailout* a dinámico, el fallback seguro es simplemente quitar `force-dynamic` (deja de forzar SSR y permite caché en el edge de Vercel). Cada `git push` regenera el HTML en el build de Vercel, así que ya no hay riesgo de "versión antigua".

---

## 5. Google Search Console — alta y verificación (pendiente del dueño)

> No puedo crear la propiedad: requiere el login de Google del propietario. Proceso documentado:

1. **Crear propiedad** en https://search.google.com/search-console → *Añadir propiedad* → tipo **Dominio** → `bowlingzenia.com` (cubre http/https, con y sin www, y subdominios).
2. **Verificación por DNS (TXT) en Plesk:**
   - GSC muestra un registro tipo `google-site-verification=XXXXXXXX`.
   - En Plesk → *Websites & Domains* → `bowlingzenia.com` → **DNS Settings** → *Add Record*:
     - Tipo: **TXT** · Host/Nombre: **@** (o vacío = raíz del dominio) · Valor: `google-site-verification=XXXXXXXX` · TTL: por defecto.
   - Guardar y **Update** la zona DNS. Esperar propagación (minutos–horas).
   - Comprobar: `dig TXT bowlingzenia.com +short` debe listar el valor.
   - Volver a GSC → **Verificar**.
3. **Enviar sitemap:** GSC → *Sitemaps* → añadir `sitemap.xml` (URL completa: `https://bowlingzenia.com/sitemap.xml`). Debe devolver "Correcto".
4. **Comprobar accesibilidad pública** antes de enviarlo:
   - `https://bowlingzenia.com/sitemap.xml` → 200 y XML válido.
   - `https://bowlingzenia.com/robots.txt` → 200, con la línea `Sitemap:` correcta.

### Qué vigilar las primeras semanas
- **Cobertura / Indexación:** que las 5 URLs principales (×4 idiomas) pasen a *Indexadas*. Revisar *Páginas > No indexadas* por si algo queda como *Excluida* indebidamente.
- **404 de URLs viejas de WordPress:** en *Indexación > Páginas* filtrar por "No encontrada (404)". Cada 404 con tráfico/enlaces → añadir su 301 en `next.config.ts` (§8).
- **Redirecciones:** confirmar que las 301 devuelven destino correcto (no cadenas ni bucles).
- **Rich Results / Mejoras:** validar `LocalBusiness` y `BreadcrumbList` sin errores en https://search.google.com/test/rich-results.
- **Avisos de seguridad / Acciones manuales:** deben estar vacíos.
- **Core Web Vitals:** aparece con datos de campo a las semanas; vigilar LCP (imágenes/vídeo del hero).
- **hreflang:** *Experiencia/Internacional* (o revisar en el informe de páginas) que no haya errores de retorno hreflang.

---

## 6. Pendiente / follow-up (fuera de esta rama)

- **Migración a `next/image`** de los `<img>` crudos (26 componentes). Mayor ganancia de CWV (AVIF/WebP, `srcset`, lazy, dimensiones automáticas → menos CLS), pero toca componentes Relume → PR dedicado con QA visual.
- **Imágenes OG dedicadas 1200×630** (ahora se reutilizan fotos 4:3, válidas pero no ideales para la tarjeta social).
- **Lista real de permalinks del WordPress** (están en Plesk): exportar del WP antiguo (o de *Yoast → redirecciones* si existía) y de GSC (404), y mapear en `next.config.ts`. Los redirects actuales son candidatos habituales.
- **Cerrar el PR #1** (`seo/auditoria-tecnica`): quedó obsoleto (dominio Vercel); esta rama lo supera.
- **`FAQPage` schema**: solo si se añade una sección de FAQ visible en la página (Google penaliza el marcado sin contenido visible).
- **Componentes `components/cumpleanos/*`**: quedaron huérfanos al desactivar la sección; limpiar cuando se decida el futuro de cumpleaños.

---

## 7. Verificación

- `npm run build` debe pasar.
- `sitemap.xml` y `robots.txt` deben mostrar `bowlingzenia.com` (no `vercel.app`).
- **En Vercel**, definir la variable de entorno `NEXT_PUBLIC_SITE_URL=https://bowlingzenia.com` (Production) y redeploy — sin ella, el fallback del código ya usa el dominio correcto, pero la variable lo deja explícito y editable sin tocar código.
