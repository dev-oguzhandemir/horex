import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/fabrika-tasimaciligi.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Fabrika Taşımacılığı - Horex Nakliyat | Endüstriyel Taşıma Çözümleri',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/nakliyat-hizmetleri/fabrika-tasimaciligi',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Fabrika Taşımacılığı Hizmetleri',
  ogType: 'website'
});

export default function FactoryTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/nakliyat-hizmetleri/fabrika-tasimaciligi'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horex.com.tr/nakliyat-hizmetleri' },
    { name: 'Fabrika Taşımacılığı', url: 'https://horex.com.tr/nakliyat-hizmetleri/fabrika-tasimaciligi' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Fabrika taşımacılığı sürecinde üretim kesintisi en aza nasıl indirilir?",
      answer: "Üretim kesintisini en aza indirmek için detaylı bir taşıma planı hazırlanır. Genellikle hafta sonları veya vardiya dışı saatlerde taşıma yapılır. Kritik ekipmanlar önceliklendirilerek, yeni lokasyonda hızlıca kurulumları sağlanır ve üretim hatları sıralı şekilde taşınır."
    },
    {
      question: "Ağır endüstriyel ekipmanlar nasıl taşınır?",
      answer: "Ağır endüstriyel ekipmanlar, özel vinçler, forkliftler ve hidrolik platformlar kullanılarak taşınır. Ekipmanların teknik özellikleri doğrultusunda özel sabitleme ve paketleme teknikleri uygulanır. Gerektiğinde mühendislik çözümleri ile demontaj ve montaj hizmetleri verilir."
    },
    {
      question: "Fabrika taşımacılığı için gereken yasal izinler nelerdir?",
      answer: "Fabrika taşımacılığında, özellikle büyük ve ağır ekipmanlar için karayolları izinleri, belediye geçiş izinleri ve bazı durumlarda eskort hizmetleri gerekebilir. Tehlikeli madde içeren ekipmanlar için özel izinler alınması gerekir. Tüm bu izin süreçlerini müşterilerimiz adına yönetiyoruz."
    },
    {
      question: "Fabrika taşıması için ne kadar önceden planlama yapılmalıdır?",
      answer: "Fabrika taşıması gibi karmaşık operasyonlar için en az 2-3 ay önceden planlama başlatılmalıdır. Büyük ölçekli fabrikalar için bu süre 6 aya kadar uzayabilir. Detaylı envanter çıkarılması, risk analizleri ve lojistik planlamanın titizlikle yapılması gerekir."
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
            Fabrika Taşımacılığı Hakkında Sık Sorulan Sorular
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
              Fabrika taşıma projeniz için detaylı bilgi almak ister misiniz?
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Ücretsiz Keşif İsteyin
            </a>
          </div>
        </div>
      </section>
    </>
  )
}   