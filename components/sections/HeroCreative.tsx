"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useCallback } from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  const { language, isLoading } = useLanguage()

  const handleContactClick = useCallback(() => {
    scrollToSection("contact")
  }, [])

  if (isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-muted rounded w-64 mb-4 mx-auto"></div>
          <div className="h-12 bg-muted rounded w-96 mb-2 mx-auto"></div>
          <div className="h-6 bg-muted rounded w-80 mx-auto"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente vibrante */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      
      {/* Blob animado de fondo */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Contenido de texto */}
            <motion.div
              className="text-center lg:text-left space-y-8 md:space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >

              {/* Título principal con enfoque vibrante */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-none">
                <motion.span 
                  className="block gradient-text animate-gradient"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Pablo Torres
                </motion.span>
                <motion.span 
                  className="block text-foreground mt-2 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {translations.hero.title[language]}
                </motion.span>
              </h1>

              {/* Descripción sutil */}
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {translations.hero.subtitle[language]}
              </motion.p>

              {/* Botones con diseño elegante */}
              <motion.div
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-8 md:pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg min-w-[220px]"
                    onClick={handleContactClick}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {translations.hero.cta[language]}
                      <ArrowRight className="ml-3 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/cv/pablo_torres_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-primary text-foreground hover:bg-primary/10 hover:border-secondary transition-all duration-300 font-body text-base px-8 py-4 rounded-full min-w-[200px]"
                    >
                      {translations.hero.downloadCV[language]}
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Imagen con efectos creativos */}
            <motion.div
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative">
                {/* Anillos decorativos */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transform: "scale(1.1)" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-secondary/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ transform: "scale(1.2)" }}
                />

                {/* Imagen principal */}
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 gradient-bg rounded-full blur-xl opacity-30"></div>
                  <Image
                    src="/profile/Pablo_perfil_3.png"
                    width={400}
                    height={400}
                    alt="Pablo Torres - Digital Marketing Expert"
                    className="relative z-10 rounded-full object-cover w-full h-full shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
