import type React from "react"
import "@/app/globals.css"
import { Inter, Syne } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Pablo Torres - Digital Marketing Expert",
  description: "Elevating brands with data-driven strategies and AI-powered insights that deliver measurable results.",
  appleWebApp: {
    title: "Pablo Torres",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
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
      <body className={`${inter.variable} ${syne.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



