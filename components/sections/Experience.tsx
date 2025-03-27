"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { experiences } from "@/data/experience"

export default function Experience() {
  const { language } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Professional Journey" : "Trayectoria Profesional"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.experience.title[language]}
            </h2>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl py-12">
          <div className="relative border-l border-primary/30 pl-6 ml-6">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-primary"></div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.company[language]}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <Badge variant="outline" className="font-normal">
                        {job.title[language]}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{job.period[language]}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.responsibilities[language].map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <p>{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

