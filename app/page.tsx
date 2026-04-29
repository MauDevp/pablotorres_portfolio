"use client";

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

const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "services",
  "skills",
  "portfolio",
  "testimonials",
  "contact",
];

// Main content component
function MainContent() {
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// LanguageProvider is already in layout.tsx — no need to duplicate here
export default function Home() {
  return <MainContent />;
}
