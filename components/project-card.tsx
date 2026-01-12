"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  href: string
  index: number
}

export function ProjectCard({ title, category, image, href, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-100, 100], [3, -3]), { damping: 20, stiffness: 200 })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-3, 3]), { damping: 20, stiffness: 200 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <motion.div
          ref={cardRef}
          data-cursor="view"
          className="group relative"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          {/* Image container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            </motion.div>

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Title and category */}
          <div className="mt-6">
            <motion.h3
              className="font-[family-name:var(--font-inter-tight)] text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: isHovered ? "#F04A24" : "#FFFFFF" }}
            >
              {title}
            </motion.h3>
            <p className="mt-2 text-sm text-[#CFCFCF] tracking-wide uppercase">{category}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
