"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { scrollToSection } from "@/lib/utils"

export default function Footer() {
  const { language } = useLanguage()

  const navItems = [
    { id: "home",         label: translations.nav.home },
    { id: "about",        label: translations.nav.about },
    { id: "experience",   label: translations.nav.experience },
    { id: "services",     label: translations.nav.services },
    { id: "skills",       label: translations.nav.skills },
    { id: "portfolio",    label: translations.nav.portfolio },
    { id: "testimonials", label: translations.nav.testimonials },
    { id: "contact",      label: translations.nav.contact },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/5">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 opacity-50" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none dark:from-black/40" />
      <div className="absolute inset-0 section-mesh pointer-events-none opacity-50" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-syne font-extrabold text-2xl gradient-text-primary">Pablo Torres</p>
              <p className="text-xs text-violet-700/80 dark:text-violet-400/70 mt-0.5">Digital Marketing & AI</p>
            </motion.div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {language === "en"
                ? "Transforming digital marketing strategies with data-driven insights and AI-powered solutions."
                : "Transformando estrategias de marketing digital con insights basados en datos y soluciones potenciadas por IA."}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/pabloseb10/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-violet-700 hover:glow-primary dark:hover:text-violet-300 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/pabloseb10"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card h-9 w-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-pink-700 hover:glow-secondary dark:hover:text-pink-300 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-syne font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-4">
              {language === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <nav className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm text-muted-foreground hover:text-violet-700 dark:hover:text-violet-300 transition-colors py-1"
                >
                  {item.label[language]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-syne font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-4">
              {language === "en" ? "Contact" : "Contacto"}
            </h3>
            <div className="space-y-3">
              {[
                { icon: Mail,   label: "pabloseb107@gmail.com" },
                { icon: Phone,  label: "+52 3329092732" },
                { icon: MapPin, label: translations.about.location[language] },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-violet-700 dark:text-violet-400 shrink-0" />
                  <span className="break-all">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>{translations.footer.copyright[language]}</span>
          <span className="gradient-text-secondary font-medium">
            {language === "en" ? "Designed for exceptional digital experiences" : "Diseñado para experiencias digitales excepcionales"}
          </span>
        </div>
      </div>
    </footer>
  )
}
