'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
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

interface ServiceCapacityProps {
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

export default function ServiceCapacity({
  title,
  description,
  features,
  content,
  heroImage
}: ServiceCapacityProps) {
  const featuresRef = useRef(null)
  const inViewFeatures = useInView(featuresRef, { once: true })
  
  const highlightsRef = useRef(null)
  const inViewHighlights = useInView(highlightsRef, { once: true })
  
  const processRef = useRef(null)
  const inViewProcess = useInView(processRef, { once: true })
  
  const additionalInfoRef = useRef(null)
  const inViewAdditionalInfo = useInView(additionalInfoRef, { once: true })
  
  const mainContentRef = useRef(null)
  const inViewMainContent = useInView(mainContentRef, { once: true })

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const mainControls = useAnimation()

  // Default fallback values
  const whatsappMessage = content.whatsappMessage || "Merhaba, hizmet kapasitesi hakkında bilgi almak istiyorum."
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
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-horex-red to-horex-black" ref={heroRef}>
        {heroImage && (
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={heroImage.src}
              alt={heroImage.alt || `${title} - Horex Nakliyat`}
              quality={90}
              priority={true}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              fetchPriority="high"
              title={`${title} - Horex Nakliyat Profesyonel Hizmetleri`}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
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

      {/* Özellikler Bölümü */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-horex-black">{content.featuresTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.introduction}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewFeatures ? 1 : 0, y: inViewFeatures ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-horex-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ana İçerik Bölümü */}
      {content.mainContent && (
        <section ref={mainContentRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Main Image */}
            {content.mainImage && (
              <div className="mb-12 relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src={content.mainImage.src}
                  alt={content.mainImage.alt || `${title} Detay - Horex Nakliyat`}
                  quality={85}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                  loading="eager"
                  title={`${title} - Profesyonel Nakliyat Hizmetleri`}
                />
              </div>
            )}
            
            {/* First Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-horex-black">{content.mainContent.firstSection.title}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.mainContent.firstSection.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {content.mainContent.firstSection.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: inViewMainContent ? 1 : 0, x: inViewMainContent ? 0 : index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-horex-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-horex-black">{content.mainContent.secondSection.title}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.mainContent.secondSection.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {content.mainContent.secondSection.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: inViewMainContent ? 1 : 0, x: inViewMainContent ? 0 : index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2 text-horex-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Avantajlar Bölümü */}
      <section ref={highlightsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-horex-black">{content.highlightsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {content.highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewHighlights ? 1 : 0, y: inViewHighlights ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-horex-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-horex-black">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç Bölümü */}
      <section ref={processRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.process.title}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {content.process.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inViewProcess ? 1 : 0, x: inViewProcess ? 0 : -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start mb-8"
              >
                <div className="bg-horex-red w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="bg-gray-800 p-5 rounded-lg flex-grow">
                  <p className="text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ek Bilgiler */}
      <section ref={additionalInfoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-horex-black">{content.additionalInfo.title}</h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {content.additionalInfo.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inViewAdditionalInfo ? 1 : 0, y: inViewAdditionalInfo ? 0 : 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center"
              >
                <div className="text-horex-red mr-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-20 bg-horex-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{content.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/905072135501?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişime geçin"
              className="bg-white text-horex-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{whatsappButtonText}</span>
            </a>
            <a 
              href="/iletisim" 
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
            >
              {ctaButtonText}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 