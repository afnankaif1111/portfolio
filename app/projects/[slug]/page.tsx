import { Navigation } from "@/components/navigation"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyContent } from "@/components/case-study-content"
import { CaseStudyGallery } from "@/components/case-study-gallery"
import { NextProject } from "@/components/next-project"
import { Footer } from "@/components/footer"

const projectsData: Record<
  string,
  {
    title: string
    category: string
    year: string
    description: string
    image: string
    content: string[]
    gallery: string[]
    next: { title: string; slug: string }
  }
> = {
  "project-one": {
    title: "Project One",
    category: "Brand & Motion",
    year: "2025",
    description: "A comprehensive brand identity and motion design system for a forward-thinking tech company.",
    image: "/dark-abstract-brand-motion-design.jpg",
    content: [
      "The challenge was defining structure without restricting creativity. We needed to build a system that felt both consistent and alive.",
      "Interaction was treated as feedback, not decoration. Every animation serves a purpose, reinforcing the brand's commitment to precision and innovation.",
      "Motion was used only where it improved clarity. We established a vocabulary of subtle movements that guide the user's attention without distraction.",
    ],
    gallery: ["/dark-brand-identity-mockup.jpg", "/dark-motion-graphics-frame.jpg", "/dark-typography-specimen.jpg"],
    next: { title: "Project Two", slug: "project-two" },
  },
  "project-two": {
    title: "Project Two",
    category: "Interactive Web Experience",
    year: "2025",
    description: "An immersive web experience that pushes the boundaries of browser-based interaction.",
    image: "/dark-interactive-web-experience-3d.jpg",
    content: [
      "The goal was to create something that felt native to the web while delivering an experience typically reserved for native applications.",
      "We developed custom shaders and interaction patterns that respond instantly to user input, creating a sense of direct manipulation.",
      "Performance was non-negotiable. Every frame matters when you're building at 60fps.",
    ],
    gallery: ["/dark-web-interface-design.jpg", "/dark-3d-web-experience.jpg", "/dark-interactive-prototype.jpg"],
    next: { title: "Project Three", slug: "project-three" },
  },
  "project-three": {
    title: "Project Three",
    category: "Creative Technology Platform",
    year: "2024",
    description: "A platform that bridges the gap between creativity and technology.",
    image: "/dark-creative-technology-platform.jpg",
    content: [
      "Building tools for creators requires understanding both the technical constraints and creative aspirations of the users.",
      "We designed an interface that gets out of the way, letting the work speak for itself.",
      "The platform scales from individual artists to enterprise teams without losing its core simplicity.",
    ],
    gallery: ["/dark-platform-dashboard.jpg", "/dark-creative-tools-interface.jpg", "/dark-technology-platform.jpg"],
    next: { title: "Project Four", slug: "project-four" },
  },
  "project-four": {
    title: "Project Four",
    category: "Editorial Website",
    year: "2024",
    description: "A digital publication that prioritizes reading experience above all else.",
    image: "/dark-editorial-website-magazine.jpg",
    content: [
      "Typography leads. Every decision was made in service of the written word.",
      "The design system adapts to content length and type, ensuring each piece gets the presentation it deserves.",
      "Navigation is minimal by design. Readers should be absorbed in the content, not the interface.",
    ],
    gallery: ["/dark-editorial-typography.jpg", "/dark-magazine-layout-design.jpg", "/placeholder.svg?height=800&width=1200"],
    next: { title: "Project Five", slug: "project-five" },
  },
  "project-five": {
    title: "Project Five",
    category: "Digital Product Interface",
    year: "2024",
    description: "A product interface that balances power with approachability.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "Complex functionality doesn't require complex interfaces. We stripped away everything non-essential.",
      "Micro-interactions provide constant feedback, making the product feel responsive and alive.",
      "Accessibility was built in from day one, not bolted on afterward.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project Six", slug: "project-six" },
  },
  "project-six": {
    title: "Project Six",
    category: "Experimental Interaction",
    year: "2024",
    description: "An experimental project exploring new paradigms of digital interaction.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "Experimentation requires the freedom to fail. This project was about pushing boundaries.",
      "We explored cursor-based interactions that blur the line between interface and art.",
      "The lessons learned here inform all our commercial work.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project Seven", slug: "project-seven" },
  },
  "project-seven": {
    title: "Project Seven",
    category: "Visual Identity System",
    year: "2023",
    description: "A visual identity system built for scale and flexibility.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "Identity systems need rules that enable creativity, not restrict it.",
      "We developed a modular approach that allows for infinite variation within a cohesive framework.",
      "The system includes guidelines for everything from typography to animation timing.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project Eight", slug: "project-eight" },
  },
  "project-eight": {
    title: "Project Eight",
    category: "Immersive Landing Page",
    year: "2023",
    description: "A landing page that tells a story through scroll and interaction.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "Landing pages have seconds to make an impression. Every moment counts.",
      "We choreographed the scroll experience like a film, with precise timing and reveals.",
      "Performance optimization ensured the experience was smooth across all devices.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project Nine", slug: "project-nine" },
  },
  "project-nine": {
    title: "Project Nine",
    category: "Motion-Led Portfolio",
    year: "2023",
    description: "A portfolio where motion is the primary design language.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "When your work is about motion, your portfolio must embody that philosophy.",
      "Every transition was crafted to demonstrate capability while maintaining usability.",
      "The result is a site that serves as both portfolio and proof of concept.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project Ten", slug: "project-ten" },
  },
  "project-ten": {
    title: "Project Ten",
    category: "Conceptual Web Experiment",
    year: "2023",
    description: "A conceptual experiment that questions traditional web conventions.",
    image: "/placeholder.svg?height=900&width=1600",
    content: [
      "What happens when you remove all the expected patterns from a website?",
      "This experiment challenged us to rethink navigation, hierarchy, and flow.",
      "The insights continue to influence how we approach every project.",
    ],
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    next: { title: "Project One", slug: "project-one" },
  },
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projectsData[slug] || projectsData["project-one"]

  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <CaseStudyHero
        title={project.title}
        category={project.category}
        year={project.year}
        description={project.description}
        image={project.image}
      />
      <CaseStudyContent content={project.content} />
      <CaseStudyGallery images={project.gallery} />
      <NextProject title={project.next.title} slug={project.next.slug} />
      <Footer />
    </main>
  )
}
