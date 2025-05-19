'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  {
    title: 'Anasayfa',
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Nakliyat Hizmetleri',
    href: '/nakliyat-hizmetleri',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    submenu: [
      {
        title: 'Evden Eve Nakliyat',
        href: '/nakliyat-hizmetleri/evden-eve-nakliyat',
        description: 'Eşyalarınızı özenle paketliyor, güvenle yeni adresinize taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      },
      {
        title: 'Şehir İçi Nakliyat',
        href: '/nakliyat-hizmetleri/sehir-ici-nakliyat',
        description: 'Şehir içinde güvenli ve hızlı nakliyat hizmeti.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'Şehirler Arası Nakliyat',
        href: '/nakliyat-hizmetleri/sehirler-arasi-nakliyat',
        description: 'Türkiye\'nin her noktasına güvenli ve hızlı şehirler arası nakliyat hizmeti.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'Fabrika Taşımacılığı',
        href: '/nakliyat-hizmetleri/fabrika-tasimaciligi',
        description: 'Endüstriyel tesislerin taşınması için özel çözümler.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'Ofis Taşıma',
        href: '/nakliyat-hizmetleri/ofis-tasima',
        description: 'İş yerinizi minimum kesinti ile yeni adresinize taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'Fuar Taşımacılığı',
        href: '/nakliyat-hizmetleri/fuar-tasimaciligi',
        description: 'Fuar malzemelerinizi zamanında ve güvenle taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Sigortalı Taşımacılık',
        href: '/nakliyat-hizmetleri/sigortali-tasimacilik',
        description: 'Eşyalarınız sigorta güvencesi altında taşınır.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Asansörlü Taşımacılık',
        href: '/nakliyat-hizmetleri/asansorlu-tasima',
        description: 'Yüksek katlı binalarda güvenli taşıma hizmeti.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )
      },
      {
        title: 'Parça Eşya Taşımacılığı',
        href: '/nakliyat-hizmetleri/parca-esya-tasimaciligi',
        description: 'Tek bir eşyanızı bile profesyonel ekibimizle taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
    ]
  },
  {
    title: 'Depolama Hizmetleri',
    href: '/depolama-hizmetleri',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    submenu: [
      {
        title: 'Ev Eşyası Depolama',
        href: '/depolama-hizmetleri/ev-esyasi-depolama',
        description: 'Ev eşyalarınız güvenli depolama alanlarımızda muhafaza edilir.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      },
      {
        title: 'Oda Bazlı Depolama',
        href: '/depolama-hizmetleri/oda-bazli-depolama',
        description: 'Tek bir odanın eşyalarını güvenle depoluyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      {
        title: 'Parça Eşya Depolama',
        href: '/depolama-hizmetleri/parca-esya-depolama',
        description: 'Tek bir eşyanızı bile güvenle depoluyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      {
        title: 'Özel Eşya Depolama',
        href: '/depolama-hizmetleri/ozel-esya-depolama',
        description: 'Değerli ve hassas eşyalarınız için özel depolama çözümleri.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Ofis ve Kurumsal Depolama',
        href: '/depolama-hizmetleri/ofis-ve-kurumsal-depolama',
        description: 'Ofis mobilya ve ekipmanlarınız için profesyonel depolama hizmeti.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Hizmet Kapasitemiz',
    href: '/hizmet-kapasitemiz',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    submenu: [
      {
        title: 'Araçlarımız',
        href: '/hizmet-kapasitemiz/araclarimiz',
        description: 'Modern ve bakımlı araç filomuz hakkında bilgi alın.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        title: 'Paketleme Hizmetimiz',
        href: '/hizmet-kapasitemiz/paketleme-hizmetimiz',
        description: 'Profesyonel paketleme hizmetlerimiz hakkında bilgi alın.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      {
        title: 'Lojistik Sürecimiz',
        href: '/hizmet-kapasitemiz/lojistik-surecimiz',
        description: 'Taşıma sürecimiz hakkında detaylı bilgi alın.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      },
      {
        title: 'Sigorta & Güvence',
        href: '/hizmet-kapasitemiz/sigorta-ve-guvence',
        description: 'Sigorta ve güvence politikalarımız hakkında bilgi alın.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: 'Depolarımız',
        href: '/hizmet-kapasitemiz/depolarimiz',
        description: 'Modern depolama tesislerimiz hakkında bilgi alın.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Hakkımızda',
    href: '/hakkimizda',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'İletişim',
    href: '/iletisim',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
      </svg>
    )
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setActiveSubmenu(null)
      }
    }
    
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [])

  return (
    <header className={`w-full bg-white shadow-sm fixed top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Üst Bar */}
      <div className="bg-horex-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0">
              <a 
                href="tel:+908508883939" 
                className="flex items-center space-x-2 hover:text-horex-red transition-colors text-sm md:text-base"
                aria-label="Bizi arayın: 0850 888 39 39"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0850 888 39 39</span>
              </a>
              <a 
                href="mailto:ayirkanhoroz@gmail.com" 
                className="flex items-center space-x-2 hover:text-horex-red transition-colors text-sm md:text-base"
                aria-label="E-posta gönder: ayirkanhoroz@gmail.com"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">ayirkanhoroz@gmail.com</span>
              </a>
            </div>
            <a
              href="https://wa.me/905072135501?text=Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-horex-red px-4 py-1.5 rounded text-sm hover:bg-red-700 transition-colors inline-flex items-center justify-center w-full md:w-auto space-x-2"
              aria-label="WhatsApp ile ücretsiz teklif alın"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="whitespace-nowrap">Ücretsiz Teklif Al</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Horex Nakliyat Ana Sayfa">
            <Image
              src="/logo.svg"
              alt="Horex Nakliyat Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Mobil Menü Butonu */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menü */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Ana Menü">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors py-2 ${item.title === 'Blog'
                    ? 'text-horex-red font-semibold hover:text-horex-black'
                    : 'text-horex-black hover:text-horex-red'
                    }`}
                  aria-expanded={item.submenu ? activeSubmenu === item.title : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                >
                  <span className="hidden xl:block" aria-hidden="true">{item.icon}</span>
                  <span>{item.title}</span>
                  {item.submenu && (
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {item.submenu && activeSubmenu === item.title && (
                  <div 
                    className={`absolute top-full ${
                      index >= menuItems.length/2 
                        ? 'right-0 origin-top-right' 
                        : 'left-0 origin-top-left'
                    } w-[90vw] max-w-[600px] bg-white shadow-xl rounded-lg py-6 px-8 grid grid-cols-1 md:grid-cols-2 gap-6 z-50 animate-fadeIn`}
                    style={{
                      // Ensure submenu doesn't go off screen
                      maxHeight: 'calc(100vh - 200px)',
                      overflow: 'auto'
                    }}
                    role="menu"
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        href={subitem.href}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        role="menuitem"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-horex-red bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                          <div className="text-horex-red" aria-hidden="true">
                            {subitem.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-horex-black group-hover:text-horex-red transition-colors truncate">
                            {subitem.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {subitem.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobil Menü */}
        <div 
          id="mobile-menu"
          className={`lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "max-h-[70vh] opacity-100 overflow-y-auto" 
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="py-4" aria-label="Mobil Menü">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                <button
                  className={`flex items-center justify-between w-full p-3 text-left transition-colors ${item.title === 'Blog'
                    ? 'text-horex-red font-semibold hover:bg-red-50'
                    : 'hover:bg-gray-50'
                    }`}
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(activeSubmenu === item.title ? null : item.title)
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                  aria-expanded={item.submenu ? activeSubmenu === item.title : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  {item.submenu && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${activeSubmenu === item.title ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                <div 
                  className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                    item.submenu && activeSubmenu === item.title 
                      ? "max-h-[1000px] opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                  role="menu"
                >
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.title}
                          href={subitem.href}
                          className="flex items-start p-3 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                          role="menuitem"
                        >
                          <div className="text-horex-red flex-shrink-0 mr-3 mt-1" aria-hidden="true">
                            {subitem.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">
                              {subitem.title}
                            </h3>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {subitem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 