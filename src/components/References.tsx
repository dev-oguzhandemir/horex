import React from 'react';
import Image from 'next/image';

const references = [
  {
    name: 'ABC Holding',
    logo: '/references/abc-holding.png',
    description: 'Kurumsal ofis taşıma projesi'
  },
  {
    name: 'XYZ Şirketler Grubu',
    logo: '/references/xyz-group.png',
    description: 'Fabrika taşıma projesi'
  },
  {
    name: 'DEF İnşaat',
    logo: '/references/def-insaat.png',
    description: 'Şantiye lojistik hizmetleri'
  },
  {
    name: 'GHI Teknoloji',
    logo: '/references/ghi-tech.jpg',
    description: 'Veri merkezi taşıma projesi'
  }
];

export default function References() {
  return (
    <section className="py-20 bg-horex-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Referanslarımız
        </h2>
        <p className="text-horex-dark-gray text-center mb-12 max-w-2xl mx-auto">
          Türkiye&apos;nin önde gelen kurumları tarafından tercih edilen güvenilir nakliyat çözümleri sunuyoruz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {references.map((reference, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-24 relative mb-6">
                <Image
                  src={reference.logo}
                  alt={`${reference.name} Logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw"
                  className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  priority={index < 4}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-horex-black group-hover:text-horex-red transition-colors">
                  {reference.name}
                </h3>
                <p className="text-horex-dark-gray text-sm">
                  {reference.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Referans CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-horex-dark-gray mb-6">
            Siz de kurumsal nakliyat projeleriniz için bizimle iletişime geçin.
          </p>
          <a 
            href="/iletisim" 
            className="inline-flex items-center space-x-2 bg-horex-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <span>Teklif Alın</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 