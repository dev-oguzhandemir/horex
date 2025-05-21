import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/asansorlu-tasima.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Asansörlü Taşıma - Horex Nakliyat | Güvenli Yüksek Kat Taşımacılığı',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horexnakliyat.com/nakliyat-hizmetleri/asansorlu-tasima',
  ogImage: serviceData.heroImage ? `https://horexnakliyat.com${serviceData.heroImage.src}` : 'https://horexnakliyat.com/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Asansörlü Taşıma Hizmetleri',
  ogType: 'website'
});

export default function ElevatorTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horexnakliyat.com/nakliyat-hizmetleri/asansorlu-tasima'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horexnakliyat.com/nakliyat-hizmetleri' },
    { name: 'Asansörlü Taşıma', url: 'https://horexnakliyat.com/nakliyat-hizmetleri/asansorlu-tasima' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Asansörlü taşıma hangi durumlarda tercih edilmelidir?",
      answer: "Asansörlü taşıma, binanın dar merdivenleri olduğunda, eşyaların büyük ve ağır olduğu durumlarda, yüksek katlı binalarda ve merdivenden taşımanın riskli olduğu durumlarda tercih edilmelidir. Özellikle piyano, antika eşyalar ve hacimli mobilyalar için idealdir."
    },
    {
      question: "Asansörlü taşıma sistemi hangi kata kadar ulaşabilir?",
      answer: "Standart modellerde 30 metreye (yaklaşık 10 kat) kadar ulaşabilen asansörlü taşıma sistemlerimiz bulunmaktadır. Özel ekipmanlarla daha yüksek katlara da hizmet verebiliyoruz. Keşif sırasında bina yüksekliğine uygun ekipman belirlenir."
    },
    {
      question: "Asansörlü taşıma için binanın önünde ne kadar alan gereklidir?",
      answer: "Asansör sisteminin güvenli kurulumu için binanın önünde en az 3-4 metrelik bir alan gereklidir. Ayrıca elektrik hatları ve ağaç dalları gibi engeller olmaması önemlidir. Keşif sırasında alan uygunluğu değerlendirilir."
    },
    {
      question: "Kötü hava koşullarında asansörlü taşıma yapılabilir mi?",
      answer: "Şiddetli yağmur, kar veya kuvvetli rüzgar gibi olumsuz hava koşullarında, eşyalarınızın ve personelimizin güvenliği için asansörlü taşıma operasyonunu ertelemeyi tercih ediyoruz. Bu durumda, hava koşullarının iyileşmesini bekler veya alternatif çözümler sunarız."
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
            Asansörlü Taşıma Hakkında Sık Sorulan Sorular
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
              Asansörlü taşıma hizmeti hakkında daha fazla bilgi almak ister misiniz?
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