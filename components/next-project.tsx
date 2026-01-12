"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface NextProjectProps {
  title: string
  slug: string
}

export function NextProject({ title, slug }: NextProjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-black border-t border-[#222222]">
      <Link href={`/projects/${slug}`} onClick={handleClick}>
        <motion.div
          className="text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-cursor="view"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[#CFCFCF] tracking-[0.3em] uppercase mb-6"
          >
            Next Project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-inter-tight)] text-5xl md:text-7xl lg:text-9xl font-black tracking-tight transition-colors duration-0"
            style={{ color: isHovered ? "#F04A24" : "#FFFFFF" }}
          >
            {title}
          </motion.h2>
        </motion.div>
      </Link>
    </section>
  )
}
