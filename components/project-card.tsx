"use client"

import Image from "next/image"
import Link from "next/link"
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
            className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-base text-neutral-400 line-clamp-2 leading-relaxed mb-4">{project.shortDescription}</p>
          
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center mb-4">
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 z-20">
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-foreground hover:underline transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </Link>

              {project.liveUrl && (
                <Link 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-foreground hover:underline transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Link
                </Link>
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
    </div>
  )
}
