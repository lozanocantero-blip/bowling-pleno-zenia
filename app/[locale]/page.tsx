"use client"

import { Navbar1 }       from "@/components/inicio/Navbar1"
import { Header83 }      from "@/components/inicio/Header83"
import { StatsTicker }   from "@/components/inicio/StatsTicker"
import { Layout370 }     from "@/components/inicio/Layout370"
import { Timeline19 }    from "@/components/inicio/Timeline19"
import { Testimonial17 } from "@/components/inicio/Testimonial17"
import { CtaBand }       from "@/components/inicio/CtaBand"
import { Contact25 }     from "@/components/inicio/Contact25"
import { Footer5 }       from "@/components/inicio/Footer5"

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["EntertainmentBusiness", "BowlingAlley"],
  "name": "Bowling Pleno Zenia",
  "alternateName": "Bolera Pleno Zenia",
  "description": "Bolera en Orihuela Costa con 10 pistas de bowling, sala de arcade, Irish Pub Dublin House y paquetes de cumpleaños. Abiertos 365 días en Zenia Boulevard, Alicante.",
  "url": "https://bowling-pleno-zenia.vercel.app",
  "telephone": "+34965355815",
  "priceRange": "€€",
  "image": "https://bowling-pleno-zenia.vercel.app/images/bolera.jpeg",
  "address": { "@type": "PostalAddress", "streetAddress": "Calle Jade 2, CC Zenia Boulevard", "addressLocality": "Orihuela Costa", "addressRegion": "Alicante", "postalCode": "03189", "addressCountry": "ES" },
  "geo": { "@type": "GeoCoordinates", "latitude": 37.9333, "longitude": -0.7397 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "14:00", "closes": "23:30" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "12:00", "closes": "00:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.3", "reviewCount": "1230", "bestRating": "5", "worstRating": "1" },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Bowling — 10 pistas", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sala Arcade", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Irish Pub Dublin House", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Fiestas de cumpleaños", "value": true }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <main>
        <h1 className="sr-only">La bolera en Orihuela Costa con bowling, arcade y pub irlandés</h1>
        <Navbar1 />
        <Header83 />
        <StatsTicker />
        <Layout370 />
        <Timeline19 />
        <Testimonial17 />
        <CtaBand />
        <Contact25 />
        <Footer5 />
      </main>
    </>
  )
}
