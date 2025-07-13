"use client"

import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

// Cache for loaded GSAP instance
let gsapInstance: typeof gsap | null = null

// Dynamic GSAP loader
export const loadGSAP = async (): Promise<typeof gsap> => {
  if (gsapInstance) {
    return gsapInstance
  }

  try {
    const { gsap: loadedGsap } = await import('gsap')
    gsapInstance = loadedGsap
    return loadedGsap
  } catch (error) {
    console.error('Failed to load GSAP:', error)
    throw error
  }
}

// Hook for using GSAP with lazy loading
export const useGSAP = () => {
  const [gsap, setGsap] = useState<typeof import('gsap').gsap | null>(null)
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
