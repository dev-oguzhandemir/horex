'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-horex-red to-horex-black" ref={ref}>
      <div className="container mx-auto px-4">
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
            Forex Nakliyat <br />
             Taşımacılıkta Güven ve Kalite
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
            Günümüzde taşınma süreci, insanların yaşamlarında önemli bir dönüm noktası olarak kabul
edilir. Bu süreçte, eşyaların güvenli bir şekilde yeni bir adrese taşınması büyük önem taşır. İşte bu
noktada nakliyat firmaları devreye girer. Nakliyat firmaları, müşterilerine profesyonel hizmet
sunarak taşınma sürecini kolaylaştırır ve daha az stresli hale getirir.
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
              href="https://wa.me/905072135501?text=Merhaba, nakliyat hizmeti hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-horex-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Ücretsiz Teklif Al</span>
            </a>
            <Link 
              href="/nakliyat-hizmetleri" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Hizmetlerimiz
            </Link>
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
          />
          <motion.div 
            className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={mainControls}
            variants={{
              visible: { scale: 1, opacity: 1 }
            }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={mainControls}
            variants={{
              visible: { scale: 1, opacity: 1 }
            }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>
      </div>
    </section>
  )
} 