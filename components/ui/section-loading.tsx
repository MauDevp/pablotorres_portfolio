"use client"

import { motion } from "framer-motion"

interface SectionLoadingProps {
  title?: string
  className?: string
}

export default function SectionLoading({ title, className = "" }: SectionLoadingProps) {
  return (
    <motion.div 
      className={`py-16 md:py-24 lg:py-32 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="animate-pulse">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Loading...
            </div>
            <div className="h-8 bg-muted rounded-md w-48 mb-4 mx-auto"></div>
            <div className="h-4 bg-muted rounded-md w-96 mx-auto"></div>
          </div>
          
          <div className="flex justify-center items-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
          
          {title && (
            <p className="text-sm text-muted-foreground mt-2">
              Loading {title}...
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
