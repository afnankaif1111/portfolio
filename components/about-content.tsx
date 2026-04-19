"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

const paragraphs = [
  "I am a builder who refuses to be boxed into one label, a generalist who sees the whole system and a specialist who dives deep where it matters.",
  "I work at the intersection of scalable systems, AI, and real-time architectures. I do not just use tools, I understand them, break them, and push them further.",
  "I move fast, learn faster, and obsess over details most overlook, building systems that are seamless on the surface and powerful underneath.",
]

const engineeringSlides = Array.from({ length: 24 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")

  return {
    src: `/about-engineering-${number}.png`,
    label: `Frame ${number}`,
  }
})

export function AboutContent() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [hoveredParagraph, setHoveredParagraph] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-150, 150], [3, -3]), springConfig)
  const rotateY = useSpring(useTransform(x, [-150, 150], [-3, 3]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsImageHovered(false)
  }

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current === 0 ? engineeringSlides.length - 1 : current - 1))
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % engineeringSlides.length)
  }

  useEffect(() => {
    const timer = window.setInterval(showNextSlide, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const currentSlide = engineeringSlides[activeSlide]

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[532/323] overflow-hidden bg-[#111111]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={handleMouseLeave}
          data-cursor="hover"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: isImageHovered ? 1.03 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/about-main-image.png"
              alt="Afnan Kaif - Creative Developer"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col justify-center">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 last:mb-0 transition-colors duration-0"
              style={{ color: hoveredParagraph === index ? "#F04A24" : "#CFCFCF" }}
              onMouseEnter={() => setHoveredParagraph(index)}
              onMouseLeave={() => setHoveredParagraph(null)}
              data-cursor="hover"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mt-24 md:mt-32"
      >
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm text-[#CFCFCF]">Lab notes</p>
            <h2 className="font-[family-name:var(--font-inter-tight)] text-5xl font-black leading-none md:text-7xl">
              ENGINEERINGG!!!
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#8A8F98]">
            Code, hardware, experiments, late nights, tiny wins.
          </p>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-white/10 bg-[#0B0F17]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="relative h-[68vh] min-h-[420px] overflow-hidden bg-black md:h-[78vh] md:min-h-[560px]">
                {engineeringSlides.map((slide, index) => (
                  <motion.div
                    key={slide.src}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: activeSlide === index ? 1 : 0, scale: activeSlide === index ? 1 : 0.99 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      sizes="(min-width: 1024px) 70vw, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/35 p-4 md:p-6">
                <div>
                  <p className="text-sm text-[#8A8F98]">{currentSlide.label}</p>
                  <p className="text-lg font-semibold text-white md:text-xl">Making things work</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Show previous engineering slide"
                    onClick={showPreviousSlide}
                    className="h-10 w-10 rounded-[6px] border border-white/15 bg-black/45 text-white transition-colors hover:border-[#F04A24] hover:text-[#F04A24]"
                    data-cursor="hover"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    aria-label="Show next engineering slide"
                    onClick={showNextSlide}
                    className="h-10 w-10 rounded-[6px] border border-white/15 bg-black/45 text-white transition-colors hover:border-[#F04A24] hover:text-[#F04A24]"
                    data-cursor="hover"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-4 lg:border-l lg:border-t-0">
              <div className="grid grid-cols-6 gap-2 lg:grid-cols-3">
                {engineeringSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Show engineering slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`relative aspect-square overflow-hidden rounded-[4px] border transition-colors ${
                      activeSlide === index ? "border-[#F04A24]" : "border-white/10 hover:border-white/35"
                    }`}
                    data-cursor="hover"
                  >
                    <Image
                      src={slide.src}
                      alt=""
                      fill
                      sizes="96px"
                      className={`object-cover transition-opacity ${activeSlide === index ? "opacity-100" : "opacity-55"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
