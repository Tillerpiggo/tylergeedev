"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { AnimatedArrow } from "@/components/animated-arrow"
import type { Project } from "@/types/project"

interface ProjectSectionProps {
  project: Project
}


export function ProjectSection({ project }: ProjectSectionProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="group">
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent tracking-tight">{project.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg text-muted-foreground">{project.date}</span>
            <AnimatedArrow href={`/project/${project.slug}`} />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <Link href={`/project/${project.slug}`} className="block">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg object-cover shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-border/10 cursor-pointer"
          />
        </Link>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
          {showDetails ? 'Hide description' : 'Show description'}
        </button>

        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          {showDetails && (
            <div className="space-y-4 pt-4">
              <p className="text-base text-muted-foreground leading-relaxed">{project.shortDescription}</p>
              
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary/80 text-secondary-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              {(project.commits !== undefined) && (
                <div className="flex justify-start">
                  <span className="text-sm text-muted-foreground">
                    {project.commits.toLocaleString()} commits
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}