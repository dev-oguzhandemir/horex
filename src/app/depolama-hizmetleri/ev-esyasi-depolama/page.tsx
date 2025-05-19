import { Metadata } from 'next'
import StorageService from '@/components/StorageService'
import serviceData from '@/data/storage-services/ev-esyasi-depolama.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Ev Eşyası Depolama - Horex Nakliyat | Güvenli Depolama Hizmeti',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/depolama-hizmetleri/ev-esyasi-depolama',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Ev Eşyası Depolama Hizmetleri',
  ogType: 'website'
});

export default function HomeStorageService() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/depolama-hizmetleri/ev-esyasi-depolama'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Depolama Hizmetleri', url: 'https://horex.com.tr/depolama-hizmetleri' },
    { name: 'Ev Eşyası Depolama', url: 'https://horex.com.tr/depolama-hizmetleri/ev-esyasi-depolama' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Ev eşyası depolama hizmetiniz hangi durumlarda kullanılabilir?",
      answer: "Ev eşyası depolama hizmetimiz; ev taşıma sürecinde geçici depolama ihtiyacı olduğunda, evinizin tadilat/renovasyon sürecinde, uzun süreli seyahat ya da görev nedeniyle evden ayrılacağınızda, ev eşyalarınızı küçültmek istediğinizde, mevsimsel eşyalarınızı saklamak istediğinizde veya öğrenciyseniz yaz tatillerinde kullanılabilir."
    },
    {
      question: "Depolama alanlarınız ne kadar güvenli?",
      answer: "Depolama tesislerimiz 7/24 kamera gözetimi, hareket sensörleri, alarm sistemleri ve güvenlik personeli ile korunmaktadır. Yangın algılama ve söndürme sistemleri, nem ve sıcaklık kontrol üniteleri ile eşyalarınız her türlü dış etkene karşı güvence altındadır. Tüm depolanan eşyalar sigorta kapsamında olup, yetkisiz erişimlere karşı koruma sağlanmaktadır."
    },
    {
      question: "Depolama süresince eşyalarıma erişebilir miyim?",
      answer: "Evet, depolama süresince eşyalarınıza önceden randevu alarak erişebilirsiniz. Mesai saatleri içerisinde depolama alanına gelerek, envanter listenizde yer alan eşyalarınıza ulaşabilirsiniz. Acil durumlarda, özel randevu da ayarlayabiliriz. Bazı depolama paketlerimizde aylık belirli sayıda ücretsiz erişim hakkı bulunmaktadır."
    },
    {
      question: "Depolama fiyatlarınız neye göre belirleniyor?",
      answer: "Depolama fiyatlarımız; eşyalarınızın kapladığı hacim, depolama süresi, eşyaların değeri ve türü, talep ettiğiniz ek hizmetler (paketleme, sigorta, taşıma vb.) gibi faktörlere göre belirlenir. Her müşterimize özel fiyat teklifi sunuyoruz. Aylık, 3 aylık, 6 aylık ve yıllık ödeme seçeneklerimiz mevcuttur ve uzun dönem anlaşmalarda indirim sağlıyoruz."
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
      <StorageService {...serviceData} />
      
      {/* Sık Sorulan Sorular Bölümü */}
      <section className="py-16 bg-gray-50" id="sikca-sorulan-sorular">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ev Eşyası Depolama Hakkında Sık Sorulan Sorular
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
              Eşyalarınızı güvenle depolamak için hemen bizimle iletişime geçin.
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