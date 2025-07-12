"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function ContactMinimal() {
  const { language } = useLanguage()

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {translations.contact.title[language]}
            </h2>
            <p className="text-lg text-muted-foreground">
              {translations.contact.subtitle[language]}
            </p>
          </motion.div>

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder={language === "en" ? "Name" : "Nombre"}
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-border rounded-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={language === "en" ? "Email" : "Correo"}
                  className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-border rounded-none focus:border-foreground transition-colors"
                />
              </div>
            </div>
            
            <div>
              <Input
                type="text"
                placeholder={language === "en" ? "Subject" : "Asunto"}
                className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-border rounded-none focus:border-foreground transition-colors"
              />
            </div>
            
            <div>
              <Textarea
                placeholder={language === "en" ? "Message" : "Mensaje"}
                rows={4}
                className="w-full px-0 py-6 bg-transparent border-0 border-b-2 border-border rounded-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center pt-8"
            >
              <Button
                type="submit"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-body text-base px-8 py-4 rounded-none min-w-[200px]"
              >
                {translations.contact.form.submit[language]}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
