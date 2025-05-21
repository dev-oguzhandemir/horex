import { Metadata } from 'next'
import ServiceCapacity from '@/components/ServiceCapacity'
import serviceData from '@/data/service-capacity/lojistik-surecimiz.json'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/components/SEO'

export const metadata: Metadata = {
  title: `${serviceData.title} | Horex Nakliyat`,
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  alternates: {
    canonical: `https://horexnakliyat.com/hizmet-kapasitemiz/lojistik-surecimiz`,
  },
  openGraph: {
    title: serviceData.title,
    description: serviceData.metaDescription,
    url: 'https://horexnakliyat.com/hizmet-kapasitemiz/lojistik-surecimiz',
    siteName: 'Horex Nakliyat',
    images: [
      {
        url: `https://horexnakliyat.com${serviceData.heroImage?.src || '/images/og-image.jpg'}`,
        width: 1200,
        height: 630,
        alt: serviceData.heroImage?.alt || 'Horex Nakliyat Lojistik Süreç Yönetimi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: serviceData.title,
    description: serviceData.metaDescription,
    images: [`https://horexnakliyat.com${serviceData.heroImage?.src || '/images/og-image.jpg'}`],
    creator: '@horexnakliyat',
    site: '@horexnakliyat',
  },
}

export default function LojistikSurecimizPage() {
  // Structured data for the service
  const serviceSchemaData = generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horexnakliyat.com/hizmet-kapasitemiz/lojistik-surecimiz'
  )

  // Breadcrumb data
  const breadcrumbSchemaData = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Hizmet Kapasitemiz', url: 'https://horexnakliyat.com/hizmet-kapasitemiz' },
    { name: serviceData.title, url: 'https://horexnakliyat.com/hizmet-kapasitemiz/lojistik-surecimiz' },
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
      
      <div className="overflow-x-hidden w-full">
        <ServiceCapacity
          title={serviceData.title}
          description={serviceData.description}
          metaDescription={serviceData.metaDescription}
          metaKeywords={serviceData.metaKeywords}
          features={serviceData.features}
          content={serviceData.content}
          heroImage={serviceData.heroImage}
        />
      </div>
    </>
  )
} 