import Stats from '@/components/Stats'
import References from '@/components/References'
import BlogSection from '@/components/BlogSection'
import FutureServices from '@/components/FutureServices'
import HeroSection from '@/components/HeroSection'
import SelectionCriteria from '@/components/SelectionCriteria'
import { Metadata } from 'next'
import SEO from '@/components/SEO'
import Script from 'next/script'

// SEO Metadata
export const metadata: Metadata = SEO.generateMetadata({
  title: 'Horex Nakliyat - Güvenilir Evden Eve Nakliyat ve Lojistik Hizmetleri',
  description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz. Evden eve nakliyat, ofis taşıma ve depolama çözümleri için hemen teklif alın.',
  keywords: 'nakliyat, evden eve nakliyat, ofis taşıma, eşya depolama, güvenli taşımacılık, istanbul nakliyat, şehirler arası nakliyat',
  canonical: 'https://horex.com.tr',
  ogImage: 'https://horex.com.tr/images/og-image.jpg',
  ogImageAlt: 'Horex Nakliyat - Profesyonel Taşımacılık Hizmetleri',
});

// FAQ için tip tanımları
type FAQItem = {
  question: string;
  answer: string;
};

// İçerik bölümleri için ayrı componentlar - CMS entegrasyonu için uygun yapı
const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Güvenlik',
      description: 'Eşyalarınızın hasar görmeden taşınması için profesyonel ekipman ve yöntemler kullanılır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Zaman Tasarrufu',
      description: 'Deneyimli ekipler sayesinde taşınma süreci daha hızlı tamamlanır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Stres Azaltma',
      description: 'Profesyonel bir ekibin desteği, taşınma sürecindeki stresi azaltır.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sigorta',
      description: 'Eşyalarınız için sigorta hizmeti sunarak olası zararları güvence altına alırız.',
      icon: (
        <svg className="w-12 h-12 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-us-title">
      <div className="container mx-auto px-4">
        <h2 id="why-choose-us-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
          Neden Bizi Seçmelisiniz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sık Sorulan Sorular Bileşeni
const FAQSection = ({ questions }: { questions: FAQItem[] }) => {
  return (
    <section className="py-16 bg-gray-50" id="sikca-sorulan-sorular">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nakliyat Hakkında Sık Sorulan Sorular
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Nakliyat süreçleri hakkında merak ettiğiniz soruların cevaplarını aşağıda bulabilirsiniz. Daha fazla sorunuz varsa bize ulaşmaktan çekinmeyin.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((faq: FAQItem, index: number) => (
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
          <a
            href="/iletisim"
            className="inline-flex items-center justify-center px-6 py-3 bg-horex-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  // Structured data için kullanılacak şemalar
  const organizationSchema = SEO.generateOrganizationSchema();
  
  // FAQ şeması için sorular
  const faqQuestions: FAQItem[] = [
    {
      question: "Nakliyat hizmetleriniz hangi bölgeleri kapsamaktadır?",
      answer: "Horex Nakliyat olarak Türkiye'nin tüm şehirlerine hizmet vermekteyiz. İstanbul içi ve şehirler arası nakliyat hizmetlerimiz bulunmaktadır."
    },
    {
      question: "Nakliyat fiyatlarınız nasıl belirlenmektedir?",
      answer: "Nakliyat fiyatlarımız taşınacak eşyaların miktarı, mesafe, kat durumu ve asansör kullanımı gibi faktörlere göre belirlenmektedir. Ücretsiz ekspertiz hizmetimizle size özel fiyat teklifi sunuyoruz."
    },
    {
      question: "Eşyalarımın güvenliği için ne tür önlemler alıyorsunuz?",
      answer: "Tüm eşyalarınız profesyonel ekipmanlar ve malzemelerle paketlenir, sigortalı olarak taşınır. Alanında uzman personelimiz ile eşyalarınızın güvenliği maksimum seviyede sağlanır."
    },
    {
      question: "Taşınma öncesi hangi hazırlıkları yapmalıyım?",
      answer: "Değerli ve kırılgan eşyalarınızı ayrı tutmanızı, taşınma gününden bir gün önce eşyalarınızı hazır etmenizi ve önemli belgeleri yanınızda bulundurmanızı öneririz. Nakliyat uzmanlarımız size detaylı bir hazırlık listesi sunacaktır."
    }
  ];
  
  const faqSchema = SEO.generateFAQSchema(faqQuestions);
  
  // Web sayfası şeması
  const webPageSchema = SEO.generateWebPageSchema(
    'Horex Nakliyat - Profesyonel Taşımacılık Hizmetleri',
    'Güvenilir ve profesyonel nakliyat hizmetleri sunan Horex Nakliyat resmi web sitesi. Evden eve nakliyat, ofis taşıma ve depolama hizmetleri.',
    'https://horex.com.tr'
  );

  return (
    <>
      {/* Schema.org yapılandırılmış veriler */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />

      <div className="overflow-x-hidden w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Neden Bizi Seçmelisiniz */}
        <WhyChooseUs />

        {/* Seçim Kriterleri */}
        <SelectionCriteria />

        {/* İstatistikler */}
        <Stats />

        {/* Nakliyat Hizmetlerinin Geleceği */}
        <FutureServices />

        {/* Referanslar */}
        {/* <References /> */}
        
        {/* Sık Sorulan Sorular */}
        <FAQSection questions={faqQuestions} />

        {/* Blog Bölümü */}
        <BlogSection />
      </div>
    </>
  )
}
