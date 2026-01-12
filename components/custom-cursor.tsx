"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverText, setHoverText] = useState<string | null>(null)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Very slight lag for smooth following
  const springConfig = { damping: 35, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const trailSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 }
  const trailXSpring = useSpring(cursorX, trailSpringConfig)
  const trailYSpring = useSpring(cursorY, trailSpringConfig)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    },
    [cursorX, cursorY, isVisible],
  )

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      const projectCard = target.closest('[data-cursor="view"]')
      if (projectCard) {
        setIsHovering(true)
        setHoverText("VIEW")
        return
      }

      const isInteractive = target.closest('a, button, [role="button"], [data-cursor="hover"]')
      if (isInteractive) {
        setIsHovering(true)
        setHoverText(null)
        return
      }

      setIsHovering(false)
      setHoverText(null)
    }

    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseDown, handleMouseUp])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
      >
        <motion.div
          className="bg-[#F04A24] rounded-full"
          animate={{
            width: isClicking ? 4 : 8,
            height: isClicking ? 4 : 8,
            x: isClicking ? -2 : -4,
            y: isClicking ? -2 : -4,
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center bg-white rounded-full"
          animate={{
            width: hoverText ? 80 : isHovering ? 40 : isClicking ? 8 : 16,
            height: hoverText ? 80 : isHovering ? 40 : isClicking ? 8 : 16,
            x: hoverText ? -40 : isHovering ? -20 : isClicking ? -4 : -8,
            y: hoverText ? -40 : isHovering ? -20 : isClicking ? -4 : -8,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {hoverText && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="text-black text-xs font-semibold tracking-wider"
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  )
}
