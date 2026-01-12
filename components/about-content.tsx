"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

const paragraphs = [
  "I believe good design is direct.",
  "Interfaces should respond immediately and communicate clearly.",
  "My work is driven by structure, detail, and restraint.",
]

export function AboutContent() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [hoveredParagraph, setHoveredParagraph] = useState<number | null>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-150, 150], [3, -3]), springConfig)
  const rotateY = useSpring(useTransform(x, [-150, 150], [-3, 3]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsImageHovered(false)
  }

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[3/4] overflow-hidden bg-[#111111]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={handleMouseLeave}
          data-cursor="hover"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isImageHovered ? 1.03 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/professional-portrait-dark-moody-creative-director.jpg"
              alt="Afnan Kaif - Creative Developer"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col justify-center">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 last:mb-0 transition-colors duration-0"
              style={{ color: hoveredParagraph === index ? "#F04A24" : "#CFCFCF" }}
              onMouseEnter={() => setHoveredParagraph(index)}
              onMouseLeave={() => setHoveredParagraph(null)}
              data-cursor="hover"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
