"use client"

import dynamic from 'next/dynamic'
import type { ComponentProps } from 'react'

// Dynamically import framer-motion components
export const DynamicMotionDiv = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.div })),
  {
    ssr: false
  }
)

export const DynamicMotionSection = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.section })),
  {
    ssr: false
  }
)

export const DynamicMotionSpan = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.span })),
  {
    ssr: false
  }
)

export const DynamicMotionH1 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h1 })),
  {
    ssr: false
  }
)

export const DynamicMotionH2 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h2 })),
  {
    ssr: false
  }
)

export const DynamicMotionH3 = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.h3 })),
  {
    ssr: false
  }
)

export const DynamicMotionP = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.p })),
  {
    ssr: false
  }
)

export const DynamicMotionA = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.a })),
  {
    ssr: false
  }
)

export const DynamicMotionButton = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.button })),
  {
    ssr: false
  }
)

export const DynamicMotionImg = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.img })),
  {
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
