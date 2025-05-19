'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getDistrictSlugs } from '@/data/districts'

export default function Footer() {
  // Get the district slugs and names from the data file
  const semtlerData = getDistrictSlugs();
  
  const istanbulIlceleri = [
    'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 
    'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 
    'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüp', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 
    'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 
    'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'
  ]

  // This list is now only used for display purposes
  const istanbulSemtler = [
    'Levent', 'Maslak', 'Nişantaşı', 'Etiler', 'Bebek', 'Ortaköy', 'Mecidiyeköy', 'Fulya',
    'Acıbadem', 'Kozyatağı', 'Bostancı', 'Caddebostan', 'Florya', 'Yeşilköy', 'Bahçeşehir',
    'Kemerburgaz', 'Göktürk', 'Zekeriyaköy'
  ]

  const buyukSehirler = [
    'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep', 'Mersin',
    'Diyarbakır', 'Eskişehir', 'Samsun', 'Denizli', 'Kayseri', 'Sakarya', 'Aydın',
    'Tekirdağ', 'Balıkesir', 'Manisa', 'Kahramanmaraş', 'Hatay', 'Malatya', 'Trabzon'
  ]

  const hizmetler = [
    { title: 'Evden Eve Nakliyat', href: '/nakliyat-hizmetleri/evden-eve-nakliyat' },
    { title: 'Ofis Taşıma', href: '/nakliyat-hizmetleri/ofis-tasima' },
    { title: 'Şehirler Arası Nakliyat', href: '/nakliyat-hizmetleri/sehirler-arasi-nakliyat' },
    { title: 'Depolama Hizmetleri', href: '/depolama-hizmetleri' },
    { title: 'Sigortalı Taşımacılık', href: '/nakliyat-hizmetleri/sigortali-tasimacilik' },
    { title: 'Asansörlü Taşımacılık', href: '/nakliyat-hizmetleri/asansorlu-tasima' }
  ]

  const kurumsal = [
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'Blog', href: '/blog' },
    { title: 'İletişim', href: '/iletisim' },
    { title: 'Referanslarımız', href: '/referanslar' },
    { title: 'SSS', href: '/sikca-sorulan-sorular' }
  ]

  return (
    <footer className="bg-horex-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo ve İletişim */}
          <div>
            <Image
              src="/logo.svg"
              alt="Horex Nakliyat Logo"
              width={150}
              height={40}
              className="mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Türkiye&apos;nin her noktasına güvenilir ve profesyonel nakliyat hizmetleri sunuyoruz.
            </p>
            <div className="space-y-2">
              <a href="tel:+908508883939" className="flex items-center space-x-2 text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0850 888 39 39</span>
              </a>
              <a href="tel:+905327273939" className="flex items-center space-x-2 text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0532 727 39 39</span>
              </a>
              <a href="https://wa.me/905072135501" className="flex items-center space-x-2 text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>0507 213 55 01</span>
              </a>
              <a href="mailto:ayirkanhoroz@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ayirkanhoroz@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Cevizli mahallesi güvenli sokak no 1, Maltepe/İstanbul</span>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {hizmetler.map((hizmet) => (
                <li key={hizmet.href}>
                  <Link 
                    href={hizmet.href}
                    className="text-gray-400 hover:text-horex-red transition-colors"
                  >
                    {hizmet.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              {kurumsal.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-horex-red transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/horexnakliyat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com/horexnakliyat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a href="https://twitter.com/horexnakliyat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-horex-red transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hizmet Bölgeleri */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">İstanbul'da Hizmet Verdiğimiz İlçeler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {istanbulIlceleri.map((ilce) => (
              <Link
                key={ilce}
                href={`/nakliyat-hizmetleri/istanbul/${ilce.toLowerCase()}-evden-eve-nakliyat`}
                className="text-gray-400 hover:text-horex-red transition-colors text-sm"
              >
                {ilce} Nakliyat
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">İstanbul'un Önemli Semtleri</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {semtlerData.map(({ slug, districtName }) => (
              <Link
                key={slug}
                href={`/semtler/${slug}`}
                className="text-gray-400 hover:text-horex-red transition-colors text-sm"
              >
                {districtName} Nakliyat
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-6">Türkiye Genelinde Hizmet Verdiğimiz Şehirler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {buyukSehirler.map((sehir) => (
              <Link
                key={sehir}
                href={`/nakliyat-hizmetleri/${sehir.toLowerCase()}-evden-eve-nakliyat`}
                className="text-gray-400 hover:text-horex-red transition-colors text-sm"
              >
                {sehir} Nakliyat
              </Link>
            ))}
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Horex Nakliyat. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-horex-red transition-colors text-sm">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-horex-red transition-colors text-sm">
                Kullanım Şartları
              </Link>
              <Link href="/cerez-politikasi" className="text-gray-400 hover:text-horex-red transition-colors text-sm">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 