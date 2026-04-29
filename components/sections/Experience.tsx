"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { experiences } from "@/data/experience"

const dotColors = [
  "bg-violet-400 shadow-violet-400/50",
  "bg-pink-400 shadow-pink-400/50",
  "bg-amber-400 shadow-amber-400/50",
  "bg-emerald-400 shadow-emerald-400/50",
]

const borderColors = [
  "border-l-violet-500/60",
  "border-l-pink-500/60",
  "border-l-amber-500/60",
  "border-l-emerald-500/60",
]

const textColors = [
  "text-violet-800 dark:text-violet-300",
  "text-pink-800 dark:text-pink-300",
  "text-amber-800 dark:text-amber-300",
  "text-emerald-800 dark:text-emerald-300",
]

export default function Experience() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 section-mesh pointer-events-none opacity-60" />

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
            {language === "en" ? "Professional Journey" : "Trayectoria Profesional"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.experience.title[language]}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          {/* Gradient rail line */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-amber-500 opacity-40" />

            <div className="space-y-8">
              {experiences.map((job, index) => {
                const dot    = dotColors[index % dotColors.length]
                const border = borderColors[index % borderColors.length]
                const text   = textColors[index % textColors.length]

                return (
                  <motion.div
                    key={index}
                    className="relative pl-16"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-3 top-4 h-4 w-4 rounded-full shadow-lg ${dot} -translate-x-1.5`} />

                    {/* Card */}
                    <div className={`glass-card gradient-border rounded-2xl p-6 border-l-2 ${border}`}>
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className={`font-syne font-bold text-xl ${text}`}>
                            {job.company[language]}
                          </h3>
                          <p className="text-sm text-foreground/70 mt-0.5">{job.title[language]}</p>
                        </div>

                        {/* Period badge */}
                        <div className="glass-card flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-muted-foreground shrink-0">
                          <CalendarDays className="h-3 w-3" />
                          {job.period[language]}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {job.responsibilities[language].map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${dot.split(" ")[0]} shrink-0`} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
