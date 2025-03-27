"use client";

import type React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

import { useTheme } from "next-themes"; // Importar useTheme

export default function Contact() {
  const { theme, resolvedTheme } = useTheme(); // Obtener el tema actual
  const { language } = useLanguage();
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [mounted, setMounted] = useState(false); // Estado para controlar el montaje
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado específico para el tema

  // Asegurarse de que el componente está montado para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar cambios de tema y actualizar el estado
  useEffect(() => {
    if (mounted) {
      // Verificar si estamos en modo oscuro
      const isSystemDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isThemeDark = resolvedTheme === "dark";

      console.log("Theme detection:", {
        theme,
        resolvedTheme,
        isSystemDark,
        isThemeDark,
      });

      setIsDarkTheme(isThemeDark);
    }
  }, [theme, resolvedTheme, mounted]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Cargar el asunto del formulario desde sessionStorage
  useEffect(() => {
    const savedSubject = sessionStorage.getItem("contactSubject");
    if (savedSubject) {
      setSubject(savedSubject);
      // Limpiar después de usar
      sessionStorage.removeItem("contactSubject");
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: translations.contact.form.success[language],
      description: translations.contact.form.successDescription[language],
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setSubject("");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-muted/50 z-0"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            {language === "en" ? "Let's Connect" : "Conectemos"}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {translations.contact.title[language]}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {translations.contact.subtitle[language]}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <motion.div
            className="flex flex-col space-y-6 rounded-xl border bg-background/80 backdrop-blur-sm p-6 shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                {translations.contact.info.title[language]}
              </h3>
              <p className="text-muted-foreground">
                {translations.contact.info.description[language]}
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <motion.a
                href={`mailto:${translations.contact.info.email[language]}`}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="break-all">
                  {translations.contact.info.email[language]}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${translations.contact.info.phone[language]}`}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>{translations.contact.info.phone[language]}</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>{translations.contact.info.location[language]}</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span>{translations.contact.info.availability[language]}</span>
              </motion.div>
            </div>
            <Card className="mt-6 overflow-hidden">
              <CardContent className="p-0">
                {/*<Image
                  src={
                    isDarkTheme
                      ? "/Logo_full_name_white.png"
                      : "/Logo_full_name.png"
                  }
                  width={374}
                  height={213}
                  alt="Location Map"
                  className="mx-auto w-[150px] h-auto object-contain"
                />*/}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="space-y-6 rounded-xl border bg-background/80 backdrop-blur-sm p-6 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {translations.contact.form.firstName[language]}
                  </label>
                  <input
                    id="first-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={
                      translations.contact.form.placeholders.firstName[language]
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {translations.contact.form.lastName[language]}
                  </label>
                  <input
                    id="last-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder={
                      translations.contact.form.placeholders.lastName[language]
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {translations.contact.form.email[language]}
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={
                    translations.contact.form.placeholders.email[language]
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {translations.contact.form.subject[language]}
                </label>
                <input
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={
                    translations.contact.form.placeholders.subject[language]
                  }
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {translations.contact.form.message[language]}
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder={
                    translations.contact.form.placeholders.message[language]
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
              >
                {translations.contact.form.submit[language]}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
