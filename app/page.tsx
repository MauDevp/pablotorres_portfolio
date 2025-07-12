"use client";

import { useState, useEffect } from "react";

import { LanguageProvider } from "@/contexts/language-context";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import AnimationProvider from "@/components/AnimationProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/HeroCreative";
import About from "@/components/sections/AboutMinimal";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/ServicesMinimal";
import Skills from "@/components/sections/SkillsNew";
import Portfolio from "@/components/sections/PortfolioCreative";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/ContactMinimal";

// Main content component
function MainContent() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionIds = [
    "home",
    "about",
    "experience",
    "skills", // Grouped experience and skills together
    "services",
    "portfolio",
    "testimonials",
    "contact",
  ];
  const activeSection = useScrollSpy(sectionIds);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AnimationProvider>
      <div className="flex min-h-screen flex-col">
        <Header
          activeSection={activeSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main id="main-content" className="flex-1" role="main">
          <Hero />
          <About />
          <Experience />
          <Services />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Contact
            activeSection={activeSection}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

// Wrap the main content with the language provider
export default function Home() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
