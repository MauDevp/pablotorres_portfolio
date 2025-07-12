"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollAnimationOptions {
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
  toggleActions?: string
  animation?: gsap.TweenVars
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
}

export function useScrollAnimation(
  elementRef: React.RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
) {
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    // Registrar ScrollTrigger si no está registrado
    if (!gsap.plugins.scrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
    }

    const element = elementRef.current
    const {
      trigger = element,
      start = "top 85%",
      end = "bottom 15%",
      scrub = false,
      pin = false,
      markers = false,
      toggleActions = "play none none reverse",
      animation = {},
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack
    } = options

    // Crear la animación
    const tween = gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50,
        ...animation.from
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        ...animation.to,
        scrollTrigger: {
          trigger,
          start,
          end,
          scrub,
          pin,
          markers,
          toggleActions,
          onEnter,
          onLeave,
          onEnterBack,
          onLeaveBack,
          // Optimizaciones para móvil
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1
        }
      }
    )

    animationRef.current = tween

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      ScrollTrigger.getById(element)?.kill()
    }
  }, [elementRef, options])

  return animationRef
}

// Hook para animaciones batch (múltiples elementos)
export function useScrollBatch(
  selector: string,
  options: {
    stagger?: number
    batchMax?: number
    animation?: gsap.TweenVars
  } = {}
) {
  useEffect(() => {
    if (!gsap.plugins.scrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
    }

    const elements = gsap.utils.toArray(selector)
    
    if (elements.length === 0) return

    ScrollTrigger.batch(elements as Element[], {
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: options.stagger || 0.1,
        overwrite: true,
        ...options.animation?.to
      }),
      onLeave: (batch) => gsap.to(batch, {
        opacity: 0,
        y: 50,
        stagger: options.stagger || 0.1,
        overwrite: true,
        ...options.animation?.from
      }),
      onEnterBack: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: options.stagger || 0.1,
        overwrite: true,
        ...options.animation?.to
      }),
      onLeaveBack: (batch) => gsap.to(batch, {
        opacity: 0,
        y: -50,
        stagger: options.stagger || 0.1,
        overwrite: true,
        ...options.animation?.from
      }),
      batchMax: options.batchMax || 3,
      start: "top 90%",
      end: "bottom 10%"
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (elements.includes(trigger.trigger as Element)) {
          trigger.kill()
        }
      })
    }
  }, [selector, options])
}
