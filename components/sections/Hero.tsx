"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  const { language } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="home" className="py-16 md:py-24 lg:py-32 xl:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
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
              <Button
                size="lg"
                className="gap-1 group bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("contact")}
              >
                {translations.hero.cta[language]}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="/cv/pablo_torres_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-primary/20 hover:bg-primary/5"
              >
                <Button size="lg" variant="outline">
                  {translations.hero.downloadCV[language]}
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

