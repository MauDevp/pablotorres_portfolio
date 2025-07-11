"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { testimonials } from "@/data/testimonials"

// Importar el hook useInView
import { useInView } from "@/hooks/useInView"

export default function Testimonials() {
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
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30 z-0"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Client Success Stories" : "Historias de Éxito de Clientes"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.testimonials.title[language]}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {translations.testimonials.subtitle[language]}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => {
            return <TestimonialItem key={index} testimonial={testimonial} language={language} fadeIn={fadeIn} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

interface TestimonialItemProps {
  testimonial: any
  language: "en" | "es"
  fadeIn: any
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial, language, fadeIn }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.6 })

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col space-y-4 rounded-xl border p-6 shadow-md bg-background/80 backdrop-blur-sm relative ${
        isInView ? "ring-2 ring-primary/20 md:ring-0 transform -translate-y-2 md:transform-none" : ""
      }`}
      variants={fadeIn}
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
        <div className="text-primary/10 text-8xl font-serif">"</div>
      </div>

      <div className="flex items-center space-x-2">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className={`h-5 w-5 fill-primary text-primary`} />
          ))}
      </div>

      <p className="text-muted-foreground italic text-lg relative z-10">"{testimonial.testimonial[language]}"</p>

      <div className="mt-auto pt-4 flex items-center gap-3">
        <div
          className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${
            isInView ? "bg-primary/30" : ""
          }`}
        >
          <span className="text-primary font-bold text-lg">{testimonial.name[language].charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold">{testimonial.name[language]}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company[language]}</p>
        </div>
      </div>
    </motion.div>
  )
}

