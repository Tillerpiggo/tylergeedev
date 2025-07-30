"use client"

import { ProjectSection } from "@/components/project-section"
import { MobileMenu } from "@/components/mobile-menu"
import { VerbDropdown } from "@/components/verb-dropdown"
import { useMode } from "@/contexts/mode-context"
import Link from "next/link"
import { projects, writtenContent, composedContent } from "@/data/projects"
import { useState, useEffect } from "react"

export function DevPage() {
  const [selectedVerb, setSelectedVerb] = useState("built")
  const { mode, setMode } = useMode()

  const renderContent = () => {
    switch (selectedVerb) {
      case "built":
        return (
          <div className="flex flex-col space-y-0">
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>
        )
      case "written":
        return (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-8 leading-normal pb-2">
              {writtenContent.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {writtenContent.description}
            </p>
          </div>
        )
      case "composed":
        return (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-8 leading-normal pb-2">
              {composedContent.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {composedContent.description}
            </p>
          </div>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    // Restore scroll position when returning from project detail
    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition')
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition))
      sessionStorage.removeItem('homeScrollPosition')
    }

    // Save scroll position when navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
    }

    const handleScroll = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-8">
      <header className="flex justify-between items-center mb-20 py-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-medium text-foreground">Tyler Gee</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-wrap items-center gap-6">
            <Link href="/resume" className="text-foreground hover:underline transition-all">
              Resume
            </Link>
            <Link href="https://www.linkedin.com/in/tyler-gee-998b46260/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline transition-all">
              LinkedIn
            </Link>
            <Link href="https://github.com/Tillerpiggo" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline transition-all">
              GitHub
            </Link>
            <a href="mailto:tyler.gee333@gmail.com" className="text-foreground hover:underline transition-all">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 bg-neutral-800/80 rounded-full p-1 backdrop-blur-sm border border-neutral-700">
            <button
              onClick={() => setMode('dev')}
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                mode === 'dev'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-700/50'
              }`}
            >
              Dev Mode
            </button>
            <button
              onClick={() => setMode('dream')}
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                mode === 'dream'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-700/50'
              }`}
            >
              Dream Mode
            </button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <section className="pt-16 pb-8 flex flex-col items-start text-left">
        <div className="mb-2">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-16 leading-normal pb-2">Hi. I'm Tyler, a software engineer.</h1>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent inline leading-normal pb-1">Here's what I've </h2>
            <VerbDropdown onVerbChange={setSelectedVerb} />
          </div>
        </div>
      </section>

      {renderContent()}

    </main>
  )
}