import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Creative Portfolio — Bold Digital Experiences",
  description:
    "A senior creative technologist crafting cinematic, editorial digital experiences with precision and intention.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased text-white">
        {/* Fixed global background */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/DDCDDAA0-B510-478B-8D2A-F72F802F115B_1_201_a.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <CustomCursor />
        <PageTransition />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
