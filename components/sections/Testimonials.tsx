"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const { language } = useLanguage()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-mesh pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="chip mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            {language === "en" ? "Client Success Stories" : "Historias de Éxito"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.testimonials.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {translations.testimonials.subtitle[language]}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass-card gradient-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative quote mark */}
                  <div
                    className="absolute top-4 right-8 font-syne font-black text-[10rem] leading-none gradient-text-primary opacity-10 pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground/85 italic leading-relaxed mb-8">
                    "{testimonials[current].testimonial[language]}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 p-px shrink-0">
                      <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                        <span className="font-syne font-bold text-xl gradient-text-primary">
                          {testimonials[current].name[language].charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-syne font-bold text-foreground">{testimonials[current].name[language]}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].company[language]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                className="glass-card gradient-border h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-violet-700 hover:glow-primary dark:hover:text-violet-300 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                      i === current
                        ? "w-6 h-2 bg-gradient-to-r from-violet-500 to-pink-500"
                        : "w-2 h-2 bg-muted hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="glass-card gradient-border h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
