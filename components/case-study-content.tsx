"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface CaseStudyContentProps {
  content: string[]
}

export function CaseStudyContent({ content }: CaseStudyContentProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-black">
      <div className="max-w-3xl">
        {content.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-12 last:mb-0"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ color: hoveredIndex === index ? "#F04A24" : "#CFCFCF" }}
            data-cursor="hover"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
