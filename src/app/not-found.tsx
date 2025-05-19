import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı - Horex Nakliyat',
  description: 'Aradığınız sayfa bulunamadı. Horex Nakliyat\'ın profesyonel taşımacılık hizmetlerini keşfedin.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* SVG Illustration */}
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="w-full max-w-md relative animate-float">
              <svg 
                viewBox="0 0 500 500" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-auto"
              >
                <g fill="#C8102E">
                  <circle cx="250" cy="250" r="170" opacity="0.1" />
                </g>
                <g fill="#C8102E">
                  <path d="M224.4,176.6h63.3v20.8h-40.9v33.3h36.6v19.9h-36.6v35.9h42.5v20.8h-64.9V176.6z" />
                  <path d="M303.2,176.6h22.4V287h40v20.3h-62.5V176.6z" />
                  <path d="M149.9,176.6h22.4V287h40v20.3h-62.5V176.6z" />
                  <path d="M202.4,236.1c0-41.6,21.5-62.2,54.7-62.2c33.3,0,54.7,20.6,54.7,62.2c0,41.6-21.5,62.2-54.7,62.2
                    C223.9,298.3,202.4,277.7,202.4,236.1z M288.6,236.1c0-29.1-12.6-42.1-31.5-42.1c-18.8,0-31.5,13-31.5,42.1
                    c0,29.1,12.6,42.1,31.5,42.1C275.9,278.2,288.6,265.2,288.6,236.1z" />
                </g>
                <g>
                  <path opacity="0.2" fill="#C8102E" d="M319,329.5l-12.1-11.9c-0.5-0.5-1.2-0.7-1.9-0.7h-109c-0.7,0-1.4,0.3-1.9,0.7l-12.1,11.9
                    c-0.7,0.7-0.7,1.8,0,2.5l12.1,11.9c0.5,0.5,1.2,0.7,1.9,0.7h109c0.7,0,1.4-0.3,1.9-0.7l12.1-11.9C319.7,331.3,319.7,330.2,319,329.5z
                  "/>
                </g>
                <g>
                  <path fill="#333333" d="M153.4,343.1c0,0,1.2,0.8,2.9,1.5c1.7,0.7,4.2,1.3,7.1,1.3c5.9,0,10.2-2.7,10.2-7.6c0-4.4-3.1-6.6-7.7-8.7
                    c-5.2-2.4-11.6-4.8-11.6-12.2c0-6.1,5.3-10.4,12.7-10.4c3.9,0,7.1,1.1,8.8,2.1l-1.7,5.1c-1.3-0.8-3.8-1.9-7.3-1.9
                    c-5.2,0-9.1,2.7-9.1,7c0,4.3,3.6,6.2,8.3,8.3c5.6,2.5,11.1,5.2,11.1,12.7c0,6-4.4,11-13.8,11c-3.9,0-8.2-1.2-10.4-2.7L153.4,343.1z"/>
                  <path fill="#333333" d="M189.4,307.4h7.1v34.9h16.5v5.8h-23.6V307.4z"/>
                  <path fill="#333333" d="M225.7,307.4h7.1v40.7h-7.1V307.4z"/>
                  <path fill="#333333" d="M268.3,327.1c0,13.9-8.3,21.7-18.5,21.7c-10.5,0-17.9-8.1-17.9-21c0-13.4,7.8-21.7,18.5-21.7
                    C261.3,306.2,268.3,314.6,268.3,327.1z M239.1,327.7c0,8.6,4.7,15.3,11.1,15.3c6.4,0,11.1-6.6,11.1-15.7c0-8.3-4.4-15.3-11.1-15.3
                    C243.7,312,239.1,318.7,239.1,327.7z"/>
                  <path fill="#333333" d="M276.8,307.4h7.1v17.2c0,6.5,2.9,11.6,9.1,11.6c5.8,0,8.8-3.8,8.8-11.6v-17.2h7.1v16.8
                    c0,12.6-6.6,17.5-16.1,17.5c-9.3,0-15.9-4.6-15.9-17.3V307.4z"/>
                  <path fill="#333333" d="M318,307.4h14.9c3.4,0,6.3,0.7,8.1,2.4c1.5,1.5,2.5,3.8,2.5,6.6c0,4.6-2.9,7.6-6.6,8.9v0.1
                    c2.7,0.9,4.1,3.4,5,7c1.1,4.4,1.8,7.4,2.5,8.6h-7.3c-0.5-0.9-1.2-3.6-2.1-7.4c-0.9-4.2-2.6-5.8-6.2-5.9h-4v13.3H318V307.4z
                    M325,322.1h4.8c4.2,0,6.9-2.3,6.9-5.8c0-3.9-2.8-5.6-6.9-5.7H325V322.1z"/>
                  <path fill="#333333" d="M356.6,307.4h7.1v34.9h16.5v5.8h-23.6V307.4z"/>
                </g>
                {/* Moving truck animation */}
                <g className="animate-truck">
                  <path fill="#C8102E" d="M171.5,380c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S177,380,171.5,380z M171.5,395
                    c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S174.3,395,171.5,395z"/>
                  <path fill="#C8102E" d="M228.5,380c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S234,380,228.5,380z M228.5,395
                    c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S231.3,395,228.5,395z"/>
                  <path fill="#333333" d="M248.5,389h-5v-25h-80v25h-5c-1.7,0-3,1.3-3,3s1.3,3,3,3h5c0-8.3,6.7-15,15-15s15,6.7,15,15h30
                    c0-8.3,6.7-15,15-15s15,6.7,15,15h5c1.7,0,3-1.3,3-3S250.2,389,248.5,389z"/>
                  <path fill="#333333" d="M260.3,371.9l-11.8-17.7c-0.6-0.9-1.6-1.4-2.7-1.4h-20.8c-1.8,0-3.3,1.5-3.3,3.3V389h38.6v-14.9
                    C260.3,373.1,260.5,372.5,260.3,371.9z M243.4,379h-16.7v-21.6h12.5l8.3,12.5V379H243.4z"/>
                </g>
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-horex-red">
              Sayfa Bulunamadı
            </h1>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8 border-l-4 border-horex-red">
              <p className="text-lg text-gray-700 mb-3">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
              </p>
              <p className="text-gray-600">
                Adresin doğru olduğundan emin olun veya aşağıdaki bağlantılardan devam edin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg mb-3 text-horex-red">Nakliyat Hizmetlerimiz</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/nakliyat-hizmetleri/evden-eve-nakliyat" className="text-gray-700 hover:text-horex-red transition-colors">
                      Evden Eve Nakliyat
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/nakliyat-hizmetleri/ofis-tasima" className="text-gray-700 hover:text-horex-red transition-colors">
                      Ofis Taşıma
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/depolama-hizmetleri" className="text-gray-700 hover:text-horex-red transition-colors">
                      Depolama Hizmetleri
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-bold text-lg mb-3 text-horex-red">Kurumsal</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/hakkimizda" className="text-gray-700 hover:text-horex-red transition-colors">
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/blog" className="text-gray-700 hover:text-horex-red transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-horex-red">›</span>
                    <Link href="/iletisim" className="text-gray-700 hover:text-horex-red transition-colors">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/" 
                className="bg-horex-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors text-center flex-1 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
                </svg>
                Ana Sayfaya Dön
              </Link>
              <Link 
                href="/iletisim" 
                className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors text-center flex-1 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 