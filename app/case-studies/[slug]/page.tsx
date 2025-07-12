"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { NotionImage } from "@/components/ui/notion-image";
import { SafeImage } from "@/components/ui/safe-image";
import Link from "next/link";
import { ArrowLeft, Quote, Target, Lightbulb, TrendingUp, CheckCircle2, ExternalLink, Share2, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import type { Project } from "@/data/projects";

export default function CaseStudyPage() {
  const { language } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetchProject(params.slug as string);
    }
  }, [params.slug]);

  const fetchProject = async (slug: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/case-studies/${slug}`);
      
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        data = { error: 'Invalid JSON response' };
      }
      
      if (!response.ok) {
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          data: data || 'No data received'
        });
        // Show error message
        router.push("/#portfolio");
        return;
      }
      
      if (data && data.project) {
        setProject(data.project);
        // Fetch related projects
        fetchRelatedProjects(data.project.id);
      } else {
        console.error('No project data received:', data);
        router.push("/#portfolio");
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      router.push("/#portfolio");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProjects = async (currentProjectId: string) => {
    try {
      const response = await fetch('/api/case-studies');
      const data = await response.json();
      
      if (response.ok && data.projects) {
        const filtered = data.projects
          .filter((p: Project) => p.id !== currentProjectId)
          .slice(0, 3);
        setRelatedProjects(filtered);
      }
    } catch (error) {
      console.error('Error fetching related projects:', error);
    }
  };

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
      {/* Hero Section - Improved */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10"></div>
        <NotionImage
          src={project.image || "/placeholder.svg"}
          alt={project.title[language]}
          width={1920}
          height={1080}
          className="w-full h-[70vh] object-cover"
          priority
        />

        <div className="container relative z-20 -mt-[35vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="mb-8 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back" : "Regresar"}
            </Button>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge 
                variant="glass" 
                size="lg" 
                className="bg-slate-900/80 backdrop-blur-md border border-slate-600/50 text-white font-medium px-4 py-2 shadow-lg"
              >
                {project.category[language]}
              </Badge>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="h-4 w-4" />
                <span>2024</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title[language]}
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
              {project.summary[language]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Badge 
                variant="glass" 
                size="lg" 
                className="bg-slate-900/80 backdrop-blur-md border border-slate-600/50 text-white font-semibold px-6 py-3 shadow-lg"
              >
                <TrendingUp className="h-5 w-5 text-blue-300 mr-2" />
                {project.increase[language]}
              </Badge>
              <div className="flex flex-wrap gap-3">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105 border-0"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {language === "en" ? "View Project" : "Ver Proyecto"}
                    </Button>
                  </a>
                )}
                {project.materialsLink && (
                  <a
                    href={project.materialsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg"
                      variant="outline"
                      className="bg-slate-800/90 backdrop-blur-sm text-white border-slate-600 hover:bg-slate-700 font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      {language === "en" ? "View Materials" : "Ver Materiales"}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Enhanced */}
      <section className="py-20">
        <div className="container">
          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {project.results[language].slice(0, 4).map((result, index) => {
              const match = result.match(/([0-9,]+%?|[0-9,]+x?)/)
              const metric = match ? match[0] : ""
              const description = result.replace(metric, "").trim()
              
              return (
                <motion.div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                    {metric}
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {description.length > 50 ? description.substring(0, 50) + "..." : description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                    <Target className="h-6 w-6 text-pink-500 dark:text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === "en" ? "The Challenge" : "El Desafío"}
                  </h2>
                </div>
                <div className="pl-11">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.challenge[language]}
                  </p>
                </div>
              </motion.div>

              {/* Solution Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === "en" ? "The Solution" : "La Solución"}
                  </h2>
                </div>
                <div className="pl-11">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution[language]}
                  </p>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-950/20 dark:to-blue-950/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-pink-500 dark:text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    {language === "en" ? "The Results" : "Los Resultados"}
                  </h2>
                </div>
                <div className="pl-11 space-y-3">
                  {project.results[language].map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Testimonial Card - Enhanced */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-pink-50/50 to-white dark:from-pink-950/10 dark:to-gray-900 p-8 rounded-2xl border border-pink-100 dark:border-pink-900/20 shadow-sm">
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-pink-200 dark:text-pink-800" />
                    
                    <p className="text-lg italic mb-6 relative z-10 leading-relaxed">
                      "{project.testimonial.quote[language]}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 dark:from-pink-600 dark:to-pink-700 flex items-center justify-center shadow-sm">
                          <span className="text-white font-bold text-xl">
                            {project.testimonial.author[language].charAt(0)}
                          </span>
                        </div>
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
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {language === "en"
                    ? "Want Similar Results?"
                    : "¿Quieres Resultados Similares?"}
                </h3>
                <p className="mb-6 text-blue-50">
                  {language === "en"
                    ? "Let's create a custom strategy for your business."
                    : "Creemos una estrategia personalizada para tu negocio."}
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-sm">
                    {language === "en" ? "Start Your Project" : "Inicia Tu Proyecto"}
                  </Button>
                </Link>
              </motion.div>

              {/* Project Details Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border"
              >
                <h3 className="font-semibold mb-4">
                  {language === "en" ? "Project Details" : "Detalles del Proyecto"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      {language === "en" ? "Client" : "Cliente"}
                    </span>
                    <span className="text-sm font-medium">
                      {project.testimonial?.author[language] || "Confidential"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      {language === "en" ? "Category" : "Categoría"}
                    </span>
                    <span className="text-sm font-medium">
                      {project.category[language]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">
                      {language === "en" ? "Year" : "Año"}
                    </span>
                    <span className="text-sm font-medium">2024</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">
                      {language === "en" ? "Result" : "Resultado"}
                    </span>
                    <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                      {project.increase[language]}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        variant="default" 
                        className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium transition-all hover:shadow-md"
                        size="sm"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {language === "en" ? "View Project" : "Ver Proyecto"}
                      </Button>
                    </a>
                  )}
                  {project.materialsLink && (
                    <a
                      href={project.materialsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-pink-200 hover:border-pink-300 hover:bg-pink-50 dark:border-pink-800 dark:hover:bg-pink-950/20 transition-all"
                        size="sm"
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        {language === "en" ? "View Materials" : "Ver Materiales"}
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 border-t">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">
            {language === "en" ? "More Case Studies" : "Más Casos de Estudio"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.length > 0 ? (
              relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/case-studies/${relatedProject.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      {relatedProject.image && relatedProject.image !== '/placeholder.svg' ? (
                        <>
                          <NotionImage
                            src={relatedProject.image}
                            alt={relatedProject.title[language]}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            fallbackSrc={`/projects/${relatedProject.slug || 'placeholder'}.jpg`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </>
                      ) : (
                        <>
                          {/* Placeholder con información visual */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm">
                            <div className="text-4xl mb-2 text-slate-600 dark:text-slate-300">
                              📊
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium text-center px-4">
                              {relatedProject.category[language]}
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-slate-900/80 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full border border-slate-600/50">
                          {relatedProject.increase[language]}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                      {relatedProject.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedProject.category[language]}
                    </p>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-muted-foreground">
                  {language === "en" 
                    ? "No related projects available." 
                    : "No hay proyectos relacionados disponibles."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
