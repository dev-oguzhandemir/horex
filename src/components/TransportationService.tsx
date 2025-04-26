'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Road = () => {
  return null;
  /* Road component is commented out for future reference
  <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-b from-horex-black via-gray-900 to-black overflow-hidden">
    {/* Orta Bölücü Şerit Çizgileri *//*}
    <div className="absolute top-1/2 left-0 w-full h-[4px] flex items-center">
      <div className="w-full h-full flex justify-around">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-10 h-[4px] bg-yellow-400" />
        ))}
      </div>
    </div>
    {/* Alt Şerit *//*}
    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent" />
    {/* Üst Şerit *//*}
    <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black to-transparent" />
  </div>
  */
};

const TruckAnimation = () => {
  return null;
  /* TruckAnimation component is commented out for future reference
  <>
    {/* Forward Moving Truck (Gidiş) *//*}
    <motion.div
      className="absolute z-10 top[80%] left-0 w-full overflow-visible pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute left-0"
        animate={{
          x: ['-100vw', '100vw'],
          scaleX: [-1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 6
        }}
      >
        <TruckSVG />
      </motion.div>
    </motion.div>

    {/* Return Moving Truck (Dönüş) *//*}
    <motion.div
      className="absolute z-10 top-[35%] left-0 w-full overflow-visible pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute left-0"
        initial={{ x: '100vw' }}
        animate={{
          x: ['100vw', '-100vw'],
          scaleX: [1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 6
        }}
      >
        <TruckSVG />
      </motion.div>
    </motion.div>
  </>
  */
};

const TruckSVG = () => {
  return null;
  /* TruckSVG component is commented out for future reference
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-auto h-24 text-horex-red"
  >
    <g fill="none" stroke="currentColor" strokeWidth="30">
      <rect x="150" y="150" width="250" height="150" rx="20" ry="20" fill="currentColor"/>
      <rect x="50" y="170" width="100" height="110" rx="15" ry="15" fill="currentColor"/>
      <circle cx="100" cy="300" r="20" fill="#333"/>
      <circle cx="350" cy="300" r="20" fill="#333"/>
    </g>
  </svg>
  */
};

interface ServiceFeature {
  title: string
  description: string
  icon: string
}

interface ServiceImage {
  src: string
  alt: string
  width: number
  height: number
}

interface TransportationServiceProps {
  title: string
  description: string
  metaDescription: string
  metaKeywords: string
  heroImage: ServiceImage
  features: ServiceFeature[]
  content: {
    mainImage: ServiceImage
    introduction: string
    highlights: string[]
    process: {
      title: string
      steps: string[]
    }
    additionalInfo: {
      title: string
      items: string[]
    }
  }
}

export default function TransportationService({
  title,
  description,
  features,
  content,
  heroImage,
}: TransportationServiceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section with Road */}
      <div className="relative h-[calc(100vh-80px)] bg-gradient-to-br from-horex-red from-10% via-horex-black via-50% to-black to-90%">
        {/* Main Hero Content - 80% */}
        <header className="relative h-[80%] text-white">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                <p className="text-lg text-white mb-8">{description}</p>
              </div>
              <div className="lg:w-1/2 relative">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* Road and Animation Section - 20% */}
        <div className="relative h-[20%]">
          <Road />
          <TruckAnimation />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Profesyonel Nakliyat Hizmeti</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hizmet Özellikleri</h2>
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
            <div className="lg:w-1/2">
              <Image
                src={content.mainImage.src}
                alt={content.mainImage.alt}
                width={content.mainImage.width}
                height={content.mainImage.height}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Hizmet Avantajları</h3>
                  <ul className="space-y-2">
                    {content.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-horex-red mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
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
          <h2 className="text-3xl font-bold mb-6">Ücretsiz Teklif Alın</h2>
          <p className="text-xl mb-8">
            Profesyonel nakliyat hizmetimiz için hemen bizimle iletişime geçin.
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