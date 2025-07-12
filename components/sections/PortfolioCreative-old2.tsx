"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, BarChart3, Users, Zap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { useState } from "react"
import Link from "next/link"
import { projects as projectsData } from "@/data/projects"

export default function PortfolioCreative() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = [
    { id: "all", name: language === "en" ? "All" : "Todos" },
    { id: "social", name: language === "en" ? "Social Media" : "Redes Sociales" },
    { id: "media", name: language === "en" ? "Media Plan" : "Plan de Medios" },
    { id: "marketing", name: language === "en" ? "Marketing" : "Marketing" }
  ]

  // Use real projects from data
  const projects = projectsData.map(project => ({
    ...project,
    categoryId: project.category.en === "Social Media" ? "social" : 
                project.category.en === "Media Plan" ? "media" : 
                project.category.en === "Marketing Plan" ? "marketing" : "marketing"
  }))

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categoryId === activeCategory)

  return (
    <section id="portfolio" className="relative bg-background py-16 sm:py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-background" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="h-5 w-5 text-pink-500" />
            <span className="text-sm font-medium text-muted-foreground">
              {language === "en" ? "Our Work" : "Nuestro Trabajo"}
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {translations.portfolio[language]}
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en" 
              ? "Transforming brands through innovative digital strategies and creative excellence"
              : "Transformando marcas a través de estrategias digitales innovadoras y excelencia creativa"}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg shadow-pink-500/25"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-xl">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                        {project.categoryName}
                      </span>
                    </div>
                    
                    {/* Metrics Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full">
                        <TrendingUp className="h-3 w-3 text-white" />
                        <span className="text-xs font-bold text-white">{project.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View More Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {language === "en" ? "View Project" : "Ver Proyecto"}
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            {language === "en" 
              ? "Ready to transform your brand?"
              : "¿Listo para transformar tu marca?"}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full font-semibold shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
            {language === "en" ? "Start Your Project" : "Inicia Tu Proyecto"}
            <ArrowUpRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
