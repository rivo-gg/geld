"use client"

import { fadeInUp } from "@/data/animations"
import { highlighter } from "@/lib/highlighter"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@rivo-gg/ui/components/dropdown-menu"
import { Copy } from "lucide-react"
import { motion } from "motion/react"
import { Balancer } from "react-wrap-balancer"
import { toast } from "sonner"
import { CodeBlock } from "./codeblock"

const commands = [
  {
    name: "pnpm",
    command: "pnpm add @rivo-gg/geld"
  },
  {
    name: "npm",
    command: "npm i @rivo-gg/geld"
  },
  {
    name: "yarn",
    command: "yarn add @rivo-gg/geld"
  },
  {
    name: "bun",
    command: "bun add @rivo-gg/geld"
  }
]

export function Hero() {
  const handleCopy = (cmd: { name: string; command: string }) => {
    navigator.clipboard.writeText(cmd.command)
    toast.success(`Copied ${cmd.name} command to clipboard`)
  }

  const command = commands[0]
    ? highlighter.codeToHtml(commands[0].command, {
        lang: "bash",
        theme: "catppuccin-frappe",
        colorReplacements: {
          "#303446": "#0000"
        }
      })
    : ""

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
            <Balancer>
              The most comprehensive{" "}
              <span className="bg-gradient-to-t from-purple-600 to-purple-400 bg-clip-text text-transparent">
                financial library
              </span>{" "}
              for TypeScript.
            </Balancer>
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

              <code
                className="min-w-42 text-foreground/70"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <needs to be>
                dangerouslySetInnerHTML={{ __html: command }}
              />

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-foreground/50 hover:text-foreground"
                  asChild
                >
                  <Copy className="h-4 w-4 cursor-pointer text-foreground/50 transition-colors hover:text-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {commands.map((cmd) => (
                    <DropdownMenuItem
                      key={cmd.name}
                      onSelect={() => handleCopy(cmd)}
                    >
                      {cmd.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        </motion.div>

        {/* Code Editor */}
        <CodeBlock />
      </div>
    </section>
  )
}
