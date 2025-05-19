import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/ofis-tasima.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Ofis Taşıma - Horex Nakliyat | Kesintisiz İş Taşımacılığı',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/nakliyat-hizmetleri/ofis-tasima',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Ofis Taşıma Hizmetleri',
  ogType: 'website'
});

export default function OfficeTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/nakliyat-hizmetleri/ofis-tasima'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horex.com.tr/nakliyat-hizmetleri' },
    { name: 'Ofis Taşıma', url: 'https://horex.com.tr/nakliyat-hizmetleri/ofis-tasima' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Ofis taşıma sürecinde iş sürekliliği nasıl sağlanır?",
      answer: "İş sürekliliğini sağlamak için hafta sonu veya mesai dışı saatlerde taşıma planlaması yapıyoruz. Ofis ekipmanları, belgeleri ve sistemleri öncelikli olarak taşınıp kurularak minimum kesinti ile işlerinizin devam etmesi sağlanır."
    },
    {
      question: "Ofis mobilyaları ve ekipmanları nasıl paketlenir?",
      answer: "Tüm ofis mobilyaları sökülerek özel paketleme malzemeleriyle sarılır. Elektronik cihazlar anti-statik malzemelerle koruma altına alınır. Dosya ve belgeler özel taşıma kutularına düzenli şekilde yerleştirilir."
    },
    {
      question: "Ofisimizin taşınması ne kadar sürer?",
      answer: "Taşınma süresi ofis büyüklüğüne, eşya miktarına ve taşınma mesafesine göre değişir. Ortalama bir ofis taşıması 1-2 gün içinde tamamlanır. Detaylı planlama ile taşınma takvimi önceden belirlenir."
    },
    {
      question: "Taşınma öncesi ya da sonrası depolama hizmeti sunuyor musunuz?",
      answer: "Evet, ofis taşıma sürecinde geçici depolama hizmeti sunuyoruz. Yeni ofisiniz henüz hazır değilse veya fazla eşyalarınız için güvenli depolama alanlarımızdan faydalanabilirsiniz."
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
            Ofis Taşıma Hakkında Sık Sorulan Sorular
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
              Ofis taşıma projeleriniz için detaylı bilgi almak ister misiniz?
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