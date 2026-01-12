"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function PageTransition() {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (pathname === "/") return

    setIsAnimating(true)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "instant" })
    const timer = setTimeout(() => setIsAnimating(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  const panels = [0, 1, 2, 3, 4]

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          {panels.map((index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundColor: index % 2 === 0 ? "#000000" : "#111111",
                zIndex: 9998 - index,
              }}
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
          {/* Orange accent line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-[#F04A24]"
            initial={{ y: "100vh" }}
            animate={{ y: "-100vh" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}
