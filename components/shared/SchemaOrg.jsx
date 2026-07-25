// Schema.org JSON-LD — LocalBusiness + BowlingAlley + WebSite
// Se incluye en el layout principal para todas las páginas.
// URLs derivadas de SITE_URL (NEXT_PUBLIC_SITE_URL) para no fijar el dominio.
import { SITE_URL } from '@/lib/site'

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BowlingAlley", "EntertainmentBusiness"],
        "@id": `${SITE_URL}/#business`,
        "name": "Bowling Pleno Zenia",
        "alternateName": ["Bolera Orihuela Costa", "Bowling Zenia Boulevard"],
        "description": "Bolera con 10 pistas, sala arcade y pub irlandés Dublin House en Orihuela Costa. Abiertos 365 días en Zenia Boulevard.",
        "url": SITE_URL,
        "telephone": "+34965355815",
        "email": "pleno@bowlingzenia.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Jade 2, planta baja, CC Zenia Boulevard",
          "addressLocality": "Orihuela Costa",
          "addressRegion": "Alicante",
          "postalCode": "03189",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.9227,
          "longitude": -0.7424
        },
        "hasMap": "https://maps.google.com/?q=Bowling+Pleno+Zenia+Orihuela+Costa",
        "image": [
          `${SITE_URL}/images/bolera-orihuela-costa-10-pistas.jpg`,
          `${SITE_URL}/images/interior-barra-ara%C3%B1a-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg`,
          `${SITE_URL}/images/arcade-orihuela-costa-maquinas-recreativas.png`
        ],
        "logo": `${SITE_URL}/logo.png`,
        "priceRange": "4,50 € - 6,00 €",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "reviewCount": "1230",
          "bestRating": "5",
          "worstRating": "1"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "14:00",
            "closes": "23:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "12:00",
            "closes": "00:00"
          }
        ],
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Bowling Lanes", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Arcade Games", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Irish Pub", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
        ],
        "areaServed": [
          { "@type": "Place", "name": "Orihuela Costa" },
          { "@type": "Place", "name": "La Zenia" },
          { "@type": "Place", "name": "Torrevieja" },
          { "@type": "Place", "name": "Playa Flamenca" },
          { "@type": "Place", "name": "Cabo Roig" }
        ],
        "sameAs": [
          "https://www.google.com/maps/place/Bowling+Pleno+Zenia"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Bowling Pleno Zenia",
        "inLanguage": ["es", "en", "de", "ru"],
        "publisher": { "@id": `${SITE_URL}/#business` }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
