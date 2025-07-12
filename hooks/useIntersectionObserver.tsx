"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  enabled?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  enabled = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!enabled) return

    const target = targetRef.current
    if (!target) return

    // Create observer only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const isVisible = entry.isIntersecting
          setIsIntersecting(isVisible)
          
          // Track if element has ever been visible
          if (isVisible && !hasIntersected) {
            setHasIntersected(true)
          }
        },
        { threshold, rootMargin }
      )
    }

    observerRef.current.observe(target)

    return () => {
      if (observerRef.current && target) {
        observerRef.current.unobserve(target)
      }
    }
  }, [threshold, rootMargin, enabled, hasIntersected])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return { targetRef, isIntersecting, hasIntersected }
}
