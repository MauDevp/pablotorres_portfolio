"use client"

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Loading fallback for motion components
const MotionLoading = ({ 
  className, 
  children, 
  style 
}: { 
  className?: string; 
  children?: React.ReactNode; 
  style?: React.CSSProperties;
}) => (
  <div className={className} style={style}>
    {children}
  </div>
)

// Dynamically import framer-motion components
export const DynamicMotionDiv = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.div })),
  {
    loading: ({ className, children, style }) => (
      <MotionLoading className={className} style={style}>
        {children}
      </MotionLoading>
    ),
    ssr: false
  }
)

export const DynamicMotionSection = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.section })),
  {
    loading: ({ className, children, style }) => (
      <section className={className} style={style}>
        {children}
      </section>
    ),
    ssr: false
  }
)

export const DynamicMotionSpan = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.span })),
  {
    loading: ({ className, children, style }) => (
      <span className={className} style={style}>
        {children}
      </span>
    ),
    ssr: false
  }
)

export const DynamicMotionH1 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h1 })),
  {
    loading: ({ className, children, style }) => (
      <h1 className={className} style={style}>
        {children}
      </h1>
    ),
    ssr: false
  }
)

export const DynamicMotionH2 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h2 })),
  {
    loading: ({ className, children, style }) => (
      <h2 className={className} style={style}>
        {children}
      </h2>
    ),
    ssr: false
  }
)

export const DynamicMotionH3 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h3 })),
  {
    loading: ({ className, children, style }) => (
      <h3 className={className} style={style}>
        {children}
      </h3>
    ),
    ssr: false
  }
)

export const DynamicMotionP = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.p })),
  {
    loading: ({ className, children, style }) => (
      <p className={className} style={style}>
        {children}
      </p>
    ),
    ssr: false
  }
)

export const DynamicMotionA = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.a })),
  {
    loading: ({ className, children, style }) => (
      <a className={className} style={style}>
        {children}
      </a>
    ),
    ssr: false
  }
)

export const DynamicMotionButton = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.button })),
  {
    loading: ({ className, children, style }) => (
      <button className={className} style={style}>
        {children}
      </button>
    ),
    ssr: false
  }
)

export const DynamicMotionImg = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.img })),
  {
    loading: ({ className, style, alt }) => (
      <img className={className} style={style} alt={alt} />
    ),
    ssr: false
  }
)

// Export types for the dynamic components
export type DynamicMotionDivProps = ComponentProps<typeof DynamicMotionDiv>
export type DynamicMotionSectionProps = ComponentProps<typeof DynamicMotionSection>
export type DynamicMotionSpanProps = ComponentProps<typeof DynamicMotionSpan>
export type DynamicMotionH1Props = ComponentProps<typeof DynamicMotionH1>
export type DynamicMotionH2Props = ComponentProps<typeof DynamicMotionH2>
export type DynamicMotionH3Props = ComponentProps<typeof DynamicMotionH3>
export type DynamicMotionPProps = ComponentProps<typeof DynamicMotionP>
export type DynamicMotionAProps = ComponentProps<typeof DynamicMotionA>
export type DynamicMotionButtonProps = ComponentProps<typeof DynamicMotionButton>
export type DynamicMotionImgProps = ComponentProps<typeof DynamicMotionImg>
