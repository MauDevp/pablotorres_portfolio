import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pablo Torres - Digital Marketing Expert",
  description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Pablo Torres", "Digital Marketing", "AI-powered insights", "Elevating brands", "portfolio", "Data-driven strategies", "AI insights", "brand strategy", "Measurable results"],
  authors: [
    {
      name: "Mauricio Silva",
      url: "https://maudevp.tech",
    }
  ],
  creator: "Mauricio Silva",
  publisher: "Mauricio Silva",
  openGraph: {
    title: "Pablo Torres - Digital Marketing Expert",
    description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
    type: "website",
    locale: "en",
    siteName: "Pablo Torres - Digital Marketing Expert",
    images: [
      {
        url: "/favicon_full.png",
        width: 980,
        height: 760,
        alt: "Pablo Torres - Digital Marketing Expert",
      },
    ],
  },
  twitter: {
    title: "Pablo Torres - Digital Marketing Expert",
    description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
    card: "summary_large_image",
    site: "@MauricioRamonS3",
    creator: "@MauricioRamonS3",
  },
  instagram: {
    title: "Pablo Torres - Digital Marketing Expert",
    description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
  },
  facebook: {
    title: "Pablo Torres - Digital Marketing Expert",
    description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'