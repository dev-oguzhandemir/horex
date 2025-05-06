'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ServiceFeature {
  title: string
  description: string
  icon: string
}

interface ServiceImage {
  src: string
  alt: string
  width?: number
  height?: number
}

interface Highlight {
  title: string
  description: string
}

interface TransportationServiceProps {
  title: string
  description: string
  metaDescription: string
  metaKeywords: string
  banner: ServiceImage
  heroImage: ServiceImage
  features: ServiceFeature[]
  content: {
    mainImage: ServiceImage
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
  }
}

export default function TransportationService({
  title,
  description,
  features,
  content,
  heroImage,
  banner,
}: TransportationServiceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-contain sm:object-contain md:object-contain lg:object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{content.introductionTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-horex-red mr-3">{feature.icon}</span>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column - Image */}
            <div className="lg:w-1/2 lg:sticky lg:top-24">
              <Image
                src={content.mainImage.src}
                alt={content.mainImage.alt}
                width={content.mainImage.width}
                height={content.mainImage.height}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">{content.highlightsTitle}</h3>
                  <div className="space-y-4">
                    {content.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="text-lg font-semibold text-horex-red mb-2">{highlight.title}</h4>
                        <p className="text-gray-700">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content.process.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.process.steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-horex-red text-white flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content.additionalInfo.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.additionalInfo.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-horex-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-xl mb-8">
            {content.ctaDescription}
          </p>
          <button
            onClick={() => window.location.href = '/iletisim'}
            className="bg-white text-horex-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geçin
          </button>
        </div>
      </section>
    </main>
  )
} 