"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, BarChart3, TrendingUp, Globe, MessageSquare, Mail, ArrowRight } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { services } from "@/data/services"
import { scrollToSection } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Search, BarChart3, TrendingUp, Globe, MessageSquare, Mail,
}

// Gradient color per card position
const cardStyles = [
  { iconBg: "from-violet-500/25 to-pink-500/15",    iconColor: "text-violet-700 dark:text-violet-400",  accent: "border-violet-500/30" },
  { iconBg: "from-pink-500/25 to-amber-500/15",     iconColor: "text-pink-700 dark:text-pink-400",    accent: "border-pink-500/30" },
  { iconBg: "from-amber-500/25 to-orange-500/15",   iconColor: "text-amber-700 dark:text-amber-400",   accent: "border-amber-500/30" },
  { iconBg: "from-violet-500/25 to-blue-500/15",    iconColor: "text-violet-700 dark:text-violet-400",  accent: "border-violet-500/30" },
  { iconBg: "from-emerald-500/25 to-teal-500/15",   iconColor: "text-emerald-700 dark:text-emerald-400", accent: "border-emerald-500/30" },
  { iconBg: "from-pink-500/25 to-violet-500/15",    iconColor: "text-pink-700 dark:text-pink-400",    accent: "border-pink-500/30" },
]

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
}

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Services() {
  const { language } = useLanguage()

  const handleLearnMore = (serviceTitle: string) => {
    scrollToSection("contact")
    sessionStorage.setItem("contactSubject", serviceTitle)
  }

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Mesh bg */}
      <div className="absolute inset-0 section-mesh pointer-events-none" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/8 rounded-full blur-[80px] pointer-events-none" />

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
            {language === "en" ? "Expert Solutions" : "Soluciones Expertas"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.services.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {translations.services.subtitle[language]}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Search
            const style = cardStyles[index % cardStyles.length]

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass-card gradient-border rounded-2xl p-6 flex flex-col gap-4 cursor-pointer"
                style={{ perspective: "800px" }}
              >
                {/* Icon */}
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${style.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-lg text-foreground group-hover:gradient-text-primary transition-all">
                  {service.title[language]}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description[language]}
                </p>

                {/* CTA link */}
                <button
                  onClick={() => handleLearnMore(service.title[language])}
                  className={`flex items-center gap-1.5 text-xs font-semibold ${style.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-auto self-start`}
                >
                  {language === "en" ? "Learn more" : "Saber más"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
