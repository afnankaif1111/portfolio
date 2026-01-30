"use client"

import { motion } from "framer-motion"

export function IntroSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#CFCFCF] font-light">
          I design digital experiences with a focus on clarity, structure, and interaction.
          <br />
          <br />
          My work combines visual systems, motion, and modern web technology to create interfaces that feel direct and
          intentional.
          <br />
          <br />
          <span className="text-white">
            Every detail exists for a reason, and nothing is left to chance.
          </span>
        </p>
      </motion.div>
    </section>
  )
}
