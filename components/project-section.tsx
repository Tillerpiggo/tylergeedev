"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink } from "lucide-react"
import { AnimatedArrow } from "@/components/animated-arrow"
import type { Project } from "@/types/project"

interface ProjectSectionProps {
  project: Project
}

const getProjectBackgroundColor = (coverImage: string) => {
  if (coverImage.includes('hellafocused')) {
    return 'bg-gradient-to-b from-slate-950/30 to-transparent'  // Dark blue from the interface
  }
  if (coverImage.includes('cabinvisuals')) {
    return 'bg-gradient-to-b from-indigo-950/30 to-transparent'  // Deep blue/purple from the interface
  }
  if (coverImage.includes('cabinaudio')) {
    return 'bg-gradient-to-b from-teal-950/30 to-transparent'  // Teal from the EQ curve
  }
  if (coverImage.includes('cabinEQ')) {
    return 'bg-gradient-to-b from-emerald-950/30 to-transparent'  // Green from the EQ interface
  }
  if (coverImage.includes('autobid')) {
    return 'bg-gradient-to-b from-blue-950/30 to-transparent'  // Blue from the interface
  }
  if (coverImage.includes('racquetpass')) {
    return 'bg-gradient-to-b from-blue-950/30 to-transparent'  // Blue from the primary button
  }
  if (coverImage.includes('todoapp')) {
    return 'bg-gradient-to-b from-red-950/30 to-transparent'  // Coral/red from the iOS interface
  }
  return 'bg-gradient-to-b from-neutral-950/30 to-transparent'
}


export function ProjectSection({ project }: ProjectSectionProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  return (
    <div className={`group transition-all duration-1000 ${getProjectBackgroundColor(project.coverImage || '')} w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]`}>
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-16">
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent tracking-tight">{project.title}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg text-neutral-300">{project.date}</span>
            <AnimatedArrow href={`/project/${project.slug}`} />
          </div>
        </div>
      </div>
      
      
      <div ref={imageRef} className={`mb-6 transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
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
      
      <div className="flex items-start justify-between mt-4">
        <div className="space-y-4 flex-1 mr-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-neutral-300 hover:text-foreground transition-colors duration-300"
          >
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`} />
            {showDetails ? 'Hide description' : 'Show description'}
          </button>

          <div className="overflow-hidden transition-all duration-300 ease-in-out">
            {showDetails && (
              <div className="space-y-4">
                <p className="text-base text-neutral-300 leading-relaxed">{project.shortDescription}</p>
                
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
                    <span className="text-sm text-neutral-300">
                      {project.commits.toLocaleString()} commits
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-foreground hover:underline transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </Link>

          {project.liveUrl && (
            <Link 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-foreground hover:underline transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Link
            </Link>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}