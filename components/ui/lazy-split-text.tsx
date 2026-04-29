"use client"

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Dynamically import the SplitText component with loading fallback
const SplitText = dynamic(() => import('./SplitText'), {
  ssr: false
})

type SplitTextProps = ComponentProps<typeof SplitText>

export default function LazySplitText(props: SplitTextProps) {
  return <SplitText {...props} />
}
