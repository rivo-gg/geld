import "@rivo-gg/ui/globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import type { ReactNode } from "react"
import { Providers } from "./providers"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "Geld - Comprehensive Financial Library for TypeScript"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <Script
        src="https://app.databuddy.cc/databuddy.js"
        data-client-id="jQxt6I1OAJDjh77256UCz"
        data-track-hash-changes="true"
        data-track-web-vitals="true"
        data-track-errors="true"
        data-enable-batching="true"
        crossOrigin="anonymous"
        defer
      />
      <body
        className={`${fontSans.variable} ${fontMono.variable} flex min-h-screen flex-col font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
