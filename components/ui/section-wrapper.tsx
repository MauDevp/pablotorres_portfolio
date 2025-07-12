"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
  variant?: "default" | "alternate" | "highlight"
}

export function SectionWrapper({ 
  id, 
  className, 
  children, 
  variant = "default" 
}: SectionWrapperProps) {
  const variants = {
    default: "bg-background",
    alternate: "bg-muted/30",
    highlight: "bg-gradient-to-b from-muted/50 to-background"
  }

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
