import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import * as SEO from '@/components/SEO';

export type DistrictProps = {
  districtName: string;
  description: string;
  content: {
    introduction: string;
    services: string;
    advantages: string;
    process: string;
    faq: Array<{ question: string; answer: string }>;
  };
  imagePath: string;
  slug: string;
};

export default function DistrictPage({
  districtName,
  description,
  content,
  imagePath,
  slug,
}: DistrictProps) {
  // Generate schemas for SEO
  const pageUrl = `https://horex.com.tr/semtler/${slug}`;
  
  const localBusinessSchema = SEO.generateOrganizationSchema();
  
  const serviceSchema = SEO.generateServiceSchema(
    `${districtName} Nakliyat Hizmetleri`,
    `${districtName} bölgesinde profesyonel nakliyat ve taşımacılık hizmetleri. ${description}`,
    pageUrl
  );
  
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'İstanbul\'un Önemli Semtleri', url: 'https://horex.com.tr/semtler' },
    { name: districtName, url: pageUrl },
  ]);
  
  const faqSchema = content.faq.length > 0 
    ? SEO.generateFAQSchema(content.faq) 
    : '';

  const imageSchema = SEO.generateImageSchema(
    `https://horex.com.tr${imagePath}`,
    `${districtName} Nakliyat - Horex Nakliyat`,
    1200,
    630
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* JSON-LD Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessSchema }}
      />
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
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      )}
      <Script
        id="image-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: imageSchema }}
      />

      {/* Breadcrumbs Navigation - Good for SEO and user experience */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="hover:text-horex-red">Ana Sayfa</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/semtler" className="hover:text-horex-red">İstanbul'un Önemli Semtleri</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-horex-red font-medium" aria-current="page">{districtName}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main>
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{districtName} Nakliyat Hizmetleri</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">{description}</p>
              <div className="bg-horex-red text-white p-4 rounded-md inline-block">
                <a href="tel:+908508883939" className="flex items-center font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Arayın: 0850 888 39 39
                </a>
              </div>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={imagePath} 
                alt={`${districtName} Nakliyat - Horex Nakliyat İstanbul`} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                quality={85}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{districtName} Bölgesi Hakkında</h2>
          <div className="prose max-w-none">
            <p>{content.introduction}</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{districtName} Nakliyat Hizmetlerimiz</h2>
          <div className="prose max-w-none">
            <p>{content.services}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Evden Eve Nakliyat</h3>
              <p className="text-gray-700">Güvenli ve profesyonel ev taşıma hizmeti</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Ofis Taşıma</h3>
              <p className="text-gray-700">İş kesintisini minimuma indiren ofis taşıma çözümleri</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Eşya Depolama</h3>
              <p className="text-gray-700">Güvenli ve iklim kontrollü depolama alanları</p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{districtName} Nakliyat Avantajlarımız</h2>
          <div className="prose max-w-none mb-6">
            <p>{content.advantages}</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-horex-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sigortalı ve güvenli taşıma garantisi</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-horex-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Profesyonel ve deneyimli ekip</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-horex-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Modern ve bakımlı araç filosu</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-horex-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Özel ambalajlama malzemeleri</span>
            </li>
          </ul>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{districtName} Nakliyat Sürecimiz</h2>
          <div className="prose max-w-none">
            <p>{content.process}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="bg-horex-red text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-semibold mb-2">Ücretsiz Keşif</h3>
              <p className="text-sm">Eşyalarınızın miktarını ve özel ihtiyaçlarınızı belirleriz</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="bg-horex-red text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-semibold mb-2">Planlama</h3>
              <p className="text-sm">Tüm süreç detaylı şekilde planlanır ve onayınıza sunulur</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="bg-horex-red text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-semibold mb-2">Paketleme</h3>
              <p className="text-sm">Eşyalarınız profesyonel malzemelerle güvenle paketlenir</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="bg-horex-red text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">4</div>
              <h3 className="font-semibold mb-2">Taşıma ve Kurulum</h3>
              <p className="text-sm">Eşyalarınız yeni adresinize taşınır ve kurulumu yapılır</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {content.faq.length > 0 && (
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">{districtName} Nakliyat Hakkında Sık Sorulan Sorular</h2>
            <div className="space-y-6">
              {content.faq.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-horex-red text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">{districtName} Nakliyat Hizmeti İçin Bize Ulaşın</h2>
          <p className="mb-6">Profesyonel nakliyat hizmetlerimizden yararlanmak için hemen bize ulaşın.</p>
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
      </main>
    </div>
  );
} 