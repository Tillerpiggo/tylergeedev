"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  selectedVerb: string
}

export function ScrollIndicator({ selectedVerb }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling down a bit
      if (window.scrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getScrollText = () => {
    switch (selectedVerb) {
      case 'written':
        return 'Scroll to see blogs'
      case 'composed':
        return 'Scroll to see art'
      default:
        return 'Scroll to see projects'
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      <p className="text-neutral-300 text-sm mb-2 font-medium">
        {getScrollText()}
      </p>
      <div className="animate-bounce">
        <ChevronDown className="h-5 w-5 text-neutral-300" />
      </div>
    </div>
  )
}