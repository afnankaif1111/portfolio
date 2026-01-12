"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-[#222222]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#CFCFCF] text-sm tracking-wide">© 2026 — All rights reserved</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-8"
        >
          {["Twitter", "LinkedIn", "Dribbble"].map((social) => (
            <Link
              key={social}
              href="#"
              data-cursor="hover"
              className="text-sm text-[#CFCFCF] tracking-wide uppercase hover:text-[#F04A24] transition-colors duration-0"
            >
              {social}
            </Link>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
