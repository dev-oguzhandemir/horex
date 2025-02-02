import React from 'react';

const stats = [
  {
    number: '15+',
    title: 'Yıllık Deneyim',
    description: 'Sektörde güvenilir hizmet'
  },
  {
    number: '50.000+',
    title: 'Mutlu Müşteri',
    description: 'Başarıyla tamamlanan taşıma'
  },
  {
    number: '81',
    title: 'İl Genelinde',
    description: 'Türkiye çapında hizmet'
  },
  {
    number: '100%',
    title: 'Müşteri Memnuniyeti',
    description: 'Kaliteli hizmet garantisi'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-horex-gray hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-horex-red mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {stat.title}
              </h3>
              <p className="text-horex-dark-gray">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 