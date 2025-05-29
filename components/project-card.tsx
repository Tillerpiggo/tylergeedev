"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-md"
    >
      <Link href={`/project/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {project.title}</span>
      </Link>

      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-4">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-600 flex-grow">{project.shortDescription}</p>

        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-3 mb-2 flex flex-wrap gap-1.5 items-center">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-neutral-500">+ more</span>
            )}
          </div>
        )}

        <div className="mt-auto pt-2 flex flex-col gap-2 z-20">
          <div className="flex items-center justify-end gap-2">
            <Button variant="outline" size="sm" className="rounded-full" asChild onClick={(e) => e.stopPropagation()}>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </Link>
            </Button>

            {project.liveUrl && (
            <Button variant="outline" size="sm" className="rounded-full" asChild onClick={(e) => e.stopPropagation()}>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                View Project
              </Link>
            </Button>
            )}
          </div>

          {(project.commits !== undefined) && (
            <div className="text-xs text-neutral-500 text-right mt-1">
              {project.commits !== undefined && (
                <span>{project.commits.toLocaleString()} commits</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
