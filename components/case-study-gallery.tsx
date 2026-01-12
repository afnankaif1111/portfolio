"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface CaseStudyGalleryProps {
  images: string[]
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 bg-black">
      <div className="grid grid-cols-1 gap-8">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image} index={index} />
        ))}
      </div>
    </section>
  )
}

function GalleryImage({ src, index }: { src: string; index: number }) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-200, 200], [2, -2]), springConfig)
  const rotateY = useSpring(useTransform(x, [-200, 200], [-2, 2]), springConfig)

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
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative aspect-video overflow-hidden"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="view"
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
      </motion.div>
    </motion.div>
  )
}
