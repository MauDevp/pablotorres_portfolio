"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const skillsData = [
  {
    category: { en: "Digital Marketing", es: "Marketing Digital" },
    skills: [
      "Google Ads",
      "Facebook Ads", 
      "SEO/SEM",
      "Analytics",
      "Content Marketing"
    ]
  },
  {
    category: { en: "Data Analysis", es: "Análisis de Datos" },
    skills: [
      "Excel",
      "Power BI", 
      "Google Analytics",
      "Data Studio",
      "SQL"
    ]
  },
  {
    category: { en: "Design & Creative", es: "Diseño y Creatividad" },
    skills: [
      "Photoshop",
      "Illustrator",
      "Figma", 
      "Canva",
      "Video Editing"
    ]
  },
  {
    category: { en: "Strategy & Planning", es: "Estrategia y Planificación" },
    skills: [
      "Strategic Planning",
      "Market Research",
      "Competitor Analysis",
      "ROI Optimization", 
      "Campaign Management"
    ]
  }
]

export default function Skills() {
  const { language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Professional Expertise" : "Experiencia Profesional"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            {translations.skills.title[language]}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillSet, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="bg-background border border-border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <h3 className="text-lg font-heading font-semibold mb-6 text-center group-hover:text-primary transition-colors">
                  {skillSet.category[language]}
                </h3>
                
                <div className="space-y-3">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 px-3 rounded-md hover:bg-muted/50 cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: skillIndex * 0.1 + index * 0.05 
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Years Experience" : "Años de Experiencia"}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                20+
              </div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Tools Mastered" : "Herramientas Dominadas"}
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Projects Completed" : "Proyectos Completados"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
