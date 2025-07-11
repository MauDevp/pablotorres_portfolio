"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import Orb from "../ui/OrbSimple"
import SplitText from "@/components/ui/SplitText"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  const { language } = useLanguage()

  const handleAnimationComplete = () => {
    console.log('Pablo Torres animation completed!');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="home" className="py-16 md:py-20 lg:py-20 xl:py-20 relative overflow-hidden">
      {/* Overlay muy sutil */}
      <div className="absolute inset-0 bg-background/15 z-[1]"></div>
      
      {/* Additional accent elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl z-[2]"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl z-[2]"></div>

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
                <SplitText
                  text="Pablo Torres"
                  className="text-primary"
                  delay={80}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 50, rotationX: -90 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <SplitText
                text={translations.hero.title[language]}
                className="text-2xl font-bold sm:text-3xl md:text-4xl"
                delay={100}
                duration={0.7}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 30, scale: 0.9 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="left"
              />
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
            <div 
              className="relative group cursor-pointer" 
              style={{ width: '100%', height: '600px', position: 'relative' }}
            >
              {/* Orb Effect con valores por defecto */}
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
              
              {/* Profile Image positioned over the Orb */}
              <div 
                className="absolute inset-0 flex items-center justify-center z-10"
                style={{ transform: 'translateY(-20px)' }}
                onMouseEnter={(e) => {
                  // Simular eventos de mouse en el container del Orb
                  const orbContainer = e.currentTarget.parentElement?.querySelector('.orb-container') as HTMLElement;
                  if (orbContainer) {
                    const mouseEnterEvent = new MouseEvent('mouseenter', {
                      bubbles: true,
                      cancelable: true,
                      clientX: e.clientX,
                      clientY: e.clientY
                    });
                    orbContainer.dispatchEvent(mouseEnterEvent);
                  }
                }}
                onMouseMove={(e) => {
                  // Propagar el movimiento del mouse al Orb
                  const orbContainer = e.currentTarget.parentElement?.querySelector('.orb-container') as HTMLElement;
                  if (orbContainer) {
                    const mouseMoveEvent = new MouseEvent('mousemove', {
                      bubbles: true,
                      cancelable: true,
                      clientX: e.clientX,
                      clientY: e.clientY
                    });
                    orbContainer.dispatchEvent(mouseMoveEvent);
                  }
                }}
                onMouseLeave={(e) => {
                  // Simular mouse leave en el Orb
                  const orbContainer = e.currentTarget.parentElement?.querySelector('.orb-container') as HTMLElement;
                  if (orbContainer) {
                    const mouseLeaveEvent = new MouseEvent('mouseleave', {
                      bubbles: true,
                      cancelable: true,
                      clientX: e.clientX,
                      clientY: e.clientY
                    });
                    orbContainer.dispatchEvent(mouseLeaveEvent);
                  }
                }}
              >
                <Image
                  src="/profile/Pablo_perfil_3.png"
                  width={380}
                  height={380}
                  alt="Pablo Torres - Digital Marketing Expert"
                  className="rounded-full object-cover aspect-square"
                  style={{
                    filter: 'drop-shadow(0 0 25px rgba(0,0,0,0.4)) contrast(1.1) brightness(1.05) saturate(1.1)',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-20 transition-all duration-300 group-hover:shadow-xl group-hover:bg-background/95">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 group-hover:animate-pulse"></div>
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

