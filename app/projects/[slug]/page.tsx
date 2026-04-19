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
    title: "Movie Ticket Booking Platform",
    category: "Full Stack Web Application",
    year: "2025",
    description: "A scalable movie ticket booking platform with secure authentication, real-time seat management, and seamless payment integration.",
    image: "/movie-ticket-home.png",
    content: [
      "A full-stack movie ticket booking system designed to handle real-world scenarios like seat selection, concurrent bookings, and secure user authentication. The platform delivers a smooth and intuitive booking experience from browsing movies to final checkout.",
      
      "The backend is built using Express.js and MongoDB, following a modular and scalable architecture. Authentication is powered by Clerk, while Stripe integration enables secure online payments. Cloudinary is used for efficient media storage, and Nodemailer handles transactional emails such as booking confirmations.",
      
      "The system is event-driven and optimized for performance. Inngest is used for background workflows like sending emails and handling async processes, ensuring the main application remains responsive under load.",
      
      "Special focus was given to reliability and user experience. Seat availability is dynamically managed to prevent conflicts, and the API is structured with clean separation of concerns, making the system production-ready and easy to scale."
    ],
    gallery: [
      "/movie-ticket-home.png",
      "/movie-ticket-details.png",
      "/movie-ticket-seats.png",
      "/movie-ticket-payment.png"
    ],
    next: { title: "Real-Time Multiplayer Chess", slug: "project-two" }
  },
  "project-two": {
    title: "Real-Time Multiplayer Chess",
    category: "Interactive Web Application",
    year: "2025",
    description: "A real-time multiplayer chess platform with room-based matchmaking, live synchronization, and seamless gameplay experience.",
    image: "/chess-app-cover.png",
    content: [
      "A real-time chess application built to deliver smooth and synchronized gameplay between players across different devices. Users can create or join rooms instantly, enabling private matches with minimal latency.",
      
      "The system uses WebSockets for bidirectional communication, ensuring every move is reflected in real time for both players. Game state is centrally managed and synchronized to prevent inconsistencies, with strict validation to ensure legal moves and fair gameplay.",
      
      "Room-based architecture allows scalable matchmaking, where each room maintains its own isolated game state. This ensures multiple games can run concurrently without interference, making the system efficient and extensible.",
      
      "Performance and responsiveness were key priorities. The application minimizes latency, handles reconnect scenarios gracefully, and ensures a consistent experience even under unstable network conditions."
    ],
    gallery: [
      "/chess-app-cover.png",
      "/chess-home-screen.png",
      "/chess-create-room-screen.png",
      "/chess-game-screen.png"
    ],
    next: { title: "AI Wearable Stroke Detection System", slug: "project-three" }
  },
  "project-three": {
    title: "AI Wearable Stroke Detection System",
    category: "AI & Healthcare Technology",
    year: "2024",
    description: "A real-time stroke detection system using wearable sensor data and machine learning for early risk prediction.",
    image: "/healthmonitor-dashboard.png",
    content: [
      "An AI-powered healthcare system designed to detect early signs of stroke using real-time data from wearable devices such as smartwatches. The system integrates with Google Fit and Samsung Health APIs to continuously monitor vital signals like heart rate, activity levels, and physiological patterns.",
      
      "Machine learning models analyze incoming time-series data to predict potential stroke risks before critical events occur. The system is optimized for low-latency inference, enabling near real-time alerts and proactive intervention.",
      
      "Edge computation is leveraged to process data closer to the device, reducing dependency on cloud infrastructure and ensuring faster response times. This approach also enhances privacy by minimizing sensitive data transmission.",
      
      "The platform includes intelligent alert mechanisms that notify users or caregivers instantly in case of detected anomalies. The architecture is scalable, reliable, and designed for integration with modern digital health ecosystems."
    ],
    gallery: [
      "/healthmonitor-dashboard.png",
      "/healthmonitor-analytics.png",
      "/healthmonitor-connect.png"
    ],
    next: { title: "Space Shooter", slug: "project-four" }
  },
  "project-four": {
    title: "Space Shooter",
    category: "Frontend Game Development",
    year: "2024",
    description: "A high-performance browser-based space shooter inspired by Chicken Invaders, built with advanced game architecture and real-time rendering.",
    image: "/space-shooter-landing.png",
    content: [
      "A fast-paced 2D space shooter built using modern frontend technologies, focusing on smooth gameplay, responsive controls, and optimized rendering.",
      
      "The architecture follows AAA game engine patterns including a centralized game loop, event-driven communication, and a finite state machine for seamless transitions between menu, gameplay, pause, and game-over states.",
      
      "Performance is a core priority. Object pooling, spatial partitioning, and efficient entity management ensure stable 60 FPS gameplay even with hundreds of active entities on screen.",
      
      "Players control a spaceship with fluid movement and shooting mechanics, facing multiple enemy types, power-ups, and boss fights, all enhanced with particle effects, screen shake, and post-processing visuals."
    ],
    gallery: [
      "/space-shooter-landing.png",
      "/space-shooter-architecture.png",
      "/space-shooter-gameplay-1.png",
      "/space-shooter-gameplay-2.png"
    ],
    next: { title: "Recommendation Engine", slug: "project-five" }
  },
  "project-five": {
    title: "Recommendation Engine",
    category: "Machine Learning / Personalization System",
    year: "2024",
    description: "A smart recommendation engine leveraging user clustering, interaction analysis, and caption understanding to deliver highly personalized content.",
    image: "/recommendation-engine-cover.png",
    content: [
      "Built a hybrid recommendation system combining user clustering and behavioral interaction analysis to identify patterns and similarities across users.",
      "Implemented caption analysis using NLP techniques to understand content semantics and improve recommendation relevance.",
      "Designed the system to continuously learn from user interactions, making recommendations more accurate and adaptive over time.",
      "Future work focuses on integrating an ethical recommendation layer with well-being scoring and intelligent content filtering to promote healthier user engagement and reduce exposure to harmful or addictive content patterns."
    ],
    gallery: [
      "/recommendation-engine-cover.png",
      "/recommendation-feed.png",
      "/recommendation-wellbeing.png",
      "/recommendation-mindful-tips.png",
      "/recommendation-profile-switcher.png",
    ],
    next: { title: "Cafe E-Commerce & Food Delivery Platform", slug: "project-six" },
  },
  "project-six": {
    title: "Cafe E-Commerce & Food Delivery Platform",
    category: "Full-Stack Web Application",
    year: "2024",
    description: "A complete cafe ordering platform enabling seamless food discovery, online ordering, and real-time delivery experience.",
    image: "/ecommerce-hero.png",
    content: [
      "Developed a full-stack e-commerce platform for a cafe, allowing users to browse menus, customize orders, and place them efficiently.",
      "Implemented a smooth ordering and checkout flow with dynamic cart management and real-time updates for an intuitive user experience.",
      "Integrated delivery tracking and order status updates to keep users informed throughout the process.",
      "Focused on performance and responsive design to ensure a seamless experience across devices."
    ],
    gallery: [
      "/ecommerce-hero.png",
      "/ecommerce-menu.png",
      "/ecommerce-signin.png",
      "/ecommerce-cart-single.png",
      "/ecommerce-cart-multi.png",
      "/ecommerce-checkout.png",
    ],
    next: { title: "Movie Ticket Booking Platform", slug: "project-one" },
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
