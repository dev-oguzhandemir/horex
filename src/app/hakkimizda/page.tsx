import { Metadata } from 'next'
import SEO from '@/components/SEO'
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Hakkımızda - Horex Nakliyat | Güvenli Taşımacılığın Adresi',
  description: 'Horex Nakliyat, Türkiye\'nin önde gelen taşımacılık ve lojistik şirketidir. Profesyonel ekip, sigortalı taşımacılık ve zamanında teslimat ile hizmetinizdeyiz.',
  keywords: 'horex nakliyat hakkında, güvenli taşımacılık, profesyonel nakliye hizmeti, ev taşıma, ofis taşıma, depolama hizmetleri, uluslararası taşımacılık',
  canonical: 'https://horex.com.tr/hakkimizda',
  ogType: 'profile',
});

export default function AboutUsPage() {
  const aboutUsSchema = SEO.generateSchemaOrgData('AboutPage', {
    name: 'Horex Nakliyat Hakkında',
    description: 'Türkiye\'nin önde gelen taşımacılık ve lojistik şirketi olan Horex Nakliyat\'ın sunduğu hizmetler, avantajlar ve iletişim bilgileri.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Horex Nakliyat',
      description: 'Profesyonel ve hızlı nakliye hizmetleriyle eşyalarınızı güvenle taşıyoruz.',
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
    <>
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
      
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
             backgroundSize: "cover"}}></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-red-900/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm text-red-100 font-medium tracking-wider uppercase">Güvenilir Taşımacılık Çözümleri</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Horex Nakliyat: <span className="text-yellow-300">Güvenli</span> <br className="hidden md:block" />
              Taşımacılığın Adresi
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
              Profesyonel ve Hızlı Nakliye Hizmetleriyle Tanışın
            </p>
            
            <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mb-10"></div>
            
            <a href="#about" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors">
              <span>Daha Fazla Keşfet</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-lg z-0"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center relative z-10">
              Horex Nakliyat <span className="text-red-600">Hakkında</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative rounded-xl overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent z-10 rounded-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-xl"></div>
                <div className="relative z-10 bg-white p-3 rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <div className="aspect-video overflow-hidden rounded-lg relative">
                    <Image 
                      src="/images/all-big-size-image/1.jpg" 
                      alt="Horex Nakliyat Profesyonel Ekibi" 
                      fill 
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <article>
                <h3 className="text-2xl font-semibold mb-5 text-red-800 border-l-4 border-red-600 pl-4">Şirket Tanıtımı</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                  Horex Nakliyat, Türkiye'nin önde gelen taşımacılık ve lojistik şirketlerinden biridir. Uzun yıllara
                  dayanan tecrübesi ve uzman kadrosuyla, müşterilerine güvenilir ve hızlı hizmet sunmayı
                  amaçlamaktadır.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Şirket, müşteri memnuniyetini ön planda tutarak, kaliteli hizmet anlayışını
                  benimsemiştir.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,224C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Horex Nakliyat, geniş bir hizmet yelpazesi sunmaktadır. Tüm hizmetlerimiz profesyonel ekip ve modern ekipmanlarla sağlanmaktadır.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <article className="group bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-red-600 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:text-yellow-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-700 group-hover:text-red-900 transition-colors duration-300">Ev Taşıma Hizmetleri</h3>
              <p className="text-gray-600">
                Horex, evden eve nakliyat konusunda uzmanlaşmış bir ekiple,
                eşyalarınızın güvenli bir şekilde yeni adresinize taşınmasını sağlar.
              </p>
            </article>
            
            <article className="group bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-red-600 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:text-yellow-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-700 group-hover:text-red-900 transition-colors duration-300">Ofis Taşıma Hizmetleri</h3>
              <p className="text-gray-600">
                Şirket, iş yerlerinin taşınmasında profesyonel çözümler sunarak, iş
                süreçlerinizin aksamadan devam etmesini hedefler.
              </p>
            </article>
            
            <article className="group bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-red-600 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:text-yellow-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-700 group-hover:text-red-900 transition-colors duration-300">Depolama Hizmetleri</h3>
              <p className="text-gray-600">
                Müşterilerine güvenli ve modern depolama alanları sunarak,
                eşyalarınızı dilediğiniz süre boyunca saklama imkanı sunar.
              </p>
            </article>
            
            <article className="group bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-red-600 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-yellow-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 group-hover:text-yellow-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-700 group-hover:text-red-900 transition-colors duration-300">Uluslararası Taşımacılık</h3>
              <p className="text-gray-600">
                Horex Nakliyat, uluslararası nakliyat hizmetleri ile eşyalarınızı
                dünya genelinde güvenle taşır.
              </p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Horex Nakliyat'ı tercih etmenin birçok avantajı bulunmaktadır
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-red-200">
              <div className="h-3 bg-red-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
              <div className="p-6 md:p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Deneyimli Kadro</h3>
                <p className="text-gray-700 text-center">
                  Şirket, alanında uzman ve deneyimli bir ekiple çalışarak hizmet kalitesini artırmaktadır. Eğitimli ve tecrübeli personelimiz, en zorlu taşımalarda bile profesyonel çözümler sunar.
                </p>
              </div>
            </article>
            
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-red-200">
              <div className="h-3 bg-red-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
              <div className="p-6 md:p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Sigortalı Taşımacılık</h3>
                <p className="text-gray-700 text-center">
                  Tüm taşıma süreçlerinde sigorta hizmeti sunarak, müşterilerimizin eşyalarının güvende olmasını garanti altına alırız. Böylece güvenle ve içiniz rahat olarak taşınabilirsiniz.
                </p>
              </div>
            </article>
            
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-red-200">
              <div className="h-3 bg-red-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
              <div className="p-6 md:p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Zamanında Teslimat</h3>
                <p className="text-gray-700 text-center">
                  Taşıma işlemlerinde zamanında teslimat ilkesine bağlı kalarak, müşterilerimizin planlarına uygun hizmet sunarız. Planladığınız gibi, gecikmesiz ve sorunsuz taşınma deneyimi yaşarsınız.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      {/* Contact / CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -left-32 top-10 w-64 h-64 rounded-full bg-red-100/50 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-32 bottom-10 w-64 h-64 rounded-full bg-yellow-100/50 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">İletişim</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Horex Nakliyat ile iletişime geçmek oldukça kolaydır. Şirketin resmi web sitesi üzerinden hizmet
              taleplerinde bulunabilir veya müşteri hizmetleri ile doğrudan iletişime geçebilirsiniz. Horex,
              müşteri memnuniyetini ön planda tutarak, her türlü sorunuz ve ihtiyaçlarınız için profesyonel
              destek sağlamaktadır.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 hover:border-red-200 transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Bizimle İletişime Geçin</h3>
                <p className="text-gray-600 mb-4">
                  Taşıma, depolama veya diğer hizmetlerimiz hakkında bilgi almak için hemen iletişime geçin. Size en kısa sürede dönüş yapacağız.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+90 (850) 888 39 39</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@horex.com.tr</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href="/iletisim" 
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-red-200/50 transition-all duration-300 transform hover:-translate-y-1 text-lg group"
                >
                  <span className="flex items-center">
                    <span>Bize Ulaşın</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:ml-3 transition-all duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}