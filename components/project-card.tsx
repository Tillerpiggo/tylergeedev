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
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-md">
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
        <p className="mt-2 text-sm text-neutral-600">{project.shortDescription}</p>

        <div className="mt-4 flex items-center justify-end gap-2 z-20">
          <Button variant="outline" size="sm" className="rounded-full" asChild onClick={(e) => e.stopPropagation()}>
            <Link href={project.githubUrl}>
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </Link>
          </Button>

          <Button variant="outline" size="sm" className="rounded-full" asChild onClick={(e) => e.stopPropagation()}>
            <Link href={project.liveUrl}>
              <ExternalLink className="h-4 w-4 mr-1" />
              View Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
