"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { useMode } from "@/contexts/mode-context"

export function DreamPage() {
  const [showOldStuff, setShowOldStuff] = useState(false)
  const { mode, setMode } = useMode()

  return (
    <div className="min-h-screen bg-stone-50 font-mono text-stone-800">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 relative">
          <div className="absolute top-0 right-0">
            <div className="flex items-center gap-2 bg-stone-200/80 rounded-full p-1 backdrop-blur-sm border border-stone-300">
              <button
                onClick={() => setMode('dev')}
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  mode === 'dev'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-stone-600 hover:text-stone-800 hover:bg-stone-300/50'
                }`}
              >
                Dev Mode
              </button>
              <button
                onClick={() => setMode('dream')}
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  mode === 'dream'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-stone-600 hover:text-stone-800 hover:bg-stone-300/50'
                }`}
              >
                Dream Mode
              </button>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight pt-36">Hi. I'm Tyler.</h1>
          <p className="text-lg text-stone-600 mb-8">i'm creating a new kind of music</p>
        </header>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-stone-700">projects</h2>
          <div className="space-y-4">
            <Link
              href="https://hellafocused.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <img
                src="/hellafocused2.png"
                alt="hellafocused.com thumbnail"
                className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <span>hellafocused.com</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link
              href="https://cabinvisuals.com/alpha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <img
                src="/cabinvisuals.png"
                alt="cabinvisuals.com thumbnail"
                className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <span>cabinvisuals.com</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link
              href="https://cabinaudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <img
                src="/cabinaudio.png"
                alt="cabinaudio.com thumbnail"
                className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <span>cabinaudio.com</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* Old Stuff Toggle */}
            <div className="mt-6">
              <button
                onClick={() => setShowOldStuff(!showOldStuff)}
                className="text-stone-500 hover:text-stone-700 transition-colors text-sm underline-offset-2 hover:underline"
              >
                {showOldStuff ? "show less" : "see old projects"}
              </button>
            </div>

            {/* Collapsible Old Stuff */}
            {showOldStuff && (
              <div className="space-y-4 mt-4 pl-5 border-l border-stone-200">
                <div className="flex items-center gap-4 text-stone-500">
                  <img
                    src="/cabinEQ.png"
                    alt="CabinEQ thumbnail"
                    className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0 opacity-75"
                  />
                  <span>CabinEQ - Audio Plugin</span>
                </div>
                <Link
                  href="http://Tillerpiggo.pythonanywhere.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-stone-500 hover:text-stone-700 transition-colors group"
                >
                  <img
                    src="/racquetpassQR.png"
                    alt="RacquetPass QR Generator thumbnail"
                    className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0 opacity-75"
                  />
                  <div className="flex items-center gap-2">
                    <span>RacquetPass QR Generator</span>
                    <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-opacity" />
                  </div>
                </Link>
                <div className="flex items-center gap-4 text-stone-500">
                  <img
                    src="/autobid1.png"
                    alt="Birthday Reminder App thumbnail"
                    className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0 opacity-75"
                  />
                  <span>Birthday Reminder App</span>
                </div>
                <div className="flex items-center gap-4 text-stone-500">
                  <img
                    src="/todoapp0.png"
                    alt="Bubble iOS Todo App thumbnail"
                    className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0 opacity-75"
                  />
                  <span>Bubble - iOS Todo App</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Writings Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-stone-700">writings</h2>
          <p className="text-stone-500 italic">none yet</p>
        </section>

        {/* Art Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-stone-700">art</h2>
          <div className="space-y-4">
            <Link
              href="https://www.youtube.com/watch?v=21oQR1AMxBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <img
                src="https://img.youtube.com/vi/21oQR1AMxBQ/mqdefault.jpg"
                alt="Neon Medusa - Visual Music thumbnail"
                className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <span>Neon Medusa - Visual Music</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=Z2OURYpq6aI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-600 hover:text-stone-800 transition-colors group"
            >
              <img
                src="https://img.youtube.com/vi/Z2OURYpq6aI/mqdefault.jpg"
                alt="Visual Music Creation thumbnail"
                className="w-16 h-12 object-cover rounded border border-stone-200 flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <span>C418 Sweden - Visual Music</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6 text-stone-700">contact</h2>
          <Link
            href="mailto:tyler.gee333@gmail.com"
            className="flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors group"
          >
            <span>tyler.gee333@gmail.com</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-stone-200">
          <p className="text-sm text-stone-400 text-center">© {new Date().getFullYear()} Tyler Gee</p>
        </footer>
      </div>
    </div>
  )
}