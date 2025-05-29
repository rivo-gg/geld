"use client"

import { fadeInUp, scaleIn } from "@/data/animations"
import { Button } from "@rivo-gg/ui/components/button"
import { Card, CardContent } from "@rivo-gg/ui/components/card"
import { Copy, ExternalLink, Star } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export function Hero() {
  const [activeTab, setActiveTab] = useState("geld.ts")

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

  function escapeHtml(unsafe: string) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }

  return (
    <section className="container relative z-10 mx-auto my-16 px-4 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h1
            className="mb-6 max-w-lg font-bold text-4xl leading-tight md:text-6xl"
            variants={fadeInUp}
          >
            The most comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              financial library
            </span>{" "}
            for TypeScript.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-gray-400 text-lg leading-relaxed"
            variants={fadeInUp}
          >
            A powerful TypeScript/JavaScript library for financial validations
            and operations — starting with lightning-fast IBAN validation &
            formatting, with more tools on the way.
          </motion.p>

          <motion.div
            className="my-16 flex items-center gap-4 text-sm"
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
                              __html: escapeHtml(line)
                                // Comments
                                .replace(
                                  /(\/\/.*)/g,
                                  '<span style="color: #546e7a">$1</span>'
                                )
                                // Strings (single and double quotes)
                                .replace(
                                  /(['"`])((?:\\.|[^\\])*?)\1/g,
                                  '<span style="color: #c3e88d">$&</span>'
                                )
                                // Keywords
                                .replace(
                                  /\b(export|const|async|await|import|from|return|new|let|function|if|else|try|catch|typeof|instanceof|in|this|class|extends|super)\b/g,
                                  '<span style="color: #c792ea">$1</span>'
                                )
                                // Types
                                .replace(
                                  /\b(string|number|boolean|any|void|null|undefined|never|unknown)\b/g,
                                  '<span style="color: #82aaff">$1</span>'
                                )
                                // Numbers
                                .replace(
                                  /\b(\d+(\.\d+)?)\b/g,
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
  )
}
