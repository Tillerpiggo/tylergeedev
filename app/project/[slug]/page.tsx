import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <Image src={project.coverImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button size="sm" className="bg-neutral-800 hover:bg-neutral-700" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About this Project</h2>
        <div className="prose max-w-none">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-neutral-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {project.videoUrl && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Demo Video</h2>
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
            <iframe
              src={project.videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              title={`${project.title} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-neutral-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
