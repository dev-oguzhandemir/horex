import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import * as SEO from '@/components/SEO';
import { getDistrictSlugs } from '@/data/districts';

export const metadata: Metadata = SEO.generateMetadata({
  title: 'İstanbul\'un Önemli Semtleri - Horex Nakliyat ve Taşımacılık Hizmetleri',
  description: 'İstanbul\'un tüm semtlerinde profesyonel nakliyat ve taşımacılık hizmetleri. Levent, Maslak, Nişantaşı ve diğer önemli semtlerde güvenilir ve sigortalı evden eve nakliyat.',
  keywords: 'İstanbul semtleri nakliyat, Levent evden eve nakliyat, Maslak nakliyat, Etiler taşımacılık, Nişantaşı nakliye, İstanbul semt nakliyatı',
  canonical: 'https://horexnakliyat.com/semtler',
  ogImage: 'https://horexnakliyat.com/images/istanbul-semtleri.jpg',
  ogType: 'website',
});

export default function DistrictsPage() {
  const districts = getDistrictSlugs();
  
  // Generate structured data for the page
  const webPageSchema = SEO.generateWebPageSchema(
    'İstanbul\'un Önemli Semtleri - Nakliyat Hizmetlerimiz',
    'İstanbul\'un Levent, Maslak, Nişantaşı gibi önemli semtlerinde profesyonel nakliyat hizmetleri sunuyoruz.',
    'https://horexnakliyat.com/semtler'
  );
  
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'İstanbul\'un Önemli Semtleri', url: 'https://horexnakliyat.com/semtler' }
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* JSON-LD Structured Data */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="hover:text-horex-red">Ana Sayfa</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-horex-red font-medium" aria-current="page">İstanbul'un Önemli Semtleri</li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">İstanbul'un Önemli Semtlerinde Nakliyat Hizmetleri</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Horex Nakliyat olarak İstanbul'un tüm önemli semtlerinde profesyonel nakliyat ve taşımacılık hizmetleri sunuyoruz. 
          Her semtin kendine özgü mimari ve ulaşım özelliklerine uygun özel çözümlerimizle eşyalarınızı güvenle taşıyoruz.
        </p>
      </section>

      {/* Districts Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map(({ slug, districtName }) => (
            <article key={slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <Link href={`/semtler/${slug}`} className="block">
                <div className="relative h-60 w-full">
                  <Image 
                    src={`/images/districts/${slug}.jpg`} 
                    alt={`${districtName} Nakliyat - Horex Nakliyat İstanbul`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={80}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-horex-red">{districtName} Nakliyat Hizmetleri</h2>
                  <p className="text-gray-700 mb-4">
                    {districtName} bölgesinde profesyonel evden eve nakliyat, ofis taşıma ve eşya depolama hizmetleri
                  </p>
                  <div className="text-horex-red font-medium flex items-center">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">İstanbul'un Semtlerinde Profesyonel Nakliyat</h2>
        <div className="prose max-w-none">
          <p>
            İstanbul, farklı özellikleri ve yapısıyla dikkat çeken onlarca semte ev sahipliği yapmaktadır. Her semtin kendine özgü sokak yapısı, 
            bina tarzı ve coğrafi konumu, nakliyat hizmetlerinin de semte özel planlanmasını gerektirmektedir. Horex Nakliyat olarak, 
            İstanbul'un tüm semtlerinin özelliklerini biliyor ve buna göre özel nakliyat çözümleri sunuyoruz.
          </p>
          <p>
            Levent ve Maslak gibi modern plazaların yoğun olduğu semtlerde, ofis taşıma hizmetlerimiz öne çıkarken; 
            Nişantaşı ve Bebek gibi tarihi dokusu güçlü ve dar sokaklara sahip semtlerde, özel ekipmanlarımız ve deneyimli ekibimizle çözümler üretiyoruz. 
            Etiler gibi lüks konutların yoğun olduğu bölgelerde ise, değerli eşyaların taşınması konusundaki uzmanlığımızla fark yaratıyoruz.
          </p>
          <p>
            İstanbul'un her semtinde, o bölgenin trafik durumunu, park olanaklarını, bina özelliklerini ve olası zorlukları bilen ekiplerimizle 
            sorunsuz bir nakliyat deneyimi sunuyoruz. Tüm nakliyat hizmetlerimiz sigortalı olup, eşyalarınız taşıma sürecinin her aşamasında güvence altındadır.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">İstanbul Semtlerinde Nakliyat Hakkında Sık Sorulan Sorular</h2>
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-lg mb-2">İstanbul'un hangi semtlerinde nakliyat hizmeti veriyorsunuz?</h3>
            <p className="text-gray-700">
              Horex Nakliyat olarak İstanbul'un tüm semtlerinde nakliyat hizmeti vermekteyiz. Özellikle Levent, Maslak, Nişantaşı, Etiler, Bebek, 
              Ortaköy, Mecidiyeköy, Fulya, Acıbadem, Kozyatağı, Bostancı, Caddebostan, Florya, Yeşilköy, Bahçeşehir, Kemerburgaz, Göktürk ve 
              Zekeriyaköy gibi semtlerde yoğun olarak faaliyet gösteriyoruz.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-lg mb-2">Semtlere özel nakliyat çözümleriniz var mı?</h3>
            <p className="text-gray-700">
              Evet, her semtin kendine özgü yapısı ve ihtiyaçlarına göre özel nakliyat çözümlerimiz mevcuttur. Örneğin, tarihi bölgelerde dar sokaklara özel 
              küçük araçlar ve özel paketleme teknikleri kullanırken, modern plazaların bulunduğu bölgelerde özel asansör sistemleri ve hızlı taşıma çözümleri sunuyoruz.
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-lg mb-2">İstanbul semtlerinde taşınmak için en uygun zaman nedir?</h3>
            <p className="text-gray-700">
              İstanbul'da trafik yoğunluğunu göz önünde bulundurarak, genellikle sabah erken saatlerde veya akşam geç saatlerde taşınmayı öneriyoruz. 
              Ayrıca hafta sonları, özellikle iş merkezlerinin yoğun olduğu semtlerde daha rahat bir taşınma süreci sağlamaktadır. Her semt için ideal 
              taşınma zamanı farklılık gösterebilir, bu konuda keşif sırasında size en uygun zamanı öneriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-horex-red text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">İstanbul'da Güvenilir Nakliyat Hizmeti</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          İstanbul'un tüm semtlerinde profesyonel nakliyat hizmetlerimizden yararlanmak için hemen bize ulaşın. 
          Ücretsiz keşif ve fiyat teklifi ile nakliyat sürecinizi planlayalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+908508883939" className="bg-white text-horex-red font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hemen Arayın
          </a>
          <Link href="/iletisim" className="border-2 border-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-horex-red transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4" />
            </svg>
            Teklif Alın
          </Link>
        </div>
      </section>
    </div>
  );
} 