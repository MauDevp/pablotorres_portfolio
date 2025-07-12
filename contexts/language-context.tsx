"use client"

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react"
import type { Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Storage helper functions
const STORAGE_KEY = "pablo-torres-language"

const safeGetFromStorage = (): Language | null => {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === "en" || stored === "es" ? stored : null
  } catch {
    return null
  }
}

const safeSetToStorage = (lang: Language) => {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Ignore storage errors
  }
}

const detectBrowserLanguage = (): Language => {
  if (typeof window === "undefined") return "en"
  const browserLang = navigator.language.split("-")[0]
  return browserLang === "es" ? "es" : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(true)

  // Initialize language preference
  useEffect(() => {
    const savedLanguage = safeGetFromStorage()
    
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = detectBrowserLanguage()
      setLanguageState(browserLang)
      safeSetToStorage(browserLang)
    }
    
    setIsLoading(false)
  }, [])

  // Memoized language setter
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    safeSetToStorage(lang)
  }, [])

  // Memoized context value
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    isLoading
  }), [language, setLanguage, isLoading])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

