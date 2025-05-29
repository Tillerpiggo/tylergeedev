"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function GlowButton({ className, children, ...props }: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-70 blur-md"
        animate={{
          background: [
            "linear-gradient(90deg, #ff8a00, #e52e71)",
            "linear-gradient(90deg, #e52e71, #7721ff)",
            "linear-gradient(90deg, #7721ff, #00c8ff)",
            "linear-gradient(90deg, #00c8ff, #00e99f)",
            "linear-gradient(90deg, #00e99f, #ff8a00)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          opacity: isHovered ? 0.85 : 0.6,
          scale: isHovered ? 1.08 : 1.04,
        }}
      />

      {/* Actual button */}
      <Button
        className={cn("relative z-10", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
