import { Metadata } from 'next';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  canonical?: string;
  publishedAt?: string; // For articles/blogs
  modifiedAt?: string; // For articles/blogs
  author?: string; // For articles/blogs
};

export const generateMetadata = ({
  title,
  description,
  keywords = '',
  url = 'https://horexnakliyat.com',
  ogImage = 'https://horexnakliyat.com/images/og-image.jpg', // Update this to a valid path
  ogImageAlt = 'Horex Nakliyat - Profesyonel Taşımacılık Hizmetleri',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonical,
  publishedAt,
  modifiedAt
}: SEOProps): Metadata => {
  // Canonical URL, varsayılan olarak mevcut URL
  const canonicalUrl = canonical || url;
  
  // Create OpenGraph object based on type
  let openGraphData: any = {
    title,
    description,
    url: canonicalUrl,
    siteName: 'Horex Nakliyat',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
    locale: 'tr_TR',
    type: ogType,
  };
  
  // Add published and modified dates for articles
  if (publishedAt && ogType === 'article') {
    openGraphData.publishedTime = publishedAt;
    
    if (modifiedAt) {
      openGraphData.modifiedTime = modifiedAt;
    }
  }
  
  // Create the final metadata object
  const metadata: Metadata = {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: openGraphData,
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
      creator: '@horexnakliyat',
      site: '@horexnakliyat',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
};

// Schema.org yapılandırılmış veri tipleri
export type SchemaOrgType = 
  | 'Organization' 
  | 'LocalBusiness' 
  | 'MovingCompany' 
  | 'Service' 
  | 'WebPage' 
  | 'AboutPage' 
  | 'FAQPage' 
  | 'ContactPage' 
  | 'BlogPosting' 
  | 'Article'
  | 'BreadcrumbList'
  | 'ImageObject';

// Temel Schema.org JSON-LD veri oluşturma fonksiyonu
export const generateSchemaOrgData = (
  type: SchemaOrgType,
  data: Record<string, any>
): string => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return JSON.stringify({
    ...baseData,
    ...data,
  });
};

// Organizasyon JSON-LD veri oluşturma
export const generateOrganizationSchema = () => {
  return generateSchemaOrgData('MovingCompany', {
    name: 'Horex Nakliyat',
    image: 'https://horexnakliyat.com/logo.svg',
    logo: 'https://horexnakliyat.com/logo.svg',
    description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Güvenli Sokağı No: 1',
      addressLocality: 'Maltepe',
      addressRegion: 'İstanbul',
      postalCode: '34846',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.913051',
      longitude: '29.153112'
    },
    url: 'https://horexnakliyat.com',
    telephone: '+908508883939',
    email: 'ayirkanhoroz@gmail.com',
    priceRange: '₺₺',
    openingHours: 'Mo-Su 00:00-24:00',
    sameAs: [
      'https://facebook.com/horexnakliyat',
      'https://instagram.com/horexnakliyat',
      'https://twitter.com/horexnakliyat'
    ]
  });
};

// Servis için JSON-LD veri oluşturma
export const generateServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => {
  return generateSchemaOrgData('Service', {
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@type': 'MovingCompany',
      name: 'Horex Nakliyat',
      image: 'https://horexnakliyat.com/logo.svg'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'TRY'
      }
    }
  });
};

// Breadcrumb JSON-LD veri oluşturma
export const generateBreadcrumbSchema = (items: {name: string, url: string}[]) => {
  return generateSchemaOrgData('BreadcrumbList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  });
};

// Makale JSON-LD veri oluşturma
export const generateArticleSchema = (
  title: string, 
  description: string, 
  image: string, 
  publishDate: string, 
  author: string, 
  articleUrl: string,
  modifiedDate?: string
) => {
  return generateSchemaOrgData('Article', {
    headline: title,
    description: description,
    image: image,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    url: articleUrl,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Horex Nakliyat',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horexnakliyat.com/logo.svg'
      }
    }
  });
};

// FAQ sayfası için JSON-LD veri oluşturma
export const generateFAQSchema = (questions: {question: string, answer: string}[]) => {
  return generateSchemaOrgData('FAQPage', {
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  });
};

// WebPage JSON-LD veri oluşturma
export const generateWebPageSchema = (title: string, description: string, url: string) => {
  return generateSchemaOrgData('WebPage', {
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'Horex Nakliyat',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horexnakliyat.com/logo.svg'
      }
    }
  });
};

// ImageObject JSON-LD veri oluşturma
export const generateImageSchema = (imageUrl: string, imageAlt: string, width: number, height: number) => {
  return generateSchemaOrgData('ImageObject', {
    contentUrl: imageUrl,
    url: imageUrl,
    name: imageAlt,
    description: imageAlt,
    caption: imageAlt,
    width: width,
    height: height
  });
};

export default {
  generateMetadata,
  generateSchemaOrgData,
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateImageSchema
}; 