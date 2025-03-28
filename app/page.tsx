"use client";

import { useState, useEffect } from "react";

import { LanguageProvider } from "@/contexts/language-context";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

// Main content component
function MainContent() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionIds = [
    "home",
    "about",
    "experience",
    "services",
    "skills",
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
    <div className="flex min-h-screen flex-col">
      <Header
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex-1">
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
