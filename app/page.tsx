import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { GlowButton } from "@/components/glow-button"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-8">
      <header className="flex justify-between items-center mb-20 py-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium text-foreground">Tyler Gee</h2>
        </div>
      </header>

      <section className="py-20 flex flex-col items-start text-left">
        <div className="mb-8">
          <AnimatedText text="Hi. I put stuff I've built here." className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent" />
        </div>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          I&apos;m a software dev obsessed with music and meaning.
        </h2>

        <div className="flex flex-wrap items-center gap-6">
          <Link href="/resume" className="text-foreground hover:underline transition-all">
            Resume
          </Link>
          <Link href="https://www.linkedin.com/in/tyler-gee-998b46260/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline transition-all">
            LinkedIn
          </Link>
          <Link href="https://github.com/Tillerpiggo" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline transition-all">
            GitHub
          </Link>
          <a href="mailto:tyler.gee333@gmail.com" className="text-foreground hover:underline transition-all">
            Email
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
