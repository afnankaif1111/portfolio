"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { href: "/home", label: "WORK" },
  { href: "/about", label: "ABOUT" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link
          href="/home"
          className="text-white text-sm tracking-[0.2em] font-medium hover:text-[#F04A24] transition-colors duration-0"
          data-cursor="hover"
        >
          AFNAN KAIF
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cursor="hover"
              className={`text-sm tracking-[0.15em] font-medium transition-colors duration-0 ${
                pathname === item.href ? "text-[#F04A24]" : "text-white hover:text-[#F04A24]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
