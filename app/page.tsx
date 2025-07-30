"use client"

import { useMode } from "@/contexts/mode-context"
import { DevPage } from "@/components/dev-page"
import { DreamPage } from "@/components/dream-page"

export default function Home() {
  const { mode } = useMode()

  return (
    <div>
      {mode === 'dream' ? <DreamPage /> : <DevPage />}
    </div>
  )
}