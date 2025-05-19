import { Metadata } from 'next'
import StorageService from '@/components/StorageService'
import serviceData from '@/data/storage-services/parca-esya-depolama.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Parça Eşya Depolama - Horex Nakliyat | Ekonomik Depolama Çözümleri',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/depolama-hizmetleri/parca-esya-depolama',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Parça Eşya Depolama Hizmetleri',
  ogType: 'website'
});

export default function ItemStorageService() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/depolama-hizmetleri/parca-esya-depolama'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Depolama Hizmetleri', url: 'https://horex.com.tr/depolama-hizmetleri' },
    { name: 'Parça Eşya Depolama', url: 'https://horex.com.tr/depolama-hizmetleri/parca-esya-depolama' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Parça eşya depolama hizmeti tam olarak ne içerir?",
      answer: "Parça eşya depolama hizmetimiz, tek bir mobilya, birkaç beyaz eşya veya birkaç kutu kişisel eşya gibi az sayıda eşyanızın güvenli bir şekilde depolanmasını kapsar. Bu hizmet kapsamında eşyalarınız profesyonel olarak paketlenir, sigorta ile koruma altına alınır, güvenli ve iklim kontrollü depolama alanımızda muhafaza edilir, ve dilediğiniz zaman erişiminize açık tutulur. Tam ev depolamadan farklı olarak, sadece depoladığınız eşya kadar ödeme yaparsınız."
    },
    {
      question: "En küçük depolama boyutu nedir ve hangi eşyalar için uygundur?",
      answer: "En küçük depolama boyutumuz 1 metreküptür ve yaklaşık olarak 3-4 orta boy koli veya küçük bir mobilya parçası (örneğin bir sandalye veya sehpa) için uygundur. Bu tip mini depolama alanları özellikle kitaplar, giyim eşyaları, küçük elektronik aletler, hatıra eşyaları gibi şahsi eşyalar için idealdir. Daha büyük tek parça eşyalar için (koltuk, yatak, buzdolabı vb.) eşyanın boyutuna özel fiyatlandırma yapmaktayız."
    },
    {
      question: "Depolama süresi ne kadar olabilir ve nasıl uzatılır?",
      answer: "Depolama süresi minimum 1 ay, maksimum süresiz olarak belirlenebilir. En popüler depolama sürelerimiz 1, 3, 6 ay ve 1 yıldır. Depolama süreniz dolmadan birkaç gün önce size hatırlatma yapılır ve dilerseniz sürenizi uzatabilirsiniz. Süre uzatma işlemini telefon, WhatsApp veya e-posta yoluyla kolayca gerçekleştirebilirsiniz. Uzun süreli depolamalarda özel indirimler sunmaktayız; örneğin 6 aylık ödemelerde %10, yıllık ödemelerde %20 indirim uygulanmaktadır."
    },
    {
      question: "Parça eşya depolama fiyatları nasıl belirlenir?",
      answer: "Parça eşya depolama fiyatlarımız, eşyanın türü, boyutu, özel paketleme gereksinimleri ve depolama süresine göre belirlenir. Örneğin, standart bir koltuk takımı ile kırılgan bir avize farklı fiyatlandırılır. Fiyatlandırmamız iki temel prensibe dayanır: eşya başına sabit fiyat veya metreküp başına fiyat. Beyaz eşya, koltuk gibi büyük parçalar genellikle parça başına fiyatlandırılırken, koliler ve küçük eşyalar için hacim bazlı fiyatlandırma uygulanır. Tüm fiyatlarımıza sigorta, güvenlik ve temel depolama hizmetleri dahildir. Ek olarak paketleme ve taşıma hizmetlerimiz de opsiyonel olarak sunulur."
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
            Parça Eşya Depolama Hakkında Sık Sorulan Sorular
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
              Tek parça eşyalarınız için ekonomik depolama çözümlerimiz hakkında detaylı bilgi alın.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Ücretsiz Fiyat Teklifi Alın
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 