"use client"

import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="relative flex flex-1 flex-col gap-8 text-foreground">
      <div className="absolute inset-0 h-full bg-gradient-to-br from-background via-primary/20 to-background dark:via-primary/10" />
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
