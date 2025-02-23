'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function SelectionCriteria() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  const criteria = [
    {
      title: 'Referanslar ve İncelemeler',
      description: 'Müşteri yorumları ve referanslarımız, hizmet kalitemizi yansıtır.',
      icon: (
        <svg className="w-8 h-8 text-horex-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: 'Lisans ve Sigorta',
      description: 'Tüm yasal izinlere sahip ve tam sigorta kapsamında hizmet veriyoruz.',
      icon: (
        <svg className="w-8 h-8 text-horex-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Fiyatlandırma ve Şeffaflık',
      description: 'Net ve şeffaf fiyatlandırma politikamızla sürpriz maliyetler çıkarmıyoruz.',
      icon: (
        <svg className="w-8 h-8 text-horex-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Profesyonel Ekip ve Ekipman',
      description: 'Deneyimli ekibimiz ve modern ekipmanlarımızla kaliteli hizmet sunuyoruz.',
      icon: (
        <svg className="w-8 h-8 text-horex-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-horex-gray overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={mainControls}
          variants={{
            visible: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nakliyat Firması Seçerken<br />Dikkat Edilmesi Gerekenler
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={mainControls}
              variants={{
                visible: { x: 0, opacity: 1 }
              }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={mainControls}
                  variants={{
                    visible: { scale: 1 }
                  }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-horex-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dekoratif Elementler */}
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-horex-red/5 rounded-full"
          initial={{ scale: 0 }}
          animate={mainControls}
          variants={{
            visible: { scale: 1 }
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 bg-horex-red/5 rounded-full"
          initial={{ scale: 0 }}
          animate={mainControls}
          variants={{
            visible: { scale: 1 }
          }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </section>
  )
} 