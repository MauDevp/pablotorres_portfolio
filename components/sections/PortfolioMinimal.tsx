"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function PortfolioMinimal() {
  const { language } = useLanguage()

  const projects = [
    {
      title: "E-commerce Platform",
      description: language === "en" 
        ? "Complete digital transformation for online retail"
        : "Transformación digital completa para retail online",
      metrics: "+250% ROI",
      link: "#"
    },
    {
      title: "SaaS Marketing Campaign",
      description: language === "en"
        ? "Strategic growth marketing for B2B software"
        : "Marketing de crecimiento estratégico para software B2B",
      metrics: "3x MRR Growth",
      link: "#"
    },
    {
      title: "Brand Repositioning",
      description: language === "en"
        ? "Complete brand strategy and market positioning"
        : "Estrategia de marca completa y posicionamiento",
      metrics: "+180% Brand Awareness",
      link: "#"
    },
    {
      title: "AI-Powered Automation",
      description: language === "en"
        ? "Marketing automation using artificial intelligence"
        : "Automatización de marketing usando inteligencia artificial",
      metrics: "60% Time Saved",
      link: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2">
              {translations.portfolio.title[language]}
            </h2>
            <div className="w-16 h-0.5 bg-foreground"></div>
          </motion.div>

          {/* Grid de proyectos */}
          <div className="grid gap-1">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block py-8 md:py-12 border-t border-border hover:px-4 md:hover:px-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">{project.metrics}</span>
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
