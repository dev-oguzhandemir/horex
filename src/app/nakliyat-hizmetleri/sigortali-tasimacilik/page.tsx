import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/sigortali-tasimacilik.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Sigortalı Taşımacılık - Horex Nakliyat | Tam Koruma Garantisi',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/nakliyat-hizmetleri/sigortali-tasimacilik',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Sigortalı Taşımacılık Hizmetleri',
  ogType: 'website'
});

export default function InsuredTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/nakliyat-hizmetleri/sigortali-tasimacilik'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horex.com.tr/nakliyat-hizmetleri' },
    { name: 'Sigortalı Taşımacılık', url: 'https://horex.com.tr/nakliyat-hizmetleri/sigortali-tasimacilik' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Nakliyat sigortası neleri kapsar?",
      answer: "Nakliyat sigortamız, taşıma sırasında oluşabilecek kırılma, çizilme, hasar görme, kaybolma gibi riskleri kapsar. Mobilyadan elektronik eşyalara, beyaz eşyalardan kişisel değerli eşyalara kadar tüm taşınanlar sigorta kapsamındadır. Ayrıca doğal afet, kaza ve hırsızlık durumlarında da koruma sağlar."
    },
    {
      question: "Eşyalarımın değerini nasıl belirleyebilirim?",
      answer: "Eşyalarınızın değerini belirlerken güncel piyasa değeri, satın alma fiyatı ve yaşı gibi faktörler dikkate alınır. Taşınma öncesi yapılan envanter çıkarma işleminde, değerli eşyalarınızı özel olarak belirtebilirsiniz. İsterseniz özel değerlendirme için ekspertiz hizmeti de sunabiliriz."
    },
    {
      question: "Hasar durumunda nasıl bir süreç işler?",
      answer: "Hasar tespit edildiğinde hemen kayıt altına alınır ve fotoğraflanır. 24 saat içinde sigorta şirketine bildirim yapılır. Hasar raporu oluşturulduktan sonra, sigorta şirketi tarafından değerlendirme yapılır ve onaylanan tazminat en geç 15 iş günü içinde müşterilerimize ödenir."
    },
    {
      question: "Sigortalı taşımacılık fiyatları nasıl belirlenir?",
      answer: "Sigortalı taşımacılık fiyatları, eşyaların toplam değeri, taşıma mesafesi ve risklere göre belirlenir. Standart sigorta paketi tüm taşıma hizmetlerimize dahildir. Değerli eşyalar için ek teminat ve genişletilmiş kapsamlı sigorta seçenekleri ayrıca sunulmaktadır."
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
            Sigortalı Taşımacılık Hakkında Sık Sorulan Sorular
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
              Eşyalarınızı tam güvence ile taşımak için hemen bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Sigortalı Taşıma Teklifi Alın
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 