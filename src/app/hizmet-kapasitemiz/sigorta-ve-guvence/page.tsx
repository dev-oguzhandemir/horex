import { Metadata } from 'next'
import ServiceCapacity from '@/components/ServiceCapacity'
import serviceData from '@/data/service-capacity/sigorta-ve-guvence.json'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/components/SEO'

export const metadata: Metadata = {
  title: `${serviceData.title} | Horex Nakliyat`,
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  alternates: {
    canonical: `https://horex.com.tr/hizmet-kapasitemiz/sigorta-ve-guvence`,
  },
  openGraph: {
    title: serviceData.title,
    description: serviceData.metaDescription,
    url: 'https://horex.com.tr/hizmet-kapasitemiz/sigorta-ve-guvence',
    siteName: 'Horex Nakliyat',
    images: [
      {
        url: `https://horex.com.tr${serviceData.heroImage?.src || '/images/og-image.jpg'}`,
        width: 1200,
        height: 630,
        alt: serviceData.heroImage?.alt || 'Horex Nakliyat Sigorta ve Güvence Hizmeti',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: serviceData.title,
    description: serviceData.metaDescription,
    images: [`https://horex.com.tr${serviceData.heroImage?.src || '/images/og-image.jpg'}`],
    creator: '@horexnakliyat',
    site: '@horexnakliyat',
  },
}

export default function SigortaVeGuvencePage() {
  // Structured data for the service
  const serviceSchemaData = generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/hizmet-kapasitemiz/sigorta-ve-guvence'
  )

  // Breadcrumb data
  const breadcrumbSchemaData = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Hizmet Kapasitemiz', url: 'https://horex.com.tr/hizmet-kapasitemiz' },
    { name: serviceData.title, url: 'https://horex.com.tr/hizmet-kapasitemiz/sigorta-ve-guvence' },
  ])

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchemaData }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchemaData }}
      />
      
      <ServiceCapacity
        title={serviceData.title}
        description={serviceData.description}
        metaDescription={serviceData.metaDescription}
        metaKeywords={serviceData.metaKeywords}
        features={serviceData.features}
        content={serviceData.content}
        heroImage={serviceData.heroImage}
      />
    </>
  )
} 