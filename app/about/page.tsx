import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { AboutServices } from "@/components/about-services"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <AboutServices />
      <Footer />
    </main>
  )
}
