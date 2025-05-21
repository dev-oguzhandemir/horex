import { Metadata } from 'next'
import SEO from '@/components/SEO'
import Script from 'next/script'
import Image from 'next/image'

export const metadata: Metadata = SEO.generateMetadata({
  title: 'İletişim - Horex Nakliyat | Bize Ulaşın',
  description: 'Horex Nakliyat ile iletişime geçin. Evden eve nakliyat, ofis taşıma ve depolama hizmetleri için ücretsiz teklif alın.',
  keywords: 'horex nakliyat iletişim, nakliyat iletişim, nakliyat telefon, nakliyat adres, nakliyat whatsapp',
  canonical: 'https://horex.com.tr/iletisim',
  ogType: 'website',
});

export default function ContactPage() {
  const contactSchema = SEO.generateSchemaOrgData('ContactPage', {
    name: 'Horex Nakliyat İletişim',
    description: 'Horex Nakliyat iletişim bilgileri. Telefon, WhatsApp, e-posta ve adres bilgilerimiz.',
    url: 'https://horex.com.tr/iletisim',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+908508883939',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish'
      }
    ]
  });
  
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'İletişim', url: 'https://horex.com.tr/iletisim' }
  ]);

  return (
    <>
      <Script
        id="contact-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: contactSchema }}
      />
      <Script
        id="breadcrumb-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      
      {/* Hero Section with Gradient Background - Improved Responsive Design */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
             backgroundSize: "cover"}}></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-red-900/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm text-red-100 font-medium tracking-wider uppercase">7/24 Hizmetinizdeyiz</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              İletişim <span className="text-yellow-300">Bilgilerimiz</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
              Profesyonel nakliyat hizmetlerimiz hakkında bilgi almak ve ücretsiz teklif için bizimle iletişime geçin.
            </p>
            
            <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mb-8"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <a 
                href="https://wa.me/905072135501?text=Merhaba,%20nakliyat%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Ücretsiz Teklif Al
              </a>
              
              <a 
                href="tel:+908508883939" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">7/24 Müşteri Hizmetleri</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Hemen Dönüş</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm">Profesyonel Ekip</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Improved wave transition that doesn't cut off content */}
        <div className="relative z-0 h-24 sm:h-32 md:h-40 lg:h-48">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,202.7C672,213,768,171,864,154.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-lg z-0"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center relative z-10">
              Bizimle <span className="text-red-600">İletişime Geçin</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Size en iyi hizmeti sunabilmek için her zaman buradayız. Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Telefon Numaraları */}
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-red-200">
              <div className="h-3 bg-red-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-6 text-red-700 group-hover:text-red-900 transition-colors duration-300">Telefon Numaralarımız</h3>
                <div className="space-y-4">
                  <a href="tel:+908508883939" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <span className="text-lg">0850 888 39 39</span>
                  </a>
                  <a href="tel:+905327273939" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                    <span className="text-lg">0532 727 39 39</span>
                  </a>
                </div>
              </div>
            </article>

            {/* WhatsApp */}
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-green-200">
              <div className="h-3 bg-green-600 group-hover:bg-green-500 transition-colors duration-300"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-6 text-green-700 group-hover:text-green-900 transition-colors duration-300">WhatsApp</h3>
                <div className="text-center">
                  <a href="https://wa.me/905072135501?text=Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum." 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                    <span className="text-lg">0507 213 55 01</span>
                  </a>
                  <p className="text-sm text-gray-500 mt-4">7/24 WhatsApp üzerinden bize ulaşabilirsiniz</p>
                </div>
              </div>
            </article>

            {/* E-posta ve Adres */}
            <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-red-200">
              <div className="h-3 bg-red-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                  <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-6 text-red-700 group-hover:text-red-900 transition-colors duration-300">E-posta & Adres</h3>
                <div className="space-y-4 text-center">
                  <a href="mailto:ayirkanhoroz@gmail.com" className="block text-gray-600 hover:text-red-600 transition-colors text-lg">
                    ayirkanhoroz@gmail.com
                  </a>
                  <p className="text-gray-600">
                    Güvenli Sokağı No: 1<br />
                    Cevizli, 34846 Maltepe/İstanbul
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,224C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="relative mb-12">
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-red-100 rounded-lg z-0"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center relative z-10">
              Bizi <span className="text-red-600">Ziyaret Edin</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-6">
              Ofisimize gelerek hizmetlerimiz hakkında detaylı bilgi alabilirsiniz.
            </p>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
            <div className="p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.952366132367!2d29.153112!3d40.913051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79c8d1c3be7%3A0x3f8f3b4fc6b0e9a9!2sHorex%20Nakliyat!5e0!3m2!1str!2str!4v1624291234567!5m2!1str!2str&markers=color:red%7Clabel:H%7C40.913051,29.153112"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Horex Nakliyat Konum"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Haritada gösterilen konum yaklaşık konumdur. Ziyaret öncesi lütfen randevu alınız.
          </div>
        </div>
      </section>

      {/* Çalışma Saatleri */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-lg z-0"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center relative z-10">
                Çalışma <span className="text-red-600">Saatlerimiz</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-red-100">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-700">Hafta İçi</h3>
                  <p className="text-gray-700 text-lg">09:00 - 18:00</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-red-100">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-700">Hafta Sonu</h3>
                  <p className="text-gray-700 text-lg">10:00 - 16:00</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100 transform transition-all duration-300 hover:bg-red-100">
                <p className="text-center text-gray-700">
                  <span className="font-semibold text-red-600">Önemli Not:</span> Acil durumlar için 7/24 telefon ve WhatsApp üzerinden ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -left-32 top-10 w-64 h-64 rounded-full bg-red-100/50 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -right-32 bottom-10 w-64 h-64 rounded-full bg-yellow-100/50 mix-blend-multiply blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl text-center border border-gray-100 transform transition-all duration-500 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">Hemen İletişime Geçin</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Nakliyat hizmetlerimiz hakkında bilgi almak ve ücretsiz keşif için hemen bizimle iletişime geçin.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a href="tel:+908508883939" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Bizi Arayın</span>
              </a>
              
              <a href="https://wa.me/905072135501?text=Merhaba,%20nakliyat%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-green-600/20 transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp'tan Yazın</span>
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-gray-600">
              En kısa sürede uzman ekibimiz size dönüş yapacaktır.
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 