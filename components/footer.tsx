"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type ContactLink = {
  label: string
  href: string
  detail: string
  image?: string
}

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/afnankaif1111",
    detail: "afnankaif1111",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaik-afnan-88913427b/",
    detail: "Shaik Afnan",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/mB3vlUqDsj/",
    detail: "Problem solving and DSA",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/4fnankaif_ig/?next=%2F&hl=en",
    detail: "@4fnankaif_ig",
  },
  {
    label: "Email",
    href: "mailto:afnankaif056@gmail.com",
    detail: "afnankaif056@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+919392555206",
    detail: "+91 9392555206",
  },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-black border-t border-[#222222]"
    >
      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] uppercase text-[#CFCFCF]">Contacts</p>
          <h2 className="font-[family-name:var(--font-inter-tight)] text-5xl font-black leading-none text-white md:text-7xl">
            LET'S BUILD
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md"
        >
          <p className="text-base leading-relaxed text-[#8A8F98]">
            Reach out for engineering, AI, backend systems, real-time products, or a good technical rabbit hole.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"
      >
        {contactLinks.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            data-cursor="hover"
            className="group relative min-h-[180px] overflow-hidden rounded-[8px] border border-white/10 bg-[#0B0F17] p-5 transition-colors hover:border-[#F04A24]"
          >
            {contact.image && (
              <>
                <Image
                  src={contact.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-35 transition-opacity group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/15" />
              </>
            )}
            <span className="relative z-10 block text-sm tracking-[0.25em] uppercase text-[#CFCFCF] transition-colors group-hover:text-[#F04A24]">
              {contact.label}
            </span>
            <span className="relative z-10 mt-16 block text-lg font-semibold leading-snug text-white">
              {contact.detail}
            </span>
          </Link>
        ))}
      </motion.div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[#222222] pt-8 md:flex-row md:items-center md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-wide text-[#CFCFCF]"
        >
          © 2026 — All rights reserved
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-6"
        >
          {contactLinks.slice(0, 3).map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="text-sm text-[#CFCFCF] tracking-wide uppercase hover:text-[#F04A24] transition-colors duration-0"
            >
              {social.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
