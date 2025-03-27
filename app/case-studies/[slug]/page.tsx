"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function CaseStudyPage() {
  const { language } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const foundProject = projects.find((p) => p.slug === slug);

      if (foundProject) {
        setProject(foundProject);
      } else {
        // Project not found, redirect to portfolio
        router.push("/#portfolio");
      }

      setLoading(false);
    }
  }, [params.slug, router]);

  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const foundProject = projects.find((p) => p.slug === slug);

      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [language, params.slug]);

  useEffect(() => {
    if (params.slug) {
      const slug = params.slug as string;
      const foundProject = projects.find((p) => p.slug === slug);

      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [language]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title[language]}
          width={1920}
          height={1080}
          className="w-full h-[50vh] md:h-[60vh] object-cover"
        />

        <div className="container relative z-20 -mt-[30vh] md:-mt-[40vh]">
          <Link href="/#portfolio">
            <Button
              variant="outline"
              size="sm"
              className="mb-6 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to Portfolio" : "Volver al Portafolio"}
            </Button>
          </Link>

          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
            {project.category[language]}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title[language]}
          </h1>

          <p className="text-xl text-white/90 max-w-3xl">
            {project.summary[language]}
          </p>

          <div className="mt-6 inline-block bg-primary/90 px-4 py-2 rounded-full text-white font-medium">
            {project.increase[language]}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en" ? "The Challenge" : "El Desafío"}
                </h2>
                <p className="text-muted-foreground">
                  {project.challenge[language]}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en" ? "The Solution" : "La Solución"}
                </h2>
                <p className="text-muted-foreground">
                  {project.solution[language]}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en" ? "The Results" : "Los Resultados"}
                </h2>
                <ul className="space-y-2">
                  {project.results[language].map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <p className="text-muted-foreground">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {project.testimonial && (
                <div className="bg-muted/30 p-6 rounded-xl border relative">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />

                  <p className="text-lg italic mb-6 relative z-10">
                    "{project.testimonial.quote[language]}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {project.testimonial.author[language].charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {project.testimonial.author[language]}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.testimonial.position[language]}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold">
                  {language === "en"
                    ? "Interested in similar results?"
                    : "¿Interesado en resultados similares?"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "Let's discuss how we can achieve similar or better results for your business."
                    : "Hablemos sobre cómo podemos lograr resultados similares o mejores para tu negocio."}
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    {language === "en" ? "Contact Me" : "Contáctame"}
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">
                  {language === "en"
                    ? "Related Services"
                    : "Servicios Relacionados"}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <Link
                      href="/#services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {language === "en"
                        ? "Data-Driven SEO"
                        : "SEO Basado en Datos"}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <Link
                      href="/#services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {language === "en"
                        ? "Performance Analytics"
                        : "Analítica de Rendimiento"}
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <Link
                      href="/#services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {language === "en"
                        ? "Strategic Social Media"
                        : "Redes Sociales Estratégicas"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "en"
              ? "Ready to Transform Your Digital Strategy?"
              : "¿Listo para Transformar tu Estrategia Digital?"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === "en"
              ? "Let's work together to create a customized digital marketing strategy that delivers measurable results for your business."
              : "Trabajemos juntos para crear una estrategia de marketing digital personalizada que entregue resultados medibles para tu negocio."}
          </p>
          <Link href="/#contact">
            <Button size="lg">
              {language === "en" ? "Get Started" : "Comenzar"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
