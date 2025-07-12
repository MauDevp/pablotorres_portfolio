"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function AboutMinimal() {
  const { language } = useLanguage()

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4" />,
      text: translations.about.location[language]
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "+52 3329092732"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: "pabloseb107@gmail.com"
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Título minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2">
              {translations.about.title[language]}
            </h2>
            <div className="w-16 h-0.5 bg-foreground"></div>
          </motion.div>

          {/* Contenido principal */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {translations.about.description[language]}
              </p>
              
              {/* Información de contacto */}
              <div className="space-y-3 pt-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Estadísticas simplificadas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Years Experience" : "Años de Experiencia"}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Projects Completed" : "Proyectos Completados"}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Client Satisfaction" : "Satisfacción del Cliente"}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">10x</div>
                <div className="text-sm text-muted-foreground">
                  {language === "en" ? "Average ROI" : "ROI Promedio"}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
