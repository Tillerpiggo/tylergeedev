"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackArrow } from "@/components/animated-back-arrow"
import { X, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { notFound, useRouter } from "next/navigation"
import { useState } from "react"
import type { NextPage } from 'next';

const getProjectBackgroundColor = (coverImage: string) => {
  if (coverImage.includes('hellafocused')) {
    return 'bg-gradient-to-b from-slate-950/30 to-transparent'
  }
  if (coverImage.includes('cabinvisuals')) {
    return 'bg-gradient-to-b from-indigo-950/30 to-transparent'
  }
  if (coverImage.includes('cabinaudio')) {
    return 'bg-gradient-to-b from-teal-950/30 to-transparent'
  }
  if (coverImage.includes('cabinEQ')) {
    return 'bg-gradient-to-b from-emerald-950/30 to-transparent'
  }
  if (coverImage.includes('autobid')) {
    return 'bg-gradient-to-b from-blue-950/30 to-transparent'
  }
  if (coverImage.includes('racquetpass')) {
    return 'bg-gradient-to-b from-blue-950/30 to-transparent'
  }
  if (coverImage.includes('todoapp')) {
    return 'bg-gradient-to-b from-red-950/30 to-transparent'
  }
  return 'bg-gradient-to-b from-neutral-950/30 to-transparent'
}

interface PageParams {
  slug: string;
}

const ProjectPage: NextPage<{ params: PageParams }> = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const router = useRouter()

  if (!project) {
    notFound()
  }

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleBackClick = () => {
    sessionStorage.setItem('homeScrollPosition', sessionStorage.getItem('homeScrollPosition') || '0')
    router.back()
  }

  return (
    <div className={`min-h-screen ${getProjectBackgroundColor(project.coverImage || '')} w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]`}>
      <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <AnimatedBackArrow onClick={handleBackClick} />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        <div className="flex items-center gap-4">
          <Link 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-foreground hover:underline transition-colors duration-300"
          >
            Code
          </Link>
          {project.liveUrl && (
            <Link 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-foreground hover:underline transition-colors duration-300"
            >
              Link
            </Link>
          )}
        </div>
      </div>

      <div className="relative w-full mb-8">
        <Image 
          src={project.coverImage || "/placeholder.svg"} 
          alt={project.title} 
          width={1200} 
          height={600} 
          className="w-full h-auto rounded-lg object-contain" 
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.commits !== undefined && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Project Stats</h2>
          <p className="text-neutral-300">Total Commits: {project.commits.toLocaleString()}</p>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About this Project</h2>
        <div className="prose max-w-none">
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Gallery</h2>
        {project.gallery && project.gallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(image || "/placeholder.svg")}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold">View Image</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-300">No images in gallery yet.</p>
        )}
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
            <li key={index} className="text-neutral-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white p-2 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-black hover:bg-neutral-200"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close image viewer</span>
            </Button>
            <Image
              src={selectedImage}
              alt="Enlarged project image"
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
              style={{ maxHeight: "calc(90vh - 4rem)" }}
            />
          </div>
        </div>
      )}
      </main>
    </div>
  )
}

export default ProjectPage
