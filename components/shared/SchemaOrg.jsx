// Schema.org JSON-LD — LocalBusiness + BowlingAlley
// Se incluye en el layout principal para todas las páginas

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BowlingAlley", "EntertainmentBusiness"],
        "@id": "https://bowling-pleno-zenia.vercel.app/#business",
        "name": "Bowling Pleno Zenia",
        "alternateName": ["Bolera Orihuela Costa", "Bowling Zenia Boulevard"],
        "description": "Bolera con 10 pistas, sala arcade, pub irlandés Dublin House y celebraciones de cumpleaños en Orihuela Costa. Abiertos 365 días en Zenia Boulevard.",
        "url": "https://bowling-pleno-zenia.vercel.app",
        "telephone": "+34965355815",
        "email": "info@bowlingplenozenia.com",
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
          "https://bowling-pleno-zenia.vercel.app/images/bolera-orihuela-costa-10-pistas.jpg",
          "https://bowling-pleno-zenia.vercel.app/images/interior-barra-araña-dublin-house-irish-pub-bowling-pleno-zenia-orihuela-costa.jpg",
          "https://bowling-pleno-zenia.vercel.app/images/arcade-orihuela-costa-maquinas-recreativas.png"
        ],
        "logo": "https://bowling-pleno-zenia.vercel.app/logo.png",
        "priceRange": "€€",
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
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Birthday Parties", "value": true }
        ],
        "numberOfRooms": 10,
        "sameAs": [
          "https://www.google.com/maps/place/Bowling+Pleno+Zenia",
          "https://www.tripadvisor.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bowling-pleno-zenia.vercel.app/#website",
        "url": "https://bowling-pleno-zenia.vercel.app",
        "name": "Bowling Pleno Zenia",
        "inLanguage": ["es", "en", "de", "ru"],
        "publisher": { "@id": "https://bowling-pleno-zenia.vercel.app/#business" }
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
