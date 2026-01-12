"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isCreativeHovered, setIsCreativeHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const textX = useTransform(x, [-500, 500], [-15, 15])
  const textY = useTransform(y, [-500, 500], [-8, 8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/dark-cinematic-abstract.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div className="relative z-10 text-center px-4" style={{ x: textX, y: textY }}>
        <h1 className="font-[family-name:var(--font-inter-tight)] text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.9] tracking-[-0.03em] uppercase">
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            THE SPARK FOR
          </motion.span>
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ALL THINGS
          </motion.span>
          <motion.span
            className="block transition-colors duration-0 cursor-default"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ color: isCreativeHovered ? "#F04A24" : "#FFFFFF" }}
            onMouseEnter={() => setIsCreativeHovered(true)}
            onMouseLeave={() => setIsCreativeHovered(false)}
            data-cursor="hover"
          >
            CREATIVE
          </motion.span>
        </h1>
      </motion.div>
    </section>
  )
}
