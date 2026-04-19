"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const techStack = [
  "TypeScript",
  "Node APIs",
  "MongoDB",
  "Real-time Systems",
  "AI Systems",
  "NLP",
  "Scalable Systems",
  "Microservices",
  "System Architecture",
  "Full Stack",
  "Performance Optimization",
  "LLMs",
  "Distributed Systems",
  "Event-Driven Architecture",
  "API Design",
  "Backend Engineering",
  "Async Programming",
  "Caching Strategies",
  "Data Pipelines",
  "Cloud Infrastructure",
  "Developer Tooling",
]

export function MarqueeSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items = [...techStack, ...techStack, ...techStack, ...techStack]

  return (
    <section className="relative py-6 bg-black border-t border-b border-[#222222] overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: isPaused ? 0 : "-50%" }}
        transition={{
          x: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false)
          setHoveredIndex(null)
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            data-cursor="hover"
            className="inline-block px-4 md:px-6"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className="font-[family-name:var(--font-inter-tight)] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-0"
              style={{ color: hoveredIndex === index ? "#F04A24" : "#FFFFFF" }}
            >
              {item}
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl text-[#333333] mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
