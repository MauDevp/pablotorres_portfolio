"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, BarChart3, TrendingUp, Globe, MessageSquare, Mail } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"

// Importar el hook useInView
import { useInView } from "@/hooks/useInView"
import { scrollToSection } from "@/lib/utils"

export default function Services() {
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

  // Función para manejar el clic en "Ver más"
  const handleLearnMore = (serviceTitle: string) => {
    // Navegar a la sección de contacto
    scrollToSection("contact")

    // Establecer el asunto del formulario
    // Usamos sessionStorage para pasar el valor entre componentes
    sessionStorage.setItem("contactSubject", serviceTitle)
  }

  // Función para renderizar el icono correcto basado en el nombre del icono
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="h-6 w-6 text-primary" />
      case "BarChart3":
        return <BarChart3 className="h-6 w-6 text-primary" />
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6 text-primary" />
      case "Globe":
        return <Globe className="h-6 w-6 text-primary" />
      case "MessageSquare":
        return <MessageSquare className="h-6 w-6 text-primary" />
      case "Mail":
        return <Mail className="h-6 w-6 text-primary" />
      default:
        return <Search className="h-6 w-6 text-primary" />
    }
  }

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50 z-0"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Expert Solutions" : "Soluciones Expertas"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.services.title[language]}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {translations.services.subtitle[language]}
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
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              language={language}
              fadeIn={fadeIn}
              renderIcon={renderIcon}
              handleLearnMore={handleLearnMore}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ServiceItemProps {
  service: any
  language: "en" | "es"
  fadeIn: any
  renderIcon: (iconName: string) => React.ReactElement
  handleLearnMore: (serviceTitle: string) => void
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, language, fadeIn, renderIcon, handleLearnMore }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.7 })

  return (
    <motion.div
      ref={ref}
      className={`group flex flex-col items-center space-y-4 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 bg-background/80 backdrop-blur-sm ${
        isInView ? "ring-2 ring-primary/20 md:ring-0" : ""
      }`}
      variants={fadeIn}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div
        className={`rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20 ${
          isInView ? "bg-primary/20 scale-110" : ""
        } duration-300`}
      >
        {renderIcon(service.icon)}
      </div>
      <h3 className={`text-xl font-bold transition-colors ${isInView ? "text-primary" : "group-hover:text-primary"}`}>
        {service.title[language]}
      </h3>
      <p className="text-center text-muted-foreground">{service.description[language]}</p>
      <div className={`pt-2 transition-opacity ${isInView ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <Button
          variant="link"
          className="text-primary p-0 h-auto"
          onClick={() => handleLearnMore(service.title[language])}
        >
          {language === "en" ? "Learn more" : "Saber más"} →
        </Button>
      </div>
    </motion.div>
  )
}

