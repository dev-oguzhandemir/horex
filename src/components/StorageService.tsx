'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface ServiceFeature {
  title: string
  description: string
  icon: string
}

interface Highlight {
  title: string
  description: string
}

interface StorageServiceProps {
  title: string
  description: string
  metaDescription: string
  metaKeywords: string
  features: ServiceFeature[]
  content: {
    introduction: string
    introductionTitle: string
    featuresTitle: string
    highlightsTitle: string
    highlights: Highlight[]
    process: {
      title: string
      steps: string[]
    }
    additionalInfo: {
      title: string
      items: string[]
    }
    ctaTitle: string
    ctaDescription: string
    ctaButtonText?: string
    whatsappMessage?: string
    whatsappButtonText?: string
    mainContent?: {
      firstSection: {
        title: string
        description: string
        items: {
          title: string
          description: string
        }[]
      }
      secondSection: {
        title: string
        description: string
        items: {
          title: string
          description: string
        }[]
      }
    }
    mainImage?: {
      src: string
      alt: string
      width: number
      height: number
    }
  }
  heroImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export default function StorageService({
  title,
  description,
  features,
  content,
  heroImage
}: StorageServiceProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const mainControls = useAnimation()
  const pathname = usePathname()

  // Default fallback values
  const whatsappMessage = content.whatsappMessage || "Merhaba, depolama hizmeti hakkında bilgi almak istiyorum."
  const whatsappButtonText = content.whatsappButtonText || "Ücretsiz Teklif Al"
  const ctaButtonText = content.ctaButtonText || "İletişime Geçin"

  useEffect(() => {
    if (isHeroInView) {
      mainControls.start('visible')
    }
  }, [isHeroInView, mainControls])

  return (
    <main className="min-h-screen" aria-label={`${title} - Horex Nakliyat`}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-horex-red to-horex-black overflow-hidden" ref={heroRef}>
        {heroImage && (
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={heroImage.src}
              alt={heroImage.alt || `${title} - Horex Nakliyat Depolama Hizmetleri`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
              quality={85}
              fetchPriority="high"
              title={`${title} - Profesyonel Depolama Hizmeti | Horex Nakliyat`}
            />
          </div>
        )}
        <div className="container mx-auto px-4 z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 break-words hyphens-auto px-4">
                {title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto break-words hyphens-auto px-4">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { scale: 1, opacity: 1 }
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <a 
                href={`https://wa.me/905072135501?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geçin"
                className="bg-white text-horex-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{whatsappButtonText}</span>
              </a>
            </motion.div>

            {/* Animasyonlu Arka Plan Elementleri */}
            <motion.div 
              className="absolute top-1/4 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { scale: 1, opacity: 1 }
              }}
              transition={{ duration: 1, delay: 0.8 }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { scale: 1, opacity: 1 }
              }}
              transition={{ duration: 1, delay: 1 }}
              aria-hidden="true"
            />
            <motion.div 
              className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { scale: 1, opacity: 1 }
              }}
              transition={{ duration: 1, delay: 1.2 }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 overflow-x-hidden" aria-labelledby="introduction-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="introduction-title" className="text-3xl font-bold mb-8">{content.introductionTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 break-words hyphens-auto">
              {content.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 overflow-x-hidden" aria-labelledby="features-title">
        <div className="container mx-auto px-4">
          <h2 id="features-title" className="text-3xl font-bold text-center mb-12">{content.featuresTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 break-words">{feature.title}</h3>
                <p className="text-gray-600 break-words hyphens-auto">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ana İçerik Bölümü */}
      {content.mainContent && (
        <section className="py-20 bg-gray-50 overflow-x-hidden">
          <div className="container mx-auto px-4">
            {/* Main Image */}
            {content.mainImage && (
              <div className="mb-12 relative w-full h-60 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src={content.mainImage.src}
                  alt={content.mainImage.alt || `${title} - Detaylı Görsel | Horex Nakliyat`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                  loading="eager"
                  quality={85}
                  title={`${title} - Profesyonel Depolama Çözümleri | Horex Nakliyat`}
                />
              </div>
            )}

            {/* First Section - Ev Eşyası Depolama Sürecimiz */}
            <div className="mb-16">
              <h2 id="main-content-title" className="text-3xl font-bold mb-6 text-center">{content.mainContent.firstSection.title}</h2>
              <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto break-words hyphens-auto">{content.mainContent.firstSection.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.mainContent.firstSection.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-horex-red break-words">{item.title}</h3>
                    <p className="text-gray-600 break-words hyphens-auto">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Section - Depolama Alanlarımız */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-center">{content.mainContent.secondSection.title}</h2>
              <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto break-words hyphens-auto">{content.mainContent.secondSection.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.mainContent.secondSection.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-horex-red break-words">{item.title}</h3>
                    <p className="text-gray-600 break-words hyphens-auto">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50 overflow-x-hidden" aria-labelledby="highlights-title">
        <div className="container mx-auto px-4">
          <h2 id="highlights-title" className="text-3xl font-bold text-center mb-12">{content.highlightsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-horex-red break-words">{highlight.title}</h3>
                <p className="text-gray-700 break-words hyphens-auto">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 overflow-x-hidden" aria-labelledby="process-title">
        <div className="container mx-auto px-4">
          <h2 id="process-title" className="text-3xl font-bold text-center mb-12">{content.process.title}</h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-horex-red hidden md:block"></div>
            
            {/* Process Steps for Larger Screens */}
            <div className="hidden md:block">
              {content.process.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-2 flex-wrap">
                        <div className="w-8 h-8 rounded-full bg-horex-red flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold">Adım {index + 1}</h3>
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-horex-red"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Process Steps for Mobile */}
            <div className="md:hidden space-y-6">
              {content.process.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-horex-red flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">Adım {index + 1}</h3>
                  </div>
                  <p className="text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="additional-info-title">
        <div className="container mx-auto px-4">
          <h2 id="additional-info-title" className="text-3xl font-bold text-center mb-12">{content.additionalInfo.title}</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {content.additionalInfo.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start"
              >
                <div className="text-horex-red mr-3 mt-1">✓</div>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-horex-red text-white overflow-x-hidden" aria-labelledby="cta-title">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-title" className="text-3xl font-bold mb-6 break-words hyphens-auto">{content.ctaTitle}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 break-words hyphens-auto">{content.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/905072135501?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-horex-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{whatsappButtonText}</span>
            </a>
            <a 
              href="/iletisim" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-horex-red transition-colors"
            >
              {ctaButtonText}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 