"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function AboutCreative() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animación del título con efecto de escritura
      if (titleRef.current) {
        const titleText = titleRef.current.textContent || ""
        titleRef.current.innerHTML = ""
        
        titleText.split("").forEach((char, index) => {
          const span = document.createElement("span")
          span.textContent = char === " " ? "\u00A0" : char
          span.style.opacity = "0"
          span.style.transform = "translateY(50px) rotateX(-90deg)"
          titleRef.current?.appendChild(span)
          
          gsap.to(span, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%"
            }
          })
        })
      }

      // Animación de las estadísticas
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item")
        statItems.forEach((item, index) => {
          gsap.fromTo(item, 
            {
              opacity: 0,
              y: 100,
              rotation: 10,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%"
              }
            }
          )
        })
      }

      // Animación de las tarjetas
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".about-card")
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              rotateY: index % 2 === 0 ? -15 : 15,
              scale: 0.8
            },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%"
              }
            }
          )
        })
      }

      // Animación de la imagen
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          {
            opacity: 0,
            scale: 0.5,
            rotation: 180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%"
            }
          }
        )
      }

    }, sectionRef.current)

    return () => ctx.revert()
  }, [])

  const personalityTraits = [
    {
      icon: <Heart className="w-6 h-6" />,
      label: language === "en" ? "Positive Energy" : "Energía Positiva",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      label: language === "en" ? "Creative Mind" : "Mente Creativa",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      label: language === "en" ? "AI Expert" : "Experto en IA",
      color: "from-purple-400 to-blue-400"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      label: language === "en" ? "Results Driven" : "Enfocado en Resultados",
      color: "from-green-400 to-emerald-400"
    }
  ]

  const stats = [
    { number: "5+", label: language === "en" ? "Years Experience" : "Años de Experiencia" },
    { number: "50+", label: language === "en" ? "Happy Clients" : "Clientes Felices" },
    { number: "95%", label: language === "en" ? "Success Rate" : "Tasa de Éxito" },
    { number: "10x", label: language === "en" ? "Average ROI" : "ROI Promedio" }
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden section-padding">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 gradient-bg-subtle"></div>
      
      {/* Elementos flotantes animados - ocultos en móvil para rendimiento */}
      <motion.div
        className="absolute top-20 left-20 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl hidden md:block"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl hidden md:block"
        animate={{
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Iconos flotantes */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-primary/30"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 text-secondary/30"
        animate={{
          rotate: [360, 0],
          x: [0, 30, 0],
          scale: [1, 0.7, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Brain className="w-10 h-10" />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Título con efecto de escritura */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 glass rounded-full border border-primary/30 mb-4 md:mb-6 animate-scaleIn"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
            <span className="font-accent text-xs md:text-sm font-medium gradient-text-subtle">
              {language === "en" ? "✨ About Pablo Torres" : "✨ Sobre Pablo Torres"}
            </span>
          </motion.div>
          
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 gradient-text text-shadow-lg animate-fadeUp"
          >
            {translations.about.title[language]}
          </h2>
        </div>

        {/* Estadísticas con diseño llamativo */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20 animate-stagger-children">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item text-center p-4 md:p-6 rounded-xl md:rounded-2xl glass border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-scaleIn"
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold gradient-text mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm font-accent text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <motion.div
              className="space-y-4 md:space-y-6 animate-fadeLeft"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                {translations.about.description[language]}
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className={`inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full gradient-bg text-primary-foreground text-xs md:text-sm font-medium shadow-lg shadow-primary/20 animate-scaleIn`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {trait.icon}
                    <span>{trait.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              className="space-y-3 md:space-y-4 animate-fadeUp"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl glass border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300">
                <div className="p-2 rounded-full gradient-bg">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                </div>
                <span className="font-body text-sm md:text-base">{translations.about.location[language]}</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl glass border border-secondary/20 hover:border-secondary/40 hover:shadow-glow transition-all duration-300">
                <div className="p-2 rounded-full gradient-bg">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                </div>
                <span className="font-body text-sm md:text-base">+52 3329092732</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl glass border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300">
                <div className="p-2 rounded-full gradient-bg">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                </div>
                <span className="font-body text-sm md:text-base break-all">pabloseb107@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Imagen con efectos creativos */}
          <div className="flex justify-center">
            <motion.div
              ref={imageRef}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Anillos decorativos */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transform: "scale(1.1)" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ transform: "scale(1.2)" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transform: "scale(1.3)" }}
              />

              {/* Imagen principal */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                <Image
                  src="/profile/Pablo_perfil_3.png"
                  width={320}
                  height={320}
                  alt="Pablo Torres - Marketing & AI Expert"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>

              {/* Elementos flotantes alrededor */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Tarjetas de educación y certificaciones */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mt-20">
          <motion.div
            className="about-card"
            whileHover={{ y: -10, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">
                    {translations.about.education.title[language]}
                  </h3>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {translations.about.education.master[language]}
                </h4>
                <p className="text-muted-foreground">
                  {translations.about.education.university[language]}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ y: -10, rotateY: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">
                    {translations.about.certifications.title[language]}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {translations.about.certifications.scrum[language]}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
