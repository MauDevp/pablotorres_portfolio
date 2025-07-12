"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, BarChart3, TrendingUp, Globe, MessageSquare, Mail, Sparkles, Lightbulb, Rocket } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"

// Importar el hook useInView
import { useInView } from "@/hooks/useInView"
import { scrollToSection } from "@/lib/utils"

export default function ServicesCreative() {
  const { language } = useLanguage()

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
  }

  const handleLearnMore = (serviceTitle: string) => {
    scrollToSection("contact")
    sessionStorage.setItem("contactSubject", serviceTitle)
  }

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

  const traits = [
    { icon: <Sparkles className="w-5 h-5" />, label: language === "en" ? "Innovative" : "Innovador" },
    { icon: <Lightbulb className="w-5 h-5" />, label: language === "en" ? "Creative" : "Creativo" },
    { icon: <Rocket className="w-5 h-5" />, label: language === "en" ? "Driven" : "Motivado" },
  ]

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <motion.div
        className="container relative z-10 mx-auto px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={item}>
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Our Expertise" : "Nuestro Expertise"}
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {translations.services.title[language]}
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed my-4">
            {translations.services.subtitle[language]}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            {traits.map((trait, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg"
              >
                {trait.icon}
                <span className="text-sm font-medium">{trait.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto py-12"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              language={language}
              renderIcon={renderIcon}
              handleLearnMore={handleLearnMore}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  service: any
  language: "en" | "es"
  renderIcon: (iconName: string) => React.ReactElement
  handleLearnMore: (serviceTitle: string) => void
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, language, renderIcon, handleLearnMore }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.6 })

  return (
    <motion.div
      ref={ref}
      className={`group flex flex-col items-center justify-center space-y-4 rounded-xl border p-8 shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-2xl ${
        isInView ? "ring-2 ring-primary/20" : ""
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white`}
      >
        {renderIcon(service.icon)}
      </div>
      <h3 className="text-2xl font-bold text-center group-hover:text-primary transition-colors">
        {service.title[language]}
      </h3>
      <p className="text-center text-muted-foreground">
        {service.description[language]}
      </p>
      <Button
        variant="link"
        className="text-primary p-0 h-auto"
        onClick={() => handleLearnMore(service.title[language])}
      >
        {language === "en" ? "Learn more" : "Saber más"} →
      </Button>
    </motion.div>
  )
}

