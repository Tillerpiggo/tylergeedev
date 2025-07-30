"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface VerbDropdownProps {
  onVerbChange?: (verb: string) => void
}

export function VerbDropdown({ onVerbChange }: VerbDropdownProps) {
  const [selectedVerb, setSelectedVerb] = useState("built")
  const [isOpen, setIsOpen] = useState(false)

  const verbs = [
    { value: "built", label: "built" },
    { value: "written", label: "written" },
    { value: "composed", label: "composed" }
  ]

  const handleVerbSelect = (verb: string) => {
    setSelectedVerb(verb)
    setIsOpen(false)
    onVerbChange?.(verb)
  }

  return (
    <div className="inline-block relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl md:text-3xl font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-600 hover:bg-neutral-800 transition-colors relative -top-1"
      >
        {selectedVerb}
        <ChevronDown className={`h-4 w-4 text-neutral-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50 min-w-full">
          {verbs.map((verb) => (
            <button
              key={verb.value}
              onClick={() => handleVerbSelect(verb.value)}
              className="block w-full text-left px-4 py-3 text-lg font-semibold text-white hover:bg-neutral-800 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {verb.label}
            </button>
          ))}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}