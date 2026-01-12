"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  { title: "Project One", category: "Brand & Motion", slug: "project-one" },
  { title: "Project Two", category: "Interactive Web Experience", slug: "project-two" },
  { title: "Project Three", category: "Creative Technology Platform", slug: "project-three" },
  { title: "Project Four", category: "Editorial Website", slug: "project-four" },
  { title: "Project Five", category: "Digital Product Interface", slug: "project-five" },
  { title: "Project Six", category: "Experimental Interaction", slug: "project-six" },
  { title: "Project Seven", category: "Visual Identity System", slug: "project-seven" },
  { title: "Project Eight", category: "Immersive Landing Page", slug: "project-eight" },
  { title: "Project Nine", category: "Motion-Led Portfolio", slug: "project-nine" },
  { title: "Project Ten", category: "Conceptual Web Experiment", slug: "project-ten" },
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
            image={`/placeholder.svg?height=600&width=800&query=${encodeURIComponent(project.category + " dark minimal")}`}
            href={`/projects/${project.slug}`}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
