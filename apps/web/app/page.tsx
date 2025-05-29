"use client"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@rivo-gg/ui/components/card"
import { Code, Shield, Zap } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

export default function Page() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <main className="relative flex-1 bg-black text-white">
      <div className="absolute inset-0 h-full bg-gradient-to-br from-black via-gray-950 to-black" />

      <Navbar />

      <Hero />

      {/* Features Section */}
      <section className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full border-gray-800/50 bg-gray-950/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Code className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mb-3 font-semibold text-xl">
                  Framework Agnostic
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Support for popular frameworks, including React, Vue, Svelte,
                  Astro, Solid, Qwik, SvelteKit, Nuxt, Tanstack Start, Hono, and
                  more.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-blue-400 text-sm hover:text-blue-300"
                >
                  Learn more
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-gray-800/50 bg-gray-950/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mb-3 font-semibold text-xl">
                  Financial & Security
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Built-in support for financial operations with session and
                  account management features.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-green-400 text-sm hover:text-green-300"
                >
                  Learn more
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-gray-800/50 bg-gray-950/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mb-3 font-semibold text-xl">
                  Support multiple providers
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Allow users to integrate with their preferred payment
                  providers, including Stripe, PayPal, and more.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-purple-400 text-sm hover:text-purple-300"
                >
                  Learn more
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 mt-20 border-gray-800/50 border-t"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-gray-500 text-sm">copyright rivo 2025</div>
            <div className="mt-4 text-gray-500 text-sm md:mt-0">
              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                legal notice
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
