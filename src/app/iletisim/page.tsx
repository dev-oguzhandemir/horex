import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim - Horex Nakliyat',
  description: 'Horex Nakliyat ile iletişime geçin. Evden eve nakliyat, ofis taşıma ve depolama hizmetleri için ücretsiz teklif alın.',
  keywords: 'horex nakliyat iletişim, nakliyat iletişim, nakliyat telefon, nakliyat adres',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-horex-black to-horex-red text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            İletişim
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Profesyonel nakliyat hizmetlerimiz hakkında bilgi almak ve ücretsiz teklif için bizimle iletişime geçin.
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://wa.me/905072135501?text=Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Ücretsiz Teklif Al</span>
            </a>
          </div>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Telefon Numaraları */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-horex-red bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">Telefon Numaralarımız</h2>
            <div className="space-y-4">
              <a href="tel:+908508883939" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-horex-red transition-colors">
                <span>0850 888 39 39</span>
              </a>
              <a href="tel:+905327273939" className="flex items-center justify-center space-x-2 text-gray-600 hover:text-horex-red transition-colors">
                <span>0532 727 39 39</span>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">WhatsApp</h2>
            <div className="text-center">
              <a href="https://wa.me/905072135501?text=Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum." 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                <span>0507 213 55 01</span>
              </a>
              <p className="text-sm text-gray-500 mt-2">7/24 WhatsApp üzerinden bize ulaşabilirsiniz</p>
            </div>
          </div>

          {/* E-posta ve Adres */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-horex-red bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-horex-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">E-posta & Adres</h2>
            <div className="space-y-4 text-center">
              <a href="mailto:ayirkanhoroz@gmail.com" className="block text-gray-600 hover:text-horex-red transition-colors">
                ayirkanhoroz@gmail.com
              </a>
              <p className="text-gray-600">
                Güvenli Sokağı No: 1<br />
                Cevizli, 34846 Maltepe/İstanbul
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Harita */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.952366132367!2d29.153112!3d40.913051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79c8d1c3be7%3A0x3f8f3b4fc6b0e9a9!2sHorex%20Nakliyat!5e0!3m2!1str!2str!4v1624291234567!5m2!1str!2str&markers=color:red%7Clabel:H%7C40.913051,29.153112"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Horex Nakliyat Konum"
            className="w-full"
          />
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          * Haritada gösterilen konum yaklaşık konumdur. Ziyaret öncesi lütfen randevu alınız.
        </div>
      </div>

      {/* Çalışma Saatleri */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Çalışma Saatleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <h3 className="font-semibold mb-2">Hafta İçi</h3>
              <p className="text-gray-600">09:00 - 18:00</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hafta Sonu</h3>
              <p className="text-gray-600">10:00 - 16:00</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4">
            * Acil durumlar için 7/24 telefon ve WhatsApp üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
} 