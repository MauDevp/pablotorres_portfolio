"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Footer() {
  const { language } = useLanguage()

  const navItems = [
    { id: "home", label: translations.nav.home },
    { id: "about", label: translations.nav.about },
    { id: "experience", label: translations.nav.experience },
    { id: "services", label: translations.nav.services },
    { id: "skills", label: translations.nav.skills },
    { id: "portfolio", label: translations.nav.portfolio },
    { id: "testimonials", label: translations.nav.testimonials },
    { id: "contact", label: translations.nav.contact },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="border-t bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent z-0"></div>

      <div className="container flex flex-col gap-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-2 font-bold text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <User className="h-6 w-6 text-primary" />
              <span>Pablo Torres</span>
            </motion.div>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Transforming digital marketing strategies with data-driven insights and AI-powered solutions."
                : "Transformando estrategias de marketing digital con insights basados en datos y soluciones potenciadas por IA."}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.linkedin.com/in/pabloseb10/" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === "en" ? "Quick Links" : "Enlaces Rápidos"}</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {item.label[language]}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{language === "en" ? "Contact" : "Contacto"}</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">pabloseb107@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+52 3329092732</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{translations.about.location[language]}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">{translations.footer.copyright[language]}</div>
          <div className="text-sm text-muted-foreground">
            {language === "en"
              ? "Designed with ❤️ for exceptional digital experiences"
              : "Diseñado con ❤️ para experiencias digitales excepcionales"}
          </div>
        </div>
      </div>
    </footer>
  )
}

