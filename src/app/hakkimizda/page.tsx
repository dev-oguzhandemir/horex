import { Metadata } from 'next'
import SEO from '@/components/SEO'
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Hakkımızda - Horex Nakliyat | Güvenilir Taşımacılık Çözümleri',
  description: 'Horex Nakliyat, 2015\'den beri İstanbul\'da evden eve nakliyat, ofis taşıma ve depolama hizmetleri sunuyor. Misyonumuz, değerlerimiz ve profesyonel ekibimiz hakkında bilgi edinin.',
  keywords: 'horex nakliyat hakkında, nakliye şirketi istanbul, profesyonel taşımacılık, evden eve nakliyat firması, ofis taşıma uzmanı',
  canonical: 'https://horex.com.tr/hakkimizda',
  ogType: 'profile',
});

export default function AboutUsPage() {
  const aboutUsSchema = SEO.generateSchemaOrgData('AboutPage', {
    name: 'Horex Nakliyat Hakkında',
    description: 'Horex Nakliyat hakkında bilgi edinin. Profesyonel nakliyat hizmetleri sunan firmamızın hikayesi, değerleri ve misyonu.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Horex Nakliyat',
      description: 'Profesyonel nakliyat hizmetleri ile eşyalarınızı güvenle taşıyoruz.',
      foundingDate: '2015',
      founders: [
        {
          '@type': 'Person',
          name: 'Horex Kurucusu'
        }
      ],
      url: 'https://horex.com.tr',
      logo: 'https://horex.com.tr/logo.svg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Güvenli Sokağı No: 1',
        addressLocality: 'Maltepe',
        addressRegion: 'İstanbul',
        postalCode: '34846',
        addressCountry: 'TR'
      }
    }
  });
  
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Hakkımızda', url: 'https://horex.com.tr/hakkimizda' }
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <Script
        id="about-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: aboutUsSchema }}
      />
      <Script
        id="breadcrumb-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Hakkımızda</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
          <Image 
            src="/images/about-us.jpg" 
            alt="Horex Nakliyat Ekibi - Profesyonel Nakliyat Hizmeti" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Horex Nakliyat olarak, <strong>2015 yılından</strong> bu yana sektördeki deneyimimiz ve uzman kadromuzla müşterilerimize en iyi nakliyat hizmetini sunmayı amaçlıyoruz.
          </p>
          
          <p className="mb-4">
            İstanbul merkezli firmamız, Türkiye'nin dört bir yanına güvenilir evden eve nakliyat, ofis taşıma, eşya depolama ve şehirlerarası nakliyat hizmetleri sunmaktadır.
          </p>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Misyonumuz</h2>
        <p>
          Eşyalarınızı özenle ve güvenle taşımak, nakliyat sürecini stressiz ve sorunsuz bir deneyime dönüştürmek için çalışıyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, her taşıma işlemini titizlikle planlıyor ve profesyonel ekibimizle kusursuz şekilde gerçekleştiriyoruz.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Vizyonumuz</h2>
        <p>
          Türkiye'nin lider nakliyat firması olmak ve sektörde kalite standartlarını belirleyen bir marka haline gelmek. Teknolojik yenilikleri takip ederek hizmet kalitemizi sürekli geliştirmek ve müşterilerimize en iyi deneyimi sunmak için çalışıyoruz.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Değerlerimiz</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Müşteri memnuniyeti odaklı hizmet</li>
          <li>Güvenilirlik ve şeffaflık</li>
          <li>Profesyonellik ve uzmanlık</li>
          <li>Yenilikçi çözümler</li>
          <li>Çevreye ve topluma duyarlılık</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Neden Biz?</h2>
        <ul className="list-disc pl-6 mt-4">
          <li><strong>Deneyimli Ekip:</strong> Alanında uzman ve tecrübeli personelimizle hizmet veriyoruz.</li>
          <li><strong>Sigortalı Taşımacılık:</strong> Tüm eşyalarınız sigorta kapsamında taşınmaktadır.</li>
          <li><strong>Özel Paketleme:</strong> Her eşya türü için özel paketleme malzemeleri kullanıyoruz.</li>
          <li><strong>7/24 Müşteri Desteği:</strong> Taşınma sürecinde her an yanınızdayız.</li>
          <li><strong>Modern Ekipman:</strong> Son teknoloji araç ve ekipmanlarla çalışıyoruz.</li>
        </ul>
      </div>
    </div>
  )
} 