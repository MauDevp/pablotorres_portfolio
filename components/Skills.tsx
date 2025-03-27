"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { skillCategories } from "@/data/skills"

export default function Skills() {
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
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Professional Expertise" : "Experiencia Profesional"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.skills.title[language]}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="w-full">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={fadeIn}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{category.name[language]}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{category.skills[language]}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

