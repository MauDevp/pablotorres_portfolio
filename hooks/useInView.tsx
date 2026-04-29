"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.5 },
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)
  const optionsRef = useRef(options)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, optionsRef.current)

    observer.observe(element)
    return () => observer.disconnect()
  }, []) // options are stable via ref — no need to recreate observer on each render

  return [ref, isInView]
}
