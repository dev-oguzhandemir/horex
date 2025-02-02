'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { 
    title: 'Ana Sayfa', 
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  { 
    title: 'Hizmetlerimiz', 
    href: '/hizmetler',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    submenu: [
      { 
        title: 'Evden Eve Nakliyat',
        href: '/hizmetler/evden-eve-nakliyat',
        description: 'Eşyalarınızı özenle paketliyor, güvenle yeni adresinize taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      },
      { 
        title: 'Şehirler Arası Nakliyat',
        href: '/hizmetler/sehirler-arasi-nakliyat',
        description: 'Türkiye\'nin her noktasına güvenli ve hızlı şehirler arası nakliyat hizmeti.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      { 
        title: 'Ofis Taşıma',
        href: '/hizmetler/ofis-tasima',
        description: 'İş yerinizi minimum kesinti ile yeni adresinize taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      { 
        title: 'Parça Eşya Taşıma',
        href: '/hizmetler/parca-esya-tasima',
        description: 'Tek bir eşyanızı bile profesyonel ekibimizle taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )
      },
      { 
        title: 'Fabrika Taşımacılığı',
        href: '/hizmetler/fabrika-tasimaciligi',
        description: 'Endüstriyel tesislerin taşınması için özel çözümler.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      { 
        title: 'Fuar Taşımacılığı',
        href: '/hizmetler/fuar-tasimaciligi',
        description: 'Fuar malzemelerinizi zamanında ve güvenle taşıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      { 
        title: 'Eşya Depolama',
        href: '/hizmetler/esya-depolama',
        description: 'Eşyalarınızı güvenli depolama alanlarımızda saklıyoruz.',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        )
      },
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
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      {/* Üst Bar */}
      <div className="bg-horex-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:+902121234567" className="flex items-center space-x-2 hover:text-horex-red transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0212 123 45 67</span>
              </a>
              <a href="mailto:info@horex.com.tr" className="flex items-center space-x-2 hover:text-horex-red transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@horex.com.tr</span>
              </a>
            </div>
            <Link 
              href="/iletisim" 
              className="bg-horex-red px-4 py-1 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Ücretsiz Teklif Al
            </Link>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.svg" 
              alt="Horex Nakliyat Logo" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobil Menü Butonu */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menü */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center space-x-1 text-horex-black hover:text-horex-red transition-colors py-2"
                >
                  <span className="hidden xl:block">{item.icon}</span>
                  <span>{item.title}</span>
                  {item.submenu && (
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu && activeSubmenu === item.title && (
                  <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-lg py-6 px-8 grid grid-cols-2 gap-6">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        href={subitem.href}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-horex-red bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                          <div className="text-horex-red">
                            {subitem.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-horex-black group-hover:text-horex-red transition-colors">
                            {subitem.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
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
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="py-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => item.submenu ? setActiveSubmenu(activeSubmenu === item.title ? null : item.title) : setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.submenu && (
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.title ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {item.submenu && activeSubmenu === item.title && (
                    <div className="bg-gray-50 py-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.title}
                          href={subitem.href}
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-horex-red">
                            {subitem.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">
                              {subitem.title}
                            </h3>
                            <p className="text-sm text-gray-600">
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
        )}
      </div>
    </header>
  )
} 