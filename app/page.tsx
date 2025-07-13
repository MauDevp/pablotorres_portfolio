"use client";

import { useState, useEffect } from "react";

import { LanguageProvider } from "@/contexts/language-context";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import dynamic from 'next/dynamic';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

import SectionLoading from '@/components/ui/section-loading';

const About = dynamic(() => import('@/components/sections/About'), { 
  ssr: false, 
  loading: () => <SectionLoading title="About" /> 
});
const Experience = dynamic(() => import('@/components/sections/Experience'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Experience" /> 
});
const Services = dynamic(() => import('@/components/sections/Services'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Services" /> 
});
const Skills = dynamic(() => import('@/components/sections/Skills'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Skills" /> 
});
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Portfolio" /> 
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Testimonials" /> 
});
const Contact = dynamic(() => import('@/components/sections/Contact'), { 
  ssr: false, 
  loading: () => <SectionLoading title="Contact" /> 
});

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
