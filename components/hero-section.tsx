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
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/DDCDDAA0-B510-478B-8D2A-F72F802F115B_1_201_a.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Hero Text Position Wrapper (edit these values freely) */}
      <div className="absolute left-[25%] top-[65%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative z-10 text-left px-4"
          style={{ x: textX, y: textY }}
        >
          <h1 className="font-[family-name:var(--font-inter-tight)] text-[12vw] md:text-[10vw] lg:text-[9vw] font-black leading-[0.9] tracking-[-0.03em] uppercase">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I SOLVE
            </motion.span>

            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              PROBLEMS
            </motion.span>

            <motion.span
              className="block cursor-default transition-colors duration-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ color: isCreativeHovered ? "#F04A24" : "#FFFFFF" }}
              onMouseEnter={() => setIsCreativeHovered(true)}
              onMouseLeave={() => setIsCreativeHovered(false)}
              data-cursor="hover"
            >
              IN STYLE.
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
