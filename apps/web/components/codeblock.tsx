"use client"

import { scaleIn } from "@/data/animations"
import { codeExample } from "@/lib/code-example"
import { highlighter } from "@/lib/highlighter"
import { Card, CardContent } from "@rivo-gg/ui/components/card"
import { Copy } from "lucide-react"
import { motion } from "motion/react"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { IbanInput } from "./iban-input"

export function CodeBlock() {
  const tokenizer = useCallback((str: string) => {
    const tokensResult = highlighter.codeToTokens(str, {
      lang: "typescript",
      theme: "catppuccin-frappe"
    })
    return tokensResult.tokens
  }, [])

  const [tokens, setTokens] = useState<
    Array<Array<{ content: string; color?: string | undefined }>>
  >(tokenizer(codeExample))

  useEffect(() => {
    setTokens(tokenizer(codeExample))
  }, [tokenizer])

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample)
    toast.success("Command copied to clipboard", {
      description: "You can now paste it in your terminal."
    })
  }

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scaleIn}
    >
      <Card className="mx-auto w-full max-w-82 gap-0 overflow-hidden border-input bg-background/40 py-0 backdrop-blur-sm md:mx-0 md:max-w-full">
        <div className="flex items-center justify-between border-input border-b bg-input/45 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <button
            type="button"
            className="flex items-center gap-1"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4 cursor-pointer text-foreground/50 hover:text-foreground" />
            <span className="sr-only">Copy code to clipboard</span>
          </button>
        </div>

        <CardContent className="relative flex flex-col p-0">
          <motion.div
            className="relative flex min-h-5 items-start md:min-h-[24px]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <pre className="w-full overflow-x-auto p-6 font-mono text-xs">
              <code className="w-full">
                {tokens.map((line, i) => (
                  <motion.div
                    key={`${i}-${line.map((t) => t.content).join("")}`}
                    className="flex min-h-5 w-full items-start md:min-h-[24px]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                  >
                    <span className="mr-4 w-8 flex-shrink-0 select-none text-right text-gray-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      {line.map((token, idx) => (
                        <span
                          key={idx}
                          style={{ color: token.color }}
                        >
                          {token.content}
                        </span>
                      ))}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </motion.div>
        </CardContent>
      </Card>

      <motion.div
        className="-translate-y-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IbanInput />
      </motion.div>
    </motion.div>
  )
}
