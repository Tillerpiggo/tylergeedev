"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Mode = 'dev' | 'dream'

interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('dev')

  // Load saved mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('website-mode') as Mode
    if (savedMode && (savedMode === 'dev' || savedMode === 'dream')) {
      setMode(savedMode)
    }
  }, [])

  // Save mode to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('website-mode', mode)
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}