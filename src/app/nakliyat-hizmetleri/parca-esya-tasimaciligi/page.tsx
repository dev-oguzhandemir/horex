import { Metadata } from 'next'
import TransportationService from '@/components/TransportationService'
import serviceData from '@/data/transportation-services/parca-esya-tasimaciligi.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Parça Eşya Taşımacılığı - Horex Nakliyat | Ekonomik Taşıma Çözümleri',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horexnakliyat.com/nakliyat-hizmetleri/parca-esya-tasimaciligi',
  ogImage: serviceData.heroImage ? `https://horexnakliyat.com${serviceData.heroImage.src}` : 'https://horexnakliyat.com/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Parça Eşya Taşımacılığı Hizmetleri',
  ogType: 'website'
});

export default function PartialItemTransportation() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horexnakliyat.com/nakliyat-hizmetleri/parca-esya-tasimaciligi'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Nakliyat Hizmetleri', url: 'https://horexnakliyat.com/nakliyat-hizmetleri' },
    { name: 'Parça Eşya Taşımacılığı', url: 'https://horexnakliyat.com/nakliyat-hizmetleri/parca-esya-tasimaciligi' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Parça eşya taşımacılığı hizmetini kimler tercih etmelidir?",
      answer: "Parça eşya taşımacılığı özellikle tek bir mobilya, beyaz eşya, elektronik ürün veya birkaç kutu eşya taşımak isteyen müşteriler için idealdir. Öğrenciler, geçici olarak taşınanlar, ev değiştirirken bazı eşyalarını yeni eve önceden göndermek isteyenler ve online alışveriş yapan ancak ürünü taşıyamayacak durumda olanlar için mükemmel bir çözümdür."
    },
    {
      question: "Parça eşya taşıma fiyatları nasıl hesaplanır?",
      answer: "Fiyatlar, taşınacak eşyanın boyutu, ağırlığı, taşıma mesafesi ve taşıma zamanlaması gibi faktörlere göre belirlenir. Ayrıca özel paketleme ihtiyaçları ve sigorta talepleri de fiyatı etkileyebilir. Her müşteriye özel fiyat teklifi sunuyoruz."
    },
    {
      question: "Parça eşya taşımacılığında teslimat süresi ne kadardır?",
      answer: "Şehir içi taşımalarda genellikle aynı gün veya ertesi gün teslimat yapılır. Şehirlerarası taşımalarda ise mesafeye bağlı olarak 1-3 gün arasında değişebilir. Acil taşımalar için ekspres servisimiz de bulunmaktadır."
    },
    {
      question: "Eşyalarım diğer müşterilerin eşyalarıyla birlikte mi taşınır?",
      answer: "Evet, parça eşya taşımacılığında, verimli lojistik sağlamak için aynı güzergahtaki müşterilerimizin eşyalarını aynı araçta taşıyabiliriz. Ancak her eşya grubu ayrı ayrı paketlenir, etiketlenir ve karışma riski olmadan taşınır. Tüm eşyalar sigortalı olarak taşınır."
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
            Parça Eşya Taşımacılığı Hakkında Sık Sorulan Sorular
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
              Tek bir eşyanız mı var? Ekonomik ve güvenli taşıma çözümlerimiz için hemen iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Hemen Fiyat Alın
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 