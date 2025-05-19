import { Metadata } from 'next'
import SEO from '@/components/SEO'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = SEO.generateMetadata({
  title: 'Nakliyat ve Taşımacılık Blog - Horex Nakliyat | Faydalı Bilgiler',
  description: 'Evden eve nakliyat, ofis taşıma, eşya depolama ve paketleme teknikleri hakkında faydalı bilgiler ve profesyonel taşınma ipuçları Horex Nakliyat blogunda.',
  keywords: 'nakliyat blog, taşınma rehberi, evden eve nakliyat ipuçları, paketleme önerileri, eşya depolama, ofis taşıma, güvenli taşınma yöntemleri',
  canonical: 'https://horex.com.tr/blog',
  ogType: 'website',
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

  // Örnek blog yazıları - normalde veritabanından veya CMS'den çekilir
  const blogPosts = [
    {
      id: 1,
      title: 'Evden Eve Taşınırken Dikkat Edilmesi Gerekenler',
      slug: 'evden-eve-tasinirken-dikkat-edilmesi-gerekenler',
      excerpt: 'Evden eve taşınma sürecini sorunsuz atlatmak için yapmanız gereken hazırlıklar ve dikkat etmeniz gereken hususlar.',
      coverImage: '/blog/tasinma-rehberi.jpg',
      date: '2023-05-15',
      author: 'Horex Nakliyat Ekibi'
    },
    {
      id: 2,
      title: 'Eşyalarınızı Doğru Paketleme Teknikleri',
      slug: 'esyalarinizi-dogru-paketleme-teknikleri',
      excerpt: 'Taşınma sırasında eşyalarınızın zarar görmemesi için profesyonel paketleme teknikleri ve ipuçları.',
      coverImage: '/blog/paketleme-teknikleri.jpg',
      date: '2023-06-10',
      author: 'Horex Nakliyat Ekibi'
    },
    {
      id: 3,
      title: 'Ofis Taşıma Rehberi: İş Kaybı Yaşamadan Taşının',
      slug: 'ofis-tasima-rehberi',
      excerpt: 'İşletmenizi minimum kesinti ile yeni ofis lokasyonuna taşımanın püf noktaları ve planlama stratejileri.',
      coverImage: '/blog/ofis-tasima.jpg',
      date: '2023-07-22',
      author: 'Horex Nakliyat Ekibi'
    },
    {
      id: 4,
      title: 'Depolama Hizmetinde Bilinmesi Gerekenler',
      slug: 'depolama-hizmetinde-bilinmesi-gerekenler',
      excerpt: 'Eşya depolama hizmeti alırken dikkat edilmesi gereken noktalar ve profesyonel depolama ipuçları.',
      coverImage: '/blog/depolama-hizmeti.jpg',
      date: '2023-08-15',
      author: 'Horex Nakliyat Ekibi'
    }
  ];

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

      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nakliyat ve Taşımacılık Blog</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Evden eve nakliyat, ofis taşıma ve eşya depolama konularında faydalı bilgiler ve profesyonel taşınma ipuçları için blogumuzu takip edin.
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image 
                src={post.coverImage} 
                alt={post.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 2} // Prioritize loading first two images
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-horex-red">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="text-horex-red hover:underline">
                  Devamını Oku
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <section className="mt-16 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Taşınma ve Nakliyat Hakkında Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Evden eve nakliyat fiyatları nasıl belirlenir?</h3>
            <p className="text-gray-700">Taşınacak eşya miktarı, mesafe, kat durumu ve özel hizmet ihtiyaçları gibi faktörler fiyatlandırmada etkilidir. Ücretsiz keşif sonrası net bir fiyat teklifi sunuyoruz.</p>
          </div>
          <div>
            <h3 className="font-semibold">Taşınmadan ne kadar süre önce nakliyat firmasıyla iletişime geçmeliyim?</h3>
            <p className="text-gray-700">İdeal olarak 2-3 hafta öncesinden planlama yapmak ve en az 1 hafta öncesinden kesin rezervasyon yaptırmak önerilir.</p>
          </div>
          <div>
            <h3 className="font-semibold">Eşyalarım taşınma sırasında sigortalı mıdır?</h3>
            <p className="text-gray-700">Evet, Horex Nakliyat olarak tüm taşıma işlemlerinde eşyalarınız sigorta kapsamında taşınmaktadır.</p>
          </div>
        </div>
      </section>
    </div>
  )
} 