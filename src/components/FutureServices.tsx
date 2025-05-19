'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function FutureServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Resim Alanı */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={mainControls}
            variants={{
              visible: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/all-big-size-image/11.jpg"
                alt="Nakliyat Hizmetlerinin Geleceği - Horex Nakliyat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* İçerik Alanı */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={mainControls}
            variants={{
              visible: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-horex-black">
            Nakliyat Hizmetlerinin Geleceği
            </h2>
            <p className="text-gray-600 mb-6">
            Teknolojinin gelişmesiyle birlikte, nakliyat hizmetleri de dönüşüm geçirmektedir. Online
rezervasyon sistemleri, GPS takip özellikleri ve dijital envanter yönetimi gibi yenilikler, nakliyat
sektöründe müşteri memnuniyetini artırmaktadır. Gelecekte, daha sürdürülebilir ve çevre dostu
taşımacılık çözümlerinin de yaygınlaşması beklenmektedir.

            </p>
            <p className="text-gray-600 mb-8">
            Sonuç olarak, nakliyat firmaları taşınma sürecini kolaylaştıran ve müşterilerine güven veren
önemli kuruluşlardır. Doğru firma seçimi, taşınmanın sorunsuz ve keyifli bir deneyim haline
gelmesini sağlar. Bu nedenle, taşınma planlarınız için profesyonel bir nakliyat hizmeti tercih
etmek her zaman en iyi seçenektir.
            </p>

            {/* Teknoloji Özellikleri */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="p-4 bg-horex-gray rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={mainControls}
                variants={{
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <h3 className="font-semibold text-horex-red mb-2">Referanslar ve İncelemeler</h3>
                <p className="text-sm text-gray-600">Bir nakliyat firması seçmeden önce, firmanın müşteri yorumlarını ve referanslarını incelemek
                önemlidir. Olumlu geri bildirimler, firmanın güvenilirliği hakkında fikir verir.</p>
              </motion.div>

              <motion.div 
                className="p-4 bg-horex-gray rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={mainControls}
                variants={{
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <h3 className="font-semibold text-horex-red mb-2">Lisans ve Sigorta</h3>
                <p className="text-sm text-gray-600">Firmanın gerekli lisanslara sahip olması ve sigorta hizmeti sunması, eşyalarınızın güvenliği
                açısından önem taşır.</p>
              </motion.div>

              <motion.div 
                className="p-4 bg-horex-gray rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={mainControls}
                variants={{
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <h3 className="font-semibold text-horex-red mb-2">Fiyatlandırma ve Şeffaflık</h3>
                <p className="text-sm text-gray-600">Fiyatlandırma konusunda şeffaf olan ve ek masrafları önceden belirten firmalar tercih
                edilmelidir. Böylece beklenmedik maliyetlerle karşılaşılmaz.</p>
              </motion.div>

              <motion.div 
                className="p-4 bg-horex-gray rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={mainControls}
                variants={{
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <h3 className="font-semibold text-horex-red mb-2">Profesyonel Ekip ve Ekipman</h3>
                <p className="text-sm text-gray-600">Firmanın, işinde deneyimli bir ekibe ve modern ekipmanlara sahip olması, taşınma sürecinin
                kalitesini artırır.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 