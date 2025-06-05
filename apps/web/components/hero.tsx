"use client"

import { fadeInUp } from "@/data/animations"
import { Copy } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"
import { CodeBlock } from "./codeblock"

export function Hero() {
  const handleCopy = () => {
    navigator.clipboard.writeText("bun add @rivo-gg/geld")
    toast.success("Command copied to clipboard", {
      description: "You can now paste it in your terminal."
    })
  }

  return (
    <section className="container relative z-10 mx-auto flex flex-1 items-center px-4">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-6 flex flex-col items-center lg:mt-0 lg:items-start lg:text-start"
        >
          <motion.h1
            className="mb-6 max-w-lg text-center font-bold text-4xl leading-tight md:text-6xl lg:text-start"
            variants={fadeInUp}
          >
            The most comprehensive{" "}
            <span className="bg-gradient-to-t from-purple-600 to-purple-400 bg-clip-text text-transparent">
              financial library
            </span>{" "}
            for TypeScript.
          </motion.h1>

          <motion.p
            className="mb-8 max-w-lg text-center text-foreground/60 text-lg leading-relaxed lg:text-start"
            variants={fadeInUp}
          >
            A powerful TypeScript/JavaScript library for financial validations
            and operations — starting with lightning-fast IBAN validation &
            formatting, with more tools on the way.
          </motion.p>

          <motion.div
            className="mb-8 flex items-center gap-4 text-sm"
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
            {/* <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            </div> */}
          </motion.div>
        </motion.div>

        {/* Code Editor */}
        <CodeBlock />
      </div>
    </section>
  )
}
