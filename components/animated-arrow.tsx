"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface AnimatedArrowProps {
  href: string
}

export function AnimatedArrow({ href }: AnimatedArrowProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 cursor-pointer"
      aria-label="View project details"
    >
      <ChevronRight 
        className={`w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 ${
          isHovered ? 'translate-x-0.5' : ''
        }`}
      />
      
      {/* Subtle animated glow effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Left-to-right animation indicator */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-1000 ${
        isHovered ? 'translate-x-6 opacity-0' : 'translate-x-2 opacity-60'
      }`} />
    </Link>
  )
}