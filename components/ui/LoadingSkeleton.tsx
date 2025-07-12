"use client"

import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
  variant?: 'default' | 'hero' | 'card' | 'text'
}

export function LoadingSkeleton({ 
  className,
  variant = 'default'
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-muted rounded"
  
  const variants = {
    default: "h-4 w-full",
    hero: "h-12 w-3/4 mb-4",
    card: "h-48 w-full",
    text: "h-4 w-full"
  }
  
  return (
    <div className={cn(baseClasses, variants[variant], className)} />
  )
}

interface HeroSkeletonProps {
  className?: string
}

export function HeroSkeleton({ className }: HeroSkeletonProps) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-20 xl:py-20", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <LoadingSkeleton className="h-6 w-32" />
              <LoadingSkeleton variant="hero" />
              <LoadingSkeleton className="h-8 w-5/6" />
              <LoadingSkeleton className="h-4 w-full" />
              <LoadingSkeleton className="h-4 w-4/5" />
            </div>
            <div className="flex gap-2 pt-4">
              <LoadingSkeleton className="h-10 w-32" />
              <LoadingSkeleton className="h-10 w-32" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <LoadingSkeleton className="w-96 h-96 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoadingSkeleton
