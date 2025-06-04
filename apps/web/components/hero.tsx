"use client"

import { fadeInUp, scaleIn } from "@/data/animations"
import { codeExample } from "@/lib/code-example"
import theme from "@/lib/custom-theme"
import { Card, CardContent } from "@rivo-gg/ui/components/card"
import { Copy, Star } from "lucide-react"
import { motion } from "motion/react"
import { createHighlighter } from "shiki"
import { toast } from "sonner"

const highlighter = await createHighlighter({
  themes: [theme],
  langs: ["typescript"]
})

const html = highlighter.codeToHtml(codeExample, {
  lang: "typescript",
  theme: "rivo-gg-geld-dark"
})

export function Hero() {
  const handleCopy = () => {
    navigator.clipboard.writeText("bun add @rivo-gg/geld")
    toast.success("Command copied to clipboard", {
      description: "You can now paste it in your terminal."
    })
  }

  return (
    <section className="container relative z-10 mx-auto flex flex-1 items-center px-4">
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
            <span className="bg-gradient-to-t from-primary/50 to-primary bg-clip-text text-transparent">
              financial library
            </span>{" "}
            for TypeScript.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-foreground/60 text-lg leading-relaxed"
            variants={fadeInUp}
          >
            A powerful TypeScript/JavaScript library for financial validations
            and operations — starting with lightning-fast IBAN validation &
            formatting, with more tools on the way.
          </motion.p>

          <motion.div
            className="my-8 flex items-center gap-4 text-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 rounded-lg border border-foreground/10 bg-background/50 px-3 py-2">
              <span className="text-primary/70">$</span>
              <code className="text-foreground/70">bun add @rivo-gg/geld</code>
              <Copy
                className="h-4 w-4 cursor-pointer text-foreground/50 transition-colors hover:text-foreground"
                onClick={handleCopy}
              />
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
          <Card className="gap-0 overflow-hidden border-input bg-background/40 py-0 backdrop-blur-sm">
            <div className="flex items-center justify-between border-input border-b bg-input/45 px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-1">
                <Copy className="h-4 w-4 cursor-pointer text-foreground/50 hover:text-foreground" />
              </div>
            </div>

            <CardContent className="p-0">
              <motion.div
                className="relative flex min-h-[24px] items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <pre className="flex overflow-x-auto bg-input/25 p-6 font-mono text-sm">
                  <div className="mr-4 w-8 flex-shrink-0 select-none flex-col text-right text-gray-600 leading-6">
                    {Array.from({ length: 17 }, (_, i) => (
                      <span key={i}>
                        {String(i + 1).padStart(2, "0")} <br />
                      </span>
                    ))}
                  </div>
                  <code
                    className="text-gray-300 leading-6"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </pre>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
