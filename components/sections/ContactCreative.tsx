"use client";

import React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Smile, Send, Hand } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

interface ContactProps {
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function ContactCreative({
  activeSection,
  darkMode,
  setDarkMode,
}: ContactProps) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [subject, setSubject] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: 90 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8 },
    },
  };

  useEffect(() => {
    const savedSubject = sessionStorage.getItem("contactSubject");
    if (savedSubject) {
      setSubject(savedSubject);
      sessionStorage.removeItem("contactSubject");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: translations.contact.form.success[language],
      description: translations.contact.form.successDescription[language],
    });

    const form = e.target as HTMLFormElement;
    form.reset();
    setSubject("");
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      {/* Iconos flotantes animados */}
      <motion.div
        className="absolute top-24 right-24 w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Smile className="w-8 h-8 text-primary" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 w-28 h-28 bg-secondary/20 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          x: [10, -10, 10],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Send className="w-7 h-7 text-secondary" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [-10, 10, -10],
          rotate: [360, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Hand className="w-6 h-6 text-accent" />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold mb-4">
            {language === "en" ? "Get in Touch" : "Ponte en Contacto"}
          </div>
          <div className="space-y-2">
            <motion.h2
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              {translations.contact.title[language]}
            </motion.h2>
            <motion.p
              className="text-muted-foreground md:text-xl/relaxed"
              variants={itemVariants}
            >
              {translations.contact.subtitle[language]}
            </motion.p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-16 lg:grid-cols-2">
          <motion.div
            className="flex flex-col space-y-6 rounded-xl border bg-background/80 backdrop-blur-sm p-8 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
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
                className="flex items-center gap-3 group p-4 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="break-all">
                  {translations.contact.info.email[language]}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${translations.contact.info.phone[language]}`}
                className="flex items-center gap-3 group p-4 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <span>{translations.contact.info.phone[language]}</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 group p-4 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span>{translations.contact.info.location[language]}</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group p-4 rounded-lg hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <span>{translations.contact.info.availability[language]}</span>
              </motion.div>
            </div>
            <Card className="mt-6 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={
                    darkMode
                      ? "/Logo_full_name_white.png"
                      : "/Logo_full_name.png"
                  }
                  width={374}
                  height={213}
                  alt="Location Map"
                  className="mx-auto w-[150px] h-auto my-2 object-contain"
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="space-y-6 rounded-xl border bg-background/80 backdrop-blur-sm p-8 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
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
                className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90"
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
