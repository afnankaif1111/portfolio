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
          I build systems that can take a hit: real-time apps, AI workflows, booking engines, and product experiences
          that do more than sit pretty.
          <br />
          <br />
          My stack moves between frontend polish and backend logic, from WebSockets and payments to machine learning,
          recommendation systems, and cloud-ready architecture.
          <br />
          <br />
          <span className="text-white">I care about speed, clarity, and the kind of engineering that survives real users.</span>
        </p>
      </motion.div>
    </section>
  )
}
