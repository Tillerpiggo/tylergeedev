"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop menu */}
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

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <Link 
            href="/resume" 
            className="text-foreground hover:underline transition-all py-2" 
            onClick={closeMenu}
          >
            Resume
          </Link>
          <Link 
            href="https://www.linkedin.com/in/tyler-gee-998b46260/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:underline transition-all py-2"
            onClick={closeMenu}
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/Tillerpiggo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground hover:underline transition-all py-2"
            onClick={closeMenu}
          >
            GitHub
          </Link>
          <a 
            href="mailto:tyler.gee333@gmail.com" 
            className="text-foreground hover:underline transition-all py-2"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )
}