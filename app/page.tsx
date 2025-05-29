import { AnimatedText } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { GlowButton } from "@/components/glow-button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <header className="flex justify-between items-center mb-16">
        <h2 className="text-xl font-medium">Tyler Gee</h2>
      </header>

      <section className="py-16 flex flex-col items-start text-left">
        <div className="mb-6">
          <AnimatedText text="Hey There 👋" className="text-5xl md:text-6xl font-bold" />
        </div>
        <h2 className="text-xl md:text-2xl text-neutral-600 mb-10">
          I'm a full-stack developer. I build things I'm passionate about.
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <GlowButton size="lg" className="bg-neutral-800 hover:bg-neutral-700" asChild>
            <Link href="/resume">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Link>
          </GlowButton>

          <div className="flex gap-2">
            <Button variant="outline" className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10" asChild>
              <Link href="https://www.linkedin.com/in/tyler-gee-998b46260/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" className="border-[#333333] text-[#333333] hover:bg-[#333333]/10" asChild>
              <Link href="https://github.com/Tillerpiggo" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" className="border-neutral-300" asChild>
              <a href="mailto:tyler.gee333@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
