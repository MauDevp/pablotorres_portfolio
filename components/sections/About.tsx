"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Languages, GraduationCap, Award, Star, Target, Users } from "lucide-react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { useEnterAnimation, useTextReveal } from "@/hooks/useScrollTrigger"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function About() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Animaciones con ScrollTrigger
  useTextReveal(titleRef, {
    splitType: 'words',
    stagger: 0.1,
    duration: 0.8,
    from: { opacity: 0, y: 50, rotationX: -45 },
    to: { opacity: 1, y: 0, rotationX: 0 }
  })

  useEnterAnimation(leftContentRef, {
    from: { opacity: 0, x: -100, rotationY: -10 },
    to: { opacity: 1, x: 0, rotationY: 0 },
    duration: 1,
    ease: "power3.out"
  })

  useEnterAnimation(rightContentRef, {
    from: { opacity: 0, x: 100, rotationY: 10 },
    to: { opacity: 1, x: 0, rotationY: 0 },
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  })

  // Animaciones para las barras de progreso
  useEffect(() => {
    if (!skillsRef.current) return

    const progressBars = skillsRef.current.querySelectorAll('[data-progress]')
    
    progressBars.forEach((bar, index) => {
      const progress = bar.getAttribute('data-progress')
      const progressElement = bar.querySelector('.progress-fill')
      
      if (progressElement) {
        gsap.set(progressElement, { width: '0%' })
        
        ScrollTrigger.create({
          trigger: bar,
          start: "top 80%",
          onEnter: () => {
            gsap.to(progressElement, {
              width: `${progress}%`,
              duration: 1.5,
              ease: "power2.out",
              delay: index * 0.1
            })
          }
        })
      }
    })
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-muted/50 py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Iconos decorativos */}
      <div className="absolute top-20 right-20 z-[1]">
        <Star className="h-6 w-6 text-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 z-[1]">
        <Target className="h-5 w-5 text-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute top-1/2 left-1/4 z-[1]">
        <Users className="h-4 w-4 text-accent/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 
              ref={titleRef}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              {translations.about.title[language]}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 py-12 lg:grid-cols-2">
          <div
            ref={leftContentRef}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">{translations.about.description[language]}</p>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{translations.about.location[language]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+52 3329092732</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="break-all">pabloseb107@gmail.com</span>
              </div>
            </div>

            <div ref={skillsRef} className="space-y-4">
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{translations.about.languages.title[language]}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2" data-progress="100">
                  <div className="flex justify-between">
                    <span>{translations.about.languages.spanish[language]}</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="progress-fill bg-primary h-full rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
                <div className="space-y-2" data-progress="85">
                  <div className="flex justify-between">
                    <span>{translations.about.languages.english[language]}</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div className="progress-fill bg-primary h-full rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={rightContentRef}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{translations.about.education.title[language]}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-bold">{translations.about.education.master[language]}</h4>
                    <p className="text-muted-foreground">{translations.about.education.university[language]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{translations.about.certifications.title[language]}</h3>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-4">
                    <p>{translations.about.certifications.scrum[language]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

