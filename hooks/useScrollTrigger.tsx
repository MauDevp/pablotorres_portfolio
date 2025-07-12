"use client"

import { useEffect, useRef, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar el plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface UseScrollTriggerOptions {
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
  animation?: gsap.core.Timeline
  refreshPriority?: number
}

export function useScrollTrigger(
  ref: RefObject<HTMLElement>,
  options: UseScrollTriggerOptions = {}
) {
  const {
    trigger,
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    pin = false,
    markers = false,
    onEnter,
    onLeave,
    onEnterBack,
    onLeaveBack,
    animation,
    refreshPriority = 0
  } = options

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger || element,
      start,
      end,
      scrub,
      pin,
      markers,
      refreshPriority,
      onEnter: () => {
        if (animation) {
          animation.play()
        }
        onEnter?.()
      },
      onLeave: () => {
        if (animation) {
          animation.reverse()
        }
        onLeave?.()
      },
      onEnterBack: () => {
        if (animation) {
          animation.play()
        }
        onEnterBack?.()
      },
      onLeaveBack: () => {
        if (animation) {
          animation.reverse()
        }
        onLeaveBack?.()
      },
      animation: animation
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [ref, trigger, start, end, scrub, pin, markers, onEnter, onLeave, onEnterBack, onLeaveBack, animation, refreshPriority])
}

// Hook para animaciones de entrada
export function useEnterAnimation(
  ref: RefObject<HTMLElement>,
  animationProps: gsap.TweenVars = {},
  triggerOptions: Omit<UseScrollTriggerOptions, 'animation'> = {}
) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    
    // Crear timeline de animación
    const tl = gsap.timeline({ paused: true })
    
    // Configurar estado inicial
    gsap.set(element, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      ...animationProps.from
    })

    // Crear animación
    tl.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      ...animationProps
    })

    timelineRef.current = tl

    return () => {
      tl.kill()
    }
  }, [ref, animationProps])

  useScrollTrigger(ref, {
    ...triggerOptions,
    animation: timelineRef.current
  })
}

// Hook para animaciones de texto
export function useTextReveal(
  ref: RefObject<HTMLElement>,
  options: {
    splitType?: 'chars' | 'words' | 'lines'
    stagger?: number
    duration?: number
    ease?: string
    from?: gsap.TweenVars
    to?: gsap.TweenVars
  } = {}
) {
  const {
    splitType = 'chars',
    stagger = 0.05,
    duration = 0.6,
    ease = 'power2.out',
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 }
  } = options

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const text = element.textContent || ''
    
    // Dividir el texto
    let splitElements: Element[] = []
    
    if (splitType === 'chars') {
      element.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span style="display: inline-block;">${char}</span>`
      ).join('')
      splitElements = Array.from(element.querySelectorAll('span'))
    } else if (splitType === 'words') {
      element.innerHTML = text.split(' ').map(word => 
        `<span style="display: inline-block;">${word}</span>`
      ).join(' ')
      splitElements = Array.from(element.querySelectorAll('span'))
    }

    // Configurar estado inicial
    gsap.set(splitElements, from)

    // Crear ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(splitElements, {
          ...to,
          duration,
          ease,
          stagger
        })
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [ref, splitType, stagger, duration, ease, from, to])
}

// Hook para crear efectos de parallax
export function useParallax(
  ref: RefObject<HTMLElement>,
  options: {
    speed?: number
    direction?: 'up' | 'down'
    start?: string
    end?: string
  } = {}
) {
  const {
    speed = 0.5,
    direction = 'up',
    start = "top bottom",
    end = "bottom top"
  } = options

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const multiplier = direction === 'up' ? -1 : 1

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub: true,
      onUpdate: (self) => {
        const y = self.progress * 100 * speed * multiplier
        gsap.set(element, { y })
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [ref, speed, direction, start, end])
}

// Hook para animaciones de contador
export function useCounterAnimation(
  ref: RefObject<HTMLElement>,
  options: {
    start?: number
    end: number
    duration?: number
    ease?: string
    format?: (value: number) => string
  }
) {
  const {
    start = 0,
    end,
    duration = 2,
    ease = 'power2.out',
    format = (value) => Math.round(value).toString()
  } = options

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const counter = { value: start }

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(counter, {
          value: end,
          duration,
          ease,
          onUpdate: () => {
            element.textContent = format(counter.value)
          }
        })
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [ref, start, end, duration, ease, format])
}
