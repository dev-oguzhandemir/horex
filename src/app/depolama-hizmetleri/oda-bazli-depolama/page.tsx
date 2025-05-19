import { Metadata } from 'next'
import StorageService from '@/components/StorageService'
import serviceData from '@/data/storage-services/oda-bazli-depolama.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Oda Bazlı Depolama - Horex Nakliyat | Kişiye Özel Depolama Odaları',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/depolama-hizmetleri/oda-bazli-depolama',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Oda Bazlı Depolama Hizmetleri',
  ogType: 'website'
});

export default function RoomBasedStorageService() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/depolama-hizmetleri/oda-bazli-depolama'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Depolama Hizmetleri', url: 'https://horex.com.tr/depolama-hizmetleri' },
    { name: 'Oda Bazlı Depolama', url: 'https://horex.com.tr/depolama-hizmetleri/oda-bazli-depolama' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Oda bazlı depolama nedir?",
      answer: "Oda bazlı depolama (self storage), eşyalarınızı kişiye özel kilitli odalarda saklayabileceğiniz bir depolama çözümüdür. Her müşteriye ayrı bir oda tahsis edilir ve bu odanın anahtarı/şifresi sadece kişiye özeldir. Farklı boyutlarda odalar bulunmakta olup, sadece ihtiyacınız kadar alan için ödeme yaparsınız. Eşyalarınıza dilediğiniz zaman erişim sağlayabilir, ekleme veya çıkarma yapabilirsiniz."
    },
    {
      question: "Depolama odalarına ne zaman erişebilirim?",
      answer: "Standart çalışma saatlerimiz içinde (hafta içi 08:00-19:00, hafta sonu 09:00-17:00) dilediğiniz zaman erişim sağlayabilirsiniz. 24 saat erişim paketimizle, ek ücret karşılığında mesai saatleri dışında da özel şifrenizle tesisimize giriş yaparak eşyalarınıza ulaşabilirsiniz. Ziyaretiniz için önceden randevu almanıza gerek yoktur, kiralama süresi boyunca istediğiniz kadar ziyaret edebilirsiniz."
    },
    {
      question: "Oda boyutlarınız nelerdir ve hangisini seçmeliyim?",
      answer: "Depolama odalarımız 1m² ile 30m² arasında değişen boyutlarda sunulmaktadır. Küçük odalar (1-5m²) kişisel eşyalar, evraklar, sezonluk kıyafetler için; orta boy odalar (6-12m²) tek veya iki odalık ev eşyası için; büyük odalar (13-20m²) salon takımı gibi mobilyalar için; ekstra büyük odalar (21-30m²) ise komple ev eşyası veya ticari malzemeler için uygundur. Size en uygun oda boyutunu belirlemek için ücretsiz danışmanlık hizmeti sunuyoruz."
    },
    {
      question: "Oda bazlı depolama fiyatları nasıl belirlenir?",
      answer: "Fiyatlandırmamız, kiraladığınız odanın büyüklüğü, kira süresi ve ek hizmet taleplerinize göre belirlenmektedir. Küçük odalar aylık 300 TL'den başlarken, ekstra büyük odalar için fiyatlar 1500 TL'ye kadar çıkabilir. 3 ay ve üzeri kiralamalarında %10, 6 ay ve üzerinde %15, yıllık kiralamalarında ise %25'e varan indirimler sunuyoruz. Ek olarak, taşıma, paketleme veya 24 saat erişim gibi hizmetler için ayrıca ücretlendirme yapılmaktadır."
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
            Oda Bazlı Depolama Hakkında Sık Sorulan Sorular
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
              Size özel depolama odanızı kiralamak için hemen bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Uygun Oda Seçenekleri İçin Teklif Alın
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 