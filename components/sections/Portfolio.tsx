"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { projects } from "@/data/projects"

// Importar el hook useInView
import { useInView } from "@/hooks/useInView"

export default function Portfolio() {
  const { language } = useLanguage()

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

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50 z-0"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Case Studies" : "Casos de Éxito"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.portfolio.title[language]}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {translations.portfolio.subtitle[language]}
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-12 bg-background/50 backdrop-blur-sm p-1 rounded-full border">
            <TabsTrigger
              value="all"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {translations.portfolio.tabs.all[language]}
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {translations.portfolio.tabs.media[language]}
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {translations.portfolio.tabs.social[language]}
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {translations.portfolio.tabs.marketing[language]}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} language={language} fadeIn={fadeIn} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="media" className="mt-0">
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {projects
                .filter((project) => project.category.en === "Media Plan")
                .map((project) => (
                  <ProjectItem key={project.id} project={project} language={language} fadeIn={fadeIn} />
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {projects
                .filter((project) => project.category.en === "Social Media")
                .map((project) => (
                  <ProjectItem key={project.id} project={project} language={language} fadeIn={fadeIn} />
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {projects
                .filter((project) => project.category.en === "Marketing Plan")
                .map((project) => (
                  <ProjectItem key={project.id} project={project} language={language} fadeIn={fadeIn} />
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectItemProps {
  project: (typeof projects)[0]
  language: string
  fadeIn: any
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, language, fadeIn }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.6 })

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl shadow-md ${
        isInView ? "ring-2 ring-primary/20 md:ring-0" : ""
      }`}
      variants={fadeIn}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={project.image || "/placeholder.svg"}
        width={300}
        height={600}
        alt={project.title[language]}
        className={`aspect-[9/16] object-cover object-center transition-transform duration-500 w-full h-full mx-auto ${
          isInView ? "scale-105" : "group-hover:scale-110"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-300 flex flex-col items-center justify-end p-6 ${
          isInView ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-xl font-bold text-white">{project.title[language]}</h3>
        <p className="text-white/80">{project.category[language]}</p>
        <div className="bg-primary/90 px-3 py-1 rounded-full text-sm font-medium text-white mt-2">
          {project.increase[language]}
        </div>
        <Link href={`/case-studies/${project.slug}`}>
          <Button
            variant="outline"
            className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black"
          >
            {translations.portfolio.viewCase[language]}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

