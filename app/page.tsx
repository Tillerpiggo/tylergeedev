import { ProjectSection } from "@/components/project-section"
import { MobileMenu } from "@/components/mobile-menu"
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
        <MobileMenu />
      </header>

      <section className="py-20 flex flex-col items-start text-left">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Hi. Here's what I've built.</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col space-y-16">
          {projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="py-16 flex justify-center">
        <a 
          href="mailto:tyler.gee333@gmail.com" 
          className="text-muted-foreground hover:text-foreground hover:underline transition-colors duration-300"
        >
          contact me via email
        </a>
      </footer>
    </main>
  )
}
