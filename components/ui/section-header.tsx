"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle,
  description, 
  align = "left",
  className 
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 max-w-3xl",
        alignmentClasses[align],
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      )}
      <div className={cn(
        "w-20 h-1 bg-primary mt-6",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </motion.div>
  )
}
