"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { useCallback, useEffect } from "react"

import { Button } from "@/components/ui/button"
<<<<<<< Updated upstream
=======
import { OptimizedImage, preloadImage } from "@/components/ui/optimized-image"
>>>>>>> Stashed changes
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  const { language, isLoading } = useLanguage()

<<<<<<< Updated upstream
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
=======
  // Preload critical images
  useEffect(() => {
    preloadImage("/profile/Pablo_perfil_3.png");
    // Preload client avatars
    for (let i = 1; i <= 4; i++) {
      preloadImage(`/clients_profile_picture/picture_${i}.jpg`);
    }
  }, [])

  const handleContactClick = useCallback(() => {
    scrollToSection("contact")
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
>>>>>>> Stashed changes
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  }

  if (isLoading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4 mx-auto"></div>
          <div className="h-12 bg-gray-200 rounded w-96 mb-2 mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded w-80 mx-auto"></div>
        </div>
      </section>
    )
  }

  return (
<<<<<<< Updated upstream
    <section id="home" className="py-16 md:py-24 lg:py-32 xl:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
=======
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
>>>>>>> Stashed changes
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
<<<<<<< Updated upstream
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                {language === "en" ? "Digital Marketing Strategist" : "Mtro. Marketing Digital & Al"}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-primary">Pablo Torres</span>
              </h1>
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">{translations.hero.title[language]}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                {translations.hero.subtitle[language]}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row mt-8">
=======
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-heading font-medium"
              variants={fadeInUp}
            >
              {language === "en" ? "Digital Marketing Strategist" : "Estratega de Marketing Digital"}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              variants={fadeInUp}
            >
              <span className="text-primary">Pablo Torres</span>
              <br />
              {translations.hero.title[language]}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl"
              variants={fadeInUp}
            >
              {translations.hero.subtitle[language]}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
>>>>>>> Stashed changes
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                onClick={handleContactClick}
              >
                <span className="relative z-10 flex items-center">
                  {translations.hero.cta[language]}
                  <ArrowRight className="ml-3 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <a
                href="/cv/pablo_torres_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto group border-2 border-foreground/20 hover:border-foreground/40 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:bg-foreground/5"
                >
                  {translations.hero.downloadCV[language]}
                  <Download className="ml-3 h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                </Button>
              </a>
<<<<<<< Updated upstream
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-8 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={`/clients_profile_picture/picture_${i}.jpg`}
                      width={40}
                      height={40}
                      alt={`Client ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-xl text-primary">18+</span> {translations.hero.clients[language]}
              </div>
              <div className="text-sm">
                <span className="font-bold text-xl text-primary">92%</span>{" "}
                {language === "en" ? "Client retention rate" : "Tasa de retención de clientes"}
              </div>
              <div className="text-sm">
                <span className="font-bold text-xl text-primary">3.5x - 7x</span>{" "}
                {language === "en" ? "Average ROI" : "ROI promedio"}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 via-primary/20 to-primary/40 blur-lg"></div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <Image
                src="/profile/Pablo_perfil_3.png"
                width={450}
                height={450}
                alt="Pablo Torres - Digital Marketing Expert"
                className="relative rounded-lg object-cover aspect-square z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-3 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">
                    {language === "en" ? "Available for projects" : "Disponible para proyectos"}
                  </span>
=======
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 pt-8"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                    >
                      <OptimizedImage
                        src={`/clients_profile_picture/picture_${i}.jpg`}
                        width={40}
                        height={40}
                        alt={`Client ${i}`}
                        className="w-full h-full object-cover"
                        eager
                        quality={70}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-primary text-xl">18+</span>
                  <br />
                  {translations.hero.clients[language]}
>>>>>>> Stashed changes
                </div>
              </div>

              <div className="text-sm">
                <span className="font-bold text-primary text-xl">300%</span>
                <br />
                {language === "en" ? "AI-Enhanced ROI" : "ROI Mejorado con IA"}
              </div>

              <div className="text-sm">
                <span className="font-bold text-primary text-xl">3x</span>
                <br />
                {language === "en" ? "Conversion Rate" : "Tasa de Conversión"}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
<OptimizedImage
                  src="/profile/Pablo_perfil_3.png"
                  width={400}
                  height={400}
                  alt="Pablo Torres - Digital Marketing Expert"
                  className="rounded-full object-cover w-full h-full"
                  priority
                  aspectRatio={1}
                />
              </div>

              <motion.div
                className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {language === "en" ? "Available" : "Disponible"}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

