"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface CaseStudyHeroProps {
  title: string
  category: string
  year: string
  description: string
  image: string
}

export function CaseStudyHero({ title, category, year, description, image }: CaseStudyHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative">
      {/* Full-bleed hero image */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#F04A24]"
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Project info */}
      <motion.div className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24" style={{ opacity }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-[#CFCFCF] tracking-[0.2em] uppercase mb-4">{category}</p>
            <h1 className="font-[family-name:var(--font-inter-tight)] text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-[#CFCFCF] tracking-wide"
          >
            {year}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-[#CFCFCF] leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  )
}
