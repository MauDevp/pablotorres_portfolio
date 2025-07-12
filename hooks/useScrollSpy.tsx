"use client"

import { useState, useEffect, useRef, useCallback } from "react"

function throttle(func: Function, limit: number) {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0])
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map())
  const lastActiveRef = useRef<string>(sectionIds[0])

  // Cache DOM elements
  useEffect(() => {
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        sectionsRef.current.set(id, element)
      }
    })
  }, [sectionIds])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset
    let newActiveSection = lastActiveRef.current

    // Find the section that is currently in view
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = sectionsRef.current.get(sectionIds[i])
      if (!section) continue

      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        newActiveSection = sectionIds[i]
        break
      }
    }

    // Only update if section changed
    if (newActiveSection !== lastActiveRef.current) {
      lastActiveRef.current = newActiveSection
      setActiveSection(newActiveSection)
    }
  }, [sectionIds, offset])

  useEffect(() => {
    // Throttle scroll events to 16ms (60fps)
    const throttledHandleScroll = throttle(handleScroll, 16)

    // Initial check
    handleScroll()

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [handleScroll])

  return activeSection
}

