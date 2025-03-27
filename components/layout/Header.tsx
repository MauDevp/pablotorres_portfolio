"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, Moon, Sun, Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import LanguageSwitcher from "@/components/language/LanguageSwitcher"
import { scrollToSection } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Header({ activeSection, darkMode, setDarkMode }: HeaderProps) {
  const { language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-bold text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={darkMode ? "/Logo_name_white.png" : "/Logo_name.png"}
            width={120}
            height={120}
            alt="Profile"
            className="w-20 h-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label[language]}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)} className="mr-2">
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle dark mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="hidden md:flex" onClick={() => scrollToSection("contact")}>
            {translations.contact.title[language]}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px] border-l-primary/20 fixed">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 mt-2">
                  <div className="flex items-center gap-2 font-bold text-xl">
                    <User className="h-6 w-6 text-primary" />
                    <span>Pablo Torres</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`text-lg py-2 font-medium transition-colors hover:text-primary border-l-2 pl-3 ${
                        activeSection === item.id ? "text-primary border-primary" : "text-foreground border-transparent"
                      }`}
                    >
                      {item.label[language]}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-6 flex flex-col gap-4">
                  <Button
                    className="w-full"
                    onClick={() => {
                      scrollToSection("contact")
                      setIsMobileMenuOpen(false)
                    }}
                  >
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

