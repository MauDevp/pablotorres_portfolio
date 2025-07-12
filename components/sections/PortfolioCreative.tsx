"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { SafeImage } from "@/components/ui/safe-image"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ServiceError } from "@/components/ui/service-error"

export default function PortfolioCreative() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(false)
      const response = await fetch('/api/case-studies')
      const data = await response.json()
      
      if (!response.ok) {
        setError(true)
        return
      }
      
      if (data.projects) {
        const mappedProjects = data.projects.map((project: any) => ({
          ...project,
          categoryId: project.category.en === "Social Media" ? "social" : 
                      project.category.en === "Media Plan" ? "media" : 
                      project.category.en === "Marketing Plan" ? "marketing" : "marketing"
        }))
        setProjects(mappedProjects)
      }
    } catch (err) {
      console.error('Error fetching projects:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { id: "all", name: language === "en" ? "All" : "Todos" },
    { id: "social", name: language === "en" ? "Social Media" : "Redes Sociales" },
    { id: "media", name: language === "en" ? "Media Plan" : "Plan de Medios" },
    { id: "marketing", name: language === "en" ? "Marketing" : "Marketing" }
  ]


  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.categoryId === activeCategory)

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === "en" ? "Selected Work" : "Trabajo Seleccionado"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {language === "en" 
              ? "Real results from strategic digital marketing campaigns"
              : "Resultados reales de campañas estratégicas de marketing digital"}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center py-12">
            <ServiceError language={language} onRetry={fetchProjects} />
          </div>
        )}

        {/* Category Filters - Minimal Pills */}
        {!loading && !error && projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        )}

        {/* Projects Grid - Clean & Minimal */}
        {!loading && !error && projects.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <Link href={`/case-studies/${project.slug}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <SafeImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title[language]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Metric Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs font-semibold text-gray-900 dark:text-white">
                            {project.increase[language]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        {project.category[language]}
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                        {project.title[language]}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {project.summary[language]}
                      </p>

                      {/* View Case Button */}
                      <div className="flex items-center text-sm font-medium text-pink-500 dark:text-pink-400 group-hover:gap-2 transition-all">
                        <span>{language === "en" ? "View Case Study" : "Ver Caso"}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {language === "en" 
                ? "No case studies available at this moment."
                : "No hay casos de estudio disponibles en este momento."}
            </p>
          </div>
        )}

        {/* View All Projects Button - Shows all projects when clicked */}
        {!loading && !error && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              <span>
                {showAll 
                  ? (language === "en" ? "Show Less" : "Mostrar Menos")
                  : (language === "en" ? `View All ${filteredProjects.length} Projects` : `Ver los ${filteredProjects.length} Proyectos`)}
              </span>
              <ArrowUpRight className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
