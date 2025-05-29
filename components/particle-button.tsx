"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ParticleButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function ParticleButton({ className, children, ...props }: ParticleButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonDimensions, setButtonDimensions] = useState({ width: 0, height: 0 })

  // Update button dimensions when mounted
  useEffect(() => {
    if (buttonRef.current) {
      setButtonDimensions({
        width: buttonRef.current.offsetWidth,
        height: buttonRef.current.offsetHeight,
      })
    }
  }, [])

  // Generate particles on click
  const generateParticles = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 500)
  }

  // Colors for particles
  const particleColors = [
    "#ff8a00", // orange
    "#e52e71", // pink
    "#7721ff", // purple
    "#00c8ff", // blue
    "#00e99f", // green
  ]

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        className={cn("relative z-10", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={generateParticles}
        {...props}
      >
        {children}
      </Button>

      {/* Particles that emit from the button */}
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <>
            {/* Generate particles around the button */}
            {Array.from({ length: isClicked ? 20 : 8 }).map((_, i) => {
              // Random position around the button
              const side = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
              let x = 0,
                y = 0

              if (side === 0) {
                // top
                x = Math.random() * buttonDimensions.width
                y = 0
              } else if (side === 1) {
                // right
                x = buttonDimensions.width
                y = Math.random() * buttonDimensions.height
              } else if (side === 2) {
                // bottom
                x = Math.random() * buttonDimensions.width
                y = buttonDimensions.height
              } else {
                // left
                x = 0
                y = Math.random() * buttonDimensions.height
              }

              // Random size, angle, and distance
              const size = Math.random() * 6 + 2
              const angle = Math.random() * Math.PI * 2
              const distance = isClicked ? Math.random() * 100 + 50 : Math.random() * 30 + 10

              // Calculate end position
              const endX = x + Math.cos(angle) * distance
              const endY = y + Math.sin(angle) * distance

              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    x,
                    y,
                    backgroundColor: particleColors[Math.floor(Math.random() * particleColors.length)],
                  }}
                  animate={{
                    x: endX,
                    y: endY,
                    opacity: [1, 0],
                    scale: isClicked ? [1, 0.5] : [0.8, 1.2, 0],
                  }}
                  transition={{
                    duration: isClicked ? 0.8 : 1.5,
                    ease: "easeOut",
                  }}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )
            })}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
