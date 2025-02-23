import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Ev Taşınırken Dikkat Edilmesi Gerekenler',
    excerpt: 'Ev taşımak heyecan verici ama aynı zamanda oldukça stresli bir süreç olabilir. Bu süreci daha kolay ve sorunsuz hale getirmek için dikkat etmeniz gereken bazı önemli noktalar bulunmaktadır.',
    image: '/blog/tasima-rehberi.jpg',
    date: '15 Ocak 2024',
    slug: 'ev-tasima-surecinde-karsilasilan-sorunlar-ve-cozumleri'
  },
  {
    title: 'Nakliye Firması Seçerken Dikkat Edilmesi Gerekenler',
    excerpt: 'Bir nakliye firması seçmek, taşınma sürecinin en kritik aşamalarından biridir. Doğru firmayı seçmek, eşyalarınızın güvenli ve zamanında taşınmasını sağlar. İşte nakliye firması seçerken dikkat etmeniz gereken bazı önemli noktalar:',
    image: '/blog/ofis-tasima.jpg',
    date: '10 Ocak 2024',
    slug: 'nakliye-firmasi-secimi'
  },
  {
    title: 'Ofis Taşıma Rehberi',
    excerpt: 'Ofis taşımak, birçok işletme için zorlu ve stresli bir süreç olabilir. Ancak, doğru planlama ve organizasyon ile bu süreci daha kolay ve verimli hale getirebilirsiniz. İşte ofis taşınmanıza yardımcı olacak kapsamlı bir rehber.',
    image: '/blog/depolama.jpg',
    date: '5 Ocak 2024',
    slug: 'ofis-tasimak-rehberi'
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Blog & Haberler
          </h2>
          <Link 
            href="/blog" 
            className="text-horex-red hover:text-red-700 font-semibold transition-colors"
          >
            Tümünü Gör →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={index}
              href={`/blog/${post.slug}`}
              className="group block bg-horex-gray rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  priority={index === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-horex-dark-gray mb-2 block">
                  {post.date}
                </time>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-horex-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-horex-dark-gray line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 