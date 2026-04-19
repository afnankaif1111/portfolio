"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export function IntroAnimation() {
  const [phase, setPhase] = useState<"initial" | "name" | "transition" | "done">("initial")
  const router = useRouter()

  useEffect(() => {
    // Start name animation after brief delay
    const nameTimer = setTimeout(() => setPhase("name"), 300)

    // Start page transition after animation completes
    const transitionTimer = setTimeout(() => setPhase("transition"), 3000)

    // Navigate to home after transition
    const doneTimer = setTimeout(() => {
      setPhase("done")
      router.push("/home")
    }, 3800)

    return () => {
      clearTimeout(nameTimer)
      clearTimeout(transitionTimer)
      clearTimeout(doneTimer)
    }
  }, [router])

  const panels = [0, 1, 2, 3, 4]

  // Letter animation for the name
  const firstNameLetters = "AFNAN".split("")
  const lastNameLetters = "KAIF".split("")

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
          {/* Name animation */}
          <div className="relative z-10 text-center">
            {/* First name - AFNAN */}
            <div className="overflow-hidden mb-2">
              <motion.div className="flex justify-center gap-1 md:gap-4">
                {firstNameLetters.map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="font-[family-name:var(--font-inter-tight)] text-[18vw] md:text-[15vw] font-black tracking-[-0.02em] leading-none inline-block"
                    initial={{ y: "120%", opacity: 0, rotateX: -80 }}
                    animate={phase === "name" || phase === "transition" ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Last name - KAIF */}
            <div className="overflow-hidden">
              <motion.div className="flex justify-center gap-1 md:gap-4">
                {lastNameLetters.map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    className="font-[family-name:var(--font-inter-tight)] text-[18vw] md:text-[15vw] font-black tracking-[-0.02em] leading-none inline-block text-[#F04A24]"
                    initial={{ y: "120%", opacity: 0, rotateX: -80 }}
                    animate={phase === "name" || phase === "transition" ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Subtitle line */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={phase === "name" || phase === "transition" ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ y: 30 }}
                animate={phase === "name" || phase === "transition" ? { y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-12 h-[1px] bg-[#CFCFCF]" />
                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#CFCFCF]">Engineer on caffine</span>
                <span className="w-12 h-[1px] bg-[#CFCFCF]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Page transition panels */}
          {phase === "transition" && (
            <div className="fixed inset-0 z-20 pointer-events-none">
              {panels.map((index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#000000" : "#111111",
                    zIndex: 20 + (5 - index),
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                />
              ))}
              {/* Orange accent line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-[#F04A24] z-30"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  )
}
