import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/fuar-tasimaciligi.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Fuar Taşımacılığı - Horex Nakliyat | Profesyonel Fuar Lojistiği',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horexnakliyat.com/nakliyat-hizmetleri/fuar-tasimaciligi',
  ogImage: serviceData.heroImage ? `https://horexnakliyat.com${serviceData.heroImage.src}` : 'https://horexnakliyat.com/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Fuar Taşımacılığı Hizmetleri',
  ogType: 'website'
});

export default function FairTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horexnakliyat.com/nakliyat-hizmetleri/fuar-tasimaciligi'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horexnakliyat.com/nakliyat-hizmetleri' },
    { name: 'Fuar Taşımacılığı', url: 'https://horexnakliyat.com/nakliyat-hizmetleri/fuar-tasimaciligi' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Fuar taşımacılığı hizmetiniz hangi aşamaları kapsar?",
      answer: "Hizmetimiz; fuar öncesi planlama, malzemelerin paketlenmesi, fuar alanına taşınması, stant kurulumu desteği, fuar süresince lojistik destek, söküm işlemleri ve sonrasında ürünlerin güvenle geri taşınması aşamalarını kapsar."
    },
    {
      question: "Fuar malzemelerinin zamanında ulaşması nasıl garanti ediliyor?",
      answer: "Fuar katılımlarında zamanlama kritik olduğundan, detaylı bir lojistik plan oluşturuyoruz. Malzemelerin en az 1 gün önceden fuar alanına ulaşması sağlanır ve olası gecikmelere karşı alternatif planlar hazırlanır. Ayrıca GPS takip sistemi ile sevkiyatı anlık olarak izliyoruz."
    },
    {
      question: "Yurtdışı fuar taşımacılığı hizmeti veriyor musunuz?",
      answer: "Evet, yurtdışı fuar taşımacılığı hizmeti sunuyoruz. Gümrük işlemleri, gerekli dokümantasyon ve uluslararası nakliye konularında uzman ekibimiz tüm süreci yönetir. Carnet belgeleri ve geçici ithalat izinleri gibi özel belgelerin hazırlanmasında da destek sağlarız."
    },
    {
      question: "Hassas ve değerli fuar ürünleri nasıl korunuyor?",
      answer: "Hassas ve değerli fuar ürünleri için özel paketleme malzemeleri kullanılır. Elektronik cihazlar anti-statik malzemelerle, kırılgan parçalar özel köpük ve koruyucu kasalarla paketlenir. Tüm sevkiyatlar sigortalı taşınır ve değerli ürünler için ekstra güvenlik önlemleri alınır."
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
            Fuar Taşımacılığı Hakkında Sık Sorulan Sorular
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
              Fuar katılımınız için detaylı taşıma planı oluşturmak ister misiniz?
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 