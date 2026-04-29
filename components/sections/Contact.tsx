"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const inputClass =
  "flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/40 transition-all duration-200 backdrop-blur-sm"

export default function Contact() {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [subject, setSubject] = useState("")

  useEffect(() => {
    const saved = sessionStorage.getItem("contactSubject")
    if (saved) {
      setSubject(saved)
      sessionStorage.removeItem("contactSubject")
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast({
      title: translations.contact.form.success[language],
      description: translations.contact.form.successDescription[language],
    })
    const form = e.target as HTMLFormElement
    form.reset()
    setSubject("")
  }

  const infoItems = [
    { icon: Mail,     href: `mailto:${translations.contact.info.email[language]}`,   label: translations.contact.info.email[language],        color: "text-violet-400", bg: "from-violet-500/20 to-pink-500/10" },
    { icon: Phone,    href: `tel:${translations.contact.info.phone[language]}`,       label: translations.contact.info.phone[language],         color: "text-pink-400",   bg: "from-pink-500/20 to-amber-500/10" },
    { icon: MapPin,   href: undefined,                                                 label: translations.contact.info.location[language],      color: "text-amber-400",  bg: "from-amber-500/20 to-orange-500/10" },
    { icon: Calendar, href: undefined,                                                 label: translations.contact.info.availability[language],  color: "text-emerald-400",bg: "from-emerald-500/20 to-teal-500/10" },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden hero-mesh dot-grid">
      {/* Background blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="chip mb-4 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            {language === "en" ? "Let's Connect" : "Conectemos"}
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold gradient-text-primary mt-4">
            {translations.contact.title[language]}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {translations.contact.subtitle[language]}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ── Left: info ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Info header */}
            <div className="glass-card gradient-border rounded-2xl p-6">
              <h3 className="font-syne font-bold text-xl gradient-text-primary mb-1">
                {translations.contact.info.title[language]}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {translations.contact.info.description[language]}
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {infoItems.map(({ icon: Icon, href, label, color, bg }) => {
                const inner = (
                  <div className={`glass-card gradient-border rounded-xl px-4 py-3 flex items-center gap-3 group transition-all duration-200 hover:glow-primary`}>
                    <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-4 w-4 ${color}`} />
                    </div>
                    <span className="text-sm text-foreground/80 break-all">{label}</span>
                  </div>
                )
                return href
                  ? <a key={label} href={href} className="block">{inner}</a>
                  : <div key={label}>{inner}</div>
              })}
            </div>

            {/* Logo */}
            <div className="glass-card gradient-border rounded-2xl p-6 flex items-center justify-center">
              <Image
                src="/Logo_full_name.png"
                width={200}
                height={80}
                alt="Pablo Torres logo"
                className="h-16 w-auto object-contain opacity-80 dark:hidden"
              />
              <Image
                src="/Logo_full_name_white.png"
                width={200}
                height={80}
                alt="Pablo Torres logo"
                className="hidden h-16 w-auto object-contain opacity-80 dark:block"
              />
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            className="glass-card gradient-border rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="first-name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {translations.contact.form.firstName[language]}
                  </label>
                  <input
                    id="first-name"
                    className={inputClass}
                    placeholder={translations.contact.form.placeholders.firstName[language]}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="last-name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {translations.contact.form.lastName[language]}
                  </label>
                  <input
                    id="last-name"
                    className={inputClass}
                    placeholder={translations.contact.form.placeholders.lastName[language]}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {translations.contact.form.email[language]}
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder={translations.contact.form.placeholders.email[language]}
                  required
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {translations.contact.form.subject[language]}
                </label>
                <input
                  id="subject"
                  className={inputClass}
                  placeholder={translations.contact.form.placeholders.subject[language]}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {translations.contact.form.message[language]}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} min-h-[100px] resize-none`}
                  placeholder={translations.contact.form.placeholders.message[language]}
                  required
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-violet-500/25 glow-pulse transition-all duration-200 hover:scale-[1.02] font-semibold"
              >
                {translations.contact.form.submit[language]}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
