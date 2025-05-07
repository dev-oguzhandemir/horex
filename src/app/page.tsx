import Stats from '@/components/Stats'
import References from '@/components/References'
import BlogSection from '@/components/BlogSection'
import FutureServices from '@/components/FutureServices'
import HeroSection from '@/components/HeroSection'
import SelectionCriteria from '@/components/SelectionCriteria'
import { Metadata } from 'next'

// SEO Metadata - Bu kısım dinamik olarak CMS'den de beslenebilir
export const metadata: Metadata = {
  title: 'Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri',
  description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz. Evden eve nakliyat, ofis taşıma ve depolama çözümleri için hemen teklif alın.',
  keywords: 'nakliyat, evden eve nakliyat, ofis taşıma, eşya depolama, güvenli taşımacılık, istanbul nakliyat, şehirler arası nakliyat',
  alternates: {
    canonical: 'https://horex.com.tr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri',
    description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz. Evden eve nakliyat, ofis taşıma ve depolama çözümleri için hemen teklif alın.',
    images: ['https://horex.com.tr/og-image.jpg'],
    creator: '@horexnakliyat',
    site: '@horexnakliyat',
  },
  openGraph: {
    type: 'website',
    url: 'https://horex.com.tr',
    title: 'Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri',
    description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz. Evden eve nakliyat, ofis taşıma ve depolama çözümleri için hemen teklif alın.',
    siteName: 'Horex Nakliyat',
    images: [
      {
        url: 'https://horex.com.tr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Horex Nakliyat - Profesyonel Taşımacılık Hizmetleri',
      },
    ],
    locale: 'tr_TR',
  },
}

// SEO için yapılandırılmış veri
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Horex Nakliyat",
  "image": "https://horex.com.tr/logo.svg",
  "logo": "https://horex.com.tr/logo.svg",
  "description": "Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Güvenli Sokağı No: 1",
    "addressLocality": "Maltepe",
    "addressRegion": "İstanbul",
    "postalCode": "34846",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.913051",
    "longitude": "29.153112"
  },
  "url": "https://horex.com.tr",
  "telephone": "+908508883939",
  "email": "ayirkanhoroz@gmail.com",
  "priceRange": "₺₺",
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": [
    "https://facebook.com/horexnakliyat",
    "https://instagram.com/horexnakliyat",
    "https://twitter.com/horexnakliyat"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "geoRadius": "100000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nakliyat Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Evden Eve Nakliyat"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ofis Taşıma"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Şehirler Arası Nakliyat"
        }
      }
    ]
  }
}

// İçerik bölümleri için ayrı componentlar - CMS entegrasyonu için uygun yapı
const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Güvenlik',
      description: 'Eşyalarınızın hasar görmeden taşınması için profesyonel ekipman ve yöntemler kullanılır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Zaman Tasarrufu',
      description: 'Deneyimli ekipler sayesinde taşınma süreci daha hızlı tamamlanır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Stres Azaltma',
      description: 'Profesyonel bir ekibin desteği, taşınma sürecindeki stresi azaltır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sigorta',
      description: 'Eşyalarınız için sigorta hizmeti sunarak olası zararları güvence altına alırız.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-us-title">
      <div className="container mx-auto px-4">
        <h2 id="why-choose-us-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          Neden Bizi Seçmelisiniz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* Schema.org yapılandırılmış veri */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Neden Bizi Seçmelisiniz */}
      <WhyChooseUs />

      {/* Seçim Kriterleri */}
      <SelectionCriteria />

      {/* İstatistikler */}
      <Stats />

      {/* Nakliyat Hizmetlerinin Geleceği */}
      <FutureServices />

      {/* Referanslar */}
      <References />

      {/* Blog & Haberler */}
      <BlogSection />
    </>
  )
}
