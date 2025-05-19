import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as SEO from '@/components/SEO';
import DistrictPage from '@/components/DistrictPage';
import { districtData, getDistrictSlugs } from '@/data/districts';

// Change to use type instead of interface
type Params = { slug: string };

// Generate static paths for all districts
export function generateStaticParams() {
  return getDistrictSlugs().map(({ slug }) => ({
    slug,
  }));
}

// Generate metadata for each district page
export function generateMetadata({ params }: { params: Params }): Metadata {
  const { slug } = params;
  
  // Check if the district exists
  if (!districtData[slug]) {
    return {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa bulunamadı.',
    };
  }
  
  // Capitalize first letter for district name
  const districtName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const { description } = districtData[slug];
  
  return SEO.generateMetadata({
    title: `${districtName} Nakliyat Hizmetleri - İstanbul Profesyonel Taşımacılık`,
    description,
    keywords: `${districtName} nakliyat, ${districtName} evden eve nakliyat, ${districtName} taşımacılık, ${districtName} ev taşıma, ${districtName} ofis taşıma, ${districtName} depolama hizmetleri`,
    url: `https://horex.com.tr/semtler/${slug}`,
    ogImage: `https://horex.com.tr/images/districts/${slug}.jpg`,
    ogImageAlt: `${districtName} Nakliyat - Horex Nakliyat`,
    ogType: 'article',
    canonical: `https://horex.com.tr/semtler/${slug}`,
  });
}

export default function District({ params }: { params: Params }) {
  const { slug } = params;
  
  // Check if the district exists
  if (!districtData[slug]) {
    notFound();
  }
  
  // Capitalize first letter for district name
  const districtName = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // Get the district data
  const district = districtData[slug];
  
  return (
    <DistrictPage
      districtName={districtName}
      slug={slug}
      description={district.description}
      content={district.content}
      imagePath={district.imagePath}
    />
  );
} 