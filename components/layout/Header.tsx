"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import LanguageSwitcher from "@/components/language/LanguageSwitcher"
import { scrollToSection } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const { language } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = isMounted ? resolvedTheme === "dark" : true

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-black/10 shadow-lg shadow-black/10 dark:border-white/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={darkMode ? "/Logo_name_white.png" : "/Logo_name.png"}
            width={120}
            height={40}
            alt="Pablo Torres"
            className="w-20 h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <Link
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 group ${
                  activeSection === item.id
                    ? "text-violet-700 dark:text-violet-300"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label[language]}
                {/* Active dot indicator */}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400"
                  />
                )}
                {/* Hover bg */}
                <span className="absolute inset-0 rounded-md bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-200" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(darkMode ? "light" : "dark")}
                  className="h-8 w-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{darkMode ? "Light mode" : "Dark mode"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Gradient CTA */}
          <Button
            className="hidden md:flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-violet-500/20 transition-all duration-200 hover:shadow-violet-500/40 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {translations.contact.title[language]}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[360px] glass-card border-l border-violet-500/20 p-0"
            >
              <div className="flex flex-col h-full p-6">
                {/* Mobile header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-syne font-bold text-lg gradient-text-primary">Pablo Torres</span>
                </div>

                {/* Top gradient line */}
                <div className="h-px w-full bg-gradient-to-r from-violet-500/40 via-pink-500/40 to-transparent mb-6" />

                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-violet-500/15 text-violet-700 border border-violet-500/25 dark:text-violet-300 dark:border-violet-500/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                      )}
                      {item.label[language]}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-violet-500/20"
                    onClick={() => {
                      scrollToSection("contact")
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    {translations.contact.title[language]}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
