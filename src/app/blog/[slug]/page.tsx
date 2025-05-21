import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import * as SEO from '@/components/SEO';
import { getBlogPostBySlug, getBlogSlugs } from '@/data/blogPosts';
import { formatDate } from '@/utils/dateUtils';

// Remove the interface entirely and directly use the param types in functions
type Params = { slug: string };

// Generate static paths for all blog posts
export function generateStaticParams() {
  return getBlogSlugs();
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  // Properly await params object before using it
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Get the blog post
  const post = getBlogPostBySlug(slug);
  
  // If the post doesn't exist, return 404 metadata
  if (!post) {
    return {
      title: 'Sayfa Bulunamadı | Horex Nakliyat Blog',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }
  
  return SEO.generateMetadata({
    title: `${post.title} | Horex Nakliyat Blog`,
    description: post.excerpt,
    keywords: `${post.title.toLowerCase()}, nakliyat, taşımacılık, horex, evden eve nakliyat, ofis taşıma, eşya depolama`,
    url: `https://horexnakliyat.com/blog/${slug}`,
    ogImage: `https://horexnakliyat.com${post.coverImage}`,
    ogImageAlt: post.title,
    ogType: 'article',
    canonical: `https://horexnakliyat.com/blog/${slug}`,
    author: post.author,
    publishedAt: post.date,
  });
}

// Function to convert markdown content to HTML (basic implementation)
const parseMarkdown = (markdown: string) => {
  // Replace headers
  let html = markdown
    .replace(/## (.*)/g, '<h2 class="text-2xl font-bold mb-4 mt-8">$1</h2>')
    .replace(/### (.*)/g, '<h3 class="text-xl font-bold mb-3 mt-6">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\n\n/g, '</p><p class="mb-4">') // Paragraphs
    .replace(/- (.*)/g, '<li class="ml-6 mb-2 list-disc">$1</li>'); // List items
  
  // Wrap in paragraph tags
  html = `<p class="mb-4">${html}</p>`;
  
  // Fix multiple paragraph tags
  html = html.replace(/<\/p><p class="mb-4"><\/p><p class="mb-4">/g, '</p><p class="mb-4">');
  
  return html;
};

export default async function BlogPostPage({ params }: { params: Params }) {
  // Properly await params object before using it
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  // Get the blog post
  const post = getBlogPostBySlug(slug);
  
  // If the post doesn't exist, return 404
  if (!post) {
    notFound();
  }
  
  // Parse the markdown content
  const contentHtml = parseMarkdown(post.content);
  
  // Generate structured data for SEO
  const articleSchema = SEO.generateArticleSchema(
    post.title,
    post.excerpt,
    `https://horexnakliyat.com${post.coverImage}`,
    post.date,
    post.author,
    `https://horexnakliyat.com/blog/${slug}`
  );
  
  const breadcrumbSchema = SEO.generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://horexnakliyat.com' },
    { name: 'Blog', url: 'https://horexnakliyat.com/blog' },
    { name: post.title, url: `https://horexnakliyat.com/blog/${slug}` },
  ]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* JSON-LD Structured Data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="hover:text-horex-red">Ana Sayfa</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/blog" className="hover:text-horex-red">Blog</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-horex-red font-medium" aria-current="page">{post.title}</li>
        </ol>
      </nav>
      
      {/* Blog Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
        <div className="flex flex-wrap items-center text-gray-600 mb-8">
          <span className="mr-6 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {post.author}
          </span>
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(post.date)}
          </span>
        </div>
        
        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </header>
      
      {/* Blog Post Content */}
      <article className="prose max-w-none lg:prose-lg mx-auto mb-12">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      
      {/* Tags */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Nakliyat</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Taşımacılık</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Horex</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Profesyonel Hizmet</span>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="bg-horex-red text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Profesyonel Nakliyat Hizmetleri</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          İstanbul'un tüm semtlerinde profesyonel nakliyat hizmetlerimizden yararlanmak için hemen bize ulaşın. 
          Ücretsiz keşif ve fiyat teklifi ile nakliyat sürecinizi planlayalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+908508883939" className="bg-white text-horex-red font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hemen Arayın
          </a>
          <Link href="/iletisim" className="border-2 border-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-horex-red transition-colors flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4" />
            </svg>
            Teklif Alın
          </Link>
        </div>
      </section>
    </div>
  );
} 