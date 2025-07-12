"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { skillCategories } from "@/data/skills"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEnterAnimation, useTextReveal } from "@/hooks/useScrollTrigger"
import { 
  Code, 
  Palette, 
  BarChart, 
  Megaphone, 
  Zap, 
  Sparkles, 
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Globe,
  PenTool
} from "lucide-react"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Definir skills con iconos y niveles
const skillsData = [
  {
    category: { en: "Digital Marketing", es: "Marketing Digital" },
    icon: Megaphone,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "Google Ads", level: 95 },
      { name: "Facebook Ads", level: 92 },
      { name: "SEO/SEM", level: 88 },
      { name: "Analytics", level: 90 },
      { name: "Content Marketing", level: 85 }
    ]
  },
  {
    category: { en: "Data Analysis", es: "Análisis de Datos" },
    icon: BarChart,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Excel", level: 95 },
      { name: "Power BI", level: 88 },
      { name: "Google Analytics", level: 92 },
      { name: "Data Studio", level: 85 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    category: { en: "Design & Creative", es: "Diseño y Creatividad" },
    icon: PenTool,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Photoshop", level: 85 },
      { name: "Illustrator", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 90 },
      { name: "Video Editing", level: 70 }
    ]
  },
  {
    category: { en: "Strategy & Planning", es: "Estrategia y Planificación" },
    icon: Target,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Strategic Planning", level: 92 },
      { name: "Market Research", level: 88 },
      { name: "Competitor Analysis", level: 85 },
      { name: "ROI Optimization", level: 90 },
      { name: "Campaign Management", level: 93 }
    ]
  }
]

export default function Skills() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsGridRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Animaciones con ScrollTrigger
  useTextReveal(titleRef, {
    splitType: 'words',
    stagger: 0.15,
    duration: 0.8,
    from: { opacity: 0, y: 50, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1 }
  })

  useEnterAnimation(skillsGridRef, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    duration: 1.2,
    ease: "power3.out"
  })

  // Animaciones para las barras de progreso
  useEffect(() => {
    if (!skillsGridRef.current) return

    const skillCards = skillsGridRef.current.querySelectorAll('.skill-card')
    
    skillCards.forEach((card, cardIndex) => {
      const progressBars = card.querySelectorAll('.skill-progress')
      
      progressBars.forEach((bar, skillIndex) => {
        const level = bar.getAttribute('data-level')
        const progressFill = bar.querySelector('.progress-fill')
        
        if (progressFill) {
          gsap.set(progressFill, { width: '0%' })
          
          ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            onEnter: () => {
              gsap.to(progressFill, {
                width: `${level}%`,
                duration: 1.5,
                ease: "power2.out",
                delay: skillIndex * 0.1
              })
            }
          })
        }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Iconos decorativos flotantes */}
      <div className="absolute top-10 right-10 z-[1]">
        <Sparkles className="h-6 w-6 text-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-10 left-10 z-[1]">
        <Zap className="h-5 w-5 text-secondary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute top-1/2 right-1/4 z-[1]">
        <TrendingUp className="h-4 w-4 text-accent/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {language === "en" ? "Professional Expertise" : "Experiencia Profesional"}
          </motion.div>
          <div className="space-y-2">
            <h2 
              ref={titleRef}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              {translations.skills.title[language]}
            </h2>
          </div>
        </div>

        <div 
          ref={skillsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 max-w-6xl mx-auto"
        >
          {skillsData.map((skillSet, index) => {
            const IconComponent = skillSet.icon
            
            return (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Header con ícono y título */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skillSet.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {skillSet.category[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skillSet.skills.length} {language === "en" ? "skills" : "habilidades"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Lista de skills con barras de progreso */}
                    <div className="space-y-4">
                      {skillSet.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div 
                            className="skill-progress w-full bg-muted rounded-full h-2 overflow-hidden"
                            data-level={skill.level}
                          >
                            <div 
                              className={`progress-fill h-full rounded-full bg-gradient-to-r ${skillSet.color} transition-all duration-1000 ease-out`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Indicador de hover */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={
                        hoveredCard === index
                          ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillSet.color}`}></div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Sección de stats adicionales */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Years of Experience" : "Años de Experiencia"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Tools Mastered" : "Herramientas Dominadas"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Projects Completed" : "Proyectos Completados"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

