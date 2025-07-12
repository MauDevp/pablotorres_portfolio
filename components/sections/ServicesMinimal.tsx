"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function ServicesMinimal() {
  const { language } = useLanguage()

  const services = [
    {
      title: language === "en" ? "Digital Strategy" : "Estrategia Digital",
      description: language === "en" 
        ? "Comprehensive digital marketing strategies tailored to your business goals"
        : "Estrategias de marketing digital integrales adaptadas a tus objetivos de negocio"
    },
    {
      title: language === "en" ? "Content Marketing" : "Marketing de Contenidos",
      description: language === "en"
        ? "Engaging content that resonates with your audience and drives results"
        : "Contenido atractivo que resuena con tu audiencia y genera resultados"
    },
    {
      title: language === "en" ? "SEO & SEM" : "SEO y SEM",
      description: language === "en"
        ? "Optimize your online presence and increase visibility in search engines"
        : "Optimiza tu presencia online y aumenta la visibilidad en buscadores"
    },
    {
      title: language === "en" ? "AI Integration" : "Integración de IA",
      description: language === "en"
        ? "Leverage artificial intelligence to automate and enhance your marketing efforts"
        : "Aprovecha la inteligencia artificial para automatizar y mejorar tus esfuerzos de marketing"
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2">
              {translations.services.title[language]}
            </h2>
            <div className="w-16 h-0.5 bg-foreground"></div>
          </motion.div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-heading font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
