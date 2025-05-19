import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/evden-eve-nakliyat.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Evden Eve Nakliyat - Horex Nakliyat | Güvenilir Taşıma Hizmeti',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/nakliyat-hizmetleri/evden-eve-nakliyat',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Evden Eve Nakliyat Hizmetleri',
  ogType: 'website'
});

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export default function HomeToHomeTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/nakliyat-hizmetleri/evden-eve-nakliyat'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horex.com.tr/nakliyat-hizmetleri' },
    { name: 'Evden Eve Nakliyat', url: 'https://horex.com.tr/nakliyat-hizmetleri/evden-eve-nakliyat' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Evden eve nakliyat hizmetiniz neleri kapsar?",
      answer: "Evden eve nakliyat hizmetimiz, ücretsiz ekspertiz, profesyonel paketleme, sigortalı taşıma, montaj/demontaj, ve 7/24 destek hizmetlerini kapsamaktadır."
    },
    {
      question: "Eşyalarımın güvenliği için nasıl önlemler alıyorsunuz?",
      answer: "Tüm eşyalarınız özel paketleme malzemeleriyle koruma altına alınır ve tam kapsamlı sigorta ile taşınır. Modern ekipmanlar ve deneyimli personelimiz sayesinde güvenli taşıma garanti edilir."
    },
    {
      question: "Evden eve nakliyat fiyatları nasıl belirlenir?",
      answer: "Fiyatlar; taşınacak eşya miktarı, mesafe, kat durumu, asansör varlığı gibi faktörlere göre belirlenir. Ücretsiz ekspertiz hizmetimiz ile tam ve net fiyat teklifi sunuyoruz."
    }
  ];
  
  // FAQ için schema.org yapılandırılmış veri
  const faqSchema = SEO.generateFAQSchema(faqQuestions);

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <TransportationService {...serviceData} />
      
      {/* Sık Sorulan Sorular Bölümü */}
      <section className="py-16 bg-gray-50" id="sikca-sorulan-sorular">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sık Sorulan Sorular
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqQuestions.map((faq: FAQItem, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-horex-red mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Başka sorularınız mı var? Hemen bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 