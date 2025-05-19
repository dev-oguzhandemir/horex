import { Metadata } from 'next'
import * as SEO from '@/components/SEO'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { getDistrictSlugs } from '@/data/districts';
import { getAllBlogPosts } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateUtils';

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Nakliyat ve Taşımacılık Blog - Horex Nakliyat | Faydalı Bilgiler',
  description: 'Evden eve nakliyat, ofis taşıma, eşya depolama ve paketleme teknikleri hakkında faydalı bilgiler ve profesyonel taşınma ipuçları Horex Nakliyat blogunda.',
  keywords: 'nakliyat blog, taşınma rehberi, evden eve nakliyat ipuçları, paketleme önerileri, eşya depolama, ofis taşıma, güvenli taşınma yöntemleri',
  canonical: 'https://horex.com.tr/blog',
  ogType: 'website',
  ogImage: 'https://horex.com.tr/images/blog-cover.jpg',
});

export default function BlogPage() {
  const blogHomeSchema = SEO.generateWebPageSchema(
    'Horex Nakliyat Blog - Nakliyat ve Taşımacılık Makaleleri',
    'Nakliyat ve taşımacılık hakkında bilgi edinebileceğiniz Horex Nakliyat blog sayfası. Taşınma ipuçları, paketleme teknikleri ve daha fazlası.',
    'https://horex.com.tr/blog'
  );

  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horex.com.tr' },
    { name: 'Blog', url: 'https://horex.com.tr/blog' }
  ]);

  // Get district data for blog posts
  const districtSlugs = getDistrictSlugs();
  
  // Convert district data to blog post format
  const districtBlogPosts = districtSlugs.map(({ slug, districtName }) => ({
    id: `district-${slug}`,
    title: `${districtName} Nakliyat ve Taşımacılık Hizmetleri`,
    slug: `/semtler/${slug}`,
    excerpt: `${districtName} bölgesinde profesyonel ve güvenilir nakliyat hizmetleri. Evden eve nakliyat, ofis taşıma ve eşya depolama çözümleri.`,
    coverImage: `/images/districts/${slug}.jpg`,
    date: '2023-10-15',
    author: 'Horex Nakliyat Ekibi',
    isDistrict: true
  }));

  // Get regular blog posts from the data file
  const regularBlogPosts = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogHomeSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-72 md:h-96 mb-16 rounded-xl overflow-hidden">
        <Image 
          src="/images/blog-cover.jpg" 
          alt="Horex Nakliyat Blog" 
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Nakliyat ve Taşımacılık Blog</h1>
          <p className="text-lg text-white max-w-2xl drop-shadow-md">
            Evden eve nakliyat, ofis taşıma ve eşya depolama konularında faydalı bilgiler ve profesyonel taşınma ipuçları için blogumuzu takip edin.
          </p>
        </div>
      </section>
      
      {/* Featured Blog Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">Öne Çıkan Makaleler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogPosts.slice(0, 3).map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-horex-red flex flex-col h-full"
            >
              <div className="relative h-52 w-full">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-semibold mb-3 hover:text-horex-red">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <Link href={`/blog/${post.slug}`} className="text-horex-red font-medium hover:underline flex items-center">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Districts Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">İstanbul'un Önemli Semtlerinde Nakliyat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districtBlogPosts.slice(0, 8).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="relative h-40 w-full">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-horex-red hover:underline">
                  <Link href={post.slug}>
                    {post.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/semtler" className="inline-flex items-center bg-horex-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
            Tüm Semtleri Görüntüle
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* All Blog Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">Tüm Blog Yazıları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-52 w-full">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-semibold mb-3 hover:text-horex-red">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                  <Link href={`/blog/${post.slug}`} className="text-horex-red font-medium hover:underline flex items-center">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Nakliyat Hakkında Sık Sorulan Sorular</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Evden eve nakliyat fiyatları nasıl belirlenir?</h3>
            <p className="text-gray-700">Taşınacak eşya miktarı, mesafe, kat durumu ve özel hizmet ihtiyaçları gibi faktörler fiyatlandırmada etkilidir. Ücretsiz keşif sonrası net bir fiyat teklifi sunuyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Taşınmadan ne kadar süre önce nakliyat firmasıyla iletişime geçmeliyim?</h3>
            <p className="text-gray-700">İdeal olarak 2-3 hafta öncesinden planlama yapmak ve en az 1 hafta öncesinden kesin rezervasyon yaptırmak önerilir.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Eşyalarım taşınma sırasında sigortalı mıdır?</h3>
            <p className="text-gray-700">Evet, Horex Nakliyat olarak tüm taşıma işlemlerinde eşyalarınız sigorta kapsamında taşınmaktadır.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-horex-red text-white p-8 rounded-xl text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Nakliyat İpuçları ve Güncellemeler İçin Abone Olun</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          En güncel nakliyat ipuçları, kampanyalar ve blog yazılarımızdan haberdar olmak için bültenimize abone olun.
        </p>
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="E-posta Adresiniz" 
              className="px-4 py-3 rounded-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-white text-horex-red font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 