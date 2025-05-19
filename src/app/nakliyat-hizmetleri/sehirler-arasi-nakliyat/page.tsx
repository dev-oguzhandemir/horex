import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/sehirler-arasi-nakliyat.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Şehirler Arası Nakliyat - Horex Nakliyat | Güvenilir Taşımacılık',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/nakliyat-hizmetleri/sehirler-arasi-nakliyat',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Şehirler Arası Nakliyat Hizmetleri',
  ogType: 'website'
});

export default function IntercityTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/nakliyat-hizmetleri/sehirler-arasi-nakliyat'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horex.com.tr/nakliyat-hizmetleri' },
    { name: 'Şehirler Arası Nakliyat', url: 'https://horex.com.tr/nakliyat-hizmetleri/sehirler-arasi-nakliyat' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Şehirler arası taşımacılık süreci nasıl işler?",
      answer: "Süreç, ücretsiz keşif ile başlar ve detaylı planlama yapılır. Eşyalarınız uzun yol taşımacılığına uygun özel koruyucu malzemelerle paketlenir. Güvenli yükleme yapıldıktan sonra, GPS takipli araçlarımızla yeni adresinize taşınır ve kurulum yapılır."
    },
    {
      question: "Taşınma esnasında eşyalarım nasıl korunur?",
      answer: "Eşyalarınız, şehirler arası taşımacılık için özel olarak tasarlanmış ambalaj malzemeleriyle paketlenir. Hassas ve kırılgan eşyalar için ekstra koruma önlemleri alınır. Ayrıca tüm eşyalarınız sigorta kapsamında taşınır."
    },
    {
      question: "Taşıma sırasında eşyalarımın durumunu takip edebilir miyim?",
      answer: "Evet, araçlarımızda bulunan GPS takip sistemi sayesinde eşyalarınızın nerede olduğunu anlık olarak takip edebilirsiniz. Ayrıca süreç boyunca müşteri temsilcimiz sizi bilgilendirir."
    },
    {
      question: "Şehirler arası nakliyat fiyatları neye göre belirlenir?",
      answer: "Fiyatlar; taşınacak eşya miktarı, şehirler arası mesafe, taşınacak eşyaların özellikleri ve ek hizmet talepleri gibi faktörlere göre belirlenir. Ücretsiz keşif sonrası net bir fiyat teklifi sunuyoruz."
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
            Şehirler Arası Nakliyat Hakkında Sık Sorulan Sorular
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