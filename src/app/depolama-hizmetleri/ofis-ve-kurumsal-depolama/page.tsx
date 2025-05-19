import { Metadata } from 'next'
import StorageService from '@/components/StorageService'
import serviceData from '@/data/storage-services/ofis-ve-kurumsal-depolama.json'
import SEO from '@/components/SEO'
import Script from 'next/script'

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Ofis ve Kurumsal Depolama - Horex Nakliyat | İşletmeler İçin Özel Çözümler',
  description: serviceData.metaDescription,
  keywords: serviceData.metaKeywords,
  canonical: 'https://horex.com.tr/depolama-hizmetleri/ofis-ve-kurumsal-depolama',
  ogImage: serviceData.heroImage ? `https://horex.com.tr${serviceData.heroImage.src}` : 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: serviceData.heroImage ? serviceData.heroImage.alt : 'Horex Nakliyat - Ofis ve Kurumsal Depolama Hizmetleri',
  ogType: 'website'
});

export default function OfficeCorporateStorageService() {
  // Servis için schema.org yapılandırılmış veri
  const serviceSchema = SEO.generateServiceSchema(
    serviceData.title,
    serviceData.metaDescription,
    'https://horex.com.tr/depolama-hizmetleri/ofis-ve-kurumsal-depolama'
  );

  // Breadcrumb için schema.org yapılandırılmış veri
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Depolama Hizmetleri', url: 'https://horex.com.tr/depolama-hizmetleri' },
    { name: 'Ofis ve Kurumsal Depolama', url: 'https://horex.com.tr/depolama-hizmetleri/ofis-ve-kurumsal-depolama' }
  ]);

  // FAQ için sorular ve cevaplar
  const faqQuestions: FAQItem[] = [
    {
      question: "Kurumsal depolama hizmetiniz ofisimizin taşınma sürecinde nasıl yardımcı olabilir?",
      answer: "Ofis taşınma sürecinizde, eşyalarınızın bir kısmını veya tamamını geçici olarak depolayabiliriz. Bu, aşamalı taşınma imkanı sağlar ve yeni ofisinizin hazırlık sürecinde esneklik kazandırır. Mobilyalar, teknolojik ekipmanlar ve dosyalar için özel paketleme yaparak güvenle taşır ve depolarız. İş sürekliliğinizi korumak için kritik ekipmanlarınıza öncelik verip, hızlı erişim sağlayabiliriz. Ayrıca, taşınma sonrası ihtiyaç duymadığınız mobilya ve ekipmanları uzun vadeli depolama çözümlerimizle saklayabilirsiniz."
    },
    {
      question: "Arşiv belgelerimizi ne kadar süreyle depolayabilirsiniz?",
      answer: "Arşiv belgelerinizi ihtiyacınıza göre minimum 1 ay, maksimum süresiz olarak depolayabiliyoruz. Yasal saklama süreleri olan belgeler için uzun vadeli kontratlar sunuyoruz. 1, 3, 6 ay ve yıllık depolama paketlerimiz mevcut olup, uzun dönemli anlaşmalarda özel indirimler uyguluyoruz. Belgeleriniz asitsiz özel arşiv kutularında, nem ve sıcaklık kontrollü alanlarda muhafaza edilir. Ayrıca dijital arşivleme hizmeti ile fiziksel belgelerinizi tarayıp, bulut tabanlı sistemimize aktararak istediğiniz zaman online erişim sağlayabilirsiniz."
    },
    {
      question: "Kurumsal müşteriler için erişim ve güvenlik politikalarınız nelerdir?",
      answer: "Kurumsal müşterilerimiz için özel güvenlik protokolleri uyguluyoruz. Firma yetkiliniz tarafından belirlenen personel listesi oluşturulur ve sadece bu listedeki kişiler depolama alanına erişebilir. Her erişim için kimlik doğrulama yapılır ve tüm ziyaretler kaydedilir. 7/24 kamera gözetimi, hareket sensörleri ve profesyonel güvenlik personeliyle depolama alanları korunur. Ayrıca yangın, sel ve hırsızlık risklerine karşı kapsamlı sigorta sunuyoruz. İsterseniz özel giriş şifreleri ve erişim kartları ile sizin belirlediğiniz saatlerde depo erişimi de düzenlenebilir."
    },
    {
      question: "Ticari mallarımızın depolanması için envanter takip sisteminiz nasıl çalışır?",
      answer: "Kurumsal envanter takip sistemimiz, tüm ticari mallarınızın gerçek zamanlı olarak izlenmesini sağlar. İlk aşamada her ürün veya kutu barkodlanarak dijital envanter sistemimize kaydedilir. Web arayüzü ve mobil uygulamamız üzerinden, depolanan tüm ürünlerin detaylı listesine, fotoğraflarına ve konumlarına erişebilirsiniz. Stok giriş-çıkışları anında güncellenir ve istenirse periyodik envanter raporları alabilirsiniz. Sezonluk ürünler, promosyon malzemeleri veya stok fazlası ürünleriniz için özel etiketleme yapabilir, farklı kategorilerde gruplandırabilirsiniz. Ayrıca entegre rezervasyon sistemiyle, ihtiyaç duyduğunuz ürünlerin teslimat talebini online olarak oluşturabilirsiniz."
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
            Ofis ve Kurumsal Depolama Hakkında Sık Sorulan Sorular
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
              İşletmeniz için profesyonel depolama çözümlerimiz hakkında detaylı bilgi almak için hemen bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Kurumsal Teklif İsteyin
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 