import { Metadata } from 'next'
import StorageService from '@/components/StorageService'
import serviceData from '@/data/storage-services/ozel-esya-depolama.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Özel Eşya Depolama - Horex Nakliyat | Değerli Eşyalar İçin Özel Koruma',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/depolama-hizmetleri/ozel-esya-depolama',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Özel Eşya Depolama Hizmetleri',
  ogType: 'website'
});

export default function SpecialItemsStorageService() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/depolama-hizmetleri/ozel-esya-depolama'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Depolama Hizmetleri', url: 'https://horex.com.tr/depolama-hizmetleri' },
    { name: 'Özel Eşya Depolama', url: 'https://horex.com.tr/depolama-hizmetleri/ozel-esya-depolama' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Hangi tür özel eşyaları depoluyorsunuz?",
      answer: "Antika mobilyalar, sanat eserleri (resim, heykel, vb.), piyano ve diğer değerli müzik aletleri, nadir koleksiyonlar, değerli halılar, kristal avizeler, porselen ve cam eşyalar, değerli kitaplar ve arşiv belgeleri gibi özel koruma gerektiren tüm kıymetli eşyalarınızı depoluyoruz."
    },
    {
      question: "Piyano gibi hassas müzik aletleri için depolama koşullarınız nelerdir?",
      answer: "Piyano ve hassas müzik aletleri için özel iklim kontrolüne sahip depolama odalarımız bulunmaktadır. Bu alanlarda nem oranı %40-50 arasında, sıcaklık ise 18-22°C arasında sabit tutulmaktadır. Ayrıca titreşim izolasyonu sağlanmış platformlar ve toz geçirmez özel kılıflar kullanıyoruz. Periyodik olarak akordu ve mekanik kontrolü yapılmaktadır."
    },
    {
      question: "Sanat eserleri için güvenlik önlemleriniz nelerdir?",
      answer: "Sanat eserleri için müze standartlarında güvenlik önlemleri uyguluyoruz. Yüksek çözünürlüklü kamera sistemleri, hareket ve dokunma sensörleri, nem ve sıcaklık alarmları, yangın söndürme sistemleri ve 24 saat güvenlik personeli bulunmaktadır. Ayrıca her eser için detaylı envanter kaydı tutulmakta ve düzenli olarak kontrol edilmektedir. UV filtreleri ile zararlı ışınlardan koruma sağlanmaktadır."
    },
    {
      question: "Değerli eşyaların sigortalanması nasıl yapılıyor?",
      answer: "Değerli eşyalarınız için öncelikle bir uzman tarafından değerleme yapılır ve belgelenir. Ardından eşyanın türüne, değerine ve depolama süresine göre özel sigorta paketleri sunulur. Standart sigorta paketlerimiz yangın, sel, hırsızlık gibi riskleri kapsar. Sanat eserleri veya antikalar için genişletilmiş teminat seçenekleri de mevcuttur. Tüm sigorta poliçeleri uluslararası geçerliliğe sahiptir."
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
            Özel Eşya Depolama Hakkında Sık Sorulan Sorular
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
              Değerli eşyalarınız için özel depolama çözümlerimiz hakkında detaylı bilgi alın.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Uzman Değerlendirmesi İsteyin
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 