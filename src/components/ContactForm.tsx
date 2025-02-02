import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-20 bg-horex-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ücretsiz Teklif Alın
          </h2>
          <form className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horex-red focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horex-red focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horex-red focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Hizmet Türü
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horex-red focus:border-transparent"
                required
              >
                <option value="">Seçiniz</option>
                <option value="evden-eve">Evden Eve Nakliyat</option>
                <option value="sehirler-arasi">Şehirler Arası Nakliyat</option>
                <option value="ofis">Ofis Taşıma</option>
                <option value="parca-esya">Parça Eşya Taşıma</option>
                <option value="depolama">Eşya Depolama</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horex-red focus:border-transparent"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-horex-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Teklif Al
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 