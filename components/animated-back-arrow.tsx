"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"

interface AnimatedBackArrowProps {
  onClick: () => void
}

export function AnimatedBackArrow({ onClick }: AnimatedBackArrowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3 px-0 py-2 text-neutral-300 hover:text-foreground transition-colors duration-300 cursor-pointer bg-transparent border-none"
      aria-label="Back to projects"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-all duration-300">
        <ChevronLeft 
          className={`w-4 h-4 transition-all duration-300 ${
            isHovered ? '-translate-x-0.5' : ''
          }`}
        />
        
        {/* Subtle animated glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-l from-primary/20 to-secondary/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Right-to-left animation indicator */}
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-1000 ${
          isHovered ? '-translate-x-6 opacity-0' : '-translate-x-2 opacity-60'
        }`} />
      </div>
      
      <span className="text-sm font-medium">Back to Projects</span>
    </button>
  )
}