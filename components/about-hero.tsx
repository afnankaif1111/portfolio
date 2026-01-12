"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="font-[family-name:var(--font-inter-tight)] text-6xl md:text-8xl lg:text-[10vw] font-black tracking-tight leading-[0.9]">
          ABOUT
        </h1>
      </motion.div>
    </section>
  )
}
