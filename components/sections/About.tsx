"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Languages, GraduationCap, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function About() {
  const { language } = useLanguage()

  const infoCards = [
    { icon: MapPin, label: translations.about.location[language] },
    { icon: Phone,  label: "+52 3329092732" },
    { icon: Mail,   label: "pabloseb107@gmail.com" },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden section-mesh">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="chip mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            {language === "en" ? "About Me" : "Sobre Mí"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.about.title[language]}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {/* ── Left column ── */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Description */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {translations.about.description[language]}
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {infoCards.map(({ icon: Icon, label }) => (
                <div key={label} className="glass-card gradient-border rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-violet-700 dark:text-violet-400" />
                  </div>
                  <span className="text-sm text-foreground/80 break-all">{label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="glass-card gradient-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
                  <Languages className="h-3.5 w-3.5 text-violet-700 dark:text-violet-400" />
                </div>
                <h3 className="font-syne font-semibold text-sm">{translations.about.languages.title[language]}</h3>
              </div>

              <div className="space-y-3">
                {[
                  { label: translations.about.languages.spanish[language], value: 100 },
                  { label: translations.about.languages.english[language],  value: 85 },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{label}</span>
                      <span className="gradient-text-secondary font-medium">{value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-card gradient-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
                  <GraduationCap className="h-3.5 w-3.5 text-violet-700 dark:text-violet-400" />
                </div>
                <h3 className="font-syne font-semibold text-sm">{translations.about.education.title[language]}</h3>
              </div>
              <div className="border-l-2 border-violet-500/40 pl-4">
                <h4 className="font-semibold text-foreground">{translations.about.education.master[language]}</h4>
                <p className="text-sm text-muted-foreground mt-1">{translations.about.education.university[language]}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card gradient-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                  <Award className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="font-syne font-semibold text-sm">{translations.about.certifications.title[language]}</h3>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                <p className="text-sm text-foreground/80">{translations.about.certifications.scrum[language]}</p>
              </div>
            </div>

            {/* Highlight stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+",    label: language === "en" ? "Years Experience" : "Años de Experiencia", color: "from-violet-500/20 to-pink-500/20", text: "text-violet-800 dark:text-violet-300" },
                { value: "40%",   label: language === "en" ? "Traffic Growth"   : "Crecimiento de Tráfico", color: "from-pink-500/20 to-amber-500/20", text: "text-pink-800 dark:text-pink-300" },
                { value: "35%",   label: language === "en" ? "Web Traffic Lift" : "Aumento de Tráfico Web", text: "text-amber-800 dark:text-amber-300", color: "from-amber-500/20 to-orange-500/20" },
                { value: "30%",   label: language === "en" ? "Engagement Lift"  : "Aumento de Engagement", color: "from-violet-500/20 to-blue-500/20", text: "text-violet-800 dark:text-violet-300" },
              ].map(({ value, label, color, text }) => (
                <div key={value} className={`glass-card gradient-border rounded-xl p-4 bg-gradient-to-br ${color}`}>
                  <p className={`font-syne font-bold text-2xl ${text}`}>{value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
