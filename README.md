# SEO-Friendly Static Website

Bu proje, Next.js ve Tailwind CSS kullanılarak oluşturulmuş tamamen statik bir web sitesidir. Projenin temel amacı, SEO dostu bir yapı oluşturmak ve Google'da üst sıralarda yer almak için gerekli optimizasyonları sağlamaktır.

## Proje Kuralları

### 1. Genel Yapı
- **Next.js**: Proje, Next.js'in Static Site Generation (SSG) özelliği kullanılarak oluşturulmuştur. Dinamik routing ve API routes gibi özellikler de kullanılabilir.
- **TypeScript**: Tüm proje TypeScript ile yazılmıştır. Güvenlik ve kod kalitesi için TypeScript kullanımı zorunludur.
- **Tailwind CSS**: Stil için Tailwind CSS kullanılmıştır. Responsive tasarım için Tailwind'in utility class'ları kullanılmalıdır.

### 2. SEO Optimizasyonu
- **Her Sayfa için SEO Ayarları**: Her sayfa, `<Head>` bileşeni kullanılarak SEO dostu meta tag'ler içermelidir. Bu tag'ler şunları içermelidir:
  - `<title>`
  - `<meta name="description">`
  - `<meta name="keywords">`
  - Open Graph tag'leri (`og:title`, `og:description`, `og:image`)
- **Semantik HTML**: Tüm sayfalar semantik HTML etiketleri (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>` gibi) kullanılarak oluşturulmalıdır.
- **Heading Yapısı**: Her sayfada doğru bir `<h1>` - `<h6>` hiyerarşisi oluşturulmalıdır.
- **Image Optimizasyonu**: Görseller, Next.js'in `<Image>` bileşeni kullanılarak optimize edilmelidir.
- **İç Linkleme**: Sayfalar arasında anlamlı iç linkler oluşturulmalıdır.

### 3. Responsive Tasarım
- **Tailwind CSS**: Tüm bileşenler ve sayfalar, Tailwind CSS'in responsive utility class'ları kullanılarak mobil, tablet ve masaüstü cihazlara uyumlu hale getirilmelidir.
- **Media Query Testi**: Her bileşen, farklı ekran boyutlarında test edilmelidir.

### 4. Kod Yapısı ve Organizasyon
- **Component-Based Structure**: Tüm UI elemanları, reusable bileşenler halinde oluşturulmalıdır. Bileşenler, `components/` dizini altında tutulmalıdır.
- **TypeScript Interface'leri**: Her bileşen ve sayfa için TypeScript interface'leri tanımlanmalıdır.
- **Clean Code**: Kod, okunabilir ve anlaşılır olmalıdır. Gereksiz karmaşıklıktan kaçınılmalıdır.

### 5. Static Site Generation (SSG)
- **getStaticProps ve getStaticPaths**: Tüm sayfalar, `getStaticProps` ve `getStaticPaths` kullanılarak statik olarak oluşturulmalıdır.
- **Sitemap.xml**: Proje, otomatik olarak bir `sitemap.xml` dosyası oluşturmalıdır. Bunun için `next-sitemap` paketi kullanılabilir.

### 6. Deployment
- **Vercel**: Proje, Vercel üzerinde deploy edilmelidir. Vercel, Next.js ile tam uyumludur ve SSG için idealdir.
- **Google Search Console**: Site, Google Search Console'a eklenmeli ve sitemap doğrulanmalıdır.

### 7. SEO Çalışması Yapacak Kişi için Notlar
- **İçerik Güncellemeleri**: İçerik güncellemeleri, `pages/` dizini altındaki ilgili sayfalar üzerinden yapılabilir.
- **Meta Tag'ler**: Her sayfanın meta tag'leri, `<Head>` bileşeni içinde bulunur. Bu tag'ler, SEO çalışmaları için kritiktir.
- **Analytics**: Google Analytics entegrasyonu mevcuttur. Kullanıcı davranışlarını takip etmek için kullanılabilir.