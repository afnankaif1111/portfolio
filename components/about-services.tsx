"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  { title: "Data Structures and Algorithms", description: "Solving problems with efficient logic" },
  { title: "Deep Learning", description: "Building intelligent model-driven systems" },
  { title: "System Design", description: "Designing scalable and reliable architecture" },
  { title: "Cloud Solutions", description: "Deploying resilient services on modern cloud platforms" },
  { title: "Software Management", description: "Leading delivery with clear engineering process" },
  { title: "Generative AI", description: "Creating intelligent systems with modern AI models" },
]

export function AboutServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-[#222222]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm text-[#CFCFCF] tracking-[0.3em] uppercase mb-16"
      >
        Interests and Expertise
      </motion.p>

      <div className="space-y-0">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group py-8 px-4 -mx-4 border-b border-[#222222] first:border-t transition-colors duration-0"
            style={{
              backgroundColor: hoveredIndex === index ? "#F04A24" : "transparent",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-cursor="hover"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3
                className="font-[family-name:var(--font-inter-tight)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-0"
                style={{ color: "#FFFFFF" }}
              >
                {service.title}
              </h3>
              <p
                className="text-lg md:text-xl transition-colors duration-0"
                style={{ color: hoveredIndex === index ? "#FFFFFF" : "#CFCFCF" }}
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-24 md:mt-32"
      >
        <p className="text-[#CFCFCF] text-lg mb-6">Interested in working together?</p>
        <a
          href="mailto:afnankaif056@gmail.com"
          data-cursor="hover"
          className="inline-block font-[family-name:var(--font-inter-tight)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white hover:text-[#F04A24] transition-colors duration-0"
        >
          afnankaif056@gmail.com
        </a>
      </motion.div>
    </section>
  )
}
