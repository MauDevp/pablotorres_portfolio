"use client"

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Create a loading fallback for the SplitText component
const SplitTextLoading = ({ text, className }: { text: string; className?: string }) => (
  <div className={`${className} animate-pulse`}>
    {text}
  </div>
)

// Dynamically import the SplitText component with loading fallback
const SplitText = dynamic(() => import('./SplitText'), {
  loading: ({ text, className }: { text: string; className?: string }) => (
    <SplitTextLoading text={text} className={className} />
  ),
  ssr: false
})

type SplitTextProps = ComponentProps<typeof SplitText>

export default function LazySplitText(props: SplitTextProps) {
  return <SplitText {...props} />
}
