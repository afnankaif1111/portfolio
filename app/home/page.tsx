import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ProjectsSection } from "@/components/projects-section"
import { MarqueeSection } from "@/components/marquee-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <MarqueeSection />
      <Footer />
    </main>
  )
}
