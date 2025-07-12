"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

interface AnimationProviderProps {
  children: ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Registrar plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    // Configuración mejorada de ScrollTrigger
    ScrollTrigger.defaults({
      markers: false,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse"
    })

    // Configurar ScrollTrigger para mobile
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true
    })

    // Animación inicial del contenedor
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )

    // Animaciones para elementos con clases específicas
    const setupAnimations = () => {
      // Fade in up
      gsap.utils.toArray('.animate-fadeUp').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Fade in left
      gsap.utils.toArray('.animate-fadeLeft').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Fade in right
      gsap.utils.toArray('.animate-fadeRight').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Scale in
      gsap.utils.toArray('.animate-scaleIn').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Rotate in
      gsap.utils.toArray('.animate-rotateIn').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, rotation: -180, scale: 0.8 },
          {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Stagger children
      gsap.utils.toArray('.animate-stagger-children').forEach((parent: any) => {
        const children = parent.children
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Parallax effect
      gsap.utils.toArray('.parallax').forEach((element: any) => {
        const speed = element.dataset.speed || 0.5
        gsap.to(element, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      })

      // Text reveal animation
      gsap.utils.toArray('.animate-text-reveal').forEach((element: any) => {
        const text = element.textContent
        element.textContent = ''
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        })
        
        tl.to(element, {
          duration: 1.5,
          text: text,
          ease: "none"
        })
      })

      // Progress bar animation
      gsap.utils.toArray('.animate-progress').forEach((element: any) => {
        const progress = element.dataset.progress || 100
        gsap.fromTo(element,
          { width: "0%" },
          {
            width: `${progress}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Floating animation on scroll
      gsap.utils.toArray('.animate-float-scroll').forEach((element: any) => {
        gsap.to(element, {
          y: "random(-20, 20)",
          rotation: "random(-5, 5)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause"
          }
        })
      })
    }

    // Ejecutar animaciones después de un pequeño delay
    const timer = setTimeout(() => {
      setupAnimations()
    }, 100)

    // Refresh ScrollTrigger en resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      ScrollTrigger.clearMatchMedia()
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  )
}
