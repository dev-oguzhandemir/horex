import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import References from '@/components/References'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-horex-red to-horex-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Güvenilir ve Profesyonel<br />Nakliyat Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Türkiye'nin her noktasında kaliteli, güvenli ve profesyonel nakliyat hizmetleri sunuyoruz.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/iletisim" 
                className="bg-white text-horex-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ücretsiz Teklif Al
              </Link>
              <Link 
                href="/hizmetler" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nakliyat ve Lojistik Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-horex-gray hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-horex-red rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-horex-dark-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <Stats />

      {/* Neden Biz Section */}
      <section className="py-20 bg-horex-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Neden Horex Nakliyat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="w-16 h-16 bg-horex-red rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-horex-dark-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <References />

      {/* Blog & Haberler */}
      <BlogSection />

      {/* İletişim Formu */}
      <ContactForm />

      {/* CTA Section */}
      <section className="py-20 bg-horex-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hemen Ücretsiz Teklif Alın
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimizle güvenli ve sorunsuz bir taşınma deneyimi için yanınızdayız.
          </p>
          <Link 
            href="/iletisim" 
            className="bg-horex-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
          >
            Şimdi Teklif Al
          </Link>
        </div>
      </section>
    </>
  )
}

const services = [
  {
    title: 'Evden Eve Nakliyat',
    description: 'Eşyalarınızı özenle paketliyor, güvenle yeni adresinize taşıyoruz.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Şehirler Arası Nakliyat',
    description: "Türkiye'nin her noktasına güvenli ve hızlı şehirler arası nakliyat hizmeti.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Ofis Taşıma',
    description: 'İş yerinizi minimum kesinti ile yeni adresinize taşıyoruz.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const features = [
  {
    title: 'Profesyonel Ekip',
    description: 'Deneyimli ve uzman kadromuzla güvenli taşımacılık.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Sigortalı Taşımacılık',
    description: 'Tüm eşyalarınız sigorta güvencesi altında.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '7/24 Destek',
    description: 'Her an yanınızda olan müşteri hizmetleri.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Uygun Fiyat',
    description: 'Kaliteli hizmeti uygun fiyatlarla sunuyoruz.',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]
