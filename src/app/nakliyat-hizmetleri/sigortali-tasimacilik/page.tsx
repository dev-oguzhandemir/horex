import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/sigortali-tasimacilik.json'

export const metadata: Metadata = {
  title: 'Sigortalı Taşımacılık - Horex Nakliyat',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  alternates: {
    canonical: 'https://horex.com.tr/nakliyat-hizmetleri/sigortali-tasimacilik',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${serviceData.title} - Horex Nakliyat`,
    description: serviceData.metaDescription,
    images: serviceData.heroImage ? [`https://horex.com.tr${serviceData.heroImage.src}`] : ['https://horex.com.tr/og-image.jpg'],
    creator: '@horexnakliyat',
    site: '@horexnakliyat',
  },
  openGraph: {
    type: 'website',
    url: 'https://horex.com.tr/nakliyat-hizmetleri/sigortali-tasimacilik',
    title: `${serviceData.title} - Horex Nakliyat`,
    description: serviceData.metaDescription,
    siteName: 'Horex Nakliyat',
    images: serviceData.heroImage ? 
      [{
        url: `https://horex.com.tr${serviceData.heroImage.src}`,
        width: serviceData.heroImage.width,
        height: serviceData.heroImage.height,
        alt: serviceData.heroImage.alt,
      }] : 
      [{
        url: 'https://horex.com.tr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Horex Nakliyat - Sigortalı Taşımacılık Hizmetleri',
      }],
    locale: 'tr_TR',
  },
}

// Schema.org yapılandırılmış veri
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceData.title,
  "description": serviceData.metaDescription,
  "provider": {
    "@type": "Organization",
    "name": "Horex Nakliyat",
    "url": "https://horex.com.tr"
  },
  "serviceType": "Sigortalı Taşımacılık",
  "areaServed": {
    "@type": "Country",
    "name": "Türkiye"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sigortalı Taşımacılık Hizmetleri",
    "itemListElement": serviceData.features.map(feature => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature.title,
        "description": feature.description
      }
    }))
  }
}

export default function InsuredTransportation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TransportationService {...serviceData} />
    </>
  )
} 