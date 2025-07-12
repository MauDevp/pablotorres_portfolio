"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { useState } from "react"

export default function PortfolioCreative() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: language === "en" ? "All Projects" : "Todos los Proyectos" },
    { id: "strategy", name: language === "en" ? "Strategy" : "Estrategia" },
    { id: "marketing", name: language === "en" ? "Marketing" : "Marketing" },
    { id: "branding", name: language === "en" ? "Branding" : "Branding" },
    { id: "automation", name: language === "en" ? "Automation" : "Automatización" }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "strategy",
      categoryName: language === "en" ? "Digital Strategy" : "Estrategia Digital",
      description: language === "en" 
        ? "Complete digital transformation for a leading retail brand"
        : "Transformación digital completa para una marca líder en retail",
      metrics: "+250% ROI",
      image: "/portfolio/project1.jpg",
      gradient: "from-pink-500 to-violet-500",
      tags: ["Strategy", "E-commerce", "Growth"]
    },
    {
      id: 2,
      title: "SaaS Growth Campaign",
      category: "marketing",
      categoryName: language === "en" ? "Performance Marketing" : "Marketing de Performance",
      description: language === "en"
        ? "Strategic growth marketing for B2B software platform"
        : "Marketing de crecimiento estratégico para plataforma B2B",
      metrics: "3x MRR",
      image: "/portfolio/project2.jpg",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["SaaS", "B2B", "Growth"]
    },
    {
      id: 3,
      title: "Brand Reimagined",
      category: "branding",
      categoryName: language === "en" ? "Brand Strategy" : "Estrategia de Marca",
      description: language === "en"
        ? "Complete rebrand and market positioning strategy"
        : "Rebrand completo y estrategia de posicionamiento",
      metrics: "+180% Awareness",
      image: "/portfolio/project3.jpg",
      gradient: "from-orange-500 to-red-500",
      tags: ["Branding", "Strategy", "Creative"]
    },
    {
      id: 4,
      title: "AI-Powered Marketing",
      category: "automation",
      categoryName: language === "en" ? "AI & Automation" : "IA y Automatización",
      description: language === "en"
        ? "Implementing AI tools for marketing automation"
        : "Implementación de herramientas IA para automatización",
      metrics: "60% Time Saved",
      image: "/portfolio/project4.jpg",
      gradient: "from-purple-500 to-pink-500",
      tags: ["AI", "Automation", "Innovation"]
    }
  ]

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
          
          word.split("").forEach((char, charIndex) => {
            const span = document.createElement("span")
            span.textContent = char
            span.style.display = "inline-block"
            span.style.opacity = "0"
            span.style.transform = "translateY(100px) rotateZ(45deg)"
            wordSpan.appendChild(span)
            
            gsap.to(span, {
              opacity: 1,
              y: 0,
              rotateZ: 0,
              duration: 0.8,
              delay: (wordIndex * 0.1) + (charIndex * 0.05),
              ease: "power3.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%"
              }
            })
          })
          
          titleRef.current?.appendChild(wordSpan)
        })
      }

      // Animación en cascada para las tarjetas del portfolio
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".portfolio-card")
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 100,
              rotateX: 45,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%"
              }
            }
          )
        })
      }

    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  }

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Fondo creativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Elementos flotantes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl"
        animate={{
          y: [0, 60, 0],
          scale: [1, 0.7, 1],
          rotate: [360, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Iconos flotantes */}
      <motion.div
        className="absolute top-1/3 left-1/6 text-primary/30"
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Award className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-secondary/30"
        animate={{
          rotate: [360, 0],
          x: [0, 40, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Rocket className="w-10 h-10" />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Título con efectos creativos */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-6"
            variants={itemVariants}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-accent text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {language === "en" ? "✨ Success Stories" : "✨ Historias de Éxito"}
            </span>
          </motion.div>
          
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
          >
            {translations.portfolio.title[language]}
          </h2>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-body"
            variants={itemVariants}
          >
            {translations.portfolio.subtitle[language]}
          </motion.p>
        </motion.div>

        {/* Tabs con diseño mejorado */}
        <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm p-2 rounded-2xl border border-primary/20">
            <TabsTrigger
              value="all"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-accent"
            >
              {translations.portfolio.tabs.all[language]}
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-accent"
            >
              {translations.portfolio.tabs.media[language]}
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-accent"
            >
              {translations.portfolio.tabs.social[language]}
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-accent"
            >
              {translations.portfolio.tabs.marketing[language]}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} language={language} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category.en === "Media Plan")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} language={language} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category.en === "Social Media")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} language={language} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category.en === "Marketing Plan")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} language={language} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  language: "en" | "es"
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`portfolio-card group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${
        isInView ? "ring-2 ring-primary/30 scale-105" : ""
      }`}
      whileHover={{ 
        scale: 1.08, 
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[9/16] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          width={300}
          height={600}
          alt={project.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Elementos flotantes en la tarjeta */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <TrendingUp className="w-6 h-6 text-white" />
        </motion.div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80 font-accent">
                {project.category[language]}
              </span>
            </div>
            
            <h3 className="text-xl font-heading font-bold text-white">
              {project.title[language]}
            </h3>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-full text-white font-medium shadow-lg">
              <Zap className="w-4 h-4" />
              <span className="text-sm">
                {project.increase[language]}
              </span>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            viewport={{ once: true }}
          >
            <Link href={`/case-studies/${project.slug}`}>
              <Button
                variant="outline"
                className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-accent"
              >
                {translations.portfolio.viewCase[language]}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
