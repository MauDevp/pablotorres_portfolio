"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Languages, GraduationCap, Award } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function About() {
  const { language } = useLanguage()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Get to know me" : "Conóceme"}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            {translations.about.title[language]}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Información Personal */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {translations.about.description[language]}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  {language === "en" ? "Contact Information" : "Información de Contacto"}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{translations.about.location[language]}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>+52 3329092732</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="break-all">pabloseb107@gmail.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  {translations.about.languages.title[language]}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background border border-border rounded-lg hover:border-primary/20 transition-colors">
                    <div className="text-lg font-semibold">{translations.about.languages.spanish[language]}</div>
                    <div className="text-sm text-muted-foreground">Nativo</div>
                  </div>
                  <div className="text-center p-4 bg-background border border-border rounded-lg hover:border-primary/20 transition-colors">
                    <div className="text-lg font-semibold">{translations.about.languages.english[language]}</div>
                    <div className="text-sm text-muted-foreground">Avanzado</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Educación y Certificaciones */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {translations.about.education.title[language]}
                </h3>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="font-heading font-bold text-lg mb-2">
                        {translations.about.education.master[language]}
                      </h4>
                      <p className="text-muted-foreground">
                        {translations.about.education.university[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {translations.about.certifications.title[language]}
                </h3>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <p className="font-medium">
                        {translations.about.certifications.scrum[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Stats adicionales */}
              <motion.div variants={itemVariants} className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary font-heading">100+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Campaigns" : "Campañas"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary font-heading">98%</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "en" ? "Success Rate" : "Tasa de Éxito"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
