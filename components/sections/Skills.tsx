"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { skillCategories } from "@/data/skills"

const categoryColors = [
  { bg: "from-violet-500/20 to-pink-500/10",   chip: "bg-violet-500/10 border-violet-500/30 text-violet-800 dark:text-violet-300",   icon: "bg-violet-500/20 text-violet-700 dark:text-violet-400" },
  { bg: "from-pink-500/20 to-amber-500/10",    chip: "bg-pink-500/10 border-pink-500/30 text-pink-800 dark:text-pink-300",         icon: "bg-pink-500/20 text-pink-700 dark:text-pink-400" },
  { bg: "from-amber-500/20 to-orange-500/10",  chip: "bg-amber-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300",      icon: "bg-amber-500/20 text-amber-700 dark:text-amber-400" },
  { bg: "from-emerald-500/20 to-teal-500/10",  chip: "bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300", icon: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400" },
  { bg: "from-blue-500/20 to-violet-500/10",   chip: "bg-blue-500/10 border-blue-500/30 text-blue-800 dark:text-blue-300",         icon: "bg-blue-500/20 text-blue-700 dark:text-blue-400" },
  { bg: "from-pink-500/20 to-violet-500/10",   chip: "bg-pink-500/10 border-pink-500/30 text-pink-800 dark:text-pink-300",         icon: "bg-pink-500/20 text-pink-700 dark:text-pink-400" },
]

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const chipVariant = {
  hidden:  { opacity: 0, y: 12, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1,  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Skills() {
  const { language } = useLanguage()

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 section-mesh pointer-events-none" />

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
            {language === "en" ? "Professional Expertise" : "Experiencia Profesional"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.skills.title[language]}
          </h2>
        </motion.div>

        {/* Skill categories grid */}
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const style = categoryColors[catIndex % categoryColors.length]
            const skillList = category.skills[language]
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)

            return (
              <motion.div
                key={catIndex}
                className={`glass-card gradient-border rounded-2xl p-5 bg-gradient-to-br ${style.bg}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                {/* Category header */}
                <h3 className="font-syne font-bold text-sm uppercase tracking-wider text-foreground/70 mb-4">
                  {category.name[language]}
                </h3>

                {/* Skill chips */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={i}
                      variants={chipVariant}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${style.chip} transition-colors duration-200 hover:opacity-80`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
