import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Güvenli Taşınmanın Püf Noktaları',
    excerpt: 'Eşyalarınızı güvenle taşımak için dikkat etmeniz gereken önemli noktalar.',
    image: '/blog/tasima-rehberi.jpg',
    date: '15 Ocak 2024',
    slug: 'guvenli-tasinmanin-puf-noktalari'
  },
  {
    title: 'Ofis Taşıma Rehberi',
    excerpt: 'İş süreçlerinizi aksatmadan ofis taşıma işlemini nasıl gerçekleştirebilirsiniz?',
    image: '/blog/ofis-tasima.jpg',
    date: '10 Ocak 2024',
    slug: 'ofis-tasima-rehberi'
  },
  {
    title: 'Eşya Depolama İpuçları',
    excerpt: 'Eşyalarınızı uzun süre güvenle saklamak için profesyonel depolama önerileri.',
    image: '/blog/depolama.jpg',
    date: '5 Ocak 2024',
    slug: 'esya-depolama-ipuclari'
  }
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