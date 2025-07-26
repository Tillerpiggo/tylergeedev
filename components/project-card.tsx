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
      className="group relative overflow-hidden rounded-xl border border-neutral-700 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/30 hover:border-neutral-600 hover:-translate-y-1 p-8"
    >
      <Link href={`/project/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {project.title}</span>
      </Link>

      <div className="flex flex-col space-y-6">
        <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-base text-neutral-400 line-clamp-2 leading-relaxed">{project.shortDescription}</p>
        </div>
        
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-secondary/80 text-secondary-foreground rounded-full border border-border/50 transition-colors duration-300 group-hover:bg-secondary"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-sm text-neutral-400">+{project.techStack.length - 4} more</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 z-20">
            <Button variant="outline" size="sm" className="h-9 px-4 transition-all duration-300 hover:scale-105" asChild onClick={(e) => e.stopPropagation()}>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Link>
            </Button>

            {project.liveUrl && (
            <Button variant="outline" size="sm" className="h-9 px-4 transition-all duration-300 hover:scale-105" asChild onClick={(e) => e.stopPropagation()}>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </Link>
            </Button>
            )}
          </div>

          {(project.commits !== undefined) && (
            <div className="text-sm text-neutral-400 whitespace-nowrap">
              {project.commits.toLocaleString()} commits
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
