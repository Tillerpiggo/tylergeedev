"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text, isAnimating])

  return (
    <h1 className={cn("relative", className)}>
      {displayedText}
      {isAnimating && <span className="inline-block w-1 h-8 ml-1 bg-neutral-800 animate-blink" />}
    </h1>
  )
}
