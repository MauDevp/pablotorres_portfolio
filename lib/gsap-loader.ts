"use client"

import { useState, useEffect } from 'react'
import type { gsap as GsapType } from 'gsap'

// Cache for loaded GSAP instance
let gsapInstance: typeof GsapType | null = null

// Dynamic GSAP loader
export const loadGSAP = async (): Promise<typeof GsapType> => {
  if (gsapInstance) {
    return gsapInstance
  }

  const { gsap: loadedGsap } = await import('gsap')
  gsapInstance = loadedGsap
  return loadedGsap
}

// Hook for using GSAP with lazy loading
export const useGSAP = () => {
  const [gsap, setGsap] = useState<typeof GsapType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    loadGSAP()
      .then(setGsap)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { gsap, loading, error }
}

// Pre-load GSAP when component is about to be visible
export const preloadGSAP = () => {
  if (!gsapInstance) {
    loadGSAP().catch(console.error)
  }
}
