"use client"
import { Button } from "@rivo-gg/ui/components/button"
import { Card, CardContent } from "@rivo-gg/ui/components/card"
import { motion } from "framer-motion"
import {
  Code,
  Copy,
  ExternalLink,
  Github,
  Moon,
  Shield,
  Star,
  Sun,
  Terminal,
  Zap
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("geld.ts")
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const codeFiles = {
    "geld.ts": `export const geld = {
  create: (config: WalletConfig) => {
    return new Wallet(config)
  },
  
  transfer: async (params: TransferParams) => {
    const transaction = new Transaction(params)
    return await transaction.execute()
  },
  
  balance: async (walletId: string) => {
    return await WalletService.getBalance(walletId)
  }
}`,
    "wallet.ts": `import { geld } from '@rivo-gg/geld'

const wallet = geld.create({
  currency: 'USD',
  precision: 2,
  provider: 'stripe'
})

const result = await wallet.transfer({
  amount: 100.50,
  to: 'user-123',
  description: 'Payment for services'
})

console.log(result.transactionId)`
  }

  // Animation variants
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      {/* Header */}
      <motion.header
        className="relative z-10 border-gray-800/50 border-b backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl">GELD</span>
          </div>
          <nav className="flex items-center space-x-6">
            <div className="hidden items-center space-x-6 md:flex">
              <Link
                href="#"
                className="text-gray-400 text-sm transition-colors hover:text-white"
              >
                hello_
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm transition-colors hover:text-white"
              >
                docs
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm transition-colors hover:text-white"
              >
                changelogs
              </Link>
              <Link
                href="#"
                className="text-gray-400 text-sm transition-colors hover:text-white"
              >
                community
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 px-0 text-gray-400 hover:text-white"
              >
                <Sun className="dark:-rotate-90 h-4 w-4 rotate-0 scale-100 transition-all dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </nav>
        </div>
      </motion.header>

      {/* Announcement Bar */}
      <motion.div
        className="relative z-10 border-blue-500/20 border-b bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-2 text-center">
          <span className="text-blue-300 text-sm">
            Introducing Geld Infrastructure |
            <Link
              href="#"
              className="ml-1 text-blue-400 underline hover:text-blue-300"
            >
              Join the waitlist →
            </Link>
          </span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="container relative z-10 mx-auto px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div
              className="mb-6"
              variants={fadeInUp}
            >
              <span className="mb-2 block text-gray-400 text-sm">
                💰 Own Your Money
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 max-w-2xl font-bold text-4xl leading-tight md:text-6xl"
              variants={fadeInUp}
            >
              The most comprehensive{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                financial framework
              </span>{" "}
              for TypeScript.
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl text-gray-400 text-lg leading-relaxed"
              variants={fadeInUp}
            >
              Geld provides everything you need to build modern financial
              applications. From payments to accounting, all in one
              TypeScript-first package.
            </motion.p>

            <motion.div
              className="mb-8 flex flex-col gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-white font-medium text-black hover:bg-gray-200"
              >
                GET STARTED
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                <span className="mr-2">+</span>
                Create Financial App
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/50 px-3 py-2">
                <span className="text-gray-500">$</span>
                <code className="text-gray-300">bun add @rivo-gg/geld</code>
                <Copy className="h-4 w-4 cursor-pointer text-gray-500 transition-colors hover:text-white" />
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* Code Editor */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <Card className="gap-0 overflow-hidden border-gray-800/50 bg-gray-950/80 py-0 backdrop-blur-sm">
              <div className="flex items-center justify-between border-gray-800/50 border-b bg-gray-900/50 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-1">
                  <Copy className="h-4 w-4 cursor-pointer text-gray-500 hover:text-white" />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-gray-800/50 border-b bg-gray-900/30">
                {Object.keys(codeFiles).map((filename) => (
                  <button
                    key={filename}
                    type="button"
                    onClick={() => setActiveTab(filename)}
                    className={`border-gray-800/50 border-r px-4 py-2 text-sm transition-colors ${
                      activeTab === filename
                        ? "bg-gray-950/80 text-white"
                        : "text-gray-400 hover:bg-gray-900/50 hover:text-white"
                    }`}
                  >
                    {filename}
                  </button>
                ))}
              </div>

              <CardContent className="p-0">
                <div className="relative">
                  <pre className="overflow-x-auto bg-gray-950/50 p-6 font-mono text-sm">
                    <code className="text-gray-300 leading-6">
                      {codeFiles[activeTab as keyof typeof codeFiles]
                        .split("\n")
                        .map((line, i) => (
                          <motion.div
                            key={i}
                            className="flex min-h-[24px] items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03, duration: 0.3 }}
                          >
                            <span className="mr-4 w-8 flex-shrink-0 select-none text-right text-gray-600 leading-6">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className="flex-1 leading-6"
                              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                              dangerouslySetInnerHTML={{
                                __html: line
                                  .replace(
                                    /\b(export|const|async|await|import|from|return|new)\b/g,
                                    '<span style="color: #c792ea">$1</span>'
                                  )
                                  .replace(
                                    /\b(string|number|boolean)\b/g,
                                    '<span style="color: #82aaff">$1</span>'
                                  )
                                  .replace(
                                    /'([^']*)'/g,
                                    "<span style=\"color: #c3e88d\">'$1'</span>"
                                  )
                                  .replace(
                                    /"([^"]*)"/g,
                                    '<span style="color: #c3e88d">"$1"</span>'
                                  )
                                  .replace(
                                    /\/\/.*$/g,
                                    '<span style="color: #546e7a">$&</span>'
                                  )
                                  .replace(
                                    /\b(\d+\.?\d*)\b/g,
                                    '<span style="color: #f78c6c">$1</span>'
                                  )
                              }}
                            />
                          </motion.div>
                        ))}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Floating Demo Button */}
            <motion.div
              className="-bottom-4 -right-4 absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              <Button
                size="sm"
                className="bg-blue-600 shadow-lg hover:bg-blue-700"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
    </div>
  )
}
