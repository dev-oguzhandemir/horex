import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/sehir-ici-nakliyat.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Şehir İçi Nakliyat - Horex Nakliyat | Hızlı ve Güvenli Şehir İçi Taşımacılık',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horexnakliyat.com/nakliyat-hizmetleri/sehir-ici-nakliyat',
  ogImage: serviceData.heroImage ? `https://horexnakliyat.com${serviceData.heroImage.src}` : 'https://horexnakliyat.com/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Şehir İçi Nakliyat Hizmetleri',
  ogType: 'website'
});

export default function IntraCityTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horexnakliyat.com/nakliyat-hizmetleri/sehir-ici-nakliyat'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horexnakliyat.com/nakliyat-hizmetleri' },
    { name: 'Şehir İçi Nakliyat', url: 'https://horexnakliyat.com/nakliyat-hizmetleri/sehir-ici-nakliyat' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Şehir içi nakliyat hizmetiniz hangi bölgeleri kapsar?",
      answer: "Şehir içi nakliyat hizmetimiz İstanbul'un tüm ilçelerini kapsamaktadır. Anadolu ve Avrupa yakası arasındaki taşımalar da dahil olmak üzere, şehir içindeki her noktaya hizmet vermekteyiz."
    },
    {
      question: "Şehir içi taşınma ne kadar sürer?",
      answer: "Şehir içi taşınma süreleri eşya miktarı, mesafe ve trafik durumuna göre değişmekle birlikte, genellikle aynı gün içinde tamamlanır. Ortalama bir ev taşıması 4-8 saat sürer. Önceden yapılan planlama ile taşınma süreci hızlı ve sorunsuz ilerler."
    },
    {
      question: "Eşyalarımın paketlenmesi için ne kadar süre önce gelirsiniz?",
      answer: "Genellikle taşınma gününden bir gün önce paketleme hizmeti için geliyoruz. Eşya miktarına göre bu süre değişebilir. Büyük evler için 2 gün önceden paketleme başlayabilir. Müşterilerimizin tercihine göre bu hizmet taşınma günü de verilebilir."
    },
    {
      question: "Şehir içi nakliyatta asansör kullanımı gerekli midir?",
      answer: "Bu, binanın yapısına ve eşyaların boyutuna bağlıdır. 3. kat ve üzeri taşımalarda, özellikle dar merdivenlerde ve büyük mobilyaların taşınmasında asansör kullanımını öneriyoruz. Keşif sırasında asansör ihtiyacı değerlendirilir ve gerekiyorsa fiyata dahil edilir."
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
            Şehir İçi Nakliyat Hakkında Sık Sorulan Sorular
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
              İstanbul içinde güvenli ve hızlı taşınmak için hemen bizimle iletişime geçin.
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