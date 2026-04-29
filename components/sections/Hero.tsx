"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download, TrendingUp, Users, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import Orb from "../ui/OrbSimple"
import SplitText from "@/components/ui/SplitText"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const metrics = [
  { icon: TrendingUp, value: "3.5x–7x", labelEn: "Average ROI",      labelEs: "ROI promedio" },
  { icon: Star,       value: "92%",     labelEn: "Client retention", labelEs: "Retención" },
]

export default function Hero() {
  const { language } = useLanguage()
  const [isProfileHovered, setIsProfileHovered] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center py-20 overflow-hidden hero-mesh dot-grid"
    >
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] animate-float-slow pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col space-y-6">

            {/* Badge chip */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="chip">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                {language === "en" ? "Digital Marketing Strategist" : "Estratega de Marketing Digital"}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
                <SplitText
                  text="Pablo Torres"
                  className="gradient-text-primary"
                  delay={60}
                  duration={0.7}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40, rotationX: -60 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0.1}
                  rootMargin="-30px"
                  textAlign="left"
                />
              </h1>
            </motion.div>

            {/* Subtitle / role */}
            <motion.div custom={0.25} variants={fadeUp} initial="hidden" animate="visible">
              <p className="font-syne text-xl sm:text-2xl font-semibold text-foreground/80">
                {translations.hero.title[language]}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-[540px] text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {translations.hero.subtitle[language]}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-violet-500/30 glow-pulse transition-all duration-200 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                {translations.hero.cta[language]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <a href="/cv/pablo_torres_cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-violet-500/30 text-violet-800 hover:bg-violet-500/10 hover:border-violet-500/50 dark:text-violet-300 dark:hover:border-violet-400/50 transition-all duration-200 w-full sm:w-auto"
                >
                  {translations.hero.downloadCV[language]}
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            {/* Metric cards row */}
            <motion.div
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 pt-2"
            >
              {/* Avatars + count card */}
              <div className="glass-card metric-card glow-primary flex-row flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-violet-500/40 overflow-hidden">
                      <Image
                        src={`/clients_profile_picture/picture_${i}.jpg`}
                        width={28}
                        height={28}
                        alt={`Client ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-syne font-bold text-lg gradient-text-primary">18+</span>
                  <p className="text-xs text-muted-foreground leading-none mt-0.5">
                    {language === "en" ? "Clients" : "Clientes"}
                  </p>
                </div>
              </div>

              {metrics.map(({ icon: Icon, value, labelEn, labelEs }) => (
                <div key={value} className="glass-card metric-card gradient-border">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="h-3.5 w-3.5 text-violet-400" />
                    <span className="font-syne font-bold text-base gradient-text-primary">{value}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-none">
                    {language === "en" ? labelEn : labelEs}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — profile visual ── */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative"
              style={{ width: "100%", maxWidth: "520px", height: "560px" }}
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
              onFocus={() => setIsProfileHovered(true)}
              onBlur={() => setIsProfileHovered(false)}
            >
              {/* Violet glow ring behind orb */}
              <div
                className={`absolute inset-8 rounded-full bg-gradient-to-br from-violet-500/25 to-pink-500/15 blur-3xl transition-all duration-500 ${
                  isProfileHovered ? "scale-110 opacity-100" : "scale-100 opacity-75"
                }`}
              />

              {/* Orb */}
              <Orb hoverIntensity={0.5} rotateOnHover={true} hue={260} forceHoverState={isProfileHovered} />

              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" style={{ transform: "translateY(-16px)" }}>
                <Image
                  src="/profile/Pablo_perfil_3.png"
                  width={360}
                  height={360}
                  alt="Pablo Torres - Digital Marketing Expert"
                  priority
                  sizes="(min-width: 1024px) 360px, 70vw"
                  className="rounded-full object-cover aspect-square"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(139,92,246,0.35)) contrast(1.08) brightness(1.06) saturate(1.1)",
                  }}
                />
              </div>

              {/* Floating badge — AI Strategy */}
              <motion.div
                className="absolute top-8 right-0 glass-card gradient-border px-3 py-2 rounded-xl z-20 animate-float-slow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-violet-800 dark:text-violet-300">SEO + SEM Strategy</p>
                <p className="text-xs text-muted-foreground">Media Planning</p>
              </motion.div>

              {/* Floating badge — Campaigns */}
              <motion.div
                className="absolute bottom-14 left-0 glass-card gradient-border px-3 py-2 rounded-xl z-20 animate-float-slow"
                style={{ animationDelay: "3s" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">10+ Campaigns</p>
                <p className="text-xs text-muted-foreground">High-Impact Results</p>
              </motion.div>

              {/* Available status */}
              <motion.div
                className="absolute bottom-4 right-0 glass-card gradient-border px-3 py-2 rounded-lg z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                    {language === "en" ? "Available for projects" : "Disponible para proyectos"}
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
