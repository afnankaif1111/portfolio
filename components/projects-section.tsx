"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Movie Ticket Booking Platform",
    category: "Full Stack Web Application",
    slug: "project-one",
    image: "/movie-ticket-home.png",
  },
  {
    title: "Real-Time Multiplayer Chess",
    category: "Interactive Web Application",
    slug: "project-two",
    image: "/chess-app-cover.png",
  },
  {
    title: "AI Wearable Stroke Detection System",
    category: "AI & Healthcare Technology",
    slug: "project-three",
    image: "/healthmonitor-dashboard.png",
  },
  {
    title: "Space Shooter",
    category: "Frontend Game Development",
    slug: "project-four",
    image: "/space-shooter-landing.png",
  },
  {
    title: "Recommendation Engine",
    category: "Machine Learning / Personalization System",
    slug: "project-five",
    image: "/recommendation-engine-cover.png",
  },
  {
    title: "Cafe E-Commerce & Food Delivery Platform",
    category: "Full-Stack Web Application",
    slug: "project-six",
    image: "/ecommerce-hero.png",
  },
]

export function ProjectsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="font-[family-name:var(--font-inter-tight)] text-sm font-medium tracking-[0.3em] uppercase text-[#CFCFCF]">
          Selected Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            image={project.image ?? `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(project.category + " dark minimal")}`}
            href={`/projects/${project.slug}`}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
