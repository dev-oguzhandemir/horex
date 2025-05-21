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
  canonical: 'https://horexnakliyat.com/blog',
  ogType: 'website',
  ogImage: 'https://horexnakliyat.com/images/blog-cover.jpg',
});

export default function BlogPage() {
  const blogHomeSchema = SEO.generateWebPageSchema(
    'Horex Nakliyat Blog - Nakliyat ve Taşımacılık Makaleleri',
    'Nakliyat ve taşımacılık hakkında bilgi edinebileceğiniz Horex Nakliyat blog sayfası. Taşınma ipuçları, paketleme teknikleri ve daha fazlası.',
    'https://horexnakliyat.com/blog'
  );

  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Blog', url: 'https://horexnakliyat.com/blog' }
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
    <>
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

      {/* Hero Section with Gradient Background - Improved Responsive Design */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
             backgroundSize: "cover"}}></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-red-900/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm text-red-100 font-medium tracking-wider uppercase">Nakliyat Sektöründe Bilgi Kaynağınız</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Nakliyat ve <span className="text-yellow-300">Taşımacılık</span> <br className="hidden md:block" />
              Blog
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
              Evden eve nakliyat, ofis taşıma ve eşya depolama konularında faydalı bilgiler ve profesyonel taşınma ipuçları için blogumuzu takip edin.
            </p>
            
            <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mb-8"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <a href="#featured" className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto">
                <span>Öne Çıkan Yazılar</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              
              <a href="/iletisim" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-lg transition-all duration-300 w-full sm:w-auto">
                <span>Teklif Alın</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm">Profesyonel İpuçları</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <span className="text-sm">Düzenli İçerik</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-sm">Bilgilendirici Yazılar</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Improved wave transition that doesn't cut off content */}
        <div className="relative z-0 h-24 sm:h-32 md:h-40 lg:h-48">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,202.7C672,213,768,171,864,154.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Blog Posts */}
        <section id="featured" className="mb-16">
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
    </>
  )
} 